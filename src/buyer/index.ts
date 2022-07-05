import { Router } from "express";
import { jwt } from "../middlewares/token";
import listOfSellersController from "./list-of-sellers/controller";

const buyerRouter = Router();
buyerRouter.use(jwt);
buyerRouter.use(listOfSellersController);

export default buyerRouter;

