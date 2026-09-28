const database = {
  leagues: {
    premier_league: {
      name: "English Premiership",
      teams: [
        { name: "Arsenal", id: 101 }, { name: "Aston Villa", id: 102 }, { name: "Blackburn Rovers", id: 103 },
        { name: "Bolton Wanderers", id: 104 }, { name: "Charlton Athletic", id: 105 }, { name: "Chelsea", id: 106 },
        { name: "Everton", id: 107 }, { name: "Fulham", id: 108 }, { name: "Liverpool", id: 109 },
        { name: "Manchester City", id: 110 }, { name: "Manchester United", id: 111 }, { name: "Middlesbrough", id: 112 },
        { name: "Newcastle United", id: 113 }, { name: "Portsmouth", id: 114 }, { name: "Reading", id: 115 },
        { name: "Sheffield United", id: 116 }, { name: "Tottenham Hotspur", id: 117 }, { name: "Watford", id: 118 },
        { name: "West Ham United", id: 119 }, { name: "Wigan Athletic", id: 120 }
      ]
    },
    ligue_1: {
      name: "Ligue 1",
      teams: [
        { name: "AJ Auxerre", id: 201 }, { name: "Girondins de Bordeaux", id: 202 }, { name: "Le Mans", id: 203 },
        { name: "RC Lens", id: 204 }, { name: "Lille", id: 205 }, { name: "Lorient", id: 206 },
        { name: "Olympique Lyonnais", id: 207 }, { name: "Olympique de Marseille", id: 208 }, { name: "AS Monaco", id: 209 },
        { name: "ASNL (Nancy)", id: 210 }, { name: "FC Nantes", id: 211 }, { name: "OGC Nice", id: 212 },
        { name: "Paris Saint-Germain", id: 213 }, { name: "Stade Rennais", id: 214 }, { name: "Saint-Étienne", id: 215 },
        { name: "CS Sedan", id: 216 }, { name: "FC Sochaux", id: 217 }, { name: "Toulouse FC", id: 218 },
        { name: "ESTAC Troyes", id: 219 }, { name: "Valenciennes FC", id: 220 }
      ]
    },
    serie_a: {
      name: "Serie A",
      teams: [
        { name: "Ascoli", id: 301 }, { name: "Atalanta", id: 302 }, { name: "Cagliari", id: 303 },
        { name: "Catania", id: 304 }, { name: "Chievo Verona", id: 305 }, { name: "Empoli", id: 306 },
        { name: "Fiorentina", id: 307 }, { name: "Inter Milan", id: 308 }, { name: "Lazio", id: 309 },
        { name: "Livorno", id: 310 }, { name: "Messina", id: 311 }, { name: "AC Milan", id: 312 },
        { name: "Palermo", id: 313 }, { name: "Parma", id: 314 }, { name: "Reggina", id: 315 },
        { name: "AS Roma", id: 316 }, { name: "Sampdoria", id: 317 }, { name: "AC Siena", id: 318 },
        { name: "Torino", id: 319 }, { name: "Udinese", id: 320 }
      ]
    },
    eredivisie: {
      name: "Eredivisie",
      teams: [
        { name: "ADO Den Haag", id: 401 }, { name: "Ajax", id: 402 }, { name: "AZ Alkmaar", id: 403 },
        { name: "Excelsior", id: 404 }, { name: "Feyenoord", id: 405 }, { name: "FC Groningen", id: 406 },
        { name: "sc Heerenveen", id: 407 }, { name: "Heracles Almelo", id: 408 }, { name: "NAC Breda", id: 409 },
        { name: "NEC Nijmegen", id: 410 }, { name: "PSV Eindhoven", id: 411 }, { name: "RKC Waalwijk", id: 412 },
        { name: "Roda JC", id: 413 }, { name: "Sparta Rotterdam", id: 414 }, { name: "FC Twente", id: 415 },
        { name: "FC Utrecht", id: 416 }, { name: "Vitesse", id: 417 }, { name: "Willem II", id: 418 }
      ]
    },
    la_liga: {
      name: "Liga Española",
      teams: [
        { name: "Athletic Club", id: 501 }, { name: "FC Barcelona", id: 502 }, { name: "Real Betis", id: 503 },
        { name: "Celta de Vigo", id: 504 }, { name: "Deportivo La Coruña", id: 505 }, { name: "RCD Espanyol", id: 506 },
        { name: "Getafe", id: 507 }, { name: "Gimnàstic", id: 508 }, { name: "Levante", id: 509 },
        { name: "Atlético Madrid", id: 510 }, { name: "Real Madrid", id: 511 }, { name: "RCD Mallorca", id: 512 },
        { name: "CA Osasuna", id: 513 }, { name: "Racing Santander", id: 514 }, { name: "Real Sociedad", id: 515 },
        { name: "Recreativo de Huelva", id: 516 }, { name: "Sevilla FC", id: 517 }, { name: "Valencia CF", id: 518 },
        { name: "Villarreal CF", id: 519 }, { name: "Real Zaragoza", id: 520 }
      ]
    },
    rest_of_europe: {
      name: "Rest of Europe",
      teams: [
        { name: "Anderlecht", id: 601 }, { name: "Club Brugge", id: 602 }, { name: "Sparta Praha", id: 603 },
        { name: "FC København", id: 604 }, { name: "FC Bayern München", id: 605 }, { name: "Olympiacos", id: 606 },
        { name: "Panathinaikos", id: 607 }, { name: "Juventus", id: 608 }, { name: "Rosenborg BK", id: 609 },
        { name: "SL Benfica", id: 610 }, { name: "FC Porto", id: 611 }, { name: "Sporting CP", id: 612 },
        { name: "Celtic FC", id: 613 }, { name: "Rangers FC", id: 614 }, { name: "Djurgårdens IF", id: 615 },
        { name: "Beşiktaş JK", id: 616 }, { name: "Fenerbahçe SK", id: 617 }, { name: "Galatasaray SK", id: 618 },
        { name: "FC Dynamo Kyiv", id: 619 }
      ]
    }
  },
  nationalTeams: [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Czech Republic", "Denmark", "England", "Finland",
    "France", "Germany", "Greece", "Hungary", "Ireland", "Italy", "Latvia", "Netherlands",
    "Northern Ireland", "Norway", "Poland", "Portugal", "Romania", "Russia", "Scotland",
    "Serbia & Montenegro", "Slovakia", "Slovenia", "Spain", "Sweden", "Switzerland", "Turkey",
    "Ukraine", "Wales", "Angola", "Cameroon", "Côte d'Ivoire", "Ghana", "Nigeria", "South Africa",
    "Togo", "Tunisia", "Costa Rica", "Mexico", "Trinidad & Tobago", "USA", "Argentina", "Brazil",
    "Chile", "Colombia", "Ecuador", "Paraguay", "Peru", "Uruguay", "Iran", "Japan", "Saudi Arabia",
    "South Korea", "Australia"
  ],
  uclClubs: [
    "Arsenal", "Chelsea", "Manchester United", "Liverpool",
    "FC Barcelona", "Real Madrid", "Valencia CF", "Sevilla FC",
    "Inter Milan", "AC Milan", "AS Roma", "Juventus",
    "Olympique Lyonnais", "Lille", "Girondins de Bordeaux", "Paris Saint-Germain",
    "PSV Eindhoven", "Ajax", "Feyenoord", "AZ Alkmaar",
    "FC Bayern München", "Werder Bremen", "FC Porto", "SL Benfica", "Sporting CP",
    "Celtic FC", "Rangers FC", "Olympiacos", "Panathinaikos", "Fenerbahçe SK", "Galatasaray SK", "FC Dynamo Kyiv"
  ],
  userState: {
    managerName: "Jamal Mahmood",
    selectedTeam: "Arsenal",
    nationalTeam: "none",
    league: "premier_league",
    currentGameweek: 1,
    budget: 60000000
  }
};

let standings = {};
let fixtures = {};
let players = [];

let selectedStatsLeague = "all";
let selectedTableLeague = "premier_league";
let selectedFixturesLeague = "premier_league";
let selectedFixturesRound = 0;
let calendarMode = "round";
let transferFilterLeague = "all";
let transferFilterPos = "all";

let setupSelectedLeague = "premier_league";
let setupSelectedTeam = "Arsenal";
let setupSelectedNational = "none";

let ucl = {
  groups: {},
  fixtures: {},
  knockouts: { r16: [], qf: [], sf: [], final: null }
};

const INTERNATIONAL_BREAK_WEEKS = [10, 20, 30];
const UCL_GROUP_WEEKS = [4, 8, 12, 16, 20, 24];
const SUMMER_WINDOW_WEEKS = [1, 2, 3, 4, 5];
const WINTER_WINDOW_WEEKS = [21, 22, 23, 24, 25];

