# RegistroVisitasWeb

## Descripción
Sistema web para registro de entrada y salida de personas (visitantes y personal). Control y reporte, interfaz moderna, adaptable, y visualmente atractiva, hecho desde cero por macespedesd.

## Estructura del Proyecto

- **frontend/**: Aplicación React para la interfaz de usuario
- **backend/**: API REST con Node.js y Express

## Estructura de Páginas del Frontend

### 📂 /src/App.js
Componente principal de la aplicación que configura el enrutamiento de todas las páginas.

**Rutas disponibles:**
- `/` → Redirecciona a `/login`
- `/login` → Página de inicio de sesión
- `/entrada` → Registro de entrada de visitantes
- `/salida` → Registro de salida de visitantes
- `/panel` → Panel de control administrativo

### 📁 /src/pages/

#### 1️⃣ Login.js
**Ruta:** `/login`

**Descripción:** Página de autenticación para acceso al sistema.

**Características:**
- Formulario de inicio de sesión con usuario y contraseña
- Validación de campos requeridos
- Diseño moderno con colores llamativos
- Layout centrado tipo tarjeta (card)

#### 2️⃣ RegistroEntrada.js
**Ruta:** `/entrada`

**Descripción:** Formulario para registrar el ingreso de visitantes al establecimiento.

**Características:**
- Formulario completo con campos:
  - Nombre y Apellido
  - Número de Documento
  - Empresa
  - Persona a Visitar
  - Motivo de la Visita
- Validación de campos obligatorios
- Layout en dos columnas para mejor organización
- Diseño con colores vibrantes
- Iconos visuales (📝)

#### 3️⃣ RegistroSalida.js
**Ruta:** `/salida`

**Descripción:** Formulario para registrar la salida de visitantes del establecimiento.

**Características:**
- Búsqueda por número de documento
- Campo de observaciones opcional
- Mensaje informativo para verificación
- Diseño simple y directo
- Colores diferenciados del registro de entrada
- Iconos visuales (🚪)

#### 4️⃣ PanelControl.js
**Ruta:** `/panel`

**Descripción:** Dashboard administrativo para monitoreo y gestión de todas las visitas.

**Características:**
- **Estadísticas en tiempo real:**
  - Total de visitas
  - Visitas activas (aún dentro del establecimiento)
  - Visitas finalizadas (ya salieron)
- **Sistema de filtros:**
  - Filtrar por estado: todas/activas/finalizadas
  - Búsqueda por nombre, documento o empresa
- **Tabla de registros completa:**
  - Información detallada de cada visita
  - Estado visual con badges de color
  - Hora de entrada y salida
  - Datos del visitante y empresa
- **Diseño tipo dashboard:**
  - Tarjetas de estadísticas con colores diferenciados
  - Iconos visuales (📊, ✅, 🚪)
  - Tabla responsive con estados visuales

## Características de Diseño

Todas las páginas están desarrolladas con:
- ✅ Estructura básica de componente React funcional
- 🎨 Colores llamativos y vibrantes para cada sección
- 📱 Layout listo para implementar diseño responsive
- 🎯 Títulos y subtítulos descriptivos
- 🔧 Hooks de React (useState, useEffect) preparados
- 💬 Console.log para debugging durante desarrollo
- 📝 Comentarios indicando dónde implementar la lógica del backend

## Próximos Pasos

1. Crear archivos CSS correspondientes para cada componente
2. Implementar la conexión con el backend
3. Agregar validaciones avanzadas
4. Implementar autenticación real
5. Agregar manejo de errores y notificaciones
6. Hacer responsive el diseño

---

**Desarrollado por:** macespedesd
