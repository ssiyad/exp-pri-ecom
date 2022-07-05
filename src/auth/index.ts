import { Router } from "express";
import registerController from "./register/controller";

const authRouter = Router();
authRouter.use(registerController);

export default authRouter;

