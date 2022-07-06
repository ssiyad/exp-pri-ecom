import { ValidationException } from "../../errors/validation";
import { prisma } from "../../prisma/client";
import { CreateOrderDto } from "./dto";

export async function listOfSellers(buyer_id: number, seller_id: number, data: CreateOrderDto) {
    if (!data.catalog_ids) {
        throw new ValidationException('empy catalog items');
    }

    const catalogs = await prisma.catalog.findMany({
        where: {
            id: {
                in: data.catalog_ids,
            },
            user_id: seller_id,
            deleted: false,
        }
    });

    if (!catalogs.length) {
        throw new ValidationException('empy catalog items');
    }

    return prisma.order.create({
        data: {
            buyer_id,
            seller_id,
            catalogs: {
                connect: catalogs,
            }
        }
    });
}

