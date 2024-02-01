// backend/db.js

// Importing the mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Connecting to the local MongoDB server with the 'paytm' database
mongoose.connect('mongodb+srv://prblmsolvrx:2ugqrytPpKpV2x3l@paytm-cluster.6xqmqwl.mongodb.net')

// Creating a Schema for Users with various constraints and validations
const userSchema = new mongoose.Schema({
    // Username field with specific requirements
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    // Password field with a minimum length requirement
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    // First name field with specific requirements
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    // Last name field with specific requirements
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

// Creating a Schema for Accounts with a reference to the User model
const accountSchema = new mongoose.Schema({
    // User ID field referencing the User model
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    // Balance field representing the account balance
    balance: {
        type: Number,
        required: true
    }
});

// Creating models based on the defined schemas
const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

// Exporting the User and Account models for use in other parts of the application
module.exports = {
    User,
    Account
};
