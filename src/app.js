const express = require("express");
const path = require("path");

const PropertyRoute = require('./routes/property.route');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "../public")));


app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs"); 

// api
app.use('/api', require('./routes').route);

// rendering views
app.get('/', function(req,res){
    res.render("index");
})

app.get('/about', function(req,res){
    res.render("about");
})

app.get('/add-product', function(req,res){
    res.render("add-product");
})

app.get('/admin-dashboard', function(req,res){
    res.render("admin-dashboard");
})

app.get('/bldg-prod-detail', function(req,res){
    res.render("bldg-prod-detail");
})

app.get('/bldg-product', function(req,res){
    res.render("bldg-product");
})

app.get('/login', function(req,res){
    res.render("login");
})

app.get('/mach-prod-detail', function(req,res){
    res.render("mach-prod-detail");
})

app.get('/mach-product', function(req,res){
    res.render("mach-product");
})

app.get('/prop-prod-detail', function(req,res){
    res.render("prop-prod-detail");
})

app.get('/prop-product', function(req,res){
    res.render("prop-product");
})

app.get('/vech-prod-detail', function(req,res){
    res.render("vech-prod-detail");
})

app.get('/vechile-product', function(req,res){
    res.render("vechile-product");
})


const port = process.env.PORT || 3000
app.listen(port, () => console.log(`server started successfully on port ${port}`) )