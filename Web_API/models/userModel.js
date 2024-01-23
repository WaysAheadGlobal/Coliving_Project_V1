// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

// Function to signup a user
async function updateUserProfile(userid, Fullname, email, mobileno, city, province, zipcode, profilepic, address, communityType, country) {
  try {
    const [result] = await db.query(
      "UPDATE users SET Fullname = ?, email=?, mobileno=?, city=?, province=?, zipcode=?, profilepic=?, address=?, communityType=?, country=? where user_id=?",
      [Fullname, email, mobileno, city, province, zipcode, profilepic,address,communityType,country,  userid]
    );
    return result;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userid) {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [
        userid
      ]);
      console.log('rows------>',rows)
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function checkUserFillPersonalDetail(userid) {
    try {
      const [rows] = await db.query("SELECT * FROM userdetails WHERE user_id = ?", [
        userid
      ]);
      
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function checkUserFillPropertyDetail(userid) {
    try {
      const [rows] = await db.query("SELECT * FROM propertymaster WHERE user_id = ?", [
        userid
      ]);
      
      return rows;
    } catch (error) {
      throw error;
    }
  }


  async function UpdatePersonalDetails(req) {
    try {
      const { Fullname, email, mobileNo, communityType, address, city, province, ZipCode,
        country, userType, profilePic, gender, DateOfBirth, maritalstatus, idproof, language, community, 
        domain, universitydetails, universityidproof, sleepinghabits_from, sleepinghabits_to, dietarypreference,
        householdchores, doyoucook, smoke, drink
        , cannabits, telluswhymoving, userdetailscol, sizeofroom, bedroom, bathroom, closetinside, fullyfurnished, howmanyfan, howmanylights
        , outsidelocks, parking, backpatio, frontpatio, evchargeravailable, swimmingpool, budget, languagepreference,
        coed, agegrouppreference, communication
        , roommate_dietarypreference, roommate_sharehouseholdchores, roommate_drinkingcomfort, roommate_smokingcomfort, roommate_cannabitscomfort} =
          req.body;
          const userid = req.user.userId;

          updateUserProfile(userid, Fullname, email, mobileNo, city, province, ZipCode, profilePic, address, communityType, country);

          const [rows] = await db.query("SELECT * FROM userdetails WHERE user_id = ?", [
            userid
          ]);
          console.log('rows', rows.length)
          console.log('req.body', req.body)
        
          if(rows.length == 0){
      const [result] = await db.query(
        "INSERT INTO userdetails (user_id, gender, DateOfBirth, maritalstatus, idproof, language, community,"+ 
          "domain, universitydetails, universityidproof, sleepinghabits_from, sleepinghabits_to, dietarypreference,"+ 
          "householdchores, doyoucook, smoke, drink"+ 
          ", cannabits, telluswhymoving, userdetailscol, sizeofroom, bedroom, bathroom, closetinside, fullyfurnished, howmanyfan, howmanylights"+ 
          ", outsidelocks, parking, backpatio, frontpatio, evchargeravailable, swimmingpool, budget, languagepreference,"+ 
          "coed, agegrouppreference, communication"+ 
          ", roommate_dietarypreference, roommate_sharehouseholdchores, roommate_drinkingcomfort, roommate_smokingcomfort, roommate_cannabitscomfort) "+
          "values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)", 
        [userid,gender, DateOfBirth, maritalstatus, idproof, language, community,
        domain, universitydetails, universityidproof, sleepinghabits_from, sleepinghabits_to, dietarypreference,
        householdchores, doyoucook, smoke, drink
        , cannabits, telluswhymoving, userdetailscol, sizeofroom, bedroom, bathroom, closetinside, fullyfurnished, howmanyfan, howmanylights
        , outsidelocks, parking, backpatio, frontpatio, evchargeravailable, swimmingpool, budget, languagepreference,
        coed, agegrouppreference, communication
        , roommate_dietarypreference, roommate_sharehouseholdchores, roommate_drinkingcomfort, roommate_smokingcomfort, roommate_cannabitscomfort]
      );
      
      return result;
        }
        else{
          const [result] = await db.query(
            "UPDATE userdetails SET gender=?, DateOfBirth=?, maritalstatus=?, idproof=?, language=?, community=?,"+ 
              "domain=?, universitydetails=?, universityidproof=?, sleepinghabits_from=?, sleepinghabits_to=?, dietarypreference=?,"+ 
              "householdchores=?, doyoucook=?, smoke=?, drink=?"+ 
              ", cannabits=?, telluswhymoving=?, userdetailscol=?, sizeofroom=?, bedroom=?, bathroom=?, closetinside=?, fullyfurnished=?, howmanyfan=?, howmanylights=?"+ 
              ", outsidelocks=?, parking=?, backpatio=?, frontpatio=?, evchargeravailable=?, swimmingpool=?, budget=?, languagepreference=?,"+ 
              "coed=?, agegrouppreference=?, communication=?"+ 
              ", roommate_dietarypreference=?, roommate_sharehouseholdchores=?, roommate_drinkingcomfort=?, roommate_smokingcomfort=?, roommate_cannabitscomfort=? WHERE user_id=?",
            [gender, DateOfBirth, maritalstatus, idproof, language, community,
            domain, universitydetails, universityidproof, sleepinghabits_from, sleepinghabits_to, dietarypreference,
            householdchores, doyoucook, smoke, drink
            , cannabits, telluswhymoving, userdetailscol, sizeofroom, bedroom, bathroom, closetinside, fullyfurnished, howmanyfan, howmanylights
            , outsidelocks, parking, backpatio, frontpatio, evchargeravailable, swimmingpool, budget, languagepreference,
            coed, agegrouppreference, communication
            , roommate_dietarypreference, roommate_sharehouseholdchores, roommate_drinkingcomfort, roommate_smokingcomfort, roommate_cannabitscomfort, userid]
          );
          return result;
        }
    } catch (error) {
      throw error;
    }
  }

  async function getAllUsers() {
    try {
      const [rows] = await db.query("SELECT * FROM colivingappdb.users a join userdetails b on a.user_id = b.user_id where a.isdeleted = 0 order by a.user_id desc");
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getUsersByIDForAdmin(user_id) {
    try {
      const [rows] = await db.query("SELECT * FROM users where user_id=?", [user_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getUserDetailByIDForAdmin(user_id) {
    try {
      const [rows] = await db.query("SELECT * FROM userdetails where user_id=?", [user_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function updateIdProofDocument(userid, status, remarks) {
    console.log('asd')
    try {
      const [result] = await db.query(
        "UPDATE userdetails set idproofstatus=?, idproofremark=? where user_id=?",
        [status, remarks, userid]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async function updateUniversityIdProofDocument(userid, status, remarks) {
    try {
      const [result] = await db.query(
        "UPDATE userdetails set universityidstatus=?, universityidremarks=? where user_id=?",
        [status, remarks, userid]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async function updateUserStatus(userid, status) {
    try {
      const [result] = await db.query(
        "UPDATE users set status=? where user_id=?",
        [status, userid]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
  async function DeleteUser(userid) {
    try {
      const [result] = await db.query(
        "UPDATE users set Isdeleted=1 where user_id=?",
        [userid]
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  async function getMyNotifications(req) {
    try {
      const user_id = req.user.userId;
  
      let query = `
      SELECT * FROM user_notifications where user_id = ? ORDER BY id desc`;
      
      // Create an array to store the parameters for the query
      const params = [];
      params.push(user_id);
      
      const [result] = await db.query(query, params);
      return result;
  
    } catch (error) {
      throw error;
    }
  }

module.exports = {
    updateUserProfile,
    getUserById,
    UpdatePersonalDetails,
    checkUserFillPersonalDetail,
    checkUserFillPropertyDetail,
    getAllUsers,
    getUsersByIDForAdmin,
    getUserDetailByIDForAdmin,
    updateIdProofDocument,
    updateUniversityIdProofDocument,
    updateUserStatus,
    DeleteUser,
    getMyNotifications
  };
  