const FORMATIONS = {
  "4-3-3": [
    { slotId: 0,  slotRole: "GK",  x: 50, y: 88 },
    { slotId: 1,  slotRole: "LB",  x: 18, y: 72 },
    { slotId: 2,  slotRole: "CB",  x: 38, y: 74 },
    { slotId: 3,  slotRole: "CB",  x: 62, y: 74 },
    { slotId: 4,  slotRole: "RB",  x: 82, y: 72 },
    { slotId: 5,  slotRole: "DMF", x: 50, y: 55 },
    { slotId: 6,  slotRole: "CMF", x: 30, y: 44 },
    { slotId: 7,  slotRole: "CMF", x: 70, y: 44 },
    { slotId: 8,  slotRole: "LWF", x: 18, y: 22 },
    { slotId: 9,  slotRole: "CF",  x: 50, y: 15 },
    { slotId: 10, slotRole: "RWF", x: 82, y: 22 }
  ],
  "4-2-3-1": [
    { slotId: 0,  slotRole: "GK",  x: 50, y: 88 },
    { slotId: 1,  slotRole: "LB",  x: 18, y: 72 },
    { slotId: 2,  slotRole: "CB",  x: 38, y: 74 },
    { slotId: 3,  slotRole: "CB",  x: 62, y: 74 },
    { slotId: 4,  slotRole: "RB",  x: 82, y: 72 },
    { slotId: 5,  slotRole: "DMF", x: 35, y: 56 },
    { slotId: 6,  slotRole: "DMF", x: 65, y: 56 },
    { slotId: 7,  slotRole: "AMF", x: 50, y: 38 },
    { slotId: 8,  slotRole: "LMF", x: 18, y: 34 },
    { slotId: 9,  slotRole: "CF",  x: 50, y: 15 },
    { slotId: 10, slotRole: "RMF", x: 82, y: 34 }
  ],
  "4-4-2": [
    { slotId: 0,  slotRole: "GK",  x: 50, y: 88 },
    { slotId: 1,  slotRole: "LB",  x: 18, y: 72 },
    { slotId: 2,  slotRole: "CB",  x: 38, y: 74 },
    { slotId: 3,  slotRole: "CB",  x: 62, y: 74 },
    { slotId: 4,  slotRole: "RB",  x: 82, y: 72 },
    { slotId: 5,  slotRole: "LMF", x: 18, y: 46 },
    { slotId: 6,  slotRole: "CMF", x: 38, y: 50 },
    { slotId: 7,  slotRole: "CMF", x: 62, y: 50 },
    { slotId: 8,  slotRole: "RMF", x: 82, y: 46 },
    { slotId: 9,  slotRole: "CF",  x: 38, y: 18 },
    { slotId: 10, slotRole: "CF",  x: 62, y: 18 }
  ],
  "3-5-2": [
    { slotId: 0,  slotRole: "GK",  x: 50, y: 88 },
    { slotId: 1,  slotRole: "CB",  x: 28, y: 74 },
    { slotId: 2,  slotRole: "CB",  x: 50, y: 76 },
    { slotId: 3,  slotRole: "CB",  x: 72, y: 74 },
    { slotId: 4,  slotRole: "LWB", x: 12, y: 46 },
    { slotId: 5,  slotRole: "DMF", x: 50, y: 56 },
    { slotId: 6,  slotRole: "RWB", x: 88, y: 46 },
    { slotId: 7,  slotRole: "AMF", x: 35, y: 38 },
    { slotId: 8,  slotRole: "AMF", x: 65, y: 38 },
    { slotId: 9,  slotRole: "CF",  x: 38, y: 18 },
    { slotId: 10, slotRole: "CF",  x: 62, y: 18 }
  ]
};

let currentFormation = "4-3-3";
let activeSelection = null;
let inspectedPlayerId = null;
let targetBidPlayerId = null;

function getConditionIcon(cond) {
  switch (cond) {
    case "red":    return `<span class="condition-arrow cond-red" title="Top Form">⬆</span>`;
    case "orange": return `<span class="condition-arrow cond-orange" title="Good Form">⬈</span>`;
    case "blue":   return `<span class="condition-arrow cond-blue" title="Poor Form">⬊</span>`;
    case "grey":   return `<span class="condition-arrow cond-grey" title="Terrible Form">⬇</span>`;
    case "green":
    default:       return `<span class="condition-arrow cond-green" title="Normal Form">➡</span>`;
  }
}

function getPosClass(pos) {
  if (pos === "GK") return "pos-gk";
  if (["CB", "SB", "LB", "RB", "LWB", "RWB"].includes(pos)) return "pos-def";
  if (["DMF", "CMF", "SMF", "AMF", "LMF", "RMF"].includes(pos)) return "pos-mid";
  return "pos-att";
}

function rollMatchdayConditions() {
  const roll = () => {
    const r = Math.random();
    if (r < 0.12) return "red";
    if (r < 0.35) return "orange";
    if (r < 0.75) return "green";
    if (r < 0.90) return "blue";
    return "grey";
  };
  players.forEach(p => { p.condition = roll(); });
}

function calculatePlayerValue(player) {
  const rating = player.rating || 80;
  let val = Math.pow(rating / 70, 4.5) * 5500000;
  if (player.condition === "red") val *= 1.15;
  if (player.condition === "orange") val *= 1.05;
  if (player.condition === "blue") val *= 0.90;
  if (player.condition === "grey") val *= 0.80;
  return Math.max(1000000, Math.round(val / 500000) * 500000);
}

function formatCurrency(amount) {
  return "€" + amount.toLocaleString();
}

function isTransferWindowOpen(gw) {
  return SUMMER_WINDOW_WEEKS.includes(gw) || WINTER_WINDOW_WEEKS.includes(gw);
}

function getPlayerDetailedAttributes(p) {
  const base = p.rating || 80;
  const clamp = v => Math.min(99, Math.max(35, Math.round(v)));

  let att = base, def = base, bal = base, sta = base, spd = base, acc = base, pow = base, sho = base, drb = base, pas = base, hea = base;

  if (p.pos === "CF" || p.pos === "SS") {
    att += 7; sho += 8; pow += 5; drb += 4; spd += 3; def -= 30; hea += 4;
  } else if (p.pos === "WF" || p.pos === "LWF" || p.pos === "RWF") {
    att += 6; spd += 9; acc += 8; drb += 9; pas += 3; def -= 32; sho += 3;
  } else if (["CMF", "AMF", "SMF", "LMF", "RMF"].includes(p.pos)) {
    pas += 8; drb += 7; sta += 5; att += 2; def -= 12; hea -= 5;
  } else if (p.pos === "DMF") {
    def += 8; bal += 8; sta += 7; pas += 4; drb -= 6; att -= 12;
  } else if (["CB", "LB", "RB", "SB", "LWB", "RWB"].includes(p.pos)) {
    def += 11; bal += 9; hea += 8; sta += 6; spd += (p.pos === "CB" ? -5 : 4); att -= 30; sho -= 25;
  } else if (p.pos === "GK") {
    def = base + 7; bal = base + 5; sho = 20; pas = 45; drb = 25; spd = 48; att = 20;
  }

  return {
    att: clamp(att), def: clamp(def), bal: clamp(bal), sta: clamp(sta),
    spd: clamp(spd), acc: clamp(acc), pow: clamp(pow), sho: clamp(sho),
    drb: clamp(drb), pas: clamp(pas), hea: clamp(hea)
  };
}

function computeRadarPoints(attrs) {
  const cx = 100, cy = 90, maxR = 68;
  const vals = [attrs.spd, attrs.sho, attrs.pas, attrs.drb, attrs.def, attrs.bal];
  const angles = [-90, -30, 30, 90, 150, 210];
  return vals.map((v, i) => {
    const r = (v / 100) * maxR;
    const rad = angles[i] * (Math.PI / 180);
    return `${(cx + r * Math.cos(rad)).toFixed(1)},${(cy + r * Math.sin(rad)).toFixed(1)}`;
  }).join(" ");
}

