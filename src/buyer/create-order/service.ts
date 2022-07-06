import { ValidationException } from "../../errors/validation";
import { prisma } from "../../prisma/client";
import { CreateOrderDto } from "./dto";

export async function listOfSellers(buyer_id: number, seller_id: number, data: CreateOrderDto) {
    const catalog = await prisma.catalog.findFirst({
        where: {
            user_id: seller_id,
        }
    });

    if (!catalog) {
        throw new ValidationException('missing catalog');
    }

    const products = await prisma.product.findMany({
        where: {
            id: {
                in: data.product_ids,
            },
        }
    });

    if (!products.length) {
        throw new ValidationException('empty product list');
    }

    return prisma.order.create({
        data: {
            buyer_id,
            seller_id,
            products: {
                connect: products,
            },
        }
    });
}

