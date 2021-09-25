import { Schema, model } from "mongoose";

// Creating a Schema for uploaded files
const fileSchema = new Schema(
    {
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
    },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Creating a Model from that Schema
export default model("file", fileSchema);