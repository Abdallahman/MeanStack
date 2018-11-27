const express = require("express");
const GameModel = require('../models/game');
const router = express.Router();

router.get('/:id',(req,res,next) => {
    console.log('GET: Players lists');
//database connection

});

module.exports = router;