import { Router } from "express";
import { userSignUp } from "../controllers/user/userSignUp";
import { userSignIn } from "../controllers/user/userSignIn";
import { getCurrentUser } from "../controllers/user/getCurrentUser";
import { userSignOut } from "../controllers/user/userSignOut";

const router: Router = Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);
router.post('/sign-out', userSignOut);
router.get('/getCurrentUser', getCurrentUser);
router.get('/auth')

export default router;
