const database = {
  leagues: {
    premier_league: {
      name: "English Premiership",
      teams: [
        "Arsenal", "Aston Villa", "Blackburn Rovers", "Bolton Wanderers", "Charlton Athletic",
        "Chelsea", "Everton", "Fulham", "Liverpool", "Manchester City",
        "Manchester United", "Middlesbrough", "Newcastle United", "Portsmouth", "Reading",
        "Sheffield United", "Tottenham Hotspur", "Watford", "West Ham United", "Wigan Athletic"
      ]
    },
    ligue_1: {
      name: "Ligue 1",
      teams: [
        "AJ Auxerre", "Girondins de Bordeaux", "Le Mans", "RC Lens", "Lille",
        "Lorient", "Olympique Lyonnais", "Olympique de Marseille", "AS Monaco", "ASNL (Nancy)",
        "FC Nantes", "OGC Nice", "Paris Saint-Germain", "Stade Rennais", "Saint-Étienne",
        "CS Sedan", "FC Sochaux", "Toulouse FC", "ESTAC Troyes", "Valenciennes FC"
      ]
    },
    serie_a: {
      name: "Serie A",
      teams: [
        "Ascoli", "Atalanta", "Cagliari", "Catania", "Chievo Verona",
        "Empoli", "Fiorentina", "Inter Milan", "Lazio", "Livorno",
        "Messina", "AC Milan", "Palermo", "Parma", "Reggina",
        "AS Roma", "Sampdoria", "AC Siena", "Torino", "Udinese"
      ]
    },
    eredivisie: {
      name: "Eredivisie",
      teams: [
        "ADO Den Haag", "Ajax", "AZ Alkmaar", "Excelsior", "Feyenoord",
        "FC Groningen", "sc Heerenveen", "Heracles Almelo", "NAC Breda", "NEC Nijmegen",
        "PSV Eindhoven", "RKC Waalwijk", "Roda JC", "Sparta Rotterdam", "FC Twente",
        "FC Utrecht", "Vitesse", "Willem II"
      ]
    },
    la_liga: {
      name: "Liga Española",
      teams: [
        "Athletic Club", "FC Barcelona", "Real Betis", "Celta de Vigo", "Deportivo La Coruña",
        "RCD Espanyol", "Getafe", "Gimnàstic", "Levante", "Atlético Madrid",
        "Real Madrid", "RCD Mallorca", "CA Osasuna", "Racing Santander", "Real Sociedad",
        "Recreativo de Huelva", "Sevilla FC", "Valencia CF", "Villarreal CF", "Real Zaragoza"
      ]
    },
    rest_of_europe: {
      name: "Rest of Europe",
      teams: [
        "Anderlecht", "Club Brugge", "Sparta Praha", "FC København", "FC Bayern München",
        "Olympiacos", "Panathinaikos", "Juventus", "Rosenborg BK", "SL Benfica",
        "FC Porto", "Sporting CP", "Celtic FC", "Rangers FC", "Djurgårdens IF",
        "Beşiktaş JK", "Fenerbahçe SK", "Galatasaray SK", "FC Dynamo Kyiv"
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
  userState: {
    managerName: "Jamal Mahmood",
    selectedTeam: "Arsenal",
    nationalTeam: "none",
    league: "premier_league",
    currentGameweek: 1
  }
};

let standings = {};
let fixtures = {};
let players = [];

const INTERNATIONAL_BREAK_WEEKS = [10, 20, 30];

// Tactical Formations (11 Slots on 3D Viewport)
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
let activeSelection = null; // { type: 'pitch'|'bench', id: number, slotId?: number, benchIdx?: number }
let inspectedPlayerId = null;

// Generate 6 radar attributes
function getPlayerRadarAttributes(p) {
  const base = p.rating || 80;
  let pace = base, sho = base, pas = base, dri = base, def = base, phy = base;

  if (p.pos === "CF" || p.pos === "SS") {
    sho += 6; dri += 4; pace += 3; def -= 25; phy += 2;
  } else if (p.pos === "WF" || p.pos === "LWF" || p.pos === "RWF") {
    pace += 8; dri += 7; pas += 2; def -= 28; sho += 2;
  } else if (["CMF", "AMF", "SMF", "LMF", "RMF"].includes(p.pos)) {
    pas += 8; dri += 6; sho += 1; def -= 10; phy -= 2;
  } else if (p.pos === "DMF") {
    def += 7; phy += 8; pas += 3; dri -= 5; sho -= 10;
  } else if (["CB", "LB", "RB", "SB", "LWB", "RWB"].includes(p.pos)) {
    def += 10; phy += 9; pace += (p.pos === "CB" ? -5 : 4); sho -= 25; dri -= 10;
  } else if (p.pos === "GK") {
    def = base + 5; phy = base + 2; sho = 20; pas = 45; dri = 25; pace = 45;
  }

  const clamp = v => Math.min(99, Math.max(30, Math.round(v)));
  return { pace: clamp(pace), shooting: clamp(sho), passing: clamp(pas), dribbling: clamp(dri), defending: clamp(def), physical: clamp(phy) };
}

// Compute dynamic polygon coordinates for Hexagon Radar
function computeRadarPoints(attrs) {
  const cx = 100, cy = 90, maxR = 68;
  const vals = [attrs.pace, attrs.shooting, attrs.passing, attrs.dribbling, attrs.defending, attrs.physical];
  const angles = [-90, -30, 30, 90, 150, 210];

  const pts = vals.map((v, i) => {
    const r = (v / 100) * maxR;
    const rad = angles[i] * (Math.PI / 180);
    const x = cx + r * Math.cos(rad);
    const y = cy + r * Math.sin(rad);
    return `${x.toFixed(1)},${y.toFixed(1)}`;
  });

  return pts.join(" ");
}

// Update Top Inspection Banner
function updatePlayerInspector(player) {
  if (!player) return;
  inspectedPlayerId = player.id;

  const nameEl = document.getElementById("inspectName");
  const ovrEl = document.getElementById("inspectOvr");
  const posEl = document.getElementById("inspectPos");
  const condEl = document.getElementById("inspectCond");
  const bioEl = document.getElementById("inspectClubNat");

  if (nameEl) nameEl.textContent = player.name;
  if (ovrEl) ovrEl.textContent = player.rating;
  if (posEl) {
    posEl.textContent = player.pos;
    posEl.className = `pos-tag ${getPosClass(player.pos)}`;
  }
  if (condEl) condEl.innerHTML = getConditionIcon(player.condition);
  if (bioEl) bioEl.textContent = `${player.club} • ${player.nationality || "Europe"}`;

  const attrs = getPlayerRadarAttributes(player);
  const polyPoints = computeRadarPoints(attrs);
  const poly = document.getElementById("radarPolygon");
  if (poly) poly.setAttribute("points", polyPoints);
}

// Ensure Consistent 11 Starters + Indexed Bench
function ensureSquadConsistency(userTeam) {
  let squad = players.filter(p => p.club === userTeam);

  if (squad.length === 0) {
    const defaultPositions = ["GK", "LB", "CB", "CB", "RB", "DMF", "CMF", "CMF", "LWF", "CF", "RWF", "GK", "CB", "SB", "CMF", "AMF", "WF", "CF"];
    const baseId = Date.now();
    defaultPositions.forEach((pos, idx) => {
      players.push({
        id: baseId + idx,
        name: `${userTeam.substring(0, 3).toUpperCase()} Player ${idx + 1}`,
        club: userTeam,
        nationality: "Europe",
        pos: pos,
        rating: Math.floor(75 + Math.random() * 14),
        condition: "green",
        isStarter: idx < 11,
        slotId: idx < 11 ? idx : null,
        benchIdx: idx >= 11 ? (idx - 11) : null,
        goals: 0,
        assists: 0
      });
    });
    saveToStorage();
    squad = players.filter(p => p.club === userTeam);
  }

  let starters = squad.filter(p => p.isStarter);
  if (starters.length !== 11 || starters.some(p => p.slotId === null || p.slotId === undefined)) {
    squad.forEach((p, idx) => {
      if (idx < 11) {
        p.isStarter = true;
        p.slotId = idx;
        p.benchIdx = null;
      } else {
        p.isStarter = false;
        p.slotId = null;
        p.benchIdx = idx - 11;
      }
    });
    saveToStorage();
  }

  const bench = squad.filter(p => !p.isStarter);
  bench.forEach((p, idx) => {
    if (p.benchIdx === null || p.benchIdx === undefined) {
      p.benchIdx = idx;
    }
  });

  return squad;
}

// RENDER: Tactical Board & Bench
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

  if (!inspectedPlayerId && squad.length > 0) {
    updatePlayerInspector(squad[0]);
  } else {
    const inspected = squad.find(p => p.id === inspectedPlayerId);
    if (inspected) updatePlayerInspector(inspected);
  }

  if (statusChip) {
    if (activeSelection) {
      const selP = players.find(p => p.id === activeSelection.id);
      statusChip.textContent = `Selected: ${selP ? selP.name : "Player"} (Click target to swap)`;
      statusChip.style.background = "rgba(0, 210, 106, 0.3)";
    } else {
      statusChip.textContent = "SELECT PLAYER";
      statusChip.style.background = "rgba(0, 210, 106, 0.15)";
    }
  }

  // 1. Render Pitch Starting XI (Jersey Nodes)
  slotsConfig.forEach(slot => {
    const player = squad.find(p => p.isStarter && p.slotId === slot.slotId);
    if (!player) return;

    const node = document.createElement("div");
    node.className = "fifa-jersey-node";
    node.style.left = `${slot.x}%`;
    node.style.top = `${slot.y}%`;

    const isSelected = activeSelection && activeSelection.id === player.id;
    if (isSelected) node.classList.add("active-selected");

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

  // 2. Render Horizontal Substitutes Bench (Sorted by exact benchIdx)
  const bench = squad.filter(p => !p.isStarter);
  bench.sort((a, b) => a.benchIdx - b.benchIdx);

  bench.forEach((player, idx) => {
    const card = document.createElement("div");
    card.className = "fifa-bench-card";

    const isSelected = activeSelection && activeSelection.id === player.id;
    if (isSelected) card.classList.add("active-selected");

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

// PITCH CLICK: Swap starter with starter OR starter with bench
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

  // Starter <-> Starter Swap
  if (activeSelection.type === 'pitch') {
    const p1 = players.find(p => p.id === activeSelection.id);
    const p2 = player;

    const tempSlot = p1.slotId;
    p1.slotId = p2.slotId;
    p2.slotId = tempSlot;

    activeSelection = null;
    saveToStorage();
    renderSquadTab();
    return;
  }

  // Sub (Bench) <-> Starter (Pitch) Swap
  if (activeSelection.type === 'bench') {
    const subPlayer = players.find(p => p.id === activeSelection.id);
    const starterPlayer = player;

    const targetSlot = starterPlayer.slotId;
    const targetBenchIdx = subPlayer.benchIdx;

    subPlayer.isStarter = true;
    subPlayer.slotId = targetSlot;
    subPlayer.benchIdx = null;

    starterPlayer.isStarter = false;
    starterPlayer.slotId = null;
    starterPlayer.benchIdx = targetBenchIdx;

    activeSelection = null;
    saveToStorage();
    renderSquadTab();
  }
}

// BENCH CLICK: Reorder bench OR replace pitch starter
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

  // Bench <-> Bench Reordering
  if (activeSelection.type === 'bench') {
    const b1 = players.find(p => p.id === activeSelection.id);
    const b2 = player;

    const tempIdx = b1.benchIdx;
    b1.benchIdx = b2.benchIdx;
    b2.benchIdx = tempIdx;

    activeSelection = null;
    saveToStorage();
    renderSquadTab();
    return;
  }

  // Pitch Starter <-> Bench Sub Swap
  if (activeSelection.type === 'pitch') {
    const starterPlayer = players.find(p => p.id === activeSelection.id);
    const subPlayer = player;

    const targetSlot = starterPlayer.slotId;
    const targetBenchIdx = subPlayer.benchIdx;

    subPlayer.isStarter = true;
    subPlayer.slotId = targetSlot;
    subPlayer.benchIdx = null;

    starterPlayer.isStarter = false;
    starterPlayer.slotId = null;
    starterPlayer.benchIdx = targetBenchIdx;

    activeSelection = null;
    saveToStorage();
    renderSquadTab();
  }
}

// Helpers
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

// Schedule Generation
function generateSchedule(teamList) {
  let teams = [...teamList];
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

function initDatabase() {
  for (const [leagueKey, leagueData] of Object.entries(database.leagues)) {
    standings[leagueKey] = leagueData.teams.map((team, idx) => ({
      position: idx + 1,
      name: team,
      played: 0,
      won: 0,
      drawn: 0,
      lost: 0,
      gf: 0,
      ga: 0,
      gd: 0,
      points: 0
    }));
    fixtures[leagueKey] = generateSchedule(leagueData.teams);
  }
}

async function loadPlayers() {
  try {
    const response = await fetch("players.json");
    players = await response.json();
  } catch (err) {
    players = [
      { id: 1, name: "Thierry Henry", club: "Arsenal", pos: "CF", rating: 97, condition: "green", slotId: 9, isStarter: true, goals: 0, assists: 0 }
    ];
  }
}

function saveToStorage() {
  localStorage.setItem("pes6_career_user", JSON.stringify(database.userState));
  localStorage.setItem("pes6_career_standings", JSON.stringify(standings));
  localStorage.setItem("pes6_career_fixtures", JSON.stringify(fixtures));
  localStorage.setItem("pes6_career_players", JSON.stringify(players));
}

function loadFromStorage() {
  const savedUser = localStorage.getItem("pes6_career_user");
  const savedStandings = localStorage.getItem("pes6_career_standings");
  const savedFixtures = localStorage.getItem("pes6_career_fixtures");
  const savedPlayers = localStorage.getItem("pes6_career_players");

  if (savedUser && savedStandings && savedFixtures) {
    database.userState = JSON.parse(savedUser);
    standings = JSON.parse(savedStandings);
    fixtures = JSON.parse(savedFixtures);
    if (savedPlayers) players = JSON.parse(savedPlayers);
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
      const luckyPlayer = teamPlayers[Math.floor(Math.random() * teamPlayers.length)];
      luckyPlayer.goals += 1;
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

  if (gf > ga) {
    team.won += 1;
    team.points += 3;
  } else if (gf === ga) {
    team.drawn += 1;
    team.points += 1;
  } else {
    team.lost += 1;
  }
}

function sortStandings(leagueKey) {
  standings[leagueKey].sort((a, b) => {
    if (b.points !== a.points) return b.points - a.points;
    if (b.gd !== a.gd) return b.gd - a.gd;
    return b.gf - a.gf;
  });
  standings[leagueKey].forEach((t, i) => (t.position = i + 1));
}

function refreshDashboard() {
  document.getElementById("managedTeamName").textContent = database.userState.selectedTeam;
  document.getElementById("dashboardManagerTitle").textContent = `${database.userState.managerName}'s Dashboard`;

  const natText = database.userState.nationalTeam !== "none" ? `National Team: ${database.userState.nationalTeam}` : "";
  document.getElementById("nationalJobBadge").textContent = natText;

  document.getElementById("currentDateDisplay").textContent = `Gameweek ${database.userState.currentGameweek} of 42 - Season 2006/07`;

  renderQuickTable();
  renderDashboardFixture();
}

function renderTable(leagueKey) {
  const tbody = document.getElementById("fullLeagueTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  (standings[leagueKey] || []).forEach(team => {
    const row = document.createElement("tr");
    const isUser = team.name === database.userState.selectedTeam;
    row.style.background = isUser ? "rgba(0, 210, 106, 0.1)" : "";
    row.innerHTML = `
      <td>${team.position}</td>
      <td><strong>${team.name}</strong></td>
      <td>${team.played}</td>
      <td>${team.won}</td>
      <td>${team.drawn}</td>
      <td>${team.lost}</td>
      <td>${team.gf}</td>
      <td>${team.ga}</td>
      <td>${team.gd}</td>
      <td><strong>${team.points}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

function renderQuickTable() {
  const tbody = document.getElementById("quickTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  const userLeague = database.userState.league;
  const topFive = (standings[userLeague] || []).slice(0, 5);

  topFive.forEach(team => {
    const row = document.createElement("tr");
    const isUser = team.name === database.userState.selectedTeam;
    row.style.background = isUser ? "rgba(0, 210, 106, 0.15)" : "";
    row.innerHTML = `
      <td>${team.position}</td>
      <td>${team.name}</td>
      <td>${team.played}</td>
      <td>${team.gd}</td>
      <td><strong>${team.points}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

function renderDashboardFixture() {
  const gw = database.userState.currentGameweek;

  if (INTERNATIONAL_BREAK_WEEKS.includes(gw)) {
    if (database.userState.nationalTeam !== "none") {
      document.getElementById("homeTeamName").textContent = database.userState.nationalTeam;
      document.getElementById("awayTeamName").textContent = "International Rival";
      document.getElementById("matchCompetition").textContent = "FIFA International Match Window";
    } else {
      document.getElementById("homeTeamName").textContent = database.userState.selectedTeam;
      document.getElementById("awayTeamName").textContent = "(International Break)";
      document.getElementById("matchCompetition").textContent = "League Paused for Internationals";
    }
    return;
  }

  const userLeague = database.userState.league;
  const roundIdx = getLeagueRoundForGameweek(userLeague, gw);

  if (roundIdx === null) {
    document.getElementById("homeTeamName").textContent = database.userState.selectedTeam;
    document.getElementById("awayTeamName").textContent = "(Season Completed)";
    document.getElementById("matchCompetition").textContent = "Domestic Season Finished";
    return;
  }

  const userMatch = fixtures[userLeague][roundIdx].find(
    m => m.home === database.userState.selectedTeam || m.away === database.userState.selectedTeam
  );

  if (userMatch) {
    document.getElementById("homeTeamName").textContent = userMatch.home;
    document.getElementById("awayTeamName").textContent = userMatch.away;
    document.getElementById("matchCompetition").textContent = 
      `${database.leagues[userLeague].name} - Matchday ${roundIdx + 1}`;
  } else {
    document.getElementById("homeTeamName").textContent = database.userState.selectedTeam;
    document.getElementById("awayTeamName").textContent = "(Rest Week / Bye)";
  }
}

function renderTopScorers(selectedLeague = "all") {
  const tbody = document.getElementById("topScorersTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  let filtered = [...players];
  if (selectedLeague !== "all") {
    const leagueTeams = database.leagues[selectedLeague].teams;
    filtered = filtered.filter(p => leagueTeams.includes(p.club));
  }

  filtered.sort((a, b) => b.goals - a.goals);

  filtered.slice(0, 15).forEach((p, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${idx + 1}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.club}</td>
      <td>${p.pos}</td>
      <td>${p.assists}</td>
      <td><strong>${p.goals}</strong></td>
    `;
    tbody.appendChild(row);
  });
}

function renderAwardsTab() {
  const tbody = document.getElementById("ballonDorTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const ranked = [...players].map(p => ({
    ...p,
    points: (p.goals * 4) + (p.assists * 3) + (p.rating * 0.5)
  }));

  ranked.sort((a, b) => b.points - a.points);

  ranked.slice(0, 5).forEach((p, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>#${idx + 1}</td>
      <td><strong>${p.name}</strong></td>
      <td>${p.club}</td>
      <td><strong>${Math.round(p.points)} pts</strong></td>
    `;
    tbody.appendChild(row);
  });

  const goldenShoeLeader = [...players].sort((a, b) => b.goals - a.goals)[0];
  const gBox = document.getElementById("goldenShoeLeader");
  if (goldenShoeLeader && gBox) {
    gBox.innerHTML = `
      <h2 style="color: var(--accent); font-size: 32px;">${goldenShoeLeader.name}</h2>
      <p style="font-size: 16px; margin: 6px 0;"><strong>${goldenShoeLeader.club}</strong></p>
      <p style="color: var(--text-muted); font-size: 14px;">${goldenShoeLeader.goals} Domestic Goals</p>
    `;
  }
}

function executeMatchday(userHomeScore, userAwayScore) {
  const gw = database.userState.currentGameweek;
  const isIntlBreak = INTERNATIONAL_BREAK_WEEKS.includes(gw);

  if (!isIntlBreak) {
    for (const [leagueKey, roundList] of Object.entries(fixtures)) {
      const roundIdx = getLeagueRoundForGameweek(leagueKey, gw);
      if (roundIdx === null || !roundList[roundIdx]) continue;

      const round = roundList[roundIdx];
      round.forEach(match => {
        if (match.played) return;
        const isUserMatch = (match.home === database.userState.selectedTeam || match.away === database.userState.selectedTeam);

        if (isUserMatch) {
          match.homeScore = userHomeScore;
          match.awayScore = userAwayScore;
          assignRandomGoals(match.home, userHomeScore);
          assignRandomGoals(match.away, userAwayScore);
        } else {
          const sim = simulateMatch(match.home, match.away);
          match.homeScore = sim.homeScore;
          match.awayScore = sim.awayScore;
        }

        match.played = true;
        updateTeamRecord(leagueKey, match.home, match.homeScore, match.awayScore);
        updateTeamRecord(leagueKey, match.away, match.awayScore, match.homeScore);
      });

      sortStandings(leagueKey);
    }
  }

  database.userState.currentGameweek += 1;
  rollMatchdayConditions();
  saveToStorage();

  refreshDashboard();
  renderTable(document.getElementById("leagueSelector").value);
  renderTopScorers(document.getElementById("statsLeagueSelector").value);
  renderAwardsTab();
  renderSquadTab();
}

function populateSetupTeams(leagueKey) {
  const select = document.getElementById("setupTeamSelect");
  if (!select) return;
  select.innerHTML = "";
  database.leagues[leagueKey].teams.forEach(team => {
    const opt = document.createElement("option");
    opt.value = team;
    opt.textContent = team;
    select.appendChild(opt);
  });
}

function populateSetupNationals() {
  const select = document.getElementById("setupNationalSelect");
  if (!select) return;
  select.innerHTML = "";
  const defaultOpt = document.createElement("option");
  defaultOpt.value = "none";
  defaultOpt.textContent = "None (Focus on Club)";
  select.appendChild(defaultOpt);

  database.nationalTeams.forEach(nat => {
    const opt = document.createElement("option");
    opt.value = nat;
    opt.textContent = nat;
    select.appendChild(opt);
  });
}

// Global Event Handlers
document.addEventListener("DOMContentLoaded", () => {
  const setupLeague = document.getElementById("setupLeagueSelect");
  if (setupLeague) {
    setupLeague.addEventListener("change", (e) => {
      populateSetupTeams(e.target.value);
    });
  }

  const btnStart = document.getElementById("btnStartCareer");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      const name = document.getElementById("managerNameInput").value || "Manager";
      const league = document.getElementById("setupLeagueSelect").value;
      const team = document.getElementById("setupTeamSelect").value;
      const nat = document.getElementById("setupNationalSelect").value;

      database.userState = {
        managerName: name,
        selectedTeam: team,
        nationalTeam: nat,
        league: league,
        currentGameweek: 1
      };

      initDatabase();
      saveToStorage();

      document.getElementById("careerSetup").style.display = "none";
      document.getElementById("leagueSelector").value = league;

      refreshDashboard();
      renderTable(league);
      renderTopScorers();
      renderAwardsTab();
      renderSquadTab();
    });
  }

  const btnReset = document.getElementById("btnResetCareer");
  if (btnReset) {
    btnReset.addEventListener("click", () => {
      localStorage.removeItem("pes6_career_user");
      localStorage.removeItem("pes6_career_standings");
      localStorage.removeItem("pes6_career_fixtures");
      localStorage.removeItem("pes6_career_players");

      const setupEl = document.getElementById("careerSetup");
      setupEl.style.display = "flex";
      populateSetupTeams("premier_league");

      setTimeout(() => {
        const input = document.getElementById("managerNameInput");
        if (input) {
          input.focus();
          input.select();
        }
      }, 50);
    });
  }

  // Navigation
  document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".nav-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(tab => tab.classList.remove("active"));

      button.classList.add("active");
      const targetTab = button.getAttribute("data-tab");
      const targetEl = document.getElementById(targetTab);
      if (targetEl) targetEl.classList.add("active");

      if (targetTab === "stats") renderTopScorers(document.getElementById("statsLeagueSelector").value);
      if (targetTab === "awards") renderAwardsTab();
      if (targetTab === "squad") renderSquadTab();
    });
  });

  const lSelect = document.getElementById("leagueSelector");
  if (lSelect) lSelect.addEventListener("change", (e) => renderTable(e.target.value));

  const sSelect = document.getElementById("statsLeagueSelector");
  if (sSelect) sSelect.addEventListener("change", (e) => renderTopScorers(e.target.value));

  const fSelect = document.getElementById("formationSelector");
  if (fSelect) {
    fSelect.addEventListener("change", (e) => {
      currentFormation = e.target.value;
      renderSquadTab();
    });
  }

  // Settings
  const browseBtn = document.getElementById("browsePesBtn");
  if (browseBtn) {
    browseBtn.addEventListener("click", async () => {
      if (window.pesBridge) {
        const selectedPath = await window.pesBridge.selectFile();
        if (selectedPath) {
          document.getElementById("pesPathInput").value = selectedPath;
          localStorage.setItem("pes6_exe_path", selectedPath);
          alert("Path saved: " + selectedPath);
        }
      }
    });
  }

  const saveSetBtn = document.getElementById("saveSettingsBtn");
  if (saveSetBtn) {
    saveSetBtn.addEventListener("click", () => {
      const p = document.getElementById("pesPathInput").value.trim();
      if (!p) return;
      localStorage.setItem("pes6_exe_path", p);
      alert("Settings saved!");
    });
  }

  // Match Launch
  const launchBtn = document.getElementById("btnLaunchMatch");
  if (launchBtn) {
    launchBtn.addEventListener("click", async () => {
      const gw = database.userState.currentGameweek;
      const isIntlBreak = INTERNATIONAL_BREAK_WEEKS.includes(gw);

      if (isIntlBreak && database.userState.nationalTeam === "none") {
        alert("International Break: Club has no fixture. Advancing...");
        executeMatchday(0, 0);
        return;
      }

      const userLeague = database.userState.league;
      const roundIdx = getLeagueRoundForGameweek(userLeague, gw);

      if (!isIntlBreak && roundIdx === null) {
        alert("Domestic season complete. Advancing calendar...");
        executeMatchday(0, 0);
        return;
      }

      const homeLabel = document.getElementById("homeTeamName").textContent;
      const awayLabel = document.getElementById("awayTeamName").textContent;
      const exePath = localStorage.getItem("pes6_exe_path");

      if (!exePath) {
        alert("Please select pes6.exe in Game Settings first!");
        return;
      }

      if (window.pesBridge) {
        const res = await window.pesBridge.launchPes(exePath);
        if (!res.success) {
          alert("Launch Error: " + res.error);
          return;
        }
      }

      document.getElementById("modalMatchup").textContent = `${homeLabel} vs ${awayLabel}`;
      document.getElementById("modalHomeName").textContent = homeLabel;
      document.getElementById("modalAwayName").textContent = awayLabel;
      document.getElementById("homeScoreInput").value = 0;
      document.getElementById("awayScoreInput").value = 0;
      document.getElementById("scoreModal").style.display = "flex";
    });
  }

  const confirmBtn = document.getElementById("confirmScoreBtn");
  if (confirmBtn) {
    confirmBtn.addEventListener("click", () => {
      const h = parseInt(document.getElementById("homeScoreInput").value) || 0;
      const a = parseInt(document.getElementById("awayScoreInput").value) || 0;
      document.getElementById("scoreModal").style.display = "none";
      executeMatchday(h, a);
    });
  }

  const closeBtn = document.getElementById("closeModalBtn");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      document.getElementById("scoreModal").style.display = "none";
    });
  }
});

// App Startup
window.addEventListener("DOMContentLoaded", async () => {
  populateSetupNationals();
  populateSetupTeams("premier_league");
  await loadPlayers();

  const savedPesPath = localStorage.getItem("pes6_exe_path") || "";
  const pesInput = document.getElementById("pesPathInput");
  if (pesInput) pesInput.value = savedPesPath;

  const hasSave = loadFromStorage();
  if (!hasSave) {
    document.getElementById("careerSetup").style.display = "flex";
  } else {
    document.getElementById("leagueSelector").value = database.userState.league;
    refreshDashboard();
    renderTable(database.userState.league);
    renderTopScorers();
    renderAwardsTab();
    renderSquadTab();
  }
});