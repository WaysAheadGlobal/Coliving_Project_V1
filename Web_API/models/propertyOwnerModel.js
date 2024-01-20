// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

// Function to signup a user
async function saveUpdateProperty(req) {
  try {
    const { user_id, property_id, propertyname, housetype, totalrooms, bathroom, livingroom, kitchen, residants, apartmentsize, evcharger, fireextinguisher,
      travelguide, events, propertyphoto1, propertyphoto2, propertyphoto3, propertyphoto4, propertyphoto5, propertyvideo, apartmentamenities, communityamenities,
      country, province, address, landmark, zipcode, markongoogle, cancellantionpolicy, description, host_name, host_emailid,
      host_mobileno, host_dob, host_gender, host_location, host_aboutyourself,
      roomDetails,host_idproof, host_propertyOwnershopdocument, host_employmentdetails, host_companyidproof
    } = req;
    if (property_id === 0) {
      const [result] = await db.query(
        "INSERT INTO propertymaster (user_id, propertyname, housetype, totalrooms, bathroom, livingroom, kitchen, residants, apartmentsize, evcharger, fireextinguisher," +
        "travelguide, events, propertyphoto1, propertyphoto2, propertyphoto3, propertyphoto4, propertyphoto5, propertyvideo," +
        "apartmentamenities, communityamenities, country, province, address, landmark, zipcode, markongoogle, cancellantionpolicy, description, host_name, host_emailid," +
        "host_mobileno, host_dob, host_gender, host_location, host_aboutyourself, host_idproof, host_propertyOwnershopdocument, host_employmentdetails, host_companyidproof) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?" +
        ",?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?, ?, ?, ?, ?)",
        [user_id, propertyname, housetype, totalrooms, bathroom, livingroom, kitchen, residants, apartmentsize, evcharger, fireextinguisher,
          travelguide, events, propertyphoto1, propertyphoto2, propertyphoto3, propertyphoto4, propertyphoto5, propertyvideo,
          apartmentamenities, communityamenities, country, province, address, landmark, zipcode, markongoogle, cancellantionpolicy, description, host_name, host_emailid,
          host_mobileno, host_dob, host_gender, host_location, host_aboutyourself, host_idproof, host_propertyOwnershopdocument, 
          host_employmentdetails, host_companyidproof]
      );

      var propertyid = result.insertId;
      for (var key in roomDetails) {
        if (roomDetails.hasOwnProperty(key)) {
          item = roomDetails[key];
          console.log(item);
          saveUpdatePropertyRooms(item, user_id, propertyid);
        }
      }

      return result;
    }
    else {
      const [result] = await db.query(
        "UPDATE propertymaster SET propertyname=?, housetype=?, totalrooms=?, bathroom=?, livingroom=?, kitchen=?, residants=?, apartmentsize=?, evcharger=?, fireextinguisher=?," +
        "travelguide=?, events=?, propertyphoto1=?, propertyphoto2=?, propertyphoto3=?, propertyphoto4=?, propertyphoto5=?, propertyvideo=?," +
        "apartmentamenities=?, communityamenities=?, country=?, province=?, address=?, landmark=?, zipcode=?, markongoogle=?, cancellantionpolicy=?, description=?, host_name=?, host_emailid=?," +
        "host_mobileno=?, host_dob=?, host_gender=?, host_location=?, host_aboutyourself=?, host_idproof=?, host_propertyOwnershopdocument=?,host_employmentdetails=?,host_companyidproof=?   WHERE id=?",
        [propertyname, housetype, totalrooms, bathroom, livingroom, kitchen, residants, apartmentsize, evcharger, fireextinguisher,
          travelguide, events, propertyphoto1, propertyphoto2, propertyphoto3, propertyphoto4, propertyphoto5, propertyvideo,
          apartmentamenities, communityamenities, country, province, address, landmark, zipcode, markongoogle, cancellantionpolicy, description, host_name, host_emailid,
          host_mobileno, host_dob, host_gender, host_location, host_aboutyourself, host_idproof, host_propertyOwnershopdocument, 
          host_employmentdetails, host_companyidproof, property_id]
      );

      var propertyid = result.insertId;
      for (var key in roomDetails) {
        if (roomDetails.hasOwnProperty(key)) {
          item = roomDetails[key];
          console.log(item);
          saveUpdatePropertyRooms(item, user_id, propertyid);
        }
      }
      return result;
    }

  } catch (error) {
    throw error;
  }
}


