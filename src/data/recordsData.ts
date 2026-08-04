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
