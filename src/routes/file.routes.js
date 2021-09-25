import { Router } from "express";
const router = Router();

import * as fileCtrl from "../controllers/file.controller";
import { authJwt } from "../middlewares";


router.post("/upload", fileCtrl.postfile);


export default router;
