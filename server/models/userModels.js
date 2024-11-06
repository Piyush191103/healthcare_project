const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Enter Your First Name"],
    },
    lastName: {
        type: String,
        required: [true, "Please Enter Your Last Name"],
    },
    email: {
        type: String,
        required: [true, "Please Enter Your Email"],
        unique: true, // Ensure email uniqueness
    },
    password: {
        type: String,
        required: [true, "Please Enter Your Password"], 
    },
    age: {
        type: Number,
        required: [true, "Please Enter Your Age"],
    },
    gender: {
        type: String,
        required: [true, "Please Enter Your Gender"],
    },
    bloodGroup: {
        type: String,
        required: [true, "Please Enter Your Blood Group"],
    },
    phoneNumber: {
        type: Number,
        required: [true, "Please Enter Your Phone Number"],
    }
});

module.exports = mongoose.model("User", userSchema);
