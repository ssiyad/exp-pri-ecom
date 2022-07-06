import { Router } from "express";
import { jwt } from "../middlewares/token";
import { allowUserType } from "../middlewares/user-type";
import createOrderController from "./create-order/controller";
import listOfSellersController from "./list-of-sellers/controller";
import sellerCatalogController from "./seller-catalog/controller";

const buyerRouter = Router();
buyerRouter.use(jwt);
buyerRouter.use(allowUserType('buyer'));
buyerRouter.use(listOfSellersController);
buyerRouter.use(sellerCatalogController);
buyerRouter.use(createOrderController);

export default buyerRouter;

