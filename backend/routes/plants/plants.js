const plants = require("../../node_modules/express").Router();


const { 
    getAllPlantUploads,
    createPlantUpload,
    getSingleInquiryById,
    deleteInquiry
} = require("../../queries/plants");


plants.get('/', getAllPlantUploads);
plants.post('/', createPlantUpload);
plants.get('/:id', getSingleInquiryById);
plants.delete('/:id', deleteInquiry)




module.exports = plants;




