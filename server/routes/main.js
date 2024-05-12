const express = require('express')
const router  = express.Router();
const post = require('../models/post');

    router.get('', async (req, res) => {
        const locals = {
          title: "NodeJs Blog",
          description: "Simple Blog created with NodeJs, Express & MongoDb."
        }


        try {
            const data = await Post.find();
            res.render('index', { locals, data });
          } catch (error) {
            console.log(error);
          }
//     res.render("index",{locals});
});
router.get('/about', (req, res) => {
    res.render("about");
});
module.exports = router;

//  function insertPostData() {
//     post.insertMany([
//    { 
//     title: "building a blog",
//     body:"This is the body text"
//  },
//  { 
//     title: "building a blog",
//     body:"This is the body text"
//  },
//  { 
//     title: "building a blog",
//  body:"This is the body text"
// }
//     ])
// }
// insertPostData();



