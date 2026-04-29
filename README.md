# 🐱‍💻 Basic Nest Init Repository

> Plantilla base para iniciar proyectos de backend con NestJS. Lista para clonar, configurar y usar.

---

## 📋 Tabla de Contenidos

- [Descripción](#-descripción)
- [Tecnologías](#-tecnologías)
- [Características](#-características)
- [Instalación](#-instalación)
- [Variables de Entorno](#-variables-de-entorno)
- [Módulos incluidos](#-módulos-incluidos)
- [Documentación API](#-documentación-api)
- [Roadmap](#-roadmap)

---

## 📖 Descripción

**Basic Nest Init Repository** es una plantilla de inicio rápido para proyectos de backend construida con **NestJS**. Incluye autenticación completa con JWT, manejo de usuarios, documentación automática con Swagger, y una estructura sólida lista para escalar.

Ideal para clonar y usar como base cada vez que necesites arrancar un nuevo proyecto de backend sin perder tiempo configurando desde cero.

---

## 🛠️ Tecnologías

| Tecnología | Descripción |
|---|---|
| ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white) | Framework principal |
| ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=flat&logo=prisma&logoColor=white) | ORM para base de datos |
| ![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white) | Motor de base de datos |
| ![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=jsonwebtokens&logoColor=white) | Autenticación con tokens |
| ![Swagger](https://img.shields.io/badge/Swagger-85EA2D?style=flat&logo=swagger&logoColor=black) | Documentación de la API |
| ![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=flat&logo=firebase&logoColor=black) | Subida de archivos / Auth |
| ![bcrypt](https://img.shields.io/badge/bcrypt-🔐-grey) | Encriptación de contraseñas |

---

## ✨ Características

- 👤 **Módulo de Users** — CRUD de usuarios listo para usar
- 🔐 **Módulo de Auth** — Login y Register con username y contraseña
- 🪙 **JWT** — Autenticación stateless con tokens
- 🛡️ **Guards y Decoradores** — Control de acceso basado en roles
- 🔄 **Interceptores** — Procesamiento de respuestas estandarizado
- ⚠️ **Filtro de errores global** — Respuestas de error claras y consistentes
- 📄 **Swagger** — Documentación interactiva de la API
- 🔑 **bcrypt** — Hash seguro de contraseñas
- 🔥 **Módulo Firebase** — Preparado para subida de archivos y autenticación externa
- 🗄️ **Prisma + MySQL** — ORM moderno con migraciones incluidas

---

## 🚀 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/basic-nest-init-repository.git
cd basic-nest-init-repository
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto (ver sección [Variables de Entorno](#-variables-de-entorno)).

### 4. Ejecutar migraciones de Prisma

```bash
npx prisma migrate dev
```

### 5. Levantar el servidor

```bash
# Desarrollo
npm run start:dev

# Producción
npm run start:prod
```

---

## 🔧 Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```dotenv
# 🗄️ Base de datos
DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_db"

# 🌐 Puerto del servidor
PORT=3000

# 🪙 Secret para JWT
TOKEN="tu_secret_jwt_super_seguro"
```

### 🔥 Variables opcionales — Módulo Firebase

Solo necesarias si se desea utilizar el módulo de Firebase para subida de archivos o autenticación:

```dotenv
FIREBASE_SERVICE_ACCOUNT_KEY=''

FIREBASE_STORAGE_BUCKET=''
```

> ⚠️ **Importante:** Nunca subas el archivo `.env` a tu repositorio. Está incluido en el `.gitignore` por defecto.

---

## 📦 Módulos incluidos

### 🔐 Auth Module
Maneja el registro e inicio de sesión de usuarios mediante username y contraseña. Genera y valida tokens JWT para proteger rutas privadas.

| Endpoint | Método | Descripción |
|---|---|---|
| `/auth/register` | `POST` | Registro de nuevo usuario |
| `/auth/login` | `POST` | Login y obtención de token JWT |

### 👤 Users Module
Gestión de usuarios con soporte para control de acceso por roles mediante Guards y Decoradores personalizados.

### 🔥 Firebase Module
Módulo preconfigurado listo para ser extendido. Actualmente preparado para soportar:
- Subida y gestión de archivos en Firebase Storage
- Autenticación con Firebase Auth *(próximamente)*

---

## 📄 Documentación API

La documentación interactiva generada con **Swagger** está disponible una vez que el servidor esté corriendo:

```
http://localhost:{PORT}/api
```

Desde ahí podés explorar y probar todos los endpoints disponibles directamente en el navegador.

---

## 🗺️ Roadmap

- [ ] 🐳 Agregar `Dockerfile` y `docker-compose.yml`
- [ ] 🔥 Implementar service y controller para autenticación con Firebase
- [ ] ✅ Agregar suite de testing (unit + e2e)

---

## 📝 Notas

> Este repositorio **no incluye tests**. Está pensado como punto de partida para proyectos nuevos donde la configuración base ya está resuelta.

---

<p align="center">Hecho para ahorrar tiempo en cada nuevo proyecto 🚀</p>
