export interface AllStarRosterPlayer {
  name: string;
  team: string;
  teamId: string;
  pts?: number;
  min?: number;
  reb?: number;
  ast?: number;
  stl?: number;
  blk?: number;
  fg?: string;
  fg3?: string;
}

export interface SideExhibitionGame {
  title: string;
  winner: string;
  winnerScore: number;
  loser: string;
  loserScore: number;
  playerOfTheGame: string;
  potgStats: string;
  details: string;
  team1Name?: string;
  team1Roster?: AllStarRosterPlayer[];
  team2Name?: string;
  team2Roster?: AllStarRosterPlayer[];
}

export interface AllStarGame {
  season: number;
  title: string;
  location: string;
  format: string;
  winner: string;
  winningScore: number;
  losingScore: number;
  loser: string;
  mvp: {
    player: string;
    team: string;
    teamId: string;
    statLine: string;
    notes: string;
  };
  dunkContestWinner: {
    player: string;
    team: string;
    teamId: string;
    highlight: string;
  };
  threePointWinner?: {
    player: string;
    team: string;
    teamId: string;
    score?: string;
  };
  sideGame?: SideExhibitionGame;
  elamEndingDetails?: {
    targetScore?: number;
    gameWinnerShot?: string;
    gameWinnerPlayer?: string;
    gameWinnerTeam?: string;
    description: string;
  };
  norCalRoster: AllStarRosterPlayer[];
  soCalRoster: AllStarRosterPlayer[];
  recap: string;
}

