import { Router } from "express";
import { jwt } from "../middlewares/token";
import ordersController from "./orders/controller";

const sellerRouter = Router();
sellerRouter.use(jwt);
sellerRouter.use(ordersController);

export default sellerRouter;

