const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI); // Add this line
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;
