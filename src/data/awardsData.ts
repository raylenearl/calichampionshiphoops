import { Award } from '../types';

export interface AllCaliPlayer {
  name: string;
  position?: string;
  team: string;
  teamId?: string;
}

export interface AllCaliTeam {
  season: 1 | 2 | 3;
  teamCategory: 'All-Cali' | 'All-Defensive' | 'All-Rookie';
  tier: '1st Team' | '2nd Team' | '3rd Team';
  players: AllCaliPlayer[];
}

export interface SeasonLeader {
  season: 1 | 2 | 3;
  statCategory: string;
  player: string;
  position?: string;
  team: string;
  teamId?: string;
  statValue: string;
  subText?: string;
}

export interface SingleGameHigh {
  season: 1 | 2 | 3;
  statCategory: string;
  player: string;
  position?: string;
  team: string;
  teamId?: string;
  statValue: string;
  gameDetails: string;
}

export const ALL_AWARDS: Award[] = [
  // Season 1
  {
    season: 1,
    category: 'Most Valuable Player (MVP)',
    player: 'Dorell Kabal',
    team: 'Sacramento Stallions',
    statDetails: '.810 FG% | 9.4 RPG | 17-5 Record',
    description: 'Dominated the inaugural season in the paint with high efficiency (.810 FG%) and glass domination, leading Sacramento to the #1 seed and championship.',
  },
  {
    season: 1,
    category: 'Offensive MVP & Scoring Champion',
    player: 'Lamar Anderson',
    team: 'Fresno Mad Dogs / California Reds',
    statDetails: '25.0 PPG (575 Total Points)',
    description: 'Picked #1 overall in the inaugural CCH Draft, Lamar put on an unstoppable offensive clinic averaging 25.0 PPG. Traded from Fresno to California during Season 1.',
  },
  {
    season: 1,
    category: 'Defensive MVP (DPOY)',
    player: 'Mo Alexander',
    team: 'Los Angeles Dynamics',
    statDetails: '2.9 BPG (64 Blocks) | Steals, Rebounds & Blocks Leader',
    description: 'Secured a legendary defensive "triple crown", leading the league in steals, rebounds, and blocks (2.9 BPG).',
  },
  {
    season: 1,
    category: 'Clutch Player of the Year',
    player: 'Munir Kassa',
    team: 'San Francisco Knights',
    statDetails: '25.0 Min/Game | Ice-Cold Finisher',
    description: 'Renowned for ice-cold 4th-quarter decision making and game-winning shotmaking down the stretch.',
  },
  {
    season: 1,
    category: 'Sixth Man of the Year',
    player: 'Jud Hawkins',
    team: 'San Diego Sabrewolves',
    statDetails: 'Bench Sparkplug',
    description: 'Provided game-changing scoring density and energetic defense off the bench for San Diego.',
  },
  {
    season: 1,
    category: 'Coach of the Year',
    player: 'Stretch Roberts',
    team: 'Long Beach Vipers',
    statDetails: '13-9 Record (3rd Seed)',
    description: 'Guided a youthful Long Beach team to a 13-9 finish and upper-tier playoff seed in CCH Season 1.',
  },
  {
    season: 1,
    category: 'Executive of the Year',
    player: 'Anthony Nance',
    team: 'Long Beach Vipers',
    statDetails: 'Roster Architecture',
    description: 'Constructed one of the most balanced rosters in the league through savvy draft picks and strategic development.',
  },

  // Season 2
  {
    season: 2,
    category: 'Most Valuable Player (MVP) & Finals MVP',
    player: 'Lamar Anderson',
    team: 'California Reds',
    statDetails: '22.3 PPG (League Scorer) | 18-4 Record | 26 PTS in Finals',
    description: 'Spearheaded the greatest turnaround in league history ("Redemption Era"), leading the Reds to a league-best 18 wins, the Season 2 Championship, and Finals MVP honors.',
  },
  {
    season: 2,
    category: 'Rookie of the Year (ROTY)',
    player: 'Andor Marai',
    team: 'California Reds',
    statDetails: '1.6 SPG (League Leader) | Anchor Center',
    description: 'Provided immediate two-way interior impact as a Hungarian phenom center, leading CCH in steals per game (1.6 SPG) and anchoring the Reds defense.',
  },
  {
    season: 2,
    category: 'Defensive Player of the Year (DPOY)',
    player: 'Cameron Barkley',
    team: 'San Diego Sabrewolves',
    statDetails: '2.3 BPG (League Leader)',
    description: 'Began the season in Fresno before a blockbuster mid-season trade to San Diego. Finished leading CCH in blocks at 2.3 BPG.',
  },
  {
    season: 2,
    category: 'Offensive Player of the Year (OPOY)',
    player: 'Ray Gambino',
    team: 'San Diego Strykers',
    statDetails: '4.6 APG (League Assists Leader)',
    description: 'Orchestrated the league’s fastest-paced offense, leading all guards in assist average (4.6 APG) and perimeter creation.',
  },
  {
    season: 2,
    category: 'Sixth Man of the Year',
    player: 'Charlie Garnett',
    team: 'San Francisco Knights',
    statDetails: 'Second Unit Maestro',
    description: 'Maintained San Francisco’s high-octane offensive flow with bench leadership and electric perimeter shooting.',
  },
  {
    season: 2,
    category: 'Submitted Player of the Year',
    player: 'Jack McMichael Jr.',
    team: 'Los Angeles Dynamics',
    statDetails: 'Fan & Community Favorite',
    description: 'Honored as the premier player representative for dedication, sportsmanship, and fan engagement.',
  },
  {
    season: 2,
    category: 'Most Improved Player (MIP)',
    player: 'Xavi Roach',
    team: 'Anaheim Admirals',
    statDetails: 'Breakout Season | Offensive Development',
    description: 'Elevated his game significantly across all statistical categories, becoming a primary playmaker and scorer for Anaheim in Season 2.',
  },
  {
    season: 2,
    category: 'KIA Clutch Player of the Year',
    player: 'Lamar Anderson',
    team: 'California Reds',
    statDetails: 'Ice-Cold Finisher | Late-Game Heroics',
    description: 'Delivered legendary crunch-time performances and game-clinching baskets throughout the California Reds Championship run.',
  },
  {
    season: 2,
    category: 'Coach of the Year',
    player: 'William Walker',
    team: 'California Reds',
    statDetails: '18-4 Record | S2 Champions',
    description: 'Engineered a historic turnaround from Season 1, leading the California Reds to a 18-4 record and the Season 2 CCH Championship.',
  },

  // Season 3
  {
    season: 3,
    category: 'Most Valuable Player (MVP)',
    player: 'A.J. Hinton',
    team: 'San Diego Strykers',
    statDetails: '21.1 PPG | 5.3 RPG | 3.1 APG | 1.1 SPG | 0.3 BPG',
    description: 'Led the league in scoring efficiency and explosive perimeter scoring (21.1 PPG). Voting: 1st A.J. Hinton, 2nd Ray Gambino (18.1 PPG, 4.3 APG), 3rd Lamar Anderson (15.9 PPG, 4.8 APG).',
  },
  {
    season: 3,
    category: 'Defensive Player of the Year (DPOY)',
    player: 'Wes Taylor',
    team: 'San Diego Sabrewolves',
    statDetails: '1.8 SPG (40 Steals) | 9.5 PPG | 4.7 RPG | 2.9 APG',
    description: 'Relentless perimeter lockdown master who led the league with 40 total steals. DPOY Voting: 1st Wes Taylor, 2nd Cameron Barkley (8.0 RPG, 1.6 BPG), 3rd Adrian Pognotti (7.7 RPG, 1.3 BPG).',
  },
  {
    season: 3,
    category: 'Offensive Player of the Year',
    player: 'Lamar Anderson',
    team: 'California Reds',
    statDetails: '15.9 PPG | 3.8 APG | Playmaking & Perimeter Mastery',
    description: 'Continued his offensive brilliance with elite shot creation, driving the California Reds high-powered offensive system.',
  },
  {
    season: 3,
    category: 'Rookie of the Year (ROTY)',
    player: 'Donald Hardy',
    team: 'San Jose Tigersharks',
    statDetails: '11.3 PPG | 4.2 RPG | 1.8 APG | Dunk Contest Champ & ASG MVP',
    description: 'Phenomenal rookie campaign, sweeping All-Star Dunk Contest honors, All-Star Game MVP, and Rookie of the Year.',
  },
  {
    season: 3,
    category: 'Clutch Player of the Year',
    player: 'O.J. House',
    team: 'San Jose Tigersharks',
    statDetails: '13.2 PPG | 1.2 RPG | Ice-Cold Game Closers',
    description: 'Delivered multiple late-game winners and clutch shotmaking in the 4th quarter for the Tigersharks.',
  },
  {
    season: 3,
    category: 'Sixth Man of the Year',
    player: 'Jamal Malone',
    team: 'Golden State Enterprise',
    statDetails: '13.9 PPG | 1.8 RPG | 1.9 APG | 0.3 SPG | 0.1 BPG',
    description: 'Provided instant offense and bench scoring punch for Golden State. Voting: 1st Jamal Malone, 2nd Freddie Bridges (11.1 PPG, 2.6 APG).',
  },
  {
    season: 3,
    category: 'Most Improved Player (MIP)',
    player: 'Damon Stephens',
    team: 'Fresno Mad Dogs',
    statDetails: '7.5 PPG | 5.3 RPG | 1.1 APG | 0.8 SPG | 0.3 BPG',
    description: 'Showed remarkable leap in efficiency, court vision, and scoring average. Voting: 1st Damon Stephens, 2nd Evan Hansen (9.7 PPG, 1.5 RPG).',
  },
  {
    season: 3,
    category: 'Man of the Year',
    player: 'Jack McMichael Jr.',
    team: 'Los Angeles Dynamics',
    statDetails: 'Leadership & Community Excellence',
    description: 'Honored for outstanding leadership on and off the court, representing LA Dynamics with sportsmanship and excellence.',
  },
  {
    season: 3,
    category: 'Coach of the Year',
    player: 'William Walker',
    team: 'California Reds',
    statDetails: '19-3 Record | League-Best System',
    description: 'Orchestrated another dominant campaign for the California Reds, leading the association in win percentage.',
  },
  {
    season: 3,
    category: 'Executive of the Year',
    player: 'Terry Hart',
    team: 'California Reds',
    statDetails: 'Roster Mastery & Depth Building',
    description: 'Maintained the championship standard in Los Angeles through shrewd player retention and roster upgrades.',
  },
];

