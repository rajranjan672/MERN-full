const multer = require('multer');
const path = require('path');
const Music = require("../models/Songs")
const express = require("express");

const route = express.Router()

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Append extension
    }
});

const upload = multer({ storage });

// Route to upload music
route.post('/create', upload.fields([{ name: 'image' }, { name: 'audio' }]), async (req, res) => {
    const { title, artist } = req.body;
    const imagePath = req.files['image'][0].path;
    const audioPath = req.files['audio'][0].path;

    const newMusic = new Music({
        title,
        artist,
        image: imagePath,
        audio: audioPath,
    });

    await newMusic.save();
    res.status(201).json(newMusic);
});

// Route to get all music
route.get('/getsongs', async (req, res) => {
    const music = await Music.find();
    res.json(music);
});

module.exports = route;