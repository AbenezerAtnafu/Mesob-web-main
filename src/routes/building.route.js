const express = require('express');

const route = require('express').Router();
const Building = require('../models').building;

route.get('/get-all-building', (req, res) =>{

    Building.findAll()
        .then((building) => {
            res.status(200).send(building)
        }) 
        .catch((err) => {
            res.status(500).send({
                error: err
            })
        })

}).post('/add-building', (req, res) => {

    Building.create({
            bldg_name: req.body.bldg_name,
            bldg_type:req.body.bldg_type,
            condition:req.body.condition,
            price:req.body.price,
            price_type:req.body.price_type,
            location: req.body.location,
            is_sold: req.body.is_sold,
            desc: req.body.desc,
            views: req.body.views
    }).then((building) => {
        res.status(201).send(building)
    }).catch((err) => {
        res.status(501).send({
            error: err
        })
    })
 })
//---------------------------- adding property ----------------------------------//
route.post('/add-property', (req, res) => {

    Property.create({
            prop_name: req.body.prop_name,
            prop_type:req.body.prop_type,
            price:req.body.price,
            price_type:req.body.price_type,
            location: req.body.location,
            bedroom:req.body.bedroom,
            bathroom: req.body.bathroom,
            is_sold: req.body.is_sold,
            size: req.body.size,
            desc: req.body.desc,
            views: req.body.views
    }).then((property) => {
        res.status(201).send(property)
    }).catch((err) => {
        res.status(404).send({
            error: err
        })
    })
 })

 // -------------------- get property by id ----------------------------------------
//  http://localhost:3000/api/property/get-property/2
 route.get('/get-property/:id', (req, res) => {
     let {id} = req.params;

     Property.findByPk(id).then((property) =>{
         res.status(201).send(property);
     }).catch((err) => {
        res.status(501).send({
            error: err
        })
     })
 })

//  ------------------ get property by prop name OR prop_type OR price by default limit 10 --------------------
//  http://localhost:3000/api/property/get-property?prop_name=ap&limit=3
//  http://localhost:3000/api/property/get-property?prop_name=ap
//  http://localhost:3000/api/property/get-property?prop_name=a&prop_type=s
//  http://localhost:3000/api/property/get-property?prop_type=s&min_price=200&max_price=10000

 route.get('/get-property', (req, res) => {
    let filter = {};
    let {prop_name = '', prop_type='', min_price=0, max_price=0, limit=10} = req.query;

    filter = {
        where:{
            prop_name:{
                [Op.like]: `%${prop_name}%`
            },
            prop_type:{
                [Op.like] : `%${prop_type}%`
            },
            price:{
                [Op.and] : {
                    [Op.gte] : parseInt(min_price),
                    [Op.lte] : parseInt(max_price)
                }

            }
        },
        limit : parseInt(limit)
    };

    Property.findAll(filter)
        .then((property) =>{
            if(property){
                res.status(201).send(property);
            }else{
                res.status(404).send(`Sorry Can't find ${filter.prop_name} called property`);
            }
        }).catch((err)=>{
            res.status(501).send({
            error: err
        })
    })
})


// ----------------------------- delete property by id ---------------------------------------

route.delete('/delete-property/:id', (req, res) => {
    let {id} = req.params;

    Property.findByPk(id).then((property)=>{
        property.destroy().then(()=>{
            res.status(204).send();
        }).catch((err) => {
            res.status(501).send("Couldnot delete property");
        })
    })
})

module.exports = route;