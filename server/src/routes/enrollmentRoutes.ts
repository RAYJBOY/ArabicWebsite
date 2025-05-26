import { Router } from "express";
import { userCheckout } from "../controllers/enrollment/enrollUserToCourse";
import { getAllUserCourses } from "../controllers/enrollment/getAllUserCourses";
import { handleStripeWebhooks } from "../services/webhooks/handleStripeWebhooks";
import bodyParser from "body-parser";

const router: Router = Router();

router.post('/checkout', userCheckout);
router.get('/getAllUserCourses', getAllUserCourses);

export default router;
