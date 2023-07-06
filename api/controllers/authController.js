const authService = require('../services/authService');

const register = (req, res) => {
    const { username, password } = req.body;
    authService.registerUser(username, password)
        .then((message) => {
            res.status(201).json({ message });
        })
        .catch((error) => {
            res.status(400).json({ error: error.message });
        });
};

const login = (req, res) => {
    const { username, password } = req.body;
    authService.loginUser(username, password)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((error) => {
            res.status(401).json({ error: error.message });
        });
};

module.exports = { register, login };
