import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import log from "./middlewares/logger.js";


dotenv.config();

const app = express();

// Middlewares
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true
}));
app.use(express.json());
app.use(log);

// Rutas
app.use('/', authRoutes);

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Error interno del servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
