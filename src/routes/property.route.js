const { response } = require('express');
const express = require('express');
const { Sequelize } = require('../models');

const route = require('express').Router();
const Property = require('../models').property;
const PropertyController = require('../controllers/property');




// --------------------------------------get all property --------------------------------//
route.get('/get-all-property', PropertyController.getAllProperty);

//---------------------------- adding property ----------------------------------//
 route.post('/add-property', PropertyController.addProperty);

// -------------------- get property by id ----------------------------------------//
//  http://localhost:3000/api/property/get-property/2
 route.get('/get-property/:id', PropertyController.getPropertyById);

//  ------------------ get property by prop name OR prop_type OR price by default limit 10 --------------------//
//  http://localhost:3000/api/property/get-property?prop_name=ap&limit=3
//  http://localhost:3000/api/property/get-property?prop_name=ap
//  http://localhost:3000/api/property/get-property?prop_name=a&prop_type=s
//  http://localhost:3000/api/property/get-property?prop_type=s&min_price=200&max_price=10000

 route.get('/get-property', PropertyController.getProperty);

// ----------------------------- edit property by id ----------------------------------------
route.put('/edit-property/:id', PropertyController.editPropertyById)

// ----------------------------- delete property by id ---------------------------------------//

route.delete('/delete-property/:id', PropertyController.deleteProperty);

module.exports = route;