function updatePlayerInspector(player) {
  if (!player) return;
  inspectedPlayerId = player.id;

  const nameEl = document.getElementById("inspectName");
  const ovrEl = document.getElementById("inspectOvr");
  const posEl = document.getElementById("inspectPos");
  const condEl = document.getElementById("inspectCond");
  const bioEl = document.getElementById("inspectClubNat");

  const ageEl = document.getElementById("inspectAge");
  const footEl = document.getElementById("inspectFoot");
  const heightEl = document.getElementById("inspectHeight");
  const pesIdEl = document.getElementById("inspectPesId");

  if (nameEl) nameEl.textContent = player.name;
  if (ovrEl) ovrEl.textContent = player.rating;
  if (posEl) {
    posEl.textContent = player.pos;
    posEl.className = `pos-tag ${getPosClass(player.pos)}`;
  }
  if (condEl) condEl.innerHTML = getConditionIcon(player.condition);
  if (bioEl) bioEl.textContent = `${player.club} • ${player.nationality || "Europe"}`;

  if (ageEl) ageEl.textContent = player.age || 26;
  if (footEl) footEl.textContent = player.foot || "Right";
  if (heightEl) heightEl.textContent = `${player.height || 182} cm`;
  if (pesIdEl) pesIdEl.textContent = `#${player.pesId || player.id}`;

  const attrs = getPlayerDetailedAttributes(player);
  const setAttr = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.textContent = val;
  };

  setAttr("attrAtt", attrs.att);
  setAttr("attrDef", attrs.def);
  setAttr("attrBal", attrs.bal);
  setAttr("attrSta", attrs.sta);
  setAttr("attrSpd", attrs.spd);
  setAttr("attrAcc", attrs.acc);
  setAttr("attrPow", attrs.pow);
  setAttr("attrSho", attrs.sho);
  setAttr("attrDrb", attrs.drb);
  setAttr("attrPas", attrs.pas);
  setAttr("attrHea", attrs.hea);
  setAttr("attrVal", "€" + (calculatePlayerValue(player) / 1000000).toFixed(1) + "M");

  const poly = document.getElementById("radarPolygon");
  if (poly) poly.setAttribute("points", computeRadarPoints(attrs));
}

function generateSchedule(teamList) {
  let teams = [...teamList].map(t => typeof t === "string" ? t : t.name);
  if (teams.length % 2 !== 0) teams.push("BYE");
  const numTeams = teams.length;
  const numRounds = numTeams - 1;
  const half = numTeams / 2;
  const schedule = [];

  for (let round = 0; round < numRounds; round++) {
    const roundMatches = [];
    for (let i = 0; i < half; i++) {
      const home = teams[i];
      const away = teams[numTeams - 1 - i];
      if (home !== "BYE" && away !== "BYE") {
        roundMatches.push({ home, away, played: false, homeScore: null, awayScore: null });
      }
    }
    schedule.push(roundMatches);
    teams.splice(1, 0, teams.pop());
  }

  const secondHalf = schedule.map(round =>
    round.map(m => ({ home: m.away, away: m.home, played: false, homeScore: null, awayScore: null }))
  );
  return [...schedule, ...secondHalf];
}

function getLeagueRoundForGameweek(leagueKey, gw) {
  if (INTERNATIONAL_BREAK_WEEKS.includes(gw)) return null;
  const breaksBefore = INTERNATIONAL_BREAK_WEEKS.filter(b => b < gw).length;
  const roundIdx = gw - 1 - breaksBefore;
  const totalRounds = fixtures[leagueKey] ? fixtures[leagueKey].length : 0;
  return roundIdx < totalRounds ? roundIdx : null;
}

function initUclEngine() {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const pool = [...database.uclClubs];
  const userClub = database.userState.selectedTeam;
  if (!pool.includes(userClub)) pool[0] = userClub;
  pool.sort(() => Math.random() - 0.5);

  ucl.groups = {};
  ucl.fixtures = {};
  letters.forEach((letter, idx) => {
    const groupTeams = pool.slice(idx * 4, idx * 4 + 4);
    ucl.groups[letter] = {
      teams: groupTeams,
      standings: groupTeams.map((team, tIdx) => ({
        pos: tIdx + 1, name: team, p: 0, w: 0, d: 0, l: 0, gf: 0, ga: 0, gd: 0, pts: 0
      }))
    };
    ucl.fixtures[letter] = generateSchedule(groupTeams);
  });
  ucl.knockouts = { r16: [], qf: [], sf: [], final: null };
}

function initDatabase() {
  for (const [leagueKey, leagueData] of Object.entries(database.leagues)) {
    standings[leagueKey] = leagueData.teams.map((team, idx) => ({
      position: idx + 1, name: team.name, id: team.id, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0
    }));
    fixtures[leagueKey] = generateSchedule(leagueData.teams);
  }
  initUclEngine();
}

async function loadPlayers() {
  try {
    const response = await fetch("players.json");
    players = await response.json();
  } catch (err) {
    players = [];
  }
}

function saveToStorage() {
  localStorage.setItem("pes6_career_user", JSON.stringify(database.userState));
  localStorage.setItem("pes6_career_standings", JSON.stringify(standings));
  localStorage.setItem("pes6_career_fixtures", JSON.stringify(fixtures));
  localStorage.setItem("pes6_career_players", JSON.stringify(players));
  localStorage.setItem("pes6_career_ucl", JSON.stringify(ucl));
}

function loadFromStorage() {
  const savedUser = localStorage.getItem("pes6_career_user");
  const savedStandings = localStorage.getItem("pes6_career_standings");
  const savedFixtures = localStorage.getItem("pes6_career_fixtures");
  const savedPlayers = localStorage.getItem("pes6_career_players");
  const savedUcl = localStorage.getItem("pes6_career_ucl");

  if (savedUser && savedStandings && savedFixtures) {
    database.userState = JSON.parse(savedUser);
    if (!database.userState.budget) database.userState.budget = 60000000;
    standings = JSON.parse(savedStandings);
    fixtures = JSON.parse(savedFixtures);
    if (savedPlayers) players = JSON.parse(savedPlayers);
    if (savedUcl) ucl = JSON.parse(savedUcl);
    else initUclEngine();
    return true;
  }
  return false;
}

function simulateMatch(homeTeam, awayTeam) {
  const getGoals = () => {
    const r = Math.random();
    if (r < 0.28) return 0;
    if (r < 0.60) return 1;
    if (r < 0.83) return 2;
    if (r < 0.94) return 3;
    return 4;
  };
  const homeScore = getGoals();
  const awayScore = getGoals();
  assignRandomGoals(homeTeam, homeScore);
  assignRandomGoals(awayTeam, awayScore);
  return { homeScore, awayScore };
}

function assignRandomGoals(teamName, count) {
  if (count <= 0) return;
  const teamPlayers = players.filter(p => p.club === teamName);
  for (let i = 0; i < count; i++) {
    if (teamPlayers.length > 0) {
      teamPlayers[Math.floor(Math.random() * teamPlayers.length)].goals += 1;
    }
  }
}

function updateTeamRecord(leagueKey, teamName, gf, ga) {
  const team = standings[leagueKey].find(t => t.name === teamName);
  if (!team) return;
  team.played += 1;
  team.gf += gf;
  team.ga += ga;
  team.gd = team.gf - team.ga;
  if (gf > ga) { team.won += 1; team.points += 3; }
  else if (gf === ga) { team.drawn += 1; team.points += 1; }
  else { team.lost += 1; }
}

function sortStandings(leagueKey) {
  standings[leagueKey].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
  standings[leagueKey].forEach((t, i) => (t.position = i + 1));
}

function updateUclGroupRecord(letter, teamName, gf, ga) {
  const group = ucl.groups[letter];
  if (!group) return;
  const t = group.standings.find(item => item.name === teamName);
  if (!t) return;
  t.p += 1; t.gf += gf; t.ga += ga; t.gd = t.gf - t.ga;
  if (gf > ga) { t.w += 1; t.pts += 3; }
  else if (gf === ga) { t.d += 1; t.pts += 1; }
  else { t.l += 1; }
}

