const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

connectDB();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

//Deine Routes
app.use("/api/v1/user", require("./routes/api/users"));
app.use("/api/v1/auth", require("./routes/api/auth"));
app.use("/api/v1/profile", require("./routes/api/profile"));
app.use("/api/v1/transaction", require("./routes/api/transactions"));

//Serve Static assets in prod

if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(PORT, () =>
  console.log(`Server tarted on port ${PORT} so congrats `)
);
