import { Router } from 'express';
import { signIn, signUp } from '../controllers/authController.js';
import { signInSchema, signUpSchema } from '../schemas/authSchema.js';
import { validateSchema } from '../middlewares/validateSchema.js';


const router = Router();

router.post('/', validateSchema(signInSchema), signIn)
router.post('/sign-up', validateSchema(signUpSchema), signUp)


export default router