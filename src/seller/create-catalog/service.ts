import { ValidationException } from "../../errors/validation";
import { prisma } from "../../prisma/client";
import { CatalogItem, CreateCatalogDto } from "./dto";

export async function orders(user_id: number, data: CreateCatalogDto) {
    if (!data.items || !data.items.length) {
        throw new ValidationException('empty list of items');
    }

    await prisma.catalog.update({
        where: {
            user_id,
        },
        data: {
            deleted: true,
        }
    });

    function create_item(item: CatalogItem) {
        return prisma.catalog.create({
            data: {
                user_id,
                name: item.name,
                price: item.price,
            },
        });
    }

    return data.items.map(create_item);
}

