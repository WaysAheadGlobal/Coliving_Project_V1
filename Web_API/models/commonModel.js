// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

async function getPropertyListing(req) {
  try {
    const {country, moveInDate, apartment, roomtype, kitchen, evcharger, 
    agepreference, furniture} = req.body;

    let query = `
    SELECT  distinct a.*, MIN(b.roomrent) MinRent  from propertymaster a
    JOIN property_roommaster b on a.id = b.property_id
    WHERE 1 = 1 
    `;
    
    // Create an array to store the parameters for the query
    const params = [];

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
      query += ' AND a.housetype = ?';
      params.push(apartment);
    }
    if (roomtype != 0) {
      query += ' AND b.roomtype = ?';
      params.push(roomtype);
    }
    if (kitchen != 0) {
      query += ' AND a.kitchen = ?';
      params.push(kitchen);
    }
    if (evcharger != 0) {
      query += ' AND a.evcharger = ?';
      params.push(evcharger);
    }
    if (agepreference != 0) {
      query += ' AND b.agegrouppreference = ?';
      params.push(agepreference);
    }
    if (furniture != 0) {
      query += ' AND b.furniture = ?';
      params.push(furniture);
    }
    query += ' group by a.id';
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



module.exports = {
    getPropertyListing,
    getPropertyDetail
};