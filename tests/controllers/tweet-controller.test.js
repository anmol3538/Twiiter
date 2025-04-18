const {gettweet} = require('../../src/controllers/tweet-controller')
const TweetService = require('../../src/services/tweet-service')
const {mockrequest, mockresponse} = require('../mocker');
jest.mock('../../src/services/tweet-service.js')
test('should returns tweets', async () => {
    const req = mockrequest();
    const res = mockresponse();
    const response = [
        {
            content: 'Tweet 1'
        },
        {
            content : 'Tweet 2'
        }
    ];
    (TweetService.prototype.get).mockReturnValue(response);
    await gettweet(req, res);
    expect(res.json).toHaveBeenCalledWith({
        success: true,
        message: 'Successfully fetched a tweet',
        data: response,
        err: {}
    });
})
