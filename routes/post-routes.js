const express = require('express');
const { getPost, getEditPost, editPost, deletePost, getPosts, getAddPost, addPost } = require('../controllers/post-controller')

const router = express.Router();

router.get('/posts/:id', getPost);
router.get('/edit/:id', getEditPost);
router.put('/edit/:id', editPost);
router.delete('/posts/:id', deletePost);
router.get('/posts', getPosts);
router.get('/add-post', getAddPost);
router.post('/add-post', addPost);

module.exports = router;