// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection

async function getPropertyListing() {
  try {


    const [result] = await db.query(
      "SELECT * from propertymaster"
    );
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