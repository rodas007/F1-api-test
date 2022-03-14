const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const urlDb = process.env.MONGO_DB;
//Esto tambien puede ser lo de MONGOATLAS

const connect = async () => {
    try {
         await mongoose.connect(urlDb, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Conected with db succesfully`);
    }catch(error) {
        console.log('Error to connect with db')
    };
}

module.exports = {
    connect
};