# Misión Ambiental · COLMAYOR

Aplicativo interactivo de orientación vocacional para estudiantes de último año de bachillerato. Diseñado para un docente, un proyector y equipos que toman decisiones con evidencia.

## Cuatro misiones de 4–5 minutos

- **La quebrada pide aire:** explorar pistas, elegir herramientas y probar un tratamiento de aguas residuales.
- **Conecta la vida:** comparar parches de bosque y trazar alternativas de restauración.
- **La lluvia pone a prueba:** investigar el arrastre de sedimentos e instalar medidas de prevención en una obra vial.
- **Seis fichas para cambiar:** invertir un presupuesto limitado para reducir el uso de agua y energía en una industria.

Incluye modo docente, de 1 a 6 equipos, votaciones A/B/C, temporizador opcional, retroalimentación, simuladores, bitácora descargable, lectura opcional e información del programa de Ingeniería Ambiental del Colegio Mayor de Antioquia.

## Publicar con GitHub Pages

Los archivos están listos en la raíz de `main`. No requieren instalación ni compilación.

1. Abre **Settings → Pages** en este repositorio.
2. En **Build and deployment**, elige **Deploy from a branch**.
3. Selecciona **main** y **/ (root)**; pulsa **Save**.
4. Espera la confirmación de publicación y abre la dirección que muestre GitHub.

Dirección esperada al activar Pages: https://ingeambientalcorrea-pixel.github.io/INGEAMBIENTALES/

El repositorio es privado. GitHub Pages en repositorios privados depende del plan de la cuenta. Si GitHub solicita un cambio de plan o visibilidad, conserva la privacidad hasta que el propietario decida cómo proceder. No es necesario cambiar la visibilidad del repositorio para guardar o revisar este código.

## Usar en el salón

Abre el aplicativo y entra en **Modo docente**. Configura los equipos, elige una misión y proyecta la pantalla. Los estudiantes proponen, discuten y votan; el docente registra sus decisiones. No se necesitan dispositivos individuales ni cuentas de estudiantes. Puedes pausar el reloj y descargar la bitácora para cerrar la actividad.

Votos, resultados e ideas se guardan solamente en el navegador (`localStorage`). No se envían a un servidor ni se sincronizan entre dispositivos. Inicia una nueva sesión para cada clase.

## Información y fuentes

La información institucional se consultó en fuentes oficiales del COLMAYOR el **27 de octubre de 2026**. En `program.js` se conservan los enlaces y la vigencia de cada dato. Los valores de PIN 2027-1, las tarifas 2026 y las convocatorias de apoyo se muestran diferenciados por periodo.

Los escenarios y datos de `cases.js` son **simulaciones didácticas ficticias**. No representan instalaciones reales, límites legales ni diagnósticos definitivos. La portada es una imagen ilustrativa generada; los mapas e instrumentos son ilustraciones originales. Las fuentes locales incluyen sus licencias en `assets/`. El video oficial requiere conexión a YouTube.

## Archivos

- `index.html`: estructura de la aplicación.
- `styles.css`: diseño adaptable y fuentes locales.
- `app.js`: navegación, juegos, simuladores, votaciones y bitácora.
- `cases.js`: cuatro casos didácticos.
- `program.js`: información institucional y fuentes.
- `assets/`: imágenes, fuentes y licencias.
- `.nojekyll`: indica a GitHub Pages que publique los archivos estáticos directamente.

## Verificación

Se comprobaron los cuatro recorridos en Chromium, puntajes iniciales y revisión de votos, temporizador, persistencia, reinicio, exportación, presupuesto, simuladores, navegación por teclado y vista móvil de 390 px. Las rutas de recursos son relativas y la navegación por fragmentos funciona en la subruta del repositorio.
