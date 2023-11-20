const mongoose = require("mongoose");

const Connect = async () => {
  try {
    const con = await mongoose.connect("mongodb+srv://darkmashllow125:admin123@cluster0.m9u0jvp.mongodb.net/?retryWrites=true&w=majority");
    console.log(`MongoDB Server connected successfully....! `);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = Connect;