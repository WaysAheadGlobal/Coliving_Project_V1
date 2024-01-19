// controllers/authController.js
const authModel = require("../models/authModel");
const userModel = require("../models/userModel");
const sendMail = require("../utils/utils");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRATION } = process.env;

async function signup(req, res) {
  try {
    const { Fullname, email, mobileNo, communityType, userType } =
      req.body;

    // Check if fields  are not  provided

    if (!Fullname) {
      return res
        .status(400)
        .json({ message: "Name are required", status: 400 });
    }

    if (!email) {
      return res
        .status(400)
        .json({ message: "Email are required", status: 400 });
    }

    if (!mobileNo) {
      return res
        .status(400)
        .json({ message: "Mobile number are required", status: 400 });
    }

    if (!communityType) {
      return res
        .status(400)
        .json({ message: "Community Type are required", status: 400 });
    }

    if (!userType) {
      return res
        .status(400)
        .json({ message: "User Type are required", status: 400 });
    }

    // Check if the email exists
    const getUserDetail = await authModel.getUserByEmail(email);
    if (getUserDetail.length > 0) {
      return res.status(401).json({ message: "Email already exists" });
    }
    const otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);
    const users = await authModel.signupUser(
      Fullname,
      email,
      mobileNo,
      communityType,
      userType,
      otp
    );
    if (!users) {
      return res.status(401).json({ message: "Smothing went wrong!" });
    }

    let emailRes = await sendMail.sendOtpEmail(email, otp, Fullname);

    res
      .status(200)
      .json({ message: "OTP sent to registered email address.", users, status: 200 });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
}
async function login(req, res) {
  const { email, otp } = req.body;

  try {
    // Check if email and OTP are provided
    if (!email || !otp) {
      return res
        .status(400)
        .json({ message: "Email and OTP are required", status: 400 });
    }

    // Retrieve user by email
    const users = await authModel.getUserByEmail(email);

    // Check if the user exists
    if (!users || users.length === 0) {
      return res.status(401).json({ message: "Invalid email or OTP" });
    }

    // Assuming there is only one user with the provided email
    const user = users[0];
    const checkuserPersonalDetailsFills = await userModel.checkUserFillPersonalDetail(user.user_id);
    const checkuserPropertyFill = await userModel.checkUserFillPropertyDetail(user.user_id);
    const IsDetailsFill = checkuserPersonalDetailsFills.length == 0 ? false : true;
    const IsPropertyFill = checkuserPropertyFill.length == 0 ? false : true;

    // Check if OTP is valid (you need to implement this logic)
    const isOtpValid = await authModel.verifyOtp(otp, user.otp); // Assuming you have a function for OTP verification

    if (!isOtpValid) {
      return res
        .status(401)
        .json({ message: "Invalid email or OTP", status: 401 });
    }

    // Check the role type
    // if (user.user_type !== "user" || user.user_type !== "property-owner") {
    //   return res.status(403).json({
    //     message: "Permission denied. Only User or Property owner can login",
    //     status: 403,
    //   });
    // }

    // Assuming there's a flag field indicating user status
    // if (user.status !== 1) {
    //   return res.status(403).json({ message: "Account is not active" });
    // }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user.user_id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );

    // Save the token into the user's record in the database with 1 day expiry as a VARCHAR time string
    const expiryTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // Convert to time string
    await authModel.saveToken(user.user_id, token, expiryTime);

    // Retrieve user by email
    const users1 = await authModel.getUserByEmail(email);

    // Check if the user exists
    if (!users || users.length === 0) {
      return res.status(401).json({ message: "Invalid email or OTP" });
    }

    // Assuming there is only one user with the provided email
    const user1 = users1[0];
    res.status(200).json({ message: "Login successful", user1, IsDetailsFill: IsDetailsFill,IsPropertyFill: IsPropertyFill,  status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
}

async function logout(req, res) {
  const token = req.headers.authorization;

  try {
    // Check if the token is provided
    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided", status: 401 });
    }

    // Verify and decode the token
    const decodedToken = jwt.verify(token, JWT_SECRET);

    console.log(decodedToken.userId);

    // Clear the token from the database
    await authModel.clearToken(decodedToken.userId);

    res.status(200).json({ message: "Logout successfully", status: 200 });
  } catch (error) {
    console.error("Error during logout:", error);

    if (error.name === "JsonWebTokenError") {
      return res
        .status(401)
        .json({ message: "Unauthorized: Invalid token", status: 401 });
    }

    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
}

async function signupOTPVerify(req, res) {
  try {
    const { userid, userotp } =
      req.body;

    // Check if fields  are not  provided

    if (!userid) {
      return res
        .status(400)
        .json({ message: "User Id is required", status: 400 });
    }

    if (!userotp) {
      return res
        .status(400)
        .json({ message: "OTP is required", status: 400 });
    }

    // Check if the email exists
    const getUserDetail = await authModel.getUserOTP(userid, userotp);

    if (getUserDetail == 0) {
      res
        .status(200)
        .json({ message: "failure", getUserDetail, status: 400 });
    }
    else {
      await authModel.updateUserOTP(userid, 0);
      await authModel.updateUserStatus(userid, 1);
    }
    const users = await userModel.getUsersByIDForAdmin(userid);
    const token = jwt.sign(
      { userId: users[0].user_id, email: users[0].email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRATION }
    );
    // Save the token into the user's record in the database with 1 day expiry as a VARCHAR time string
    const expiryTime = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(); // Convert to time string
    await authModel.saveToken(users[0].user_id, token, expiryTime);
const usr = users[0];
    const checkuserPersonalDetailsFills = await userModel.checkUserFillPersonalDetail(usr.user_id);
    const checkuserPropertyFill = await userModel.checkUserFillPropertyDetail(usr.user_id);
    const IsDetailsFill = checkuserPersonalDetailsFills.length == 0 ? false : true;
    const IsPropertyFill = checkuserPropertyFill.length == 0 ? false : true;
    const users1 = await authModel.getUserByEmail(users[0].email);
    const user1 = users1[0];
    res.status(200).json({ message: "Login successful", user1, IsDetailsFill: IsDetailsFill,IsPropertyFill: IsPropertyFill,  status: 200 });
  } catch (error) {
    console.error("Error during verify OTP:", error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
}

async function checkUser(req, res) {
  const { email, usertype } = req.body;

  try {
    // Check if email and OTP are provided
    if (!email) {
      return res
        .status(400)
        .json({ message: "Email is required", status: 400 });
    }

    // Retrieve user by email
    const users = await authModel.getUserByEmailAndType(email, usertype);

    // Check if the user exists
    if (!users || users.length === 0) {
      return res.status(200).json({ message: "Invalid email", status: 400 });
    }


    // Assuming there is only one user with the provided email
    const user = users[0];
    const otp = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000);

    let emailRes = await sendMail.sendLoginOtp(email, otp, user.Fullname);
    await authModel.updateUserOTP(user.user_id, otp)


    res.status(200).json({ message: "OTP Sent on registered email", user, status: 200 });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Internal Server Error", status: 500 });
  }
}

module.exports = {
  signup,
  login,
  logout,
  signupOTPVerify,
  checkUser
};
