const express = require("express")
const router = express.Router();
router.use(express.json());

const getUsers = async (req, res) => {
  try {
    //fetch users from DB;
    if (!users)
      return res.status(404).json({ status: 404, data: "No user found" });
    res.json({ status: 200, data: rows });
  } catch (error) {
    res.status(500).send("Error occured, please try again");
  }
};

const getUser = async (req, res) => {
  try {
    //fetch user by userId;
    if (!user)
      return res.status(404).json({status: 404, data: "User with Specified ID not found"});
    res.json({status:200, data:rows[0]});
  } catch (error) {
    console.log(error);
    res.status(500).send("Error Occured, Please try again");
  }
};

module.exports = { getUsers, getUser };