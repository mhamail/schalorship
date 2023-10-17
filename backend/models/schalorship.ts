import mongoose from "mongoose";

const schalorshipSchema = new mongoose.Schema(
  {
    image: {
      data: Buffer,
      contentType: String,
    },
    title: {
      type: String,
      trim: true,
      minlength: [3, "title is too small"],
      maxlength: [160, "title is too large"],
      required: [true, "title missing"],
    },
    slug: {
      type: String,
      unique: true,
      index: true,
      lowercase: true,
    },
    funding: {
      type: String,
      required: [true, "funding type missing"],
      trim: true,
    },
    university: {
      type: String,
      required: [true, "university name missing"],
      trim: true,
    },
    degree: {
      type: String,
      required: [true, "degree name missing"],
      trim: true,
    },
    subjects: {
      type: [String],
      required: true,
    },
    country: {
      type: String,
      required: [true, "country missing"],
      trim: true,
    },
    description: {
      type: mongoose.Schema.Types.Mixed,
      required: [true, "body missing"],
      maxlength: [200000, "body is too large"],
    },
  },
  { timestamps: true }
);

const Schalorship =
  mongoose.models.Schalorship ||
  mongoose.model("Schalorship", schalorshipSchema);
export default Schalorship;
