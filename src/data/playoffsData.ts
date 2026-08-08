import { PlayoffGame } from '../types';

export interface SeasonPlayoffInfo {
  season: 1 | 2 | 3;
  title: string;
  champion: string;
  runnerUp: string;
  finalsMvp: string;
  finalsScore: string;
  narrative: string;
  quarterfinals: PlayoffGame[];
  semifinals?: PlayoffGame[];
  finals: PlayoffGame;
}

export const PLAYOFF_HISTORY: SeasonPlayoffInfo[] = [
  {
    season: 1,
    title: 'Season 1 Playoffs',
    champion: 'Sacramento Stallions',
    runnerUp: 'Golden State Enterprise',
    finalsMvp: 'Dorell Kabal (Sacramento Stallions)',
    finalsScore: 'Sacramento Stallions 86, Golden State Enterprise 81',
    narrative: 'The Sacramento Stallions converted their league-best 17-5 regular season record into a dominant postseason run, capped by an 86-81 victory in the CCH Finals behind MVP center Dorell Kabal.',
    quarterfinals: [
      { round: 'Quarterfinals', team1: 'Sacramento Stallions', seed1: 1, score1: 91, team2: 'Anaheim Admirals', seed2: 8, score2: 79, winner: 'Sacramento Stallions', notes: 'Kabal dominated inside with 30 PTS, outscoring the Admirals 48-28 in the paint.' },
      { round: 'Quarterfinals', team1: 'San Francisco Knights', seed1: 4, score1: 93, team2: 'San Diego Sabrewolves', seed2: 5, score2: 82, winner: 'San Francisco Knights', notes: 'Munir Kassa exploded for 32 PTS on 12-of-18 shooting.' },
      { round: 'Quarterfinals', team1: 'Los Angeles Dynamics', seed1: 2, score1: 88, team2: 'California Reds', seed2: 7, score2: 76, winner: 'Los Angeles Dynamics', notes: 'Jack McMichael Jr. dropped 21 to send the Reds home with a 10-game losing streak.' },
      { round: 'Quarterfinals', team1: 'Golden State Enterprise', seed1: 6, score1: 94, team2: 'Long Beach Vipers', seed2: 3, score2: 90, winner: 'Golden State Enterprise', notes: 'First-ever CCH playoff game. Enterprise upset #3 seed Vipers behind Howie Carney (24 PTS) & Adin Durmanenko (21 PTS).', recapArticleId: 's1-playoff-first-game-gse-lb' },
    ],
    semifinals: [
      { round: 'Semifinals', team1: 'Sacramento Stallions', seed1: 1, score1: 99, team2: 'San Francisco Knights', seed2: 4, score2: 96, winner: 'Sacramento Stallions', notes: 'Incredible high-scoring shootout where Sacramento shot 72% FG. Munir Kassa dropped 33 PTS for SF.' },
      { round: 'Semifinals', team1: 'Golden State Enterprise', seed1: 6, score1: 85, team2: 'Los Angeles Dynamics', seed2: 2, score2: 82, winner: 'Golden State Enterprise', notes: 'GS reached the Finals behind Howie Carney (20 PTS) and DeAnte Gray (13 REB, 8 AST). Jack McMichael Jr. scored 28 for LA.' },
    ],
    finals: { round: 'Season 1 Finals', team1: 'Sacramento Stallions', seed1: 1, score1: 86, team2: 'Golden State Enterprise', seed2: 6, score2: 81, winner: 'Sacramento Stallions', notes: 'Dorell Kabal secured the championship and was crowned Finals MVP.' },
  },
  {
    season: 2,
    title: 'Season 2 Playoffs',
    champion: 'California Reds',
    runnerUp: 'Sacramento Stallions',
    finalsMvp: 'Lamar Anderson (California Reds)',
    finalsScore: 'California Reds 77, Sacramento Stallions 71',
    narrative: 'Following a trade for Lamar Anderson, the California Reds established a league-best 18-4 record and defeated the defending champion Stallions 77-71 in the Finals.',
    quarterfinals: [
      { round: 'Quarterfinals (South)', team1: 'California Reds', seed1: 1, score1: 83, team2: 'Anaheim Admirals', seed2: 4, score2: 63, winner: 'California Reds', notes: 'Dennis Rodman dominated with 17 PTS, 8 REB, 3 BLK on 6-7 FG. K. Tinsley scored 30 for Anaheim.' },
      { round: 'Quarterfinals (South)', team1: 'San Diego Strykers', seed1: 2, score1: 86, team2: 'San Diego Sabrewolves', seed2: 3, score2: 79, winner: 'San Diego Strykers', notes: 'Ray Gambino dished out 9 AST with 23 PTS, while Kirk Barnes dropped 29 for Sabrewolves.' },
      { round: 'Quarterfinals (North)', team1: 'Sacramento Stallions', seed1: 1, score1: 69, team2: 'San Francisco Knights', seed2: 4, score2: 57, winner: 'Sacramento Stallions', notes: 'George Madsen hit 7 three-pointers for 27 PTS as Sacramento forced 12 turnovers.' },
      { round: 'Quarterfinals (North)', team1: 'Oakland Renegades', seed1: 2, score1: 65, team2: 'San Jose Tigersharks', seed2: 3, score2: 51, winner: 'Oakland Renegades', notes: 'Defensive battle where Oakland recorded 11 steals and 7 blocks as a team.' },
    ],
    semifinals: [
      { round: 'Southern Cali Title', team1: 'California Reds', seed1: 1, score1: 70, team2: 'San Diego Strykers', seed2: 2, score2: 61, winner: 'California Reds', notes: 'Lamar Anderson put up 27 PTS and 6 AST (5-7 3PT) to lead California to the Finals.' },
      { round: 'Northern Cali Title', team1: 'Sacramento Stallions', seed1: 1, score1: 79, team2: 'Oakland Renegades', seed2: 2, score2: 76, winner: 'Sacramento Stallions', notes: 'George Madsen put up 27 PTS and 5 AST as Sacramento edged Oakland in a nail-biter.' },
    ],
    finals: { round: 'Season 2 Finals', team1: 'California Reds', seed1: 1, score1: 77, team2: 'Sacramento Stallions', seed2: 1, score2: 71, winner: 'California Reds', notes: 'Lamar Anderson solidified his legacy with a 26-point Finals MVP masterpiece, ending the Stallions’ dynasty.' },
  },
  {
    season: 3,
    title: 'Season 3 Playoffs',
    champion: 'Sacramento Stallions',
    runnerUp: 'Fresno Mad Dogs',
    finalsMvp: 'Dorell Kabal (Sacramento Stallions)',
    finalsScore: 'Sacramento Stallions 87, Fresno Mad Dogs 72',
    narrative: 'Behind a masterclass 25-point, 11-rebound retirement performance from Finals MVP Dorell Kabal and 29 points from George Madsen, the #2 seed Sacramento Stallions defeated the Cinderella #8 seed Fresno Mad Dogs 87-72 to claim their second CCH Championship in three seasons.',
    quarterfinals: [
      { round: 'Quarterfinals', team1: 'Fresno Mad Dogs', seed1: 8, score1: 90, team2: 'California Reds', seed2: 1, score2: 86, winner: 'Fresno Mad Dogs', notes: 'Fresno physically dominated the interior, outscoring the Reds 50-40 in the paint.' },
      { round: 'Quarterfinals', team1: 'Sacramento Stallions', seed1: 2, score1: 80, team2: 'San Francisco Knights', seed2: 7, score2: 79, winner: 'Sacramento Stallions', notes: 'Sacramento rallied from a 10-point first-half deficit to survive.' },
      { round: 'Quarterfinals', team1: 'San Diego Strykers', seed1: 4, score1: 80, team2: 'Oakland Renegades', seed2: 5, score2: 79, winner: 'San Diego Strykers', notes: 'Ray Gambino erupted for 33 PTS, and a clutch free throw with under a minute left sealed the win.' },
      { round: 'Quarterfinals', team1: 'San Diego Sabrewolves', seed1: 6, score1: 86, team2: 'Los Angeles Dynamics', seed2: 3, score2: 79, winner: 'San Diego Sabrewolves', notes: 'Kirk Barnes scored 25 PTS in a wire-to-wire victory.' },
    ],
    semifinals: [
      { round: 'Semifinals', team1: 'Fresno Mad Dogs', seed1: 8, score1: 80, team2: 'San Diego Strykers', seed2: 4, score2: 75, winner: 'Fresno Mad Dogs', notes: 'The Cinderella run lived on behind a legendary 27-point game from Josh Parks.' },
      { round: 'Semifinals', team1: 'Sacramento Stallions', seed1: 2, score1: 88, team2: 'San Diego Sabrewolves', seed2: 6, score2: 72, winner: 'Sacramento Stallions', notes: 'The Stallions put on a shooting clinic, hitting 12-of-17 three-pointers.' },
    ],
    finals: { round: 'Season 3 Finals', team1: 'Sacramento Stallions', seed1: 2, score1: 87, team2: 'Fresno Mad Dogs', seed2: 8, score2: 72, winner: 'Sacramento Stallions', notes: 'Dorell Kabal capped his legendary career with Finals MVP honors (25 PTS, 11 REB, 3 BLK, 78.6% FG) alongside George Madsen (29 PTS) to seal Sacramento’s second CCH Championship.' },
  },
];

