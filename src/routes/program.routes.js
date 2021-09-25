import { Router } from "express";
const router = Router();

import * as programCtrl from "../controllers/program.controller";
import { authJwt } from "../middlewares";

router.get("/", programCtrl.getProgram);

router.get("/:programId", programCtrl.getProgramById);

router.post(
  "/",
  programCtrl.createProgram
);

router.put(
  "/:programId",
  [authJwt.verifyToken, authJwt.isModerator],
  programCtrl.updateProgramById
);

router.delete(
  "/:programId",
  [authJwt.verifyToken, authJwt.isAdmin],
  programCtrl.deleteProductById
);

export default router;
