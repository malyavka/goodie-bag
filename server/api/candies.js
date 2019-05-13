const { Candy } = require('../db/index');
const router = require('express').Router();

router.get('/', async (req, res, next) => {
    try {
        const candies = await Candy.findAll();
        res.status(200).send(candies);
    } catch (err) {
        next(err)
    }

});


module.exports = router;