export const SEASON_LEADERS: SeasonLeader[] = [
  // Season 1
  {
    season: 1,
    statCategory: 'Points',
    player: 'Lamar Anderson',
    position: 'PG',
    team: 'California Reds',
    teamId: 'california-reds',
    statValue: '25.0 PPG',
    subText: '575 Total Points (Traded from Fresno to CA in S1)'
  },
  {
    season: 1,
    statCategory: 'Rebounds',
    player: 'Dorell Kabal',
    position: 'C',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    statValue: '9.4 RPG',
    subText: 'Dominated the paint with .810 FG%'
  },
  {
    season: 1,
    statCategory: 'Assists',
    player: 'Donnell Nash',
    position: 'PG',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    statValue: '7.0 APG',
    subText: '154 Total Assists'
  },
  {
    season: 1,
    statCategory: 'Steals',
    player: 'Dakoulas Alexandris',
    position: 'SG',
    team: 'Oakland Renegades',
    teamId: 'oakland-renegades',
    statValue: '0.8 SPG',
    subText: '18 Total Steals (Tied with Mo Alexander, Carl Newton & Adin Durmanenko)'
  },
  {
    season: 1,
    statCategory: 'Blocks',
    player: 'Mo Alexander',
    position: 'C',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    statValue: '2.9 BPG',
    subText: '64 Total Blocks (Defensive Triple Crown)'
  },
  {
    season: 1,
    statCategory: 'Field Goal %',
    player: 'Dorell Kabal',
    position: 'C',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    statValue: '.810 FG%',
    subText: '81.0% Field Goal Efficiency'
  },
  {
    season: 1,
    statCategory: 'Free Throw %',
    player: 'Jack McMichael Jr.',
    position: 'PG',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    statValue: '.907 FT%',
    subText: '90.7% Free Throw Accuracy'
  },
  {
    season: 1,
    statCategory: '3-Point %',
    player: 'Kirk Tinsley',
    position: 'SG',
    team: 'Anaheim Admirals',
    teamId: 'anaheim-admirals',
    statValue: '.626 3P%',
    subText: '62.6% 3-Point Accuracy'
  },

  // Season 2
  {
    season: 2,
    statCategory: 'Points',
    player: 'Lamar Anderson',
    position: 'PG',
    team: 'California Reds',
    teamId: 'california-reds',
    statValue: '22.3 PPG',
    subText: 'Scoring Champion & MVP'
  },
  {
    season: 2,
    statCategory: 'Rebounds',
    player: 'Dorell Kabal',
    position: 'C',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    statValue: '10.1 RPG',
    subText: 'League Rebound Champion'
  },
  {
    season: 2,
    statCategory: 'Assists',
    player: 'Ray Gambino',
    position: 'PG',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    statValue: '4.6 APG',
    subText: 'Offensive Player of the Year'
  },
  {
    season: 2,
    statCategory: 'Steals',
    player: 'Andor Marai',
    position: 'C',
    team: 'California Reds',
    teamId: 'california-reds',
    statValue: '1.6 SPG',
    subText: 'Rookie of the Year Anchor'
  },
  {
    season: 2,
    statCategory: 'Blocks',
    player: 'Cameron Barkley',
    position: 'C',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    statValue: '2.3 BPG',
    subText: 'Defensive Player of the Year'
  },
  {
    season: 2,
    statCategory: 'Minutes',
    player: 'DeAnte Gray',
    position: 'SF',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    statValue: '23.82 MPG',
    subText: 'Ironman Minutes Leader'
  },

  // Season 3
  {
    season: 3,
    statCategory: 'Points',
    player: 'A.J. Hinton',
    position: 'SG',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    statValue: '21.1 PPG',
    subText: 'League MVP & Scoring Champion'
  },
  {
    season: 3,
    statCategory: 'Rebounds',
    player: 'Cameron Barkley',
    position: 'C',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    statValue: '8.0 RPG',
    subText: 'Rebounds & Blocks League Leader'
  },
  {
    season: 3,
    statCategory: 'Assists',
    player: 'Lamar Anderson',
    position: 'PG',
    team: 'California Reds',
    teamId: 'california-reds',
    statValue: '4.8 APG',
    subText: 'League Assists Leader'
  },
  {
    season: 3,
    statCategory: 'Steals',
    player: 'Wes Taylor',
    position: 'SG',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    statValue: '1.8 SPG',
    subText: '40 Total Steals (Defensive Player of the Year)'
  },
  {
    season: 3,
    statCategory: 'Blocks',
    player: 'Cameron Barkley',
    position: 'C',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    statValue: '1.6 BPG',
    subText: 'Rim Protection Champion'
  },
  {
    season: 3,
    statCategory: 'Field Goal %',
    player: 'Munir Kassa',
    position: 'SF',
    team: 'San Francisco Knights',
    teamId: 'san-francisco-knights',
    statValue: '.593 FG%',
    subText: '59.3% Field Goal Efficiency'
  },
  {
    season: 3,
    statCategory: '3-Point %',
    player: 'Greg Mann',
    position: 'SG',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    statValue: '.493 3P%',
    subText: '49.3% 3-Point Accuracy'
  },
  {
    season: 3,
    statCategory: 'Free Throw %',
    player: 'Alton Newman',
    position: 'PF',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    statValue: '1.000 FT%',
    subText: 'Perfect 100% Free Throw Shooting'
  },
];

