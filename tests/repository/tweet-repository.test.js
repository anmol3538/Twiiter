const TweetRepository = require('../../src/repository/tweet-repository')
const Tweet = require('../../src/models/tweet')
jest.mock('../../src/models/tweet.js')
test('actually calling model', async () => {
    const data = {
        content: 'hello world'
    }
    const tweet = await Tweet.create(data);
    expect(tweet).toBeUndefined();
})