import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Shield,
  Zap,
  ChevronRight,
  BookOpen,
  Sparkles,
  Award,
  Calendar,
  Activity,
  MapPin,
  TrendingUp,
  BarChart3,
  ExternalLink
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import hinton42vsCalImg from '../assets/images/Hinton42_s4vsCAL.png';
import jDeanVsSacImg from '../assets/images/JDean_vs_SACs4.png';
import maraiVsLbImg from '../assets/images/Marai_vs_LBs4.png';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import sjAtFre1Img from '../assets/images/SJatFREs4_1.png';
import carltonDaughertyImg from '../assets/images/S4 Draft/Carlton Daugherty.png';
import boomerVsSacImg from '../assets/images/Boomer_VS_SAC1.png';
import daughertyVsCalImg from '../assets/images/Daugherty_vs_CAL1.png';
import deanVsSfImg from '../assets/images/DeanSFS1.png';
import calVsOakImg from '../assets/images/CALvsOAKs1.png';

interface LatestGamesShowcaseProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

interface GameHighlight {
  id: string;
  articleId: string;
  date: string;
  headline: string;
  subheadline: string;
  narrative: string;
  venue: string;
  city: string;
  winner: {
    id: string;
    name: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  loser: {
    id: string;
    name: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  quarters: { period: string; team1: number; team2: number }[];
  starPlayer: {
    name: string;
    number: string;
    team: string;
    position: string;
    statline: string;
    highlightPill: string;
    image: string;
  };
  keyStats: { label: string; value: string; desc: string }[];
  secondaryPerformers: { name: string; team: string; stat: string }[];
  badgeColor: string;
  tagIcon: 'flame' | 'shield' | 'zap' | 'sparkles';
  tagText: string;
}

const HIGHLIGHT_GAMES: GameHighlight[] = [
  {
    id: 'game-13',
    articleId: 's4-g13-mad-dogs-dominate-stallions',
    date: 'Oct 31 • Season 4 Game 13',
    headline: 'Fresno Mad Dogs 64, Sacramento Stallions 48',
    subheadline: 'Boomer Erupts for 26 PTS (9-14 FG); Mad Dogs Stay Unbeaten at 2-0; Stallions Fall to 0-3',
    narrative:
      'Lloyd Boomer was unstoppable for the Mad Dogs, dropping a game-high 26 points on 9-for-14 shooting to keep Fresno undefeated. The Mad Dogs dominated the paint 40-20 and forced 16 turnovers. Defending champion Stallions drop to 0-3.',
    venue: 'Save Mart Center',
    city: 'Fresno, CA',
    winner: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      score: 64,
      record: '2-0 (3rd)',
      isHome: true,
    },
    loser: {
      id: 'sacramento-stallions',
      name: 'Sacramento Stallions',
      score: 48,
      record: '0-3 (12th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 12, team2: 16 },
      { period: 'Q2', team1: 10, team2: 18 },
      { period: 'Q3', team1: 14, team2: 15 },
      { period: 'Q4', team1: 12, team2: 15 },
    ],
    starPlayer: {
      name: 'Lloyd Boomer',
      number: '#2',
      team: 'Fresno Mad Dogs',
      position: 'G • 89 OVR',
      statline: '26 PTS • 5 REB • 3 AST • 9-14 FG (Game High)',
      highlightPill: '26-POINT EXPLOSION & 2-0 RECORD',
      image: boomerVsSacImg,
    },
    keyStats: [
      { label: 'Lloyd Boomer', value: '26 PTS (9/14 FG)', desc: 'Game-High Scoring Clinic' },
      { label: 'Paint Dominance', value: '40 - 20 Paint PTS', desc: 'Mad Dogs Controlled the Interior' },
      { label: 'Defense & Turnovers', value: '16 Forced TOs', desc: 'Fresno Relentless Pressure' },
      { label: 'Stallions Road Woes', value: '0 - 3 Record', desc: 'Defending Champions Slump' },
    ],
    secondaryPerformers: [
      { name: 'Cameron Graham (FRE)', team: 'Mad Dogs', stat: '14 PTS, 8 REB, 2 BLK (6-10 FG)' },
      { name: 'Geraldo Jones (FRE)', team: 'Mad Dogs', stat: '10 PTS, 7 REB (4-7 FG)' },
      { name: 'Adrian Pognotti (SAC)', team: 'Stallions', stat: '16 PTS, 5 REB, 2 BLK' },
      { name: 'Gemini Jackson (SAC)', team: 'Stallions', stat: '11 PTS, 6 BLK, 4 AST, 2 STL' },
    ],
    badgeColor: 'border-blue-500/60 from-blue-950/40 via-slate-900 to-indigo-950/30',
    tagIcon: 'flame',
    tagText: 'PAINT DOMINANCE • MAD DOGS 2-0',
  },
  {
    id: 'game-12',
    articleId: 's4-g12-enterprise-edge-reds-daugherty',
    date: 'Oct 29 • Season 4 Game 12',
    headline: 'Golden State Enterprise 65, California Reds 58',
    subheadline: '#1 Pick Carlton Daugherty Drops 20 in Debut; Enterprise Defends Home Floor (1-0)',
    narrative:
      '#1 overall pick Carlton Daugherty scored 20 points in his pro debut, leading Golden State Enterprise to a 65-58 victory over the California Reds. Cameron Barkley controlled the glass with 14 points, 9 rebounds, and 3 blocks.',
    venue: 'San Jose Arena',
    city: 'San Jose, CA',
    winner: {
      id: 'golden-state-enterprise',
      name: 'Golden State Enterprise',
      score: 65,
      record: '1-0 (5th)',
      isHome: true,
    },
    loser: {
      id: 'california-reds',
      name: 'California Reds',
      score: 58,
      record: '2-3 (6th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 15, team2: 17 },
      { period: 'Q2', team1: 14, team2: 16 },
      { period: 'Q3', team1: 15, team2: 16 },
      { period: 'Q4', team1: 14, team2: 16 },
    ],
    starPlayer: {
      name: 'Carlton Daugherty',
      number: '#1',
      team: 'Golden State Enterprise',
      position: 'G • 88 OVR',
      statline: '20 PTS • 4 REB • 3 AST • 8-14 FG in Rookie Debut',
      highlightPill: '20 PTS IN #1 PICK DEBUT',
      image: daughertyVsCalImg,
    },
    keyStats: [
      { label: 'Carlton Daugherty', value: '20 PTS (8/14 FG)', desc: '#1 Pick Statement Debut' },
      { label: 'Cameron Barkley', value: '14 PTS • 9 REB', desc: '3 BLK Interior Muscle' },
      { label: 'Rebound Advantage', value: '38 - 31 REB', desc: 'Enterprise Controlled Glass' },
      { label: 'Enterprise Record', value: '1 - 0 (5th)', desc: 'Perfect Season Opener' },
    ],
    secondaryPerformers: [
      { name: 'Cameron Barkley (GSE)', team: 'Enterprise', stat: '14 PTS, 9 REB, 3 BLK (6-11 FG)' },
      { name: 'Terrence West (GSE)', team: 'Enterprise', stat: '11 PTS, 6 AST, 2 STL' },
      { name: 'Andor Marai (CAL)', team: 'Reds', stat: '19 PTS, 10 REB, 2 BLK' },
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '14 PTS, 6 REB, 1 STL' },
    ],
    badgeColor: 'border-cyan-500/60 from-cyan-950/40 via-slate-900 to-blue-950/30',
    tagIcon: 'sparkles',
    tagText: '#1 PICK DEBUT • ENTERPRISE 1-0',
  },
  {
    id: 'game-11',
    articleId: 's4-g11-renegades-bury-knights',
    date: 'Oct 29 • Season 4 Game 11',
    headline: 'Oakland Renegades 66, San Francisco Knights 52',
    subheadline: '23-Point 2nd Quarter Surge Sparks Renegades to 4-0; Dean (22 PTS) & Moon (13 PTS) Shine',
    narrative:
      'The Oakland Renegades took complete command of first place in CCH with a 66-52 victory over San Francisco, fueled by a devastating 23-11 second quarter blitz. Jamar Dean scored 22 and newly signed Jaycee Moon added 13 off the bench.',
    venue: 'Oakland Arena',
    city: 'Oakland, CA',
    winner: {
      id: 'oakland-renegades',
      name: 'Oakland Renegades',
      score: 66,
      record: '4-0 (1st)',
      isHome: true,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      score: 52,
      record: '0-1 (8th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 14, team2: 15 },
      { period: 'Q2', team1: 11, team2: 23 },
      { period: 'Q3', team1: 13, team2: 14 },
      { period: 'Q4', team1: 14, team2: 14 },
    ],
    starPlayer: {
      name: 'Jamar Dean',
      number: '#3',
      team: 'Oakland Renegades',
      position: 'G • 96 OVR',
      statline: '22 PTS • 5 AST • 4 REB • 8-15 FG • League-Leading 4-0',
      highlightPill: '22 PTS & 2ND QUARTER SURGE',
      image: deanVsSfImg,
    },
    keyStats: [
      { label: 'Jamar Dean', value: '22 PTS • 5 AST', desc: 'Game-High Scorer & General' },
      { label: 'Jaycee Moon Debut', value: '13 PTS (5/8 FG)', desc: 'Instant Spark Off Bench' },
      { label: '2nd Quarter Blitz', value: '23 - 11 Run', desc: 'Decisive Scoring Explosion' },
      { label: 'Renegades Standing', value: '4 - 0 (1st)', desc: 'Sole Undefeated 4-0 Squad' },
    ],
    secondaryPerformers: [
      { name: 'Jaycee Moon (OAK)', team: 'Renegades', stat: '13 PTS, 3 AST, 2 STL (5-8 FG)' },
      { name: 'Joshua Bowen (OAK)', team: 'Renegades', stat: '12 PTS, 10 REB, 2 BLK' },
      { name: 'Gheorghe Stefan (SF)', team: 'Knights', stat: '16 PTS, 6 REB, 2 BLK' },
      { name: 'Damian Gilmore (SF)', team: 'Knights', stat: '14 PTS, 4 AST, 2 REB' },
    ],
    badgeColor: 'border-amber-500/60 from-amber-950/40 via-slate-900 to-yellow-950/30',
    tagIcon: 'zap',
    tagText: 'LEAGUE LEADERS • RENEGADES 4-0',
  },
  {
    id: 'game-10',
    articleId: 's4-g10-renegades-crush-reds-dean-36',
    date: 'Oct 27 • Season 4 Game 10',
    headline: 'Oakland Renegades 74, California Reds 50',
    subheadline: 'Dean Catches Fire for 36 PTS (13-18 FG); Bowen Grabs 20 PTS & 14 REB in Blowout',
    narrative:
      'Jamar Dean put on an offensive masterpiece, exploding for 36 points on 13-of-18 shooting, while Joshua Bowen notched 20 points, 14 rebounds, and 5 assists to pace Oakland past California.',
    venue: 'California Pavilion',
    city: 'Fresno, CA',
    winner: {
      id: 'oakland-renegades',
      name: 'Oakland Renegades',
      score: 74,
      record: '3-0 (1st)',
      isHome: false,
    },
    loser: {
      id: 'california-reds',
      name: 'California Reds',
      score: 50,
      record: '2-2 (6th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 19, team2: 13 },
      { period: 'Q2', team1: 18, team2: 12 },
      { period: 'Q3', team1: 20, team2: 14 },
      { period: 'Q4', team1: 17, team2: 11 },
    ],
    starPlayer: {
      name: 'Jamar Dean',
      number: '#3',
      team: 'Oakland Renegades',
      position: 'G • 96 OVR',
      statline: '36 PTS • 13-18 FG • 4-5 3PT • 5 REB • 3 AST',
      highlightPill: '36-POINT CLINIC (72.2% FG)',
      image: calVsOakImg,
    },
    keyStats: [
      { label: 'Jamar Dean Clinic', value: '36 PTS (13/18 FG)', desc: '72.2% FG • 4/5 3PT' },
      { label: 'Joshua Bowen', value: '20 PTS • 14 REB', desc: '5 AST, 3 BLK Interior Dominance' },
      { label: 'Renegades FG%', value: '58.5% FG', desc: '31/53 Team Shooting' },
      { label: 'Reds 3-Point Defense', value: '2 / 14 3PT', desc: 'Reds Held to 14.3% from Deep' },
    ],
    secondaryPerformers: [
      { name: 'Joshua Bowen (OAK)', team: 'Renegades', stat: '20 PTS, 14 REB, 5 AST, 3 BLK' },
      { name: 'Alonzo Reece (OAK)', team: 'Renegades', stat: '10 PTS, 8 AST, 3 STL' },
      { name: 'Andor Marai (CAL)', team: 'Reds', stat: '18 PTS, 11 REB, 2 BLK' },
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '12 PTS, 7 REB, 1 STL' },
    ],
    badgeColor: 'border-yellow-500/60 from-yellow-950/40 via-slate-900 to-amber-950/30',
    tagIcon: 'flame',
    tagText: '36-PT SCORING MASTERCLASS',
  },
  {
    id: 'game-9',
    articleId: 's4-g9-reds-bounce-back-vipers',
    date: 'Oct 25 • Season 4 Game 9',
    headline: 'California Reds 68, Long Beach Vipers 61',
    subheadline: 'Marai (21 PTS) and Rodman (17 PTS) Fuel Reds Rebound; Vipers Fall to 0-2',
    narrative:
      'Despite a tough loss to the Strykers, the Reds (2-1) bounced back behind 21 points from Andor Marai and 17 points from Donald Rodman. The Vipers fall to 0-2.',
    venue: 'The LBC Pit',
    city: 'Long Beach, CA',
    winner: {
      id: 'california-reds',
      name: 'California Reds',
      score: 68,
      record: '2-1 (4th)',
      isHome: false,
    },
    loser: {
      id: 'long-beach-vipers',
      name: 'Long Beach Vipers',
      score: 61,
      record: '0-2 (12th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 18, team2: 14 },
      { period: 'Q2', team1: 17, team2: 16 },
      { period: 'Q3', team1: 16, team2: 15 },
      { period: 'Q4', team1: 17, team2: 16 },
    ],
    starPlayer: {
      name: 'Andor Marai',
      number: '#33',
      team: 'California Reds',
      position: 'C • 93 OVR',
      statline: '21 PTS • 10 REB • 2 BLK • 9-15 FG (Paint Dominance)',
      highlightPill: '21-PT DOUBLE-DOUBLE & BOUNCE BACK',
      image: maraiVsLbImg,
    },
    keyStats: [
      { label: 'Andor Marai', value: '21 PTS • 10 REB', desc: 'Double-Double Inside Titan' },
      { label: 'Donald Rodman', value: '17 PTS • 8 REB', desc: 'Crucial Secondary Paint Punch' },
      { label: 'Points in Paint', value: '42 PTS', desc: 'Reds Dominated Interior Attack' },
      { label: 'Vipers Season Record', value: '0 - 2', desc: 'Long Beach Slumps Early' },
    ],
    secondaryPerformers: [
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '17 PTS, 8 REB, 3 STL (7-12 FG)' },
      { name: 'Kyle Robinson (CAL)', team: 'Reds', stat: '12 PTS, 6 AST, 2 REB' },
      { name: 'Maxwell Mayo (LB)', team: 'Vipers', stat: '16 PTS, 5 REB, 2 AST' },
      { name: 'Grok Wilkens (LB)', team: 'Vipers', stat: '14 PTS, 9 REB, 2 BLK' },
    ],
    badgeColor: 'border-red-500/60 from-red-950/40 via-slate-900 to-rose-950/30',
    tagIcon: 'zap',
    tagText: 'REDS BOUNCE BACK • 2-1 RECORD',
  },
  {
    id: 'game-8',
    articleId: 's4-g8-renegades-edge-stallions',
    date: 'Oct 25 • Season 4 Game 8',
    headline: 'Oakland Renegades 57, Sacramento Stallions 50',
    subheadline: 'Renegades Move to 2-0 Behind Dean & Reece; Stallions Drop to 0-2',
    narrative:
      'The Renegades remain undefeated at 2-0 thanks to a gritty defensive effort. Jamar Dean paced the offense with 16 points, while Alonzo Reece added 14 points and 5 steals. For the 0-2 Stallions, Gemini Jackson was a bright spot, stuffing the stat sheet with 13 points, 4 assists, 2 steals, and an impressive 3 blocks.',
    venue: 'Oakland Arena',
    city: 'Oakland, CA',
    winner: {
      id: 'oakland-renegades',
      name: 'Oakland Renegades',
      score: 57,
      record: '2-0 (2nd)',
      isHome: true,
    },
    loser: {
      id: 'sacramento-stallions',
      name: 'Sacramento Stallions',
      score: 50,
      record: '0-2 (10th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 12, team2: 15 },
      { period: 'Q2', team1: 14, team2: 13 },
      { period: 'Q3', team1: 11, team2: 16 },
      { period: 'Q4', team1: 13, team2: 13 },
    ],
    starPlayer: {
      name: 'Jamar Dean & Alonzo Reece',
      number: '#3 & #1',
      team: 'Oakland Renegades',
      position: 'Super Backcourt • 96 & 92 OVR',
      statline: '30 PTS Combined • 5 STL • 6 AST • Lockdown Defense',
      highlightPill: 'DUAL BACKCOURT LEADERSHIP',
      image: jDeanVsSacImg,
    },
    keyStats: [
      { label: 'Jamar Dean', value: '16 PTS', desc: 'Team-High Scoring Leader' },
      { label: 'Alonzo Reece', value: '14 PTS • 5 STL', desc: 'Perimeter Defensive Anchor' },
      { label: 'Gemini Jackson (SAC)', value: '13 PTS • 3 BLK', desc: 'Stallions Standout (4 AST, 2 STL)' },
      { label: 'Defending Champions Record', value: '0 - 2', desc: 'Stallions Drop Second Straight' },
    ],
    secondaryPerformers: [
      { name: 'Joshua Bowen (OAK)', team: 'Renegades', stat: '10 PTS, 8 REB, 2 BLK (4-7 FG)' },
      { name: 'Gemini Jackson (SAC)', team: 'Stallions', stat: '13 PTS, 4 AST, 2 STL, 3 BLK' },
      { name: 'Frank Hackett (SAC)', team: 'Stallions', stat: '11 PTS, 7 REB, 1 AST' },
      { name: 'Adrian Pognotti (SAC)', team: 'Stallions', stat: '10 PTS, 9 REB, 3 BLK' },
    ],
    badgeColor: 'border-amber-500/60 from-amber-950/40 via-slate-900 to-yellow-950/30',
    tagIcon: 'shield',
    tagText: 'DEFENSIVE CLINIC • RENEGADES 2-0',
  },
  {
    id: 'game-7',
    articleId: 's4-g7-strykers-rout-reds-hinton-42',
    date: 'Oct 22 • Season 4 Game 7',
    headline: 'San Diego Strykers 102, California Reds 64',
    subheadline: 'Hinton Erupts for 42 Points on 12-of-14 from Three as Strykers Cruise to 3-0',
    narrative:
      'The Strykers are looking utterly unstoppable, improving to a perfect 3-0 record with a staggering 38-point demolition of the California Reds. Superstar guard A.J. Hinton delivered a performance for the ages, erupting for a game-high 42 points on a blistering 15-of-17 shooting from the field, including a perfect 12-for-14 from beyond the arc. Ray Gamble contributed 17 points and 5 assists in the blowout. The Strykers shot a scorching 67% from the floor, leading by as many as 40 points.',
    venue: 'San Diego Arena',
    city: 'San Diego, CA',
    winner: {
      id: 'san-diego-strykers',
      name: 'San Diego Strykers',
      score: 102,
      record: '3-0 (1st)',
      isHome: true,
    },
    loser: {
      id: 'california-reds',
      name: 'California Reds',
      score: 64,
      record: '1-1',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 18, team2: 28 },
      { period: 'Q2', team1: 16, team2: 26 },
      { period: 'Q3', team1: 14, team2: 27 },
      { period: 'Q4', team1: 16, team2: 21 },
    ],
    starPlayer: {
      name: 'A.J. Hinton',
      number: '#23',
      team: 'San Diego Strykers',
      position: 'SG/PG • 99 OVR',
      statline: '42 PTS • 15-17 FG • 12-14 3PT • 4 AST • 3 STL',
      highlightPill: '42-POINT MASTERCLASS (12 3PM)',
      image: hinton42vsCalImg,
    },
    keyStats: [
      { label: 'Hinton 3-Point Clinic', value: '12 / 14 3PT', desc: '85.7% from Beyond the Arc' },
      { label: 'Field Goal %', value: '67.2%', desc: '39 of 58 Total FGs' },
      { label: 'Largest Lead', value: '+40 PTS', desc: 'Final Margin +38' },
      { label: 'Season 4 Scoring High', value: '102 PTS', desc: 'First 100-Point Game of S4' },
    ],
    secondaryPerformers: [
      { name: 'Ray Gamble (SD)', team: 'Strykers', stat: '17 PTS, 5 AST, 3 REB (7-11 FG)' },
      { name: 'DeAnte Gray (SD)', team: 'Strykers', stat: '14 PTS, 6 REB, 4 AST (6-9 FG)' },
      { name: 'Andor Marai (CAL)', team: 'Reds', stat: '18 PTS, 8 REB, 2 BLK (8-14 FG)' },
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '14 PTS, 6 REB, 1 STL' },
    ],
    badgeColor: 'border-orange-500/60 from-orange-950/40 via-slate-900 to-amber-950/30',
    tagIcon: 'flame',
    tagText: '38-POINT BLOWOUT • 3-0 RECORD',
  },
];