export const SEASON_1_SINGLE_GAME_HIGHS: SingleGameHigh[] = [
  {
    season: 1,
    statCategory: 'Points',
    player: 'Alonzo Reece',
    position: 'SG',
    team: 'Oakland Renegades',
    teamId: 'oakland-renegades',
    statValue: '43 PTS',
    gameDetails: 'vs. Fresno Mad Dogs (12/26/S1)'
  },
  {
    season: 1,
    statCategory: 'Rebounds',
    player: 'Dorell Kabal',
    position: 'C',
    team: 'Sacramento Stallions',
    teamId: 'sacramento-stallions',
    statValue: '15 REB',
    gameDetails: 'vs. San Jose Tigersharks (11/5/S1)'
  },
  {
    season: 1,
    statCategory: 'Assists',
    player: 'A.J. Cox',
    position: 'PG',
    team: 'California Reds',
    teamId: 'california-reds',
    statValue: '15 AST',
    gameDetails: 'vs. Oakland Renegades (11/14/S1)'
  },
  {
    season: 1,
    statCategory: 'Steals',
    player: 'DeAnte Gray',
    position: 'SF',
    team: 'Golden State Enterprise',
    teamId: 'golden-state-enterprise',
    statValue: '4 STL',
    gameDetails: 'vs. San Francisco Knights (2/8/S1)'
  },
  {
    season: 1,
    statCategory: 'Blocks',
    player: 'Adrian Pognotti',
    position: 'C',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    statValue: '10 BLK',
    gameDetails: 'vs. Oakland Renegades (2/24/S1)'
  },
  {
    season: 1,
    statCategory: '3-Pointers',
    player: 'Jack McMichael Jr.',
    position: 'PG',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    statValue: '8 3PM',
    gameDetails: 'vs. San Jose Tigersharks (12/6/S1)'
  },
];

