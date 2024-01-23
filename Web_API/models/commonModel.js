// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

async function getPropertyListing(req) {
  try {
    const {country, moveInDate, apartment, roomtype, kitchen, evcharger, 
    agepreference, furniture,} = req.body;
    const user_id = req.user.userId;

    let query = `
    SELECT  distinct propmaster.*, MIN(roommaster.roomrent) MinRent,
    ISNULL((select id from user_waitinglist where property_id=propmaster.id and user_id=?)) WaitingId
    from propertymaster propmaster
    JOIN property_roommaster roommaster on propmaster.id = roommaster.property_id
    WHERE 1 = 1 
    `;
    
    // Create an array to store the parameters for the query
    const params = [];
    params.push(user_id);
    // Add filter based on filter
    if (country != 0) {
      query += ' AND a.country = ?';
      params.push(country);
    }
    // if (moveInDate != '') {
    //   query += ' AND a.housetype = ?';
    //   params.push(moveInDate);
    // }
    if (apartment != 0) {
      query += ' AND roommaster.housetype = ?';
      params.push(apartment);
    }
    if (roomtype != 0) {
      query += ' AND roommaster.roomtype = ?';
      params.push(roomtype);
    }
    if (kitchen != 0) {
      query += ' AND roommaster.kitchen = ?';
      params.push(kitchen);
    }
    if (evcharger != 0) {
      query += ' AND roommaster.evcharger = ?';
      params.push(evcharger);
    }
    if (agepreference != 0) {
      query += ' AND roommaster.agegrouppreference = ?';
      params.push(agepreference);
    }
    if (furniture != 0) {
      query += ' AND roommaster.furniture = ?';
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