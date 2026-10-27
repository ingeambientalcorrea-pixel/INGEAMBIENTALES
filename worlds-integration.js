/* Extiende la aventura sin cambiar las reglas ni el progreso de los cuatro mundos iniciales. */
(() => {
'use strict';
const extras=window.EXTRA_CASES||[];
window.CASES.push(...extras.filter(c=>!window.CASES.some(old=>old.id===c.id)));
const original=window.ARCADE, extension=window.EXTRA_ARCADE;
const extraIds=new Set(extras.map(c=>c.id));
window.ARCADE={
 markup(id){return (extraIds.has(id)?extension:original).markup(id);},
 mount(id,callback){return (extraIds.has(id)?extension:original).mount(id,callback);},
 reset(id){return (extraIds.has(id)?extension:original).reset(id);},
 isComplete(id){return (extraIds.has(id)?extension:original).isComplete(id);},
 progress(id){return (extraIds.has(id)?extension:original).progress(id);}
};
window.WORLD_META={
 agua:{name:'MUNDO AGUA',goal:'Construye un tratamiento',image:'assets/anime-agua.webp',alt:'Quebrada andina junto a una planta de alimentos, ilustración anime de un caso ficticio',character:'Valeria',role:'Ingeniera ambiental · Agua',portrait:'assets/comic-agua.webp',characterAlt:'Valeria, ingeniera ambiental de cómic con impermeable azul, gafas, guantes y equipo de muestreo de agua',gear:'Impermeable, gafas y guantes para el muestreo; sonda multiparámetro y frascos.',assignment:'Compara el agua en distintos puntos y diseña un tratamiento según la carga contaminante.'},
 bosque:{name:'MUNDO BOSQUE',goal:'Reconecta los hábitats',image:'assets/anime-bosque.webp',alt:'Parches de bosque y una carretera en un paisaje andino ilustrado',character:'Tomás',role:'Ingeniero ambiental · Biodiversidad',portrait:'assets/comic-bosque.webp',characterAlt:'Tomás, ingeniero ambiental de cómic con camisa de campo, chaleco, GPS y cámara trampa',gear:'Camisa de manga larga y botas de campo; GPS, cámara trampa y libreta.',assignment:'Evalúa la conectividad del bosque con registros comparables y propone un corredor para la fauna.'},
 obra:{name:'MUNDO OBRA',goal:'Anticipa la tormenta',image:'assets/anime-obra.webp',alt:'Obra vial con talud, escorrentía y quebrada, ilustración anime de un caso ficticio',character:'Sara',role:'Ingeniera ambiental · Infraestructura',portrait:'assets/comic-obra.webp',characterAlt:'Sara, ingeniera ambiental afrocolombiana de cómic con casco blanco, chaleco reflectivo naranja, plano y turbidímetro',gear:'Casco, gafas, chaleco reflectivo y botas; plano de drenaje y turbidímetro.',assignment:'Revisa cómo la lluvia mueve sedimentos y protege la quebrada durante la construcción.'},
 circular:{name:'MUNDO INDUSTRIA',goal:'Transforma la producción',image:'assets/anime-circular.webp',alt:'Planta de alimentos con tanques, tuberías y paneles solares en estilo anime',character:'Mateo',role:'Ingeniero ambiental · Eficiencia industrial',portrait:'assets/comic-circular.webp',characterAlt:'Mateo, ingeniero ambiental de cómic con overol azul, casco, gafas y medidor de energía',gear:'Overol, casco, gafas y protección auditiva según el área; medidor de energía y diagrama de proceso.',assignment:'Relaciona agua y energía con la producción para elegir mejoras que puedas comprobar.'},
 aire:{name:'MUNDO AIRE',goal:'Haz visible lo invisible',image:'assets/anime-aire.webp',alt:'Barrio andino con avenida, colegio y puntos de monitoreo del aire',character:'Nicolás',role:'Ingeniero ambiental · Calidad del aire',portrait:'assets/comic-aire.webp',characterAlt:'Nicolás, ingeniero ambiental de cómic con chaqueta técnica morada, sensor de partículas y equipo meteorológico',gear:'Chaqueta de campo y calzado cerrado; sensor de partículas y registro del viento.',assignment:'Diseña una red de monitoreo y compara las mediciones con el horario y el viento.'},
 residuos:{name:'MUNDO MATERIALES',goal:'Decide su próxima vida',image:'assets/anime-residuos.webp',alt:'Campus universitario con materiales, cafetería y puntos de recolección diferenciada',character:'Mariana',role:'Ingeniera ambiental · Materiales y residuos',portrait:'assets/comic-residuos.webp',characterAlt:'Mariana, ingeniera ambiental afrocolombiana de cómic con chaleco verde, gafas, guantes, registro y balanza de materiales',gear:'Manga larga, gafas, guantes adecuados y calzado cerrado; balanza y registro de materiales.',assignment:'Caracteriza los materiales, evita residuos y comprueba su ruta de reúso o gestión.'}
};
const baseArt=window.GAME_ART;
window.GAME_ART={...baseArt,
 scene(id,options={}){const meta=window.WORLD_META[id];if(!meta)return baseArt.scene(id,options);return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" role="img" aria-label="${meta.alt}"><image href="${meta.image}" width="600" height="330" preserveAspectRatio="xMidYMid slice"/>${id==='obra'&&options.rain?'<g class="anime-rain" stroke="#7dbed8" stroke-width="1.5" opacity=".6"><path d="m30 5-9 20m70-10-9 20m100-25-9 20m91-18-9 20m115-23-9 20m90-15-9 20m98-26-9 20"/></g>':''}</svg>`;},
 mascot(){return '<img class="anime-guide" src="assets/comic-guide.webp" alt="Equipo de ingeniería ambiental en estilo cómic con vestuario y herramientas de trabajo">';}
};
})();
