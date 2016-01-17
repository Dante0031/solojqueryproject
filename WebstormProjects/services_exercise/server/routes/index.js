var express = require('express');

var router = express.Router();

router.get('/', function(request, response){
    var joinedPath = path.join(__dirname, '../public/views/index.html');
    console.log("Joined path", joinedPath);
    response.sendFile(joinedPath);//when to use send instead of sendFile send -
});

module.exports = router;