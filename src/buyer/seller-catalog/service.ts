import { prisma } from "../../prisma/client";

export async function sellerCatalog(user_id: number) {
    return prisma.catalog.findMany({
        where: {
            user_id,
        }
    });
}

