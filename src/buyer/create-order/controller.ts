import { Router } from "express";
import { ValidationException } from "../../errors/validation";
import { listOfSellers } from "./service";

const createOrderController = Router();

createOrderController.post('/create-order/:seller_id', async (req: any, res, next) => {
    try {
        const buyer_id = req.user.id;
        const seller_id = req.params.seller_id;

        if (!buyer_id) {
            throw new ValidationException('invalid buyer');
        }

        if (!seller_id) {
            throw new ValidationException('invalid seller');
        }

        res.json(await listOfSellers(buyer_id, seller_id, req.body));
    } catch (err) {
        next(err);
    }
})

export default createOrderController;

