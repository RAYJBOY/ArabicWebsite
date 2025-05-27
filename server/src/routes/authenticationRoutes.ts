import { Router } from "express";
import { refreshToken } from "../controllers/auth/refreshToken";

const router: Router = Router();

router.post('/refresh', refreshToken);

export default router;
