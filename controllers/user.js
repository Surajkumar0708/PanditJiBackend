import { VisitedUser } from "../models/user.js";
import wbm from "wbm";

export const setVisitedUser = async (req, res) => {
  try {
    const userDetails = req.body;
    await VisitedUser.create(userDetails);
    return res.status(500).send({
      success: true,
      message: `${userDetails?.name}Item is successfully saved`,
    });
  } catch (e) {
    console.log("====== error", e);
  }
};
export const getVisitedUser = async (req, res) => {
  try {
    const userList = await VisitedUser.find();
    return res.status(500).send({
      success: true,
      userList,
    });
  } catch (e) {
    console.log("====== error", e);
  }
};

const msgSend = (user) => {
  const userContactNo = String(user.contactNumber);
  const phones = [userContactNo];
  const message = user.msg;
  wbm
    .start()
    .then(async () => {
      await wbm.send(phones, message);
      await wbm.end();
    })
    .catch((err) => console.log(err));
};

export const sendMsgToWhatsApp = async (req, res) => {
  try {
    const user = req.body;
    await msgSend(user);
    res.send({
      message: `msg sent to ${user?.contactNumber} successfully`,
    });
    console.log("========== msg console user", user);
  } catch (error) {
    console.log(error);
  }
};
