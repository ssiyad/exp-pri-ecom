import { Router } from "express";
import { register } from "./service";

const registerController = Router();

registerController.post('/register', async (req, res, next) => {
    try {
        res.json(await register(req.body));
    } catch (err) {
        next(err);
    }
})

export default registerController;

