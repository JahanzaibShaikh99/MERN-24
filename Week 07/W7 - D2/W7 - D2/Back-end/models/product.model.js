const mongoose = required("mongoose");
const productSchema = new mongoose.Schema({
  available: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["Food", "PC", "Cloth"],
  },
  price: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
  },
});
