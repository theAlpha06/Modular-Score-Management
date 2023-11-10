import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/player-score-management', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('MongoDB Connection Failed: ', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
