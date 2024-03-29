﻿const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Tag = new Schema({
    name: String,
    portfolios: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Portfolio"
    }]
})

module.exports = mongoose.model('Tag', Tag)