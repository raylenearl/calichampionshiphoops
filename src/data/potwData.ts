import jamarDean1Img from '../assets/images/JamarDean1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import hinton42Img from '../assets/images/Hinton42_s4vsCAL.png';
import bowenPOTWImg from '../assets/images/BowenPOTW.png';
import hintonPOTWImg from '../assets/images/HintonPOTW.png';

export interface POTWStat {
  label: string;
  value: string;
  sub?: string;
}

export interface POTWWinner {
  player: string;
  team: string;
  teamId: string;
  jersey: string;
  position: string;
  ovr: number;
  conference: 'Northern' | 'Southern' | 'Northern Cali' | 'Southern Cali';
  stats: POTWStat[];
  statSummary: string;
  record: string;
  blurb: string;
  keyGame: string;
  imageUrl?: string;
}

export interface POTWWeek {
  id: string;
  season: 1 | 2 | 3 | 4;
  weekNumber: number;
  dateRange: string;
  headline: string;
  subheadline: string;
  overview: string;
  northernWinner: POTWWinner;
  southernWinner: POTWWinner;
  // Backward compatibility alias if needed
  easternWinner?: POTWWinner;
  westernWinner?: POTWWinner;
  honorableMentions?: {
    player: string;
    team: string;
    teamId: string;
    conference: 'Northern' | 'Southern';
    stat: string;
  }[];
  quotes?: {
    speaker: string;
    title: string;
    quote: string;
  }[];
  newsArticleId?: string;
  status: 'awarded' | 'upcoming';
}

