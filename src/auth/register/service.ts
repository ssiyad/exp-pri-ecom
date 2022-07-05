import { genSaltSync, hashSync } from "bcrypt";
import { prisma } from "../../prisma/client";
import { RegisterDto } from "./dto";

export async function register (data: RegisterDto) {
    await prisma.user.findFirst({
        where: {
            username: data.username,
        }
    }).then((d) => { if (d) throw new Error('username already exists') })

    data.password = hashSync(data.password, genSaltSync());

    return prisma.user.create({
        data,
    });
}

