import { Router } from "express";
import { handleContactUs } from "../controllers/contact/handleContactUs";

const router: Router = Router();

router.post('/submit', handleContactUs);

export default router;
