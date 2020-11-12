const Property = require('../models').property;
const { Sequelize } = require('../models');
const {Op} = Sequelize;

// --------------------------------------get all property --------------------------------//
module.exports.getAllProperty  = (req, res) => {

    Property.findAll()
        .then((property) => {
            res.status(200).send(property)
        }) 
        .catch((err) => {
            res.status(500).send({
                error: err
            })
        })
}

//---------------------------- adding property ----------------------------------//
module.exports.addProperty = (req, res) => {

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
 }

 // -------------------- get property by id ----------------------------------------//
module.exports.getPropertyById = (req, res) => {
    let {id} = req.params;

    Property.findByPk(id).then((property) =>{
        res.status(201).send(property);
    }).catch((err) => {
       res.status(501).send({
           error: err
       })
    })
}


// ---------------------------edit element by id -------------------------------//
module.exports.editPropertyById = (req, res) => {
    let {prop_name, prop_type, price, price_type, location, bedroom, bathroom, is_sold, size, views, desc} = req.body;
    let {id} = req.params;

    Property.update(
        { 
            prop_name: prop_name,
            prop_type:prop_type,
            price:price,
            price_type:price_type,
            location:location,
            bedroom:bedroom,
            bathroom:bathroom,
            is_sold:is_sold,
            size:size,
            views:views,
            desc:desc

        }, 
        { where: 
            { id: id } 
        }
        
    ).then(updatedProperty => {
        res.json(updatedProperty);
// if it is updated it will return [1]
    }).catch(err => res.json(err));
}

//  ------------------ get property by prop name OR prop_type OR price by default limit 10 --------------------//
module.exports.getProperty = (req, res) => {
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
            res.status(404).send({
            error: err
        })
    })
}

// ----------------------------- delete property by id ---------------------------------------//
module.exports.deleteProperty = (req, res) => {
    let {id} = req.params;

    Property.findByPk(id).then((property)=>{
        property.destroy().then(()=>{
            res.status(204).send();
        }).catch((err) => {
            res.status(404).send("Couldnot delete property");
        })
    })
}