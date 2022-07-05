import { Router } from "express";
import { listOfSellers } from "./service";

const listOfSellersController = Router();

listOfSellersController.get('/list-of-sellers', async (req: any, res, next) => {
    try {
        res.json(await listOfSellers(req.query));
    } catch (err) {
        next(err);
    }
})

export default listOfSellersController;

