const Media = require('../Models/media')
const cloudinary = require('../../config/cloudinary')

exports.createMedia = async (req,res)=>{
    try {
        const output = await cloudinary.uploader.upload(req.file.path);
        const media = await Media.create({
            title:req.body.title,
            ImageUrl:output.secure_url,
            CloudinaryId:output.public_id
        })
        res.status(201).json(media)
    }
    catch (err) {
        res.status(501).json({error:err.message})
    }
    
}
exports.getAllMedia = async (req,res)=>{
    const media  = Media.find()
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.status(500).json({error:err.message});
  });
}