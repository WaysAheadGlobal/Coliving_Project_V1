const commonModel = require("../models/commonModel");
const propertyModel = require("../models/propertyOwnerModel");

async function getPropertyListing(req, res) {
    try {
      // Check if the email exists
      const listing = await commonModel.getPropertyListing(req);
      
      res
        .status(200)
        .json({ message: "", listing: listing, status: 200 });
    } catch (error) {
      console.error("Error while fetching property listing", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getPropertyListingWithoutLogin(req, res) {
    try {
      // Check if the email exists
      const listing = await commonModel.getPropertyListingWithoutLogin(req);
      
      res
        .status(200)
        .json({ message: "", listing: listing, status: 200 });
    } catch (error) {
      console.error("Error while fetching property listing", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }

  async function getPropertyListingDetail(req, res) {
    try {
      const { property_id } = req.body;
      // Check if the email exists
      const listing = await commonModel.getPropertyDetail(property_id);
      const roominfo = await propertyModel.getOwnerPropertyRoomInfoUsingPropertyId(property_id);
      res
        .status(200)
        .json({ message: "", listing: listing[0], roominfo: roominfo[0],  status: 200 });
    } catch (error) {
      console.error("Error while fetching property listing", error);
      res.status(500).json({ message: "Internal Server Error", status: 500 });
    }
  }
  
module.exports = {
    getPropertyListing,
    getPropertyListingDetail,
    getPropertyListingWithoutLogin
  };
  