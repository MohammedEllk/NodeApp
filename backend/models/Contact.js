const { Model } = require('objection');
const knex = require('../db/knex')

Model.knex(knex)

class Contact extends Model{
    static get tableName(){
        return 'contacts';
    }
}

module.exports = Contact;