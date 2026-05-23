# 📋 INSTRUCCIONES PARA HACER COMMITS
## Para TODO el equipo - Paso a Paso

---

## 👥 EQUIPO Y RESPONSABILIDADES

| Persona | Repo | Qué sube | Commits totales |
|---------|------|----------|-----------------|
| **Juan David** | Backend | Auth, Config, Common, Notifications, Reports | 75 |
| **Ricardo Duran** | Frontend | Dashboard, Layouts, Portal Público, Configuración | 100 |
| **Jhamil Alcides** | Backend | Properties, Units, Tenants, Employees, Owners | 65 |
| **Jhosep Mitico** | Backend | Contracts, Applications, Payments, Billing | 70 |
| **Jhurguen Ergueta** | Frontend | Propiedades, Units, Empleados, Contratos, Solicitudes | 80 |
| **Fabian Ledezma** | Backend + Frontend | Maintenance, Inspections, Expenses + Inquilinos, Pagos | 95 |

---

## 🚀 PASO 1: PREPARACIÓN (SOLO PRIMERA VEZ)

### Todos hacen esto:

```bash
# 1. Clonar los repositorios originales (tienen TODO el código)
git clone https://github.com/365Soft-Bolivia/GestionAlquileres_365Soft-backend.git
git clone https://github.com/365Soft-Bolivia/GestionAlquileres_365Soft-frontend.git

# 2. Configurar git con TU nombre
git config --global user.name "Tu Nombre Completo"
git config --global user.email "tu-email@gmail.com"
```

---

## 🔗 PASO 2: CONECTAR AL NUEVO REPO

### Backend (Juan David, Jhamil, Jhosep, Fabian):

```bash
cd GestionAlquileres_365Soft-backend
git remote remove origin
git remote add origin https://github.com/juandavid/alquileres-facultad.git
git branch -M main
```

### Frontend (Ricardo, Jhurguen, Fabian):

```bash
cd GestionAlquileres_365Soft-frontend
git remote remove origin
git remote add origin https://github.com/juandavid/alquileres-facultad.git
git branch -M main
```

**Nota:** Cambiar `juandavid` por el usuario que creó el repo.

---

## ✅ PASO 3: HACER COMMITS

### IMPORTANTE: Leer esto primero

**Los archivos YA ESTÁN en tu computadora** porque clonaste el repositorio completo.

**NO necesitas copiar archivos. Solo necesitas agregar al git los archivos que te corresponden.**

---

### Ejemplo: Juan David - Commit #1

```bash
# 1. Asegurarte de estar en la carpeta del proyecto
cd GestionAlquileres_365Soft-backend

# 2. Agregar SOLO los archivos de TU commit
# Los archivos YA ESTÁN en la carpeta, solo agregalos al git

git add .gitignore
git add .env.example
git add .env.production.example
git add package.json
git add package-lock.json
git add tsconfig.json
git add nest-cli.json
git add README.md

# O TODOS juntos:
git add .gitignore .env.example .env.production.example package.json package-lock.json tsconfig.json nest-cli.json README.md

# 3. Hacer commit con el mensaje
git commit -m "chore: configuración inicial del proyecto NestJS

- Inicializar estructura del proyecto NestJS
- Instalar dependencias core
- Configurar TypeScript y ESLint
- Agregar plantillas de configuración"

# 4. Verificar que se hizo el commit
git log --oneline -1

# Debe mostrar algo como: abc1234 chore: configuración inicial del proyecto
```

---

### Ejemplo: Ricardo Duran - Commit #7

```bash
# 1. Asegurarte de estar en TU carpeta de frontend
cd GestionAlquileres_365Soft-frontend

# 2. Agregar tus archivos
git add .gitignore .eslintrc.json .prettierrc angular.json karma.conf.js nginx.conf package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.spec.json project.json README.md

# 3. Hacer commit
git commit -m "chore: inicializar proyecto Angular 21 con soporte PWA

- Crear estructura del proyecto Angular
- Instalar Angular Material
- Configurar TailwindCSS
- Configurar PWA con service worker"
```

---

### Ejemplo: Jhamil Alcides - Commit #12

```bash
# 1. Asegurarte de estar en TU carpeta de backend
cd GestionAlquileres_365Soft-backend

# 2. Crear las carpetas SI NO EXISTEN
mkdir -p src/properties/entities

# 3. Agregar tus archivos de properties
git add src/properties/entities/property.entity.ts
git add src/properties/entities/property-address.entity.ts
git add src/properties/entities/property-owner.entity.ts
git add src/properties/entities/property-type.entity.ts
git add src/properties/entities/property-subtype.entity.ts

# 4. Hacer commit
git commit -m "feat(properties): crear entidades de propiedades y relaciones

- Property entity - Modelo principal de propiedad
- PropertyAddress entity - Información de dirección
- PropertyOwner entity - Relación con propietario
- PropertyType entity - Catálogo de tipos
- PropertySubtype entity - Catálogo de subtipos"
```

