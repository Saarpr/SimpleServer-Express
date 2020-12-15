const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const {cardRouter}= require("./router");


app.use(express.json());
app.use(express.urlencoded());
app.listen(port, () => console.log('Express server is running on port ', port));
app.use('/api/cards',cardRouter);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something is broken!');
   });