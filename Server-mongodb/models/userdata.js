const mongoose = require('mongoose')



const userdataSchema = new mongoose.Schema({

    fullname: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    },

    rating: {
        type: String,
        required: true
    },

    userid: {
        type: String,
        required: true
    }
  
 

})


module.exports = mongoose.model('userdata', userdataSchema)