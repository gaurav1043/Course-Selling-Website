const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.get("/", (req, res) => res.json({ msg: "hello world after the class" }));

// Connect to MongoDB

mongoose.connect(
  "mongodb+srv://gauravtech:5YSGu0vgqCEJSFjJ@cluster0.2f8ai6t.mongodb.net/courseapp2",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3000, () => console.log("Server running on port 3000"));
