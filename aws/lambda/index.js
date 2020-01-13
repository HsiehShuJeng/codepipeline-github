var time = require('time');
exports.handler = (event, context, callback) => {
    var currentTime = new time.Date();
    currentTime.setTimezone("Asia/Taipei");
    callback(null, {
        statusCode: '200',
        body: 'The time in Taipei is: ' + currentTime.toString(),
    });
};
// add comment
