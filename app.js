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
let transferFilterLeague = "all";
let transferFilterPos = "all";

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

function computeRadarPoints(attrs) {
  const cx = 100, cy = 90, maxR = 68;
  const vals = [attrs.pace, attrs.shooting, attrs.passing, attrs.dribbling, attrs.defending, attrs.physical];
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

  if (nameEl) nameEl.textContent = player.name;
  if (ovrEl) ovrEl.textContent = player.rating;
  if (posEl) {
    posEl.textContent = player.pos;
    posEl.className = `pos-tag ${getPosClass(player.pos)}`;
  }
  if (condEl) condEl.innerHTML = getConditionIcon(player.condition);
  if (bioEl) bioEl.textContent = `${player.club} • ${player.nationality || "Europe"}`;

  const poly = document.getElementById("radarPolygon");
  if (poly) poly.setAttribute("points", computeRadarPoints(getPlayerRadarAttributes(player)));
}

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
      position: idx + 1, name: team, played: 0, won: 0, drawn: 0, lost: 0, gf: 0, ga: 0, gd: 0, points: 0
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
  const container = document.getElementById("fixturesListContainer");
  if (!roundMenu || !container) return;

  const leagueSchedule = fixtures[selectedFixturesLeague] || [];
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
    const lTeams = database.leagues[transferFilterLeague]?.teams || [];
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

function ensureSquadConsistency(userTeam) {
  let squad = players.filter(p => p.club === userTeam);
  if (squad.length === 0) {
    const defaultPositions = ["GK", "LB", "CB", "CB", "RB", "DMF", "CMF", "CMF", "LWF", "CF", "RWF", "GK", "CB", "SB", "CMF", "AMF", "WF", "CF"];
    const baseId = Date.now();
    defaultPositions.forEach((pos, idx) => {
      players.push({
        id: baseId + idx, name: `${userTeam.substring(0, 3).toUpperCase()} Player ${idx + 1}`,
        club: userTeam, nationality: "Europe", pos: pos, rating: Math.floor(75 + Math.random() * 14),
        condition: "green", isStarter: idx < 11, slotId: idx < 11 ? idx : null, benchIdx: idx >= 11 ? (idx - 11) : null,
        goals: 0, assists: 0
      });
    });
    saveToStorage();
    squad = players.filter(p => p.club === userTeam);
  }

  let starters = squad.filter(p => p.isStarter);
  if (starters.length !== 11 || starters.some(p => p.slotId === null || p.slotId === undefined)) {
    squad.forEach((p, idx) => {
      p.isStarter = idx < 11;
      p.slotId = idx < 11 ? idx : null;
      p.benchIdx = idx >= 11 ? idx - 11 : null;
    });
    saveToStorage();
  }

  const bench = squad.filter(p => !p.isStarter);
  bench.forEach((p, idx) => { if (p.benchIdx === null || p.benchIdx === undefined) p.benchIdx = idx; });
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
    const lTeams = database.leagues[selectedLeague].teams;
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

// 1. Season Celebration Modal Builder
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

// 2. Global Function: Advance into Next Season
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

function setupCustomDropdown(triggerId, menuId, onSelect) {
  const trigger = document.getElementById(triggerId);
  const menu = document.getElementById(menuId);
  if (!trigger || !menu) return;

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    document.querySelectorAll(".dropdown-menu").forEach(m => { if (m !== menu) m.classList.remove("open"); });
    menu.classList.toggle("open");
  });

  menu.querySelectorAll(".dropdown-item").forEach(item => {
    item.addEventListener("click", (e) => {
      e.stopPropagation();
      trigger.textContent = item.textContent;
      menu.classList.remove("open");
      onSelect(item.dataset.val);
    });
  });
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

  const setupLeague = document.getElementById("setupLeagueSelect");
  if (setupLeague) {
    setupLeague.addEventListener("change", (e) => {
      populateSetupTeams(e.target.value);
    });
  }

  const btnStart = document.getElementById("btnStartCareer");
  if (btnStart) {
    btnStart.addEventListener("click", () => {
      const name = document.getElementById("managerNameInput")?.value || "Manager";
      const league = document.getElementById("setupLeagueSelect")?.value || "premier_league";
      const team = document.getElementById("setupTeamSelect")?.value || "Arsenal";
      const nat = document.getElementById("setupNationalSelect")?.value || "none";

      database.userState = {
        managerName: name,
        selectedTeam: team,
        nationalTeam: nat,
        league: league,
        currentGameweek: 1,
        budget: 60000000
      };

      initDatabase();
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
      localStorage.removeItem("pes6_career_user");
      localStorage.removeItem("pes6_career_standings");
      localStorage.removeItem("pes6_career_fixtures");
      localStorage.removeItem("pes6_career_players");
      localStorage.removeItem("pes6_career_ucl");

      const setupEl = document.getElementById("careerSetup");
      if (setupEl) setupEl.style.display = "flex";

      populateSetupNationals();
      populateSetupTeams(document.getElementById("setupLeagueSelect")?.value || "premier_league");

      setTimeout(() => {
        const input = document.getElementById("managerNameInput");
        if (input) {
          input.focus();
          input.select();
        }
      }, 50);
    });
  }

  populateSetupNationals();
  populateSetupTeams("premier_league");
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
      const homeLabel = document.getElementById("homeTeamName").textContent;
      const awayLabel = document.getElementById("awayTeamName").textContent;
      const exePath = localStorage.getItem("pes6_exe_path");

      if (!exePath && window.pesBridge) {
        alert("Please set your pes6.exe path in Game Settings first!");
        return;
      }

      launchBtn.textContent = "⏳ Match Live in PES 6...";
      launchBtn.style.background = "#ff9900";
      launchBtn.disabled = true;

      if (window.pesBridge) {
        const res = await window.pesBridge.launchPes(exePath);
        if (!res.success) {
          alert("Launch error: " + res.error);
          launchBtn.textContent = "Launch PES 6 Match";
          launchBtn.style.background = "var(--accent)";
          launchBtn.disabled = false;
          return;
        }

        window.pesBridge.onGameClosed(() => {
          launchBtn.textContent = "Launch PES 6 Match";
          launchBtn.style.background = "var(--accent)";
          launchBtn.disabled = false;

          const sim = simulateMatch(homeLabel, awayLabel);
          document.getElementById("modalMatchup").textContent = `${homeLabel} vs ${awayLabel}`;
          document.getElementById("modalHomeName").textContent = homeLabel;
          document.getElementById("modalAwayName").textContent = awayLabel;
          document.getElementById("homeScoreInput").value = sim.homeScore;
          document.getElementById("awayScoreInput").value = sim.awayScore;
          
          const scoreModal = document.getElementById("scoreModal");
          if (scoreModal) scoreModal.style.display = "flex";
        });
      } else {
        setTimeout(() => {
          launchBtn.textContent = "Launch PES 6 Match";
          launchBtn.style.background = "var(--accent)";
          launchBtn.disabled = false;
          const scoreModal = document.getElementById("scoreModal");
          if (scoreModal) scoreModal.style.display = "flex";
        }, 1000);
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