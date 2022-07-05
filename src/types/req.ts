import { User } from "@prisma/client"

export type Request = Express.Request & {
    user?: User;
}

