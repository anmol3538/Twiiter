const JWT= require('passport-jwt');
const usermodel  = require('../models/user');
const JwtStrategy = JWT.Strategy
const ExtractJwt = JWT.ExtractJwt;

const opt = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'twitter_secret'
}

const passportauth = async (passport) => {
    passport.use(new JwtStrategy(opt, async (payload, done) => {
        const user = await usermodel.findById(payload.id);
        if(!user) {
            done(null, false, {message: 'User not found'});
        }
        else {
            done(null, user);
        }
    }))
}

module.exports = {
    passportauth
}