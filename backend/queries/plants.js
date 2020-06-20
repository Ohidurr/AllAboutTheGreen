const db = require('../db/index');
const upload = require('./plantImageUpload')

const getAllPlantUploads = async (req, res, next) => {
  try {
    let allPlantUploads = await db.any('SELECT * FROM Uploads');
    res.status(200).json({
        status: "Success",
        message: "All plant inquiries are now showing",
        payload: {allPlantUploads}
    })
} catch(err) {
    res.status(400).json({
        status: "Error",
        message: "Sorry, no plant iquiries can be displayed at this moment. Try again later."
    })
    next(err)
}
  
}

const createPlantUpload = async (req, res, next) => {
    try {
     console.log("Upload your plant inquiry!");
     upload(req, res, err => {
         try {
         console.log("Plant inquiry upload");
         const { username, description, created_date } = req.body;
         let plant_image = "/uploads/" + req.file.filename;
         console.log('file')
         db.one(
             `INSERT INTO Uploads(username, description_text, created_date, plant_image) VALUES( $1, $2, $3, $4) RETURNING *`,
             [username, description, created_date, plant_image])
             .then(done => {
                 console.log("then");
                 res.status(200).json({
                   status: "ok",
                   post: done,
                   payload: plant_image,
                   message: "Yessir, your plant inquiry has been submitted. Thank you!"
         })
        });
      } catch (err) {
        console.log(err)
        next(err)
      }
    });
    
  } catch (error) {
    console.log(error);
    next(error);
  }   
};




const getSingleInquiryById = async (req, res, next) => {
  try {
    let soloInq = await db.one('SELECT * FROM Uploads WHERE id= $1', [req.params.id]);
    res.status(200).json({
        status: "Success",
        message: "Yo, big ups! You can now see this single inquiry",
        payload: soloInq
    })

} catch(err) {
    res.status(400).json({
        status: "Error",
        message: "Yikes, could not locate that single inquiry"
    })
    next(err)
}
}



const deleteInquiry = async (req, res, next) => {
  try {
      let { id } = req.params;
      let singleInquiry = await db.one("DELETE FROM Uploads WHERE id = $1 RETURNING *", id);
      res.status(200).json({
          status: "Success",
          message: "Inquiry " + id + " was successfully deleted!",
          body: {
            singleInquiry
          }
      }) 
  } catch(err) {
      res.status(400).json({
          status: "Error",
          message: "Sorry, this inquiry could not be deleted. Try again later."
      });
      next(err)
  }

}
// console.log(req)








module.exports = { getAllPlantUploads, createPlantUpload, getSingleInquiryById, deleteInquiry}