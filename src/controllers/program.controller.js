import Program from "../models/Program";

export const createProgram = async (req, res) => {
    const { description, pensum } = req.body;
  
    try {
      const newProgram = new Program({
        description,
        pensum,
      });
  
      const programSaved = await newProgram.save();
  
      res.status(201).json(programSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  };
  
  export const getProgramById = async (req, res) => {
    const { programId } = req.params;
  
    const program = await Program.findById(programId);
    res.status(200).json(program);
  };
  
  export const getProgram = async (req, res) => {
    const program = await Program.find();
    return res.json(program);
  };
  
  export const updateProgramById = async (req, res) => {
    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.programId,
      req.body,
      {
        new: true,
      }
    );
    res.status(204).json(updatedProgram);
    return res.json(updatedProgram);
  };
  
  export const deleteProductById = async (req, res) => {
    const { programId } = req.params;
  
    await Program.findByIdAndDelete(programId);
  
    // code 200 is ok too
    res.status(204).json();
  };
  