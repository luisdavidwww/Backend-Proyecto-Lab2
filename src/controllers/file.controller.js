import File from "../models/File";
import multer from "multer";


//guardado del archivo
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public");
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`);
    },
  });

// Multer Filter
const multerFilter = (req, file, cb) => {
    if (file.mimetype.split("/")[1] === "pdf") {
      cb(null, true);
    } else {
      cb(new Error("Not a PDF File!!"), false);
    }
};

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter,
  });

//export const uploadfile = upload.single("myfile");


export const postfile =  (async (req, res) => {
    // Stuff to be added later
    const up = await upload.single("myFile");
    try {
        const newFile = await File.create({
          name: req.file.filename,
          newFile,
        });
        res.status(200).json({
          status: "success",
          message: "File created successfully!!",
        });
      } catch (error) {
        res.json({
          error,
        });
  }
}
)

export const updateAnUserImage = async (req, res) => {
    const id = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const path = req.file.path.replace(/\\/g, "/")

    await User.findByIdAndUpdate(id, req.body = {ProfilePicture: "http://localhost:4000/" + path}, { new: true });
    res.json(updateAnUser);
}


