
### Prerequisites

You will need to have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Google Cloud SDK](https://cloud.google.com/sdk)
- [MongoDB](https://www.mongodb.com/)

### Installing

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
    - Create a `.env` file in the root of your project directory and add the required environment variables. You can use the `.env.example` file as a template:
        ```env
        GOOGLE_API_KEY=your-google-api-key
        GOOGLE_EMBED_KEY=your-google-embed-key
        ```

4. **Download and place your Google Cloud service account key file**:
    - Download your service account key file from the [Google Cloud Console](https://console.cloud.google.com/).
    - Rename the file to `sonic-provider-426804-g7-06bcec5576c1.json` and place it in the `config` directory. The directory structure should look like this:
      ```
      project-root/
      ├── config/
      │   └── sonic-provider-426804-g7-06bcec5576c1.json
      ```

5. **Set up Google Cloud Storage**:
    - Make sure your `googleCloudStorage.js` file is configured correctly. It should look like this:
      ```javascript
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
      ```

6. **Run the backend**:
    ```bash
    npm start
    ```

### Example `.env` file

Here is an example of what your `.env` file should look like:

```env
GOOGLE_API_KEY=your-google-api-key
GOOGLE_EMBED_KEY=your-google-embed-key


