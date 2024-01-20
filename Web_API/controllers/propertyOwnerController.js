const propertyModel = require("../models/propertyOwnerModel");
const sendMail = require("../utils/utils");

async function savePropertyInfo(req, res) {
    try {
      const {propertyname, housetype, totalrooms, bathroom, livingroom, kitchen, residants, apartmentsize, evcharger, fireextinguisher,
        travelguide, events, propertyphoto1, propertyphoto2, propertyphoto3, propertyphoto4, propertyphoto5, propertyvideo,
        country, province, address, landmark, zipcode, markongoogle, cancellantionpolicy, description, host_name, host_emailid,
        host_mobileno, host_dob, host_gender, host_location, host_aboutyourself,
        roomDetails,
       } = req.body;
  
    //   // Check if the email exists
      const getUserDetail = await propertyModel.saveUpdateProperty(req.body);
      res
        .status(200)
        .json({ message: 'Property saved successfully.', userinfo: 'getUserDetail', status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getOwnerPropertyInfo(req, res) {
    try {
      const { user_id } = req.body;
    //   // Check if the email exists
      const propertyinfo = await propertyModel.getOwnerPropertyInfo(req.user.userId);
      res
        .status(200)
        .json({ message: 'Success', properties: propertyinfo, status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getOwnerPropertyInfoByProertyId(req, res) {
    try {
      const { property_id } = req.body;
    //   // Check if the email exists
      const propertyinfo = await propertyModel.getOwnerPropertyInfoUsingPropertyId(property_id, req.user.userId);
      const roominfo = await propertyModel.getOwnerPropertyRoomInfoUsingPropertyId(property_id);
      res
        .status(200)
        .json({ message: 'Success', property: propertyinfo[0], rooms: roominfo[0], status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getOwnersPropertyListForAdmin(req, res) {
    try {
    //   // Check if the email exists
      const propertyList = await propertyModel.getOwnersPropertyListForAdmin();
      res
        .status(200)
        .json({ message: 'Success', propertyList: propertyList, status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }
  module.exports = {
    savePropertyInfo,
    getOwnerPropertyInfo,
    getOwnerPropertyInfoByProertyId,
    getOwnersPropertyListForAdmin
  };
  