function sortUclGroup(letter) {
  const group = ucl.groups[letter];
  if (!group) return;
  group.standings.sort((a, b) => {
    if (b.pts !== a.pts) return b.pts - a.pts;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
  group.standings.forEach((t, i) => (t.pos = i + 1));
}

function buildUclRoundOf16() {
  const winners = [];
  const runnersUp = [];
  Object.keys(ucl.groups).forEach(let => {
    winners.push(ucl.groups[let].standings[0].name);
    runnersUp.push(ucl.groups[let].standings[1].name);
  });
  runnersUp.sort(() => Math.random() - 0.5);
  ucl.knockouts.r16 = winners.map((w, idx) => ({
    id: idx + 1, team1: w, team2: runnersUp[idx],
    leg1: { played: false, t1Score: null, t2Score: null },
    leg2: { played: false, t1Score: null, t2Score: null },
    winner: null
  }));
}

function renderUclTab() {
  const groupsView = document.getElementById("uclGroupsView");
  if (!groupsView) return;
  groupsView.innerHTML = "";

  Object.keys(ucl.groups).forEach(letter => {
    const g = ucl.groups[letter];
    const card = document.createElement("div");
    card.className = "ucl-group-card";
    let rowsHtml = "";
    g.standings.forEach((t, i) => {
      let qualClass = i < 2 ? "qualify-ucl" : (i === 2 ? "qualify-uel" : "");
      const highlight = t.name === database.userState.selectedTeam ? "style='background: rgba(0, 210, 106, 0.15);'" : "";
      rowsHtml += `
        <tr class="${qualClass}" ${highlight}>
          <td>${t.pos}</td>
          <td><strong>${t.name}</strong></td>
          <td>${t.p}</td>
          <td>${t.gd}</td>
          <td><strong>${t.pts}</strong></td>
        </tr>
      `;
    });
    card.innerHTML = `
      <div class="ucl-group-header">
        <h3>GROUP ${letter}</h3>
        <small style="color: var(--text-muted);">Top 2 Qualify</small>
      </div>
      <table class="ucl-table">
        <thead><tr><th>#</th><th>Club</th><th>P</th><th>GD</th><th>Pts</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
      </table>
    `;
    groupsView.appendChild(card);
  });
  renderUclBracket();
}

function renderUclBracket() {
  const r16Col = document.getElementById("bracketR16");
  const qfCol = document.getElementById("bracketQF");
  const sfCol = document.getElementById("bracketSF");
  const finalCol = document.getElementById("bracketFinal");
  if (!r16Col) return;

  const renderMatchBox = (m) => {
    if (!m) return `<div class="bracket-match-box"><small style="color: var(--text-muted);">TBD</small></div>`;
    const s1 = m.leg1 && m.leg1.played ? `${m.leg1.t1Score + (m.leg2 && m.leg2.played ? m.leg2.t1Score : 0)}` : "-";
    const s2 = m.leg1 && m.leg1.played ? `${m.leg1.t2Score + (m.leg2 && m.leg2.played ? m.leg2.t2Score : 0)}` : "-";
    return `
      <div class="bracket-match-box">
        <div class="bracket-team-row ${m.winner === m.team1 ? 'winner' : ''}"><span class="bracket-team-name">${m.team1}</span><span class="bracket-score">${s1}</span></div>
        <div class="bracket-team-row ${m.winner === m.team2 ? 'winner' : ''}"><span class="bracket-team-name">${m.team2}</span><span class="bracket-score">${s2}</span></div>
      </div>
    `;
  };

  r16Col.innerHTML = ucl.knockouts.r16.length > 0 ? ucl.knockouts.r16.map(renderMatchBox).join("") : `<p style="font-size: 11px; color: var(--text-muted); text-align: center;">Drawn after GW 24</p>`;
  qfCol.innerHTML = ucl.knockouts.qf.length > 0 ? ucl.knockouts.qf.map(renderMatchBox).join("") : `<p style="font-size: 11px; color: var(--text-muted); text-align: center;">TBD</p>`;
  sfCol.innerHTML = ucl.knockouts.sf.length > 0 ? ucl.knockouts.sf.map(renderMatchBox).join("") : `<p style="font-size: 11px; color: var(--text-muted); text-align: center;">TBD</p>`;
  finalCol.innerHTML = ucl.knockouts.final ? renderMatchBox(ucl.knockouts.final) : `<p style="font-size: 11px; color: var(--text-muted); text-align: center;">TBD</p>`;
}

function renderFixturesTab() {
  const roundMenu = document.getElementById("ddFixturesRoundMenu");
  const roundContainer = document.getElementById("singleRoundViewContainer");
  const fullCalendarContainer = document.getElementById("fullCalendarViewContainer");
  const roundDropdown = document.getElementById("ddFixturesRound");

  if (!roundMenu || !roundContainer || !fullCalendarContainer) return;

  const leagueSchedule = fixtures[selectedFixturesLeague] || [];

  if (calendarMode === "full") {
    roundContainer.style.display = "none";
    fullCalendarContainer.style.display = "grid";
    if (roundDropdown) roundDropdown.style.opacity = "0.3";
    renderFullSeasonCalendar(leagueSchedule);
  } else {
    roundContainer.style.display = "block";
    fullCalendarContainer.style.display = "none";
    if (roundDropdown) roundDropdown.style.opacity = "1";

    roundMenu.innerHTML = "";
    leagueSchedule.forEach((_, idx) => {
      const item = document.createElement("div");
      item.className = "dropdown-item";
      item.dataset.val = idx;
      item.textContent = `Round ${idx + 1}`;
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        selectedFixturesRound = idx;
        const trig = document.getElementById("ddFixturesRoundTrigger");
        if (trig) trig.textContent = `Round ${idx + 1}`;
        roundMenu.classList.remove("open");
        renderFixturesMatches();
      });
      roundMenu.appendChild(item);
    });

    renderFixturesMatches();
  }
}

function renderFixturesMatches() {
  const container = document.getElementById("fixturesListContainer");
  if (!container) return;
  container.innerHTML = "";

  const leagueSchedule = fixtures[selectedFixturesLeague] || [];
  const currentRoundMatches = leagueSchedule[selectedFixturesRound] || [];

  if (currentRoundMatches.length === 0) {
    container.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">No fixture records available.</p>`;
    return;
  }

  currentRoundMatches.forEach(m => {
    const isUser = m.home === database.userState.selectedTeam || m.away === database.userState.selectedTeam;
    const card = document.createElement("div");
    card.className = "fixture-row-card";
    card.style.background = isUser ? "rgba(0, 210, 106, 0.12)" : "var(--bg-card)";
    card.style.border = isUser ? "1px solid var(--accent)" : "1px solid var(--border)";
    card.style.padding = "10px 14px";
    card.style.borderRadius = "8px";
    card.style.display = "flex";
    card.style.justifyContent = "space-between";
    card.style.alignItems = "center";
    card.style.marginBottom = "8px";

    const scoreDisplay = m.played ? `${m.homeScore} - ${m.awayScore}` : "vs";

    card.innerHTML = `
      <span style="font-weight: 700; width: 42%; text-align: right; color: var(--text-main);">${m.home}</span>
      <span style="font-weight: 800; padding: 2px 10px; background: var(--bg-hover); border-radius: 4px; font-size: 12px; color: #fff;">${scoreDisplay}</span>
      <span style="font-weight: 700; width: 42%; text-align: left; color: var(--text-main);">${m.away}</span>
    `;
    container.appendChild(card);
  });
}

function renderFullSeasonCalendar(leagueSchedule) {
  const container = document.getElementById("fullCalendarViewContainer");
  if (!container) return;
  container.innerHTML = "";

  const userTeam = database.userState.selectedTeam;

  leagueSchedule.forEach((roundMatches, roundIdx) => {
    const roundCard = document.createElement("div");
    roundCard.className = "calendar-round-card";

    let matchesHtml = "";
    roundMatches.forEach(m => {
      const isUser = m.home === userTeam || m.away === userTeam;
      const score = m.played ? `${m.homeScore}-${m.awayScore}` : "-";
      matchesHtml += `
        <div class="calendar-mini-fixture ${isUser ? 'user-match' : ''}">
          <span style="max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.home}</span>
          <span style="font-weight: 800; color: #fff;">${score}</span>
          <span style="max-width: 90px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${m.away}</span>
        </div>
      `;
    });

    roundCard.innerHTML = `
      <div class="calendar-round-title">ROUND ${roundIdx + 1}</div>
      <div style="display: flex; flex-direction: column; gap: 3px;">${matchesHtml}</div>
    `;
    container.appendChild(roundCard);
  });
}

function renderTransferMarketTab() {
  const tbody = document.getElementById("transferMarketTableBody");
  const budgetEl = document.getElementById("clubBudgetDisplay");
  const statusEl = document.getElementById("transferWindowStatus");
  if (!tbody) return;

  const gw = database.userState.currentGameweek;
  const isOpen = isTransferWindowOpen(gw);

  if (statusEl) {
    statusEl.textContent = isOpen ? `Transfer Window: OPEN (Gameweek ${gw})` : `Transfer Window: CLOSED`;
    statusEl.style.color = isOpen ? "var(--accent)" : "#ff4d4d";
  }
  if (budgetEl) budgetEl.textContent = formatCurrency(database.userState.budget);

  tbody.innerHTML = "";
  const searchVal = (document.getElementById("transferSearchInput")?.value || "").toLowerCase();
  const userTeam = database.userState.selectedTeam;

  let filtered = [...players];

  if (searchVal) filtered = filtered.filter(p => p.name.toLowerCase().includes(searchVal));

  if (transferFilterLeague !== "all") {
    const lTeams = database.leagues[transferFilterLeague]?.teams.map(t => t.name) || [];
    filtered = filtered.filter(p => lTeams.includes(p.club));
  }

  if (transferFilterPos !== "all") {
    if (transferFilterPos === "GK") filtered = filtered.filter(p => p.pos === "GK");
    if (transferFilterPos === "DEF") filtered = filtered.filter(p => ["CB", "SB", "LB", "RB", "LWB", "RWB"].includes(p.pos));
    if (transferFilterPos === "MID") filtered = filtered.filter(p => ["DMF", "CMF", "SMF", "AMF", "LMF", "RMF"].includes(p.pos));
    if (transferFilterPos === "ATT") filtered = filtered.filter(p => ["CF", "SS", "WF", "LWF", "RWF"].includes(p.pos));
  }

  filtered.sort((a, b) => b.rating - a.rating);

  filtered.slice(0, 30).forEach(p => {
    const isOwned = p.club === userTeam;
    const val = calculatePlayerValue(p);
    const row = document.createElement("tr");

    let actionBtn = isOwned
      ? `<button class="btn-sell-player" onclick="handleTransferList(${p.id})">Listed (€${(val * 0.9 / 1000000).toFixed(1)}M)</button>`
      : `<button class="btn-buy-player" onclick="openBidModal(${p.id})" ${!isOpen ? "disabled style='opacity:0.4; cursor:not-allowed;'" : ""}>Make Offer</button>`;

    row.innerHTML = `
      <td><span class="pos-tag ${getPosClass(p.pos)}">${p.pos}</span></td>
      <td><strong>${p.name}</strong></td>
      <td>${p.club}</td>
      <td style="text-align: center;"><strong>${p.rating}</strong></td>
      <td style="text-align: center;">${getConditionIcon(p.condition)}</td>
      <td><strong>${formatCurrency(val)}</strong></td>
      <td style="text-align: center;">${actionBtn}</td>
    `;
    tbody.appendChild(row);
  });
}

