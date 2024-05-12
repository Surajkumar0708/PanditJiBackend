import express from "express";
import {
  getVisitedUser,
  sendMsgToWhatsApp,
  setVisitedUser,
} from "../controllers/user.js";

const router = express.Router();

// Paths
router.post("/userDetails", setVisitedUser);
router.get("/userDetails", getVisitedUser);
router.get("/sendmessage", sendMsgToWhatsApp);
export default router;
