const { config } = require('dotenv');
const mongoose = require('mongoose');
require ('dotenv').config()

const dbconnect = () => {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.MONGODB_URL)
    .then((success) => console.log("Conexión exitosa"))
    .catch((err)=> console.log(err.message));
}

const dbconnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
  } catch (error) {
    console.error("Error al conectar a la base de datos", error);
    process.exit(1);
  }
};

module.exports = dbconnect;
