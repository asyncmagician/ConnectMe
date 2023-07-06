const rateLimit = require("express-rate-limit");

const dosProtection = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Trop de requêtes depuis cette adresse IP, veuillez réessayer après 15 minutes."
});

module.exports = dosProtection;
