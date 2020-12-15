const {cards} = require('');

exports.cardController = {
    getCards(req,res){
        console.log('All restaurants data requested!');
        res.json(cards);
    },
    getCards(req,res){
        card = cards.find(c => c.id === parseInt(req.params.id));
        console.log(`User with id ${req.params.id} requested!`);
        res.send(card);
    }
};
