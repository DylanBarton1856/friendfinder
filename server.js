// DEPENDENCIES
// =============================================================================
var express = require("express");


// EXPRESS CONFIGURATION set up the basic properties for our express server
// =============================================================================
// Tells node that we are creating an "express" server
var app = express();
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Static routing 
// ================================================ 
app.use(express.static(__dirname + "/app/public/"));

// ROUTES for API and HTML
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Uh uh! Something went wrong...');
  err.status = 404;
  next(err);
});

// LISTENER The below code effectively "starts" our server
// =============================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });