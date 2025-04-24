# PortfolioP

PortfolioP es un proyecto de portafolio personal desarrollado con **React**, **TypeScript**, y **Vite**. Este proyecto utiliza **Bootstrap** para el diseño responsivo y cuenta con un modo oscuro/claro.

## Se ha usado herramientas como ChatGPT y Copilot para automatizar codigo e inspiración

## Tabla de Contenidos

- [Características](#características)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)

---

## Características

- **React + TypeScript**: Desarrollo moderno con tipado estático.
- **Vite**: Herramienta de construcción rápida con soporte para HMR (Hot Module Replacement).
- **Bootstrap**: Diseño responsivo y componentes predefinidos.
- **Modo Oscuro/Claro**: Cambio dinámico entre temas.
- **Configuración ESLint y Prettier**: Código limpio y consistente.
- **Rutas Dinámicas**: Navegación entre páginas con React Router.

---

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión 16 o superior)
- [npm](https://www.npmjs.com/)

---

## Instalación

1. Clona este repositorio:

   git clone https://github.com/tu-usuario/PortfolioP.git
   cd PortfolioP/portfolioP

## Uso
Para iniciar el servidor de desarrollo:
  npm run dev

## Scripts disponibles
  En el archivo package.json, encontrarás los siguientes scripts:
  dev: Inicia el servidor de desarrollo.
  build: Compila la aplicación para producción.
  lint: Ejecuta ESLint y TypeScript para verificar errores.
  format: Formatea el código con Prettier.
  preview: Previsualiza la aplicación compilada
  npm run build
  npm run preview
## Estructura del Proyecto

```plaintext
portfolioP/
├── src/                # Código fuente
│   ├── components/     # Componentes reutilizables
│   │   ├── Pagina1.tsx # Página 1
│   │   └── Contacto.tsx # Página de contacto
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Punto de entrada
│   ├── App.css         # Estilos personalizados
│   └── vite-env.d.ts   # Tipos de Vite
├── public/             # Archivos estáticos
├── tsconfig.json       # Configuración de TypeScript
├── vite.config.ts      # Configuración de Vite
├── package.json        # Dependencias y scripts
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Documentación del proyecto
```