import express from "express";
import authRouter from "./auth";
import buyerRouter from "./buyer";
import _catch from "./middlewares/catch";
import sellerRouter from "./seller";

const app = express();
app.use(express.json())
app.use('/api/auth', authRouter);
app.use('/api/buyer', buyerRouter);
app.use('/api/seller', sellerRouter);
app.use(_catch)

app.listen(3000);

