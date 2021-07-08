const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Testing1",
    "postContent": "Test 1",
    "userId": 1
  },
  {
    "postTitle": "test seed 2",
    "postContent": "bleh",
    "userId": 2
  },
  {
    "postTitle": "testing 3",
    "postContent": "This is difficult",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;