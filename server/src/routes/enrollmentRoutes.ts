import { authenticateToken } from './../middleware/authentication';
import { Router } from "express";
import { userCheckout } from "../controllers/enrollment/enrollUserToCourse";
import { getAllUserCourses } from "../controllers/enrollment/getAllUserCourses";
import { unenrollUserFromCourse } from '../controllers/enrollment/unenrollUserToCourse';
import { getAllEnrollments } from '../controllers/enrollment/getAllEnrollments';

const router: Router = Router();

router.post('/checkout', authenticateToken, userCheckout);
router.post('/unenroll', authenticateToken, unenrollUserFromCourse);
router.get('/getAllUserCourses', getAllUserCourses);
router.get('/getAllEnrollments', getAllEnrollments);

export default router;