window.openBidModal = function(playerId) {
  const p = players.find(item => item.id === playerId);
  if (!p) return;
  targetBidPlayerId = p.id;
  const val = calculatePlayerValue(p);
  const targetInfo = document.getElementById("bidTargetInfo");
  if (targetInfo) targetInfo.textContent = `${p.name} (${p.pos}, OVR ${p.rating}) - ${p.club} | Estimated Value: ${formatCurrency(val)}`;
  const bidInput = document.getElementById("bidAmountInput");
  if (bidInput) bidInput.value = val;
  const modal = document.getElementById("transferModal");
  if (modal) modal.style.display = "flex";
};

window.handleTransferList = function(playerId) {
  const p = players.find(item => item.id === playerId);
  if (!p || p.isStarter) {
    alert("Cannot sell a Starting XI player. Move him to the bench first.");
    return;
  }
  const val = Math.round(calculatePlayerValue(p) * 0.9);
  database.userState.budget += val;
  p.club = "Free Agent";
  p.isStarter = false; p.slotId = null; p.benchIdx = null;
  saveToStorage();
  renderTransferMarketTab();
  renderSquadTab();
};

// Tactical Position-Locking Squad Consistency Engine
function ensureSquadConsistency(userTeam) {
  let squad = players.filter(p => p.club === userTeam);

  // If starters are unslotted or messed up, sort and lock by actual tactical roles
  const starters = squad.filter(p => p.isStarter);
  if (starters.length !== 11 || starters.some(p => p.slotId === null || p.slotId === undefined)) {
    const gks = squad.filter(p => p.pos === "GK");
    const defs = squad.filter(p => ["CB", "LB", "RB", "SB", "LWB", "RWB"].includes(p.pos));
    const mids = squad.filter(p => ["DMF", "CMF", "AMF", "SMF", "LMF", "RMF"].includes(p.pos));
    const atts = squad.filter(p => ["CF", "SS", "WF", "LWF", "RWF"].includes(p.pos));

    // Reset all players
    squad.forEach(p => { p.isStarter = false; p.slotId = null; p.benchIdx = null; });

    // Slot 0: Goalkeeper
    if (gks.length > 0) { gks[0].isStarter = true; gks[0].slotId = 0; }

    // Slots 1 to 4: Defenders
    defs.slice(0, 4).forEach((d, i) => { d.isStarter = true; d.slotId = i + 1; });

    // Slots 5 to 7: Midfielders
    mids.slice(0, 3).forEach((m, i) => { m.isStarter = true; m.slotId = i + 5; });

    // Slots 8 to 10: Forwards
    atts.slice(0, 3).forEach((a, i) => { a.isStarter = true; a.slotId = i + 8; });

    // All remaining players become active bench and reserve players
    const bench = squad.filter(p => !p.isStarter);
    bench.forEach((b, i) => { b.benchIdx = i; });

    saveToStorage();
  }

  return squad;
}

function renderSquadTab() {
  const pitchLayer = document.getElementById("pitchSlotsLayer");
  const benchContainer = document.getElementById("benchCardsContainer");
  const statusChip = document.getElementById("selectionStatusChip");
  if (!pitchLayer || !benchContainer) return;

  pitchLayer.innerHTML = "";
  benchContainer.innerHTML = "";

  const userTeam = database.userState.selectedTeam;
  const squad = ensureSquadConsistency(userTeam);
  const slotsConfig = FORMATIONS[currentFormation] || FORMATIONS["4-3-3"];

  if (!inspectedPlayerId && squad.length > 0) updatePlayerInspector(squad[0]);
  else {
    const inspected = squad.find(p => p.id === inspectedPlayerId);
    if (inspected) updatePlayerInspector(inspected);
  }

  if (statusChip) {
    if (activeSelection) {
      const selP = players.find(p => p.id === activeSelection.id);
      statusChip.textContent = `Selected: ${selP ? selP.name : "Player"}`;
      statusChip.style.background = "rgba(0, 210, 106, 0.3)";
    } else {
      statusChip.textContent = "SELECT PLAYER";
      statusChip.style.background = "rgba(0, 210, 106, 0.15)";
    }
  }

  slotsConfig.forEach(slot => {
    const player = squad.find(p => p.isStarter && p.slotId === slot.slotId);
    if (!player) return;

    const node = document.createElement("div");
    node.className = `fifa-jersey-node ${activeSelection && activeSelection.id === player.id ? 'active-selected' : ''}`;
    node.style.left = `${slot.x}%`;
    node.style.top = `${slot.y}%`;

    node.innerHTML = `
      <div class="jersey-icon">👕</div>
      <div class="jersey-pill">
        <span class="jersey-ovr">${player.rating}</span>
        <span class="jersey-name">${player.name.split(" ").pop()}</span>
        <span>${getConditionIcon(player.condition)}</span>
      </div>
    `;

    node.addEventListener("click", () => {
      updatePlayerInspector(player);
      handlePitchSlotClick(player, slot.slotId);
    });
    pitchLayer.appendChild(node);
  });

  const bench = squad.filter(p => !p.isStarter);
  bench.sort((a, b) => a.benchIdx - b.benchIdx);

  bench.forEach((player, idx) => {
    const card = document.createElement("div");
    card.className = `fifa-bench-card ${activeSelection && activeSelection.id === player.id ? 'active-selected' : ''}`;
    card.innerHTML = `
      <div class="bench-card-photo">👤</div>
      <div class="bench-card-meta">
        <span class="pos-tag ${getPosClass(player.pos)}">${player.pos}</span>
        <span class="bench-ovr">${player.rating}</span>
        <span>${getConditionIcon(player.condition)}</span>
      </div>
      <span class="bench-card-name">${player.name}</span>
    `;

    card.addEventListener("click", () => {
      updatePlayerInspector(player);
      handleBenchCardClick(player, idx);
    });
    benchContainer.appendChild(card);
  });
}

function handlePitchSlotClick(player, slotId) {
  if (!activeSelection) {
    activeSelection = { type: 'pitch', id: player.id, slotId: slotId };
    renderSquadTab();
    return;
  }
  if (activeSelection.id === player.id) {
    activeSelection = null;
    renderSquadTab();
    return;
  }
  if (activeSelection.type === 'pitch') {
    const p1 = players.find(p => p.id === activeSelection.id);
    const tempSlot = p1.slotId;
    p1.slotId = player.slotId;
    player.slotId = tempSlot;
  } else if (activeSelection.type === 'bench') {
    const subPlayer = players.find(p => p.id === activeSelection.id);
    subPlayer.isStarter = true;
    subPlayer.slotId = slotId;
    player.isStarter = false;
    player.slotId = null;
    player.benchIdx = subPlayer.benchIdx;
    subPlayer.benchIdx = null;
  }
  activeSelection = null;
  saveToStorage();
  renderSquadTab();
}

function handleBenchCardClick(player, benchIdx) {
  if (!activeSelection) {
    activeSelection = { type: 'bench', id: player.id, benchIdx: benchIdx };
    renderSquadTab();
    return;
  }
  if (activeSelection.id === player.id) {
    activeSelection = null;
    renderSquadTab();
    return;
  }
  if (activeSelection.type === 'bench') {
    const b1 = players.find(p => p.id === activeSelection.id);
    const tempIdx = b1.benchIdx;
    b1.benchIdx = player.benchIdx;
    player.benchIdx = tempIdx;
  } else if (activeSelection.type === 'pitch') {
    const starterPlayer = players.find(p => p.id === activeSelection.id);
    player.isStarter = true;
    player.slotId = starterPlayer.slotId;
    starterPlayer.isStarter = false;
    starterPlayer.slotId = null;
    starterPlayer.benchIdx = player.benchIdx;
    player.benchIdx = null;
  }
  activeSelection = null;
  saveToStorage();
  renderSquadTab();
}

