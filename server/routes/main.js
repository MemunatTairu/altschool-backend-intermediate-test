const express = require('express')
const router  = express.Router();
const post = require('../models/Post');

    router.get('', async (req, res) => {
        const locals = {
          title: "NodeJs Blog",
          description: "Simple Blog created with NodeJs, Express & MongoDb."
        }
    res.render("index",{locals});
});


 function insertPostData() {
    Post.insertMany([
   { 
    title: "building a blog",
    body:"This is the body text"
 },
 { 
    title: "building a blog",
    body:"This is the body text"
 },
 { 
    title: "building a blog",
 body:"This is the body text"
}
    ])
}
insertPostData();



router.get('/about', (req, res) => {
    res.render("about");
});
module.exports = router;