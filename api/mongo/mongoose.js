const mongoose = require('mongoose');

const connectDB = async () => {

    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/api", {
            pass: "api_PASS",
            user: "api_USER",
        })
        console.log('You are successfully connected to the database');
    } catch (err) {
        console.error('Erreur while connecting to the database', err);
        process.exit(1);
    }
}

module.exports = connectDB;
