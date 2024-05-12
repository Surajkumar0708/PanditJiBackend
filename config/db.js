import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://srjthakur9:BMw0SXC6c8brs0CQ@apnabazaar.favbtxz.mongodb.net/PanditJi"
    );
  } catch (e) {
    console.log(e);
  }
};
