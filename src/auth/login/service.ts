import { compareSync } from "bcrypt";
import jwt from 'jsonwebtoken';
import { UnauthorizedException } from "../../errors/unauthorized";
import secret from "../../misc/jwt-secret";
import { prisma } from "../../prisma/client";
import { JwtData } from "../../types/jwt";
import { LoginDto } from "./dto";

function sign(d: JwtData) {
    return jwt.sign(d, secret);
}

export async function login(data: LoginDto) {
    const user = await prisma.user.findFirst({
        where: {
            username: data.username,
        }
    })

    if (!user || !compareSync(data.password, user.password)) throw new UnauthorizedException();

    return {
        token: sign({
            id: user.id,
        }),
    };
}

