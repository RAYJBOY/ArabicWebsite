import { authenticateToken } from './../middleware/authentication';
import { Router } from "express";
import { userCheckout } from "../controllers/enrollment/enrollUserToCourse";
import { getAllUserCourses } from "../controllers/enrollment/getAllUserCourses";

const router: Router = Router();

router.post('/checkout', authenticateToken, userCheckout);
router.get('/getAllUserCourses', getAllUserCourses);

export default router;
