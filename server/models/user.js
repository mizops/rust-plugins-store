const {Schema, model} = require('mongoose');
const userSchema = new Schema({
    nickname: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String
    }
})


const User = model('User', userSchema);
module.exports = User;