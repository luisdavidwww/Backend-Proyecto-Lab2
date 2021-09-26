import Pensum from "../models/Pensum";
import path from 'path'
import multer from 'multer';

export const createPensum = async (req, res) => {
    const { description, date } = req.body;

    const newPensum = new Pensum({
      description,
      date
    });

    if(req.file){
      newPensum.file = res.req.file.filename;
    }

    try {
      
      const pensumSaved = await newPensum.save();
  
      res.status(201).json(pensumSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };

  export const getPensumById = async (req, res) => {
    const { pensumId } = req.params;
  
    const pensum = await Pensum.findById(pensumId);
    res.status(200).json(pensum);
  };
  
  export const getPensum = async (req, res) => {
    const pensum = await Pensum.find();
    return res.json(pensum);
  };
  
export const updatePensumByIdd = async (req, res) => {
  const { description, date } = req.body;

  try {
    const newPensum = await Article.findByIdAndUpdate(id, { description, date })
    if(req.file){
      newPensum.file = res.req.file.filename;
    }
  } catch (e) {
    // manejar el error
  }
};


  export const updatePensumById = async (req, res) => {
    
    const updatedPensum = await Pensum.findByIdAndUpdate(
      req.params.pensumId,
      req.body,
      req.file,
      {
        new: true,
      }
    );
    
    res.status(204).json(updatedPensum);
  };
  
  export const deletePensumById = async (req, res) => {
    const { pensumId } = req.params;
  
    await Pensum.findByIdAndDelete(pensumId);
  
    // code 200 is ok too
    res.status(204).json();
  };
  


 /* export const updatepdf = async (req, res) => {
    const id = req.params._id;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const path = req.file.path.replace(/\\/g, "/")

    await Pensum.findByIdAndUpdate(id, req.body = {file: "http://localhost:4000/" + path}, { new: true });
    res.json(updateanPensum);
}*/
