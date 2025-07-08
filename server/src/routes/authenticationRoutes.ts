import { Router } from "express";
import { refreshToken } from "../controllers/auth/refreshToken";
import { requestPasswordReset } from "../controllers/auth/requestPasswordReset";
import { resetPassword } from "../controllers/auth/resetPassword";
import { initialiseAuthentication } from "../controllers/auth/initialiseAuthentication";
import { createToken } from "../controllers/auth/createToken";

const router: Router = Router();

router.get('/init', initialiseAuthentication);
router.get('/createToken', createToken);
router.post('/refresh', refreshToken);
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/resetPassword', resetPassword);

export default router;
