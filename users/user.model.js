const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    type: {type: String, required: true},
    firstname: {type: String, required: true},
    lastname: {type: String},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    phone: {type: String, required: true},
    company: {type: String, required: false},
    employmentType: {type: String, required: false},
    qualification: {type: String, required: false},
    title: {type: String, required: false},
    building: {type: String, required: false},
    street: {type: String, required: false},
    city: {type: String, required: false},
    country: {type: String, required: false},
    postalCode: {type: Number, required: false}
});


schema.set('toJSON', {virtuals: true});

module.exports = mongoose.model('User', schema);
