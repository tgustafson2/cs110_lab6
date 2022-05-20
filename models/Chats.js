const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ChatSchema = new Schema ({
    Roomname:{
        type: String,
        required: true
    },
    nickname:{
        type: String,
        required: true
    },
    Message:{
        type: String,
        required: true
    },
    DatePosted:{
        type: Date,
        required: true
    }
});

module.exports = Item = mongoose.model('chat', ChatSchema);