
import { crearUsuario, obtenerUsuarioPorEmail } from '../models/Usuario.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { email, password, rol, lenguage } = req.body;
    
    // Validación básica
    if (!email || !password || !rol || !lenguage) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
    }

    const usuario = await crearUsuario({ email, password, rol, lenguage });
    res.status(201).json({ message: 'Usuario registrado con éxito' });
  } catch (error) {
    if (error.code === '23505') { // Error de PostgreSQL por email duplicado
      return res.status(400).json({ message: 'El email ya está registrado' });
    }
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    const usuario = await obtenerUsuarioPorEmail(email);
    if (!usuario) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const validPassword = await bcrypt.compare(password, usuario.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const token = jwt.sign(
        { email }, // Payload
        process.env.JWT_SECRET, // Usa la clave del .env
        { expiresIn: process.env.JWT_EXPIRATION || '1h' }); // Tiempo de expiración
  
      res.json({ token });
    } catch (error) {
      // ...
    }
  };

export const getUsuario = async (req, res) => {
  try {
    const { email } = req.user;
    const usuario = await obtenerUsuarioPorEmail(email);
    
    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    
    res.json([{ 
      email: usuario.email,
      rol: usuario.rol,
      lenguage: usuario.lenguage 
    }]);
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor' });
  }
};