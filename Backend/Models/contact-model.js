const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    email:
    { 
     type: String,
     required:true,
    },
    issue:
    {
         type: String,
         required:true,
    }
});


module.exports = mongoose.model('Contact',contactSchema);