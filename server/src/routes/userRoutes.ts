import { Router } from "express";
import { userSignUp } from "../controllers/user/userSignUp";

const router: Router = Router();

router.post('/sign-up', userSignUp);

export default router;