function refreshDashboard() {
  const mName = document.getElementById("managedTeamName");
  if (mName) mName.textContent = database.userState.selectedTeam;
  const dTitle = document.getElementById("dashboardManagerTitle");
  if (dTitle) dTitle.textContent = `${database.userState.managerName}'s Dashboard`;
  const natBadge = document.getElementById("nationalJobBadge");
  if (natBadge) {
    natBadge.textContent = database.userState.nationalTeam !== "none" ? `National Team: ${database.userState.nationalTeam}` : "";
  }
  const dateDisp = document.getElementById("currentDateDisplay");
  if (dateDisp) {
    dateDisp.textContent = `Gameweek ${database.userState.currentGameweek} of 42 - Season 2006/07`;
  }
  renderQuickTable();
  renderDashboardFixture();
}

function renderTable(leagueKey) {
  selectedTableLeague = leagueKey;
  const tbody = document.getElementById("fullLeagueTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  (standings[leagueKey] || []).forEach(team => {
    const row = document.createElement("tr");
    row.style.background = team.name === database.userState.selectedTeam ? "rgba(0, 210, 106, 0.1)" : "";
    row.innerHTML = `
      <td>${team.position}</td><td><strong>${team.name}</strong></td>
      <td>${team.played}</td><td>${team.won}</td><td>${team.drawn}</td><td>${team.lost}</td>
      <td>${team.gf}</td><td>${team.ga}</td><td>${team.gd}</td><td><strong>${team.points}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

function renderQuickTable() {
  const tbody = document.getElementById("quickTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const topFive = (standings[database.userState.league] || []).slice(0, 5);
  topFive.forEach(team => {
    const row = document.createElement("tr");
    row.style.background = team.name === database.userState.selectedTeam ? "rgba(0, 210, 106, 0.15)" : "";
    row.innerHTML = `<td>${team.position}</td><td>${team.name}</td><td>${team.played}</td><td>${team.gd}</td><td><strong>${team.points}</strong></td>`;
    tbody.appendChild(row);
  });
}

function renderDashboardFixture() {
  const gw = database.userState.currentGameweek;
  const userTeam = database.userState.selectedTeam;
  const homeEl = document.getElementById("homeTeamName");
  const awayEl = document.getElementById("awayTeamName");
  const compEl = document.getElementById("matchCompetition");
  if (!homeEl || !awayEl || !compEl) return;

  if (INTERNATIONAL_BREAK_WEEKS.includes(gw)) {
    homeEl.textContent = database.userState.nationalTeam !== "none" ? database.userState.nationalTeam : userTeam;
    awayEl.textContent = database.userState.nationalTeam !== "none" ? "International Rival" : "(International Break)";
    compEl.textContent = database.userState.nationalTeam !== "none" ? "FIFA International Match Window" : "League Paused";
    return;
  }

  if (UCL_GROUP_WEEKS.includes(gw)) {
    const roundIdx = UCL_GROUP_WEEKS.indexOf(gw);
    let uclMatch = null;
    Object.keys(ucl.groups).forEach(let => {
      const found = ucl.fixtures[let][roundIdx].find(m => m.home === userTeam || m.away === userTeam);
      if (found) uclMatch = found;
    });
    if (uclMatch) {
      homeEl.textContent = uclMatch.home;
      awayEl.textContent = uclMatch.away;
      compEl.textContent = `UEFA Champions League - Matchday ${roundIdx + 1}`;
      return;
    }
  }

  const userLeague = database.userState.league;
  const roundIdx = getLeagueRoundForGameweek(userLeague, gw);
  if (roundIdx === null) {
    homeEl.textContent = userTeam;
    awayEl.textContent = "(Season Completed)";
    compEl.textContent = "Domestic Season Finished";
    return;
  }

  const userMatch = fixtures[userLeague][roundIdx].find(m => m.home === userTeam || m.away === userTeam);
  if (userMatch) {
    homeEl.textContent = userMatch.home;
    awayEl.textContent = userMatch.away;
    compEl.textContent = `${database.leagues[userLeague].name} - Matchday ${roundIdx + 1}`;
  } else {
    homeEl.textContent = userTeam;
    awayEl.textContent = "(Rest Week / Bye)";
  }
}

function renderTopScorers(selectedLeague = "all") {
  selectedStatsLeague = selectedLeague;
  const tbody = document.getElementById("topScorersTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  let filtered = [...players];
  if (selectedLeague !== "all") {
    const lTeams = database.leagues[selectedLeague]?.teams.map(t => t.name) || [];
    filtered = filtered.filter(p => lTeams.includes(p.club));
  }
  filtered.sort((a, b) => b.goals - a.goals);

  filtered.slice(0, 15).forEach((p, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${idx + 1}</td><td><strong>${p.name}</strong></td><td>${p.club}</td><td>${p.pos}</td><td>${p.assists}</td><td><strong>${p.goals}</strong></td>`;
    tbody.appendChild(row);
  });
}

function renderAwardsTab() {
  const tbody = document.getElementById("ballonDorTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const ranked = [...players].map(p => ({ ...p, points: (p.goals * 4) + (p.assists * 3) + (p.rating * 0.5) })).sort((a, b) => b.points - a.points);
  ranked.slice(0, 5).forEach((p, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>#${idx + 1}</td><td><strong>${p.name}</strong></td><td>${p.club}</td><td><strong>${Math.round(p.points)} pts</strong></td>`;
    tbody.appendChild(row);
  });

  const leader = [...players].sort((a, b) => b.goals - a.goals)[0];
  const gBox = document.getElementById("goldenShoeLeader");
  if (leader && gBox) {
    gBox.innerHTML = `<h2 style="color: var(--accent); font-size: 32px;">${leader.name}</h2><p style="font-size: 16px; margin: 6px 0;"><strong>${leader.club}</strong></p><p style="color: var(--text-muted); font-size: 14px;">${leader.goals} Domestic Goals</p>`;
  }
}

function triggerSeasonEndCelebration() {
  const userLeague = database.userState.league;
  const leagueChamp = standings[userLeague] && standings[userLeague][0] ? standings[userLeague][0].name : "Champion";

  const goldenBoot = [...players].sort((a, b) => b.goals - a.goals)[0];
  
  const ranked = [...players].map(p => ({
    ...p,
    points: (p.goals * 4) + (p.assists * 3) + (p.rating * 0.5)
  })).sort((a, b) => b.points - a.points);
  const ballonDor = ranked[0];

  const uclChamp = (ucl.knockouts && ucl.knockouts.final && ucl.knockouts.final.winner) 
    ? ucl.knockouts.final.winner 
    : "AC Milan";

  const cClub = document.getElementById("championClubName");
  if (cClub) cClub.textContent = leagueChamp;

  const uChamp = document.getElementById("uclWinnerName");
  if (uChamp) uChamp.textContent = uclChamp;

  const gBoot = document.getElementById("goldenBootWinner");
  if (gBoot) gBoot.textContent = goldenBoot ? `${goldenBoot.name} (${goldenBoot.goals}G)` : "N/A";

  const bDor = document.getElementById("ballonDorWinner");
  if (bDor) bDor.textContent = ballonDor ? ballonDor.name : "N/A";

  const modal = document.getElementById("seasonEndModal");
  if (modal) modal.style.display = "flex";
}

window.advanceToNextSeason = function() {
  try {
    players.forEach(p => {
      const roll = Math.random();
      if (roll > 0.65) {
        p.rating = Math.min(99, p.rating + (roll > 0.85 ? 2 : 1));
      } else if (roll < 0.20 && p.rating > 75) {
        p.rating = Math.max(65, p.rating - 1);
      }
      p.goals = 0;
      p.assists = 0;
    });

    database.userState.budget = (database.userState.budget || 60000000) + 35000000;
    database.userState.currentGameweek = 1;

    initDatabase();
    saveToStorage();

    const modal = document.getElementById("seasonEndModal");
    if (modal) modal.style.display = "none";

    refreshDashboard();
    renderTable(database.userState.league);
    renderTopScorers("all");
    renderAwardsTab();
    renderSquadTab();
    renderUclTab();
    renderTransferMarketTab();
    renderFixturesTab();

    setTimeout(() => {
      alert("Welcome to the 2007/08 Season! New calendars generated, budgets updated, and the Transfer Window is OPEN.");
    }, 40);

  } catch (err) {
    console.error("Error advancing season:", err);
    const modal = document.getElementById("seasonEndModal");
    if (modal) modal.style.display = "none";
    location.reload();
  }
};

function executeMatchday(userHomeScore, userAwayScore) {
  const gw = database.userState.currentGameweek;
  const isIntlBreak = INTERNATIONAL_BREAK_WEEKS.includes(gw);
  const isUclGroupWeek = UCL_GROUP_WEEKS.includes(gw);

  if (isUclGroupWeek) {
    const roundIdx = UCL_GROUP_WEEKS.indexOf(gw);
    Object.keys(ucl.groups).forEach(let => {
      ucl.fixtures[let][roundIdx].forEach(match => {
        if (match.played) return;
        const isUserMatch = (match.home === database.userState.selectedTeam || match.away === database.userState.selectedTeam);
        if (isUserMatch) {
          match.homeScore = userHomeScore; match.awayScore = userAwayScore;
          assignRandomGoals(match.home, userHomeScore); assignRandomGoals(match.away, userAwayScore);
        } else {
          const sim = simulateMatch(match.home, match.away);
          match.homeScore = sim.homeScore; match.awayScore = sim.awayScore;
        }
        match.played = true;
        updateUclGroupRecord(let, match.home, match.homeScore, match.awayScore);
        updateUclGroupRecord(let, match.away, match.awayScore, match.homeScore);
      });
      sortUclGroup(let);
    });
    if (gw === 24) buildUclRoundOf16();
  }

  if (!isIntlBreak) {
    for (const [leagueKey, roundList] of Object.entries(fixtures)) {
      const roundIdx = getLeagueRoundForGameweek(leagueKey, gw);
      if (roundIdx === null || !roundList[roundIdx]) continue;
      roundList[roundIdx].forEach(match => {
        if (match.played) return;
        const isUserMatch = !isUclGroupWeek && (match.home === database.userState.selectedTeam || match.away === database.userState.selectedTeam);
        if (isUserMatch) {
          match.homeScore = userHomeScore; match.awayScore = userAwayScore;
          assignRandomGoals(match.home, userHomeScore); assignRandomGoals(match.away, userAwayScore);
        } else {
          const sim = simulateMatch(match.home, match.away);
          match.homeScore = sim.homeScore; match.awayScore = sim.awayScore;
        }
        match.played = true;
        updateTeamRecord(leagueKey, match.home, match.homeScore, match.awayScore);
        updateTeamRecord(leagueKey, match.away, match.awayScore, match.homeScore);
      });
      sortStandings(leagueKey);
    }
  }

  database.userState.currentGameweek += 1;

  if (database.userState.currentGameweek > 42) {
    triggerSeasonEndCelebration();
    return;
  }

  rollMatchdayConditions();
  saveToStorage();

  refreshDashboard();
  renderTable(selectedTableLeague);
  renderTopScorers(selectedStatsLeague);
  renderAwardsTab();
  renderSquadTab();
  renderUclTab();
  renderTransferMarketTab();
  renderFixturesTab();
}

function populateSetupTeams(leagueKey) {
  const menu = document.getElementById("ddSetupTeamMenu");
  const trigger = document.getElementById("ddSetupTeamTrigger");
  if (!menu || !trigger) return;

  menu.innerHTML = "";
  const teams = database.leagues[leagueKey]?.teams || [];

  if (teams.length > 0) {
    setupSelectedTeam = teams[0].name;
    trigger.textContent = teams[0].name;
  }

  teams.forEach(t => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.dataset.val = t.name;
    item.textContent = t.name;
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      setupSelectedTeam = t.name;
      trigger.textContent = t.name;
      menu.classList.remove("open");
    });
    menu.appendChild(item);
  });
}

