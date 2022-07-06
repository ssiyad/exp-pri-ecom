import { Router } from "express";
import { ValidationException } from "../../errors/validation";
import { orders } from "./service";

const ordersController = Router();

ordersController.get('/orders', async (req: any, res, next) => {
    try {
        const user_id = parseInt(req.user.id);

        if (!user_id) {
            throw new ValidationException('invalid buyer');
        }

        res.json(await orders(user_id, req.params));
    } catch (err) {
        next(err);
    }
})

export default ordersController;