export const ALL_STAR_GAMES: AllStarGame[] = [
  {
    season: 3,
    title: 'Season 3 CCH All-Star Game & Skill Showcase',
    location: 'SacTown Arena – Sacramento, CA',
    format: 'Target Score Format (NorCal vs SoCal)',
    winner: 'Northern Cali All-Stars',
    winningScore: 79,
    losingScore: 77,
    loser: 'Southern Cali All-Stars',
    mvp: {
      player: 'Donald Hardy',
      team: 'San Jose Tigersharks',
      teamId: 'san-jose-tigersharks',
      statLine: '19 PTS, 7 REB, 3 AST, 1 STL (7-12 FG, Walk-Off Winner)',
      notes: 'From throwing down gravity-defying dunks to hitting the game-winner and earning MVP honors, Hardy proved he belongs among the league’s elite.',
    },
    dunkContestWinner: {
      player: 'Donald Hardy',
      team: 'San Jose Tigersharks',
      teamId: 'san-jose-tigersharks',
      highlight: 'Gravity-defying dunks scoring a perfect score from the judges.',
    },
    threePointWinner: {
      player: 'Alonzo Reece',
      team: 'Oakland Renegades',
      teamId: 'oakland-renegades',
      score: '26 / 30 in Final Round',
    },
    elamEndingDetails: {
      targetScore: 79,
      gameWinnerShot: 'Clutch walk-off bucket down the stretch',
      gameWinnerPlayer: 'Donald Hardy',
      gameWinnerTeam: 'San Jose Tigersharks',
      description:
        'In a game that lived up to the hype, the Northern Cali All-Stars held off Southern Cali to claim a 79-77 victory in the Season 3 CCH All-Star Game at SacTown Arena. Playing under a target score format in the 4th quarter for the first time, Donald Hardy hit the game-winner to earn MVP honors.',
    },
    norCalRoster: [
      { name: 'Donald Hardy', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', pts: 19, min: 31, reb: 7, ast: 3, stl: 1, blk: 0, fg: '7-12', fg3: '0-1' },
      { name: 'D. Bradley', team: 'California Reds', teamId: 'california-reds', pts: 17, min: 17, reb: 3, ast: 2, stl: 0, blk: 0, fg: '7-15', fg3: '2-4' },
      { name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', pts: 16, min: 21, reb: 0, ast: 1, stl: 0, blk: 0, fg: '7-12', fg3: '2-3' },
      { name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', pts: 8, min: 27, reb: 7, ast: 5, stl: 0, blk: 5, fg: '4-6', fg3: '0-1' },
      { name: 'G. Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', pts: 6, min: 10, reb: 1, ast: 2, stl: 0, blk: 1, fg: '2-5', fg3: '2-3' },
      { name: 'Josh Parks', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', pts: 5, min: 31, reb: 2, ast: 4, stl: 0, blk: 0, fg: '2-2', fg3: '1-1' },
      { name: 'A. Pognotti', team: 'San Diego Strykers', teamId: 'san-diego-strykers', pts: 4, min: 12, reb: 4, ast: 2, stl: 1, blk: 0, fg: '2-3', fg3: '0-0' },
      { name: 'J. Dean', team: 'California Reds', teamId: 'california-reds', pts: 2, min: 29, reb: 2, ast: 1, stl: 1, blk: 0, fg: '1-1', fg3: '0-0' },
    ],
    soCalRoster: [
      { name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', pts: 21, min: 26, reb: 7, ast: 3, fg: '8-15', fg3: '3-6' },
      { name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', pts: 18, min: 25, reb: 9, ast: 2, fg: '7-13', fg3: '1-3' },
      { name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', pts: 16, min: 22, reb: 2, ast: 5, fg: '6-12', fg3: '3-7' },
      { name: 'Cameron Barkley', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', pts: 10, min: 18, reb: 5, ast: 1, fg: '4-8', fg3: '0-1' },
      { name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', pts: 8, min: 15, reb: 4, ast: 2, fg: '3-7', fg3: '1-3' },
      { name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', pts: 4, min: 14, reb: 1, ast: 3, fg: '1-5', fg3: '1-4' },
    ],
    recap:
      'Northern Cali edged Southern Cali 79-77 in a thrilling Season 3 All-Star Game at SacTown Arena in Sacramento. Playing with a target score finish in the 4th quarter, San Jose phenom Donald Hardy capped a legendary weekend by winning both the Dunk Contest and All-Star MVP, sinking the game-winner for the 79-77 victory.',
  },
  {
    season: 2,
    title: 'Season 2 All-Star Week',
    location: 'Fresno Arena – Fresno, CA',
    format: 'Traditional 4-Quarter Showcase',
    winner: 'Southern Cali All-Stars',
    winningScore: 78,
    losingScore: 68,
    loser: 'Northern Cali All-Stars',
    mvp: {
      player: 'Lamar Anderson',
      team: 'California Reds',
      teamId: 'california-reds',
      statLine: '22 PTS, 7 AST, 2 REB, 1 STL (6-9 FG, 4-5 3PT)',
      notes: 'California Reds PG Lamar Anderson was named All-Star MVP after putting up an efficient 22 points and 7 assists to propel Southern Cali over Northern Cali.',
    },
    dunkContestWinner: {
      player: 'Cameron Barkley',
      team: 'San Diego Sabrewolves',
      teamId: 'san-diego-sabrewolves',
      highlight: 'High-flying breakaway slam dunk for San Diego Sabrewolves.',
    },
    threePointWinner: {
      player: 'Kirk Tensley',
      team: 'Anaheim Admirals',
      teamId: 'anaheim-admirals',
      score: '24 / 30 in Final Round',
    },
    sideGame: {
      title: 'Rookies (S2) vs. Sophomores (S1)',
      winner: 'Season 1 Sophomores',
      winnerScore: 73,
      loser: 'Season 2 Rookies',
      loserScore: 57,
      playerOfTheGame: 'A.J. Hinton (Sophomores)',
      potgStats: '17 PTS, 2 REB, 2 AST, 8-17 FG',
      details: 'In the Season 2 Rising Stars exhibition showcase, Season 1 Sophomores defeated Season 2 Rookies 73-57 led by A.J. Hinton (17 PTS) and Dorell Kabal (15 PTS, 13 REB double-double).',
      team1Name: 'Season 1 Sophomores',
      team1Roster: [
        { name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', min: 24, pts: 17, reb: 2, ast: 2, stl: 1, blk: 0, fg: '8-17', fg3: '0-0' },
        { name: 'D. Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', min: 23, pts: 15, reb: 13, ast: 0, stl: 2, blk: 0, fg: '6-7', fg3: '1-1' },
        { name: 'L. Anderson', team: 'California Reds', teamId: 'california-reds', min: 27, pts: 14, reb: 1, ast: 7, stl: 2, blk: 0, fg: '4-11', fg3: '1-5' },
        { name: 'R. Gambino', team: 'San Diego Strykers', teamId: 'san-diego-strykers', min: 12, pts: 12, reb: 0, ast: 0, stl: 1, blk: 0, fg: '5-6', fg3: '2-2' },
        { name: 'D. Gray', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', min: 25, pts: 5, reb: 4, ast: 0, stl: 0, blk: 0, fg: '2-2', fg3: '1-1' },
        { name: 'A. Pognotti', team: 'San Diego Strykers', teamId: 'san-diego-strykers', min: 9, pts: 4, reb: 4, ast: 0, stl: 0, blk: 2, fg: '1-1', fg3: '0-0' },
        { name: 'M. Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 26, pts: 3, reb: 6, ast: 2, stl: 1, blk: 3, fg: '1-4', fg3: '0-3' },
        { name: 'J. McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 14, pts: 3, reb: 0, ast: 1, stl: 1, blk: 0, fg: '1-3', fg3: '0-0' },
        { name: 'J. Bowen', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', min: 3, pts: 0, reb: 2, ast: 0, stl: 0, blk: 0, fg: '0-0', fg3: '0-0' },
      ],
      team2Name: 'Season 2 Rookies',
      team2Roster: [
        { name: 'Andor Marai', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', min: 22, pts: 10, reb: 3, ast: 1, stl: 0, blk: 1, fg: '5-11', fg3: '0-2' },
        { name: 'G. Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', min: 23, pts: 9, reb: 0, ast: 3, stl: 1, blk: 0, fg: '3-5', fg3: '3-4' },
        { name: 'R. Jamison', team: 'California Reds', teamId: 'california-reds', min: 11, pts: 8, reb: 0, ast: 0, stl: 0, blk: 0, fg: '3-6', fg3: '1-3' },
        { name: 'C. Costa', team: 'Oakland Renegades', teamId: 'oakland-renegades', min: 21, pts: 7, reb: 2, ast: 3, stl: 0, blk: 0, fg: '3-5', fg3: '1-2' },
        { name: 'D. Rodman', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 14, pts: 5, reb: 2, ast: 2, stl: 2, blk: 1, fg: '2-7', fg3: '1-2' },
        { name: 'P. Martin Jr.', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', min: 23, pts: 4, reb: 2, ast: 0, stl: 0, blk: 1, fg: '2-6', fg3: '0-1' },
        { name: 'W. Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', min: 17, pts: 4, reb: 2, ast: 2, stl: 1, blk: 0, fg: '2-4', fg3: '0-1' },
        { name: 'J. Young', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', min: 14, pts: 3, reb: 1, ast: 2, stl: 2, blk: 0, fg: '1-1', fg3: '0-0' },
        { name: 'D. Garnett', team: 'San Francisco Knights', teamId: 'san-francisco-knights', min: 12, pts: 2, reb: 4, ast: 1, stl: 1, blk: 1, fg: '1-3', fg3: '0-0' },
      ],
    },
    norCalRoster: [
      { name: 'D. Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', min: 20, pts: 22, reb: 10, ast: 0, stl: 0, blk: 4, fg: '10-10', fg3: '1-1' },
      { name: 'A. Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', min: 27, pts: 15, reb: 0, ast: 3, stl: 0, blk: 0, fg: '6-14', fg3: '3-6' },
      { name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', min: 28, pts: 10, reb: 2, ast: 4, stl: 3, blk: 0, fg: '3-8', fg3: '0-0' },
      { name: 'J. Dean', team: 'California Reds', teamId: 'california-reds', min: 22, pts: 6, reb: 0, ast: 0, stl: 0, blk: 0, fg: '1-4', fg3: '0-0' },
      { name: 'J. Parks', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', min: 8, pts: 6, reb: 0, ast: 1, stl: 1, blk: 0, fg: '2-3', fg3: '0-0' },
      { name: 'C. Barkley', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', min: 13, pts: 4, reb: 4, ast: 1, stl: 0, blk: 2, fg: '1-2', fg3: '0-0' },
      { name: 'G. Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', min: 14, pts: 3, reb: 1, ast: 2, stl: 0, blk: 0, fg: '1-4', fg3: '0-3' },
      { name: 'J. Galloway', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', min: 25, pts: 2, reb: 6, ast: 1, stl: 1, blk: 1, fg: '1-3', fg3: '0-0' },
      { name: 'E. Hackett', team: 'San Francisco Knights', teamId: 'san-francisco-knights', min: 8, pts: 0, reb: 1, ast: 0, stl: 0, blk: 1, fg: '0-0', fg3: '0-0' },
    ],
    soCalRoster: [
      { name: 'L. Anderson', team: 'California Reds', teamId: 'california-reds', min: 23, pts: 22, reb: 2, ast: 7, stl: 1, blk: 0, fg: '6-9', fg3: '4-5' },
      { name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', min: 27, pts: 19, reb: 6, ast: 0, stl: 1, blk: 0, fg: '6-15', fg3: '1-3' },
      { name: 'R. Gambino', team: 'San Diego Strykers', teamId: 'san-diego-strykers', min: 14, pts: 9, reb: 3, ast: 2, stl: 0, blk: 1, fg: '3-14', fg3: '1-5' },
      { name: 'D. Rodman', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 25, pts: 7, reb: 4, ast: 0, stl: 3, blk: 0, fg: '2-3', fg3: '0-0' },
      { name: 'A. Marai', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', min: 14, pts: 6, reb: 0, ast: 1, stl: 1, blk: 3, fg: '3-4', fg3: '0-0' },
      { name: 'D. Gray', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', min: 27, pts: 5, reb: 2, ast: 3, stl: 1, blk: 0, fg: '2-4', fg3: '1-2' },
      { name: 'J. Moody', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 8, pts: 4, reb: 2, ast: 1, stl: 1, blk: 0, fg: '2-2', fg3: '0-0' },
      { name: 'M. Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', min: 20, pts: 2, reb: 5, ast: 1, stl: 2, blk: 1, fg: '1-2', fg3: '0-0' },
      { name: 'R. Martin Jr.', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', min: 2, pts: 2, reb: 0, ast: 0, stl: 0, blk: 0, fg: '1-1', fg3: '0-0' },
    ],
    recap:
      'Season 2 All-Star Week ended with Southern Cali defeating Northern Cali 78-68. California Reds PG Lamar Anderson was named All-Star MVP after putting up 22 points and 7 assists. For Northern Cali, Dorell Kabal posted a perfect 10-for-10 shooting performance for 22 points and 10 rebounds.',
  },
  {
    season: 1,
    title: 'Season 1 All-Star Game',
    location: 'Oakland Arena – Oakland, CA',
    format: 'Traditional 4-Quarter Showcase',
    winner: 'Northern Cali All-Stars',
    winningScore: 85,
    losingScore: 73,
    loser: 'Southern Cali All-Stars',
    mvp: {
      player: 'Dorell Kabal',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      statLine: 'Dunk Contest Champ & All-Star Dominance',
      notes: 'Dorell Kabal swept the Slam Dunk Contest and led Northern Cali to victory in front of the Oakland crowd.',
    },
    dunkContestWinner: {
      player: 'Dorell Kabal',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      highlight: 'Slam Dunk Contest Champion for Sacramento.',
    },
    threePointWinner: {
      player: 'Lamar Anderson',
      team: 'California Reds',
      teamId: 'california-reds',
      score: 'Winner for California Reds',
    },
    sideGame: {
      title: 'USA vs. World | Season 1 All-Star Weekend',
      winner: 'USA',
      winnerScore: 88,
      loser: 'World',
      loserScore: 86,
      playerOfTheGame: 'Alonzo Reece',
      potgStats: '22 PTS, 6 AST, 1 STL, Game-Winner with 7.2s remaining',
      details: 'Player of the Game Alonzo Reece hits the game-winning bucket with 7.2 left to play. Stats: 22pts, 6 ast, 1 steal in USA’s 88-86 win.',
    },
    norCalRoster: [
      { name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', pts: 22, reb: 10, blk: 4 },
      { name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', pts: 18, ast: 6 },
      { name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', pts: 16, ast: 5 },
      { name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', pts: 15, reb: 4 },
      { name: 'Josh Parks', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', pts: 14, reb: 5 },
    ],
    soCalRoster: [
      { name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', pts: 20, reb: 8 },
      { name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', pts: 18, ast: 4 },
      { name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', pts: 15, fg3: '3-6' },
      { name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', pts: 12, reb: 6 },
      { name: 'DeAnte Gray', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', pts: 8, ast: 3 },
    ],
    recap:
      'Season 1 All-Star Game was hosted at Oakland Arena in Oakland, CA. Northern Cali (85) defeated Southern Cali (73). Lamar Anderson (CAL) won the 3pt Contest and Dorell Kabal (SAC) won the Dunk Contest. In the USA vs. World showcase, USA defeated World 88-86 as Alonzo Reece hit the game-winning bucket with 7.2 seconds left to play.',
  },
];
