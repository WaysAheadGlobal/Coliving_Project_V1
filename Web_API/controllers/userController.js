const userModel = require("../models/userModel");
const sendMail = require("../utils/utils");

async function getUserProfile(req, res) {
    try {
      const {userid } = req.body;
  
      // Check if the email exists
      const getUserDetail = await userModel.getUserById(userid);
      
      res
        .status(200)
        .json({ message: "", userinfo: getUserDetail, status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function updateUserProfile(req, res) {
    try {
      const {userid, Fullname, email, mobileno, city, province, zipcode, profilepic } =
        req.body;
  
      // Check if the email exists
      const getUserDetail = await userModel.updateUserProfile(userid, Fullname, email, mobileno, city, province, zipcode, profilepic, '', 0, 0);
      
      res
        .status(200)
        .json({ message: "Profile Updated Successfully.", getUserDetail, status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function saveUpdatePersonalDetails(req, res) {
    try {
      
  
      // Check if the email exists
      const getUserDetail = await userModel.UpdatePersonalDetails(req);
      
      res
        .status(200)
        .json({ message: "Profile Updated Successfully.", getUserDetail, status: 200 });
    } catch (error) {
      console.error("Error during Profile Update:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function GetAllUsers(req, res) {
    try {
      
  
      // Check if the email exists
      const getUserDetail = await userModel.getAllUsers();
      
      res
        .status(200)
        .json({ message: "Users fetched!!!", users: getUserDetail, status: 200 });
    } catch (error) {
      console.error("Error during getAllUsers:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function GetUserDetailById(req, res) {
    try {
      
      const {user_id} = req.body;
      // Check if the email exists
      const userinfo = await userModel.getUsersByIDForAdmin(user_id);
      const userDetailinfo = await userModel.getUserDetailByIDForAdmin(user_id);
      
      res
        .status(200)
        .json({ message: "Users fetched!!!", user: userinfo, detail: userDetailinfo, status: 200 });
    } catch (error) {
      console.error("Error during userinfo:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function updateIDProofDocument(req, res) {
    try {
      
      const {user_id, status, remarks} = req.body;
      // Check if the email exists
      await userModel.updateIdProofDocument(user_id, status, remarks);
      
      res
        .status(200)
        .json({ message: "Document updated!!", status: 200 });
    } catch (error) {
      console.error("Error during Document update:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function updateUniveristyIDProofDocument(req, res) {
    try {
      
      const {user_id, status, remarks} = req.body;
      // Check if the email exists
      await userModel.updateUniversityIdProofDocument(user_id, status, remarks);
      
      res
        .status(200)
        .json({ message: "Document updated!!", status: 200 });
    } catch (error) {
      console.error("Error during Document update:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function updateUserStatus(req, res) {
    try {
      
      const {user_id, status} = req.body;
      // Check if the email exists
      await userModel.updateUserStatus(user_id,status);
      
      res
        .status(200)
        .json({ message: "Document updated!!", status: 200 });
    } catch (error) {
      console.error("Error during user update:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function DeleteUser(req, res) {
    try {
      
      const {user_id} = req.body;
      // Check if the email exists
      await userModel.DeleteUser(user_id);
      
      res
        .status(200)
        .json({ message: "User deleted !!", status: 200 });
    } catch (error) {
      console.error("Error during User delete", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }
  
module.exports = {
    getUserProfile,
    updateUserProfile,
    saveUpdatePersonalDetails,
    GetAllUsers,
    GetUserDetailById,
    updateIDProofDocument,
    updateUniveristyIDProofDocument,
    updateUserStatus,
    DeleteUser
  };
  