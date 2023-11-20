const UploadModel = require('../model/schema');
const fs = require("fs")

exports.home = async(req, res) => {
    const all_images = await UploadModel.find()
    res.render("main",{images:all_images});
}

exports.uploads=(req,res,next)=>{
 const files = req.files

 if(!files){
 const error = new Error('Please Choose a File');
 error.httpStatuscode=400;
 return next(error);
};
//convert images to base64
let imgArray = files.map((file)=>{
    let img = fs.readFileSync(file.path)
    return encode_image = img.toString('base64')
})
let result = imgArray.map(async (src , index)=>{
    // create object to store in collection
    let finalimg = {
        filename : req.files[index].originalname,
        contentType : files[index].mimetype,
        imageBase64 : src
    }

    let newupload = new UploadModel(finalimg)
    try {
        await newupload.save();
        return { msg: `${files[index].originalname} uploaded Succesfully....!` };
    } catch (error) {
        if (error) {
            if (error.name === 'MongoError' && error.code === 11000) {
                return Promise.reject({ error: `Duplicate ${files[index].originalname}.File Already Exist...!` });
            }
            return Promise.reject({ error: error.message || `cannot upload ${files[index].originalname} Something is missing` });

        }
    }
})
Promise.all(result).then(
    data=>res.redirect('/')).catch(err=>{
        console.log(err)})
};
