import { Router } from "express";
import { ValidationException } from "../../errors/validation";
import { orders } from "./service";

const createCatalogController = Router();

createCatalogController.post('/create-catalog', async (req: any, res, next) => {
    try {
        const user_id = parseInt(req.user.id);

        if (!user_id) {
            throw new ValidationException('invalid seller');
        }

        res.json(await orders(user_id, req.body));
    } catch (err) {
        next(err);
    }
})

export default createCatalogController;

