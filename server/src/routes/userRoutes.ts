import { Router } from "express";
import { userSignUp } from "../controllers/user/userSignUp";
import { userSignIn } from "../controllers/user/userSignIn";
import { userSignOut } from "../controllers/user/userSignOut";
import { currentUser } from "../controllers/user/currentUser";

const router: Router = Router();

router.post('/sign-up', userSignUp);
router.post('/sign-in', userSignIn);
router.post('/sign-out', userSignOut);
router.get('/getCurrentUser', currentUser);
router.get('/auth')

export default router;