export const LatestGamesShowcase: React.FC<LatestGamesShowcaseProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [selectedGameId, setSelectedGameId] = useState<string>('game-9');

  const activeGame = HIGHLIGHT_GAMES.find((g) => g.id === selectedGameId) || HIGHLIGHT_GAMES[0];

  return (
    <div
      id="latest-games-showcase-section"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950/40 border-2 border-amber-500/60 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-all" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Top Header Bar with Live Badge & Quick Game Selectors */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4 relative z-10 border-b border-slate-800 pb-5">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="flex h-3 w-3 rounded-full bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse" />
            <span className="text-xs font-black uppercase tracking-widest bg-amber-500 text-slate-950 px-3 py-1 rounded-md font-mono flex items-center gap-1.5 shadow">
              🔥 LATEST SEASON 4 ACTION
            </span>
            <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded-md border border-amber-500/30">
              OCTOBER SLATE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
            Season 4 Recent Matchups &amp; Highlights
          </h2>
        </div>

        {/* Game Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-2 max-w-full">
          {HIGHLIGHT_GAMES.map((game) => {
            const isSelected = game.id === selectedGameId;
            const winnerShort =
              game.winner.id === 'san-diego-strykers'
                ? 'Strykers'
                : game.winner.id === 'california-reds'
                ? 'Reds'
                : game.winner.id === 'oakland-renegades'
                ? 'Renegades'
                : game.winner.name.split(' ').pop();
            const loserShort =
              game.loser.id === 'san-diego-strykers'
                ? 'Strykers'
                : game.loser.id === 'california-reds'
                ? 'Reds'
                : game.loser.id === 'sacramento-stallions'
                ? 'Stallions'
                : game.loser.id === 'long-beach-vipers'
                ? 'Vipers'
                : game.loser.name.split(' ').pop();
            return (
              <button
                key={game.id}
                onClick={() => setSelectedGameId(game.id)}
                className={`px-3 py-2 rounded-2xl font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 sm:gap-2 transition-all cursor-pointer whitespace-nowrap border shrink-0 ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-lg shadow-amber-500/25 ring-2 ring-amber-400/40 scale-[1.02]'
                    : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {game.tagIcon === 'flame' && (
                  <Flame size={14} className={isSelected ? 'fill-slate-950 text-slate-950 shrink-0' : 'text-orange-400 shrink-0'} />
                )}
                {game.tagIcon === 'shield' && (
                  <Shield size={14} className={isSelected ? 'fill-slate-950 text-slate-950 shrink-0' : 'text-purple-400 shrink-0'} />
                )}
                {game.tagIcon === 'zap' && (
                  <Zap size={14} className={isSelected ? 'fill-slate-950 text-slate-950 shrink-0' : 'text-red-400 shrink-0'} />
                )}
                {game.tagIcon === 'sparkles' && (
                  <Sparkles size={14} className={isSelected ? 'fill-slate-950 text-slate-950 shrink-0' : 'text-cyan-400 shrink-0'} />
                )}
                <span>
                  {winnerShort} {game.winner.score}, {loserShort} {game.loser.score}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Primary Featured Game Content Container */}
      <div className={`bg-gradient-to-br ${activeGame.badgeColor} border-2 rounded-3xl p-5 sm:p-7 space-y-6 shadow-2xl relative z-10 transition-all`}>
        {/* Game Headline & Narrative Block */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2 font-mono text-xs text-amber-300 font-bold">
              <Calendar size={14} className="text-amber-400" />
              <span>{activeGame.date}</span>
              <span className="text-slate-500">•</span>
              <MapPin size={14} className="text-amber-400" />
              <span>
                {activeGame.venue} • {activeGame.city}
              </span>
            </div>
            <span className="text-[10px] font-mono font-black uppercase px-2.5 py-0.5 rounded bg-black/40 text-amber-300 border border-amber-500/30">
              {activeGame.tagText}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {activeGame.headline}
              </h3>
              <p className="text-sm sm:text-base font-bold text-amber-300/90">
                {activeGame.subheadline}
              </p>
            </div>

            <button
              onClick={() => onNavigateToNews(activeGame.articleId)}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer shrink-0 self-start lg:self-center"
            >
              <BookOpen size={16} />
              <span>Read Full Game Recap</span>
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Core Official User Narrative Paragraph */}
          <div className="bg-slate-950/80 border border-slate-800 p-4 sm:p-5 rounded-2xl">
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-normal">
              {activeGame.narrative}
            </p>
          </div>
        </div>

        {/* Scoreboard Banner & Quarter Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Main Visual Scoreboard (Cols 1-7) */}
          <div className="lg:col-span-7 bg-slate-950/90 border border-slate-800 rounded-2xl p-4 sm:p-6 flex flex-col justify-between space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-[11px] font-mono font-black uppercase tracking-wider text-slate-400">
                OFFICIAL FINAL SCORE
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                FINAL
              </span>
            </div>

            {/* Teams & Scores Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 items-center py-2">
              {/* Winner Side */}
              <div
                onClick={() => onSelectTeam && onSelectTeam(activeGame.winner.id)}
                className="flex items-center justify-between gap-2.5 p-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 hover:border-amber-400 cursor-pointer transition-all group/win overflow-hidden"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <TeamBadge teamId={activeGame.winner.id} size="md" />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-black text-white group-hover/win:text-amber-300 transition-colors truncate">
                      {activeGame.winner.name}
                    </h4>
                    <div className="text-[10px] sm:text-[11px] font-mono text-emerald-400 font-bold truncate">
                      {activeGame.winner.record} • {activeGame.winner.isHome ? 'Home' : 'Away'}
                    </div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white font-mono shrink-0 pl-1.5">
                  {activeGame.winner.score}
                </div>
              </div>

              {/* Loser Side */}
              <div
                onClick={() => onSelectTeam && onSelectTeam(activeGame.loser.id)}
                className="flex items-center justify-between gap-2.5 p-3 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all group/lose overflow-hidden"
              >
                <div className="flex items-center gap-2.5 min-w-0 flex-1">
                  <TeamBadge teamId={activeGame.loser.id} size="md" />
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm sm:text-base font-black text-slate-300 group-hover/lose:text-white transition-colors truncate">
                      {activeGame.loser.name}
                    </h4>
                    <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 truncate">
                      {activeGame.loser.record} • {activeGame.loser.isHome ? 'Home' : 'Away'}
                    </div>
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-400 font-mono shrink-0 pl-1.5">
                  {activeGame.loser.score}
                </div>
              </div>
            </div>

            {/* Quarter Box Scores Table */}
            {(() => {
              const q1Sum = activeGame.quarters.reduce((acc, q) => acc + q.team1, 0);
              const isFirstTeamWinner = q1Sum === activeGame.winner.score;
              const firstTeam = isFirstTeamWinner ? activeGame.winner : activeGame.loser;
              const secondTeam = isFirstTeamWinner ? activeGame.loser : activeGame.winner;

              return (
                <div className="overflow-x-auto border-t border-slate-800/80 pt-3">
                  <table className="w-full text-xs font-mono">
                    <thead>
                      <tr className="text-slate-400 text-[10px] uppercase border-b border-slate-800">
                        <th className="text-left py-1 font-bold">Team</th>
                        {activeGame.quarters.map((q) => (
                          <th key={q.period} className="text-center py-1 font-bold">
                            {q.period}
                          </th>
                        ))}
                        <th className="text-right py-1 font-bold text-amber-400">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      <tr>
                        <td className="py-1.5 font-bold text-white flex items-center gap-1.5">
                          <TeamBadge teamId={firstTeam.id} size="xs" />
                          <span>{firstTeam.name.split(' ').pop()}</span>
                        </td>
                        {activeGame.quarters.map((q) => (
                          <td key={q.period} className="text-center py-1.5 text-slate-300">
                            {q.team1}
                          </td>
                        ))}
                        <td className={`text-right py-1.5 font-black ${isFirstTeamWinner ? 'text-amber-400' : 'text-slate-300'}`}>
                          {firstTeam.score}
                        </td>
                      </tr>
                      <tr>
                        <td className="py-1.5 font-bold text-white flex items-center gap-1.5">
                          <TeamBadge teamId={secondTeam.id} size="xs" />
                          <span>{secondTeam.name.split(' ').pop()}</span>
                        </td>
                        {activeGame.quarters.map((q) => (
                          <td key={q.period} className="text-center py-1.5 text-slate-300">
                            {q.team2}
                          </td>
                        ))}
                        <td className={`text-right py-1.5 font-black ${!isFirstTeamWinner ? 'text-amber-400' : 'text-slate-300'}`}>
                          {secondTeam.score}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            })()}
          </div>

          {/* Star Player Spotlight Card (Cols 8-12) */}
          <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
              <span className="text-[10px] font-mono font-black uppercase text-amber-400 flex items-center gap-1">
                <Sparkles size={12} className="text-amber-400" />
                PLAYER OF THE GAME SPOTLIGHT
              </span>
              <span className="text-[10px] font-mono font-bold text-slate-400">
                {activeGame.starPlayer.position}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-900 border-2 border-amber-500/50 overflow-hidden shrink-0 shadow-lg">
                <img
                  src={activeGame.starPlayer.image}
                  alt={activeGame.starPlayer.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-1 min-w-0 flex-1">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                  {activeGame.starPlayer.highlightPill}
                </span>
                <h4 className="text-lg sm:text-xl font-black text-white mt-1">
                  {activeGame.starPlayer.name}
                </h4>
                <p className="text-xs font-mono text-amber-300 font-bold">
                  {activeGame.starPlayer.statline}
                </p>
              </div>
            </div>

            {/* Supporting Box Performer Chips */}
            <div className="space-y-1.5 pt-2 border-t border-slate-800/80 text-[11px] font-mono">
              <span className="text-slate-400 text-[10px] uppercase font-bold block">
                Top Game Performers:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {activeGame.secondaryPerformers.map((p, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/80 px-2.5 py-1 rounded-lg border border-slate-800 text-slate-200"
                  >
                    <span className="font-bold text-white">{p.name}: </span>
                    <span className="text-slate-300 text-[10px]">{p.stat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 4 Key Stat Metric Boxes */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {activeGame.keyStats.map((stat, i) => (
            <div
              key={i}
              className="bg-slate-950/80 border border-slate-800/80 p-3 sm:p-4 rounded-2xl space-y-1 text-center"
            >
              <span className="text-[10px] font-mono text-slate-400 font-bold uppercase block">
                {stat.label}
              </span>
              <div className="text-lg sm:text-2xl font-black text-amber-400 font-mono">
                {stat.value}
              </div>
              <span className="text-[10px] text-slate-400 block">
                {stat.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Nav Bar with Quick Links */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateToNews(activeGame.articleId)}
              className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer bg-transparent border-0"
            >
              <BookOpen size={14} />
              <span>Full Box Score &amp; Player Quotes</span>
              <ChevronRight size={14} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigateToTab && onNavigateToTab('standings')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <TrendingUp size={13} className="text-amber-400" />
              <span>S4 Standings (Strykers 3-0)</span>
            </button>
            <button
              onClick={() => onNavigateToTab && onNavigateToTab('schedule')}
              className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
            >
              <Calendar size={13} className="text-amber-400" />
              <span>Full Schedule</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mini Cards for All 3 Games in the Set */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <BarChart3 size={14} className="text-amber-400" />
            Quick Overview: All 3 Matchups in this Slate
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            Click any game card to expand
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HIGHLIGHT_GAMES.map((game) => {
            const isSelected = game.id === selectedGameId;
            return (
              <div
                key={game.id}
                onClick={() => setSelectedGameId(game.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group/card ${
                  isSelected
                    ? 'bg-slate-900/95 border-amber-500 shadow-xl ring-2 ring-amber-400/30'
                    : 'bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/50'
                }`}
              >
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800/80 pb-2 mb-3">
                  <span>{game.date.split('•')[0].trim()}</span>
                  <span className="font-bold text-amber-400">{game.venue.split(' ')[0]}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <TeamBadge teamId={game.winner.id} size="xs" />
                      <span className="text-sm font-black text-white truncate">
                        {game.winner.id === 'san-diego-strykers'
                          ? 'SD Strykers'
                          : game.winner.id === 'california-reds'
                          ? 'California Reds'
                          : game.winner.id === 'oakland-renegades'
                          ? 'Oakland Renegades'
                          : game.winner.name}
                      </span>
                    </div>
                    <span className="text-base font-mono font-black text-amber-400 shrink-0">
                      {game.winner.score}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <TeamBadge teamId={game.loser.id} size="xs" />
                      <span className="text-sm font-bold text-slate-400 truncate">
                        {game.loser.id === 'san-diego-strykers'
                          ? 'SD Strykers'
                          : game.loser.id === 'california-reds'
                          ? 'California Reds'
                          : game.loser.id === 'sacramento-stallions'
                          ? 'Sacramento Stallions'
                          : game.loser.id === 'long-beach-vipers'
                          ? 'Long Beach Vipers'
                          : game.loser.name}
                      </span>
                    </div>
                    <span className="text-base font-mono font-bold text-slate-400 shrink-0">
                      {game.loser.score}
                    </span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-300 mt-3 leading-relaxed">
                  {game.narrative}
                </p>

                <div className="flex items-center justify-between pt-3 mt-3 border-t border-slate-800/80 text-[10px] font-mono text-amber-400 font-bold">
                  <span>{game.starPlayer.highlightPill.split('(')[0].trim()}</span>
                  <span className="group-hover/card:translate-x-1 transition-transform">
                    {isSelected ? 'Selected' : 'View Details →'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
