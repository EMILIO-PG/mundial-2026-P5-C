// ============================================================================
//  MUNDIAL 2026 — Datos de la fase de grupos
//  Todos los horarios en HORA ECUADOR (UTC-5).
//  Verificado partido por partido contra el calendario oficial FIFA.
//  Última corrección: 10 partidos arreglados (ver líneas marcadas con // ✅ FIX).
// ============================================================================

const GRUPOS = {
  A: { nombre: "Grupo A", equipos: ["México","Sudáfrica","Corea del Sur","República Checa"] },
  B: { nombre: "Grupo B", equipos: ["Canadá","Bosnia-Herzegovina","Qatar","Suiza"] },
  C: { nombre: "Grupo C", equipos: ["Brasil","Marruecos","Haití","Escocia"] },
  D: { nombre: "Grupo D", equipos: ["Estados Unidos","Paraguay","Australia","Turquía"] },
  E: { nombre: "Grupo E", equipos: ["Alemania","Curazao","Costa de Marfil","Ecuador"] },
  F: { nombre: "Grupo F", equipos: ["Países Bajos","Japón","Suecia","Túnez"] },
  G: { nombre: "Grupo G", equipos: ["Bélgica","Egipto","Irán","Nueva Zelanda"] },
  H: { nombre: "Grupo H", equipos: ["España","Cabo Verde","Arabia Saudita","Uruguay"] },
  I: { nombre: "Grupo I", equipos: ["Francia","Senegal","Irak","Noruega"] },
  J: { nombre: "Grupo J", equipos: ["Argentina","Argelia","Austria","Jordania"] },
  K: { nombre: "Grupo K", equipos: ["Portugal","RD Congo","Uzbekistán","Colombia"] },
  L: { nombre: "Grupo L", equipos: ["Inglaterra","Croacia","Ghana","Panamá"] }
};

const BANDERAS = {
  "México":"mx","Sudáfrica":"za","Corea del Sur":"kr","República Checa":"cz",
  "Canadá":"ca","Bosnia-Herzegovina":"ba","Qatar":"qa","Suiza":"ch",
  "Brasil":"br","Marruecos":"ma","Haití":"ht","Escocia":"gb-sct",
  "Estados Unidos":"us","Paraguay":"py","Australia":"au","Turquía":"tr",
  "Alemania":"de","Curazao":"cw","Costa de Marfil":"ci","Ecuador":"ec",
  "Países Bajos":"nl","Japón":"jp","Suecia":"se","Túnez":"tn",
  "Bélgica":"be","Egipto":"eg","Irán":"ir","Nueva Zelanda":"nz",
  "España":"es","Cabo Verde":"cv","Arabia Saudita":"sa","Uruguay":"uy",
  "Francia":"fr","Senegal":"sn","Irak":"iq","Noruega":"no",
  "Argentina":"ar","Argelia":"dz","Austria":"at","Jordania":"jo",
  "Portugal":"pt","RD Congo":"cd","Uzbekistán":"uz","Colombia":"co",
  "Inglaterra":"gb-eng","Croacia":"hr","Ghana":"gh","Panamá":"pa"
};