function populateSetupNationals() {
  const menu = document.getElementById("ddSetupNationalMenu");
  const trigger = document.getElementById("ddSetupNationalTrigger");
  if (!menu || !trigger) return;

  menu.innerHTML = "";
  setupSelectedNational = "none";
  trigger.textContent = "None (Focus on Club)";

  const defItem = document.createElement("div");
  defItem.className = "dropdown-item";
  defItem.dataset.val = "none";
  defItem.textContent = "None (Focus on Club)";
  defItem.addEventListener("click", (e) => {
    e.stopPropagation();
    setupSelectedNational = "none";
    trigger.textContent = "None (Focus on Club)";
    menu.classList.remove("open");
  });
  menu.appendChild(defItem);

  database.nationalTeams.forEach(nat => {
    const item = document.createElement("div");
    item.className = "dropdown-item";
    item.dataset.val = nat;
    item.textContent = nat;
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      setupSelectedNational = nat;
      trigger.textContent = nat;
      menu.classList.remove("open");
    });
    menu.appendChild(item);
  });
}

function setupCustomDropdown(triggerId, menuId, onSelect) {
  const trigger = document.getElementById(triggerId);
  const menu = document.getElementById(menuId);
  if (!trigger || !menu) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-menu").forEach(m => {
      if (m !== menu) m.classList.remove("open");
    });
    menu.classList.toggle("open");
  });

  if (onSelect) {
    menu.querySelectorAll(".dropdown-item").forEach(item => {
      item.addEventListener("click", (e) => {
        e.stopPropagation();
        trigger.textContent = item.textContent;
        menu.classList.remove("open");
        onSelect(item.dataset.val);
      });
    });
  }
}

document.addEventListener("click", () => {
  document.querySelectorAll(".dropdown-menu").forEach(m => m.classList.remove("open"));
});

