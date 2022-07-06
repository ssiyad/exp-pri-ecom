import { prisma } from "../../prisma/client";

export async function sellerCatalog(user_id: number) {
    return prisma.catalog.findFirst({
        where: {
            user_id,
        }
    });
}

