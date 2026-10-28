# Misión Ambiental · COLMAYOR

Aplicativo interactivo de orientación vocacional para estudiantes de último año de bachillerato. Diseñado para un docente, un proyector y equipos que toman decisiones con evidencia.

## Aventura de ingeniería · seis mundos de 4–6 minutos

- **La quebrada pide aire:** buscar pistas, medir en tres puntos y armar una solución para limpiar el agua.
- **Conecta la vida:** comparar bosques y unirlos con plantas de la zona y un cruce para animales.
- **La lluvia pone a prueba:** seguir la tierra que arrastra la lluvia, colocar defensas y activar una tormenta para probar el plan.
- **Seis fichas para cambiar:** invertir un presupuesto limitado para reducir el uso de agua y energía en una industria.
- **Aire:** elegir dónde medir el aire y comparar los resultados con el viento.
- **Materiales:** evitar basura, volver a usar materiales y decidir dónde entregarlos después de un evento.

Presentación de aventura para estudiantes de bachillerato, con profesionales jóvenes adultos de estilo cómic, escenarios andinos ilustrados, textos grandes, instrumentos visuales y seis minijuegos con mecánicas diferentes. Cada reto presenta un personaje distinto con vestimenta, elementos de protección y herramientas acordes a su trabajo: Valeria (agua), Tomás (biodiversidad), Sara (obra), Mateo (eficiencia industrial), Nicolás (aire) y Mariana (materiales). Incluye modo docente, de 1 a 6 equipos, votaciones A/B/C, temporizador opcional, retroalimentación, simuladores, bitácora descargable, lectura opcional e información del programa de Ingeniería Ambiental del Colegio Mayor de Antioquia.

La versión escolar usa frases breves, explica las unidades junto a los gráficos y deja los números avanzados como información opcional. El acceso «Tu futuro» destaca como invitación principal a conocer la carrera. El programa presenta primero Gratuidad, Presupuesto Participativo e inscripciones, con sus condiciones y periodos. Las competencias se ilustran y conectan con materias reales del pénsum. La malla permite elegir entre los diez semestres y consultar sus materias y créditos sin recorrer una página extensa.

Videos incluidos:

- [Qué hace un ingeniero (a) ambiental](https://youtu.be/Zal9EWfQe40).
- [Te invitamos a Ingeniería Ambiental COLMAYOR](https://youtube.com/shorts/pWRHehoopz4).

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

Descomprime el ZIP y abre **Mision-Ambiental-COLMAYOR.html**. Contiene ilustraciones, tipografías, estilos y juegos; no requiere instalación. Los retos funcionan sin conexión; los dos videos y los enlaces oficiales requieren internet.

## Usar en el salón

Abre el aplicativo y entra en **Modo docente**. Configura los equipos, elige una misión y proyecta la pantalla. Los estudiantes proponen, discuten y votan; el docente registra sus decisiones. No se necesitan dispositivos individuales ni cuentas de estudiantes. Puedes pausar el reloj y descargar la bitácora para cerrar la actividad.

Votos, resultados e ideas se guardan solamente en el navegador (`localStorage`). No se envían a un servidor ni se sincronizan entre dispositivos. Inicia una nueva sesión para cada clase.

## Información y fuentes

La información institucional se consultó en fuentes oficiales del COLMAYOR el **27 de octubre de 2026**. La malla oficial del pénsum 1323 se volvió a comprobar el **28 de octubre de 2026**: 10 semestres y 165 créditos. Se conservan los nombres oficiales de las materias y sus créditos; el último semestre permite elegir práctica profesional o trabajo de grado. En `program.js` se conservan los enlaces y la vigencia de cada dato. Los valores de PIN 2027-1, las tarifas 2026 y las convocatorias de apoyo se muestran diferenciados por periodo.

Los escenarios y datos de `cases.js` son **simulaciones didácticas ficticias**. No representan instalaciones reales, límites legales ni diagnósticos definitivos. La portada, los seis personajes de cómic y los escenarios son ilustraciones generadas con IA de situaciones ficticias. Los personajes son ficticios y no representan a docentes ni egresados de la institución. Los diagramas, instrumentos y controles son originales. Las fuentes locales incluyen sus licencias en `assets/`. Los dos videos seleccionados para esta experiencia requieren conexión a YouTube.

## Archivos

- `index.html`: estructura de la aplicación.
- `styles.css`: diseño adaptable y fuentes locales.
- `app.js`: navegación, exploración, muestreos, votaciones y bitácora.
- `arcade.js` y `arcade.css`: cuatro minijuegos de acción, controles táctiles y de teclado.
- `art.js`: diagramas e instrumentos originales de los retos iniciales.
- `game-theme.css`: base visual de la aventura.
- `anime-theme.css`: base visual juvenil con Manrope y DM Sans.
- `comic-characters.css`: presentación del equipo de ingeniería y sus personajes por misión.
- `worlds-extra.js` y `worlds-extra.css`: casos y minijuegos de aire y residuos.
- `worlds-integration.js`: integra los seis mundos, las ilustraciones y las insignias.
- `cases.js`: cuatro casos didácticos.
- `program.js`: información institucional, malla por semestre, videos y fuentes.
- `program-garden.css`: programa compacto, prioridades de ingreso, competencias y malla interactiva.
- `future-nav.css`: acceso principal destacado a «Tu futuro».
- `assets/`: imágenes, fuentes y licencias.
- `.nojekyll`: indica a GitHub Pages que publique los archivos estáticos directamente.

## Verificación

Se comprobaron los seis recorridos y minijuegos en Chromium, puntajes iniciales y revisión de votos, temporizador, persistencia, reinicio, exportación, presupuesto, simuladores, navegación por teclado y vista móvil de 390 px. También se verificaron el acceso principal «Tu futuro», los apoyos y sus periodos, las competencias con materias oficiales, los dos videos y el selector de diez semestres mediante ratón y teclado. La sección del programa se revisó en 390, 768 y 1440 px. Las rutas de recursos son relativas y la navegación por fragmentos funciona en la subruta del repositorio.
