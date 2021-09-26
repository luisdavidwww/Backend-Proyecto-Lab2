import multer from 'multer';
import path from 'path'
import config from "../config";
import Pensum from "../models/Pensum";

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      //cb(null, '/public');
      cb(null, 'C:/Users/equipo/Documents/Ucla/Laboratorio 2/Proyecto final/api-jwt-AutorizacionAutenticacion/src/public/files');
    },
    filename: function(req, file, cb) {

      const ext = file.mimetype.split("/")[1];
      cb(null, `/admin-${file.fieldname}-${Date.now()}.${ext}`)

      //indu
      //const ext = path.extname(file.originalname);
      //(null, Date.now() + "--" + ext);

      //normal
      //const ext = file.mimetype.split("/")[1];
      //cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);


      //(null, `src/public/files/admin-${file.fieldname}-${Date.now()}.${ext}`);
      //(null, Date.now() + "--" + file.originalname);
    },
  })

// Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf") {
      cb(null, true);
    } else {
      cb(new Error("Not a PDF File!!"), false);
    }
};

const upload = multer({ storage: storage, fileFilter: multerFilter,});


export default upload;