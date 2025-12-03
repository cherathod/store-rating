const express = require("express");
const cors = require("cors");
const sequelize = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const storeRoutes = require("./routes/storeRoutes");
const ratingRoutes = require("./routes/ratingRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/stores", storeRoutes);
app.use("/api/ratings", ratingRoutes);

// ERROR MIDDLEWARE
app.use(errorHandler);

// START SERVER
sequelize
    .sync()
    .then(() => {
        console.log("Database connected.");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => {
        console.error("Database connection failed:", err);
    });
