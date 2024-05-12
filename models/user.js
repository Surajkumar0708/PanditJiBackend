import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    place: {
      type: String,
      trim: true,
    },
    contactNumber: { type: Number },
  },
  { timestamps: true }
);

export const VisitedUser = mongoose.model("VisitedUser", userSchema);
