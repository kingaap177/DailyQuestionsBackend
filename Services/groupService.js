const Group = require('../Models/group');

class GroupService {
    constructor() {
        this.groups = []; // In-memory storage for groups
    }

    async getAllGroups() {
        try {
            return this.groups;
        } catch (error) {
            throw new Error(`Error fetching groups: ${error.message}`);
        }
    }
}

module.exports = new GroupService();