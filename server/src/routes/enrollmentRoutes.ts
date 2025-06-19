import { authenticateToken } from './../middleware/authentication';
import { Router } from "express";
import { userCheckout } from "../controllers/enrollment/enrollUserToCourse";
import { getAllUserCourses } from "../controllers/enrollment/getAllUserCourses";
import { unenrollUserFromCourse } from '../controllers/enrollment/unenrollUserToCourse';
import { getAllEnrollments } from '../controllers/enrollment/getAllEnrollments';
import { getAvailableTimeSlots } from '../controllers/enrollment/getAvailableTimeSlots';

const router: Router = Router();

router.post('/checkout', authenticateToken, userCheckout);
router.post('/unenroll', authenticateToken, unenrollUserFromCourse);
router.get('/getAllUserCourses', getAllUserCourses);
router.get('/getAllEnrollments', getAllEnrollments);
router.get('/getAvailableTimeSlots', getAvailableTimeSlots);

export default router;
