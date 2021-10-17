import { Router } from "express";
const router = Router();

import * as comisionCtrl from "../controllers/comision.controller";




router.get("/", comisionCtrl.getComision);

router.get("/:comisionId", comisionCtrl.getComisionById);

router.post("/",comisionCtrl.createComision);

router.post( "/:comisionId",comisionCtrl.updateComisionById);

router.delete("/:comisionId",comisionCtrl.deleteComisionById);


export default router;