// Todos los horarios en hora Ecuador (UTC-5)
const PARTIDOS_GRUPOS = [
  // ── GRUPO A ──────────────────────────────────────
  {id:"A1J1", grupo:"A", fecha:"2026-06-11", hora:"14:00", local:"México",          visitante:"Sudáfrica",        jornada:1, sede:"Ciudad de México"},
  {id:"A2J1", grupo:"A", fecha:"2026-06-11", hora:"21:00", local:"Corea del Sur",   visitante:"República Checa",  jornada:1, sede:"Guadalajara"},
  {id:"A1J2", grupo:"A", fecha:"2026-06-18", hora:"11:00", local:"República Checa", visitante:"Sudáfrica",        jornada:2, sede:"Atlanta"},
  {id:"A2J2", grupo:"A", fecha:"2026-06-18", hora:"20:00", local:"México",          visitante:"Corea del Sur",    jornada:2, sede:"Guadalajara"},
  {id:"A1J3", grupo:"A", fecha:"2026-06-24", hora:"20:00", local:"República Checa", visitante:"México",           jornada:3, sede:"Ciudad de México"},
  {id:"A2J3", grupo:"A", fecha:"2026-06-24", hora:"20:00", local:"Sudáfrica",       visitante:"Corea del Sur",    jornada:3, sede:"Monterrey"},          // ✅ FIX: sede Guadalajara → Monterrey (Estadio BBVA)

  // ── GRUPO B ──────────────────────────────────────
  {id:"B1J1", grupo:"B", fecha:"2026-06-12", hora:"14:00", local:"Canadá",          visitante:"Bosnia-Herzegovina",jornada:1, sede:"Toronto"},
  {id:"B2J1", grupo:"B", fecha:"2026-06-13", hora:"14:00", local:"Qatar",           visitante:"Suiza",            jornada:1, sede:"Santa Clara"},
  {id:"B1J2", grupo:"B", fecha:"2026-06-18", hora:"14:00", local:"Suiza",           visitante:"Bosnia-Herzegovina",jornada:2, sede:"Los Ángeles"},
  {id:"B2J2", grupo:"B", fecha:"2026-06-18", hora:"17:00", local:"Canadá",          visitante:"Qatar",            jornada:2, sede:"Vancouver"},
  {id:"B1J3", grupo:"B", fecha:"2026-06-24", hora:"14:00", local:"Bosnia-Herzegovina",visitante:"Qatar",          jornada:3, sede:"Seattle"},
  {id:"B2J3", grupo:"B", fecha:"2026-06-24", hora:"14:00", local:"Suiza",           visitante:"Canadá",           jornada:3, sede:"Vancouver"},

  // ── GRUPO C ──────────────────────────────────────
  {id:"C1J1", grupo:"C", fecha:"2026-06-13", hora:"17:00", local:"Brasil",          visitante:"Marruecos",        jornada:1, sede:"Nueva Jersey"},
  {id:"C2J1", grupo:"C", fecha:"2026-06-13", hora:"20:00", local:"Haití",           visitante:"Escocia",          jornada:1, sede:"Foxborough"},
  {id:"C1J2", grupo:"C", fecha:"2026-06-19", hora:"17:00", local:"Escocia",         visitante:"Marruecos",        jornada:2, sede:"Foxborough"},
  {id:"C2J2", grupo:"C", fecha:"2026-06-19", hora:"19:30", local:"Brasil",          visitante:"Haití",            jornada:2, sede:"Filadelfia"},
  {id:"C1J3", grupo:"C", fecha:"2026-06-24", hora:"17:00", local:"Marruecos",       visitante:"Haití",            jornada:3, sede:"Atlanta"},
  {id:"C2J3", grupo:"C", fecha:"2026-06-24", hora:"17:00", local:"Escocia",         visitante:"Brasil",           jornada:3, sede:"Miami"},

  // ── GRUPO D ──────────────────────────────────────
  {id:"D1J1", grupo:"D", fecha:"2026-06-12", hora:"20:00", local:"Estados Unidos",  visitante:"Paraguay",         jornada:1, sede:"Los Ángeles"},
  {id:"D2J1", grupo:"D", fecha:"2026-06-14", hora:"11:00", local:"Australia",       visitante:"Turquía",          jornada:1, sede:"Vancouver"},          // ✅ FIX: fecha 13→14 jun y hora 23:00→11:00 (juego del mediodía, 12pm ET)
  {id:"D1J2", grupo:"D", fecha:"2026-06-19", hora:"14:00", local:"Estados Unidos",  visitante:"Australia",        jornada:2, sede:"Seattle"},
  {id:"D2J2", grupo:"D", fecha:"2026-06-19", hora:"22:00", local:"Turquía",         visitante:"Paraguay",         jornada:2, sede:"Santa Clara"},
  {id:"D1J3", grupo:"D", fecha:"2026-06-25", hora:"21:00", local:"Paraguay",        visitante:"Australia",        jornada:3, sede:"Santa Clara"},
  {id:"D2J3", grupo:"D", fecha:"2026-06-25", hora:"21:00", local:"Turquía",         visitante:"Estados Unidos",   jornada:3, sede:"Los Ángeles"},

  // ── GRUPO E ──────────────────────────────────────
  {id:"E1J1", grupo:"E", fecha:"2026-06-14", hora:"12:00", local:"Alemania",        visitante:"Curazao",          jornada:1, sede:"Houston"},
  {id:"E2J1", grupo:"E", fecha:"2026-06-14", hora:"18:00", local:"Costa de Marfil", visitante:"Ecuador",          jornada:1, sede:"Filadelfia"},
  {id:"E1J2", grupo:"E", fecha:"2026-06-20", hora:"15:00", local:"Alemania",        visitante:"Costa de Marfil",  jornada:2, sede:"Toronto"},
  {id:"E2J2", grupo:"E", fecha:"2026-06-20", hora:"19:00", local:"Ecuador",         visitante:"Curazao",          jornada:2, sede:"Kansas City"},
  {id:"E1J3", grupo:"E", fecha:"2026-06-25", hora:"15:00", local:"Curazao",         visitante:"Costa de Marfil",  jornada:3, sede:"Filadelfia"},
  {id:"E2J3", grupo:"E", fecha:"2026-06-25", hora:"15:00", local:"Ecuador",         visitante:"Alemania",         jornada:3, sede:"Nueva Jersey"},

  // ── GRUPO F ──────────────────────────────────────
  // ⚠️ Las jornadas 2 y 3 estaban completamente intercambiadas. Corregidas según FIFA.
  {id:"F1J1", grupo:"F", fecha:"2026-06-14", hora:"15:00", local:"Países Bajos",    visitante:"Japón",            jornada:1, sede:"Arlington"},
  {id:"F2J1", grupo:"F", fecha:"2026-06-14", hora:"21:00", local:"Suecia",          visitante:"Túnez",            jornada:1, sede:"Monterrey"},          // ✅ FIX: sede Guadalajara → Monterrey
  {id:"F1J2", grupo:"F", fecha:"2026-06-20", hora:"23:00", local:"Túnez",           visitante:"Japón",            jornada:2, sede:"Monterrey"},          // ✅ FIX: era "Japón vs Suecia / Guadalajara" → Túnez vs Japón / Monterrey (partido 1000 de la historia)
  {id:"F2J2", grupo:"F", fecha:"2026-06-20", hora:"12:00", local:"Países Bajos",    visitante:"Suecia",           jornada:2, sede:"Houston"},            // ✅ FIX: visitante Túnez → Suecia
  {id:"F1J3", grupo:"F", fecha:"2026-06-25", hora:"18:00", local:"Japón",           visitante:"Suecia",           jornada:3, sede:"Arlington"},          // ✅ FIX: era "Túnez vs Japón / Guadalajara" → Japón vs Suecia / Arlington
  {id:"F2J3", grupo:"F", fecha:"2026-06-25", hora:"18:00", local:"Túnez",           visitante:"Países Bajos",     jornada:3, sede:"Kansas City"},        // ✅ FIX: era "Suecia vs Países Bajos / Arlington" → Túnez vs Países Bajos / Kansas City

  // ── GRUPO G ──────────────────────────────────────
  {id:"G1J1", grupo:"G", fecha:"2026-06-15", hora:"14:00", local:"Bélgica",         visitante:"Egipto",           jornada:1, sede:"Seattle"},
  {id:"G2J1", grupo:"G", fecha:"2026-06-15", hora:"20:00", local:"Irán",            visitante:"Nueva Zelanda",    jornada:1, sede:"Los Ángeles"},
  {id:"G1J2", grupo:"G", fecha:"2026-06-21", hora:"14:00", local:"Bélgica",         visitante:"Irán",             jornada:2, sede:"Los Ángeles"},        // ✅ FIX: fecha 22→21 jun
  {id:"G2J2", grupo:"G", fecha:"2026-06-21", hora:"20:00", local:"Nueva Zelanda",   visitante:"Egipto",           jornada:2, sede:"Vancouver"},
  {id:"G1J3", grupo:"G", fecha:"2026-06-26", hora:"22:00", local:"Nueva Zelanda",   visitante:"Bélgica",          jornada:3, sede:"Vancouver"},
  {id:"G2J3", grupo:"G", fecha:"2026-06-26", hora:"22:00", local:"Egipto",          visitante:"Irán",             jornada:3, sede:"Seattle"},

  // ── GRUPO H ──────────────────────────────────────
  {id:"H1J1", grupo:"H", fecha:"2026-06-15", hora:"11:00", local:"España",          visitante:"Cabo Verde",       jornada:1, sede:"Atlanta"},
  {id:"H2J1", grupo:"H", fecha:"2026-06-15", hora:"17:00", local:"Arabia Saudita",  visitante:"Uruguay",          jornada:1, sede:"Miami"},
  {id:"H1J2", grupo:"H", fecha:"2026-06-21", hora:"11:00", local:"España",          visitante:"Arabia Saudita",   jornada:2, sede:"Atlanta"},
  {id:"H2J2", grupo:"H", fecha:"2026-06-21", hora:"17:00", local:"Uruguay",         visitante:"Cabo Verde",       jornada:2, sede:"Miami"},
  {id:"H1J3", grupo:"H", fecha:"2026-06-26", hora:"19:00", local:"Cabo Verde",      visitante:"Arabia Saudita",   jornada:3, sede:"Houston"},
  {id:"H2J3", grupo:"H", fecha:"2026-06-26", hora:"19:00", local:"Uruguay",         visitante:"España",           jornada:3, sede:"Guadalajara"},

  // ── GRUPO I ──────────────────────────────────────
  {id:"I1J1", grupo:"I", fecha:"2026-06-16", hora:"14:00", local:"Francia",         visitante:"Senegal",          jornada:1, sede:"Nueva Jersey"},
  {id:"I2J1", grupo:"I", fecha:"2026-06-16", hora:"17:00", local:"Irak",            visitante:"Noruega",          jornada:1, sede:"Foxborough"},
  {id:"I1J2", grupo:"I", fecha:"2026-06-22", hora:"16:00", local:"Francia",         visitante:"Irak",             jornada:2, sede:"Filadelfia"},
  {id:"I2J2", grupo:"I", fecha:"2026-06-22", hora:"19:00", local:"Noruega",         visitante:"Senegal",          jornada:2, sede:"Nueva Jersey"},       // ✅ FIX: sede Toronto → Nueva Jersey (MetLife)
  {id:"I1J3", grupo:"I", fecha:"2026-06-26", hora:"14:00", local:"Noruega",         visitante:"Francia",          jornada:3, sede:"Foxborough"},
  {id:"I2J3", grupo:"I", fecha:"2026-06-26", hora:"14:00", local:"Senegal",         visitante:"Irak",             jornada:3, sede:"Toronto"},

  // ── GRUPO J ──────────────────────────────────────
  {id:"J1J1", grupo:"J", fecha:"2026-06-16", hora:"20:00", local:"Argentina",       visitante:"Argelia",          jornada:1, sede:"Kansas City"},
  {id:"J2J1", grupo:"J", fecha:"2026-06-16", hora:"23:00", local:"Austria",         visitante:"Jordania",         jornada:1, sede:"Santa Clara"},
  {id:"J1J2", grupo:"J", fecha:"2026-06-22", hora:"12:00", local:"Argentina",       visitante:"Austria",          jornada:2, sede:"Arlington"},
  {id:"J2J2", grupo:"J", fecha:"2026-06-22", hora:"22:00", local:"Jordania",        visitante:"Argelia",          jornada:2, sede:"Santa Clara"},
  {id:"J1J3", grupo:"J", fecha:"2026-06-27", hora:"21:00", local:"Argelia",         visitante:"Austria",          jornada:3, sede:"Kansas City"},
  {id:"J2J3", grupo:"J", fecha:"2026-06-27", hora:"21:00", local:"Jordania",        visitante:"Argentina",        jornada:3, sede:"Arlington"},

  // ── GRUPO K ──────────────────────────────────────
  {id:"K1J1", grupo:"K", fecha:"2026-06-17", hora:"12:00", local:"Portugal",        visitante:"RD Congo",         jornada:1, sede:"Houston"},
  {id:"K2J1", grupo:"K", fecha:"2026-06-17", hora:"21:00", local:"Uzbekistán",      visitante:"Colombia",         jornada:1, sede:"Ciudad de México"},
  {id:"K1J2", grupo:"K", fecha:"2026-06-23", hora:"12:00", local:"Portugal",        visitante:"Uzbekistán",       jornada:2, sede:"Houston"},
  {id:"K2J2", grupo:"K", fecha:"2026-06-23", hora:"21:00", local:"Colombia",        visitante:"RD Congo",         jornada:2, sede:"Guadalajara"},
  {id:"K1J3", grupo:"K", fecha:"2026-06-27", hora:"18:30", local:"Colombia",        visitante:"Portugal",         jornada:3, sede:"Miami"},
  {id:"K2J3", grupo:"K", fecha:"2026-06-27", hora:"18:30", local:"RD Congo",        visitante:"Uzbekistán",       jornada:3, sede:"Atlanta"},

  // ── GRUPO L ──────────────────────────────────────
  {id:"L1J1", grupo:"L", fecha:"2026-06-17", hora:"15:00", local:"Inglaterra",      visitante:"Croacia",          jornada:1, sede:"Arlington"},
  {id:"L2J1", grupo:"L", fecha:"2026-06-17", hora:"18:00", local:"Ghana",           visitante:"Panamá",           jornada:1, sede:"Toronto"},
  {id:"L1J2", grupo:"L", fecha:"2026-06-23", hora:"15:00", local:"Inglaterra",      visitante:"Ghana",            jornada:2, sede:"Foxborough"},
  {id:"L2J2", grupo:"L", fecha:"2026-06-23", hora:"18:00", local:"Panamá",          visitante:"Croacia",          jornada:2, sede:"Toronto"},            // ✅ FIX: sede Foxborough → Toronto (BMO Field)
  {id:"L1J3", grupo:"L", fecha:"2026-06-27", hora:"16:00", local:"Panamá",          visitante:"Inglaterra",       jornada:3, sede:"Nueva Jersey"},
  {id:"L2J3", grupo:"L", fecha:"2026-06-27", hora:"16:00", local:"Croacia",         visitante:"Ghana",            jornada:3, sede:"Filadelfia"},
];

const PUNTOS = {
  GRUPO_CLASIFICADOS_ORDEN:    100,
  GRUPO_CLASIFICADOS_SIN_ORDEN: 50,
  GRUPO_TERCER_LUGAR:           25,
  MARCADOR_EXACTO:             200,
  RESULTADO_CORRECTO:          100,
  ECUADOR_MARCADOR_EXACTO:     400,
  ECUADOR_RESULTADO_CORRECTO:  200,
  CLASIFICADO_CORRECTO:         50,
};