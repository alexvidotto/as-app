const mongoose = require('mongoose');

module.exports = () => {

    const mongoUrl = process.env.MONGO_URL;
    mongoose.connect(mongoUrl);

    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected.'); 
    });
    mongoose.connection.on('error', (err) => {
        console.log(`Mongoose connection fail. ${err.message}`); 
    });
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected.'); 
    });

    process.on('SIGINT', function(){
        mongoose.connection.close(() => {
            console.log("Program exiting - Mongoose connection closed");
            process.exit(0)
        });
    });
}