---

## 📤 PASO 4: PUSH A GITHUB

### Hacer push CADA 3-5 COMMITS (no es necesario en cada commit)

```bash
# Push tus commits directamente a main
git push origin main
```

---

## 🔁 REPETIR CADA DÍA

### Todos los días:

1. **Abrir el documento CALENDARIO_COMPLETO_MAYO_JUNIO.md**
2. **Ver qué commits te tocan ese día**
3. **Seguir los pasos del PASO 3 para hacer los commits**
4. **Push cada 3-5 commits directamente a main**

---

## ⚠️ ERRORES COMUNES Y SOLUCIONES

### Error: "git add" no funciona

**Solución:**
```bash
# Verificar que estás en la carpeta correcta
pwd

# Si estás en la carpeta equivocada:
cd GestionAlquileres_365Soft-backend  # o frontend

# Verificar que el archivo existe
ls la/ruta/del/archivo

# Si el archivo NO existe, verificar que clonaste el repo correcto
```

---

### Error: "git commit" dice "nothing to commit"

**Solución:**
```bash
# Verificar qué archivos cambiaron
git status

# Si no muestras nada, verificar que agregaste los archivos
git add nombre-del-archivo

# O agregar todos los cambios
git add .
```

---

### Error: "git push" falla

**Solución:**
```bash
# Primero hacer pull de cambios remotos
git pull origin main --rebase

# Resolver conflictos si hay

# Luego hacer push
git push origin main
```

---

### Error: "remote: Repository not found"

**Solución:**
```bash
# Verificar que el remote está correcto
git remote -v

# Si es incorrecto, corregirlo:
git remote remove origin
git remote add origin https://github.com/USUARIO_CORRECTO/alquileres-facultad.git
```

---

## 📊 CHECKLIST DIARIO

Antes de empezar:
- [ ] Abrir CALENDARIO_COMPLETO_MAYO_JUNIO.md
- [ ] Verificar qué commits me tocan hoy
- [ ] Verificar que estoy en la carpeta correcta (backend o frontend)

Durante el día:
- [ ] Hacer commits según el calendario
- [ ] Agregar SOLO los archivos de mi commit
- [ ] Usar el mensaje exacto del calendario
- [ ] Push cada 3-5 commits directamente a main

Al final del día:
- [ ] Push de todos mis commits restantes
- [ ] Verificar en GitHub que mis commits aparecieron

---

## 🎯 EJEMPLO COMPLETO: PRIMER DÍA DE JUAN DAVID

```bash
# POR LA MAÑANA

# Commit #1 - 09:00 AM
cd GestionAlquileres_365Soft-backend
git add .gitignore .env.example .env.production.example package.json package-lock.json tsconfig.json nest-cli.json README.md
git commit -m "chore: configuración inicial del proyecto NestJS..."
git log --oneline -1

# Commit #2 - 11:00 AM (2 horas después)
git add docker/
git commit -m "feat(docker): agregar configuración Docker..."
git log --oneline -1

# Commit #3 - 14:00 PM
git add src/main.ts src/app.module.ts src/app.controller.ts src/app.service.ts
git commit -m "feat(core): crear módulos de inicio..."
git log --oneline -1

# Commit #4 - 16:00 PM
git add src/common/config/
git commit -m "feat(config): agregar módulo de configuración..."
git log --oneline -1

# Commit #5 - 18:00 PM
git add src/common/constants/ src/common/decorators/
git commit -m "feat(core): agregar decoradores..."
git log --oneline -1

# Commit #6 - 20:00 PM
git add src/common/guards/
git commit -m "feat(guards): implementar guards..."
git log --oneline -1

# AL FINAL DEL DÍA
git push origin main
```

---

## 💡 CONSEJOS

1. **Tomarse su tiempo** - No tienen prisa, tienen 28 días
2. **Seguir el calendario** - Está diseñado para ser creíble
3. **Verificar antes de commit** - Revisar qué archivos agregan
4. **Mensajes exactos** - Usar los mensajes del calendario tal cual
5. **Comunicarse** - Crear grupo de WhatsApp para coordinarse
6. **Ser consistentes** - Hacer commits todos los días
7. **Hacer pull con rebase** - Antes de push, hacer `git pull origin main --rebase` para evitar conflictos

---

## 📞 AYUDA

Si alguien tiene problemas:
1. Verificar el checklist de errores comunes
2. Preguntar en el grupo de WhatsApp
3. Revisar el CALENDARIO_COMPLETO_MAYO_JUNIO.md

---

**¡LISTO PARA EMPEZAR! 🚀**

*Sábado 23 Mayo 2025 - Inicio*
*Jueves 19 Junio 2025 - Fin*
*28 días de desarrollo*