export const ALL_CALI_TEAMS: AllCaliTeam[] = [
  // Season 2
  {
    season: 2,
    teamCategory: 'All-Cali',
    tier: '1st Team',
    players: [
      { name: 'Lamar Anderson', position: 'G', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Ray Gambino', position: 'G', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'DeAnte Gray', position: 'F', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'Jaydan Moody', position: 'F', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
      { name: 'Dorell Kabal', position: 'C', team: 'Sacramento Stallions', teamId: 'sacramento-stallions' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Cali',
    tier: '2nd Team',
    players: [
      { name: 'Kirk Barnes', position: 'G', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
      { name: 'A.J. Hinton', position: 'G', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'Greg Mann', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'J.C. McMillan', position: 'F', team: 'Oakland Renegades', teamId: 'oakland-renegades' },
      { name: 'Andor Marai', position: 'C', team: 'California Reds', teamId: 'california-reds' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Cali',
    tier: '3rd Team',
    players: [
      { name: 'Kirk Tinsley', position: 'G', team: 'Anaheim Admirals', teamId: 'anaheim-admirals' },
      { name: 'Alonzo Reece', position: 'G', team: 'Oakland Renegades', teamId: 'oakland-renegades' },
      { name: 'Donald Rodman', position: 'F', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Shelden Humphries', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Phil Martin Jr.', position: 'C', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Defensive',
    tier: '1st Team',
    players: [
      { name: 'Cameron Barkley', position: 'C', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
      { name: 'Dorell Kabal', position: 'C', team: 'Sacramento Stallions', teamId: 'sacramento-stallions' },
      { name: 'Adrian Pognotti', position: 'C', team: 'San Francisco Knights', teamId: 'san-francisco-knights' },
      { name: 'George Brooks', position: 'C', team: 'Anaheim Admirals', teamId: 'anaheim-admirals' },
      { name: 'Shelden Humphries', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Defensive',
    tier: '2nd Team',
    players: [
      { name: 'Joshua Bowen', position: 'C', team: 'Oakland Renegades', teamId: 'oakland-renegades' },
      { name: 'Andre Creek', position: 'C', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'J.C. McMillan', position: 'F', team: 'Oakland Renegades', teamId: 'oakland-renegades' },
      { name: 'Andor Marai', position: 'C', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Donald Rodman', position: 'F', team: 'California Reds', teamId: 'california-reds' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Rookie',
    tier: '1st Team',
    players: [
      { name: 'Andor Marai', position: 'C', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Phil Martin Jr.', position: 'C', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs' },
      { name: 'Celso Costa', position: 'G', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks' },
      { name: 'George Madsen', position: 'G', team: 'Sacramento Stallions', teamId: 'sacramento-stallions' },
      { name: 'Jaydan Moody', position: 'F', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
    ],
  },
  {
    season: 2,
    teamCategory: 'All-Rookie',
    tier: '2nd Team',
    players: [
      { name: 'Greg Mann', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Joseph Young', position: 'G', team: 'Long Beach Vipers', teamId: 'long-beach-vipers' },
      { name: 'Donald Rodman', position: 'F', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Shelden Humphries', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Wes Taylor', position: 'G', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
    ],
  },

  // Season 3
  {
    season: 3,
    teamCategory: 'All-Cali',
    tier: '1st Team',
    players: [
      { name: 'A.J. Hinton', position: 'G', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'Lamar Anderson', position: 'G', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Donald Rodman', position: 'F', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Donald Hardy', position: 'F', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks' },
      { name: 'Andor Marai', position: 'C', team: 'California Reds', teamId: 'california-reds' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Cali',
    tier: '2nd Team',
    players: [
      { name: 'Ray Gambino', position: 'G', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'George Madsen', position: 'G', team: 'Sacramento Stallions', teamId: 'sacramento-stallions' },
      { name: 'Shelden Humphries', position: 'F', team: 'Anaheim Admirals', teamId: 'anaheim-admirals' },
      { name: 'DeAnte Gray', position: 'F', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'Dorell Kabal', position: 'C', team: 'Sacramento Stallions', teamId: 'sacramento-stallions' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Cali',
    tier: '3rd Team',
    players: [
      { name: 'Jamar Dean', position: 'G', team: 'Oakland Renegades', teamId: 'oakland-renegades' },
      { name: 'Celso Costa', position: 'G', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Chad Bryant', position: 'F', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'Greg Mann', position: 'F', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Phil Martin Jr.', position: 'C', team: 'Long Beach Vipers', teamId: 'long-beach-vipers' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Defensive',
    tier: '1st Team',
    players: [
      { name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
      { name: 'Cameron Barkley', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'Celso Costa', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
      { name: 'Johnny Galloway', team: 'San Diego Strykers', teamId: 'san-diego-strykers' },
      { name: 'Shelden Humphries', team: 'Anaheim Admirals', teamId: 'anaheim-admirals' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Defensive',
    tier: '2nd Team',
    players: [
      { name: 'Adrian Pognotti', team: 'San Francisco Knights', teamId: 'san-francisco-knights' },
      { name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds' },
      { name: 'Andre Creek', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves' },
      { name: 'George Brooks', team: 'Anaheim Admirals', teamId: 'anaheim-admirals' },
      { name: 'Donald Rodman', team: 'California Reds', teamId: 'california-reds' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Rookie',
    tier: '1st Team',
    players: [
      { name: 'Donald Hardy', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks' },
      { name: 'Jamal Malone', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'Chad Bryant', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'Alton Newman', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
      { name: 'Edward Sharp', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics' },
    ],
  },
  {
    season: 3,
    teamCategory: 'All-Rookie',
    tier: '2nd Team',
    players: [
      { name: 'Freddie Bridges', team: 'San Francisco Knights', teamId: 'san-francisco-knights' },
      { name: 'Dennis Cousins', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs' },
      { name: 'O.J. House', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks' },
      { name: 'Sheldon Cook', team: 'San Francisco Knights', teamId: 'san-francisco-knights' },
      { name: 'Toni Jukic', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise' },
    ],
  },
];

export const FAMOUS_QUOTES = [
  {
    quote: "Records are cool, but banners matter more.",
    author: "Kirk Barnes",
    title: "San Diego Sabrewolves Legend",
    context: "Following his league-record 56-point single-game performance against the Strykers.",
  },
];

