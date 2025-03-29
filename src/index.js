const express = require('express');
const app = express();
const connect = require('./config/database')
const PORT = 3000;

const Tweet = require('./models/tweet')
app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    await connect();
    console.log('mongodb connected');
    const tweets = await Tweet.find({
        content: ['tweet with  comment schema', 'First Tweet']
    });    
    console.log(tweets);
})