const Contacts = require('../models/Contact');
const bcrypt = require('bcrypt');
module.exports = class ContactService {
    async findAll(txn) {
        const contacts = await Contacts.query(txn);
        return contacts;
    }

    async create(details) {
        return await Contacts.query().insertGraph(details);
    }

    async findById(ContactId) {
        const contact = await Contacts.query().findById(ContactId);
        if (contact === undefined) {
            return ({"sorry": "ContactId " + ContactId + " not found!"})
        }
        return contact;
    }
/** 
    async userUpdate(id, user_details) {
        console.log(user_details, id, "user_details");
        const userUpdate = await Users.query().findById(id).patch(user_details);
        return userUpdate;
    }

    async deleteById(userId) {
        console.log(userId, "userId")
        const user = await Users.query().deleteById(userId);
        return user;
        
    }
    
*/
}



