import { Router } from "express";
import { GetProducts, CreatProduct } from "../controllers/productsController.js";

const router = Router();

router.get("/home", GetProducts);
router.post("/creatProducts", CreatProduct);

export default router;