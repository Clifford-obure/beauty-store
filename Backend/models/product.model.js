import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  desc: {
    type: String,
    require: true,
  },
  whatinbox: {
    type: String,
  },
  img: {
    type: String,
    require: true,
  },
  video: {
    type: String,
  },
  wholesalePrice: {
    type: Number,
  },
  wholesaleMinimumQuantity: {
    type: Number,
  },
  Categories: {
    type: Array,
  },
  concern: {
    type: Array,
  },
  brand: {
    type: String,
  },
  skintype: {
    type: Array,
  },
  originalPrice: {
    type: Number,
  },
  discountedPrice: {
    type: Number,
  },
  inStoke: {
    type: Boolean,
    default: true,
  },
  ratings: [
    {
      star: { type: String },
      name: { type: String },
      comment: { type: String },
      postedBy: { type: String },
    },
  ],
});

const Product = mongoose.model("Product", ProductSchema);
export default Product;
