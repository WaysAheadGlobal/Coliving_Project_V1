// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

// Function to signup a user
async function signupUser(Fullname, email, mobileNo, communityType, userType,otp) {
  try {
    const [result] = await db.query(
      "INSERT INTO users (Fullname, email, mobileNo, communityType, userType,otp, status) VALUES (?,?, ?, ?, ?, ?, 0)",
      [Fullname, email, mobileNo, communityType, userType,otp]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmail(email) {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ? and status = 1", [
      email,
    ]);
    console.log('rows------>',rows)
    return rows;
  } catch (error) {
    throw error;
  }
}

async function getUserOTP(userid, otp) {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE user_id = ? AND otp= ?", [
      userid, otp
    ]);
    console.log('rows------>',rows)
    return rows;
  } catch (error) {
    throw error;
  }
}


// Function to verify OTP
async function verifyOtp(otpProvided, storedOtp) {
  return otpProvided == storedOtp;
}

// Function to save a token to the user's record
async function saveToken(userId, token, expiry) {
  try {
    const query = "UPDATE users SET token = ?, expiry_at = ? WHERE user_id = ?";
    const params = [token, expiry, userId];
    const [result] = await db.query(query, params);
    return result;
  } catch (error) {
    throw error;
  }
}

async function isTokenValid(userId, token) {
  try {
    // Check if the provided token is still valid for the user
    const [rows] = await db.query(
      "SELECT user_id FROM users WHERE user_id = ? AND token = ?",
      [userId, token]
    );
    return rows.length > 0;
  } catch (error) {
    throw error;
  }
}

async function clearToken(userId) {
  try {
    // Clear the token for the user in the database
    const query =
      "UPDATE users SET token = NULL, expiry_at = NULL WHERE user_id = ?";
    const params = [userId];
    const [result] = await db.query(query, params);
    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserByEmailAndType(email, type) {
  try {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ? and status = 1 and userType = ?", [
      email, type
    ]);
    console.log('rows------>',rows)
    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateUserOTP(id, otp) {
  try {
    const [rows] = await db.query("UPDATE users SET otp = ? WHERE user_id = ?", [
      otp, id
    ]);
    console.log('rows------>',rows)
    return rows;
  } catch (error) {
    throw error;
  }
}

async function updateUserStatus(id, status) {
  try {
    const [rows] = await db.query("UPDATE users SET status = ? WHERE user_id = ?", [
      status, id
    ]);
    console.log('rows------>',rows)
    return rows;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  signupUser,
  getUserByEmail,
  verifyOtp,
  saveToken,
  isTokenValid,
  clearToken,
  getUserOTP,
  getUserByEmailAndType,
  updateUserOTP,
  updateUserStatus
};
