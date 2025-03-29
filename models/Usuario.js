
import { pool } from '../database/connection.js';
import bcrypt from 'bcryptjs';

export const crearUsuario = async ({ email, password, rol, lenguage }) => {
  const hashedPassword = await bcrypt.hash(password, 10); 
  const query = {
    text: `
      INSERT INTO usuarios (email, password, rol, lenguage)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `,
    values: [email, hashedPassword, rol, lenguage],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};

export const obtenerUsuarioPorEmail = async (email) => {
  const query = {
    text: 'SELECT * FROM usuarios WHERE email = $1;',
    values: [email],
  };
  const { rows } = await pool.query(query);
  return rows[0];
};