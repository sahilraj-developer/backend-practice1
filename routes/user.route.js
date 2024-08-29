const { getallusers, createUser } = require('../controllers/user.controller');

const route = require('express').Router()


route.get('/getallsuers',getallusers);
route.post('/createuser',createUser);



module.exports = route