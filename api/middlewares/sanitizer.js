const mongoSanitize = require('express-mongo-sanitize');

const sanitizerNoSQL = () => {
    return mongoSanitize();
};

module.exports = sanitizerNoSQL;
