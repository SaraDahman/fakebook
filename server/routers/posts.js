const { Router } = require('express');
const { addLike, addPost, deletePost } = require('../controllers');
const userAuthenticator = require('../middlewares/auth');

const router = Router();

router.get('/post/add-like:id', addLike);
router.post('/post/add-post', addPost);
router.get('/post/delete-post/:id', userAuthenticator, deletePost);

module.exports = router;
