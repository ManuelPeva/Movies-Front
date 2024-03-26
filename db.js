const mongoose = require('mongoose');

const MONGODB_URI = 'mongodb+srv://manuelpevavela:3H9csMhSKePCAgW@clusterdemanuel.9eowiyo.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Conexión a MongoDB establecida');
  } catch (error) {
    console.error('Error al conectar a MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
