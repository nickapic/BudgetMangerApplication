const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();
app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("API RUNNING"));
//Deine Routes
app.use("/api/v1/user", require("./routes/api/users"));
app.use("/api/v1/auth", require("./routes/api/auth"));
app.use("/api/v1/profile", require("./routes/api/profile"));
app.use("/api/v1/transaction", require("./routes/api/transactions"));

app.listen(PORT, () =>
  console.log(`Server tarted on port ${PORT} so congrats `)
);
