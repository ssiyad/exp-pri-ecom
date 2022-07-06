import { Router } from "express";
import { jwt } from "../middlewares/token";
import listOfSellersController from "./list-of-sellers/controller";
import sellerCatalogController from "./seller-catalog/controller";

const buyerRouter = Router();
buyerRouter.use(jwt);
buyerRouter.use(listOfSellersController);
buyerRouter.use(sellerCatalogController);

export default buyerRouter;

