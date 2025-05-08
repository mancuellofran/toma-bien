# TomaBien

TomaBien es una aplicación web pensada para Latinoamérica que ayuda a los usuarios a entender y organizar el consumo de sus medicamentos de forma simple y accesible.

## 🚀 ¿Qué es TomaBien?
TomaBien permite:
- Registrar tratamientos médicos de manera sencilla.
- Crear recordatorios para no olvidar ninguna dosis.
- Utilizar IA para explicar estudios médicos y recetas.
- Acceder a información clara y útil sobre medicamentos y tratamientos.

El objetivo es mejorar la adherencia a los tratamientos, evitar errores de medicación y empoderar a los pacientes con información clara y accesible.

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

3. **Inicia el servidor de desarrollo:**
   ```bash
   pnpm dev
   # o
   npm run dev
   # o
   yarn dev
   ```

4. **Abre la app en tu navegador:**
   Ve a [http://localhost:3000](http://localhost:3000)

## 📦 Scripts útiles
- `dev`: Levanta el entorno de desarrollo.
- `build`: Compila la aplicación para producción.
- `start`: Inicia la app en modo producción.
- `lint`: Ejecuta el linter.

## 👨‍💻 Autor
- Francisco Mancuello — [@mancuellofran](https://github.com/mancuellofran)

