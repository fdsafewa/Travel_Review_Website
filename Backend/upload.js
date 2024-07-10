const express = require('express');
const multer = require('multer');
const { Storage } = require('@google-cloud/storage');
const path = require('path');

const router = express.Router();
const storage = new Storage({
    keyFilename: path.join(__dirname, './config/sonic-provider-426804-g7-06bcec5576c1.json'), // Replace with your service account file path
    projectId: 'your-google-cloud-project-id', // Replace with your project ID
});

const bucketName = 'capestone_20240709'; // Replace with your bucket name
const bucket = storage.bucket(bucketName);

const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage });

router.post('/upload', upload.single('file'), async (req, res) => {
    try {
        const blob = bucket.file(Date.now() + path.extname(req.file.originalname));
        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => {
            res.status(500).json({ message: err.message });
        });

        blobStream.on('finish', () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${blob.name}`;
            res.status(200).json({ url: publicUrl });
        });

        blobStream.end(req.file.buffer);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
