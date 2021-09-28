import { Router } from "express";
const router = Router();

import * as fileCtrl from "../controllers/file.controller";
import { authJwt } from "../middlewares";


router.get("/", fileCtrl.getListFiles);

router.get("/:name", fileCtrl.download);

export default router;
