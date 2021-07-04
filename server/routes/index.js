import express from 'express';
import Middleware from '../middlewares/index.js';
import UserController from '../controllers/userController.js';

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({
  	status: 'success',
    message: 'Welcome to Kingdom-Builder App'
  });
});

//Users
router.post('/user/signup', Middleware.validateSignup, UserController.signUp);
router.post('/user/signin', Middleware.validateSignin, UserController.signin);
 
module.exports = router;
export default router;
