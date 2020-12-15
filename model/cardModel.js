const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
    id: { type: Number },
    name: { type: String },
    stars: { type: Number } 
}, { collection: 'cards' });

const Card = model('Card', cardSchema);

module.exports = Card;
