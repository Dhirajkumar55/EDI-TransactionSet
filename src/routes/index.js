import { Router } from "express";
import { getTransactionSet } from "../controllers/getTransactionSetController.js";
import { getAllTransactionSet } from "../controllers/getAllTransactionSetController.js";

const router = Router();

router.post('/transactionSet/get', getTransactionSet);
router.post('/transactionSet/getAll', getAllTransactionSet);

export default router;
