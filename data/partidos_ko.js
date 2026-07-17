// ============================================================================
//  MUNDIAL 2026 — Fase Eliminatoria  |  partidos_ko.js
//  Cargar en index.html DESPUÉS de partidos.js
//  Horarios en HORA ECUADOR (UTC-5)
// ============================================================================

// ── PUNTOS KNOCKOUT ──────────────────────────────────────────────────────────
const PUNTOS_KO = {
  MARCADOR_EXACTO:        300,   // 3-2 Argentina, salió 3-2 Argentina
  RESULTADO_CORRECTO:     200,   // 1-0 Argentina, salió 3-2 Argentina
  EMPATE_QUIEN_PASA:      100,   // predijo 1-1 + eligió Argentina (salga lo que salga)
  // Ecuador x2 automático en todos los casos
};

// ── CÁLCULO DE PUNTOS KO ─────────────────────────────────────────────────────
// pred = { gl, gv, quienPasa }   ← quienPasa = 'local' | 'visitante' (solo si gl===gv)
// real = { gl, gv, quienPasa }   ← quienPasa siempre requerido (admin lo pone)
// esEcuador = true si alguno de los equipos es Ecuador
function calcularPuntosKO(pred, real, esEcuador = false) {
  const mult = esEcuador ? 2 : 1;
  const pl = parseInt(pred.gl), pv = parseInt(pred.gv);
  const rl = parseInt(real.gl), rv = parseInt(real.gv);
  if (isNaN(pl) || isNaN(pv) || isNaN(rl) || isNaN(rv)) return 0;

  // 1. Marcador exacto en 90 min + avance correcto
  if (pl === rl && pv === rv) {
    // Si el real fue empate, también debe coincidir quienPasa
    if (rl === rv && pred.quienPasa !== real.quienPasa) return PUNTOS_KO.RESULTADO_CORRECTO * mult;
    return PUNTOS_KO.MARCADOR_EXACTO * mult;
  }

  // 2. Usuario predijo empate (gl === gv)
  if (pl === pv) {
    // Solo importa si acertó quién pasa (ventanita)
    return pred.quienPasa === real.quienPasa
      ? (rl === rv ? PUNTOS_KO.RESULTADO_CORRECTO : PUNTOS_KO.EMPATE_QUIEN_PASA) * mult
      : 0;
  }

  // 3. Usuario predijo resultado decisivo
  const ganadorPred = pl > pv ? 'local' : 'visitante';
  const ganadorReal = rl !== rv
    ? (rl > rv ? 'local' : 'visitante')
    : real.quienPasa; // empate → quien pasó es el "ganador real"

  return ganadorPred === ganadorReal ? PUNTOS_KO.RESULTADO_CORRECTO * mult : 0;
}

