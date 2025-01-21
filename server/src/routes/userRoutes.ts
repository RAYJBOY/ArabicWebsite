import { Router } from "express";
import { userSignUp } from "../controllers/user/userSignUp";
import { userSignIn } from "../controllers/user/userSignIn";

const router: Router = Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);

export default router;
