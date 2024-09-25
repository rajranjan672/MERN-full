const ArticleController = require("../models/Article")
const express = require("express")
const multer = require("multer");
const { route } = require("./student-detail");


const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads/");
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage: storage})

const router = express.Router()

router.post("/create", upload.single("articleImage"), (req,res) => {
    const newArticle = new ArticleController({
        title: req.body.title,
        articleImage: req.file.originalname
    });
    newArticle
    .save()
    .then(() => res.json("New Article Added"))
    .catch((err) => res.status(400).json('Error', err))
})

router.get("/", (req,res) => {
    ArticleController.find()
    .then((article) => res.json(article))
    .catch((err) => res.json('error', err))
})

router.get("/:id",  (req,res) => {
    ArticleController.findById(req.params.id)
    .then((article) => res.json(article))
    .catch((err) => res.json('error',err))
})

module.exports = router;