import { Prisma } from '@prisma/client';
import { prisma } from "../../prisma/client";
import { ListOfSellersDto } from "./dto";

export async function listOfSellers(data: ListOfSellersDto) {
    const args: Prisma.UserFindManyArgs = {
        where: {
            type: 'seller',
        },
    }

    if (data.page && data.limit) {
        args.skip = (data.page - 1) * data.limit;
        args.take = +data.limit;
    }

    return prisma.user.findMany(args);
}

