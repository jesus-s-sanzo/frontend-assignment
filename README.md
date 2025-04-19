# Movie Explorer App

## Objetivo

Construir una pequeña aplicación web en React que consuma una API y permita explorar una lista de películas. Queremos que trates este mini proyecto como si lo fueses a poner en producción.

## Requisitos

El único requisito es el siguiente: de usarse alguna librería para gestión de estado, cosa totalmente opcional, por favor usar `@preact/signals-react`

## Instrucciones

Listado de películas:

- Muestra el título, imagen y resumen de cada show.
- Paginación o scroll infinito (mínimo 20 elementos visibles).

Detalle:

- Al hacer clic en una película, muestra una vista de detalle con más información.

Favoritos:

- El usuario puede marcar películas como favoritas (almacenado en localStorage).

Usa esta API pública de ejemplo `GET https://api.tvmaze.com/shows`.

Incluye un README explicando brevemente qué harías diferente con más tiempo.

## Entrega

Sube tu código a un repo de GitHub. Si es privado trendrás que darnos acceso (usuarios ograu y lonamiaec de github)

## Qué haría diferente con más tiempo

Si tuviera más tiempo para trabajar en este proyecto, implementaría las siguientes mejoras:

### Diseño y experiencia de usuario (UX/UI)
- Implementar un diseño más atractivo y responsivo utilizando librerías de estilo como TailwindCSS o Material-UI.
- Agregar animaciones suaves para transiciones entre vistas y al expandir tarjetas de películas.
- Corregir el posicionamiento de la pelicula en vista de tallada, actualmente aunque se adapta para aparecer en la pantalla no siempre lo hace en el sitio óptimo

### Optimización del rendimiento
- Implementar carga diferida (lazy loading) para imágenes y componentes.

### Gestión de estado avanzada
- Reemplazar el uso de `useState` con una librería de gestión de estado como `@preact/signals-react` o Redux para manejar el estado global de las películas y los favoritos.
- Sincronizar los favoritos entre múltiples dispositivos utilizando una API o almacenamiento en la nube.

### Mejoras en accesibilidad (a11y)
- Asegurar que todos los elementos interactivos tengan atributos ARIA adecuados.
- Probar la aplicación con herramientas como Lighthouse para garantizar una buena accesibilidad.

### Pruebas más completas
- Escribir pruebas unitarias y de integración más detalladas para todos los componentes.
- Agregar pruebas end-to-end (E2E) con Cypress o Playwright para verificar el flujo completo de la aplicación.

### Internacionalización (i18n)
- Agregar soporte para múltiples idiomas utilizando una librería como `react-i18next`.

### Manejo de errores
- Implementar un sistema global de manejo de errores para mostrar mensajes amigables al usuario en caso de fallos en la API o problemas de red.
- Agregar un componente de fallback para manejar errores en el árbol de componentes.

### Optimización de la API
- Implementar un sistema de caché más robusto para evitar llamadas redundantes a la API.
- Utilizar librerías como `react-query` o `swr` para manejar la sincronización y el estado de los datos de la API.

### Documentación
- Agregar documentación técnica sobre la estructura del proyecto, decisiones de diseño y cómo extender la funcionalidad.

### Autenticación y personalización
- Agregar un sistema de autenticación para que los usuarios puedan guardar sus favoritos en su cuenta.
- Permitir personalizar la experiencia del usuario, como temas claros/oscuros o filtros de búsqueda avanzados.

### SEO y optimización para motores de búsqueda
- Agregar metaetiquetas dinámicas para mejorar el SEO.
- Implementar prerenderizado o renderizado del lado del servidor (SSR) con frameworks como Next.js.

### Soporte offline
- Implementar un Service Worker para permitir que la aplicación funcione sin conexión (PWA).

### Funcionalidades ampliadas
- Filtrado de favoritos
- Busqueda de peliculas
- Integracion con sistemas externos de visionado o compra de peliculas
- Funcionalidad social para compartir tus películas favoritas
- Anotaciones o comentarios del usuario acerca de las películas
- Comentarios públicos de otros usuarios sobre las películas