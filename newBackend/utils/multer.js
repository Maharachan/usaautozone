const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "car-images", // Folder in Cloudinary
    format: async () => "jpg", // Convert all images to JPG
    public_id: () => Date.now().toString(), // Unique ID for each image
  },
});

const upload = multer({ storage });

module.exports = upload;
