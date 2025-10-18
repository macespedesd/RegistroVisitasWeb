const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/registrovisitas', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado');
  } catch (error) {
    console.error('Error de conexión:', error.message);
    process.exit(1);
  }
};
module.exports = connectDB;
