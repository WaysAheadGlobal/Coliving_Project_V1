// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

async function getPropertyListing(req) {
  try {
    const {country, moveInDate, apartment, roomtype, kitchen, evcharger, 
    agepreference, furniture,} = req.body;
    const user_id = req.user.userId;

    let query = `
    SELECT  distinct propmaster.*, MIN(roommaster.roomrent) MinRent,roomcount.roomcount,
    ISNULL((select id from user_waitinglist where property_id=propmaster.id and user_id=?)) WaitingId
    from propertymaster propmaster
    JOIN property_roommaster roommaster on propmaster.id = roommaster.property_id
    LEFT OUTER JOIN (select user_id, agegrouppreference,dietarypreference,smoke,drink,cannabits from userdetails where user_id = 27) usr on roommaster.agegrouppreference = usr.agegrouppreference
    LEFT OUTER JOIN (select property_id, count(*) as roomcount from property_roommaster group by property_id) roomcount on propmaster.id = roomcount.property_id
    and roommaster.dietarypreference = usr.dietarypreference and roommaster.drinking = usr.smoke and roommaster.smoking = usr.smoke and roommaster.cannabits = usr.cannabits
    and roommaster.agegrouppreference = usr.agegrouppreference
    WHERE 1 = 1  and usr.user_id > 0
    `;
    
    // Create an array to store the parameters for the query
    const params = [];
    params.push(user_id);
    params.push(user_id);
    // Add filter based on filter
    if (country != 0) {
      query += ' AND propmaster.country = ?';
      params.push(country);
    }
    // if (moveInDate != '') {
    //   query += ' AND a.housetype = ?';
    //   params.push(moveInDate);
    // }
    if (apartment != "0") {
      query += ' AND propmaster.housetype = ?';
      params.push(apartment);
    }
    if (roomtype != 0) {
      query += ' AND roommaster.roomtype = ?';
      params.push(roomtype);
    }
    if (kitchen != 0) {
      query += ' AND propmaster.kitchen = ?';
      params.push(kitchen);
    }
    if (evcharger != 0) {
      query += ' AND propmaster.evcharger = ?';
      params.push(evcharger);
    }
    if (agepreference != 0) {
      query += ' AND roommaster.agegrouppreference = ?';
      params.push(agepreference);
    }
    if (furniture != 0) {
      query += ' AND propmaster.furniture = ?';
      params.push(furniture);
    }
    query += ' group by propmaster.id';
    const [result] = await db.query(query, params);
    return result;

  } catch (error) {
    throw error;
  }
}

async function getPropertyDetail(property_id) {
  try {


    const [result] = await db.query(
      "SELECT * from propertymaster where id=?",
      [property_id]
    );
    return result;

  } catch (error) {
    throw error;
  }
}

async function AddUserNotifications(userid, messgae) {
  try {
    var nowDate = new Date(); 
    var date = nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate();
    const [result] = await db.query(
      "INSERT INTO user_notifications (noti_date, message, user_id) values (?,?,?)",
      [date, messgae, userid]
    );
    return result;
  } catch (error) {
    throw error;
  }
}



module.exports = {
    getPropertyListing,
    getPropertyDetail,
    AddUserNotifications
};