export interface PlayoffStatLeader {
  category: string;
  player: string;
  team: string;
  stat: string;
  details?: string;
}

export interface PlayoffGameDetail {
  id: string;
  matchup: string;
  round: string;
  score: string;
  winner: string;
  summary: string;
  topPerformers: { name: string; stat: string }[];
}

export interface PlayoffStandoutProfile {
  name: string;
  team: string;
  teamId: string;
  position: string;
  ovr: number;
  role: string;
  statsHighlight: string;
  description: string;
}

export interface PlayoffSeasonStats {
  season: 1 | 2 | 3;
  totalsLeaders: PlayoffStatLeader[];
  averagesLeaders: PlayoffStatLeader[];
  singleGameHighs: {
    category: string;
    performances: { stat: string; player: string; matchup: string }[];
  }[];
  detailedGames: PlayoffGameDetail[];
  standoutProfiles: PlayoffStandoutProfile[];
}

export const S1_PLAYOFF_STATS: PlayoffSeasonStats = {
  season: 1,
  totalsLeaders: [
    { category: 'Points', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '74 PTS', details: '3 GP (30 PTS in QF, 22 PTS in Semis, 22 PTS in Finals)' },
    { category: 'Rebounds', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '29 REB', details: '3 GP, 9.7 RPG average (12 REB in Finals)' },
    { category: 'Assists', player: 'Munir Kassa / Jack McMichael Jr.', team: 'San Francisco Knights / Los Angeles Dynamics', stat: '16 AST', details: '8.0 APG average across 2 postseason games' },
    { category: 'Blocks', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '6 BLK', details: '3 BLK in Finals victory vs Enterprise' },
    { category: 'Steals', player: 'DeAnte Gray', team: 'Golden State Enterprise', stat: '6 STL', details: '2.0 SPG defense anchor for GS' },
    { category: '3-Pointers Made', player: 'Howie Carney', team: 'Golden State Enterprise', stat: '9 3PM', details: '4 3PM vs Long Beach Vipers in QF' },
    { category: 'Field Goals Made', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '31 FGM', details: 'Dominant 68.8% postseason shooting' },
  ],
  averagesLeaders: [
    { category: 'Points per Game', player: 'Munir Kassa', team: 'San Francisco Knights', stat: '32.5 PPG', details: '33 PTS vs SAC, 32 PTS vs SAB (65.0% FG)' },
    { category: 'Rebounds per Game', player: 'DeAnte Gray', team: 'Golden State Enterprise', stat: '10.5 RPG', details: '13 REB vs LA Dynamics in Semifinals' },
    { category: 'Assists per Game', player: 'Munir Kassa / Ray Gambino', team: 'San Francisco Knights / San Diego Strykers', stat: '8.0 APG', details: 'Orchestrated Knights offense with only 1 team TO vs SAC' },
    { category: 'Steals per Game', player: 'DeAnte Gray', team: 'Golden State Enterprise', stat: '3.0 SPG', details: 'Perimeter pressure specialist' },
    { category: 'Blocks per Game', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '2.0 BPG', details: 'Anchor of Stallions Season 1 Championship defense' },
    { category: 'Field Goal %', player: 'Coty Barry Carroll', team: 'Sacramento Stallions', stat: '75.0% FG', details: '9-11 FG (27 PTS) in Finals vs Enterprise' },
    { category: '3-Point %', player: 'Lamar Anderson', team: 'California Reds', stat: '85.7% 3PT', details: '6-7 3PT vs LA Dynamics in Quarterfinals' },
  ],
  singleGameHighs: [
    {
      category: 'Leading Scorers',
      performances: [
        { stat: '33 PTS', player: 'Munir Kassa (SF)', matchup: 'vs. Sacramento Stallions (14-23 FG, 4-7 3PT, 8 AST)' },
        { stat: '32 PTS', player: 'Munir Kassa (SF)', matchup: 'vs. San Diego Sabrewolves (12-18 FG, 3-6 3PT, 5 REB)' },
        { stat: '30 PTS', player: 'Dorell Kabal (SAC)', matchup: 'vs. Anaheim Admirals (14-19 FG, 9 REB, 2 AST)' },
        { stat: '28 PTS', player: 'Jack McMichael Jr. (LA)', matchup: 'vs. Golden State Enterprise (10-19 FG, 5-8 3PT, 8 AST)' },
        { stat: '28 PTS', player: 'Lamar Anderson (CAL)', matchup: 'vs. Los Angeles Dynamics (11-15 FG, 6-7 3PT, 9 AST)' },
        { stat: '27 PTS', player: 'Coty Barry Carroll (SAC)', matchup: 'vs. Golden State Enterprise (9-11 FG, 3-4 3PT, 5 AST)' },
      ],
    },
    {
      category: 'Top Rebounders',
      performances: [
        { stat: '13 REB', player: 'DeAnte Gray (GS)', matchup: 'vs. Los Angeles Dynamics (Added 6 PTS & 8 AST)' },
        { stat: '12 REB', player: 'Dorell Kabal (SAC)', matchup: 'vs. Golden State Enterprise (Added 22 PTS & 3 BLK)' },
        { stat: '10 REB', player: 'Andre Creek (SD)', matchup: 'vs. San Francisco Knights (Added 17 PTS)' },
        { stat: '10 REB', player: 'Mo Alexander (LA)', matchup: 'vs. Golden State Enterprise (Added 6 PTS)' },
        { stat: '9 REB', player: 'Dorell Kabal (SAC)', matchup: 'vs. Anaheim Admirals' },
      ],
    },
    {
      category: 'Top Playmakers & Defenders',
      performances: [
        { stat: '9 AST', player: 'Lamar Anderson (CAL)', matchup: 'vs. Los Angeles Dynamics' },
        { stat: '8 AST', player: 'Munir Kassa (SF)', matchup: 'vs. Sacramento Stallions' },
        { stat: '8 AST', player: 'Jack McMichael Jr. (LA)', matchup: 'vs. Golden State Enterprise' },
        { stat: '8 AST', player: 'DeAnte Gray (GS)', matchup: 'vs. Los Angeles Dynamics' },
        { stat: '8 AST', player: 'Josh Parks (LB)', matchup: 'vs. Golden State Enterprise' },
        { stat: '3 BLK', player: 'Dorell Kabal (SAC)', matchup: 'vs. Golden State Enterprise (Finals)' },
      ],
    },
  ],
  detailedGames: [
    {
      id: 'g-s1-sac-gse-finals',
      matchup: 'Sacramento Stallions 86, Golden State Enterprise 81',
      round: 'Season 1 CCH Finals',
      score: '86 - 81',
      winner: 'Sacramento Stallions',
      summary: 'The Sacramento Stallions capped off their 17-5 regular season by claiming the inaugural CCH Championship. Dorell Kabal earned Finals MVP with 22 PTS, 12 REB, 3 BLK, and 0 turnovers. Coty Barry Carroll was red hot with 27 PTS on 9-11 shooting (3-4 3PT) and 5 AST.',
      topPerformers: [
        { name: 'Coty Barry Carroll (SAC)', stat: '27 PTS (9-11 FG, 3-4 3PT), 5 AST' },
        { name: 'Dorell Kabal (SAC)', stat: '22 PTS, 12 REB, 3 BLK, Finals MVP' },
        { name: 'DeAnte Gray (GS)', stat: '18 PTS, 8 REB, 2 STL' },
      ],
    },
    {
      id: 'g-s1-sac-sf-semis',
      matchup: 'Sacramento Stallions 99, San Francisco Knights 96',
      round: 'Semifinals',
      score: '99 - 96',
      winner: 'Sacramento Stallions',
      summary: 'An incredible high-scoring shootout. Sacramento shot an astonishing 72% from the field (39-54 FG) with 44 points in the paint. Munir Kassa was unstoppable for SF with 33 PTS (14-23 FG, 4-7 3PT, 8 AST). San Francisco committed only 1 turnover as a team but could not stop Sacramento’s offense.',
      topPerformers: [
        { name: 'Munir Kassa (SF)', stat: '33 PTS (14-23 FG, 4-7 3PT), 8 AST' },
        { name: 'Dorell Kabal (SAC)', stat: '22 PTS, 8 REB, 2 BLK' },
        { name: 'Coty Barry Carroll (SAC)', stat: '20 PTS, 4 AST' },
      ],
    },
    {
      id: 'g-s1-gse-lad-semis',
      matchup: 'Golden State Enterprise 85, LA Dynamics 82',
      round: 'Semifinals',
      score: '85 - 82',
      winner: 'Golden State Enterprise',
      summary: 'Golden State reached the Finals behind timely backcourt shot-making and DeAnte Gray’s all-around game (13 REB, 8 AST, 6 PTS). Jack McMichael Jr. carried the Dynamics with 28 PTS and 8 AST (5-8 3PT) in a nail-biter.',
      topPerformers: [
        { name: 'Jack McMichael Jr. (LA)', stat: '28 PTS (10-19 FG, 5-8 3PT), 8 AST' },
        { name: 'Howie Carney (GS)', stat: '20 PTS (4-7 3PT), 5 AST' },
        { name: 'DeAnte Gray (GS)', stat: '13 REB, 8 AST, 6 PTS' },
      ],
    },
    {
      id: 'g-s1-sac-adm-qf',
      matchup: 'Sacramento Stallions 91, Anaheim Admirals 79',
      round: 'Quarterfinals',
      score: '91 - 79',
      winner: 'Sacramento Stallions',
      summary: 'The #1 seed Stallions dominated Anaheim by shooting 68% from the field. Dorell Kabal monstered the paint with 30 PTS on 14-19 shooting with 9 REB and 2 AST.',
      topPerformers: [
        { name: 'Dorell Kabal (SAC)', stat: '30 PTS (14-19 FG), 9 REB, 2 AST' },
        { name: 'K. Tinsley (ANA)', stat: '22 PTS, 4 AST' },
      ],
    },
    {
      id: 'g-s1-lad-cal-qf',
      matchup: 'LA Dynamics 88, California Reds 76',
      round: 'Quarterfinals',
      score: '88 - 76',
      winner: 'LA Dynamics',
      summary: 'Jack McMichael Jr. (21 PTS) and Mo Alexander (10 REB) powered the Dynamics past California. Lamar Anderson put up a heroic performance for the Reds with 28 PTS (11-15 FG, 6-7 3PT, 9 AST).',
      topPerformers: [
        { name: 'Lamar Anderson (CAL)', stat: '28 PTS (11-15 FG, 6-7 3PT), 9 AST' },
        { name: 'Jack McMichael Jr. (LA)', stat: '21 PTS, 6 AST' },
        { name: 'Mo Alexander (LA)', stat: '10 REB, 6 PTS' },
      ],
    },
    {
      id: 'g-s1-sf-sab-qf',
      matchup: 'San Francisco Knights 93, San Diego Sabrewolves 82',
      round: 'Quarterfinals',
      score: '93 - 82',
      winner: 'San Francisco Knights',
      summary: '21-year-old superstar Munir Kassa exploded for 32 PTS on 12-18 FG (3-6 3PT) with 5 REB as San Francisco pulled away in the 4th quarter. Andre Creek led Sabrewolves with a 17 PTS, 10 REB double-double.',
      topPerformers: [
        { name: 'Munir Kassa (SF)', stat: '32 PTS (12-18 FG, 3-6 3PT), 5 REB' },
        { name: 'Andre Creek (SD)', stat: '17 PTS, 10 REB' },
      ],
    },
    {
      id: 'g-s1-gse-lbc-qf',
      matchup: 'Golden State Enterprise 94, Long Beach Vipers 90',
      round: 'Quarterfinals',
      score: '94 - 90',
      winner: 'Golden State Enterprise',
      summary: "In the first-ever playoff game in league history, the Golden State Enterprise (12-11) pulled off a minor upset over the higher-seeded Long Beach Vipers (13-10). The Enterprise rode a balanced scoring onslaught, with Howie Carney leading the way with 24 points on a scorching 4-of-6 shooting display from beyond the arc. Adin Durmanenko provided valuable support, tallying 21 points and hauling down five rebounds, while Melvin Cassell chipped in 13 points and four boards. For the Vipers, Eugene Simon turned in a solid performance with 19 points and eight rebounds, but lacked sufficient support from his teammates. A.J. Hinton scored 18 points, while Randall Reynolds contributed 11 points off the bench, but it wasn't enough to overcome the Enterprise's offensive barrage.",
      topPerformers: [
        { name: 'Howie Carney (GS)', stat: '24 PTS (4-6 3PT)' },
        { name: 'Adin Durmanenko (GS)', stat: '21 PTS, 5 REB' },
        { name: 'Eugene Simon (LB)', stat: '19 PTS, 8 REB' },
        { name: 'A.J. Hinton (LB)', stat: '18 PTS' },
        { name: 'Melvin Cassell (GS)', stat: '13 PTS, 4 REB' },
        { name: 'Randall Reynolds (LB)', stat: '11 PTS (Off Bench)' },
      ],
    },
  ],
  standoutProfiles: [
    {
      name: 'Munir Kassa',
      team: 'San Francisco Knights',
      teamId: 'san-francisco-knights',
      position: 'Point Guard (PG)',
      ovr: 88,
      role: 'Postseason Scoring & Playmaking Genius',
      statsHighlight: '32.5 PPG | 8.0 APG | 33 PTS vs SAC | 32 PTS vs SAB | 65% FG',
      description: 'The 21-year-old phenom turned in one of the most remarkable 2-game playoff scoring stretches in CCH history, dropping 33 against champion Sacramento and averaging 8.0 APG.',
    },
    {
      name: 'Dorell Kabal',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      position: 'Center (C)',
      ovr: 92,
      role: 'Finals MVP & Interior Powerhouse',
      statsHighlight: '24.7 PPG | 9.7 RPG | 2.0 BPG | 22 PTS & 12 REB in Finals',
      description: 'Dominating at both ends of the floor, Kabal led Sacramento to the inaugural CCH title, anchoring the defense and dropping 30 in the Quarterfinals.',
    },
    {
      name: 'Coty Barry Carroll',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      position: 'Guard (G)',
      ovr: 85,
      role: 'Championship Efficiency Sniper',
      statsHighlight: '23.5 PPG | 27 PTS in Finals (9-11 FG) | 75.0% Postseason FG',
      description: 'Coty Barry Carroll delivered a masterclass in efficiency, scoring 27 points on 9-of-11 shooting in the CCH Finals to seal Sacramento’s championship.',
    },
    {
      name: 'Jack McMichael Jr.',
      team: 'LA Dynamics',
      teamId: 'la-dynamics',
      position: 'Point Guard (PG)',
      ovr: 87,
      role: 'Backcourt Engine & Perimeter Leader',
      statsHighlight: '24.5 PPG | 8.0 APG | 28 PTS & 5 3PM vs Enterprise',
      description: 'The heartbeat of LA Dynamics, McMichael posted explosive all-around numbers with 28 points, 8 assists, and 5 three-pointers in the Semifinals.',
    },
    {
      name: 'DeAnte Gray',
      team: 'Golden State Enterprise',
      teamId: 'golden-state-enterprise',
      position: 'Forward / Center',
      ovr: 86,
      role: 'Rebounding & Defensive Playmaker',
      statsHighlight: '10.5 RPG | 3.0 SPG | 13 REB & 8 AST vs LA Dynamics',
      description: 'Engineered Golden State’s surprise run to the Finals, anchoring their defense with 13 rebounds and 8 assists in their Semifinal upset victory.',
    },
  ],
};

