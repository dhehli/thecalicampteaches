import cloudinary from 'cloudinary'
import config from 'config';

cloudinary.config(config.get('cloudinary'));


function cloudinaryUpload(filePath, fileType) {
  return new Promise((resolve, reject) => {
    switch(fileType) {
      case "image":
        cloudinary.uploader.upload(filePath, response => {
          resolve(response);
        }, { resource_type: "image" });
      case "video":
        cloudinary.uploader.upload(filePath, response => {
          resolve(response);
        }, { resource_type: "video" });
    }
  });
}

export default cloudinaryUpload;
