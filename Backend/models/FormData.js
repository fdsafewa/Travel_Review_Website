const { db1 } = require('../database/database');
const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String,
    role: Number
})

const FormDataModel = db1.model('log_reg_form', FormDataSchema);

module.exports = FormDataModel;
