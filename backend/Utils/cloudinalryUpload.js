import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARY_API_KEY,
  CLOUDINARY_API_SECRET,
  CLOUDINARY_CLOUD_NAME,
} from "./constant.js";
import { response } from "express";
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
});

const cloudinaryUpload = async (filePath, fileName, folder, format) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      filename_override: fileName,
      folder: folder,
      format: format,
    });
    return result;
  } catch (error) {
    response
      .status(500)
      .json({ message: "Failed to upload image", success: false });
  }
};

export default cloudinaryUpload;
