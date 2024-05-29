import cloudinary from "./cloudinaryConfig.js";
import { response } from "express";
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
