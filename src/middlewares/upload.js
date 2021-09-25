import multer from 'multer';
import config from "../config";
import Pensum from "../models/Pensum";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      //cb(null, '/public');
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
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

export default upload.single('myFile')

