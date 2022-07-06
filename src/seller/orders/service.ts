import { Prisma } from "@prisma/client";
import { prisma } from "../../prisma/client";
import { OrdersDto } from "./dto";

export async function orders(user_id: number, data: OrdersDto) {
    const args: Prisma.OrderFindManyArgs = {}

    if (data && data.page && data.limit) {
        args.skip = (data.page - 1) * data.limit;
        args.take = data.limit;
    }

    args.where = {
        seller_id: user_id,
    }

    return prisma.order.findMany(args);
}

