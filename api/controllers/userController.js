const userService = require('../services/userService');

const getAllUser = (req, res) => {
    userService.getAllUsers()
        .then((users) => {
            res.status(200).json(users);
        })
        .catch((error) => res.status(400).json({ error }));
};

const getUser = (req, res) => {
    const id = req.params.id;
    userService.getUserById(id)
        .then((user) => {
            res.status(200).json(user);
        })
        .catch((error) => res.status(400).json({ error }));
};

const deleteUser = (req, res) => {
    const id = req.params.id;
    userService.deleteUserById(id)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((error) => res.status(400).json({ error }));
};

module.exports = {
    getAllUser,
    getUser,
    deleteUser
};
