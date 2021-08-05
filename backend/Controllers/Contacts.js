const express = require('express');
const Contact = require('../models/Contact');
const ContactService = require('../Services/ContactService');
const Services = new ContactService();
const router = express.Router();

router.post('/', async function(req, res, next) {
    await Services.create(req.body).then((data) => {
        console.log(data, "contact data");
        res.send({"success": "details register successfully"});
    }).catch((err) => {
        res.send(err);
    })
});
router.get('/', async function(req, res, next) {
    const contacts = await Services.findAll();
    console.log(contacts, "hello contacts");
    res.send(contacts);
});
router.get('/:id', async function(req, res, next) {
    const ContactId = req.params.id;
    await Services.findById(ContactId).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.send(err)
    });
});
module.exports = {
    router: router
}
