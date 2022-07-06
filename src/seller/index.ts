import { Router } from "express";
import { jwt } from "../middlewares/token";
import { allowUserType } from "../middlewares/user-type";
import createCatalogController from "./create-catalog/controller";
import ordersController from "./orders/controller";

const sellerRouter = Router();
sellerRouter.use(jwt);
sellerRouter.use(allowUserType('seller'));
sellerRouter.use(ordersController);
sellerRouter.use(createCatalogController);

export default sellerRouter;

