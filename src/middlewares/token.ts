import jwt_func from 'jsonwebtoken';
import { UnauthorizedException } from "../errors/unauthorized";
import secret from '../misc/jwt-secret';
import { prisma } from "../prisma/client";
import { JwtData } from '../types/jwt';

export async function jwt(req: any, res: any, next: any) {
    try {
        const header = req.headers.authorization;
        const bearer = 'Bearer ';

        if (!header || !header.startsWith(bearer)) {
            throw new UnauthorizedException();
        }

        const token = header.replace(bearer, '');
        const secretKey = secret;

        const decoded = jwt_func.verify(token, secretKey) as JwtData;

        if (!decoded.id) throw new UnauthorizedException();

        req.user = await prisma.user.findFirst({
            where: {
                id: decoded.id,
            }
        });

        if (!req.user) throw new UnauthorizedException();

        next();
    } catch (e) {
        next(e);
    }
}

