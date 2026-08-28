export type Conference = 'Northern Cali' | 'Southern Cali';

export interface Team {
  id: string;
  name: string;
  shortName: string;
  abbreviation: string;
  city: string;
  conference: Conference;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  iconName: string;
  description: string;
  keyPlayers: string[];
  coach?: string;
  executive?: string;
  titles: string[];
  s1Record: string;
  s2Record: string;
  s3Record: string;
}

export interface PlayerSeasonStat {
  season: 1 | 2 | 3 | 4;
  team: string;
  teamId?: string;
  ppg: number;
  rpg: number;
  apg: number;
  spg?: number;
  bpg?: number;
  fgPct?: number;
  threePct?: number;
  ftPct?: number;
  mpg?: number;
  gamesPlayed?: number;
}

export interface PlayerAwardItem {
  season: 1 | 2 | 3 | 4;
  title: string;
  type: 'championship' | 'mvp' | 'major_award' | 'all_cali' | 'all_defensive' | 'all_rookie' | 'all_star' | 'stat_leader' | 'record' | 'milestone';
  description?: string;
}

export interface Player {
  id: string;
  name: string;
  teamId: string;
  teamName: string;
  position: string;
  jersey?: string;
  height?: string;
  weight?: string;
  college?: string;
  ovr?: number;
  archetype?: string;
  ppg?: number;
  rpg?: number;
  apg?: number;
  spg?: number;
  bpg?: number;
  fgPct?: number;
  ftPct?: number;
  threePct?: number;
  mpg?: number;
  accolades: string[];
  awardsList?: PlayerAwardItem[];
  seasonStats?: PlayerSeasonStat[];
  careerHighs?: {
    points?: number;
    rebounds?: number;
    assists?: number;
    steals?: number;
    blocks?: number;
    threePointers?: number;
  };
  attributes?: {
    scoring: number;
    shooting: number;
    playmaking: number;
    rebounding: number;
    interiorDef: number;
    perimeterDef: number;
    clutch: number;
    athleticism: number;
  };
  signaturePerformance?: string;
  bio: string;
}

export interface Award {
  season: 1 | 2 | 3 | 4;
  category: string;
  player: string;
  team: string;
  statDetails?: string;
  description: string;
}

export interface StandingsRow {
  rank: number;
  teamId: string;
  teamName: string;
  conference: Conference;
  wins: number;
  losses: number;
  ppg: number;
  streak: string;
  clinchedPlayoffs: boolean;
  clinchedTopSeed?: boolean;
  homeRecord?: string;
  awayRecord?: string;
  confRecord?: string;
  oppPpg?: number;
  diff?: number;
  l10?: string;
  teamOvr?: number;
  keyStars?: string;
  headCoach?: string;
  powerRank?: number;
  notes?: string;
}

export interface GameRecord {
  id: string;
  season: 1 | 2 | 3 | 4;
  date: string; // e.g. "Oct 17", "Nov 5"
  month: string; // "October", "November", etc.
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  highScorer?: string;
  points?: number;
  notes?: string;
  isPlayoff?: boolean;
  recapArticleId?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
}

export interface PlayoffGame {
  round: string; // "Quarterfinals", "Semis", "Finals"
  team1: string;
  seed1: number;
  score1: number;
  team2: string;
  seed2: number;
  score2: number;
  winner: string;
  notes?: string;
  recapArticleId?: string;
}

export interface StatRecord {
  id: string;
  category: string;
  player: string;
  team: string;
  statistic: string | number;
  opponentDate?: string;
  season: string;
  isSingleGame?: boolean;
  isTeamRecord?: boolean;
  description?: string;
}

export interface TeamSeasonRecap {
  teamId: string;
  season: 1 | 2 | 3 | 4;
  headline: string;
  summary: string;
  keyAccomplishments: string[];
  seasonAwards?: string[];
  playoffFinish: string;
  topPlayers?: Array<{
    name: string;
    role: string;
    statLine?: string;
  }>;
  keyWins?: string[];
}

export type DraftTier = 'Top Prospects' | 'Lottery Prospects' | 'Mid-Round Prospects' | 'Late Round / Two-Way';

export interface DraftPickResult {
  round: number;
  pickInRound: number;
  overallPick: number;
  teamId: string;
  teamName: string;
  teamAbbr?: string;
  playerName: string;
  shortName: string;
  position: string;
  ovr: number;
  school: string;
  notes?: string;
  prospectRank?: number;
  keyStrength?: string;
  archetype?: string;
}

export interface DraftProspect {
  rank: number;
  name: string;
  position: string;
  primaryPosition: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  secondaryPosition?: 'PG' | 'SG' | 'SF' | 'PF' | 'C';
  school: string;
  schoolType: 'California College' | 'NCAA / University' | 'International' | 'High School / JUCO';
  ovr: number;
  notableAttributes: string;
  keyStrength: string;
  archetype: string;
  tier: DraftTier;
  scoutingNotes: string;
  height?: string;
  weight?: string;
  proComparison?: string;
  gradeBadges: { label: string; grade: string; color: 'gold' | 'emerald' | 'blue' | 'purple' | 'amber' }[];
  isTopFiveWatch?: boolean;
}

