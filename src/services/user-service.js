const UserRepository = require('../repository/user-repository');
class UserService {
    constructor () {
        this.userRepository = new UserRepository();
    }

    async signup (data) {
        try {
            const user = await this.userRepository.create(data);
            return user;
        } catch (error) {
            console.log(error);
            return error;
        }
    }

    async getuserbymail(email) {
        try {
            const response = await this.userRepository.findBy(email);
            return response;
        } catch (error) {
            throw error;
        }
    }

    async signin(data){
        try {
        const user = await this.userRepository.findBy(data.email);
        console.log(user);
        if (!user) {
            console.log(error);
            throw error;
        }
        if(!user.comparepass(data.password)){
            console.log(error);
            throw error;
        }

        const token = user.genJWT();
        return token;   
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = UserService;