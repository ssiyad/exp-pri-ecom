import { Router } from "express";
import { sellerCatalog } from "./service";

const sellerCatalogController = Router();

sellerCatalogController.get('/seller-catalog/:seller_id', async (req: any, res, next) => {
    try {
        res.json(await sellerCatalog(+req.params.seller_id));
    } catch (err) {
        next(err);
    }
})

export default sellerCatalogController;

