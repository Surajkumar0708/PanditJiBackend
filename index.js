import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/allRoute.js";
import { connectDB } from "./config/db.js";

const PORT = 8080;
connectDB();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/api/v1", router);
// app.get("/", (req, res) => {
//   console.log("======= api si orking");
//   return res.send({
//     message: "success",
//   });
// });

app.listen(PORT, () => {
  console.log("=========== server is running");
});
