const propertyModel = require("../models/propertyOwnerModel");
const commonModel = require("../models/commonModel");
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

  async function PropertyDetailByPropertyId(req, res) {
    try {
      const {property_id} = req.body;
    //   // Check if the email exists
      const propertyList = await propertyModel.PropertyDetailByPropertyId(property_id);
      const roominfo = await propertyModel.getOwnerPropertyRoomInfoUsingPropertyId(property_id);
      res
        .status(200)
        .json({ message: 'Success', property: propertyList, rooms: roominfo, status: 200 });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function AddRemovePropertyToWaitingList(req, res) {
    try {
      const {property_id} = req.body;
      const user_id = req.user.userId;
    //   // Check if the email exists
      const resp = await propertyModel.AddRemovePropertyToWaitingList(user_id, property_id);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during adding waiting list:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getWaitingListPropertyListing(req, res) {
    try {
      const propList = await propertyModel.getWaitingListPropertyListing(req);
      res
        .status(200)
        .json({ message: 'Success', list: propList, status: 200 });
    } catch (error) {
      console.error("Error during getting waiting list:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function saveBookingInfo(req, res) {
    try {
    //   // Check if the email exists
      const resp = await propertyModel.saveBookingInfo(req);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during adding waiting list:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getMyStayRequests(req, res) {
    try {
    //   // Check if the email exists
      const resp = await propertyModel.getMyStayRequests(req);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during getting stay request:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getPropertyResidants(req, res) {
    try {
    //   // Check if the email exists
      const resp = await propertyModel.getPropertyResidants(req);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during getting stay request:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getRoomResidants(req, res) {
    try {
    //   // Check if the email exists
      const resp = await propertyModel.getRoomResidants(req);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during getting stay request:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getPropertyWaitingList(req, res) {
    try {
    //   // Check if the email exists
      const resp = await propertyModel.getPropertyWaitingList(req);
      res
        .status(200)
        .json({ message: 'Success', resp: resp, status: 200 });
    } catch (error) {
      console.error("Error during getting stay request:", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }


  module.exports = {
    savePropertyInfo,
    getOwnerPropertyInfo,
    getOwnerPropertyInfoByProertyId,
    getOwnersPropertyListForAdmin,
    AddRemovePropertyToWaitingList,
    getWaitingListPropertyListing,
    saveBookingInfo,
    getMyStayRequests,
    getPropertyResidants,
    getPropertyWaitingList,
    PropertyDetailByPropertyId,
    getRoomResidants
  };
  