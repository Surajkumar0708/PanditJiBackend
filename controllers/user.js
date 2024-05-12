import { VisitedUser } from "../models/user.js";
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
