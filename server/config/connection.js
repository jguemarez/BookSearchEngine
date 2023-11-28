const mongoose = require('mongoose');

/*const connectDB = async () => {
    try {
        await */
        mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
   /* } catch (err) {
        console.error('MongoDB connection error:', err);
    }
};

connectDB()*/

module.exports = mongoose.connection;
