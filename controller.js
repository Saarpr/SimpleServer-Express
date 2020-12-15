const {card} = require('./model/cardModel');

exports.cardController = {
    getCards(req,res){
        card.find({})
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    },
    getCard(req,res){
        card.findOne({ id: req.params.id })
            .then(docs => { res.json(docs) })
            .catch(err => console.log(`Error getting the data from DB: ${err}`));
    }
};
