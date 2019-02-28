const friendsInfo = require("../data/friends.js")

module.exports = function (app) {

  // API GET requests and response JSON array of objects
  app.get("/api/friends", function (req, res) {
    res.json(friendsInfo);
  });

  // API POST Requests
  app.post("/api/friends", function (req, res) {
    let newInfo = req.body;
    console.log(req.body);

    // ------ Find best match ------ //

    let bestMatch = {}; // best match object
    let matchedFriend = 0; // matched friend index from array
    let bestScore = 20; // Max score

    // Loop through all friends in friendsInfo array
    for (let f = 0; f < friendsInfo.length; f++) {
      let difference = 0;
      // Loop through friends scores
      for (let s = 0; s < friendsInfo[f].scores.length; s++) {
        let diff = Math.abs(parseInt(friendsInfo[f].scores[s]) - parseInt(newInfo.scores[s]));
        difference += diff;
      } 
      console.log(difference)
      console.log(bestMatch);

      if (difference < bestScore) {
        matchedFriend = f;
        bestScore = difference;
      }

    }

    bestMatch = friendsInfo[matchedFriend];
    //return best match into json
    res.json(bestMatch);
    //push to array
    friendsInfo.push(newInfo);

  })

};