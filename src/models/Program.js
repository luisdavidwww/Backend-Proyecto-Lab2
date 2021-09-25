import { Schema, model } from "mongoose";

const programSchema = new Schema(
  {
    description:String,
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

export default model("program", programSchema);