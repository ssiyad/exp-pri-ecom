import { UnauthorizedException } from "../errors/unauthorized";

export function allowUserType(type: string) {
    return function inner(req: any, _res: any, next: any) {
        if (!req.user || req.user.type !== type) throw new UnauthorizedException();

        next();
    }
}

