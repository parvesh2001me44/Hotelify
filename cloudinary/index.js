const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

// import {v2 as cloudinary} from 'cloudinary';
          
// cloudinary.config({ 
//   cloud_name: 'dugbu3wrq', 
//   api_key: '294441619319851', 
//   api_secret: 'cJ2RvFVZNp87P8X9zmsmOcskXAY' 
// });

const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'Hotelify',
        allowedFormats: ['jpeg', 'png', 'jpg']
    }
});

module.exports = {
    cloudinary,
    storage
};