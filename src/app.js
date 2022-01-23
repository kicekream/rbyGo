const express = require("express");

const dotenv = require("dotenv");
dotenv.config();

const users = require("./routes/users/users");
const accounts = require("./routes/virtualServices");
const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
console.log(`${process.env.PORT}`);
app.use("/users", users);
app.use("/accounts", accounts);

app.listen(PORT, () => {
  console.log(`app started on port ${PORT} in ${process.env.NODE_ENV} environment`);
});
