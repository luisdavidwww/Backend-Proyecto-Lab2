import { Router } from "express";
const router = Router();

import * as pensumCtrl from "../controllers/pensum.controller";
import upload from "../middlewares/upload";
import { authJwt } from "../middlewares";

router.get("/", pensumCtrl.getPensum);

router.get("/:pensumId", pensumCtrl.getPensumById);

//[authJwt.verifyToken, authJwt.isModerator],

router.post(
  "/",
  //[authJwt.verifyToken],
  pensumCtrl.createPensum
);

router.put(
  "/:pensumId",
  //[authJwt.verifyToken, authJwt.isModerator],
  pensumCtrl.updatePensumById
);

router.delete(
  "/:pensumId",
  //[authJwt.verifyToken, authJwt.isAdmin],
  pensumCtrl.deletePensumById
);

router.post('/upload', upload, pensumCtrl.updatepdf);


export default router;