async function saveUpdatePropertyRooms(req, user_id, property_id) {
  try {
    const {
      room_id, roomname, roomphoto1, roomphoto2, roomphoto3, roomphoto4, roomphoto5,
      roomtype, roomsize, noOfBed, bedroomtype, furniture, roomrent, currentstatus, petfriendly,
      dietarypreference, smoking, drinking, cannabits, agegrouppreference, communitytype, maxresidants
    } = req;

    if (room_id == 0) {
      const [result] = await db.query(
        "INSERT INTO property_roommaster (user_id, property_id, roomname, roomphoto1, roomphoto2, roomphoto3, roomphoto4, roomphoto5," +
        "roomtype, roomsize, noOfBed, bedroomtype, furniture, roomrent, currentstatus, petfriendly," +
        "dietarypreference, smoking, drinking, cannabits, agegrouppreference, communitytype, maxresidants)" +
        " values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        [user_id, property_id, roomname, roomphoto1, roomphoto2, roomphoto3, roomphoto4, roomphoto5,
          roomtype, roomsize, noOfBed, bedroomtype, furniture, roomrent, currentstatus, petfriendly,
          dietarypreference, smoking, drinking, cannabits, agegrouppreference, communitytype, maxresidants]
      );
      return result;
    }
    else {
      const [result] = await db.query(
        "UPDATE property_roommaster SET roomname=?, roomphoto1=?, roomphoto2=?, roomphoto3=?, roomphoto4=?, roomphoto5=?," +
        "roomtype=?, roomsize=?, noOfBed=?, bedroomtype=?, furniture=?, roomrent=?, currentstatus=?, petfriendly=?," +
        "dietarypreference=?, smoking=?, drinking=?, cannabits=?, agegrouppreference=?, communitytype=?, maxresidants=? WHERE id=?",
        [roomname, roomphoto1, roomphoto2, roomphoto3, roomphoto4, roomphoto5,
          roomtype, roomsize, noOfBed, bedroomtype, furniture, roomrent, currentstatus, petfriendly,
          dietarypreference, smoking, drinking, cannabits, agegrouppreference, communitytype, maxresidants, room_id]
      );
      return result;
    }

  } catch (error) {
    throw error;
  }
}

async function getOwnerPropertyInfo(user_id) {
  try {


    const [result] = await db.query(
      "SELECT * from propertymaster WHERE user_id=?",
      [user_id]
    );
    return result;

  } catch (error) {
    throw error;
  }
}

async function getOwnerPropertyInfoUsingPropertyId(property_id, user_id) {
  try {


    const propertyinfo = await db.query(
      "SELECT *, id as property_id from propertymaster WHERE user_id=? and Id= ?",
      [user_id, property_id]
    );
    const property = propertyinfo[0];
    return property;
  } catch (error) {
    throw error;
  }
}

async function getOwnerPropertyRoomInfoUsingPropertyId(property_id) {
  try {


    const roominfo = await db.query(
      "SELECT *, id as room_id from property_roommaster WHERE property_id=?",
      [property_id]
    );
    return roominfo;
  } catch (error) {
    throw error;
  }
}

async function getOwnersPropertyListForAdmin() {
  try {


    const [result] = await db.query(
      "SELECT * from propertymaster order by id desc"
    );
    return result;

  } catch (error) {
    throw error;
  }
}

module.exports = {
  saveUpdateProperty,
  getOwnerPropertyInfo,
  getOwnerPropertyInfoUsingPropertyId,
  getOwnerPropertyRoomInfoUsingPropertyId,
  getOwnersPropertyListForAdmin
};