// models/authModel.js
const db = require("../config/dbConfig"); // Replace with your actual database connection



async function getDashboardDetails() {
    try {
      const [totalUsers] = await db.query(
        'select count(*) as u1 from users where userType = 1'
      );
  
      const [totalPropertyowners] = await db.query(
        'select count(*) as u2 from users where userType = 2'
      );
      
      const [totalBookings] = await db.query(
        'select count(*) as u3 from userbooking where isbookingconfirmed = 1'
      );
  
      const [totalBookingsPending] = await db.query(
        'select count(*) as u4 from userbooking where isbookingconfirmed = 0'
      );

      // Total count
      const totalCount = totalUsers[0].u1;
  
      return {
        error: null,
        data: {
            totalUsers: totalCount,
            totalPropertyowners: totalPropertyowners[0].u2,
            totalBookings: totalBookings[0].u3,
            totalBookingsPending: totalBookingsPending[0].u4
        },
      };
    } catch (error) {
      return {
        error: "Error fetching dashboard details",
        data: null,
      };
    }
  }

  async function getBookingInfo() {
    try {
      const [totalBookins] = await db.query(
        "select  usr.Fullname, usr.email, prop.propertyname, booking.bookingfrom, booking.paymentmode from userbooking booking "+
        "LEFT JOIN users usr on booking.user_id = usr.user_id "+
        " LEFT JOIN propertymaster prop on booking.property_id = prop.id"+
        " ORDER by booking.id desc  LIMIT 10"
      );
  
      // Total count
  
      return  totalBookins;
    } catch (error) {
    }
  }

  module.exports = {
    getDashboardDetails,
    getBookingInfo
  };
  