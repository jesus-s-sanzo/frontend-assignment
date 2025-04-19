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

1. **Diseño y experiencia de usuario (UX/UI)**
   - Implementar un diseño más atractivo y responsivo utilizando librerías de estilo como TailwindCSS o Material-UI.
   - Agregar animaciones suaves para transiciones entre vistas y al expandir tarjetas de películas.
   - Corregir el posicionamiento de la película en vista detallada, actualmente aunque se adapta para aparecer en la pantalla no siempre lo hace en el sitio óptimo.

2. **Optimización del rendimiento**
   - Implementar carga diferida (lazy loading) para imágenes y componentes.

3. **Gestión de estado avanzada**
   - Reemplazar el uso de `useState` con una librería de gestión de estado como `@preact/signals-react` o Redux para manejar el estado global de las películas y los favoritos.
   - Sincronizar los favoritos entre múltiples dispositivos utilizando una API, almacenamiento en la nube o base de datos.

4. **Mejoras en accesibilidad (a11y)**
   - Asegurar que todos los elementos interactivos tengan atributos ARIA adecuados.
   - Probar la aplicación con herramientas como Lighthouse para garantizar una buena accesibilidad.

5. **Pruebas más completas**
   - Escribir pruebas unitarias y de integración más detalladas para todos los componentes.
   - Agregar pruebas end-to-end (E2E) con Cypress o Playwright para verificar el flujo completo de la aplicación.

6. **Internacionalización (i18n)**
   - Agregar soporte para múltiples idiomas utilizando una librería como `react-i18next`.

7. **Manejo de errores**
   - Implementar un sistema global de manejo de errores para mostrar mensajes amigables al usuario en caso de fallos en la API o problemas de red.
   - Agregar un componente de fallback para manejar errores en el árbol de componentes.

8. **Optimización de la API**
   - Implementar un sistema de caché más robusto para evitar llamadas redundantes a la API.
   - Utilizar librerías como `react-query` o `swr` para manejar la sincronización y el estado de los datos de la API.

9. **Documentación**
   - Agregar documentación técnica sobre la estructura del proyecto, decisiones de diseño y cómo extender la funcionalidad.

10. **Autenticación y personalización**
    - Agregar un sistema de autenticación para que los usuarios puedan guardar sus favoritos en su cuenta.
    - Permitir personalizar la experiencia del usuario, como temas claros/oscuros o filtros de búsqueda avanzados.

11. **SEO y optimización para motores de búsqueda**
    - Agregar metaetiquetas dinámicas para mejorar el SEO.
    - Implementar prerenderizado o renderizado del lado del servidor (SSR) con frameworks como Next.js.

12. **Soporte offline**
    - Implementar un Service Worker para permitir que la aplicación funcione sin conexión (PWA).

13. **Funcionalidades ampliadas**
    - Filtrado de favoritos.
    - Búsqueda de películas, filtrado por distintos campos, ordenación.
    - Integración con sistemas externos de visionado o compra de películas.
    - Funcionalidad social para compartir tus películas favoritas.
    - Anotaciones o comentarios del usuario acerca de las películas.
    - Comentarios públicos de otros usuarios sobre las películas.