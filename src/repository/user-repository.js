const User = require('../models/user')
const CrudRepository = require('./crud-repository')
class UserRepository extends CrudRepository {
    constructor () {
        super(User);
    }
    async findBy(data) {
        try {
            console.log(data);
            const response = await User.findOne({email : data});
            console.log(response);
            return response;
        } catch(error) {
            throw error;
        }
    }
}

module.exports = UserRepository;