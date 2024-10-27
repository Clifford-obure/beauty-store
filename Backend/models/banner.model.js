import mongoose from "mongoose";

const bannerSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      require: true,
    },
    img: {
      type: String,
      require: true,
    },
  },
  {
    timestamp: true,
  }
);

const banner = mongoose.model("Banner", bannerSchema);
export default banner;
