import { Router } from "express";
import { refreshToken } from "../controllers/auth/refreshToken";
import { requestPasswordReset } from "../controllers/auth/requestPasswordReset";
import { resetPassword } from "../controllers/auth/resetPassword";

const router: Router = Router();

router.post('/refresh', refreshToken);
router.post('/requestPasswordReset', requestPasswordReset);
router.post('/resetPassword', resetPassword);

export default router;
