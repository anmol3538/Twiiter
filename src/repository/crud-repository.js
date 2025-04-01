const Tweet = require('../models/tweet');
class CrudRepository {
    constructor(model){
        this.model = model;
    }

    async create(data) {
        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async getAll(id) {
        try {
            const result = await this.model.find({});
            return result;
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }

    async update(id, data){
        try {
            const result = await this.model.findByIdAndUpdate(id, data);
        } catch (error) {
            console.log("Something went wrong in crud repo");
            throw error;
        }
    }
}

module.exports = CrudRepository