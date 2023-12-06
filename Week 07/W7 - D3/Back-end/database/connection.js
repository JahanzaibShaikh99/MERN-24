const mongoose = require("mongoose");

async function connectDatabase() {
  await mongoose
    .connect(
      "mongodb+srv://Jahanzaib:root@cluster0.qbcuyzg.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => {
      console.log("database is connected");
    })
    .catch((e) => console.log(e));
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
module.exports = connectDatabase; // default
// module.exports = {connectDatabase}// named export
