import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller";
import { verifySignup } from "../middlewares";
import { authJwt } from "../middlewares";

router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});

//registro
router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp
);

//inicio
router.post("/signin", authCtrl.signin);



//fin
//router.get('/logout',authCtrl.verifyToken);


//Ruta para la verificacion de token
router.get('/verify',[authJwt.verifyTokenn]);

export default router;
