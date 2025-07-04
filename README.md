# CFA - Registro de Inasistencias Docentes

Aplicación web para el registro y gestión de inasistencias docentes del Colegio Florentino Ameghino de Añatuya, Santiago del Estero.

![App Screenshot](https://cdn-icons-png.flaticon.com/512/4472/4472550.png)

## Características principales

- Registro de inasistencias docentes con motivo/artículo
- Visualización de ausencias por fecha
- Autenticación de administradores
- Interfaz responsive para dispositivos móviles y desktop
- Conexión con Firebase para persistencia de datos
- Generación de listados filtrados por fecha

## Tecnologías utilizadas

- **Frontend**:

  - React 19
  - Vite
  - Tailwind CSS
  - React Router
  - Heroicons
  - Lucide React
  - SweetAlert2

- **Backend**:

  - Firebase (Firestore, Authentication)

- **Herramientas**:
  - ESLint
  - Prettier
  - Git

## Estructura del proyecto

```
src/
├── components/       # Componentes reutilizables
├── context/          # Contextos de React
├── firebase/         # Configuración de Firebase
├── pages/            # Páginas principales
├── utils/            # Funciones utilitarias
├── App.jsx           # Componente principal
└── main.jsx          # Punto de entrada
```

## Configuración inicial

1. Clonar el repositorio:

   ```bash
   git clone [url-del-repositorio]
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Configurar Firebase:

   - Crear un archivo `.env` con las credenciales de Firebase
   - Configurar Firestore y Authentication en la consola de Firebase

4. Iniciar la aplicación:
   ```bash
   npm run dev
   ```

## Scripts disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Crea una versión optimizada para producción
- `npm run lint`: Ejecuta ESLint para verificar el código
- `npm run preview`: Previsualiza la versión de producción

## Despliegue

La aplicación está configurada para desplegarse en cualquier servicio que soporte aplicaciones Vite/React, como:

- Firebase Hosting
- Vercel
- Netlify
- GitHub Pages

## Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request con tus sugerencias.

## Licencia

Este proyecto está bajo la licencia MIT.

## Contacto

- Desarrollador: Carlos E. Rodriguez
- GitHub: [RodrDevs80](https://github.com/RodrDevs80)
- LinkedIn: [Carlos Rodriguez](https://www.linkedin.com/in/carlos-rodriguez-developerwebjr/)
- Email: rodr26707@gmail.com

```

Este README incluye:
1. Descripción clara del proyecto
2. Tecnologías utilizadas
3. Estructura del proyecto
4. Instrucciones de instalación
5. Scripts disponibles
6. Opciones de despliegue
7. Información de contacto
8. Licencia

```
