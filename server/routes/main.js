const express = require('express')
const router  = express.Router();
const post = require('../models/post');

    router.get('', async (req, res) => {
       
        try{

            const locals = {
                title: "NodeJs Blog",
                description: "Simple Blog created with NodeJs, Express & MongoDb."
              }

            let perPage = 9;
            let page = req.query.page || 1;

            const data = await post.aggregate([{$sort:{updatedAt: - 1}}])
            .skip(perPage * page - perPage)
            .limit(perPage)
            .exec();

            const count = await post.count;
            const nextPage = parseInt(page) + 1;
            const hasNextPage = nextPage <= Math.ceil(count / perPage);

            res.render("index",
            {locals,
                data, 
                currentPage: page, 
               nextPage: hasNextPage ? nextPage: null});
        }catch(error){
                console.log(error)
        }
    
});

router.get('/about', (req, res) => {
    res.render("about");
});
module.exports = router;





// function insertPostData(){
//     post.insertMany([{
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for cats"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for cats"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for cats"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for moms"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for monkeys"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for humans"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The sun",
//         state: "Lagos",
//         descripton: "new blog for puppy"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The goat",
//         state: "Lagos",
//         descripton: "new blog for goats"
//     },
//     {
//         title: "building a blog",
//         body: "this is a blog",
//         author: "The dog",
//         state: "Lagos",
//         descripton: "new blog for dogs"
//     },
    
// ])
// }
// insertPostData();