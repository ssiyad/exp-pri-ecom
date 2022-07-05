import { Router } from "express";
import { login } from "./service";

const loginController = Router();

loginController.post('/login', async (req, res, next) => {
    try {
        res.json(await login(req.body));
    } catch (err) {
        next(err);
    }
})

export default loginController;

