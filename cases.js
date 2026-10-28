/* Casos y datos inventados para aprender jugando.
   No representan lugares reales, límites legales ni resultados de una investigación real. */
window.CASES = [
  {
    id: 'agua',
    title: 'La quebrada pide aire',
    category: 'Industria + agua',
    duration: '5 min',
    teaser: 'Sale agua de una fábrica y los peces suben a la superficie. ¿Qué está pasando?',
    setting: 'Una fábrica de alimentos está junto a una quebrada del Valle de Aburrá. Después de la tubería, algunos peces suben a la superficie. Tu equipo busca la causa. Caso inventado.',
    profession: 'Tomar muestras de agua, entender los resultados y ayudar a una fábrica a contaminar menos.',
    reflection: '¿Qué volverías a medir para saber si la quebrada mejora?',
    course: 'Cuidado del agua y tratamiento del agua usada',
    palette: ['#137e9b', '#b2e7d7'],
    hotspots: [
      {label: '01', title: 'Antes de la tubería', text: 'Este punto sirve para comparar. Aunque el agua se vea transparente, hay que medirla.', x: 78, y: 39},
      {label: '02', title: 'La salida de la fábrica', text: 'El agua que sale parece lechosa. Su color da una pista, pero no explica por sí solo qué pasa.', x: 50, y: 49},
      {label: '03', title: 'Después de la tubería', text: 'Algunos peces suben a la superficie. Revisa cuánto oxígeno tiene el agua y si llegan otras aguas a la quebrada.', x: 21, y: 74}
    ],
    stages: [
      {
        title: 'Propón una explicación',
        prompt: '¿Qué investigarías primero?',
        context: 'Ya viste agua lechosa y peces en la superficie. Ahora propone una idea que puedas comprobar.',
        options: [
          {title: 'Solo la temperatura', text: 'Pensar que el agua caliente explica todo.', feedback: 'El calor puede afectar el oxígeno del agua. Conviene medirlo, pero también revisar otras posibles causas.', score: 1},
          {title: 'Restos de comida y poco oxígeno', text: 'Revisar si los restos de la fábrica hacen que baje el oxígeno.', feedback: 'Buena idea para comprobar. Al descomponer restos de comida, las bacterias usan oxígeno que también necesitan los peces.', score: 2},
          {title: 'Quitar lo que flota', text: 'Retirar la espuma y dar el problema por resuelto.', feedback: 'Quitar la espuma cambia lo que vemos, pero puede dejar en el agua lo que afecta a los peces.', score: 0}
        ],
        correct: 1,
        chart: null
      },
      {
        title: 'Elige tus herramientas',
        prompt: '¿Qué equipo te ayuda a comprobar tu idea?',
        context: 'Mide antes, en la tubería y después. El medidor revisa el oxígeno en el lugar. Otra prueba, llamada DBO₅, tarda cinco días en el laboratorio y ayuda a saber cuánto oxígeno usan los restos del agua. En el juego adelantamos esa espera.',
        options: [
          {title: 'Medir oxígeno y tomar muestras', text: 'Revisar también la temperatura y cuánta agua sale de la tubería.', feedback: 'Ahora puedes comparar: después de la tubería hay menos oxígeno. La prueba de laboratorio también indica que el agua que sale de la fábrica necesita más oxígeno para descomponer sus restos. Tu idea tiene apoyo; revisa si llegan otras aguas.', score: 2},
          {title: 'Fotos y preguntas', text: 'Tomar fotos del color y preguntar por el olor.', feedback: 'Las fotos y lo que cuenta la gente dan pistas útiles. Pero no indican cuánto oxígeno tiene el agua.', score: 0},
          {title: 'Solo medir la acidez', text: 'Usar una prueba de pH en la tubería.', feedback: 'El pH indica qué tan ácida es el agua. Es útil, pero no dice cuánto oxígeno hay ni si los restos de comida lo están reduciendo.', score: 1}
        ],
        correct: 0,
        chart: {title: 'Oxígeno en el agua · ejemplo', unit: 'mg/L', max: 8, rows: [{label: 'Antes de la tubería', value: 7.2}, {label: 'Después de la tubería', value: 3.1}]}
      },
      {
        title: 'Prueba una solución',
        prompt: '¿Qué plan probarías para mejorar el agua?',
        context: 'Los resultados apoyan la idea de que llegan restos de comida y baja el oxígeno. Elige un plan que reduzca el problema desde la fábrica.',
        options: [
          {title: 'Agregar agua limpia', text: 'Mezclarla con el agua sucia antes de que salga.', feedback: 'La mezcla queda menos concentrada, pero los restos siguen allí. Además, gastas más agua limpia.', score: 0},
          {title: 'Poner aire en la quebrada', text: 'Añadir oxígeno sin cambiar lo que sale de la fábrica.', feedback: 'Puede ayudar por un tiempo. Pero, si siguen llegando restos, también seguirá llegando el problema.', score: 1},
          {title: 'Evitar, limpiar y volver a medir', text: 'Perder menos comida, tratar el agua usada y revisar si mejora.', feedback: 'Actúas donde empieza el problema y compruebas el resultado. El sistema para limpiar el agua también necesita cuidado, energía y manejo de los residuos que deja.', score: 2}
        ],
        correct: 2,
        chart: null
      }
    ]
  },
  {
    id: 'bosque',
    title: 'Conecta la vida',
    category: 'Bosques + animales',
    duration: '5 min',
    teaser: 'Tres zonas de bosque y una carretera. Ayuda a los animales a volver a conectarse.',
    setting: 'En una zona rural de Antioquia, una carretera y varios potreros separan los bosques. La comunidad cuenta que ahora ve menos animales. Tu equipo busca qué puede estar pasando. Caso inventado.',
    profession: 'Estudiar los bosques con la comunidad y recuperar caminos que los animales puedan usar.',
    reflection: 'Además de contar los árboles sembrados, ¿cómo sabrías si los animales usan el nuevo camino?',
    course: 'Bosques, animales y cuidado del territorio',
    palette: ['#326d4d', '#d6e6ab'],
    hotspots: [
      {label: '01', title: 'El bosque grande', text: 'Tiene más espacio y puede ofrecer refugios distintos a los de los bosques pequeños.', x: 15, y: 28},
      {label: '02', title: 'Un bosque con camino', text: 'Una franja de plantas lo une con el bosque grande. Hay que revisar qué animales la usan.', x: 77, y: 19},
      {label: '03', title: 'Un bosque separado', text: 'Lo rodean zonas abiertas. A algunos animales les puede resultar difícil cruzarlas.', x: 55, y: 74}
    ],
    stages: [
      {
        title: 'Observa el mapa',
        prompt: '¿Qué problema te sugiere el mapa?',
        context: 'Un bosque pequeño tiene un camino de plantas hacia el bosque grande. El otro está separado por zonas abiertas.',
        options: [
          {title: 'Bosques separados', text: 'Algunos animales podrían tener dificultades para pasar de uno a otro.', feedback: 'El mapa da esa pista. Ahora falta saber qué animales viven allí y por dónde se mueven.', score: 2},
          {title: 'Sustancias dañinas en el suelo', text: 'Pensar que el suelo puede estar contaminado.', feedback: 'Podría ocurrir, pero el mapa no lo muestra. Necesitarías otras pistas y pruebas para investigarlo.', score: 1},
          {title: 'El suelo ya no sirve para las plantas', text: 'Afirmarlo solo porque los bosques están separados.', feedback: 'La distancia entre los bosques no te dice si el suelo ayuda o no a crecer a las plantas.', score: 0}
        ],
        correct: 0,
        chart: null
      },
      {
        title: 'Compara de la misma manera',
        prompt: '¿Cómo investigarías los tres bosques?',
        context: 'Observa los tres lugares durante el mismo tiempo y de la misma manera. Escucha también lo que sabe la comunidad.',
        options: [
          {title: 'Una foto desde el aire', text: 'Mirar cómo se ve el paisaje hoy.', feedback: 'La foto muestra las plantas y las distancias. Pero, por sí sola, no te dice qué animales pasan por allí.', score: 1},
          {title: 'Visitar solo el bosque más cercano', text: 'Suponer que los otros tienen los mismos animales.', feedback: 'Cada bosque puede ser distinto. Para compararlos, necesitas observar los tres durante el mismo tiempo.', score: 0},
          {title: 'Cámaras, caminatas y un mapa', text: 'Repetir las observaciones en los tres lugares.', feedback: 'Así reúnes pistas que puedes comparar. En este ejemplo usamos una cámara durante 30 noches en cada lugar. El bosque separado registra menos tipos de animales, pero una sola temporada no explica toda la historia.', score: 2}
        ],
        correct: 2,
        chart: {title: 'Tipos de animales de la zona registrados · ejemplo', unit: 'especies', max: 10, rows: [{label: 'Bosque grande', value: 8}, {label: 'Con camino', value: 7}, {label: 'Separado', value: 3}]}
      },
      {
        title: 'Recupera un camino',
        prompt: '¿Qué plan harías con la comunidad?',
        context: 'Piensa en los animales, en las plantas de la zona y en las personas que usan esos terrenos.',
        options: [
          {title: 'Sembrar cualquier árbol', text: 'Elegir solo los que crezcan más rápido.', feedback: 'Sembrar puede ayudar, pero no todos los árboles ofrecen el alimento y el refugio que necesitan los animales de ese bosque.', score: 1},
          {title: 'Unir los bosques y revisar si funciona', text: 'Acordar un camino con plantas de la zona y observar si los animales lo usan.', feedback: 'Combinas un camino de plantas, acuerdos con las personas y nuevas observaciones. Las plantas necesitan cuidado y los cambios toman tiempo.', score: 2},
          {title: 'Llevar todos los animales al bosque grande', text: 'Capturarlos para cambiarles de lugar.', feedback: 'Moverlos no recupera su hogar y puede causar otros problemas. Si hace falta rescatar un animal, debe hacerlo personal preparado.', score: 0}
        ],
        correct: 1,
        chart: null
      }
    ]
  },
  {
    id: 'obra',
    title: 'La lluvia pone a prueba',
    category: 'Construcción + cuidado del agua',
    duration: '5 min',
    teaser: 'Una carretera en construcción y una tormenta. Evita que la tierra llegue a la quebrada.',
    setting: 'Están construyendo una carretera cerca de una quebrada. Después de llover, el agua se vuelve café. Tu equipo debe buscar la causa y evitar que vuelva a pasar. Caso inventado.',
    profession: 'Planear cómo cuidar el agua y el suelo mientras se construye una obra, y revisar si el plan funciona.',
    reflection: '¿Qué revisarías después de la próxima lluvia para mejorar tu plan?',
    course: 'Cuidado del agua y del suelo en las obras',
    palette: ['#aa6842', '#eed4a8'],
    hotspots: [
      {label: '01', title: 'Tierra sin cubrir', text: 'La lluvia puede llevarse la tierra que quedó sin plantas ni protección. Revisa también los montones de tierra de la obra.', x: 39, y: 49},
      {label: '02', title: 'El camino del agua', text: 'El agua de lluvia baja por la tierra descubierta y llega hasta la quebrada. Sigue ese recorrido.', x: 46, y: 64},
      {label: '03', title: 'La quebrada', text: 'El agua cambió de color después de llover. Compara antes y después de la obra; puede llegar tierra desde otros lugares.', x: 78, y: 75}
    ],
    stages: [
      {
        title: 'Sigue el agua',
        prompt: '¿Qué podría estar volviendo café el agua?',
        context: 'Hay tierra descubierta. La lluvia pasa por ella y sigue un camino hacia la quebrada.',
        options: [
          {title: 'Sales en el agua', text: 'Pensar que la lluvia está agregando sales.', feedback: 'Para saberlo necesitarías otras pruebas. Las pistas que ves señalan primero la tierra que arrastra el agua.', score: 1},
          {title: 'Restos de comida', text: 'Pensar que llega comida y baja el oxígeno.', feedback: 'No ves una salida de restos de comida en este lugar. Busca una explicación que coincida con las pistas de la obra.', score: 0},
          {title: 'Tierra que arrastra la lluvia', text: 'Revisar si la lluvia lleva tierra de la obra hasta la quebrada.', feedback: 'Conectaste la tierra descubierta con el camino del agua y la quebrada. Ahora toca medir y revisar si llega tierra desde otros sitios.', score: 2}
        ],
        correct: 2,
        chart: null
      },
      {
        title: 'Compara antes y después',
        prompt: '¿Qué revisarías antes y después de llover?',
        context: 'Un medidor muestra qué tan turbia está el agua: cuanto más alto el número, más turbia. Su escala se llama NTU. Antes de llover marca 15 antes de la obra y 18 después. Tras la lluvia marca 22 y 210. Son datos inventados.',
        options: [
          {title: 'Una foto después de la obra', text: 'Usar solo el color del agua como prueba.', feedback: 'La foto guarda una pista útil. Pero no mide cuánto cambió el agua ni permite comparar bien los lugares.', score: 0},
          {title: 'Medir el agua y anotar la lluvia', text: 'Comparar qué tan turbia está y cuánta tierra lleva, antes y después de la obra.', feedback: 'Comparas los lugares y lo que cambió con la lluvia. Medir qué tan turbia se ve el agua y pesar la tierra que lleva son pruebas distintas. Los resultados dan una pista; una sola lluvia no demuestra que toda la tierra venga de la obra.', score: 2},
          {title: 'Solo revisar si se enfrió', text: 'Medir la temperatura de la quebrada.', feedback: 'La temperatura dice algo del agua, pero no cuánta tierra lleva. Te hacen falta pruebas relacionadas con lo que quieres investigar.', score: 1}
        ],
        correct: 1,
        chart: {title: 'Qué tan turbia está el agua tras la lluvia · ejemplo', unit: 'NTU', max: 250, rows: [{label: 'Antes de la obra', value: 22}, {label: 'Después de la obra', value: 210}]}
      },
      {
        title: 'Prepárate para otra lluvia',
        prompt: '¿Qué plan evitaría que la tierra llegue al agua?',
        context: 'Elige acciones que se ayuden entre sí y que puedas revisar después de llover.',
        options: [
          {title: 'Cubrir, guiar el agua y recoger la tierra', text: 'Proteger el suelo, preparar canales y atrapar la tierra antes de la quebrada.', feedback: 'Actúas antes de que la tierra llegue al agua. Los canales y las zonas que la recogen necesitan un buen diseño, limpieza y revisión después de la lluvia.', score: 2},
          {title: 'Limpiar cuando termine la obra', text: 'Dejar la tierra allí hasta que todo esté construido.', feedback: 'Si esperas, la lluvia puede seguir llevando tierra a la quebrada. Conviene evitarlo desde ahora.', score: 0},
          {title: 'Poner solo una barrera junto al agua', text: 'Instalarla sin mirar por dónde baja la lluvia.', feedback: 'Una barrera sola puede llenarse o desbordarse. Primero sigue el camino del agua y combina las acciones que necesita el lugar.', score: 1}
        ],
        correct: 0,
        chart: null
      }
    ]
  },
  {
    id: 'circular',
    title: 'Seis fichas para cambiar',
    category: 'Industria + ahorro de recursos',
    duration: '5 min',
    teaser: 'Tienes seis fichas. Elige cómo producir alimentos usando menos agua y energía.',
    setting: 'Una fábrica de alimentos quiere usar menos agua y energía. Tienes seis fichas para elegir mejoras y después comprobar si funcionan. Caso inventado.',
    profession: 'Buscar dónde se desperdician recursos y ayudar a una fábrica a producir con menos agua, energía y residuos.',
    reflection: 'Si el objetivo fuera generar menos basura, ¿elegirías las mismas mejoras? ¿Por qué?',
    course: 'Producción con menos agua, energía y residuos',
    palette: ['#98763b', '#e9db96'],
    hotspots: [
      {label: '01', title: 'Agua de la fábrica', text: 'Se usan 10 m³, es decir, 10.000 litros, por cada 1.000 productos. Antes de usar de nuevo parte del agua, hay que comprobar que sea segura para esa tarea.', x: 8, y: 64},
      {label: '02', title: 'Energía', text: 'Se usan 400 kWh por cada 1.000 productos. El kWh es la unidad de energía de la factura. Aprovechar el calor que sale de una máquina puede ayudar a calentar otro proceso.', x: 85, y: 51},
      {label: '03', title: 'Productos terminados', text: 'No basta con mirar cuánto gastó la fábrica. Compara cuánta agua y energía necesita para hacer la misma cantidad de productos.', x: 47, y: 51}
    ],
    stages: [
      {
        title: 'Mira el gasto por producto',
        prompt: 'Usó menos agua en total. ¿Ahorró por cada producto?',
        context: 'Día A: 1.000 productos con 10 m³ de agua. Día B: 500 productos con 7 m³. La comparación ya está calculada: son 10 litros por producto el día A y 14 el día B. Un m³ son 1.000 litros.',
        options: [
          {title: 'Sí, porque gastó menos en total', text: 'Mirar solo que pasó de 10 a 7 m³.', feedback: 'Ese día también hizo menos productos. Para saber si mejoró, compara el agua que usó por cada producto.', score: 0},
          {title: 'No, cada producto necesitó más agua', text: 'Pasó de 10 a 14 litros por producto.', feedback: 'Exacto. La fábrica gastó menos agua en total, pero usó más para hacer cada producto. Así puedes hacer una comparación justa.', score: 2},
          {title: 'Solo se puede saber con el precio del agua', text: 'Buscar primero cuánto cuesta cada litro.', feedback: 'El precio ayuda a comparar el dinero gastado. Para este reto basta con saber cuánta agua se usa y cuántos productos se hacen.', score: 1}
        ],
        correct: 1,
        chart: {title: 'Litros de agua por producto · ejemplo', unit: 'L por producto', max: 16, rows: [{label: 'Día A', value: 10}, {label: 'Día B', value: 14}]}
      },
      {
        title: 'Mide para mejorar',
        prompt: '¿Qué anotarías para saber si una mejora funciona?',
        context: 'Compara cuánto usa la fábrica y cuántos productos hace durante el mismo tiempo.',
        options: [
          {title: 'Solo el dinero de las facturas', text: 'Mirar cuánto pagó cada mes.', feedback: 'Las facturas ayudan a revisar el dinero. Pero el total también cambia con los precios y la cantidad de productos. Por sí solas no prueban el ahorro.', score: 1},
          {title: 'Solo los colores de las canecas', text: 'Mirar si separan la basura.', feedback: 'Separar los residuos ayuda, pero los colores de las canecas no indican cuánta agua o energía se está usando.', score: 0},
          {title: 'Agua, energía, residuos y productos', text: 'Usar medidores, una balanza y el registro de lo producido.', feedback: 'Con esos registros puedes comparar el gasto por producto, encontrar desperdicios y comprobar si las mejoras ayudan.', score: 2}
        ],
        correct: 2,
        chart: null
      },
      {
        title: 'Elige en qué invertir',
        prompt: 'Usa al menos 20 % menos de agua y de energía.',
        context: 'Tienes 6 fichas. La fábrica empieza con 10 m³ de agua y 400 kWh por cada 1.000 productos. Para cumplir la meta debes llegar a 8 m³ o menos y a 320 kWh o menos. Los costos y ahorros son ejemplos.',
        options: [
          {title: 'Usar agua de nuevo y aprovechar el calor', text: '6 fichas: el agua baja de 10 a 7 m³ y la energía de 400 a 300 kWh.', feedback: 'Cumples las dos metas. Antes de aplicar el plan, revisa que el agua sea segura para el nuevo uso y que el sistema de calor funcione bien. Después, mide para comprobar el ahorro.', score: 2},
          {title: 'Luces que gastan menos', text: '1 ficha: ahorrar 20 kWh de energía.', feedback: 'Ayuda, pero no alcanza la meta de energía ni ahorra agua. Puedes combinarla con otras mejoras si te quedan fichas.', score: 1},
          {title: 'Perder menos ingredientes', text: '2 fichas: evitar 30 kg de residuos.', feedback: 'Generar menos residuos también es valioso. Pero esta mejora sola no cumple las metas de agua y energía que te pidieron en el reto.', score: 1}
        ],
        correct: 0,
        chart: null
      }
    ]
  }
];
