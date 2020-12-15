const { Router } = require('express');
const {cardController} = require('./controller');


const cardRouter = new Router();
module.exports = { cardRouter };

cardRouter.get('/',cardController.getCards); 
cardRouter.get('/:id',cardController.getCard);
console.log("test yarin");