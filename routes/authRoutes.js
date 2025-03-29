import { Router } from 'express';
import { register, login, getUsuario } from '../controllers/authController.js';
import { verificarToken } from '../middlewares/authMiddleware.js';

const router = Router();


router.post('/usuarios', register);  // POST /usuarios (registro)
router.post('/login', login);        // POST /login

// Ruta protegida
router.get('/usuarios', verificarToken, getUsuario); // GET /usuarios (perfil)

export default router;