const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 2;

const TodoSchema = new mongoose.Schema({
  password: String,
  text: String,
  status: { type: Boolean, default: false },
});
TodoSchema.methods.checkPassword = async (password, hash) => {
  // console.log("checking password", password);
  // console.log(this.password, "this password");
  console.log(await bcrypt.compare(password + " 1", hash));
  // decrypt
};
TodoSchema.pre("save", async function (next) {
  // console.log("this is params", params);
  this.password = await bcrypt.hash(this.password, saltRounds);
  // next();
});

const TodoModel = mongoose.model("Todos", TodoSchema);
module.exports = TodoModel;
