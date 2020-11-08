const route = require('express').Router();

route.use('/vehicle', require('./vehicle.route'));
route.use('/property', require('./property.route'));
route.use('/building', require('./building.route'));
route.use('/machinery', require('./machinery.route'));

exports = module.exports = {
    route
}