// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection
const commonModel = require("../models/commonModel");
const sendMail = require("../utils/utils");

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

      commonModel.AddUserNotifications(-1, "New User Registered on Co-Living");
      
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

  async function getPaymentsInfo(user_id) {
    try {
  
  
      const res = await db.query(
        "SELECT usr.Fullname, book.bookingfrom, book.bookingto, book.paymentmode, book.monthlyrent, book.amount, book.securitydeposit FROM userbooking book LEFT JOIN users usr on book.user_id = usr.user_id LEFT JOIN propertymaster prop on book.property_id = prop.id WHERE prop.user_id = ?",
        [user_id]
      );
      return res[0];
    } catch (error) {
      throw error;
    }
  }

  async function getmyStayRequest(user_id) {
    try {
  
  
      const res = await db.query(
        "SELECT distinct booking.id, u1.profilePic, u1.Fullname, prop.propertyname, u1.province, u1.communityType, booking.monthlyrent, booking.status FROM colivingappdb.userbooking booking "+
        "LEFT JOIN propertymaster prop on booking.property_id = prop.id "+
        "LEFT JOIN users u1 on booking.user_id = u1.user_id "+
        "LEFT JOIN userdetails det on u1.user_id = det.user_id "+
        "WHERE prop.user_id = ?",
        [user_id]
      );
      return res[0];
    } catch (error) {
      throw error;
    }
  }


  async function getUserByBookingId(booking_id) {
    try {
      const [rows] = await db.query("SELECT a1.* FROM users a1 LEFT JOIN userbooking b1 on a1.user_id = b1.user_id WHERE b1.id = ?", [
        booking_id
      ]);
      console.log('rows------>',rows)
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getUserDetailByBookingID(booking_id) {
    try {
      const [rows] = await db.query("SELECT a1.* FROM userdetails a1 LEFT JOIN userbooking b1 on a1.user_id = b1.user_id WHERE b1.id = ?", [booking_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getbookingPropertyInfo(booking_id) {
    try {
      const [rows] = await db.query("select prop.propertyphoto1, prop.propertyname, room.roomname, booking.monthlyrent, booking.securitydeposit,"+
      " booking.bookingfrom, booking.bookingto, room.roomtype, prop.province from userbooking booking"+
      " LEFT JOIN propertymaster prop on booking.property_id = prop.id"+
      " LEFT join property_roommaster room on booking.room_id = room.id"+
      " WHERE booking.id = ?"
      , [booking_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function getbookingPropertyStayUsersInfo(booking_id) {
    try {
      const [rows] = await db.query("select u1.Fullname, u1.profilepic, booking.bookingfrom, booking.bookingto, booking.isbookingconfirmed, booking.status,"+
      " detail.languagepreference, detail.coed, detail.agegrouppreference, detail.roommate_dietarypreference, "+
      " detail.roommate_sharehouseholdchores, detail.roommate_drinkingcomfort, detail.roommate_smokingcomfort, detail.roommate_cannabitscomfort "+
      " from userbooking booking"+
      " LEFT JOIN users u1 on booking.user_id = u1.user_id"+
      " LEFT JOIN userdetails detail on booking.user_id = detail.user_id"+
      " WHERE booking.id = ?"
      , [booking_id]);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async function updatePropertyStatus(property_id, status) {
    try {
      const [result] = await db.query(
        "UPDATE propertymaster set status=? where id=?",
        [status, property_id]
      );

      const [user] = await db.query(
        "Select * from propertymaster where id = ?",
        [property_id]
      );
      const userinfo = await getUsersByIDForAdmin(user[0].user_id);
      //sendUserApproveRejectEmail
      sendMail.sendPropertyOwnerApproveRejectEmail(userinfo[0].email, userinfo[0].Fullname, status == 1 ? "Approved & Live" : "Rejected");

      const [checkUser] = await db.query(
        "Select u1.user_id from users u1 LEFT JOIN propertymaster prop on u1.user_id = prop.user_id where prop.id=? and u1.status = 0",
        [property_id]
      );

      if(checkUser.length != 0)
      {
        const [result] = await db.query(
          "UPDATE Users set status=1 where user_id = (select user_id from propertymaster where id = ? limit 1)",
          [property_id]
        );
  
      }
      return result;
    } catch (error) {
      throw error;
    }
  }

  async function getAdminStayRequest() {
    try {
  
  
      const res = await db.query(
        "SELECT distinct booking.id, u1.profilePic, u1.Fullname, prop.propertyname, u1.province, u1.communityType, booking.monthlyrent FROM colivingappdb.userbooking booking "+
        "LEFT JOIN propertymaster prop on booking.property_id = prop.id "+
        "LEFT JOIN users u1 on booking.user_id = u1.user_id "+
        "LEFT JOIN userdetails det on u1.user_id = det.user_id "
      );
      return res[0];
    } catch (error) {
      throw error;
    }
  }

  async function getAdminNotifications(req) {
    try {
      let query = `
      SELECT * FROM user_notifications where user_id = -1 ORDER BY id desc`;
      
      const [result] = await db.query(query);
      return result;
  
    } catch (error) {
      throw error;
    }
  }

  async function ApproveRejectStayRequest(req) {
    try {
      const {booking_id, status} = req.body;
      let query = `
      UPDATE userbooking SET status = ?, isbookingconfirmed = ? where id=?`;
      
      const [result] = await db.query(query,[status,status, booking_id]);
      return result;
  
    } catch (error) {
      throw error;
    }
  }

  async function CheckBookingSTatus(req) {
    try {
      const {from_date, property_id, room_id} = req.body;
      console.log('from_date', from_date)
      console.log('property_id', property_id)
      console.log('room_id', room_id)
      let query = `
      select count(a.id) as bookingcount, c.maxresidants from userbooking a
      LEFT JOIN propertymaster b on a.property_id = b.id
      LEFT JOIN property_roommaster c on b.id = c.property_id where ? between bookingfrom and bookingto
      and a.property_id = ? and a.room_id = ?
      group by a.property_id`;
      
      const [result] = await db.query(query,[from_date,property_id, room_id]);
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
    getMyNotifications,
    getPaymentsInfo,
    getmyStayRequest,
    getUserByBookingId,
    getUserDetailByBookingID,
    getbookingPropertyInfo,
    getbookingPropertyStayUsersInfo,
    updatePropertyStatus,
    getAdminStayRequest,
    getAdminNotifications,
    ApproveRejectStayRequest,
    CheckBookingSTatus
  };
  