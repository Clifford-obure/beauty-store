import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./util/db.js";
dotenv.config();

//server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
  dbConnection();
});
