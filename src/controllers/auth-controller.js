const UserService = require('../services/user-service');
const userservice = new UserService();
const signup = async (req, res) => {
    try {
        const response = await userservice.signup(req.body);
        return res.status(201).json({
            message: 'User created successfully',
            data: response,
            error : {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error creating user',
            data: [],
            error: error.message,
            success: false
        })
    }
}

const login = async (req, res) => {
    try {
        const token = await userservice.signin(req.body);
        return res.status(200).json({
            message: 'User logged in successfully',
            data: token,
            error: {},
            success: true
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Error creating user',
            data: [],
            error: error.message,
            success: false
        })
    }
}

module.exports = {
    signup,
    login
}