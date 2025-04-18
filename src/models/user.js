const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const userSchema = new mongoose.Schema({
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
    name : {
        type: String,
        required: true,
    }
}, {timestamps: true});


userSchema.pre('save', function (next){
    const user = this;
    const SALT = bcrypt.genSaltSync(9);
    const encryptedpass = bcrypt.hashSync(user.password, SALT);
    user.password = encryptedpass;
    next();
})

userSchema.methods.comparepass = function (password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.genJWT = function generate() {
    return jwt.sign({id: this._id, email: this.email}, 'twitter_secret', {
        expiresIn: '1h'
    })
}

const User = mongoose.model('User', userSchema);
module.exports = User;