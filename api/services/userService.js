const User = require('../models/User');

const getAllUsers = () => {
    return User.find();
};

const getUserById = (id) => {
    return User.findOne({ _id: id });
};

const deleteUserById = (id) => {
    return User.deleteOne({ _id: id });
};

module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById
};
