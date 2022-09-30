const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Connect database
(async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
})();

// Init middleware
app.use(express.json({
    limit: '100mb'
}));
app.use(express.urlencoded({
    limit: '100mb',
    extended: true,
    parameterLimit: 50000
}));

app.use('/api/auth', require('./routes/api/authController'));
app.use('/api/users', require('./routes/api/userController'));
app.use('/api/absensi', require('./routes/api/absensiController'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 2400;

app.listen(PORT, () => console.log('Server started on port ' + PORT));