const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (username, password) => {
    const existingUser = await User.findOne({ username: username });
    if (existingUser) {
        throw new Error('Cet utilisateur existe déjà');
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({
        username,
        password: hashedPassword,
    });
    await newUser.save();
    return 'Utilisateur créé avec succès';
};

const loginUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('Identifiants invalides');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
        throw new Error('Identifiants invalides');
    }
    const token = jwt.sign({ userId: user._id }, 'votre_clé_secrète');
    const userId = user._id;
    return { token, userId };
};

const logoutUser = () => {
    // Fonction de déconnexion vide
};

module.exports = { logoutUser };


module.exports = { registerUser, loginUser };