export const S2_PLAYOFF_STATS: PlayoffSeasonStats = {
  season: 2,
  totalsLeaders: [
    { category: 'Points', player: 'Lamar Anderson', team: 'California Reds', stat: '73 PTS', details: '3 GP (26 PTS in Finals, 27 PTS in Semis)' },
    { category: 'Rebounds', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '25 REB', details: '3 GP, 8.3 RPG average' },
    { category: 'Assists', player: 'Ray Gambino', team: 'San Diego Strykers', stat: '18 AST', details: '2 GP, 9.0 APG average' },
    { category: 'Blocks', player: 'Dorell Kabal / Dennis Rodman', team: 'Sacramento Stallions / California Reds', stat: '6 BLK', details: 'Interior defensive anchors' },
    { category: 'Steals', player: 'C. Cook / Lamar Anderson', team: 'Sacramento Stallions / California Reds', stat: '7 STL', details: 'Perimeter pressure leaders' },
    { category: '3-Pointers Made', player: 'George Madsen', team: 'Sacramento Stallions', stat: '13 3PM', details: '7 3PM in Quarterfinals vs SF' },
    { category: 'Bench Points', player: 'California Reds Bench', team: 'California Reds', stat: '26 PTS', details: 'Key factor in Season 2 Finals victory' },
    { category: 'Field Goals Made', player: 'Lamar Anderson', team: 'California Reds', stat: '26 FGM', details: 'Led postseason scoring engine' },
  ],
  averagesLeaders: [
    { category: 'Points per Game', player: 'K. Tinsley', team: 'Anaheim Admirals', stat: '30.0 PPG', details: '30 PTS on 10-15 FG (4-4 3PT) vs CAL' },
    { category: 'Rebounds per Game', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '8.3 RPG', details: 'Interior rebounding force' },
    { category: 'Assists per Game', player: 'Ray Gambino', team: 'San Diego Strykers', stat: '9.0 APG', details: 'Dished out 9 AST vs Sabrewolves' },
    { category: 'Steals per Game', player: 'C. Cook', team: 'Sacramento Stallions', stat: '2.3 SPG', details: '5 steals vs Reds in Finals' },
    { category: 'Blocks per Game', player: 'Dennis Rodman', team: 'California Reds', stat: '2.0 BPG', details: '3 BLK vs Anaheim Admirals' },
    { category: 'Field Goal %', player: 'Dennis Rodman', team: 'California Reds', stat: '85.7% FG', details: '6-7 FG in Quarterfinals' },
    { category: '3-Point %', player: 'K. Tinsley', team: 'Anaheim Admirals', stat: '100% 3PT', details: '4-4 3PT in Quarterfinals' },
    { category: 'Free Throws Made / G', player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '5.0 FTM', details: 'SAB scoring leader' },
  ],
  singleGameHighs: [
    {
      category: 'Leading Scorers',
      performances: [
        { stat: '30 PTS', player: 'K. Tinsley (ANA)', matchup: 'vs. California Reds (10-15 FG, 4-4 3PT)' },
        { stat: '29 PTS', player: 'Kirk Barnes (SD)', matchup: 'vs. San Diego Strykers (12-20 FG)' },
        { stat: '27 PTS', player: 'Lamar Anderson (CAL)', matchup: 'vs. San Diego Strykers (9-14 FG, 5-7 3PT)' },
        { stat: '27 PTS', player: 'George Madsen (SAC)', matchup: 'vs. Oakland Renegades & vs. SF Knights' },
        { stat: '27 PTS', player: 'A.J. Hinton (SDS)', matchup: 'vs. Reds & vs. Sabrewolves' },
        { stat: '26 PTS', player: 'Lamar Anderson (CAL)', matchup: 'vs. Sacramento Stallions (Finals)' },
      ],
    },
    {
      category: 'Top Rebounders',
      performances: [
        { stat: '9 REB', player: 'Dorell Kabal (SAC)', matchup: 'vs. Oakland Renegades' },
        { stat: '8 REB', player: 'Dorell Kabal (SAC)', matchup: 'vs. California Reds (Finals)' },
        { stat: '8 REB', player: 'Dennis Rodman (CAL)', matchup: 'vs. Anaheim Admirals' },
        { stat: '8 REB', player: 'J.C. McMillan (OAK)', matchup: 'vs. Sacramento Stallions' },
        { stat: '7 REB', player: 'Adrian Pognotti (SF)', matchup: 'vs. Sacramento Stallions' },
        { stat: '7 REB', player: 'Ray Gambino (SD STRY)', matchup: 'vs. San Diego Sabrewolves' },
      ],
    },
    {
      category: 'Top Playmakers & Defenders',
      performances: [
        { stat: '9 AST', player: 'Ray Gambino (SD STRY)', matchup: 'vs. San Diego Sabrewolves' },
        { stat: '6 AST', player: 'Lamar Anderson (CAL)', matchup: 'vs. San Diego Strykers' },
        { stat: '5 AST', player: 'George Madsen (SAC)', matchup: 'vs. Oakland Renegades' },
        { stat: '5 STL', player: 'C. Cook (SAC)', matchup: 'vs. California Reds (Finals)' },
        { stat: '3 BLK', player: 'Dennis Rodman (CAL)', matchup: 'vs. Anaheim Admirals' },
        { stat: '3 BLK', player: 'Adrian Pognotti (SF)', matchup: 'vs. Sacramento Stallions' },
      ],
    },
  ],
  detailedGames: [
    {
      id: 'g-s2-cal-sac-finals',
      matchup: 'California Reds 77, Sacramento Stallions 71',
      round: 'Season 2 CCH Finals',
      score: '77 - 71',
      winner: 'California Reds',
      summary: "Lamar Anderson was a machine, scoring 26 points on 9-15 shooting. Despite getting outscored in the paint (30-28), California's bench (26 points) and second-chance points (11 vs 4) powered them to the title, ending Sacramento's dynasty.",
      topPerformers: [
        { name: 'Lamar Anderson (CAL)', stat: '26 PTS (9-15 FG), Finals MVP' },
        { name: 'Dorell Kabal (SAC)', stat: '14 PTS, 8 REB, 3 BLK' },
        { name: 'C. Cook (SAC)', stat: '5 STL' },
      ],
    },
    {
      id: 'g-s2-cal-sds-semis',
      matchup: 'California Reds 70, San Diego Strykers 61',
      round: 'Southern Cali Championship (Semifinals)',
      score: '70 - 61',
      winner: 'California Reds',
      summary: 'Lamar Anderson put up 27 points and 6 assists on 9-14 shooting (5-7 from three). A.J. Hinton put up 27 for San Diego, but the Reds pulled away in the 4th quarter.',
      topPerformers: [
        { name: 'Lamar Anderson (CAL)', stat: '27 PTS, 6 AST (5-7 3PT)' },
        { name: 'A.J. Hinton (SD Strykers)', stat: '27 PTS' },
      ],
    },
    {
      id: 'g-s2-sac-oak-semis',
      matchup: 'Sacramento Stallions 79, Oakland Renegades 76',
      round: 'Northern Cali Championship (Semifinals)',
      score: '79 - 76',
      winner: 'Sacramento Stallions',
      summary: 'George Madsen put up 27 points, 5 assists, and 2 steals, while Dorell Kabal added 9 points and 9 rebounds as Sacramento edged past Oakland in a dramatic finish.',
      topPerformers: [
        { name: 'George Madsen (SAC)', stat: '27 PTS, 5 AST, 2 STL' },
        { name: 'Dorell Kabal (SAC)', stat: '9 PTS, 9 REB' },
        { name: 'J.C. McMillan (OAK)', stat: '8 REB' },
      ],
    },
    {
      id: 'g-s2-cal-adm-qf',
      matchup: 'California Reds 83, Anaheim Admirals 63',
      round: 'Quarterfinals',
      score: '83 - 63',
      winner: 'California Reds',
      summary: 'The Reds demolished the Admirals 83-63 with 50 points in the paint. Dennis Rodman had a stat-sheet stuffing performance: 17 PTS, 8 REB, 2 AST, 2 STL, 3 BLK on 6-7 FG. K. Tinsley scored 30 for Anaheim.',
      topPerformers: [
        { name: 'K. Tinsley (ANA)', stat: '30 PTS (10-15 FG, 4-4 3PT)' },
        { name: 'Dennis Rodman (CAL)', stat: '17 PTS, 8 REB, 3 BLK (6-7 FG)' },
      ],
    },
    {
      id: 'g-s2-sac-sf-qf',
      matchup: 'Sacramento Stallions 69, San Francisco Knights 57',
      round: 'Quarterfinals',
      score: '69 - 57',
      winner: 'Sacramento Stallions',
      summary: 'George Madsen had a red-hot shooting night, going 7-10 from deep for 27 points on 15 attempts. Sacramento locked down SF defensively, forcing 12 turnovers.',
      topPerformers: [
        { name: 'George Madsen (SAC)', stat: '27 PTS (7-10 3PT)' },
        { name: 'Adrian Pognotti (SF)', stat: '7 REB, 3 BLK' },
      ],
    },
    {
      id: 'g-s2-sds-sab-qf',
      matchup: 'San Diego Strykers 86, San Diego Sabrewolves 79',
      round: 'Quarterfinals',
      score: '86 - 79',
      winner: 'San Diego Strykers',
      summary: 'The Strykers won a physical battle by converting 16-22 FTs and scoring 40 points in the paint. Ray Gambino dished out 9 assists with 23 points, while Kirk Barnes dropped 29 for Sabrewolves.',
      topPerformers: [
        { name: 'Kirk Barnes (SD Sabrewolves)', stat: '29 PTS (12-20 FG)' },
        { name: 'A.J. Hinton (SD Strykers)', stat: '27 PTS' },
        { name: 'Ray Gambino (SD Strykers)', stat: '23 PTS, 9 AST, 7 REB' },
      ],
    },
    {
      id: 'g-s2-oak-sjt-qf',
      matchup: 'Oakland Renegades 65, San Jose Tigersharks 51',
      round: 'Quarterfinals',
      score: '65 - 51',
      winner: 'Oakland Renegades',
      summary: 'Low-scoring defensive slug-fest. Oakland recorded 11 steals and 7 blocks as a team, led offensively by Alonzo Reece (16 PTS, 4 AST) and J. Webb III (15 PTS).',
      topPerformers: [
        { name: 'Alonzo Reece (OAK)', stat: '16 PTS, 4 AST' },
        { name: 'J. Webb III (OAK)', stat: '15 PTS' },
      ],
    },
  ],
  standoutProfiles: [
    {
      name: 'Lamar Anderson',
      team: 'California Reds',
      teamId: 'california-reds',
      position: 'Point Guard (PG)',
      ovr: 96,
      role: 'Finals MVP & Scoring Engine',
      statsHighlight: '26.7 PPG | 26 PTS in Finals | 27 PTS in Semis | 7 STL',
      description: 'Lamar Anderson orchestrated California’s historic Season 2 Championship run, dropping 26 in the CCH Finals to defeat Sacramento and capture Finals MVP.',
    },
    {
      name: 'George Madsen',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      position: 'Shooting Guard (SG)',
      ovr: 90,
      role: 'Perimeter Sharpshooting Specialist',
      statsHighlight: '13 3PM | 27 PTS vs SF (7-10 3PT) | 27 PTS vs OAK',
      description: 'Madsen exploded onto the postseason scene with consecutive 27-point games, hitting 7 three-pointers in the Quarterfinals alone.',
    },
    {
      name: 'Ray Gambino',
      team: 'San Diego Strykers',
      teamId: 'san-diego-strykers',
      position: 'Point Guard (PG)',
      ovr: 93,
      role: 'Playmaking & Scoring Maestro',
      statsHighlight: '9.0 APG | 23 PTS & 9 AST vs Sabrewolves | 7 REB',
      description: 'Engineered the Strykers offensive attack, dropping a playoff-high 9 assists alongside 23 points in the Quarterfinal victory.',
    },
    {
      name: 'Dennis Rodman',
      team: 'California Reds',
      teamId: 'california-reds',
      position: 'Power Forward (PF)',
      ovr: 88,
      role: 'Interior Fortress & Efficiency Leader',
      statsHighlight: '17 PTS | 8 REB | 3 BLK | 85.7% FG vs ANA',
      description: 'Anchor of the Reds defense, dominating the paint with efficient inside scoring, high-impact rebounding, and elite rim protection.',
    },
    {
      name: 'K. Tinsley',
      team: 'Anaheim Admirals',
      teamId: 'anaheim-admirals',
      position: 'Guard (G)',
      ovr: 84,
      role: 'Single-Game Scoring Spark',
      statsHighlight: '30 PTS | 10-15 FG | 4-4 3PT vs California',
      description: 'Put up one of the most efficient single-game scoring outings in postseason history, scoring 30 points without missing a single 3-pointer.',
    },
  ],
};

