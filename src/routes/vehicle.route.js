const express = require('express');

const route = require('express').Router();
const Vehicle = require('../models').vehicle;

route.get('/get-all-vehicles', (req, res) =>{

    Vehicle.findAll()
        .then((vehicle) => {
            res.status(200).send(vehicle)
        }) 
        .catch((err) => {
            res.status(500).send({
                error: err
            })
        })

})

 route.post('/add-vehicle', (req, res) => {

    Vehicle.create({
            mark: req.body.mark,
            model:req.body.model,
            year:req.body.year,
            gear:req.body.gear,
            fuel: req.body.fuel,
            engine:req.body.engine,
            condition: req.body.condition,
            color: req.body.color,
            price: req.body.price,
            price_type:req.body.price_type,
            location:req.body.location,
            mileage:req.body.mileage,
            features:req.body.features,
            is_sold:req.body.is_sold,
            desc: req.body.desc,
            views: req.body.views
    }).then((vehicle) => {
        res.status(201).send(vehicle)
    }).catch((err) => {
        res.status(501).send({
            error: err
        })
    })
 })

module.exports = route;