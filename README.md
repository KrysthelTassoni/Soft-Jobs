# Desafío Soft Jobs - Backend API

API de autenticación y gestión de usuarios para la plataforma Soft Jobs, desarrollada con Node.js, Express, PostgreSQL y JWT.

## 📌 Características

- **Registro y login de usuarios** con encriptación de contraseñas
- **Autenticación JWT** (tokens con expiración)
- **Rutas protegidas** con middleware de autorización
- **Base de datos PostgreSQL** con tablas normalizadas
- **Manejo de errores** centralizado
- **Logging** de solicitudes HTTP

## 🚀 Instalación

1. Clonar repositorio:
   ```bash
   git clone https://github.com/KrysthelTassoni/Soft-Jobs.git
   cd desafio-soft-jobs
   

2. Instalar dependencias:
 
 - npm install

 3.Configurar variables de entorno (crear .env basado en .env.example):
 
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=tu_password
DB_DATABASE=softjobs
JWT_SECRET=tu_clave_secreta
JWT_EXPIRATION=15d
PORT=3000

4.Ejecutar la aplicación:

-npm run dev

🔐 Endpoints

Autenticación
Método	Ruta	Descripción
POST	/usuarios	Registro de nuevo usuario
POST	/login	Inicio de sesión (genera JWT)
Usuarios
Método	Ruta	Descripción	Requiere Token
GET	/usuarios	Obtener datos del usuario	✅

📝 Ejemplos de solicitudes

 - Registro:
 POST /usuarios
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "SecurePass123!",
  "rol": "Frontend Developer",
  "lenguage": "JavaScript"
}

 -Login:
 POST /login
Content-Type: application/json

{
  "email": "usuario@example.com",
  "password": "SecurePass123!"
}

 - Obtener perfil:
 GET /usuarios
Authorization: Bearer <JWT_TOKEN>

🛠️ Tecnologías utilizadas:

Node.js (v18+)

Express

PostgreSQL (v15+)

JSON Web Tokens (JWT)

BcryptJS (encriptación)

Dotenv (variables de entorno)

📊 Diagrama de base de datos:

CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  email VARCHAR(50) NOT NULL UNIQUE,
  password VARCHAR(60) NOT NULL,
  rol VARCHAR(25),
  lenguage VARCHAR(20)
);
