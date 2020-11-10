let express = require('express');
let route = express.Router();
let upload = require('../config/multer.config.js');

const fileWorker = require('../controllers/file.controller.js');

route.post('/upload', upload.single("file"), fileWorker.uploadFile);
route.post('/multiple', upload.array('files', 4), fileWorker.uploadMultipleFiles);
//route.get('/info', fileWorker.listAllFiles);
 
//router.get('/file/:id', fileWorker.downloadFile);

module.exports = route;