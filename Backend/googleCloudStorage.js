const { Storage } = require('@google-cloud/storage');
const path = require('path');

require('dotenv').config();

const storage = new Storage({
  keyFilename: path.join(__dirname, process.env.GCS_KEY_FILE),
  projectId: process.env.GCS_PROJECT_ID,
});

const bucket = storage.bucket(process.env.GCS_BUCKET_NAME);

module.exports = bucket;
