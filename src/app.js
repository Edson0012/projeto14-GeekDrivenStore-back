import express from "express"
import cors from "cors";
import dotenv from "dotenv";
import authRouter from './routers/authRouter.js';
import productRouter from "./routers/productRouter.js";

dotenv.config();
const app = express();
app.use(cors())
app.use(express.json())

app.use(authRouter);
app.use(productRouter);

export default app;