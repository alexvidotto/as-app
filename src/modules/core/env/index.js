const root = require('app-root-path');
const fs   = require('fs');
const env  = require('node-env-file');

exports.load = () => {

    const envFile = root + '/.env';
    // Read root/.env file to provide environment variables
    if (fs.existsSync(envFile)) 
        env(envFile);
}