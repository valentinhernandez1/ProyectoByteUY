# 🚀 Guía de Deployment - NexoDigital

Guía paso a paso para poner tu sitio web en producción.

## 📋 Checklist Pre-Deployment

Antes de hacer el deploy, asegúrate de:

- [ ] Configurar tu número de WhatsApp en `src/config/constants.js`
- [ ] Verificar que el email de contacto sea correcto
- [ ] Revisar todos los textos y contenido
- [ ] Probar el build localmente: `npm run build`
- [ ] Verificar que el preview funcione: `npm run preview`

## 🎯 Opciones de Hosting

### Opción 1: Vercel (Recomendado - Gratis y Fácil)

**Ventajas:**
- ✅ Gratis para proyectos personales
- ✅ Deploy automático desde GitHub
- ✅ SSL automático
- ✅ CDN global
- ✅ Dominio personalizado gratis
- ✅ Perfecto para sitios estáticos

**Pasos:**

1. **Preparar el proyecto:**
   ```bash
   # Asegúrate de que todo esté commiteado en Git
   git add .
   git commit -m "Ready for deployment"
   ```

2. **Crear cuenta en Vercel:**
   - Ve a [vercel.com](https://vercel.com)
   - Regístrate con GitHub (recomendado)

3. **Conectar repositorio:**
   - Click en "Add New Project"
   - Conecta tu repositorio de GitHub
   - Vercel detectará automáticamente que es un proyecto Vite

4. **Configuración del proyecto:**
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build` (automático)
   - **Output Directory:** `dist` (automático)
   - **Install Command:** `npm install` (automático)

5. **Deploy:**
   - Click en "Deploy"
   - En 1-2 minutos tu sitio estará online
   - Obtendrás una URL tipo: `nexodigital.vercel.app`

6. **Configurar dominio personalizado:**
   - En el dashboard de Vercel, ve a Settings > Domains
   - Agrega tu dominio (ej: `nexodigital.uy` o `www.nexodigital.uy`)
   - Sigue las instrucciones para configurar DNS

---

### Opción 2: Netlify (Alternativa Gratuita)

**Ventajas:**
- ✅ Gratis
- ✅ Deploy desde GitHub
- ✅ SSL automático
- ✅ Formularios y funciones serverless (si las necesitas después)

**Pasos:**

1. **Crear cuenta en Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Regístrate con GitHub

2. **Deploy:**
   - Click en "Add new site" > "Import an existing project"
   - Conecta tu repositorio
   - Configuración automática:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Deploy y listo:**
   - Obtendrás una URL tipo: `nexodigital.netlify.app`

---

### Opción 3: GitHub Pages (Gratis pero más limitado)

**Ventajas:**
- ✅ Gratis
- ✅ Integrado con GitHub

**Desventajas:**
- ⚠️ Solo funciona con repositorios públicos (o GitHub Pro)
- ⚠️ URL será: `usuario.github.io/repo-name`

**Pasos:**

1. **Instalar plugin de Vite para GitHub Pages:**
   ```bash
   npm install -D vite-plugin-gh-pages
   ```

2. **Actualizar `vite.config.js`:**
   ```js
   import { defineConfig } from 'vite'
   import react from '@vitejs/plugin-react'
   import ghPages from 'vite-plugin-gh-pages'

   export default defineConfig({
     plugins: [react(), ghPages()],
     base: '/nexodigital/' // Cambia por el nombre de tu repo
   })
   ```

3. **Agregar script en `package.json`:**
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

---

### Opción 4: Hosting Tradicional (cPanel, Hostinger, etc.)

Si ya tienes hosting compartido:

1. **Hacer build:**
   ```bash
   npm run build
   ```

2. **Subir archivos:**
   - La carpeta `dist/` contiene todos los archivos
   - Sube TODO el contenido de `dist/` a la carpeta `public_html` o `www` de tu hosting
   - Asegúrate de que `index.html` esté en la raíz

3. **Configurar servidor:**
   - Si tienes problemas con rutas, crea un archivo `.htaccess` en la raíz:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🌐 Configuración de Dominio

### Si usas Vercel o Netlify:

1. **Comprar dominio:**
   - En Uruguay: NIC.uy, GoDaddy, Namecheap, etc.
   - Ejemplo: `nexodigital.uy`

2. **Configurar DNS:**
   - Ve al panel de tu proveedor de dominio
   - Agrega estos registros según tu plataforma:

   **Para Vercel:**
   ```
   Tipo: A
   Nombre: @
   Valor: 76.76.21.21
   
   Tipo: CNAME
   Nombre: www
   Valor: cname.vercel-dns.com
   ```

   **Para Netlify:**
   ```
   Tipo: A
   Nombre: @
   Valor: 75.2.60.5
   
   Tipo: CNAME
   Nombre: www
   Valor: tu-sitio.netlify.app
   ```

3. **Esperar propagación:**
   - Puede tardar 24-48 horas
   - Verifica con: [whatsmydns.net](https://www.whatsmydns.net)

---

## 🔧 Configuración Post-Deployment

### 1. Verificar que todo funcione:
- [ ] El sitio carga correctamente
- [ ] Los botones de WhatsApp funcionan
- [ ] El diseño es responsive en móvil
- [ ] Los enlaces internos funcionan
- [ ] El SEO está correcto (verifica con herramientas)

### 2. Configurar Analytics (Opcional pero recomendado):

**Google Analytics 4:**
1. Crea cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtén tu Measurement ID (G-XXXXXXXXXX)
3. Agrega en `index.html` antes de `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 3. Verificar SEO:
- Usa [Google Search Console](https://search.google.com/search-console)
- Verifica que el sitio esté indexado
- Revisa meta tags con herramientas como [metatags.io](https://metatags.io)

### 4. Configurar SSL:
- Vercel y Netlify lo hacen automáticamente
- Si usas hosting tradicional, activa SSL (Let's Encrypt es gratis)

---

## 📱 Verificación Final

Antes de anunciar tu sitio:

- [ ] Probar en diferentes navegadores (Chrome, Firefox, Safari, Edge)
- [ ] Probar en móvil (iOS y Android)
- [ ] Verificar velocidad: [PageSpeed Insights](https://pagespeed.web.dev)
- [ ] Verificar que WhatsApp funcione desde móvil y desktop
- [ ] Revisar ortografía y gramática
- [ ] Verificar que todos los enlaces funcionen

---

## 🔄 Actualizaciones Futuras

Cada vez que quieras actualizar el sitio:

**Con Vercel/Netlify (automático):**
- Haz push a GitHub
- El deploy se hace automáticamente

**Con hosting tradicional:**
```bash
npm run build
# Sube los archivos de dist/ nuevamente
```

---

## 💡 Recomendación Final

**Para NexoDigital, recomiendo Vercel porque:**
1. Es gratis y fácil de usar
2. Deploy automático desde GitHub
3. Perfecto para sitios estáticos
4. SSL y CDN incluidos
5. Fácil de escalar cuando lances el SaaS

**Pasos rápidos:**
1. Sube tu código a GitHub
2. Conecta con Vercel
3. Deploy en 2 minutos
4. Agrega tu dominio
5. ¡Listo!

---

## 🆘 Problemas Comunes

**El sitio no carga:**
- Verifica que el build se haya completado sin errores
- Revisa la configuración de rutas base

**WhatsApp no funciona:**
- Verifica que el número esté en formato correcto (598XXXXXXXXX)
- Prueba desde móvil

**Estilos no se ven:**
- Verifica que Tailwind esté configurado correctamente
- Revisa la consola del navegador

**Dominio no funciona:**
- Espera 24-48 horas para propagación DNS
- Verifica los registros DNS con tu proveedor

---

¿Necesitas ayuda con algún paso específico? ¡Avísame!