export const POTW_WEEKS: POTWWeek[] = [
  // ==========================================
  // SEASON 4 - WEEK 2 (OCT 22 - OCT 28) [CURRENT LATEST]
  // ==========================================
  {
    id: 's4-week-2',
    season: 4,
    weekNumber: 2,
    dateRange: 'Oct 22 – Oct 28',
    headline: 'Players of the Week: Joshua Bowen & A.J. Hinton Earn Week 2 Honors',
    subheadline: 'Joshua Bowen anchors the 4-0 Renegades with double-double interior mastery in Northern Cali, while A.J. Hinton erupts for 42.0 PPG and 12.0 triples per game in Southern Cali.',
    overview: 'The CCH League Office has announced the Players of the Week for Week 2 of Season 4. Oakland power forward Joshua Bowen anchored a lockdown defense and undefeated 4-0 start to take Northern Cali honors, while San Diego Strykers superstar A.J. Hinton staged an historic perimeter shooting clinic (42.0 PPG, 12.0 3PMPG) to claim the Southern Cali award.',
    status: 'awarded',
    newsArticleId: 's4-potw-week-2-bowen-hinton',
    northernWinner: {
      player: 'Joshua Bowen',
      team: 'Oakland Renegades',
      teamId: 'oakland-renegades',
      jersey: '#29',
      position: 'PF / C',
      ovr: 86,
      conference: 'Northern',
      record: '2-0 (4-0 Overall)',
      statSummary: '14.5 PTS • 11.5 REB • 4.5 AST • 1.5 SPG',
      keyGame: '20 PTS, 14 REB, 5 AST vs California Reds (74-50 W)',
      imageUrl: bowenPOTWImg,
      blurb: 'Bowen controlled every facet of Oakland\'s interior in Week 2, grabbing 11.5 boards per contest while facilitating the offense from the high post with 4.5 assists per game. Bowen anchored a Renegades defense that held opponents to just 53.5 PPG over the slate.',
      stats: [
        { label: 'PTS', value: '14.5', sub: 'Points Per Game' },
        { label: 'REB', value: '11.5', sub: 'Rebounds Per Game' },
        { label: 'AST', value: '4.5', sub: 'Assists Per Game' },
        { label: 'SPG', value: '1.5', sub: 'Steals Per Game' }
      ]
    },
    southernWinner: {
      player: 'A.J. Hinton',
      team: 'San Diego Strykers',
      teamId: 'san-diego-strykers',
      jersey: '#21',
      position: 'SF / SG',
      ovr: 99,
      conference: 'Southern',
      record: '2-0 (3-0 Overall)',
      statSummary: '42.0 PPG • 4.0 RPG • 3.0 APG • 12.0 3PMPG',
      keyGame: '42 PTS, 12 3PT (All-Time CCH Record), 5 REB, 4 AST vs California (102-64 W)',
      imageUrl: hintonPOTWImg || hinton42Img,
      blurb: 'Reigning MVP A.J. Hinton produced one of the most prolific scoring stretches in league history, shattering the all-time CCH single-game record with 12 three-pointers (12-14 3PT) on 15-of-17 shooting en route to 42 points vs. California. Hinton averaged 42.0 PPG and an unprecedented 12.0 3PMPG.',
      stats: [
        { label: 'PPG', value: '42.0', sub: 'Points Per Game' },
        { label: 'RPG', value: '4.0', sub: 'Rebounds Per Game' },
        { label: 'APG', value: '3.0', sub: 'Assists Per Game' },
        { label: '3PMPG', value: '12.0', sub: '3-Pointers Made / Game' }
      ]
    },
    honorableMentions: [
      {
        player: 'Lloyd Boomer',
        team: 'Fresno Mad Dogs',
        teamId: 'fresno-mad-dogs',
        conference: 'Northern',
        stat: '26.0 PPG, 5.0 RPG, 4.0 APG in 57-50 win over Sacramento'
      },
      {
        player: 'Carlton Daugherty',
        team: 'Golden State Enterprise',
        teamId: 'golden-state-enterprise',
        conference: 'Northern',
        stat: '20.0 PPG, 4.0 RPG, 3 3PM in pro debut vs California (65-58 W)'
      },
      {
        player: 'Mo Alexander',
        team: 'Los Angeles Dynamics',
        teamId: 'los-angeles-dynamics',
        conference: 'Southern',
        stat: '18.5 PPG, 13.0 RPG, 3.5 BPG in 2-0 week'
      },
      {
        player: 'Kirk Barnes',
        team: 'San Diego Sabrewolves',
        teamId: 'san-diego-sabrewolves',
        conference: 'Southern',
        stat: '28.0 PPG, 6.0 RPG, 4.0 APG under new HC Jacob Underwood'
      }
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Week 2 showcased individual greatness at its peak. A.J. Hinton\'s 12 three-pointers per game is groundbreaking, while Joshua Bowen demonstrated why Oakland is the standard of Northern California basketball.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades',
        quote: 'Joshua Bowen does the gritty work that doesn\'t always lead SportsCenter, but 14.5 points, 11.5 rebounds, and 4.5 assists from your power forward wins you basketball games every single night.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers',
        quote: 'A.J. Hinton is playing at an all-time level. When he gets into a shooting groove like that, you just clear out and let the MVP work.'
      }
    ]
  },

  // ==========================================
  // SEASON 4 - WEEK 1 (OCT 15 - OCT 21)
  // ==========================================
  {
    id: 's4-week-1',
    season: 4,
    weekNumber: 1,
    dateRange: 'Oct 15 – Oct 21',
    headline: 'Players of the Week: Jamar Dean & Andor Marai Capture Week 1 Honors',
    subheadline: 'Jamar Dean leads the Renegades with 26.0 PPG in Northern Cali, while Andor Marai dominates the paint with 24.0 PPG & 11.0 RPG in Southern Cali.',
    overview: 'The opening week of Season 4 saw explosive performances across both Northern and Southern Cali. Jamar Dean scored 26 points with elite efficiency to launch Oakland\'s season, while 7\'2" titan Andor Marai led California past defending champion Sacramento with 24 points and 11 rebounds on 83.3% shooting.',
    status: 'awarded',
    newsArticleId: 's4-potw-week-1-dean-marai',
    northernWinner: {
      player: 'Jamar Dean',
      team: 'Oakland Renegades',
      teamId: 'oakland-renegades',
      jersey: '#1',
      position: 'SG / PG',
      ovr: 96,
      conference: 'Northern',
      record: '1-0',
      statSummary: '26.0 PPG • 3.0 RPG • 2.0 SPG • 66.7% FG',
      keyGame: '26 PTS, 3 REB, 2 STL vs Anaheim Admirals (71-49 W)',
      imageUrl: jamarDean1Img,
      blurb: 'Dean spearheaded a 21-7 third-quarter blitz in Oakland\'s season opener against Anaheim, scoring 26 points on 8-of-12 shooting with 7-of-8 from the charity stripe.',
      stats: [
        { label: 'PPG', value: '26.0', sub: 'Points Per Game' },
        { label: 'RPG', value: '3.0', sub: 'Rebounds Per Game' },
        { label: 'SPG', value: '2.0', sub: 'Steals Per Game' },
        { label: 'FG%', value: '66.7%', sub: '8/12 Field Goals' }
      ]
    },
    southernWinner: {
      player: 'Andor Marai',
      team: 'California Reds',
      teamId: 'california-reds',
      jersey: '#33',
      position: 'C',
      ovr: 93,
      conference: 'Southern',
      record: '1-0',
      statSummary: '24.0 PPG • 11.0 RPG • 2.0 BPG • 83.3% FG',
      keyGame: '24 PTS, 11 REB, 2 BLK vs Sacramento Stallions (59-44 W)',
      imageUrl: aMaraiS4_1Img,
      blurb: 'Marai dominated the interior against the defending champion Stallions, putting up 24 points and 11 rebounds on an astounding 10-of-12 shooting (83.3%) to set the defensive tone for California.',
      stats: [
        { label: 'PPG', value: '24.0', sub: 'Points Per Game' },
        { label: 'RPG', value: '11.0', sub: 'Rebounds Per Game' },
        { label: 'BPG', value: '2.0', sub: 'Blocks Per Game' },
        { label: 'FG%', value: '83.3%', sub: '10/12 Field Goals' }
      ]
    },
    honorableMentions: [
      {
        player: 'A.J. Hinton',
        team: 'San Diego Strykers',
        teamId: 'san-diego-strykers',
        conference: 'Southern',
        stat: '22.5 PPG, 3.5 RPG, 4.0 SPG, 8 3PM (30 PTS in Game 6)'
      },
      {
        player: 'R.J. Rush',
        team: 'Los Angeles Dynamics',
        teamId: 'los-angeles-dynamics',
        conference: 'Southern',
        stat: '33.0 PPG, 2.0 BPG (CCH Record 14-14 FT)'
      },
      {
        player: 'Lloyd Boomer',
        team: 'Fresno Mad Dogs',
        teamId: 'fresno-mad-dogs',
        conference: 'Northern',
        stat: '25.0 PPG, 4.0 RPG, 1.0 APG (6-6 FT)'
      }
    ]
  },

  // ==========================================
  // SEASON 4 - UPCOMING CALENDAR SLATES
  // ==========================================
  {
    id: 's4-week-3',
    season: 4,
    weekNumber: 3,
    dateRange: 'Oct 29 – Nov 4',
    headline: 'Week 3 Player of the Week',
    subheadline: 'Upcoming slate featuring rivalry clashes and inter-conference battles.',
    overview: 'Voting and official tabulation will conclude upon the completion of all scheduled games on November 4.',
    status: 'upcoming',
    northernWinner: {
      player: 'TBD',
      team: 'Northern Cali Candidate',
      teamId: 'oakland-renegades',
      jersey: '--',
      position: 'TBD',
      ovr: 0,
      conference: 'Northern',
      record: '--',
      statSummary: 'Voting in Progress',
      keyGame: 'Pending Week 3 Games',
      stats: [
        { label: 'PTS', value: '--', sub: 'In Progress' },
        { label: 'REB', value: '--', sub: 'In Progress' },
        { label: 'AST', value: '--', sub: 'In Progress' },
        { label: 'SPG', value: '--', sub: 'In Progress' }
      ],
      blurb: 'Northern Cali voting will be finalized following the conclusion of Sunday evening contests.'
    },
    southernWinner: {
      player: 'TBD',
      team: 'Southern Cali Candidate',
      teamId: 'san-diego-strykers',
      jersey: '--',
      position: 'TBD',
      ovr: 0,
      conference: 'Southern',
      record: '--',
      statSummary: 'Voting in Progress',
      keyGame: 'Pending Week 3 Games',
      stats: [
        { label: 'PPG', value: '--', sub: 'In Progress' },
        { label: 'RPG', value: '--', sub: 'In Progress' },
        { label: 'APG', value: '--', sub: 'In Progress' },
        { label: '3PM', value: '--', sub: 'In Progress' }
      ],
      blurb: 'Southern Cali voting will be finalized following the conclusion of Sunday evening contests.'
    }
  },
  {
    id: 's4-week-4',
    season: 4,
    weekNumber: 4,
    dateRange: 'Nov 5 – Nov 11',
    headline: 'Week 4 Player of the Week',
    subheadline: 'Upcoming mid-November regular season slate.',
    overview: 'Official honors will be awarded upon completion of Week 4 contests.',
    status: 'upcoming',
    northernWinner: {
      player: 'TBD',
      team: 'Northern Cali Conference',
      teamId: 'sacramento-stallions',
      jersey: '--',
      position: 'TBD',
      ovr: 0,
      conference: 'Northern',
      record: '--',
      statSummary: 'Scheduled',
      keyGame: 'Scheduled',
      stats: [],
      blurb: 'Scheduled'
    },
    southernWinner: {
      player: 'TBD',
      team: 'Southern Cali Conference',
      teamId: 'los-angeles-dynamics',
      jersey: '--',
      position: 'TBD',
      ovr: 0,
      conference: 'Southern',
      record: '--',
      statSummary: 'Scheduled',
      keyGame: 'Scheduled',
      stats: [],
      blurb: 'Scheduled'
    }
  }
];

