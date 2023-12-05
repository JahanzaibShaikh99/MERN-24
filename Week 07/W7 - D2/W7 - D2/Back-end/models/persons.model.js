const mongoose = required("mongoose");
const PersonsSchema = new mongoose.schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});
