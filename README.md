# Misión Ambiental · COLMAYOR

Aplicativo interactivo de orientación vocacional para estudiantes de último año de bachillerato. Diseñado para un docente, un proyector y equipos que toman decisiones con evidencia.

## Aventura anime · seis mundos de 4–6 minutos

- **La quebrada pide aire:** explorar pistas, usar un kit en tres estaciones y construir un circuito de tratamiento con módulos.
- **Conecta la vida:** comparar parches y resolver un puzzle de conexión con vegetación nativa y un paso de fauna.
- **La lluvia pone a prueba:** investigar sedimentos, colocar defensas y activar una tormenta para probar el plan.
- **Seis fichas para cambiar:** invertir un presupuesto limitado para reducir el uso de agua y energía en una industria.
- **Aire:** diseñar una red de monitoreo y comparar registros de partículas con las condiciones del viento.
- **Materiales:** decidir rutas de prevención, reúso, aprovechamiento y gestión diferenciada de residuos de un campus.

Presentación de aventura anime para estudiantes de bachillerato, personajes jóvenes adultos, detalles kawaii sutiles, escenarios andinos ilustrados, textos grandes, instrumentos visuales y seis minijuegos con mecánicas diferentes. Incluye modo docente, de 1 a 6 equipos, votaciones A/B/C, temporizador opcional, retroalimentación, simuladores, bitácora descargable, lectura opcional e información del programa de Ingeniería Ambiental del Colegio Mayor de Antioquia.

## Publicar con GitHub Pages

Los archivos están listos en la raíz de `main`. No requieren instalación ni compilación.

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona **main** y **/ (root)**; pulsa **Save**.
4. Espera la confirmación de publicación y abre la dirección que muestre GitHub.

Dirección esperada al activar Pages: https://ingeambientalcorrea-pixel.github.io/INGEAMBIENTALES/

El repositorio es público y GitHub Pages publica la rama main desde la raíz. Los cambios aprobados se publican al subir un nuevo commit y completar el flujo de Pages.

## Probar la aventura descargable

[Descargar el aplicativo en un solo archivo HTML (ZIP)](https://github.com/ingeambientalcorrea-pixel/INGEAMBIENTALES/raw/refs/heads/main/descargas/Mision-Ambiental-COLMAYOR.zip)

Descomprime el ZIP y abre **Mision-Ambiental-COLMAYOR.html**. Contiene ilustraciones, tipografías, estilos y juegos; no requiere instalación. Los retos funcionan sin conexión, y el video y los enlaces oficiales requieren internet.

## Usar en el salón

Abre el aplicativo y entra en **Modo docente**. Configura los equipos, elige una misión y proyecta la pantalla. Los estudiantes proponen, discuten y votan; el docente registra sus decisiones. No se necesitan dispositivos individuales ni cuentas de estudiantes. Puedes pausar el reloj y descargar la bitácora para cerrar la actividad.

Votos, resultados e ideas se guardan solamente en el navegador (`localStorage`). No se envían a un servidor ni se sincronizan entre dispositivos. Inicia una nueva sesión para cada clase.

## Información y fuentes

La información institucional se consultó en fuentes oficiales del COLMAYOR el **27 de octubre de 2026**. En `program.js` se conservan los enlaces y la vigencia de cada dato. Los valores de PIN 2027-1, las tarifas 2026 y las convocatorias de apoyo se muestran diferenciados por periodo.

Los escenarios y datos de `cases.js` son **simulaciones didácticas ficticias**. No representan instalaciones reales, límites legales ni diagnósticos definitivos. La portada, la guía y los escenarios anime son ilustraciones generadas con IA de situaciones ficticias. Los diagramas, instrumentos y controles son originales. Las fuentes locales incluyen sus licencias en `assets/`. El video oficial requiere conexión a YouTube.

## Archivos

- `index.html`: estructura de la aplicación.
- `styles.css`: diseño adaptable y fuentes locales.
- `app.js`: navegación, exploración, muestreos, votaciones y bitácora.
- `arcade.js` y `arcade.css`: cuatro minijuegos de acción, controles táctiles y de teclado.
- `art.js`: diagramas e instrumentos originales de los retos iniciales.
- `game-theme.css`: base visual de la aventura.
- `anime-theme.css`: estética anime juvenil con Manrope y DM Sans.
- `worlds-extra.js` y `worlds-extra.css`: casos y minijuegos de aire y residuos.
- `worlds-integration.js`: integra los seis mundos, las ilustraciones y las insignias.
- `cases.js`: cuatro casos didácticos.
- `program.js`: información institucional y fuentes.
- `assets/`: imágenes, fuentes y licencias.
- `.nojekyll`: indica a GitHub Pages que publique los archivos estáticos directamente.

## Verificación

Se comprobaron los seis recorridos y minijuegos en Chromium, puntajes iniciales y revisión de votos, temporizador, persistencia, reinicio, exportación, presupuesto, simuladores, navegación por teclado y vista móvil de 390 px. Las rutas de recursos son relativas y la navegación por fragmentos funciona en la subruta del repositorio.
