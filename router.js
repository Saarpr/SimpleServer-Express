const { Router } = require('express');
const {cardController} = require('./controller');


const cardRouter = new Router();
module.exports = { cardRouter };

cardRouter.get('/',cardController.getCards); 
cardRouter.get('/:id',cardController.getCard);
<<<<<<< HEAD
console.log("Test Saar");
=======
console.log("test yarin");
>>>>>>> 7d8b319d117c07439bbf68c7338c0d537714196b
