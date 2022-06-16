import express from 'express'
const router = express.Router()
import { getPosts, createpost,getPost, updatePost ,deletePost,commentPost,likePost,getPostsBySearch} from "../controllers/posts.js";
import auth from '../middleware/auth.js'

router.get('/',getPosts);
router.get('/:id',getPost);
router.get('/search',getPostsBySearch);
router.post('/',auth,createpost);
router.patch('/:id',auth,updatePost)
router.delete('/:id',auth,deletePost)
router.patch('/:id/likePost',auth,likePost)
router.post('/:id/commentPost',auth,commentPost)

export default router;
    