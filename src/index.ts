import bodyParser from "body-parser";
import express from "express";
import authRouter from "./auth";
import _catch from "./middlewares/catch";

const app = express();
app.use(bodyParser.json())
app.use('/api/auth', authRouter);
app.use(_catch)

app.listen(3000);

