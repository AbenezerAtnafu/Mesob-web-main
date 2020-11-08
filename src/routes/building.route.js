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

module.exports = route;