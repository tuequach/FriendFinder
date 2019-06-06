var friends = require ('../data/friends');

module.exports = function(app) {
    //returning friend list from friends.js as a json. 
    app.get('/api/friends', function(req, rest){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        console.log(req.body.scores);

        //details of user as a whole  and parsing  scores
        var user = req.body;
    for (var i =0; i< user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }


  

    })




}