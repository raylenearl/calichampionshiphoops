export interface SingleGameRecord {
  category: string;
  player: string;
  team: string;
  teamId: string;
  stat: string;
  opponent: string;
  date: string;
  season: string;
  previousRecord?: string;
}

export interface SingleSeasonIndividualRecord {
  category: string;
  player: string;
  team: string;
  teamId: string;
  stat: string;
  season: string;
  previousRecord?: string;
}

export interface SingleSeasonTeamRecord {
  category: string;
  team: string;
  teamId: string;
  stat: string;
  season: string;
  previousRecord?: string;
}

export interface RecordBreaker {
  brokenRecord: string;
  oldMark: string;
  newMark: string;
  season: string;
}

export interface Season2RecordBreaker {
  record: string;
  newHolder: string;
  newMark: string;
  previousRecord: string;
}

// 1. SINGLE-GAME RECORDS (Individual)
export const SINGLE_GAME_INDIVIDUAL: SingleGameRecord[] = [
  {
    category: 'Most Points',
    player: 'Kirk Barnes',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '56',
    opponent: 'vs Strykers',
    date: 'Feb 16',
    season: 'Season 3',
    previousRecord: 'Ray Gambino (46 pts, S2) / Lamar Anderson (45 pts, S2)',
  },
  {
    category: 'Most Rebounds',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '15',
    opponent: 'vs Tigersharks',
    date: 'Nov 5',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Assists',
    player: 'A.J. Cox',
    team: 'California Reds',
    teamId: 'california-reds',
    stat: '15',
    opponent: 'vs Renegades',
    date: 'Nov 14',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Steals',
    player: 'DeAnte Gray',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    stat: '4',
    opponent: 'vs Knights',
    date: 'Feb 8',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Blocks',
    player: 'Adrian Pognotti',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '10',
    opponent: 'vs Renegades',
    date: 'Feb 24',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most 3‑Pointers',
    player: 'Jack McMichael Jr.',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    stat: '8',
    opponent: 'vs Tigersharks',
    date: 'Dec 6',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
];

// 2. SINGLE-SEASON RECORDS (Individual)
export const SINGLE_SEASON_INDIVIDUAL: SingleSeasonIndividualRecord[] = [
  {
    category: 'Points (Total)',
    player: 'Lamar Anderson',
    team: 'Fresno Mad Dogs / California Reds',
    teamId: 'california-reds',
    stat: '575',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Points (Per Game)',
    player: 'Lamar Anderson',
    team: 'Fresno Mad Dogs / California Reds',
    teamId: 'california-reds',
    stat: '25.0',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark (A.J. Hinton 21.1 PPG in S3)',
  },
  {
    category: 'Rebounds (Total)',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '218',
    season: 'Season 2',
    previousRecord: 'Mo Alexander (202 REB, S1)',
  },
  {
    category: 'Rebounds (Per Game)',
    player: 'Cameron Barkley',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    stat: '8.0',
    season: 'Season 3',
    previousRecord: 'Dorell Kabal (7.8 RPG, S2)',
  },
  {
    category: 'Assists (Total)',
    player: 'Donnell Nash',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '154',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Assists (Per Game)',
    player: 'Donnell Nash',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '7.0',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark (Lamar Anderson 4.8 APG in S3)',
  },
  {
    category: 'Steals (Total)',
    player: 'Wes Taylor',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '40',
    season: 'Season 3',
    previousRecord: 'Andor Marai (35 STL, S2) / Mo Alexander (18 STL, S1)',
  },
  {
    category: 'Steals (Per Game)',
    player: 'Wes Taylor',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '1.8',
    season: 'Season 3',
    previousRecord: 'Andor Marai (1.6 SPG, S2)',
  },
  {
    category: 'Blocks (Total)',
    player: 'Mo Alexander',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    stat: '64',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Blocks (Per Game)',
    player: 'Mo Alexander',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    stat: '2.9',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Field Goal %',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '.810',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: '3‑Point %',
    player: 'Kirk Tinsley',
    team: 'Anaheim Admirals',
    teamId: 'anaheim-admirals',
    stat: '.626',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Free Throw %',
    player: 'Jack McMichael Jr.',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    stat: '.907',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Free Throws Made',
    player: 'Kirk Barnes',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    stat: '102',
    season: 'Season 2',
    previousRecord: 'Lamar Anderson (51 FTM, FRE/CAL, S1)',
  },
  {
    category: 'Double‑Doubles',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '12',
    season: 'Season 2',
    previousRecord: 'Dorell Kabal (9 DBL-DBL, S1)',
  },
  {
    category: 'Most Fouls',
    player: 'Josh Parks',
    team: 'Fresno Mad Dogs',
    teamId: 'fresno-mad-dogs',
    stat: '48',
    season: 'Season 2',
    previousRecord: 'Lamar Anderson (43 fouls, FRE/CAL, S1)',
  },
  {
    category: 'Most Turnovers',
    player: 'Joseph Young',
    team: 'Long Beach Vipers',
    teamId: 'long-beach-vipers',
    stat: '49',
    season: 'Season 3',
    previousRecord: 'Josh Parks (32 TO, Anaheim / Long Beach, S1)',
  },
];

// 3. SINGLE-SEASON RECORDS (Team)
export const SINGLE_SEASON_TEAM: SingleSeasonTeamRecord[] = [
  {
    category: 'Most Wins',
    team: 'California Reds',
    teamId: 'california-reds',
    stat: '18',
    season: 'Season 2',
    previousRecord: 'Sacramento Stallions (17 wins, S1)',
  },
  {
    category: 'Most Losses',
    team: 'Fresno Mad Dogs / Oakland Renegades',
    teamId: 'fresno-mad-dogs',
    stat: '15',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Longest Winning Streak',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '7',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Longest Losing Streak',
    team: 'California Reds',
    teamId: 'california-reds',
    stat: '9',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Points Scored (Total)',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '1,850',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Most Points Allowed (Total)',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '1,866',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Highest Points Per Game',
    team: 'California Reds',
    teamId: 'california-reds',
    stat: '84.1',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Highest Field Goal %',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '.613',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Highest 3‑Point %',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '.562',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Highest Free Throw %',
    team: 'Anaheim Admirals',
    teamId: 'anaheim-admirals',
    stat: '.804',
    season: 'Season 1',
    previousRecord: 'Inaugural Season Benchmark',
  },
  {
    category: 'Highest‑Scoring Game (Single Game)',
    team: 'Stallions 107, Strykers 100',
    teamId: 'sacramento-stallions',
    stat: '207 total pts',
    season: 'Season 3',
    previousRecord: 'Reds 89, Vipers 81 (170 total pts, S1)',
  },
  {
    category: 'Biggest Blowout (Margin)',
    team: 'Strykers 98, Tigersharks 45',
    teamId: 'san-diego-strykers',
    stat: '+53',
    season: 'Season 2',
    previousRecord: 'Stallions +38 vs Renegades (S1)',
  },
];

// Legacy exports preserved for backwards compatibility
export const RECORD_BREAKERS: RecordBreaker[] = [
  {
    brokenRecord: 'Single‑Game Points',
    oldMark: 'Lamar Anderson (45)',
    newMark: 'Kirk Barnes (56)',
    season: 'Season 3',
  },
  {
    brokenRecord: 'Single‑Game Total Points',
    oldMark: 'Reds 89, Vipers 81 (170)',
    newMark: 'Stallions 107, Strykers 100 (207)',
    season: 'Season 3',
  },
  {
    brokenRecord: 'Season Rebounds (Total)',
    oldMark: 'Mo Alexander (202)',
    newMark: 'Dorell Kabal (218)',
    season: 'Season 2',
  },
  {
    brokenRecord: 'Season Steals (Total)',
    oldMark: 'Mo Alexander (18)',
    newMark: 'Wes Taylor (40)',
    season: 'Season 3',
  },
  {
    brokenRecord: 'Season Wins',
    oldMark: 'Stallions (17)',
    newMark: 'Reds (18)',
    season: 'Season 2',
  },
  {
    brokenRecord: 'Season Double‑Doubles',
    oldMark: 'Kabal (9)',
    newMark: 'Kabal (12)',
    season: 'Season 2',
  },
];

export const SEASON_2_RECORD_BREAKERS: Season2RecordBreaker[] = [
  {
    record: 'Most Points in a Game',
    newHolder: 'Ray Gambino (SDS)',
    newMark: '46 (vs. CAL)',
    previousRecord: 'Lamar Anderson (CAL) 45 (Season 2 @ OAK)',
  },
  {
    record: 'Most Wins in a Season',
    newHolder: 'California Reds',
    newMark: '18 Wins',
    previousRecord: '17, Season 1 (20 including playoffs)',
  },
  {
    record: 'Most Rebounds in a Season',
    newHolder: 'Dorell Kabal (SAC)',
    newMark: '218 REB',
    previousRecord: 'Mo Alexander (LA) 202 (Season 1)',
  },
  {
    record: 'Most Steals in a Season',
    newHolder: 'Andor Marai (CAL)',
    newMark: '35 STL',
    previousRecord: 'Mo Alexander (LA) 18 (Season 1)',
  },
  {
    record: 'Most Free Throws Made in a Season',
    newHolder: 'Kirk Barnes (SD)',
    newMark: '102 FTM',
    previousRecord: 'Lamar Anderson (FRE/CAL) 51 (Season 1)',
  },
  {
    record: 'Most Fouls in a Season',
    newHolder: 'Josh Parks (FRE)',
    newMark: '48 Fouls',
    previousRecord: 'Lamar Anderson (FRE/CAL) 43 (Season 1)',
  },
  {
    record: 'Most Double-Doubles in a Season',
    newHolder: 'Dorell Kabal (SAC)',
    newMark: '12 Double-Doubles',
    previousRecord: 'Dorell Kabal (SAC) 9 (Season 1)',
  },
];

export interface PlayoffRecordItem {
  category: string;
  player: string;
  team: string;
  teamId: string;
  stat: string;
  details: string;
  seasonOrSpan: string;
  previousRecord?: string;
}

// Playoff Single-Game Records
export const PLAYOFF_SINGLE_GAME_RECORDS: PlayoffRecordItem[] = [
  {
    category: 'Most Points (Single Playoff Game)',
    player: 'Lamar Anderson',
    team: 'California Reds',
    teamId: 'california-reds',
    stat: '34 PTS',
    details: 'vs. Fresno Mad Dogs (11-18 FG, 5-9 3PT, 7-8 FT)',
    seasonOrSpan: 'Season 3 Quarterfinals',
    previousRecord: 'Munir Kassa (33 PTS, Season 1 Semifinals vs. Stallions)',
  },
  {
    category: 'Most Points (Runner-Up)',
    player: 'Munir Kassa',
    team: 'San Francisco Knights',
    teamId: 'san-francisco-knights',
    stat: '33 PTS',
    details: 'vs. Sacramento Stallions (14-23 FG, 4-7 3PT, 8 AST)',
    seasonOrSpan: 'Season 1 Semifinals',
    previousRecord: 'Munir Kassa (32 PTS, Season 1 Quarterfinals vs. Sabrewolves)',
  },
  {
    category: 'Most Rebounds (Single Playoff Game)',
    player: 'DeAnte Gray',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    stat: '13 REB',
    details: 'vs. LA Dynamics (Added 6 PTS & 8 AST)',
    seasonOrSpan: 'Season 1 Semifinals',
    previousRecord: 'Dorell Kabal (12 REB, Season 1 Finals vs. Enterprise)',
  },
  {
    category: 'Most Assists (Single Playoff Game)',
    player: 'Ray Gambino / Lamar Anderson',
    team: 'SDS / CAL',
    teamId: 'san-diego-strykers',
    stat: '9 AST',
    details: 'Ray Gambino (23 PTS, 9 AST vs. Sabrewolves) & Lamar Anderson (28 PTS, 9 AST vs. Dynamics)',
    seasonOrSpan: 'Season 2 & Season 1 Quarterfinals',
    previousRecord: 'Munir Kassa & Jack McMichael Jr. (8 AST)',
  },
  {
    category: 'Most 3-Pointers Made (Single Playoff Game)',
    player: 'George Madsen',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '7 3PM',
    details: 'vs. San Francisco Knights (7-10 3PT, 27 PTS)',
    seasonOrSpan: 'Season 2 Quarterfinals',
    previousRecord: 'Lamar Anderson (6 3PM, Season 1 Quarterfinals vs. Dynamics)',
  },
  {
    category: 'Most Steals (Single Playoff Game)',
    player: 'Christopher Cook',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '5 STL',
    details: 'vs. California Reds in CCH Finals',
    seasonOrSpan: 'Season 2 Finals',
    previousRecord: 'Dorell Kabal (4 STL, Season 3 Quarterfinals vs. SF)',
  },
  {
    category: 'Most Blocks (Single Playoff Game)',
    player: 'Dorell Kabal / Dennis Rodman / Adrian Pognotti',
    team: 'SAC / CAL / SF',
    teamId: 'sacramento-stallions',
    stat: '3 BLK',
    details: 'Multiple occurrences in CCH Postseason play',
    seasonOrSpan: 'Seasons 1, 2, & 3',
    previousRecord: 'Multi-holder postseason benchmark',
  },
];

// Single Postseason Run Records
export const PLAYOFF_SINGLE_POSTSEASON_RECORDS: PlayoffRecordItem[] = [
  {
    category: 'Most Points in a Single Playoff Run',
    player: 'George Madsen',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '75 PTS',
    details: '3 GP (29 in Finals, 21 in Semis, 25 in QF)',
    seasonOrSpan: 'Season 3 Playoffs',
    previousRecord: 'Dorell Kabal (74 PTS, Season 1) / Lamar Anderson (73 PTS, Season 2)',
  },
  {
    category: 'Most Rebounds in a Single Playoff Run',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '30 REB',
    details: '3 GP, 10.0 RPG average (11 in Finals, 8 in Semis, 11 in QF)',
    seasonOrSpan: 'Season 3 Playoffs',
    previousRecord: 'Dorell Kabal (29 REB, Season 1) / Dorell Kabal (25 REB, Season 2)',
  },
  {
    category: 'Most Assists in a Single Playoff Run',
    player: 'Ray Gambino',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '18 AST',
    details: '2 GP, 9.0 APG average',
    seasonOrSpan: 'Season 2 Playoffs',
    previousRecord: 'Munir Kassa (16 AST, Season 1) / Lance Harrison (16 AST, Season 3)',
  },
  {
    category: 'Most Steals in a Single Playoff Run',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '11 STL',
    details: '3 GP, 3.67 SPG average (4 STL in QF vs SF)',
    seasonOrSpan: 'Season 3 Playoffs',
    previousRecord: 'Christopher Cook & Lamar Anderson (7 STL, Season 2)',
  },
  {
    category: 'Most 3-Pointers in a Single Playoff Run',
    player: 'George Madsen',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '14 3PM',
    details: '3 GP (5 3PM in Finals, 4 3PM in Semis, 5 3PM in QF)',
    seasonOrSpan: 'Season 3 Playoffs',
    previousRecord: 'George Madsen (13 3PM, Season 2)',
  },
  {
    category: 'Most Blocks in a Single Playoff Run',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '8 BLK',
    details: '3 GP, 2.67 BPG average',
    seasonOrSpan: 'Season 3 Playoffs',
    previousRecord: 'Dorell Kabal & Dennis Rodman (6 BLK, Season 2)',
  },
];

// Career Playoff Totals Records
export const PLAYOFF_CAREER_TOTALS_RECORDS: PlayoffRecordItem[] = [
  {
    category: 'Career Playoff Points',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '168 PTS',
    details: '9 Playoff Games played (18.7 PPG career postseason avg)',
    seasonOrSpan: 'Seasons 1 - 3 All-Time',
    previousRecord: 'George Madsen (152 PTS) / Lamar Anderson (133 PTS)',
  },
  {
    category: 'Career Playoff Rebounds',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '84 REB',
    details: '9 Playoff Games played (9.33 RPG career postseason avg)',
    seasonOrSpan: 'Seasons 1 - 3 All-Time',
    previousRecord: 'Dennis Rodman (32 REB)',
  },
  {
    category: 'Career Playoff Assists',
    player: 'Ray Gambino',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    stat: '35 AST',
    details: '5 Playoff Games played (7.0 APG career postseason avg)',
    seasonOrSpan: 'Seasons 1 - 3 All-Time',
    previousRecord: 'Lamar Anderson (30 AST) / Lance Harrison (28 AST)',
  },
  {
    category: 'Most CCH Championships',
    player: 'Dorell Kabal & George Madsen & Frank Hackett',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '2 Titles',
    details: 'Season 1 & Season 3 CCH Champions',
    seasonOrSpan: 'Seasons 1 & 3',
    previousRecord: 'California Reds (1 Title, Season 2)',
  },
  {
    category: 'Most Finals MVP Awards',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    stat: '2 Finals MVPs',
    details: 'Season 1 Finals MVP (22 PTS, 12 REB) & Season 3 Finals MVP (25 PTS, 11 REB)',
    seasonOrSpan: 'Seasons 1 & 3',
    previousRecord: 'Lamar Anderson (1 Finals MVP, Season 2)',
  },
];

// Compatibility exports for search
export const SINGLE_GAME_RECORDS = SINGLE_GAME_INDIVIDUAL.map((r, i) => ({
  id: `sgi-${i}`,
  category: r.category,
  player: r.player,
  team: r.team,
  statistic: r.stat,
  opponentDate: `${r.opponent} (${r.date}, ${r.season})`,
  season: r.season,
  isSingleGame: true,
}));

export const ABSOLUTE_SEASON_LEADERS = SINGLE_SEASON_INDIVIDUAL.map((r, i) => ({
  id: `ssi-${i}`,
  category: r.category,
  player: r.player,
  team: r.team,
  statistic: r.stat,
  season: r.season,
}));
