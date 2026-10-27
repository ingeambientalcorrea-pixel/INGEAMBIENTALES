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
 agua:{name:'MUNDO AGUA',goal:'Construye un tratamiento',image:'assets/anime-agua.webp',alt:'Quebrada andina junto a una planta de alimentos, ilustración anime de un caso ficticio'},
 bosque:{name:'MUNDO BOSQUE',goal:'Reconecta los hábitats',image:'assets/anime-bosque.webp',alt:'Parches de bosque y una carretera en un paisaje andino ilustrado'},
 obra:{name:'MUNDO OBRA',goal:'Anticipa la tormenta',image:'assets/anime-obra.webp',alt:'Obra vial con talud, escorrentía y quebrada, ilustración anime de un caso ficticio'},
 circular:{name:'MUNDO INDUSTRIA',goal:'Transforma la producción',image:'assets/anime-circular.webp',alt:'Planta de alimentos con tanques, tuberías y paneles solares en estilo anime'},
 aire:{name:'MUNDO AIRE',goal:'Haz visible lo invisible',image:'assets/anime-aire.webp',alt:'Barrio andino con avenida, colegio y puntos de monitoreo del aire'},
 residuos:{name:'MUNDO MATERIALES',goal:'Decide su próxima vida',image:'assets/anime-residuos.webp',alt:'Campus universitario con materiales, cafetería y puntos de recolección diferenciada'}
};
const baseArt=window.GAME_ART;
window.GAME_ART={...baseArt,
 scene(id,options={}){const meta=window.WORLD_META[id];if(!meta)return baseArt.scene(id,options);return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 330" role="img" aria-label="${meta.alt}"><image href="${meta.image}" width="600" height="330" preserveAspectRatio="xMidYMid slice"/>${id==='obra'&&options.rain?'<g class="anime-rain" stroke="#7dbed8" stroke-width="1.5" opacity=".6"><path d="m30 5-9 20m70-10-9 20m100-25-9 20m91-18-9 20m115-23-9 20m90-15-9 20m98-26-9 20"/></g>':''}</svg>`;},
 mascot(){return '<img class="anime-guide" src="assets/anime-guide.webp" alt="Guía de campo en estilo anime con tablet y un pequeño sensor kawaii">';}
};
})();
