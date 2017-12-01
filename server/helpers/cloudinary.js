import cloudinary from 'cloudinary'
import config from 'config';

cloudinary.config(config.get('cloudinary'));


function cloudinaryUpload(filePath) {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, response => {
      resolve(response);
    });
  });
}

export default cloudinaryUpload;
