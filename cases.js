/* Casos y datos sintéticos para una experiencia didáctica.
   No representan instalaciones reales, límites legales ni diagnósticos definitivos. */
window.CASES = [
  {
    id: 'agua',
    title: 'La quebrada pide aire',
    category: 'Industria + agua',
    duration: '5 min',
    teaser: 'Una descarga, peces en la superficie y una decisión que puede cambiar el agua.',
    setting: 'Una planta de alimentos está junto a una quebrada del Valle de Aburrá. Aguas abajo, algunos peces buscan aire en la superficie. Caso ficticio.',
    profession: 'Diseñar monitoreos, interpretar resultados y mejorar el tratamiento de aguas residuales.',
    reflection: '¿Qué medirías después para saber si la quebrada se está recuperando?',
    course: 'Agua, química ambiental y tratamiento de vertimientos',
    palette: ['#137e9b', '#b2e7d7'],
    hotspots: [
      {label: '01', title: 'Antes de la descarga', text: 'El punto aguas arriba sirve para comparar. El aspecto transparente no garantiza buena calidad.', x: 78, y: 39},
      {label: '02', title: 'El vertimiento', text: 'Sale de una planta de alimentos y tiene aspecto lechoso. Es una pista; todavía no es un diagnóstico.', x: 50, y: 49},
      {label: '03', title: 'Aguas abajo', text: 'Hay peces en la superficie. Investiga oxígeno, temperatura y otros posibles aportes a la quebrada.', x: 21, y: 74}
    ],
    stages: [
      {
        title: 'Plantea una hipótesis',
        prompt: '¿Qué investigas primero?',
        context: 'El aspecto lechoso y los peces en la superficie orientan la investigación, pero no confirman una causa.',
        options: [
          {title: 'Solo el agua caliente', text: 'La temperatura explica toda la situación.', feedback: 'La temperatura influye en el oxígeno, pero debes medirla y comparar otras causas. Una sola pista no basta.', score: 1},
          {title: 'Carga orgánica y oxígeno', text: 'La materia orgánica podría estar consumiendo oxígeno.', feedback: 'Es una hipótesis razonable: los microorganismos consumen oxígeno al degradar materia orgánica. Ahora hay que comprobarla.', score: 2},
          {title: 'Retirar la espuma', text: 'Eliminar lo visible resolverá el problema.', feedback: 'La espuma es una señal. Retirarla no identifica ni elimina necesariamente lo que afecta a los peces.', score: 0}
        ],
        correct: 1,
        chart: null
      },
      {
        title: 'Elige cómo medir',
        prompt: '¿Qué kit comprueba mejor tu hipótesis?',
        context: 'Compara antes, en la descarga y después. El oxígeno se mide en campo; la DBO₅ requiere cinco días. En esta simulación adelantamos ese tiempo.',
        options: [
          {title: 'Oxígeno + caudal + laboratorio', text: 'Oxímetro, termómetro, caudal y muestras para DBO₅.', feedback: 'Combinas condiciones del agua y carga orgánica. Resultado simulado: DBO₅ de 3 mg/L antes, 420 mg/L en la descarga y 28 mg/L después. Apoya la hipótesis, sin descartar otros aportes.', score: 2},
          {title: 'Cámara y encuesta', text: 'Fotografiar el color y preguntar si huele mal.', feedback: 'Documentan señales y experiencias, pero no cuantifican oxígeno ni materia orgánica.', score: 0},
          {title: 'Solo pH', text: 'Medir la acidez en la tubería.', feedback: 'El pH es importante, pero no basta para comprobar un consumo de oxígeno. Necesitas otros parámetros y puntos de comparación.', score: 1}
        ],
        correct: 0,
        chart: {title: 'Oxígeno disuelto · datos simulados', unit: 'mg/L', max: 8, rows: [{label: 'Aguas arriba', value: 7.2}, {label: 'Aguas abajo', value: 3.1}]}
      },
      {
        title: 'Actúa sobre la causa',
        prompt: '¿Qué plan probarías y verificarías?',
        context: 'La evidencia apoya un aporte de materia orgánica asociado a menor oxígeno. Elige una respuesta que reduzca la carga y permita comprobar resultados.',
        options: [
          {title: 'Diluir la descarga', text: 'Agregar agua limpia antes de verter.', feedback: 'Diluir reduce la concentración, pero no elimina la masa contaminante y consume agua adicional.', score: 0},
          {title: 'Airear la quebrada', text: 'Instalar únicamente una fuente de aireación.', feedback: 'Puede ayudar temporalmente al oxígeno; la carga orgánica seguiría llegando. Falta actuar en la fuente.', score: 1},
          {title: 'Prevenir + tratar + comprobar', text: 'Reducir pérdidas, tratar el vertimiento y repetir el monitoreo.', feedback: 'Actúas sobre la fuente y verificas la mejora. El tratamiento también exige operación, energía y manejo de los residuos que produce.', score: 2}
        ],
        correct: 2,
        chart: null
      }
    ]
  },
  {
    id: 'bosque',
    title: 'Conecta la vida',
    category: 'Ecosistemas + territorio',
    duration: '5 min',
    teaser: 'Tres parches de bosque. Una ruta por recuperar. ¿Dónde empieza la conexión?',
    setting: 'En un paisaje rural de Antioquia, potreros y una vía separan parches de bosque. La comunidad reporta menos avistamientos de fauna. Caso ficticio.',
    profession: 'Evaluar ecosistemas, trabajar con comunidades y proponer restauración con seguimiento.',
    reflection: 'Además de contar árboles sembrados, ¿cómo comprobarías que la conexión funciona?',
    course: 'Ecología, biodiversidad y gestión del territorio',
    palette: ['#326d4d', '#d6e6ab'],
    hotspots: [
      {label: '01', title: 'Bosque mayor', text: 'Es el parche de mayor extensión. Puede albergar hábitats distintos a los parches pequeños.', x: 15, y: 28},
      {label: '02', title: 'Parche conectado', text: 'Una franja de vegetación conserva una conexión. Hay que comprobar qué especies la utilizan.', x: 77, y: 19},
      {label: '03', title: 'Parche aislado', text: 'Zonas abiertas separan este parche. La distancia y el tipo de cobertura pueden afectar el movimiento de la fauna.', x: 55, y: 74}
    ],
    stages: [
      {
        title: 'Lee el paisaje',
        prompt: '¿Qué problema sugiere primero el mapa?',
        context: 'Un parche está conectado con el bosque mayor y otro está separado por áreas abiertas.',
        options: [
          {title: 'Fragmentación del hábitat', text: 'El aislamiento podría dificultar el movimiento de algunas especies.', feedback: 'La distribución del paisaje respalda esta hipótesis. Falta conocer qué especies usan cada lugar y cómo se mueven.', score: 2},
          {title: 'Contaminación química', text: 'El suelo podría tener sustancias tóxicas.', feedback: 'Es una posibilidad que exige otras evidencias. El mapa no muestra sustancias ni resultados de laboratorio.', score: 1},
          {title: 'Todos los suelos son infértiles', text: 'La separación demuestra pérdida de fertilidad.', feedback: 'No puedes deducir la fertilidad del suelo a partir de la distancia entre los bosques.', score: 0}
        ],
        correct: 0,
        chart: null
      },
      {
        title: 'Busca evidencia comparable',
        prompt: '¿Cómo compararías los tres parches?',
        context: 'Compara con criterios y esfuerzo de observación semejantes. La experiencia de la comunidad también aporta al diagnóstico.',
        options: [
          {title: 'Una foto desde el aire', text: 'Tomar una imagen del paisaje hoy.', feedback: 'Ayuda a describir cobertura y distancias, pero no registra por sí sola el uso del lugar por la fauna.', score: 1},
          {title: 'Visitar solo el parche cercano', text: 'Contar allí y extrapolar a los otros.', feedback: 'Cada parche puede ser diferente. Para compararlos debes observar también los otros con un esfuerzo semejante.', score: 0},
          {title: 'Cámaras + recorridos + mapa', text: 'Mismo esfuerzo por sitio y observaciones repetidas.', feedback: 'Combinas ubicación y seguimiento. Los datos de 30 noches-cámara por sitio son compatibles con un efecto del aislamiento; un periodo no demuestra su causa ni registra toda la biodiversidad.', score: 2}
        ],
        correct: 2,
        chart: {title: 'Especies nativas registradas · simulación', unit: 'especies', max: 10, rows: [{label: 'Bosque mayor', value: 8}, {label: 'Conectado', value: 7}, {label: 'Aislado', value: 3}]}
      },
      {
        title: 'Diseña una conexión',
        prompt: '¿Qué propuesta construirías con la comunidad?',
        context: 'El plan debe considerar especies, uso del suelo, acuerdos con propietarios y mantenimiento.',
        options: [
          {title: 'Sembrar cualquier árbol', text: 'Elegir solamente el que crezca más rápido.', feedback: 'Más árboles pueden ayudar, pero las especies y la estructura de la vegetación deben ser adecuadas para el ecosistema.', score: 1},
          {title: 'Restaurar y hacer seguimiento', text: 'Acordar una conexión con vegetación nativa y evaluar su uso.', feedback: 'Conectas restauración, acuerdos y monitoreo. Los beneficios toman tiempo y la vegetación necesita mantenimiento.', score: 2},
          {title: 'Trasladar toda la fauna', text: 'Capturar los animales y llevarlos al bosque mayor.', feedback: 'Mover animales no recupera el hábitat y puede crear otros riesgos. Un rescate requiere criterios y personal especializado.', score: 0}
        ],
        correct: 1,
        chart: null
      }
    ]
  },
  {
    id: 'obra',
    title: 'La lluvia pone a prueba',
    category: 'Infraestructura + prevención',
    duration: '5 min',
    teaser: 'Una obra vial y una tormenta. Evita que el suelo termine en la quebrada.',
    setting: 'Una obra vial avanza cerca de una quebrada. Después de una lluvia, el agua cambia de color. Tu equipo debe investigar y prevenir nuevos impactos. Caso ficticio.',
    profession: 'Anticipar impactos de proyectos, diseñar medidas de manejo y comprobar su eficacia.',
    reflection: '¿Qué revisarías después de la próxima lluvia para ajustar el plan?',
    course: 'Evaluación de impactos, suelo y manejo ambiental de proyectos',
    palette: ['#aa6842', '#eed4a8'],
    hotspots: [
      {label: '01', title: 'Talud descubierto', text: 'La lluvia puede desprender suelo sin protección. Revisa también acopios y superficies recién intervenidas.', x: 39, y: 49},
      {label: '02', title: 'Drenaje de la obra', text: 'Una ruta de escorrentía conecta el suelo expuesto con la quebrada. Sigue el camino del agua.', x: 46, y: 64},
      {label: '03', title: 'Quebrada', text: 'El color cambió después de llover. Compara aguas arriba y abajo; puede haber otras entradas de sedimentos.', x: 78, y: 75}
    ],
    stages: [
      {
        title: 'Sigue el camino del agua',
        prompt: '¿Qué ruta del problema investigarías primero?',
        context: 'Hay suelo descubierto y un drenaje conduce escorrentía hacia la quebrada.',
        options: [
          {title: 'Sales disueltas', text: 'La lluvia estaría incorporando sales al agua.', feedback: 'Necesitarías mediciones específicas para investigarlo. El suelo expuesto y la escorrentía orientan primero hacia material suspendido.', score: 1},
          {title: 'Residuos de alimentos', text: 'Una carga de alimentos está consumiendo oxígeno.', feedback: 'No hay una fuente de ese tipo identificada en la escena. Busca una hipótesis apoyada por las pistas disponibles.', score: 0},
          {title: 'Arrastre de sedimentos', text: 'La lluvia podría movilizar el suelo de la obra.', feedback: 'Conectaste una fuente posible, una ruta de transporte y un receptor. Ahora hay que medir y revisar otros aportes.', score: 2}
        ],
        correct: 2,
        chart: null
      },
      {
        title: 'Compara el evento',
        prompt: '¿Qué medirías antes y después de llover?',
        context: 'Antes de llover: turbidez de 15 NTU arriba y 18 NTU abajo. Después: 22 y 210 NTU. Son datos simulados de un evento.',
        options: [
          {title: 'Una foto aguas abajo', text: 'Usar solo el cambio de color como prueba.', feedback: 'La foto documenta lo observado, pero no cuantifica el cambio ni permite comparar sitios.', score: 0},
          {title: 'Turbidez + sólidos + lluvia', text: 'Comparar aguas arriba y abajo y registrar la lluvia.', feedback: 'Combinas comparación espacial y temporal. Turbidez y sólidos suspendidos no son la misma medición. El aumento es compatible con arrastre; un evento no atribuye toda la diferencia a la obra.', score: 2},
          {title: 'Solo temperatura', text: 'Medir si la quebrada se enfrió.', feedback: 'Caracteriza una condición del agua, pero no cuantifica los sedimentos. Necesitas parámetros relacionados con tu hipótesis.', score: 1}
        ],
        correct: 1,
        chart: {title: 'Turbidez después de llover · simulación', unit: 'NTU', max: 250, rows: [{label: 'Aguas arriba', value: 22}, {label: 'Aguas abajo', value: 210}]}
      },
      {
        title: 'Prevén el siguiente evento',
        prompt: '¿Qué intervención aborda fuente y transporte?',
        context: 'Elige medidas que funcionen juntas y puedan inspeccionarse después de la lluvia.',
        options: [
          {title: 'Proteger + conducir + retener', text: 'Cubrir suelo y acopios, manejar drenajes y retener sedimentos.', feedback: 'Actúas antes de que el material llegue a la quebrada. Las estructuras requieren diseño, limpieza, inspección y ajustes después de la lluvia.', score: 2},
          {title: 'Limpiar al final de la obra', text: 'Esperar a terminar para retirar el material.', feedback: 'Esperar permite que el impacto continúe. Prevenir el arrastre suele ser más eficaz que intentar retirarlo después.', score: 0},
          {title: 'Una barrera junto al agua', text: 'Colocarla sin revisar el drenaje.', feedback: 'Una medida aislada puede desbordarse o fallar. Revisa cómo llega el agua y combina controles apropiados para el sitio.', score: 1}
        ],
        correct: 0,
        chart: null
      }
    ]
  },
  {
    id: 'circular',
    title: 'Seis fichas para cambiar',
    category: 'Industria + sostenibilidad',
    duration: '5 min',
    teaser: 'Agua, energía y una inversión limitada. Tu equipo decide qué mejorar primero.',
    setting: 'Una pequeña industria de alimentos quiere producir con menos agua y energía. Hay seis fichas para invertir y resultados que comprobar. Caso ficticio.',
    profession: 'Medir desempeño, prevenir pérdidas y evaluar mejoras técnicas con recursos limitados.',
    reflection: 'Si la prioridad fueran los residuos, ¿cambiarías tu inversión? ¿Por qué?',
    course: 'Producción sostenible, gestión ambiental y evaluación de proyectos',
    palette: ['#98763b', '#e9db96'],
    hotspots: [
      {label: '01', title: 'Agua de proceso', text: 'Referencia: 10 m³ por cada 1.000 unidades. Un reúso necesita validar calidad, inocuidad y compatibilidad.', x: 8, y: 64},
      {label: '02', title: 'Energía', text: 'Referencia: 400 kWh por cada 1.000 unidades. Recuperar calor puede reducir la energía que requiere el proceso.', x: 85, y: 51},
      {label: '03', title: 'Producción', text: 'Compara consumos por una producción equivalente. Una factura menor no siempre significa mayor eficiencia.', x: 47, y: 51}
    ],
    stages: [
      {
        title: 'Lee más allá de la factura',
        prompt: 'Bajó el consumo total. ¿Mejoró la eficiencia?',
        context: 'Día A: 1.000 unidades con 10 m³. Día B: 500 unidades con 7 m³. Recuerda: 1 m³ equivale a 1.000 litros.',
        options: [
          {title: 'Sí: consumió menos agua', text: 'Cualquier reducción total demuestra eficiencia.', feedback: 'También bajó la producción. Compara el agua utilizada por cada unidad producida.', score: 0},
          {title: 'No: pasó de 10 a 14 L/unidad', text: 'El consumo por producto aumentó.', feedback: 'Exacto. Bajó el consumo total, pero aumentó la intensidad de uso de agua. Usar una base comparable cambia la conclusión.', score: 2},
          {title: 'Falta conocer la tarifa', text: 'Sin el precio del agua no se puede calcular.', feedback: 'La tarifa permite estudiar costos. Para esta eficiencia física bastan el consumo y la producción.', score: 1}
        ],
        correct: 1,
        chart: {title: 'Consumo de agua por unidad · simulación', unit: 'L/unidad', max: 16, rows: [{label: 'Día A', value: 10}, {label: 'Día B', value: 14}]}
      },
      {
        title: 'Mide para mejorar',
        prompt: '¿Qué registro permite comprobar una mejora?',
        context: 'Necesitas saber cuánto se usa y cuánto se produce durante periodos comparables.',
        options: [
          {title: 'Solo facturas mensuales', text: 'Comparar únicamente el valor pagado.', feedback: 'Ayudan a seguir costos, pero mezclan tarifas, producción y operación. No bastan para atribuir un ahorro a la mejora.', score: 1},
          {title: 'Colores de las canecas', text: 'Evaluar el desempeño mirando la separación.', feedback: 'Separar residuos puede ayudar, pero los colores no cuantifican el consumo de agua ni de energía.', score: 0},
          {title: 'Medidores + balanza + producción', text: 'Registrar agua, energía, residuos y unidades producidas.', feedback: 'Calcula indicadores por una producción comparable y verifica los ahorros reales. Así detectas pérdidas y compruebas las mejoras.', score: 2}
        ],
        correct: 2,
        chart: null
      },
      {
        title: 'Invierte con un objetivo',
        prompt: 'Reduce al menos 20 % del agua y de la energía.',
        context: 'Presupuesto: 6 fichas. Base: 10 m³ y 400 kWh por 1.000 unidades. Costos y ahorros son estimaciones didácticas.',
        options: [
          {title: 'Reúso validado + recuperación de calor', text: '6 fichas: agua de 10 a 7 m³ y energía de 400 a 300 kWh.', feedback: 'Cumples ambas metas del encargo. Valida calidad e inocuidad del reúso, diseño y mantenimiento de la recuperación de calor, y comprueba los ahorros medidos.', score: 2},
          {title: 'Iluminación eficiente', text: '1 ficha: ahorro estimado de 20 kWh.', feedback: 'Aporta un ahorro, pero no alcanza la meta de energía ni reduce el agua. Puedes combinarla con otras medidas cuando el presupuesto lo permita.', score: 1},
          {title: 'Evitar pérdidas de materia prima', text: '2 fichas: evitar 30 kg de residuos.', feedback: 'Tiene un beneficio ambiental valioso, pero por sí sola no cumple las dos metas de este encargo. La prioridad cambia con los objetivos.', score: 1}
        ],
        correct: 0,
        chart: null
      }
    ]
  }
];
