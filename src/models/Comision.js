import { Schema, model } from "mongoose";

const comisionSchema = new Schema(
  {
    description:{
      type: String
    },
    pensum: [
        {
          type: Schema.Types.ObjectId,
          ref: "pensum",
        },
      ]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("comision", comisionSchema);