// ── 16AVOS DE FINAL ──────────────────────────────────────────────────────────
// llave: "L" = izquierda del bracket | "R" = derecha
// pos: posición de arriba hacia abajo dentro de cada llave
const PARTIDOS_R32 = [

  // ── LLAVE IZQUIERDA ──────────────────────────────────────────────────────
  { id:"M73", ronda:"R32", llave:"L", pos:1,
    fecha:"2026-06-28", hora:"15:00", sede:"Los Ángeles",
    local:"Sudáfrica",       visitante:"Canadá",
    ph:{ local:"2°A", visitante:"2°B" } },

  { id:"M75", ronda:"R32", llave:"L", pos:2,
    fecha:"2026-06-29", hora:"20:00", sede:"Monterrey",
    local:"Países Bajos",    visitante:"Marruecos",
    ph:{ local:"1°F", visitante:"2°C" } },

  { id:"M74", ronda:"R32", llave:"L", pos:3,
    fecha:"2026-06-29", hora:"15:30", sede:"Foxborough",
    local:"Alemania",        visitante:"Paraguay",
    ph:{ local:"1°E", visitante:"3°D" } },

  { id:"M77", ronda:"R32", llave:"L", pos:4,
    fecha:"2026-06-30", hora:"16:00", sede:"Nueva Jersey",
    local:"Francia",         visitante:"Suecia",
    ph:{ local:"1°I", visitante:"3°F" } },

  { id:"M76", ronda:"R32", llave:"L", pos:5,
    fecha:"2026-06-29", hora:"12:00", sede:"Houston",
    local:"Brasil",          visitante:"Japón",
    ph:{ local:"1°C", visitante:"2°F" } },

  { id:"M78", ronda:"R32", llave:"L", pos:6,
    fecha:"2026-06-30", hora:"12:00", sede:"Arlington",
    local:"Costa de Marfil", visitante:"Noruega",
    ph:{ local:"2°E", visitante:"2°I" } },

  { id:"M79", ronda:"R32", llave:"L", pos:7,
    fecha:"2026-06-30", hora:"20:00", sede:"Ciudad de México",
    local:"México",          visitante:"Ecuador",   // ✅ Ecuador clasificó 3°E
    ph:{ local:"1°A", visitante:"3°E" } },

  { id:"M80", ronda:"R32", llave:"L", pos:8,
    fecha:"2026-07-01", hora:"11:00", sede:"Atlanta",
    local:"Inglaterra",      visitante:"RD Congo",
    ph:{ local:"1°L", visitante:"3°K" } },

  // ── LLAVE DERECHA ─────────────────────────────────────────────────────────
  { id:"M86", ronda:"R32", llave:"R", pos:1,
    fecha:"2026-07-03", hora:"17:00", sede:"Miami",
    local:"Argentina",       visitante:"Cabo Verde",
    ph:{ local:"1°J", visitante:"2°H" } },

  { id:"M88", ronda:"R32", llave:"R", pos:2,
    fecha:"2026-07-03", hora:"13:00", sede:"Dallas",
    local:"Australia",       visitante:"Egipto",
    ph:{ local:"2°D", visitante:"2°G" } },

  { id:"M85", ronda:"R32", llave:"R", pos:3,
    fecha:"2026-07-02", hora:"22:00", sede:"Vancouver",
    local:"Suiza",           visitante:"Argelia",
    ph:{ local:"1°B", visitante:"3°J" } },

  { id:"M87", ronda:"R32", llave:"R", pos:4,
    fecha:"2026-07-03", hora:"20:30", sede:"Kansas City",
    local:"Colombia",        visitante:"Ghana",
    ph:{ local:"1°K", visitante:"3°L" } },

  { id:"M83", ronda:"R32", llave:"R", pos:5,
    fecha:"2026-07-02", hora:"18:00", sede:"Toronto",
    local:"Portugal",        visitante:"Croacia",
    ph:{ local:"2°K", visitante:"2°L" } },

  { id:"M84", ronda:"R32", llave:"R", pos:6,
    fecha:"2026-07-02", hora:"14:00", sede:"Los Ángeles",
    local:"España",          visitante:"Austria",
    ph:{ local:"1°H", visitante:"2°J" } },

  { id:"M81", ronda:"R32", llave:"R", pos:7,
    fecha:"2026-07-01", hora:"14:00", sede:"TBD",
    local:"Estados Unidos",  visitante:"Bosnia-Herzegovina",
    ph:{ local:"1°D", visitante:"3°B" } },

  { id:"M82", ronda:"R32", llave:"R", pos:8,
    fecha:"2026-07-01", hora:"17:00", sede:"Seattle",
    local:"Bélgica",         visitante:"Senegal",
    ph:{ local:"1°G", visitante:"3°I" } },
];

// ── OCTAVOS DE FINAL ─────────────────────────────────────────────────────────
// local/visitante: null hasta que admin confirme en Firestore
// ganadorDe: de qué partido R32 viene cada equipo
const PARTIDOS_R16 = [

  // ── LLAVE IZQUIERDA ──────────────────────────────────────────────────────
  { id:"M89", ronda:"R16", llave:"L", pos:1,
    fecha:"2026-07-04", hora:"12:00", sede:"Houston",
    local:null, visitante:null,
    ganadorDe:{ local:"M73", visitante:"M75" } },   // Sud/Can  vs PaíB/Mar

  { id:"M90", ronda:"R16", llave:"L", pos:2,
    fecha:"2026-07-04", hora:"16:00", sede:"Filadelfia",
    local:null, visitante:null,
    ganadorDe:{ local:"M74", visitante:"M77" } },   // Ale/Par  vs Fra/Sue

  { id:"M91", ronda:"R16", llave:"L", pos:3,
    fecha:"2026-07-05", hora:"15:00", sede:"TBD",
    local:null, visitante:null,
    ganadorDe:{ local:"M76", visitante:"M78" } },   // Bra/Jap  vs CdM/Nor

  { id:"M92", ronda:"R16", llave:"L", pos:4,
    fecha:"2026-07-05", hora:"20:00", sede:"Ciudad de México",
    local:null, visitante:null,
    ganadorDe:{ local:"M79", visitante:"M80" } },   // Méx/Ecu  vs Ing/RDC

  // ── LLAVE DERECHA ─────────────────────────────────────────────────────────
  { id:"M96", ronda:"R16", llave:"R", pos:1,
    fecha:"2026-07-07", hora:"11:00", sede:"TBD",
    local:null, visitante:null,
    ganadorDe:{ local:"M86", visitante:"M88" } },   // Arg/CaV  vs Aus/Egi

  { id:"M95", ronda:"R16", llave:"R", pos:2,
    fecha:"2026-07-07", hora:"15:00", sede:"TBD",
    local:null, visitante:null,
    ganadorDe:{ local:"M85", visitante:"M87" } },   // Sui/Arg  vs Col/Gha

  { id:"M93", ronda:"R16", llave:"R", pos:3,
    fecha:"2026-07-06", hora:"14:00", sede:"Arlington",
    local:null, visitante:null,
    ganadorDe:{ local:"M84", visitante:"M83" } },   // ✅ FIX: Esp/Aut vs Por/Cro (antes estaba cruzado con USA)

  { id:"M94", ronda:"R16", llave:"R", pos:4,
    fecha:"2026-07-06", hora:"19:00", sede:"Seattle",
    local:null, visitante:null,
    ganadorDe:{ local:"M82", visitante:"M81" } },   // ✅ FIX: Bél/Sen vs USA/Bos (antes estaba cruzado con España)
];