export interface HistoricalPOTWLeader {
  player: string;
  team: string;
  teamId: string;
  totalAwards: number;
  seasons: string;
  highlights: string;
}

export const ALL_TIME_POTW_LEADERS: HistoricalPOTWLeader[] = [
  {
    player: 'A.J. Hinton',
    team: 'San Diego Strykers',
    teamId: 'san-diego-strykers',
    totalAwards: 7,
    seasons: 'Season 2, Season 3, Season 4',
    highlights: 'Reigning S3 MVP; 42.0 PPG & 12.0 3PMPG in S4 Week 2; 99-point single game in S3.'
  },
  {
    player: 'Lamar Anderson',
    team: 'Fresno Mad Dogs / California Reds',
    teamId: 'california-reds',
    totalAwards: 6,
    seasons: 'Season 1, Season 2, Season 3',
    highlights: 'S1 Scoring Champion (25.0 PPG); S2 Finals MVP; Multiple 40-point eruptions.'
  },
  {
    player: 'Jamar Dean',
    team: 'Oakland Renegades',
    teamId: 'oakland-renegades',
    totalAwards: 5,
    seasons: 'Season 1, Season 2, Season 3, Season 4',
    highlights: 'S4 Week 1 Winner (26.0 PPG); 36-point showcase vs Reds; 96 OVR superstar.'
  },
  {
    player: 'Kirk Barnes',
    team: 'San Diego Sabrewolves',
    teamId: 'san-diego-sabrewolves',
    totalAwards: 5,
    seasons: 'Season 2, Season 3',
    highlights: 'CCH single-game scoring record (56 PTS); 2-time scoring leader.'
  },
  {
    player: 'Andor Marai',
    team: 'California Reds',
    teamId: 'california-reds',
    totalAwards: 4,
    seasons: 'Season 2, Season 3, Season 4',
    highlights: 'S4 Week 1 Winner (24 PTS, 11 REB, 83.3% FG); 7\'2" interior titan.'
  },
  {
    player: 'Mo Alexander',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    totalAwards: 4,
    seasons: 'Season 1, Season 2, Season 3',
    highlights: '3-time DPOY; Defensive Triple Crown winner; Interior wall for Dynamics.'
  },
  {
    player: 'Joshua Bowen',
    team: 'Oakland Renegades',
    teamId: 'oakland-renegades',
    totalAwards: 3,
    seasons: 'Season 2, Season 3, Season 4',
    highlights: 'S4 Week 2 Winner (14.5 PTS, 11.5 REB, 4.5 AST); 4-0 Renegades anchor.'
  },
  {
    player: 'Alonzo Reece',
    team: 'Oakland Renegades',
    teamId: 'oakland-renegades',
    totalAwards: 3,
    seasons: 'Season 1, Season 3',
    highlights: '43-point single game explosion in S1; All-Star starter in S3.'
  },
  {
    player: 'Jack McMichael Jr.',
    team: 'Los Angeles Dynamics',
    teamId: 'los-angeles-dynamics',
    totalAwards: 3,
    seasons: 'Season 1, Season 2, Season 3',
    highlights: 'All-time assists leader; Master floor general with 96 OVR.'
  }
];
