const express = require('express');

const route = require('express').Router();
const Machinery = require('../models').machinery;

route.get('/get-all-machinery', (req, res) =>{

    Machinery.findAll()
        .then((machinery) => {
            res.status(200).send(machinery)
        }) 
        .catch((err) => {
            res.status(500).send({
                error: err
            })
        })

})

 route.post('/add-machinery', (req, res) => {

    Machinery.create({
            mach_name: req.body.mach_name,
            build_year:req.body.build_year,
            location: req.body.location,
            condition:req.body.condition,
            price:req.body.price,
            price_type:req.body.price_type,
            is_sold: req.body.is_sold,
            desc: req.body.desc,
            views: req.body.views
    }).then((machinery) => {
        res.status(201).send(machinery)
    }).catch((err) => {
        res.status(501).send({
            error: err
        })
    })
 })

module.exports = route;