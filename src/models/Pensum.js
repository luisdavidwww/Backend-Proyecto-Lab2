import { Schema, model } from "mongoose";

const pensumSchema = new Schema(
  {
    description:{
      type: String
    },
    date:{
      type: String
    },
    file:{
      type: Buffer
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("pensum", pensumSchema);