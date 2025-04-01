const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const connect = require('./config/database');
const HashtagRepository = require('./repository/hashtag-repository');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}))
const PORT = 3000;
const apiroutes = require('./Routes/index')
app.use('/api', apiroutes);
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connect();
    console.log('mongodb connected');
})