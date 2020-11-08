const { response } = require('express');
const express = require('express');
const { Sequelize } = require('../models');

const route = require('express').Router();
const Property = require('../models').property;

const {Op} = Sequelize;

route.get('/get-all-property', (req, res) =>{

    Property.findAll()
        .then((property) => {
            res.status(200).send(property)
        }) 
        .catch((err) => {
            res.status(500).send({
                error: err
            })
        })

})

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
        res.status(501).send({
            error: err
        })
    })
 })

 route.get('/get-property/:id', (req, res) => {
     let {id} = req.params;

     Property.findByPk(id).then((property) =>{
         res.json(property);
     })
 })

 route.get('/get-property', (req, res) => {
    let filter = {};
    let {prop_name} = req.query;

    if(prop_name){
        filter = {
            where:{
                prop_name:{
                    [Op.like]: `${prop_name}%`
                }
                
            }
        };
    }

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

// route.get('/get-property', (req, res) => {
//     let filter = {};
//     let {prop_name} = req.query.prop_name;
//     let {prop_type} = req.query.prop_type;

//     if(prop_name){
//         filter = {
//             where:{
//                 [Op.and]: [
//                     {"prop_name": `${prop_name}`}, 
//                     {"prop_type":`${prop_type}`}
//                 ]
//             }
//         };
//     }
    
//     Property.findAll(filter)
//         .then((property) =>{
//             if(property){
//                 res.status(201).send(property);
//             }else{
//                 res.status(404).send(`Sorry Can't find ${filter.prop_name} called property`);
//             }
//         }).catch((err)=>{
//             res.status(501).send({
//             error: err
//         })
//     })
// })

module.exports = route;