import { Router } from "express";
import { handleStripeWebhooks } from "../services/webhooks/handleStripeWebhooks";
import bodyParser from "body-parser";

const router: Router = Router();

router.post(
  "/stripe",
  bodyParser.raw({ type: "application/json" }),
  handleStripeWebhooks
);

export default router;
