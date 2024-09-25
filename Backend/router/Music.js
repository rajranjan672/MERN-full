const multer = require("multer");
const express = require("express");
const Music = require("../models/Songs");
const path = require("path");
const fs = require("fs");

const router = express.Router();

const uploadDir = path.join(__dirname, 'image');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
        if (allowedFileTypes.includes(file.mimetype)) {
            const uniqueSuffix = Date.now() + path.extname(file.originalname);
            cb(null, uniqueSuffix);
        } else {
            cb(new Error("File type not allowed"), false);
        }
    }
});

const upload = multer({ storage });

router.route("/create").post(upload.single("photo"), (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const title = req.body.title;
    const image = req.file ? req.file.path : null;

    if (!image) {
        return res.status(400).json({ error: "Image file is required." });
    }

    const newData = {
        title,
        image,
    };

    const newUser = new Music(newData);

    newUser
        .save()
        .then(() => res.json("User Added"))
        .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/get", async(req,res) => {
    let ress = await Music.find()
    return res.json(ress)
})

module.exports = router;
