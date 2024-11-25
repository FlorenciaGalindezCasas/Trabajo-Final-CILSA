# Trabajo-Final-CILSA

![login](login.png)

![home](home.png)


## EER Diagram
![db](db.jpg)


## Descripción
Esta es una aplicación web diseñada para gestionar listas de tareas. Los usuarios pueden agregar nuevas tareas, marcar tareas como completadas, editar las existentes y eliminar las que ya no sean necesarias. La aplicación cuenta con una interfaz intuitiva y amigable, pensada para facilitar su uso.

## Características de la Aplicación

### Frontend
- **Interfaz amigable**: Diseñada para que los usuarios interactúen de manera sencilla con la lista de tareas.
- **Vista principal**: Muestra todas las tareas, tanto pendientes como completadas.
- **Gestión de tareas**:
  - Agregar nuevas tareas mediante un formulario.
  - Marcar tareas como completadas.
  - Editar tareas existentes.
  - Eliminar tareas no necesarias.

### Backend
- **API RESTful**: Provee los endpoints necesarios para que el frontend interactúe con los datos de las tareas.
- **Operaciones CRUD**:
  - Crear nuevas tareas.
  - Leer tareas existentes.
  - Actualizar tareas.
  - Eliminar tareas.
- **Validación de datos**: Se garantiza la integridad de la información gestionada.

### Base de Datos
- **Almacenamiento**: Uso de una base de datos para guardar la información de las tareas.
- **Modelo de datos simple**:
  - Nombre de la tarea.
  - Descripción.
  - Estado (pendiente o completada).
- **Integración**: El backend realiza operaciones de lectura y escritura directamente en la base de datos.



## Tecnologías

List of technologies used in the project:
* [React + Vite](https://vitejs.dev/guide/)
* [Bootstrap](https://getbootstrap.com/)
* Node.js
* Express.js
* MySQL

## Version

* Node: v20.9.0
* npm: 7.24.2
* npm list:<br/>
├── @types/react-dom@18.2.18<br/>
├── @types/react@18.2.47<br/>
├── @vitejs/plugin-react@4.2.1<br/>
├── bootstrap@5.3.2<br/>
├── date-fns@3.2.0<br/>
├── eslint-plugin-react-hooks@4.6.0<br/>
├── eslint-plugin-react-refresh@0.4.5<br/>
├── eslint-plugin-react@7.33.2<br/>
├── eslint@8.56.0<br/>
├── moment@2.30.1<br/>
├── react-bootstrap@2.9.2<br/>
├── react-dom@18.2.0<br/>
├── react-icons@5.0.0<br/>
├── react-router-dom@6.21.2<br/>
├── react@18.2.0<br/>
└── vite@5.0.11<br/>

## Comandos

Comandos para correr la aplicación localmente:

* FrontEnd: npm run dev.

* BackEnd: npm start.