// ── CUARTOS DE FINAL ─────────────────────────────────────────────────────────
// ✅ Fechas/horas/sedes reales (HORA ECUADOR, UTC-5):
//    M97 Marruecos/Francia   → Jue 09/07 15:00  Foxborough
//    M99 España/Bélgica      → Vie 10/07 14:00  Los Ángeles (SoFi)
//    M98 Noruega/Inglaterra  → Sáb 11/07 16:00  Miami (Hard Rock)
//    M100 Argentina/Suiza    → Sáb 11/07 20:00  Kansas City (Arrowhead)
const PARTIDOS_QF = [
  { id:"M97", ronda:"QF", llave:"L", pos:1,
    fecha:"2026-07-09", hora:"15:00", sede:"Foxborough",
    local:null, visitante:null,
    ganadorDe:{ local:"M89", visitante:"M90" } },

  { id:"M98", ronda:"QF", llave:"L", pos:2,
    fecha:"2026-07-11", hora:"16:00", sede:"Miami",
    local:null, visitante:null,
    ganadorDe:{ local:"M91", visitante:"M92" } },

  { id:"M100", ronda:"QF", llave:"R", pos:1,
    fecha:"2026-07-11", hora:"20:00", sede:"Kansas City",
    local:null, visitante:null,
    ganadorDe:{ local:"M95", visitante:"M96" } },

  { id:"M99", ronda:"QF", llave:"R", pos:2,
    fecha:"2026-07-10", hora:"14:00", sede:"Los Ángeles",
    local:null, visitante:null,
    ganadorDe:{ local:"M93", visitante:"M94" } },
];

// ── SEMIFINALES ──────────────────────────────────────────────────────────────
// ✅ FIX cruces: en numeración FIFA oficial M98=Esp/Bél y M99=Nor/Ing (nuestros
//    IDs quedaron invertidos). NO renombramos los QF porque ya tienen resultados
//    y predicciones en Firestore; solo corregimos las fuentes de cada semi.
//    M101 = Francia vs España     (Mar 14/07 14:00 ECU, Arlington)
//    M102 = Inglaterra vs Argentina (Mié 15/07 14:00 ECU, Atlanta)
const PARTIDOS_SF = [
  { id:"M101", ronda:"SF", llave:"L",
    fecha:"2026-07-14", hora:"14:00", sede:"Arlington",
    local:null, visitante:null,
    ganadorDe:{ local:"M97", visitante:"M99" } },   // Fra/Mar vs Esp/Bél

  { id:"M102", ronda:"SF", llave:"R",
    fecha:"2026-07-15", hora:"14:00", sede:"Atlanta",
    local:null, visitante:null,
    ganadorDe:{ local:"M98", visitante:"M100" } },  // Nor/Ing vs Arg/Sui
];

// ── TERCER PUESTO ────────────────────────────────────────────────────────────
const PARTIDO_TERCERO = {
  id:"M103", ronda:"TP",
  fecha:"2026-07-18", hora:"14:00", sede:"Miami",
  local:null, visitante:null,
  perdedorDe:{ local:"M101", visitante:"M102" },
};

