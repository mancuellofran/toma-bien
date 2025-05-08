# TomaBien 💊❤️

> **Organiza, entiende y toma el control de tus medicamentos. Pensado para Latinoamérica.**

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-blue)](https://nextjs.org/)
[![Hackathon midudev](https://img.shields.io/badge/Hackathon-midudev-purple)](https://twitch.tv/midudev)

---

TomaBien es una aplicación web que ayuda a personas de Latinoamérica a entender, organizar y mejorar la adherencia a sus tratamientos médicos. Con recordatorios inteligentes, información clara y un enfoque en la accesibilidad, TomaBien busca empoderar a los pacientes y evitar errores de medicación.

## 📋 Tabla de Contenidos
- [¿Qué es TomaBien?](#qué-es-tomabien)
- [Estructura del proyecto](#️-estructura-del-proyecto)
- [Tecnologías principales](#️-tecnologías-principales)
- [Levantar el proyecto en local](#-levantar-el-proyecto-en-local)
- [Autenticación con Clerk](#-autenticación-con-clerk)
- [Scripts útiles](#-scripts-útiles)
- [Autor](#-autor)
- [Licencia](#-licencia)

## 🚀 ¿Qué es TomaBien?
TomaBien permite:
- Registrar tratamientos médicos de manera sencilla.
- Crear recordatorios para no olvidar ninguna dosis.
- Utilizar IA para explicar estudios médicos y recetas.
- Acceder a información clara y útil sobre medicamentos y tratamientos.

> **Objetivo:** Mejorar la adherencia a los tratamientos, evitar errores de medicación y empoderar a los pacientes con información clara y accesible.

## 🗂️ Estructura del proyecto

```
toma-bien/
├── public/                # Archivos públicos y estáticos (imágenes, favicon, etc)
├── src/
│   ├── app/               # Rutas y páginas principales (Next.js App Router)
│   ├── components/        # Componentes reutilizables
│   │   └── ui/            # Componentes de UI (botones, inputs, etc)
│   └── lib/               # Funciones y utilidades compartidas
├── .next/                 # Carpeta generada por Next.js (build)
├── package.json           # Configuración de dependencias y scripts
├── tailwind.config.js     # Configuración de Tailwind CSS
├── tsconfig.json          # Configuración de TypeScript
├── README.md              # Este archivo
└── ...
```

## 🛠️ Tecnologías principales
- [Next.js 15](https://nextjs.org/)
- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Clerk](https://clerk.com/) (autenticación)

## 💻 Levantar el proyecto en local

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/mancuellofran/toma-bien.git
   cd toma-bien
   ```

2. **Instala las dependencias:**
   Si usas [pnpm](https://pnpm.io/):
   ```bash
   pnpm install
   ```
   O con npm:
   ```bash
   npm install
   ```
   O con yarn:
   ```bash
   yarn install
   ```

3. **Configura las variables de entorno:**
   - Duplica el archivo `.env.example` y renómbralo a `.env`:
     ```bash
     cp .env.example .env
     ```
   - Completa las claves de Clerk siguiendo la sección [Autenticación con Clerk](#-autenticación-con-clerk).

4. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm dev
   # o
   npm run dev
   # o
   yarn dev
   ```

5. **Abre la app en tu navegador:**
   Ve a [http://localhost:3000](http://localhost:3000)

## 🔑 Autenticación con Clerk

Este proyecto utiliza [Clerk](https://clerk.com/) para la autenticación de usuarios.

### ¿Cómo obtener las claves de Clerk?
1. Crea una cuenta en [Clerk](https://clerk.com/).
2. Crea un nuevo proyecto (application) desde el dashboard de Clerk.
3. Ve a la sección **API Keys** o **Settings > API Keys** de tu proyecto.
4. Copia los valores de:
   - **Publishable Key** (para `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`)
   - **Secret Key** (para `CLERK_SECRET_KEY`)

### Configuración del archivo `.env`
1. Duplica el archivo `.env.example` y renómbralo a `.env`:
   ```bash
   cp .env.example .env
   ```
2. Pega las claves obtenidas de Clerk en las variables correspondientes:
   ```env
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx
   CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
   ```
3. ¡Listo! Ya puedes iniciar el proyecto en local con autenticación habilitada.

## 📦 Scripts útiles
- `dev`: Levanta el entorno de desarrollo.
- `build`: Compila la aplicación para producción.
- `start`: Inicia la app en modo producción.
- `lint`: Ejecuta el linter.

## 👨‍💻 Autor
- Francisco Mancuello — [@mancuellofran](https://instagram.com/mancuellofran)

## 📄 Licencia
MIT
