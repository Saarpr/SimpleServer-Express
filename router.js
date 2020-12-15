const { Router } = require('express');
const {cardController} = require('./controller');


const cardRouter = new Router();
module.exports = { cardRouter };

cardRouter.get('/',cardController.getCards); 
cardRouter.get('/:id',cardController.getCard);
console.log("Test Saar");
console.log("test yarin");
console.log("Test Shimi");