import { Router } from "express";
const router = Router();

import * as pensumCtrl from "../controllers/pensum.controller";
import upload from "../middlewares/upload";
import { authJwt } from "../middlewares";

router.get("/", pensumCtrl.getPensum);

router.get("/:pensumId", pensumCtrl.getPensumById);

//[authJwt.verifyToken, authJwt.isModerator],

router.post(
  "/",upload.single('myFile'),
  //[authJwt.verifyToken],
  pensumCtrl.createPensum
);


router.put(
  "/:pensumId",
  //[authJwt.verifyToken, authJwt.isModerator],
  pensumCtrl.updatePensumById
);

router.delete(
  "/:pensumId",upload.single('myFile'),
  //[authJwt.verifyToken, authJwt.isAdmin],
  pensumCtrl.deletePensumById
);

export default router;