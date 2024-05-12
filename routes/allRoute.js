import express from "express";
import { getVisitedUser, setVisitedUser } from "../controllers/user.js";

const router = express.Router();

// Paths
router.post("/userDetails", setVisitedUser);
router.get("/userDetails", getVisitedUser);
export default router;
