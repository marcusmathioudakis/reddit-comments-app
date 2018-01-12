module.exports = function(app){
    const redditApiController = require('./controllers/redditApiController');
    app.get('/comments/:submissionId', redditApiController.getComments);
}