document.addEventListener("DOMContentLoaded", async () => {
  setupCustomDropdown("ddLeagueTrigger", "ddLeagueMenu", (val) => renderTable(val));
  setupCustomDropdown("ddStatsTrigger", "ddStatsMenu", (val) => renderTopScorers(val));
  setupCustomDropdown("ddFormationTrigger", "ddFormationMenu", (val) => {
    currentFormation = val;
    renderSquadTab();
  });

  setupCustomDropdown("ddFixturesLeagueTrigger", "ddFixturesLeagueMenu", (val) => {
    selectedFixturesLeague = val;
    selectedFixturesRound = 0;
    const rTrig = document.getElementById("ddFixturesRoundTrigger");
    if (rTrig) rTrig.textContent = "Round 1";
    renderFixturesTab();
  });

  setupCustomDropdown("ddTransferLeagueTrigger", "ddTransferLeagueMenu", (val) => {
    transferFilterLeague = val;
    renderTransferMarketTab();
  });

  setupCustomDropdown("ddTransferPosTrigger", "ddTransferPosMenu", (val) => {
    transferFilterPos = val;
    renderTransferMarketTab();
  });

  setupCustomDropdown("ddSetupLeagueTrigger", "ddSetupLeagueMenu", (val) => {
    setupSelectedLeague = val;
    populateSetupTeams(val);
  });
  
  setupCustomDropdown("ddSetupTeamTrigger", "ddSetupTeamMenu", null);
  setupCustomDropdown("ddSetupNationalTrigger", "ddSetupNationalMenu", null);

  populateSetupNationals();
  populateSetupTeams("premier_league");

  const btnRound = document.getElementById("btnViewRoundFixtures");
  const btnFull = document.getElementById("btnViewFullCalendar");
  if (btnRound && btnFull) {
    btnRound.addEventListener("click", () => {
      calendarMode = "round";
      btnRound.classList.add("active");
      btnFull.classList.remove("active");
      renderFixturesTab();
    });
    btnFull.addEventListener("click", () => {
      calendarMode = "full";
      btnFull.classList.add("active");
      btnRound.classList.remove("active");
      renderFixturesTab();
    });
  }

  const btnStart = document.getElementById("btnStartCareer");
  if (btnStart) {
    btnStart.addEventListener("click", async () => {
      const name = document.getElementById("managerNameInput")?.value.trim() || "Manager";
      const league = setupSelectedLeague || "premier_league";
      const team = setupSelectedTeam || "Arsenal";
      const nat = setupSelectedNational || "none";

      const currentPath = localStorage.getItem("pes6_exe_path");
      localStorage.clear();
      if (currentPath) localStorage.setItem("pes6_exe_path", currentPath);

      database.userState = {
        managerName: name,
        selectedTeam: team,
        nationalTeam: nat,
        league: league,
        currentGameweek: 1,
        budget: 60000000
      };

      await loadPlayers();

      inspectedPlayerId = null;
      activeSelection = null;
      selectedTableLeague = league;
      selectedStatsLeague = "all";
      selectedFixturesLeague = league;
      selectedFixturesRound = 0;

      initDatabase();
      ensureSquadConsistency(team);
      saveToStorage();

      document.getElementById("careerSetup").style.display = "none";
      refreshDashboard();
      renderTable(league);
      renderTopScorers("all");
      renderAwardsTab();
      renderSquadTab();
      renderUclTab();
      renderTransferMarketTab();
      renderFixturesTab();
    });
  }

  const btnReset = document.getElementById("btnResetCareer");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      const currentPath = localStorage.getItem("pes6_exe_path");
      localStorage.clear();
      if (currentPath) localStorage.setItem("pes6_exe_path", currentPath);

      const setupEl = document.getElementById("careerSetup");
      if (setupEl) setupEl.style.display = "flex";

      populateSetupNationals();
      populateSetupTeams(setupSelectedLeague);

      setTimeout(() => {
        const input = document.getElementById("managerNameInput");
        if (input) {
          input.focus();
          input.select();
        }
      }, 50);
    });
  }

  const pesPathInput = document.getElementById("pesPathInput");
  const browsePesBtn = document.getElementById("browsePesBtn");
  const saveSettingsBtn = document.getElementById("saveSettingsBtn");

  const savedPath = localStorage.getItem("pes6_exe_path");
  if (savedPath && pesPathInput) pesPathInput.value = savedPath;

  if (browsePesBtn) {
    browsePesBtn.addEventListener("click", async () => {
      if (window.pesBridge && window.pesBridge.selectFile) {
        const selected = await window.pesBridge.selectFile();
        if (selected && pesPathInput) {
          pesPathInput.value = selected;
          localStorage.setItem("pes6_exe_path", selected);
          alert("PES 6 path successfully selected and saved!");
        }
      } else {
        alert("File browser is available when running inside the Electron desktop app.");
      }
    });
  }

  if (saveSettingsBtn) {
    saveSettingsBtn.addEventListener("click", () => {
      const p = pesPathInput ? pesPathInput.value.trim() : "";
      if (!p) {
        alert("Please enter a valid path to pes6.exe!");
        return;
      }
      localStorage.setItem("pes6_exe_path", p);
      alert("Game path saved successfully!");
    });
  }

  await loadPlayers();
  const hasSave = loadFromStorage();

  if (!hasSave) {
    const setupEl = document.getElementById("careerSetup");
    if (setupEl) setupEl.style.display = "flex";
  } else {
    refreshDashboard();
    renderTable(database.userState.league);
    renderTopScorers("all");
    renderAwardsTab();
    renderSquadTab();
    renderUclTab();
    renderTransferMarketTab();
    renderFixturesTab();
  }

  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));
      button.classList.add("active");
      const targetTab = button.getAttribute("data-tab");
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add("active");

      if (targetTab === "tables") renderTable(selectedTableLeague);
      if (targetTab === "stats") renderTopScorers(selectedStatsLeague);
      if (targetTab === "awards") renderAwardsTab();
      if (targetTab === "squad") renderSquadTab();
      if (targetTab === "ucl") renderUclTab();
      if (targetTab === "transfers") renderTransferMarketTab();
      if (targetTab === "fixtures") renderFixturesTab();
      if (targetTab === "settings") {
        const currentSaved = localStorage.getItem("pes6_exe_path");
        if (currentSaved && pesPathInput) pesPathInput.value = currentSaved;
      }
    });
  });

  const confirmBidBtn = document.getElementById("confirmBidBtn");
  if (confirmBidBtn) {
    confirmBidBtn.addEventListener("click", () => {
      const offer = parseInt(document.getElementById("bidAmountInput").value) || 0;
      const target = players.find(p => p.id === targetBidPlayerId);
      if (!target) return;

      if (offer > database.userState.budget) {
        setTimeout(() => alert("Transfer bid exceeds your available club budget!"), 20);
        return;
      }

      const val = calculatePlayerValue(target);
      if (offer >= val * 0.95) {
        database.userState.budget -= offer;
        target.club = database.userState.selectedTeam;
        target.isStarter = false; 
        target.slotId = null;
        target.benchIdx = players.filter(p => p.club === database.userState.selectedTeam && !p.isStarter).length;
        
        saveToStorage();
        document.getElementById("transferModal").style.display = "none";
        renderTransferMarketTab();
        renderSquadTab();

        setTimeout(() => {
          alert(`Deal Agreed! ${target.name} has signed for ${database.userState.selectedTeam} for ${formatCurrency(offer)}!`);
        }, 30);
      } else {
        setTimeout(() => {
          alert(`Offer Rejected! ${target.club} considers your offer of ${formatCurrency(offer)} too low for ${target.name}. Minimum expected: ${formatCurrency(val)}.`);
        }, 30);
      }
    });
  }

  const closeTransferBtn = document.getElementById("closeTransferModalBtn");
  if (closeTransferBtn) {
    closeTransferBtn.addEventListener("click", () => {
      document.getElementById("transferModal").style.display = "none";
    });
  }

  const searchInput = document.getElementById("transferSearchInput");
  if (searchInput) searchInput.addEventListener("input", renderTransferMarketTab);

  const btnUclGroups = document.getElementById("btnUclViewGroups");
  const btnUclKnockouts = document.getElementById("btnUclViewKnockouts");
  const uclGroupsView = document.getElementById("uclGroupsView");
  const uclKnockoutView = document.getElementById("uclKnockoutView");

  if (btnUclGroups && btnUclKnockouts) {
    btnUclGroups.addEventListener("click", () => {
      btnUclGroups.style.background = "var(--accent)";
      btnUclGroups.style.color = "#000";
      btnUclKnockouts.style.background = "var(--bg-hover)";
      btnUclKnockouts.style.color = "var(--text-main)";
      if (uclGroupsView) uclGroupsView.style.display = "grid";
      if (uclKnockoutView) uclKnockoutView.style.display = "none";
    });

    btnUclKnockouts.addEventListener("click", () => {
      btnUclKnockouts.style.background = "var(--accent)";
      btnUclKnockouts.style.color = "#000";
      btnUclGroups.style.background = "var(--bg-hover)";
      btnUclGroups.style.color = "var(--text-main)";
      if (uclGroupsView) uclGroupsView.style.display = "none";
      if (uclKnockoutView) uclKnockoutView.style.display = "grid";
    });
  }

  const launchBtn = document.getElementById("btnLaunchMatch");
  if (launchBtn) {
    launchBtn.addEventListener("click", async () => {
      const homeLabel = document.getElementById("homeTeamName") ? document.getElementById("homeTeamName").textContent : "Home";
      const awayLabel = document.getElementById("awayTeamName") ? document.getElementById("awayTeamName").textContent : "Away";
      const exePath = localStorage.getItem("pes6_exe_path");

      if (!exePath) {
        alert("Please select the game path in Game Settings first!");
        return;
      }

      launchBtn.textContent = "⏳ Match Live in PES 6...";
      launchBtn.style.background = "#ff9900";
      launchBtn.disabled = true;

      const resetLaunchBtn = () => {
        launchBtn.textContent = "Launch PES 6 Match";
        launchBtn.style.background = "var(--accent)";
        launchBtn.disabled = false;
      };

      if (window.pesBridge) {
        const res = await window.pesBridge.launchPes(exePath);
        if (!res.success) {
          alert("Launch error: " + res.error);
          resetLaunchBtn();
          return;
        }

        window.pesBridge.onMatchResultDetected((scoreData) => {
          resetLaunchBtn();
          alert(`🎮 Match Synced from PES 6 Memory!\nFinal Result: ${homeLabel} ${scoreData.home} - ${scoreData.away} ${awayLabel}`);
          executeMatchday(scoreData.home, scoreData.away);
        });

        window.pesBridge.onGameClosed(() => {
          resetLaunchBtn();
          const scoreModal = document.getElementById("scoreModal");
          if (scoreModal && scoreModal.style.display !== "flex") {
            const mMatchup = document.getElementById("modalMatchup");
            if (mMatchup) mMatchup.textContent = `${homeLabel} vs ${awayLabel}`;

            const mHome = document.getElementById("modalHomeName");
            if (mHome) mHome.textContent = homeLabel;

            const mAway = document.getElementById("modalAwayName");
            if (mAway) mAway.textContent = awayLabel;

            scoreModal.style.display = "flex";
          }
        });

      } else {
        setTimeout(() => {
          resetLaunchBtn();
          const scoreModal = document.getElementById("scoreModal");
          if (scoreModal) scoreModal.style.display = "flex";
        }, 1200);
      }
    });
  }

  const confirmScore = document.getElementById("confirmScoreBtn");
  if (confirmScore) {
    confirmScore.addEventListener("click", () => {
      const h = parseInt(document.getElementById("homeScoreInput").value) || 0;
      const a = parseInt(document.getElementById("awayScoreInput").value) || 0;
      const scoreModal = document.getElementById("scoreModal");
      if (scoreModal) scoreModal.style.display = "none";
      executeMatchday(h, a);
    });
  }

  const closeScore = document.getElementById("closeModalBtn");
  if (closeScore) {
    closeScore.addEventListener("click", () => {
      const scoreModal = document.getElementById("scoreModal");
      if (scoreModal) scoreModal.style.display = "none";
    });
  }

  const btnNextSeason = document.getElementById("btnAdvanceToNewSeason");
  if (btnNextSeason) {
    btnNextSeason.addEventListener("click", window.advanceToNextSeason);
  }
});