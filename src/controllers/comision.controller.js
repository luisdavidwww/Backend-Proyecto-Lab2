import Comision from "../models/Comision";

export const createComision = async (req, res) => {
  const { description, pensum } = req.body;

  try {

    const newComision = new Comision({
        description,
        pensum
      });

    const comisionSaved = await newComision.save();

    res.status(201).json(comisionSaved);
    
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
  
export const getComisionById = async (req, res) => {
    const { comisionId } = req.params;
  
    const comision = await Comision.findById(comisionId);
    res.status(200).json(comision);
  };
  
export const getComision = async (req, res) => {
    const comision = await Comision.find();
    return res.json(comision);
  };
  

export const updateComisionById = async (req, res) => {
    const updatedComision = await Comision.findByIdAndUpdate(
      req.params.comisionId,
      req.body,
      {
        new: true,
      }
    );
    //res.status(204).json(updatedProgram);
    return res.json(updatedComision);
  };

  
export const deleteComisionById = async (req, res) => {
    const { comisionId } = req.params;
  
    await Comision.findByIdAndDelete(comisionId);
  
    // code 200 is ok too
    res.status(204).json();
  };
  




