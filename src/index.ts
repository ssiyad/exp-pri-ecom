import bodyParser from "body-parser";
import express from "express";
import authRouter from "./auth";
import buyerRouter from "./buyer";
import _catch from "./middlewares/catch";

const app = express();
app.use(bodyParser.json())
app.use('/api/auth', authRouter);
app.use('/api/buyer', buyerRouter);
app.use(_catch)

app.listen(3000);

