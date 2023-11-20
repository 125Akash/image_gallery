const multer = require("multer");
// set storage
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads")
    },
    filename: (req, file, cb) => {
        var ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
        cb(null, file.fieldname+'-'+Date.now()+ext)
    }
});
let store = multer({ storage: storage });
module.exports = store;
