import { Router } from "express";
import { enrollUserToCourse } from "../controllers/enrollment/enrollUserToCourse";

const router: Router = Router();

router.post('/checkout', enrollUserToCourse);

export default router;
