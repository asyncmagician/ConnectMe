const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
            pass: process.env.DB_PASS,
            user: process.env.DB_USER,
        });
        console.log('You are successfully connected to the database');
    } catch (err) {
        console.error('Erreur while connecting to the database', err);
        process.exit(1);
    }
};

module.exports = connectDB;
