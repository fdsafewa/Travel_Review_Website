const { Storage } = require('@google-cloud/storage');
const path = require('path');

// Path to your service account key file
const serviceKey = path.join(__dirname, './config/sonic-provider-426804-g7-06bcec5576c1.json');

// Create a new instance of the storage client
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'My First Project', // Replace with your project ID
});

const bucketName = 'capestone_20240709'; // Replace with your bucket name
const bucket = storage.bucket(bucketName);

module.exports = bucket;
