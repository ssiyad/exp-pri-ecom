import { Router } from "express";
import loginController from "./login/controller";
import registerController from "./register/controller";

const authRouter = Router();
authRouter.use(registerController);
authRouter.use(loginController);

export default authRouter;

