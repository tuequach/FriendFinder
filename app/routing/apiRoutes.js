var friends = require ('../data/friends');

module.exports = function(app) {
    //returning friend list from friends.js as a json. 
    app.get('/api/friends', function(req, res){
        res.json(friends);
    });

    app.post('/api/friends', function(req, res){
        console.log(req.body.scores);

        //details of user as a whole and parsing  scores
        var user = req.body;
        
    for (var i =0; i< user.scores.length; i++) {
        user.scores[i] = parseInt(user.scores[i]);
    }

    //default of first friend as a match but display results of whoever has the minimum difference in scores
    var bestFriendIndex = 0;
    var minimumDifference = 40;

        for (var i =0; i < friends.length; i++){
            var totalDifference = 0; 
            for (var j=0; j <friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
                    
            }
            //if new mininmum, change index and set new minimum for comparison
        if(totalDifference < minimumDifference){ 
            bestFriendIndex = i;
            minimumDifference = totalDifference; 
            }
        }
        
        //adding user to friend array
        friends.push(user);

        //making sure the json is sent back to to best friend match
        res.json(friends[bestFriendIndex]);
    
    });
};