export const S3_PLAYOFF_STATS: PlayoffSeasonStats = {
  season: 3,
  totalsLeaders: [
    { category: 'Points', player: 'George Madsen', team: 'Sacramento Stallions', stat: '75 PTS', details: '3 GP, 27-46 FGM' },
    { category: 'Rebounds', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '30 REB', details: '3 GP, 10.0 RPG average' },
    { category: 'Assists', player: 'Lance Harrison', team: 'Sacramento Stallions', stat: '16 AST', details: '3 GP, 7.0 APG in Finals' },
    { category: 'Blocks', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '8 BLK', details: '2.7 BPG' },
    { category: 'Steals', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '11 STL', details: '3.7 SPG' },
    { category: '3-Pointers Made', player: 'George Madsen', team: 'Sacramento Stallions', stat: '14 3PM', details: '60.9% 3PT accuracy' },
    { category: 'Field Goals Made', player: 'George Madsen', team: 'Sacramento Stallions', stat: '27 FGM', details: 'Lead playoff bucket-getter' },
    { category: 'Plus/Minus (+/-)', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '+45 (+15/G)', details: 'Highest impact on court' },
  ],
  averagesLeaders: [
    { category: 'Points per Game', player: 'Lamar Anderson', team: 'California Reds', stat: '34.0 PPG', details: '14-22 FG in 22 mins' },
    { category: 'Rebounds per Game', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '10.0 RPG', details: 'Dominant interior anchor' },
    { category: 'Assists per Game', player: 'Munir Kassa', team: 'San Francisco Knights', stat: '8.0 APG', details: '1 GP vs Sacramento' },
    { category: 'Steals per Game', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '3.7 SPG', details: 'Lockdown interior & lane defense' },
    { category: 'Blocks per Game', player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '2.7 BPG', details: 'Rim protection masterclass' },
    { category: 'Field Goal %', player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '100% FG', details: '12-12 FGM across 2 GP' },
    { category: '3-Point %', player: 'Spencer Parker', team: 'Sacramento Stallions', stat: '100% 3PT', details: '1-1 3PM' },
    { category: 'Free Throws Made / G', player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '7.5 FTM', details: 'Consistent foul drawer' },
  ],
  singleGameHighs: [
    {
      category: 'Leading Scorers',
      performances: [
        { stat: '34 PTS', player: 'Lamar Anderson (CAL)', matchup: 'vs. Fresno Mad Dogs' },
        { stat: '30 PTS', player: 'Ray Gambino (SD Strykers)', matchup: 'vs. Fresno Mad Dogs' },
        { stat: '29 PTS', player: 'Stephen Cook (SF)', matchup: 'vs. Sacramento Stallions' },
        { stat: '29 PTS', player: 'George Madsen (SAC)', matchup: 'vs. Fresno Mad Dogs (Finals)' },
        { stat: '28 PTS', player: 'Douglas Bradley (FRE)', matchup: 'vs. SD Strykers & vs. Sacramento' },
      ],
    },
    {
      category: 'Top Rebounders',
      performances: [
        { stat: '11 REB', player: 'Dorell Kabal (SAC)', matchup: 'vs. SF Knights & vs. Fresno (Finals)' },
        { stat: '10 REB', player: 'Dennis Rodman (CAL)', matchup: 'vs. Fresno Mad Dogs' },
        { stat: '9 REB', player: 'Andre Creek (SD Sabrewolves)', matchup: 'vs. LA Dynamics' },
        { stat: '9 REB', player: 'Julian Bowen (OAK)', matchup: 'vs. SD Strykers' },
      ],
    },
    {
      category: 'Top Playmakers (Assists)',
      performances: [
        { stat: '8 AST', player: 'Munir Kassa (SF)', matchup: 'vs. Sacramento Stallions' },
        { stat: '7 AST', player: 'Lamar Anderson (CAL)', matchup: 'vs. Fresno Mad Dogs' },
        { stat: '7 AST', player: 'Lance Harrison (SAC)', matchup: 'vs. Fresno Mad Dogs (Finals)' },
        { stat: '6 AST', player: 'Wesley Taylor (SD Sabrewolves)', matchup: 'vs. Sacramento Stallions' },
        { stat: '6 AST', player: 'A.J. Hinton (SD Strykers)', matchup: 'vs. Oakland Renegades' },
      ],
    },
  ],
  detailedGames: [
    {
      id: 'g-sac-fre-finals',
      matchup: 'Sacramento Stallions 87, Fresno Mad Dogs 72',
      round: 'Season 3 CCH Finals',
      score: '87 - 72',
      winner: 'Sacramento Stallions',
      summary: "Comprehensive championship clincher. Sacramento shot a staggering 64% from the field (34-53) as Dorell Kabal delivered a 25-point, 11-rebound retirement masterpiece alongside George Madsen's 29 points.",
      topPerformers: [
        { name: 'George Madsen (SAC)', stat: '29 PTS, 4 AST, 5-7 3PT' },
        { name: 'Dorell Kabal (SAC)', stat: '25 PTS, 11 REB, 3 BLK (11-14 FG)' },
        { name: 'Douglas Bradley (FRE)', stat: '28 PTS (11-17 FG)' },
      ],
    },
    {
      id: 'g-fre-cal-qf',
      matchup: 'Fresno Mad Dogs 90, California Reds 86',
      round: 'Quarterfinals (Upset of the Century)',
      score: '90 - 86',
      winner: 'Fresno Mad Dogs',
      summary: 'Fresno won this high-scoring affair by controlling the interior, scoring 50 points in the paint and shooting 64% from the floor to knock off the #1 seed Reds despite Lamar Anderson’s 34 points.',
      topPerformers: [
        { name: 'Lamar Anderson (CAL)', stat: '34 PTS, 7 AST (14-22 FG)' },
        { name: 'Douglas Bradley (FRE)', stat: '18 PTS, 5 AST' },
        { name: 'Dennis Rodman (CAL)', stat: '10 REB' },
      ],
    },
    {
      id: 'g-fre-sds-semis',
      matchup: 'Fresno Mad Dogs 80, San Diego Strykers 75',
      round: 'Semifinals',
      score: '80 - 75',
      winner: 'Fresno Mad Dogs',
      summary: 'Fresno shot an incredible 63% from the field (31-49) to overcome the Strykers. D. Bradley led Fresno with 28 points while Ray Gambino scored 30 in a losing effort.',
      topPerformers: [
        { name: 'Douglas Bradley (FRE)', stat: '28 PTS' },
        { name: 'Ray Gambino (SD Strykers)', stat: '30 PTS, 3 REB, 3 AST' },
        { name: 'Josh Parks (FRE)', stat: '27 PTS' },
      ],
    },
    {
      id: 'g-sac-sds-semis',
      matchup: 'Sacramento Stallions 88, San Diego Sabrewolves 72',
      round: 'Semifinals',
      score: '88 - 72',
      winner: 'Sacramento Stallions',
      summary: "George Madsen led the Stallions with 24 points, 4 rebounds, and 4 assists while Kabal chipped in 16 points and 8 boards. Kirk Barnes scored 26 points for Sabrewolves.",
      topPerformers: [
        { name: 'George Madsen (SAC)', stat: '24 PTS, 4 REB, 4 AST' },
        { name: 'Kirk Barnes (SD Sabrewolves)', stat: '26 PTS (10-17 FG)' },
        { name: 'Dorell Kabal (SAC)', stat: '16 PTS, 8 REB' },
      ],
    },
    {
      id: 'g-sac-sf-qf',
      matchup: 'Sacramento Stallions 80, San Francisco Knights 79',
      round: 'Quarterfinals (1-Point Thriller)',
      score: '80 - 79',
      winner: 'Sacramento Stallions',
      summary: 'The Knights led by 11 after the 1st quarter, but Sacramento chipped away and outscored SF 24-19 in the 4th quarter to pull off the 1-point victory.',
      topPerformers: [
        { name: 'Stephen Cook (SF)', stat: '29 PTS (12-18 FG)' },
        { name: 'Dorell Kabal (SAC)', stat: '16 PTS, 11 REB' },
        { name: 'Munir Kassa (SF)', stat: '8 AST' },
      ],
    },
    {
      id: 'g-sds-oak-qf',
      matchup: 'San Diego Strykers 80, Oakland Renegades 79',
      round: 'Quarterfinals',
      score: '80 - 79',
      winner: 'San Diego Strykers',
      summary: 'The Strykers pulled off a thriller over the Renegades by 1 point behind Ray Gambino’s 25 points and A.J. Hinton’s 17 points and 6 assists. Alonzo Reece scored 26 for Oakland.',
      topPerformers: [
        { name: 'Ray Gambino (SD Strykers)', stat: '25 PTS' },
        { name: 'Alonzo Reece (OAK)', stat: '26 PTS' },
        { name: 'A.J. Hinton (SD Strykers)', stat: '17 PTS, 6 AST' },
      ],
    },
    {
      id: 'g-sds-la-qf',
      matchup: 'San Diego Sabrewolves 86, LA Dynamics 79',
      round: 'Quarterfinals / First Round',
      score: '86 - 79',
      winner: 'San Diego Sabrewolves',
      summary: 'Kirk Barnes went 11-13 from the free-throw line to score 25 points, supported by P.J. Greene’s 19 points off the bench for San Diego.',
      topPerformers: [
        { name: 'Kirk Barnes (SD Sabrewolves)', stat: '25 PTS (11-13 FT)' },
        { name: 'P.J. Greene (SD Sabrewolves)', stat: '19 PTS (Bench)' },
        { name: 'G. Mann (LA)', stat: '18 PTS' },
      ],
    },
  ],
  standoutProfiles: [
    {
      name: 'Dorell Kabal',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      position: 'Center (C)',
      ovr: 94,
      role: 'Playoff MVP & Dynasty Anchor',
      statsHighlight: '19.0 PPG | 10.0 RPG | 3.7 SPG | 2.7 BPG | +45 +/-',
      description: 'Historical defensive dominance over 3 playoff games. Finished off his career with 25 points, 11 rebounds, and 3 blocks on 78.6% FG in the Championship game.',
    },
    {
      name: 'George Madsen',
      team: 'Sacramento Stallions',
      teamId: 'sacramento-stallions',
      position: 'Shooting Guard (SG)',
      ovr: 90,
      role: 'Offensive Engine & Sharpshooter',
      statsHighlight: '75 PTS | 14 3PM | 60.9% 3PT | 27 FGM',
      description: 'The overall postseason scoring leader. Madsen drained 14 three-pointers in 3 games and exploded for 29 points in the Season 3 CCH Finals.',
    },
    {
      name: 'Lamar Anderson',
      team: 'California Reds',
      teamId: 'california-reds',
      position: 'Point Guard (PG)',
      ovr: 96,
      role: 'Single-Game Scoring Explosion',
      statsHighlight: '34.0 PPG | 7.0 APG | 2.0 SPG | 63.6% FG',
      description: 'Put up a staggering 34 points and 7 assists in 22 minutes against Fresno, posting the highest single-game playoff point total.',
    },
    {
      name: 'Josh Parks',
      team: 'Fresno Mad Dogs',
      teamId: 'fresno-mad-dogs',
      position: 'Point Guard (PG)',
      ovr: 91,
      role: 'Mid-Range & Interior Specialist',
      statsHighlight: '22 FGM | 53 FGA | 62.9% FG | 9-9 FT',
      description: 'Fueled Fresno’s Cinderella run with an efficient mid-range attack, dropping 27 points in the Semifinal win over San Diego.',
    },
    {
      name: 'Douglas Bradley',
      team: 'Fresno Mad Dogs',
      teamId: 'fresno-mad-dogs',
      position: 'Shooting Guard (SG)',
      ovr: 85,
      role: 'High Volume Postseason Scorer',
      statsHighlight: '23.0 PPG | 38 FGA | 28 PTS in Finals',
      description: 'Lead offensive weapon for Fresno during their Cinderella postseason run, scoring a team-high 28 points on 11-of-17 FG in the CCH Finals.',
    },
  ],
};

export const PLAYOFF_STATS_BY_SEASON: Record<number, PlayoffSeasonStats> = {
  1: S1_PLAYOFF_STATS,
  2: S2_PLAYOFF_STATS,
  3: S3_PLAYOFF_STATS,
};

