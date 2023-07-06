const express = require('express');
const connectDB = require('./mongo/mongoose.js');
const authController = require('./controllers/authController');
const cors = require('cors');
const port = 3001

// Routes
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')

// Middlewares
const sanitizerNoSQL = require('./middlewares/sanitizer');
const helmet = require('./middlewares/helmet');
const dosProtection = require("./middlewares/dos");

connectDB();

const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    methods: ["PUT", "DELETE", "PATCH", "POST", "GET"]
}));


app.use(express.json())
app.use(helmet)
app.use(dosProtection)



app.use('/users', userRoutes, sanitizerNoSQL())
app.use('/auth', authRoutes, sanitizerNoSQL())


app.listen(port, () => {
    console.log(`The back-end has been successfully launched on port ${port}`)
})