// ── FINAL ────────────────────────────────────────────────────────────────────
const PARTIDO_FINAL = {
  id:"M104", ronda:"F",
  fecha:"2026-07-19", hora:"15:00", sede:"Nueva Jersey",
  local:null, visitante:null,
  ganadorDe:{ local:"M101", visitante:"M102" },
};

// ── HELPERS ──────────────────────────────────────────────────────────────────
const TODOS_KO = [
  ...PARTIDOS_R32,
  ...PARTIDOS_R16,
  ...PARTIDOS_QF,
  ...PARTIDOS_SF,
  PARTIDO_TERCERO,
  PARTIDO_FINAL,
];

function getPartidoKO(id) {
  return TODOS_KO.find(p => p.id === id) || null;
}

// Devuelve texto para mostrar en slot del bracket
// Si el equipo ya está definido → nombre del equipo
// Si no → "Gan. M73" o "Ecu / Méx" dependiendo de si el partido fuente ya tiene equipos
function getLabelBracket(partidoId, slot) {
  const p = getPartidoKO(partidoId);
  if (!p) return '—';
  const equipo = slot === 'local' ? p.local : p.visitante;
  if (equipo) return equipo;

  if (p.ronda === 'R32') {
    return slot === 'local' ? p.ph.local : p.ph.visitante;
  }

  const fuenteId = slot === 'local' ? p.ganadorDe?.local : p.ganadorDe?.visitante;
  const fuente = getPartidoKO(fuenteId);
  if (!fuente) return '—';
  const loc = fuente.local || fuente.ph?.local || '?';
  const vis = fuente.visitante || fuente.ph?.visitante || '?';
  return `${loc} / ${vis}`;
}

// Devuelve true si Ecuador participa en el partido KO
function esPartidoEcuadorKO(partido) {
  return partido.local === 'Ecuador' || partido.visitante === 'Ecuador';
  }

// ============================================================================
//  PROPS ESPECIALES — solo Tercer Puesto (M103) y Final (M104)
//  "Emoción hasta el final": preguntas extra aparte del marcador 90'.
//  Final = puntaje completo · Tercer puesto = mitad
// ============================================================================
const PROPS_FINAL = [
  { id:'primerGol',       pregunta:'¿Qué equipo anota el primer gol?',
    opciones:[['local','Equipo Local'],['visitante','Equipo Visitante'],['ninguno','Ninguno']], puntos:100 },
  { id:'posesion',        pregunta:'¿Qué equipo tendrá la mayor posesión de balón?',
    opciones:[['local','Equipo Local'],['visitante','Equipo Visitante']], puntos:100 },
  { id:'mas3Tarjetas',    pregunta:'¿Habrá más de 3 tarjetas en el partido?',
    opciones:[['si','Sí'],['no','No']], puntos:100 },
  { id:'mas9Corners',     pregunta:'¿Habrá más de 9 tiros de esquina en el partido?',
    opciones:[['si','Sí'],['no','No']], puntos:100 },
  { id:'primerTiroArco',  pregunta:'¿Qué equipo realiza el primer tiro al arco?',
    opciones:[['local','Equipo Local'],['visitante','Equipo Visitante']], puntos:50 },
  { id:'primeraAmarilla', pregunta:'¿Qué equipo recibirá la primera tarjeta amarilla?',
    opciones:[['local','Equipo Local'],['visitante','Equipo Visitante'],['ninguno','Ninguno']], puntos:50 },
];
// Tercer puesto = mitad de puntos de la final (100→50, 50→25)
const PROPS_TERCERO = PROPS_FINAL.map(p => ({ ...p, puntos: p.puntos / 2 }));

// matchId → lista de props que le corresponden
const PROPS_KO_CONFIG = { M104: PROPS_FINAL, M103: PROPS_TERCERO };
function getPropsKO(matchId) { return PROPS_KO_CONFIG[matchId] || null; }

// ── PUNTAJE DEL MARCADOR (90') POR PARTIDO ──────────────────────────────────
// Todo el bracket usa 300/200/100 salvo la Final (M104), que sube a 500/300/200.
// El Tercer Puesto (M103) se queda en el estándar 300/200/100.
const PUNTOS_KO_TIERS = {
  default: { exacto:300, resultado:200, empateAvanza:100 },
  M104:    { exacto:500, resultado:300, empateAvanza:200 },
};
function getPuntosKOTier(matchId) { return PUNTOS_KO_TIERS[matchId] || PUNTOS_KO_TIERS.default; }
