const mongoose = require('mongoose');
require('dotenv').config();

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

const dbConnetion = async() => {
    try {
        await mongoose.connect(process.env.DB_CNN, options);
        console.log('DB ONLINE');

    } catch (error) {
        console.log(error);
        throw new Error('Error en base de datos')
    }
}
dbConnetion();