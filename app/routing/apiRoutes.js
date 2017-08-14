//Require the file containing the data that the routes will be linked to
var friendsData = require("../data/friendsData");

//Setting up routing
module.exports = function(app) {
  //Get and display the data in the friendsData file
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  //Post a new friend object to the array in the friendsData.js file 
  app.post("/api/friends", function(req, res) {
    friendsData.push(req.body);
  });
};
