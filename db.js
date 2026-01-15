import mongoose from "mongoose";

// MongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

// MongoDB connection
mongoose.connect(mongoURL);

// Default connection
const db = mongoose.connection;

// Event listeners
db.on("connected", () => {
  console.log("Connected to MongoDB server");
});

db.on("error", (err) => {
  console.log("MongoDB connection error:", err);
});

db.on("disconnected", () => {
  console.log("MongoDB disconnected");
});

// Export
export default db;
