/* Original vector illustrations for Misión Ambiental. No external requests. */
(() => {
  'use strict';
  const C = { ink:'#172554', blue:'#4171ff', aqua:'#16d6dc', water:'#32b9f6', light:'#a6f7ff', lime:'#c4f655', green:'#37d584', deep:'#079f79', coral:'#ff7d72', yellow:'#ffcf58', purple:'#9563f7', white:'#fffdf3' };
  const outline = `stroke="${C.ink}" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"`;
  const cloud = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#ffffff" opacity=".9"><path d="M0 14C-6-1 8-11 18-5 23-24 49-22 54-5 70-11 83 3 77 17H3Z"/></g>`;
  const tree = (x,y,s=1,colour=C.green) => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cy="30" rx="22" ry="7" fill="${C.ink}" opacity=".12"/><path d="M-3 6V29H5V5" fill="#d18c50" ${outline}/><path d="M-22 1C-29-14-16-24-5-21 0-38 23-30 22-16 42-8 30 15 16 13 5 25-13 19-15 9-22 12-29 5-22 1Z" fill="${colour}" ${outline}/><path d="M-12-14Q-8-22 2-22" fill="none" stroke="#fff" stroke-width="4" opacity=".6" stroke-linecap="round"/></g>`;
  const palm = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 34Q9 9 2-14" fill="none" stroke="#172554" stroke-width="10" stroke-linecap="round"/><path d="M0 34Q9 9 2-14" fill="none" stroke="#e8a151" stroke-width="5" stroke-linecap="round"/><path d="M2-14Q-31-44-37-11  -16-25 2-14M2-14Q-12-50 12-50 24-26 2-14M2-14Q40-40 47-13 23-22 2-14M2-14Q24-14 25 10 12-5 2-14M2-14Q-23-5-25 13-24-16 2-14" fill="${C.deep}" ${outline}/><circle cx="0" cy="-9" r="5" fill="${C.coral}" ${outline}/></g>`;
  const shrub = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})" ${outline}><path d="M-14 6C-28-10-4-22 0-5 4-28 26-13 14 2 34-7 34 13 14 13H-14C-33 15-31-4-14 6Z" fill="${C.lime}"/><path d="M0 12V0"/></g>`;
  const flower = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 3v16" stroke="${C.deep}" stroke-width="3"/><g fill="${C.coral}"><circle cy="-5" r="6"/><circle cx="6" cy="1" r="6"/><circle cx="-6" cy="1" r="6"/><circle cy="7" r="6"/></g><circle r="4" fill="${C.yellow}"/></g>`;
  const butterfly = (x,y,colour=C.purple) => `<g transform="translate(${x} ${y})"><g class="game-art-float"><path d="M0 0C-24-22-26 13-3 7M0 0C24-22 26 13 3 7" fill="${colour}" ${outline}/><path d="M0-4V11" ${outline}/></g></g>`;
  const fish = (x,y,s=1,colour=C.coral) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-13 0C-6-13 11-13 18 0 11 13-6 13-13 0L-24-9V9Z" fill="${colour}" ${outline}/><circle cx="9" cy="-1" r="2.3" fill="${C.ink}"/><path d="M-4-7 0 0-4 6" fill="none" stroke="#ffffffa0" stroke-width="2"/></g>`;
  const flowerSet = positions => positions.map(([x,y,s])=>flower(x,y,s)).join('');
  const trees = positions => positions.map(([x,y,s,col])=>tree(x,y,s,col)).join('');
  const leaf = (x,y,s=1) => `<g transform="translate(${x} ${y}) scale(${s})"><path d="M-11 11C-25-7 4-25 22-22 25 1 12 23-7 16Z" fill="${C.lime}" ${outline}/><path d="M-12 24 12-11" ${outline}/></g>`;
  function animStyle(){return `<style>.game-scene-art .game-art-flow{animation:game-art-stream 5s linear infinite}.game-scene-art .game-art-float{animation:game-art-hover 3s ease-in-out infinite}.game-scene-art .game-art-rain{animation:game-art-rainfall .85s linear infinite}.game-scene-art .game-art-wheel{transform-box:fill-box;transform-origin:center;animation:game-art-spin 9s linear infinite}@keyframes game-art-stream{to{stroke-dashoffset:-120}}@keyframes game-art-hover{50%{transform:translateY(-6px)}}@keyframes game-art-rainfall{to{transform:translate(-8px,20px)}}@keyframes game-art-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.game-scene-art *{animation:none!important}}</style>`;}
  function frame(label,body){return `<svg xmlns="http://www.w3.org/2000/svg" class="game-scene-art" viewBox="0 0 600 330" role="img" aria-label="${label}">${animStyle()}${body}</svg>`;}
  function water(o){
    const good = o.stage === 2 && Number(o.sim) >= 80;
    const stain = o.stage===2 ? Math.max(.12,.8-Number(o.sim)/140) : .5;
    return frame('Aventura del agua: quebrada turquesa, planta de alimentos y tres puntos de investigación.', `
      <rect width="600" height="330" fill="#abf4ed"/>
      <path d="M0 98 84 25 150 78 246 15 347 85 439 20 600 101V0H0Z" fill="#b8b0ff"/>
      <path d="M0 126 92 74 183 122 295 60 403 115 512 66 600 119V330H0Z" fill="#92e66e"/>
      ${cloud(26,35,.7)}${cloud(395,32,.65)}
      <path d="M-35 292C38 224 73 172 130 210S228 219 276 154 421 133 638 38" fill="none" stroke="#77d566" stroke-width="119"/>
      <path d="M-35 292C38 224 73 172 130 210S228 219 276 154 421 133 638 38" fill="none" stroke="${C.ink}" stroke-width="91"/>
      <path d="M-35 292C38 224 73 172 130 210S228 219 276 154 421 133 638 38" fill="none" stroke="${C.water}" stroke-width="85"/>
      <path d="M-35 286C38 218 73 166 130 204S228 213 276 148 421 127 638 32" fill="none" stroke="${C.aqua}" stroke-width="58"/>
      <path d="M266 159C327 129 411 140 638 38" fill="none" stroke="${good?'#97f4cd':'#bb7be3'}" stroke-width="43" opacity="${stain}"/>
      <path class="game-art-flow" d="M-30 287C38 219 73 167 130 205S228 214 276 149 421 128 638 33" fill="none" stroke="#d9ffff" stroke-width="4" stroke-linecap="round" stroke-dasharray="19 21 8 22"/>
      <g fill="#fffdf3" stroke="#172554" stroke-width="1.2"><path d="m150 205 18-2-8 13-1-8Z"/><path d="m351 129 18-2-8 13-1-8Z"/><path d="m515 72 18-2-8 13-1-8Z"/></g>
      <ellipse cx="320" cy="124" rx="91" ry="18" fill="#172554" opacity=".13"/>
      <path d="M317 114v26l-51 16" fill="none" stroke="#172554" stroke-width="18" stroke-linecap="round"/>
      <path d="M317 114v26l-51 16" fill="none" stroke="#c9a1ff" stroke-width="12" stroke-linecap="round"/>
      <g ${outline}><path d="m246 69 64-35 85 37-63 36Z" fill="${C.coral}"/><path d="m246 69 86 38v50l-86-37Z" fill="#ffeec0"/><path d="m332 107 63-36v48l-63 38Z" fill="#ffcf58"/><path d="M258 88v21l17 7V95Zm31 13v21l17 7v-21Z" fill="#41bcff"/><path d="m349 109 16-9v22l-16 9Zm26-15 12-7v22l-12 7Z" fill="${C.blue}"/><path d="M361 55V18l18-8 15 7v37l-15 8Z" fill="${C.purple}"/><path d="m361 18 18 8 15-9m-15 9v36" fill="none"/></g>
      <path d="M378 8q-13-15 6-23m12 30q17-11 10-25" fill="none" stroke="#ffffffc9" stroke-width="9" stroke-linecap="round"/>
      ${trees([[33,112,.9],[87,94,.75],[151,110,.9],[465,241,1.1],[527,263,.9],[579,211,1.05],[95,291,.8]])}
      ${shrub(392,210,1.2)}${shrub(549,148,.85)}${flowerSet([[33,294,.65],[162,286,.7],[578,293,.8],[421,253,.7]])}
      ${fish(182,228,.65,C.yellow)}${fish(399,126,.7,good?C.coral:'#f9acdf')}${fish(506,87,.6,C.yellow)}
      <g transform="translate(80 202)" ${outline}><path d="M-8-5 0-21 8-5v15H-8Z" fill="#fff"/><path d="M-8 2H8" stroke="${C.blue}"/></g>
      <g transform="translate(455 68)" ${outline}><path d="M-8-5 0-21 8-5v15H-8Z" fill="#fff"/><path d="M-8 2H8" stroke="${C.coral}"/></g>
      ${butterfly(190,50,C.coral)}
    `);
  }
  function forest(o){
    const corridor = Number(o.corridor)||0;
    return frame('Aventura del bosque: tres islas de vegetación, animales, una carretera y rutas posibles de conexión.', `
      <rect width="600" height="330" fill="#ffe79a"/>
      <path d="M0 0H600V68Q437 37 338 71T0 75Z" fill="#a7f6ed"/>
      ${cloud(226,20,.55)}
      <path d="M0 10 171 3 220 65 201 133 136 185 42 194 0 163Z" fill="#17bd85" ${outline}/>
      <path d="M327 5 600 0V115L512 156 429 132 365 86Z" fill="#37d584" ${outline}/>
      <path d="m277 247 91 2 51 81H235Z" fill="#15c384" ${outline}/>
      <path d="M146 55Q263 18 404 56" fill="none" stroke="#172554" stroke-width="26"/>
      <path d="M146 55Q263 18 404 56" fill="none" stroke="#4bdc88" stroke-width="21"/>
      <path d="M-20 278 169 207 364 221 620 85" fill="none" stroke="#172554" stroke-width="48" stroke-linejoin="round"/>
      <path d="M-20 278 169 207 364 221 620 85" fill="none" stroke="#a48cdb" stroke-width="42" stroke-linejoin="round"/>
      <path d="M-20 278 169 207 364 221 620 85" fill="none" stroke="#fff8c9" stroke-width="4" stroke-dasharray="17 16"/>
      ${corridor===1?`<path d="M103 124Q170 184 322 290" fill="none" stroke="#172554" stroke-width="38"/><path d="M103 124Q170 184 322 290" fill="none" stroke="${C.lime}" stroke-width="32"/><path d="M185 212 213 194 247 219 220 239Z" fill="${C.deep}" ${outline}/><path d="m188 212 28-10 25 17" fill="none" stroke="#a5f8cf" stroke-width="4"/>`:''}
      ${corridor===2?`<path d="M326 290Q355 158 476 79" fill="none" stroke="#172554" stroke-width="38"/><path d="M326 290Q355 158 476 79" fill="none" stroke="${C.lime}" stroke-width="32"/><path d="m366 201 18-23 33 19-19 22Z" fill="${C.deep}" ${outline}/>`:''}
      ${trees([[25,65,.8],[72,47,.9],[123,79,.85],[168,106,.8],[74,130,.9],[20,142,.75],[169,34,.75],[398,45,.8],[446,87,.85],[491,40,.8],[538,84,.85],[577,44,.85],[288,286,.7],[342,295,.8],[376,312,.65]])}
      ${palm(220,64,.7)}
      <g transform="translate(98 138)" ${outline}><ellipse cy="9" rx="23" ry="8" fill="#172554" opacity=".12" stroke="none"/><path d="M-17 0q-6-16 8-22 8-2 14 3 15-1 18 9L17 2H-17Z" fill="#ffcf58"/><path d="M-10 1v9m21-9v9"/><circle cx="12" cy="-10" r="2" fill="#172554"/><path d="M-9-16v-5m0 12v-4m-7 5-2-4"/></g>
      <g transform="translate(471 110)" ${outline}><path d="M-15 0q-3-16 10-20 16-3 24 15v10h-34Z" fill="#9b74ff"/><path d="m-11 5-1 10m21-10 1 10"/><circle cx="8" cy="-7" r="2" fill="#172554"/><path d="M18-1q15 0 10-15" fill="none"/></g>
      ${butterfly(250,124,C.purple)}${butterfly(530,258,C.coral)}
      ${shrub(215,302,.95)}${flowerSet([[35,316,.65],[157,274,.7],[447,298,.8],[567,190,.7],[263,93,.6]])}
      <g transform="translate(318 73)" ${outline}><path d="M-9 0V-13h21V8H-9Z" fill="#fff"/><path d="m-1-13 5-7h7l4 7" fill="${C.yellow}"/><circle cx="3" cy="-2" r="5" fill="${C.blue}"/></g>
    `);
  }
  function construction(o){
    const rain=!!o.rain,controls=Array.isArray(o.controls)?o.controls:[];
    const all=controls.length>=3;
    return frame('Aventura de la obra: excavadora amarilla, talud descubierto, drenaje y quebrada. La lluvia puede transportar sedimentos.', `
      <rect width="600" height="330" fill="${rain?'#b5d5ff':'#b3f4ff'}"/>
      <path d="M0 132 101 32 183 106 299 19 412 116 515 48 600 132V330H0Z" fill="#aa9bf0"/>
      <path d="M0 185 103 93 206 177 333 87 470 164 600 103V330H0Z" fill="#9be26f"/>
      ${cloud(26,28,.7)}${cloud(390,29,.65)}
      <path d="m51 330 125-160 181-49L487 35l37 22-127 104-187 51-108 118" fill="#ffcc75" ${outline}/>
      <path d="m88 330 110-140 180-48L507 45" fill="none" stroke="#172554" stroke-width="40"/>
      <path d="m88 330 110-140 180-48L507 45" fill="none" stroke="#a49acb" stroke-width="34"/>
      <path d="m88 330 110-140 180-48L507 45" fill="none" stroke="#fff9d2" stroke-width="3" stroke-dasharray="15 14"/>
      <path d="M-30 285Q153 205 282 264T630 217" fill="none" stroke="#172554" stroke-width="64"/>
      <path d="M-30 285Q153 205 282 264T630 217" fill="none" stroke="${C.aqua}" stroke-width="58"/>
      ${rain&&!all?`<path d="M279 264Q428 306 630 218" fill="none" stroke="#d9a560" stroke-width="36" opacity=".9"/>`:''}
      <path class="game-art-flow" d="M-30 285Q153 205 282 264T630 217" fill="none" stroke="#e2ffff" stroke-width="3" stroke-dasharray="20 18 8 22"/>
      <path d="m199 136 73 21 31 53-81-20Z" fill="${controls.includes(0)?'#32d788':'#f99763'}" ${outline}/>
      ${controls.includes(0)?`<g stroke="#172554" stroke-width="2" fill="none"><path d="m208 149 64 18m-55-7 64 18m-56-7 65 18m-52-45 18 47m5-41 18 47"/></g>`:`<path d="m207 150 62 17m-48-2 58 17m-45-3 56 17" stroke="#dd754a" stroke-width="3"/>`}
      <path d="m237 192 28 30 14 35" fill="none" stroke="${controls.includes(1)?'#172554':'#cf9c62'}" stroke-width="13" stroke-linecap="round"/>
      ${controls.includes(1)?`<path d="m237 192 28 30 14 35" fill="none" stroke="#b5c8ff" stroke-width="7" stroke-linecap="round"/>`:''}
      ${rain&&!controls.includes(1)?`<path class="game-art-flow" d="m239 193 28 30 14 35" fill="none" stroke="#ffe2a0" stroke-width="6" stroke-dasharray="6 9"/>`:''}
      ${controls.includes(2)?`<g ${outline}><path d="m259 237 56 10-7 29-58-12Z" fill="#d9d7ff"/><path d="m263 245 42 7-4 15-43-8Z" fill="#c09b68"/><path d="m255 254-3 10m62-13-4 11"/></g>`:''}
      <g transform="translate(344 104)" ${outline}><ellipse cx="17" cy="37" rx="48" ry="11" fill="#172554" opacity=".12" stroke="none"/><rect x="-25" y="23" width="80" height="18" rx="9" fill="#172554"/><g fill="#8c86bd"><circle class="game-art-wheel" cx="-12" cy="32" r="5"/><circle class="game-art-wheel" cx="11" cy="32" r="5"/><circle class="game-art-wheel" cx="35" cy="32" r="5"/></g><path d="M-18 23V-9h38V24Z" fill="${C.yellow}"/><path d="M-10-3H13v19h-23Z" fill="#7be5ff"/><path d="M20 15h31v10H20" fill="#ffb539"/><path d="m26 7 17-37 28 10 12 31" fill="none" stroke="#172554" stroke-width="10"/><path d="m26 7 17-37 28 10 12 31" fill="none" stroke="#ffcf58" stroke-width="6"/><path d="m72 5 24 7-3 18-24-9Z" fill="#ffb539"/></g>
      ${trees([[24,173,.8],[81,131,.75],[429,192,.8],[487,155,.8],[548,178,.8],[562,302,.7]])}
      ${flowerSet([[24,293,.7],[143,286,.6],[538,234,.65]])}
      <g ${outline}><path d="m184 215 8-21 8 21Z" fill="${C.coral}"/><path d="m189 204 6 1" stroke="#fff" stroke-width="3"/><path d="m388 155 8-21 8 21Z" fill="${C.coral}"/><path d="m393 144 6 1" stroke="#fff" stroke-width="3"/></g>
      ${rain?`<g class="game-art-rain" stroke="#4171ff" stroke-width="3" stroke-linecap="round" opacity=".65"><path d="m36 9-7 15m67-3-7 15m83-28-7 15m83-13-7 15m87-27-7 15m81-15-7 15m80-28-7 15m76-4-7 15m76-13-7 15"/></g>`:`<g transform="translate(546 37)"><circle r="20" fill="#ffcf58" ${outline}/><path d="M0-29v-5m0 63v5m-29-34h-5m63 0h5m-55-21-4-4m45 45 4 4m-45-4-4 4m45-45 4-4" ${outline}/></g>`}
    `);
  }
  function circular(o){
    return frame('Aventura de la fábrica: planta de producción colorida, tanque de agua, recuperación de energía y materiales.', `
      <rect width="600" height="330" fill="#eadcff"/>
      <path d="M0 73Q119 36 239 71T600 60V0H0Z" fill="#b6f3ff"/>
      ${cloud(53,33,.75)}${cloud(427,29,.6)}
      <path d="m13 244 279 82 296-99-275-86Z" fill="#89e3a2" ${outline}/>
      <path d="m94 137 193-67 201 62-191 74Z" fill="#ff9789" ${outline}/>
      <path d="m94 137 203 69v100L94 234Z" fill="#ffcf58" ${outline}/>
      <path d="m297 206 191-74v103l-191 71Z" fill="#ffac73" ${outline}/>
      <path d="m94 137 193-67v45L94 183Z" fill="#ffedbc" ${outline}/>
      <path d="m287 70 201 62v45l-201-62Z" fill="#ffc7c2" ${outline}/>
      <path d="m196 126 148-51 105 30-150 54Z" fill="#172554" ${outline}/>
      <path d="m206 126 138-46 96 27-139 47Z" fill="#4171ff"/>
      <g stroke="#93f1ff" stroke-width="2"><path d="m230 134 136-46m-101 56 136-46m-141-4 96 29m-58-42 97 29"/></g>
      <g ${outline}><path d="m122 189 30 10v30l-30-10Zm48 17 30 10v30l-30-10Zm48 18 30 10v30l-30-10Z" fill="#68dcff"/><path d="m323 230 29-11v31l-29 11Zm47-18 29-11v31l-29 11Zm47-18 29-11v31l-29 11Z" fill="#9563f7"/></g>
      <g transform="translate(48 213)" ${outline}><ellipse cy="52" rx="30" ry="11" fill="#172554" opacity=".12" stroke="none"/><path d="M-27-5v49c0 15 54 15 54 0V-5" fill="#16d6dc"/><ellipse cy="-5" rx="27" ry="11" fill="#b8ffff"/><path d="M-15 13v22" stroke="#fff" stroke-width="5"/><path d="M27 17h27v15h39" fill="none" stroke="#172554" stroke-width="10"/><path d="M27 17h27v15h39" fill="none" stroke="#57d3ff" stroke-width="6"/><path d="M-8 0 0-14 8 0C16 17-16 17-8 0Z" fill="#4171ff" stroke-width="2"/></g>
      <g transform="translate(529 170)" ${outline}><path d="m-19-10 18-9 22 9v48l-19 10-21-10Z" fill="#9563f7"/><path d="M-9-14V-60l15-6 14 6v45" fill="#ab8bff"/><path d="m-9-60 15 7 14-7M6-53v42" fill="none"/><path d="m-6 7 16-4-8 13 11-3L0 31l3-13-10 3Z" fill="#ffcf58" stroke-width="1.8"/></g>
      <path d="M534 96q-13-18 5-22m11 19q15-12 7-25" fill="none" stroke="#fffffff0" stroke-width="9" stroke-linecap="round"/>
      <g transform="translate(397 272)" ${outline}><rect x="-22" y="-10" width="48" height="30" rx="5" fill="#37d584"/><path d="M-26-10h56v-7h-56Z" fill="#c4f655"/><path d="M-7 5 0-6 9 5H4l-3 9-8-5h4l-1-4Z" fill="#fff" stroke-width="1.2"/></g>
      ${palm(552,269,.7)}${tree(25,122,.7,C.lime)}${shrub(160,292,1)}${flowerSet([[34,303,.7],[454,300,.6]])}
      <g transform="translate(298 48)"><g class="game-art-float">${leaf(0,0,.55)}</g></g>
    `);
  }
  function scene(id, options={}) {
    const o={stage:-1,sim:60,rain:false,corridor:0,controls:[],mini:false,...options};
    return ({agua:water,bosque:forest,obra:construction,circular:circular}[id] || water)(o);
  }
  function mascot(pose='hello') {
    const wave=pose==='celebrate'||pose==='hello';
    return `<svg xmlns="http://www.w3.org/2000/svg" class="game-mascot" viewBox="0 0 160 160" role="img" aria-label="Capi, capibara explorador con casco amarillo y chaleco turquesa"><ellipse cx="80" cy="146" rx="50" ry="9" fill="#172554" opacity=".15"/><g ${outline}><path d="M40 93q-18 9-21 26 6 14 17 6l14-15" fill="#c18556"/><path d="M118 94q22 ${wave?'-22 13-43 10-7 17 3 3 24-19 48':'4 24 26-9 13-19 1l-13-14'}" fill="#c18556"/><path d="M48 89q-15 22-10 47 17 10 42 7 25 3 43-7 5-29-14-47Z" fill="#16d6dc"/><path d="M58 99 80 111l21-12v40H59Z" fill="#2fb2ca"/><path d="M52 120h15v12H52m41-12h15v12H93" fill="#fff6d2"/><path d="M77 110v31" fill="none"/><path d="M40 143h26v8H40m54-8h25v8H94" fill="#965e43"/><path d="M36 63c-6-18 6-36 28-37h39c23 0 34 13 30 36l-4 26c-4 18-28 25-51 20-27 3-42-8-44-27Z" fill="#c58d5c"/><path d="M39 59q-12-6-6-19 10-13 19-3m53-1q7-16 19-7 15 8 4 22" fill="#c58d5c"/><path d="M35 58q44-18 98-4v12q-50-8-98 1Z" fill="#ffcf58"/><path d="M40 52c3-39 80-44 88-1" fill="#ffcf58"/><path d="M77 19v29m12-29v29" fill="none" stroke="#ffe99b" stroke-width="7"/><path d="M29 56q47-13 110-2v9q-58-8-110 2Z" fill="#ffb636"/><path d="M85 76q29-8 42 3 11 16-8 23-15 7-35-3Z" fill="#e3ab76"/><circle cx="64" cy="76" r="3.9" fill="#172554" stroke="none"/><circle cx="107" cy="74" r="3.9" fill="#172554" stroke="none"/><path d="M108 85h9v6h-9Z" fill="#784e40" stroke-width="1.8"/><path d="M86 96q8 7 15 0" fill="none"/><path d="M48 83q6 3 11-1" fill="none" stroke="#e8a56e" stroke-width="4"/></g>${leaf(108,119,.28)}</svg>`;
  }
  function tool(name='sensor') {
    const sensor=`<rect x="25" y="15" width="51" height="87" rx="10" fill="#ffcf58"/><rect x="34" y="27" width="33" height="28" rx="4" fill="#aff7ff"/><path d="m38 43 7-8 9 12 10-14" fill="none"/><path d="M36 69h8m12 0h8m-28 15h8m12 0h8"/><path d="M76 64h13q11 0 11 11v23" fill="none"/><path d="M94 95h12v15H94Z" fill="#9563f7"/>`;
    const map=`<path d="m19 26 27-9 28 9 28-9v68l-28 9-28-9-27 9Z" fill="#c4f655"/><path d="M46 17v68m28-59v68" fill="none"/><path d="m29 49 9-9 15 16 20-8 14 17" fill="none" stroke="#079f79" stroke-width="5" stroke-dasharray="3 7"/><circle cx="67" cy="49" r="18" fill="#fffdf3"/><path d="m79 63 16 17" stroke-width="8"/><path d="m59 50 6 6 11-15" fill="none" stroke="#079f79" stroke-width="4"/>`;
    const flask=`<path d="M48 15h27v8H48Z" fill="#9563f7"/><path d="M52 23v29L31 87q-4 9 6 9h51q10 0 6-9L72 52V23" fill="#d6f9ff"/><path d="M43 65 32 87q-3 8 5 8h51q8 0 5-8L82 65Z" fill="#16d6dc"/><circle cx="56" cy="76" r="4" fill="#fff" stroke="none"/><circle cx="70" cy="86" r="3" fill="#fff" stroke="none"/>`;
    const water=`<rect x="17" y="19" width="42" height="75" rx="8" fill="#4171ff"/><rect x="24" y="29" width="28" height="25" rx="3" fill="#c4f655"/><path d="m29 44 6-7 5 8 8-10" fill="none"/><circle cx="30" cy="65" r="3" fill="#fffdf3"/><circle cx="46" cy="65" r="3" fill="#fffdf3"/><path d="M59 74h10q7 0 7 8v13" fill="none" stroke-width="4"/><path d="M70 92h12v19H70Z" fill="#16d6dc"/><path d="M84 34h22v9H84Z" fill="#9563f7"/><path d="M88 43v20L77 88q-3 7 5 7h26q8 0 5-7l-11-25V43" fill="#d6f9ff"/><path d="m83 74-6 15q-2 6 5 6h26q7 0 5-6l-6-15Z" fill="#16d6dc"/><circle cx="96" cy="83" r="3" fill="#fff" stroke="none"/>`;
    const camera=`<path d="M26 43q-12 1-12 15v27q0 14 14 14h71q14 0 14-14V58q0-15-14-15" fill="#ff7d72"/><path d="m47 27-9 15H23v48h80V42H87l-9-15Z" fill="#9563f7"/><circle cx="64" cy="65" r="25" fill="#172554"/><circle cx="64" cy="65" r="18" fill="#16d6dc"/><circle cx="64" cy="65" r="11" fill="#4171ff"/><circle cx="59" cy="60" r="4" fill="#fffdf3" stroke="none"/><rect x="86" y="49" width="10" height="7" rx="2" fill="#ffcf58"/><path d="M24 43v-6h14v6" fill="#ffcf58"/>`;
    const meter=`<rect x="24" y="14" width="53" height="91" rx="11" fill="#16d6dc"/><rect x="32" y="27" width="37" height="31" rx="4" fill="#fffdf3"/><path d="M38 47v-9m7 9V34m8 13v-6m8 6V35" stroke="#4171ff" stroke-width="4"/><circle cx="39" cy="72" r="5" fill="#9563f7"/><circle cx="61" cy="72" r="5" fill="#ff7d72"/><path d="M38 88h23" fill="none" stroke-width="4"/><path d="M77 52h16q10 0 10 12v25" fill="none" stroke-width="4"/><path d="M97 88h12v17H97Z" fill="#9563f7"/><path d="M97 99h12v11H97Z" fill="#fffdf3"/>`;
    const forest=`<path d="m14 25 26-7 26 8 28-8v66l-28 10-26-9-26 9Z" fill="#c4f655"/><path d="M40 18v67m26-59v68" fill="none"/><path d="M26 54v17m-13-16 13-25 14 25Z" fill="#079f79"/><path d="M56 49h49v42H56Z" fill="#9563f7"/><path d="m68 49 5-10h15l6 10" fill="#9563f7"/><circle cx="81" cy="70" r="15" fill="#172554"/><circle cx="81" cy="70" r="10" fill="#16d6dc"/><circle cx="78" cy="67" r="3" fill="#fffdf3" stroke="none"/><path d="M101 65h12v30h-12" fill="#ffcf58"/><path d="M103 74h7m-7 8h7" stroke-width="2"/>`;
    const energy=`<rect x="26" y="15" width="73" height="96" rx="12" fill="#9563f7"/><rect x="36" y="26" width="53" height="25" rx="4" fill="#c4f655"/><path d="M43 41h9m6 0h9m6 0h9" stroke="#172554" stroke-width="5"/><path d="m65 57-20 25h17l-6 23 25-30H63Z" fill="#ffcf58"/><path d="M26 63H13v24h13m73-24h13v24H99" fill="#ff7d72"/><path d="m5 53 8-7m100 0 8 7M12 32l7 3m88 0 7-3" fill="none" stroke="#ffcf58" stroke-width="5"/>`;
    const waste=`<path d="M60 18h8v81h-8Z" fill="#9563f7"/><path d="M44 99h40l8 11H36Z" fill="#9563f7"/><path d="M19 34 107 25" fill="none" stroke-width="7"/><circle cx="64" cy="30" r="8" fill="#ffcf58"/><path d="M25 34 11 71h28L25 34Zm73-8L83 63h30L98 26Z" fill="none"/><path d="M8 71h34q-3 18-17 18T8 71Z" fill="#16d6dc"/><path d="M80 63h36q-4 18-18 18T80 63Z" fill="#c4f655"/><path d="M19 57h11v14H19Zm3-6h6v6h-6Z" fill="#4171ff"/><path d="m91 49 9-2 5 12-10 4Z" fill="#ff7d72"/>`;
    const drawings={sensor,map,flask,water,camera,meter,forest,energy,waste};
    const labels={sensor:'Sensor ambiental portátil',map:'Mapa de campo y lupa',flask:'Muestra de agua en un matraz',water:'Oxímetro y muestras de agua',camera:'Cámara para registrar evidencias',meter:'Medidor portátil con sonda',forest:'Mapa del bosque y cámara trampa',energy:'Medidor de energía',waste:'Balanza para medir materiales y residuos'};
    const bg={water:'#d1fbff',forest:'#e4ffb0',energy:'#eee0ff',waste:'#fff0d4',camera:'#ffe7e5',meter:'#dcfff2',map:'#e8ffba',flask:'#e7e2ff',sensor:'#e5f6ff'};
    return `<svg xmlns="http://www.w3.org/2000/svg" class="game-tool-art" viewBox="0 0 125 125" role="img" aria-label="${labels[name]||labels.sensor}"><circle cx="63" cy="63" r="59" fill="${bg[name]||bg.sensor}"/><g ${outline}>${drawings[name]||sensor}</g></svg>`;
  }
  window.GAME_ART={scene,mascot,tool};
})();
