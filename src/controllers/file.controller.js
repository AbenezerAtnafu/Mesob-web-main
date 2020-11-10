const File = require('../models').image;


exports.uploadFile = (req, res) => {
	File.create({
		type: req.file.mimetype,
		name: req.file.originalname,
		data: req.file.buffer
	}).then(file => {
		console.log(file);

		const result = {
			status: "ok",
			filename: req.file.originalname,
			message: "Upload Successfully!",
			downloadUrl: "http://localhost:3000/api/file/" + file.dataValues.id,
		}

		res.json(result);
	}).catch(err => {
		console.log(err);

		const result = {
			status: "error",
			error: err
		}
		res.json(result);
	});
}

exports.uploadMultipleFiles = async (req, res) => {
	const messages = [];

	for (const file of req.files) {
		const uploadfile = await File.create({
								type: file.mimetype,
								name: file.originalname,
								data: file.buffer
							});

        // It will now wait for above Promise to be fulfilled and show the proper details
        console.log(uploadfile);

	    if (!uploadfile){
			const result = {
				status: "fail",
				filename: file.originalname,				
				message: "Can NOT upload Successfully",
			}

			messages.push(result);
		} else {
			const result = {
				status: "ok",
				filename: file.originalname,
				message: "Upload Successfully!",
				downloadUrl: "http://localhost:3000/api/file/" + uploadfile.dataValues.id,
			}

			messages.push(result);
		}
	}

	return res.json(messages);
}