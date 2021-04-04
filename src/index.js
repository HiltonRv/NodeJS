const app = require('./app');
require('dotenv').config();

const port = process.env.PORT || 300;

app.listen(port, () => {
    console.log('server start')
})