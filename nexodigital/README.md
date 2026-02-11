# Byte UY - Sitio Web Corporativo

Sitio web profesional para Byte UY, agencia digital en Uruguay. Enfocado en conversión y generación de leads a través de WhatsApp.

## 🚀 Tecnologías

- **React 19** - Framework frontend
- **Vite** - Build tool y dev server
- **Tailwind CSS 4** - Estilos utility-first
- **ESLint** - Linting y calidad de código

## 📁 Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── Footer.jsx
│   └── WhatsAppButton.jsx
├── sections/         # Secciones de la página
│   ├── Hero.jsx
│   ├── Services.jsx
│   ├── Differentiation.jsx
│   ├── SaaSPreview.jsx
│   └── WhatsAppCTA.jsx
├── config/          # Configuración centralizada
│   └── constants.js
├── utils/           # Utilidades
│   └── whatsapp.js
├── App.jsx          # Componente principal
└── main.jsx         # Entry point
```

## 🛠️ Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para Producción

```bash
npm run build
```

Los archivos optimizados se generan en la carpeta `dist/`.

### Preview del Build

```bash
npm run preview
```

## ⚙️ Configuración

### Número de WhatsApp

Edita `src/config/constants.js` y reemplaza `WHATSAPP_NUMBER` con tu número real:

```javascript
WHATSAPP_NUMBER: '59812345678', // Formato: código país + número
```

**Importante:** 
- Incluye el código de país (598 para Uruguay)
- Sin espacios, guiones ni caracteres especiales
- Ejemplo: `59812345678`

### Email de Contacto

Actualiza `CONTACT_EMAIL` en el mismo archivo si es necesario.

## 🎨 Personalización

### Colores

Los colores principales están definidos en `tailwind.config.js` bajo el tema `primary`. Puedes ajustarlos según tu marca.

### Contenido

Cada sección está en su propio archivo dentro de `src/sections/`. Edita directamente el contenido según tus necesidades.

## 📱 Características

- ✅ Diseño responsive (mobile-first)
- ✅ SEO optimizado con meta tags
- ✅ Botones de WhatsApp con mensajes pre-llenados
- ✅ Arquitectura escalable y modular
- ✅ Sin animaciones innecesarias (enfoque en conversión)
- ✅ Código limpio y mantenible

## 🚢 Próximos Pasos

1. **Configurar número de WhatsApp** en `src/config/constants.js`
2. **Personalizar contenido** en las secciones
3. **Agregar imágenes/logo** si es necesario
4. **Configurar dominio** y deploy
5. **Configurar analytics** (Google Analytics, etc.)

## 📝 Notas

- El sitio está diseñado para conversión, no para impresionar con animaciones
- Todos los CTAs apuntan a WhatsApp para maximizar leads
- La estructura permite fácil extensión a plataforma SaaS más adelante
- SEO configurado para mercado uruguayo

## 📄 Licencia

Privado - Byte UY © 2025
