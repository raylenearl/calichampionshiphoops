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
  TrendingUp,
  BarChart3,
  ExternalLink,
  Tv
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import aCreekVsSjImg from '../assets/images/ACreek_vs_SJs4.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import boomerVsGsImg from '../assets/images/Boomer_vs_GS.png';
import ktVsSfImg from '../assets/images/KTvsSF_S4.png';
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
import maraiVsSfImg from '../assets/images/Marai_vs_SFs4.png';
import jDeanVsSdImg from '../assets/images/JDean_vs_SDs4.png';
import sdReboundS4Img from '../assets/images/SD_Rebound_S4.png';
import hintonVsJmjS4Img from '../assets/images/Hinton_vs_JMJs4.png';
import rjRush1Img from '../assets/images/RJRush1.png';
import cDaughertyVsSdImg from '../assets/images/CDaugherty_vs_SD.png';

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
  youtubeUrl?: string;
}

const HIGHLIGHT_GAMES: GameHighlight[] = [
  {
    id: 'game-24',
    articleId: 's4-g24-sabrewolves-edge-tigersharks-pierce-record',
    date: 'Nov 14 • Season 4',
    youtubeUrl: 'https://www.youtube.com/watch?v=U4PB1p0-A5M',
    headline: 'San Diego Sabrewolves 48, San Jose Tigersharks 43',
    subheadline: 'Sabrewolves Rally in 4th (18-11) Behind 10 Blocks & 23 Bench Points; Pierce Sets All-Time Record with 5 Steals',
    narrative:
      'The Sabrewolves captured their first home win of Season 4 with an 18-11 fourth-quarter surge to defeat the Tigersharks 48-43. San Diego registered 10 blocks and 23 bench points to overcome 15 team steals by San Jose, including rookie Malique Pierce shattering the all-time single-game steals record with 5 and Donald Hardy tying the previous mark with 4.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      score: 48,
      record: '2-3 (7th)',
      isHome: true,
    },
    loser: {
      id: 'san-jose-tigersharks',
      name: 'San Jose Tigersharks',
      score: 43,
      record: '0-2 (9th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 8, team2: 12 },
      { period: 'Q2', team1: 14, team2: 12 },
      { period: 'Q3', team1: 8, team2: 8 },
      { period: 'Q4', team1: 18, team2: 11 },
    ],
    starPlayer: {
      name: 'Andre Creek',
      number: '#45',
      team: 'San Diego Sabrewolves',
      position: 'C • 92 OVR',
      statline: '8 PTS (4-4 FG) • 13 REB (Game-High) • 2 AST • 2 BLK',
      highlightPill: 'PLAYER OF THE GAME • 13 REB & Rim Anchor',
      image: aCreekVsSjImg,
    },
    keyStats: [
      { label: 'Andre Creek', value: '8 PTS, 13 REB', desc: 'Player of the Game • 4-4 FG, 2 BLK' },
      { label: 'Malique Pierce', value: '5 STL', desc: 'All-Time Single-Game Steals Record' },
      { label: 'Donald Hardy', value: '15 PTS, 4 STL', desc: 'Game-High 15 PTS (3-4 3PT), 5 REB, 4 STL' },
      { label: 'Team Blocks', value: '10 - 0 SD', desc: 'Sabrewolves Rim Protection (Glover 3 BLK)' },
    ],
    secondaryPerformers: [
      { name: 'Malique Pierce (SJ)', team: 'Tigersharks', stat: '5 STL (All-Time Record), 3 AST, 2 REB (0 PTS, 0-5 FG)' },
      { name: 'Donald Hardy (SJ)', team: 'Tigersharks', stat: '15 PTS (Game-High, 3-4 3PT), 5 REB, 4 STL' },
      { name: 'Kirk Barnes (SD)', team: 'Sabrewolves', stat: '12 PTS (Team-High, 2 3PM), 2 REB, 1 BLK' },
      { name: 'Alan Perben (SD)', team: 'Sabrewolves', stat: '8 PTS (3-3 FG, 1-1 3PT), 3 REB, 3 AST off bench' },
    ],
    badgeColor: 'border-amber-500/60 from-amber-950/40 via-slate-900 to-yellow-950/30',
    tagIcon: 'sparkles',
    tagText: 'ALL-TIME RECORD • PIERCE 5 STEALS • SD 48-43',
  },
  {
    id: 'game-22',
    articleId: 's4-g22-enterprise-rout-sabrewolves-daugherty',
    date: 'Nov 12 • Season 4',
    headline: 'Golden State Enterprise 65, San Diego Sabrewolves 51',
    subheadline: 'Carlton Daugherty (31 PTS, 7-12 3PT) Drops Masterclass in 65-51 Road Triumph',
    narrative:
      'Carlton Daugherty put on an absolute masterclass, dropping 31 points on 11-of-23 shooting (7-of-12 from three-point range) to single-handedly dismantle the Sabrewolves defense in a commanding 65-51 road victory. Cameron Barkley added 12 rebounds and 3 blocks while Jud Thompson dished 6 assists.',
    winner: {
      id: 'golden-state-enterprise',
      name: 'Golden State Enterprise',
      score: 65,
      record: '2-1 (4th)',
      isHome: false,
    },
    loser: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      score: 51,
      record: '1-3 (8th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 16, team2: 14 },
      { period: 'Q2', team1: 20, team2: 12 },
      { period: 'Q3', team1: 13, team2: 11 },
      { period: 'Q4', team1: 16, team2: 14 },
    ],
    starPlayer: {
      name: 'Carlton Daugherty',
      number: '#28',
      team: 'Golden State Enterprise',
      position: 'SF • 85 OVR',
      statline: '31 PTS • 5 REB • 2 STL • 7-12 3PT (11-23 FG)',
      highlightPill: '31 PTS & 7 Threes • #1 Pick Masterclass',
      image: cDaughertyVsSdImg,
    },
    keyStats: [
      { label: 'Carlton Daugherty', value: '31 PTS', desc: 'Game-High 31 Points & 7 Threes' },
      { label: '3-Point Shooting', value: '9-18 (50%)', desc: 'Enterprise Perimeter Blitz' },
      { label: 'Barkley Defense', value: '12 REB • 3 BLK', desc: 'Dominant Interior Rim Protection' },
      { label: '2nd Quarter Margin', value: '20 - 12', desc: 'Decisive 2nd Period Separation' },
    ],
    secondaryPerformers: [
      { name: 'Cameron Barkley (GSE)', team: 'Enterprise', stat: '8 PTS, 12 REB, 3 BLK' },
      { name: 'Jud Thompson (GSE)', team: 'Enterprise', stat: '10 PTS, 6 AST, 0 TO' },
      { name: 'Kirk Barnes (SD)', team: 'Sabrewolves', stat: '18 PTS, 4 AST, 3 REB (6-14 FG)' },
      { name: 'Andre Creek (SD)', team: 'Sabrewolves', stat: '14 PTS, 9 REB, 2 BLK' },
    ],
    badgeColor: 'border-amber-500/60 from-amber-950/40 via-slate-900 to-yellow-950/30',
    tagIcon: 'flame',
    tagText: 'DAUGHERTY 31-PT EXPLOSION • 7 THREES',
  },
  {
    id: 'game-21',
    articleId: 's4-g21-dynamics-edge-mad-dogs-rush',
    date: 'Nov 11 • Season 4',
    headline: 'Los Angeles Dynamics 59, Fresno Mad Dogs 57',
    subheadline: 'Rush Clutches 23 PTS (10-10 FT); Dynamics Stifle Mad Dogs 16-25 in 2nd-Half Comeback',
    narrative:
      'The Dynamics pulled off a gritty upset on the road, handing the Mad Dogs a narrow 59-57 defeat. Despite trailing 41-34 at halftime, Los Angeles clamped down defensively in the second half, winning the third quarter 10-4 and the fourth 15-12 behind R.J. Rush (23 PTS, 10-10 FT), Reggie Forte (12 PTS), and Mo Alexander (13 REB).',
    winner: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      score: 59,
      record: '2-2 (6th)',
      isHome: false,
    },
    loser: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      score: 57,
      record: '3-1 (3rd)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 16, team2: 20 },
      { period: 'Q2', team1: 18, team2: 21 },
      { period: 'Q3', team1: 10, team2: 4 },
      { period: 'Q4', team1: 15, team2: 12 },
    ],
    starPlayer: {
      name: 'R.J. Rush',
      number: '#6',
      team: 'Los Angeles Dynamics',
      position: 'PG • 83 OVR',
      statline: '23 PTS • 3 AST • 2 STL • 10-10 FT',
      highlightPill: '23 PTS & Perfect 10-10 FT • Gritty Road Upset',
      image: rjRush1Img,
    },
    keyStats: [
      { label: 'R.J. Rush', value: '23 PTS', desc: 'Game-High & Perfect 10/10 Free Throws' },
      { label: '2nd-Half Defense', value: '25 - 16 LA', desc: '10-4 Q3 & 15-12 Q4 Defensive Lockdown' },
      { label: 'Mo Alexander', value: '13 REB', desc: 'Game-High Rebounds (10 Defensive)' },
      { label: 'Luke Davidson (FRE)', value: '17 PTS', desc: '7-10 FG, 3-4 3PT in Tough Loss' },
    ],
    secondaryPerformers: [
      { name: 'Reggie Forte (LA)', team: 'Dynamics', stat: '12 PTS, 5 REB off bench' },
      { name: 'Mo Alexander (LA)', team: 'Dynamics', stat: '6 PTS, 13 REB, 2 BLK' },
      { name: 'Luke Davidson (FRE)', team: 'Mad Dogs', stat: '17 PTS, 4 REB (7-10 FG, 3-4 3PT)' },
      { name: 'Geraldo Jones (FRE)', team: 'Mad Dogs', stat: '10 PTS, 10 REB (Double-Double)' },
    ],
    badgeColor: 'border-blue-500/60 from-blue-950/40 via-slate-900 to-indigo-950/30',
    tagIcon: 'shield',
    tagText: '2ND-HALF LOCKDOWN • 10-10 FT CLUTCH',
  },
  {
    id: 'game-20',
    articleId: 's4-g21-renegades-edge-sabrewolves-dean',
    date: 'Nov 9 • Season 4',
    headline: 'Oakland Renegades 60, San Diego Sabrewolves 59',
    subheadline: 'Jamar Dean (18 PTS) Powers 4th-Quarter Comeback; Renegades Remain Unbeaten at 5-0',
    narrative:
      'Oakland mounted an 18-14 fourth-quarter comeback in San Diego behind Jamar Dean (18 PTS) and Alonzo Reece (12 PTS) to steal a 60-59 thriller over Kirk Barnes and the Sabrewolves.',
    winner: {
      id: 'oakland-renegades',
      name: 'Oakland Renegades',
      score: 60,
      record: '5-0 (1st)',
      isHome: false,
    },
    loser: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      score: 59,
      record: '1-2 (7th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 11, team2: 17 },
      { period: 'Q2', team1: 19, team2: 14 },
      { period: 'Q3', team1: 12, team2: 14 },
      { period: 'Q4', team1: 18, team2: 14 },
    ],
    starPlayer: {
      name: 'Jamar Dean',
      number: '#1',
      team: 'Oakland Renegades',
      position: 'G • 90 OVR',
      statline: '18 PTS • 6 REB • 4 AST • 1 STL (7-15 FG)',
      highlightPill: 'Game-Winning Surge • 5-0 Record',
      image: jDeanVsSdImg,
    },
    keyStats: [
      { label: '4th Quarter Margin', value: '18 - 14', desc: 'Oakland Comeback Late' },
      { label: 'Jamar Dean', value: '18 PTS', desc: 'Team-High Scoring & Playmaking' },
      { label: 'Fast Break Points', value: '16 - 10', desc: 'Renegades Transition Advantage' },
      { label: 'Kirk Barnes', value: '19 PTS', desc: 'Game-High in Tough Loss' },
    ],
    secondaryPerformers: [
      { name: 'Alonzo Reece (OAK)', team: 'Renegades', stat: '12 PTS, 5 REB, 4-4 FT' },
      { name: 'Chris Goodwin (OAK)', team: 'Renegades', stat: '10 PTS, 7 REB, 2 BLK' },
      { name: 'Kirk Barnes (SD)', team: 'Sabrewolves', stat: '19 PTS, 4 REB, 3 AST (8-16 FG)' },
      { name: 'Andre Creek (SD)', team: 'Sabrewolves', stat: '14 PTS, 8 REB, 1 BLK' },
    ],
    badgeColor: 'border-amber-500/60 from-amber-950/40 via-slate-900 to-orange-950/30',
    tagIcon: 'flame',
    tagText: '1-POINT THRILLER • 5-0 RECORD',
  },
  {
    id: 'game-19',
    articleId: 's4-g20-reds-dominate-knights-marai',
    date: 'Nov 9 • Season 4',
    headline: 'California Reds 64, San Francisco Knights 49',
    subheadline: 'Marai Double-Doubles (18 PTS, 14 REB); Reds Shoot 51% to Hand Knights 0-4 Start',
    narrative:
      'Andor Marai commanded the paint with 18 points and 14 rebounds as California shot 51% from the field to cruise past San Francisco 64-49 on the road.',
    winner: {
      id: 'california-reds',
      name: 'California Reds',
      score: 64,
      record: '4-3 (4th)',
      isHome: false,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      score: 49,
      record: '0-4 (12th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 16, team2: 11 },
      { period: 'Q2', team1: 15, team2: 13 },
      { period: 'Q3', team1: 17, team2: 15 },
      { period: 'Q4', team1: 16, team2: 10 },
    ],
    starPlayer: {
      name: 'Andor Marai',
      number: '#15',
      team: 'California Reds',
      position: 'C • 91 OVR',
      statline: '18 PTS • 14 REB • 2 BLK • 8-14 FG',
      highlightPill: '14 Rebounds Dominance • 2nd Straight Win',
      image: maraiVsSfImg,
    },
    keyStats: [
      { label: 'Field Goal %', value: '51% - 33%', desc: 'California 27-53 vs SF 18-55' },
      { label: 'Total Rebounds', value: '41 - 28', desc: '+13 Glass Advantage for Reds' },
      { label: 'Points in Paint', value: '28 - 22', desc: 'Reds Interior Scoring Control' },
      { label: 'Marai Rebounds', value: '14 REB', desc: 'Game-High 14 Boards (12 Def)' },
    ],
    secondaryPerformers: [
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '14 PTS, 6 REB, 2 STL' },
      { name: 'Gary Payton II (CAL)', team: 'Reds', stat: '11 PTS, 6 AST, 2 STL' },
      { name: 'Larry Smith (SF)', team: 'Knights', stat: '16 PTS, 5 REB (6-13 FG)' },
      { name: 'Mike Evans (SF)', team: 'Knights', stat: '10 PTS, 6 REB, 2 BLK' },
    ],
    badgeColor: 'border-red-500/60 from-red-950/40 via-slate-900 to-amber-950/30',
    tagIcon: 'shield',
    tagText: 'MARAI DOUBLE-DOUBLE • 4-3 RECORD',
  },
  {
    id: 'game-18',
    articleId: 's4-g18-sabrewolves-stifle-knights-creek',
    date: 'Nov 7 • Season 4',
    headline: 'San Diego Sabrewolves 61, San Francisco Knights 48',
    subheadline: "Creek's 11-12 Shooting Clinic Sparks 23-Point Masterclass; Sabrewolves Notch First Win",
    narrative:
      'Andre Creek put on an ultra-efficient shooting masterclass, hitting 11 of 12 shots for 23 points and 6 rebounds to power San Diego past San Francisco 61-48 for their first win of Season 4.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      score: 61,
      record: '1-1 (6th)',
      isHome: false,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      score: 48,
      record: '0-3 (11th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 13, team2: 16 },
      { period: 'Q2', team1: 11, team2: 8 },
      { period: 'Q3', team1: 23, team2: 15 },
      { period: 'Q4', team1: 14, team2: 9 },
    ],
    starPlayer: {
      name: 'Andre Creek',
      number: '#32',
      team: 'San Diego Sabrewolves',
      position: 'F • 88 OVR',
      statline: '23 PTS • 6 REB • 1 BLK • 11-12 FG (91.7%)',
      highlightPill: 'Near-Perfect 11-of-12 Shooting Masterclass',
      image: sdReboundS4Img,
    },
    keyStats: [
      { label: 'Creek Field Goals', value: '11 - 12 FG', desc: '91.7% Shooting Accuracy' },
      { label: 'Points in Paint', value: '38 - 18', desc: '+20 Paint Advantage for SD' },
      { label: 'Fast Break Pts', value: '13 - 4', desc: 'Sabrewolves Transition Prowess' },
      { label: '3rd Quarter Surge', value: '23 - 15', desc: 'San Diego Blows Game Open' },
    ],
    secondaryPerformers: [
      { name: 'Kirk Barnes (SD)', team: 'Sabrewolves', stat: '8 PTS, 6 AST, 2 3PM' },
      { name: 'Damon Bell (SD)', team: 'Sabrewolves', stat: '10 PTS, 5 REB, 2 BLK' },
      { name: 'Larry Smith (SF)', team: 'Knights', stat: '14 PTS, 4 REB, 2 STL' },
      { name: 'Rickey Vance (SF)', team: 'Knights', stat: '12 PTS, 6 REB' },
    ],
    badgeColor: 'border-blue-500/60 from-blue-950/40 via-slate-900 to-indigo-950/30',
    tagIcon: 'zap',
    tagText: 'CREEK 23 PTS (11-12 FG) • 1ST WIN',
  },
  {
    id: 'game-17',
    articleId: 's4-g17-strykers-blowout-dynamics-hinton',
    date: 'Nov 5 • Season 4',
    headline: 'San Diego Strykers 82, Los Angeles Dynamics 58',
    subheadline: 'Strykers Explode with 28-8 First Quarter Blitz; Hinton (18 PTS) Guides 4-0 Start',
    narrative:
      'The Strykers unleashed an overpowering 28-8 opening quarter blitz, scoring 29 fast break points with only 3 turnovers to blow out LA 82-58 in front of a capacity crowd at San Diego Arena.',
    winner: {
      id: 'san-diego-strykers',
      name: 'San Diego Strykers',
      score: 82,
      record: '4-0 (1st)',
      isHome: true,
    },
    loser: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      score: 58,
      record: '1-2 (7th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 28, team2: 8 },
      { period: 'Q2', team1: 18, team2: 10 },
      { period: 'Q3', team1: 13, team2: 19 },
      { period: 'Q4', team1: 23, team2: 21 },
    ],
    starPlayer: {
      name: 'A.J. Hinton',
      number: '#0',
      team: 'San Diego Strykers',
      position: 'G • 92 OVR',
      statline: '18 PTS • 6 REB • 3 STL • 2 AST • 1 BLK (8-14 FG)',
      highlightPill: '28-8 Opening Blitz Catalyst • 4-0 Record',
      image: hintonVsJmjS4Img,
    },
    keyStats: [
      { label: 'Q1 Blitz', value: '28 - 8', desc: 'Strykers +20 Opening Surge' },
      { label: 'Fast Break Pts', value: '29 - 8', desc: 'Devastating Transition Pace' },
      { label: 'Turnovers', value: '3 - 12', desc: 'Season-Low 3 Turnovers' },
      { label: 'Team Assists', value: '23 AST', desc: '23 Assists on 33 Field Goals' },
    ],
    secondaryPerformers: [
      { name: 'DeAnte Gray (SD)', team: 'Strykers', stat: '15 PTS, 6 REB, 3 AST (6-10 FG)' },
      { name: 'Ray Gamble (SD)', team: 'Strykers', stat: '14 PTS, 4 AST, 3 REB' },
      { name: 'R.J. Rush (LAD)', team: 'Dynamics', stat: '19 PTS, 7-7 FT, 3 AST' },
      { name: 'Jack McMichael Jr. (LAD)', team: 'Dynamics', stat: '14 PTS, 7-7 FT' },
    ],
    badgeColor: 'border-yellow-500/60 from-yellow-950/40 via-slate-900 to-amber-950/30',
    tagIcon: 'sparkles',
    tagText: '24-PT MARQUEE WIN • 4-0 RECORD',
  },
  {
    id: 'game-16',
    articleId: 's4-g16-mad-dogs-outlast-enterprise-boomer',
    date: 'Nov 5 • Season 4',
    headline: 'Fresno Mad Dogs 82, Golden State Enterprise 75',
    subheadline: 'Boomer Dazzles with 26 PTS & 8 AST; Davidson Double-Doubles in Debut (12 PTS, 10 REB); Mad Dogs 3-0',
    narrative:
      'Lloyd Boomer put on a playmaking clinic on the road, dropping 26 points and 8 assists to power the Mad Dogs past Golden State 82-75. Newly signed rookie forward Luke Davidson contributed an immediate 12-point, 10-rebound double-double.',
    winner: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      score: 82,
      record: '3-0 (2nd)',
      isHome: false,
    },
    loser: {
      id: 'golden-state-enterprise',
      name: 'Golden State Enterprise',
      score: 75,
      record: '1-1 (6th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 22, team2: 19 },
      { period: 'Q2', team1: 20, team2: 18 },
      { period: 'Q3', team1: 19, team2: 20 },
      { period: 'Q4', team1: 21, team2: 18 },
    ],
    starPlayer: {
      name: 'Lloyd Boomer',
      number: '#2',
      team: 'Fresno Mad Dogs',
      position: 'G • 89 OVR',
      statline: '26 PTS • 8 AST • 5 REB • 3 STL (10-17 FG)',
      highlightPill: '26 PTS, 8 AST & 3-0 RECORD',
      image: boomerVsGsImg,
    },
    keyStats: [
      { label: 'Lloyd Boomer', value: '26 PTS • 8 AST', desc: '10/17 FG • 3 STL Road Masterclass' },
      { label: 'Luke Davidson Debut', value: '12 PTS • 10 REB', desc: 'Instant Double-Double Off Sign' },
      { label: 'Fast Break Points', value: '22 - 12 FB PTS', desc: 'Fresno Paced the Open Floor' },
      { label: 'Mad Dogs Standing', value: '3 - 0 (2nd)', desc: 'Undefeated Start Continues' },
    ],
    secondaryPerformers: [
      { name: 'Luke Davidson (FRE)', team: 'Mad Dogs', stat: '12 PTS, 10 REB, 1 BLK (5-8 FG)' },
      { name: 'Jud Drew (FRE)', team: 'Mad Dogs', stat: '13 PTS, 5 REB, 2 AST (2 3PM)' },
      { name: 'Carlton Daugherty (GSE)', team: 'Enterprise', stat: '18 PTS, 4 REB, 3 AST (4 3PM)' },
      { name: 'Jud Thompson (GSE)', team: 'Enterprise', stat: '17 PTS, 6 AST, 3 REB' },
    ],
    badgeColor: 'border-blue-500/60 from-blue-950/40 via-slate-900 to-indigo-950/30',
    tagIcon: 'flame',
    tagText: 'ROAD THRILLER • MAD DOGS 3-0',
  },
  {
    id: 'game-15',
    articleId: 's4-g15-admirals-edge-knights-first-win',
    date: 'Nov 2 • Season 4',
    headline: 'Anaheim Admirals 56, San Francisco Knights 52',
    subheadline: 'Sirven (18 PTS) & Tinsley (16 PTS, 4-5 3PT) Seal Admirals’ First Season 4 Win',
    narrative:
      'The Admirals held off the Knights in a tense 56-52 battle to earn their first win of Season 4. Stephan Sirven went 6-for-6 from the free throw line late, and Kirk Tinsley went 4-for-5 from three-point range.',
    winner: {
      id: 'anaheim-admirals',
      name: 'Anaheim Admirals',
      score: 56,
      record: '1-2 (7th)',
      isHome: true,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      score: 52,
      record: '0-2 (9th)',
      isHome: false,
    },
    quarters: [
      { period: 'Q1', team1: 12, team2: 15 },
      { period: 'Q2', team1: 14, team2: 13 },
      { period: 'Q3', team1: 11, team2: 16 },
      { period: 'Q4', team1: 15, team2: 12 },
    ],
    starPlayer: {
      name: 'Kirk Tinsley & Stephan Sirven',
      number: '#11 & #4',
      team: 'Anaheim Admirals',
      position: 'G • 86 & 88 OVR',
      statline: '34 PTS Combined • 4-5 3PT • 6-6 FT (Clutch Finish)',
      highlightPill: '16 PTS (4 3PM) & FIRST S4 WIN',
      image: ktVsSfImg,
    },
    keyStats: [
      { label: 'Kirk Tinsley', value: '16 PTS (4/5 3PT)', desc: '80.0% 3PT Perimeter Spark' },
      { label: 'Stephan Sirven', value: '18 PTS (6/6 FT)', desc: 'Ice in Veins at Free Throw Line' },
      { label: '3-Point Shooting', value: '50% vs 20%', desc: 'Anaheim 6/12 • SF 3/15' },
      { label: 'Admirals Record', value: '1 - 2 (7th)', desc: 'First Victory of Season 4' },
    ],
    secondaryPerformers: [
      { name: 'Barry Nelson (ANA)', team: 'Admirals', stat: '6 PTS, 8 REB, 2 BLK' },
      { name: 'Erik Higgins (SF)', team: 'Knights', stat: '16 PTS, 9 REB, 2 BLK (7-13 FG)' },
      { name: 'Marion Payton (SF)', team: 'Knights', stat: '10 PTS, 11 REB, 2 AST' },
      { name: 'Gheorghe Stefan (SF)', team: 'Knights', stat: '9 PTS, 7 REB (4-8 FG)' },
    ],
    badgeColor: 'border-cyan-500/60 from-cyan-950/40 via-slate-900 to-teal-950/30',
    tagIcon: 'zap',
    tagText: 'FIRST S4 WIN • ADMIRALS 56-52',
  },
  {
    id: 'game-14',
    articleId: 's4-g14-reds-edge-dynamics-marai',
    date: 'Nov 1 • Season 4',
    headline: 'California Reds 61, Los Angeles Dynamics 56',
    subheadline: 'Marai Dominates with 20 PTS, 14 REB & 4 STL; Reds Claw Back to .500 (3-3)',
    narrative:
      'Andor Marai proved unstoppable in the interior, posting 20 points, 14 rebounds, and 4 steals to lead the California Reds to a gritty 61-56 road win over the Los Angeles Dynamics. Donald Rodman added 11 points and 9 rebounds.',
    winner: {
      id: 'california-reds',
      name: 'California Reds',
      score: 61,
      record: '3-3 (4th)',
      isHome: false,
    },
    loser: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      score: 56,
      record: '1-1 (5th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 16, team2: 15 },
      { period: 'Q2', team1: 15, team2: 13 },
      { period: 'Q3', team1: 14, team2: 16 },
      { period: 'Q4', team1: 16, team2: 12 },
    ],
    starPlayer: {
      name: 'Andor Marai',
      number: '#33',
      team: 'California Reds',
      position: 'C • 93 OVR',
      statline: '20 PTS • 14 REB • 4 STL • 2 BLK (8-13 FG)',
      highlightPill: '20 PTS, 14 REB & .500 RECORD',
      image: aMaraiS4_1Img,
    },
    keyStats: [
      { label: 'Andor Marai', value: '20 PTS • 14 REB', desc: '4 STL, 2 BLK Monster Night' },
      { label: 'Donald Rodman', value: '11 PTS • 9 REB', desc: 'Frontcourt Rebounding Muscle' },
      { label: 'Rebounding Battle', value: '41 - 33 REB', desc: 'Reds Controlled the Glass' },
      { label: 'Reds Season Mark', value: '3 - 3 (.500)', desc: 'Back to .500 After Road Win' },
    ],
    secondaryPerformers: [
      { name: 'Donald Rodman (CAL)', team: 'Reds', stat: '11 PTS, 9 REB, 2 AST (5-10 FG)' },
      { name: 'Kyle Robinson (CAL)', team: 'Reds', stat: '10 PTS, 5 AST, 3 REB' },
      { name: 'R.J. Rush (LA)', team: 'Dynamics', stat: '14 PTS, 4 AST, 3 REB (5-12 FG)' },
      { name: 'Reggie Forte (LA)', team: 'Dynamics', stat: '9 PTS, 6 REB, 1 BLK' },
    ],
    badgeColor: 'border-red-500/60 from-red-950/40 via-slate-900 to-rose-950/30',
    tagIcon: 'flame',
    tagText: 'PAINT MONSTER • REDS 3-3',
  },
  {
    id: 'game-13',
    articleId: 's4-g13-mad-dogs-dominate-stallions',
    date: 'Oct 31 • Season 4',
    headline: 'Fresno Mad Dogs 64, Sacramento Stallions 48',
    subheadline: 'Boomer Erupts for 26 PTS (9-14 FG); Mad Dogs Stay Unbeaten at 2-0; Stallions Fall to 0-3',
    narrative:
      'Lloyd Boomer was unstoppable for the Mad Dogs, dropping a game-high 26 points on 9-for-14 shooting to keep Fresno undefeated. The Mad Dogs dominated the paint 40-20 and forced 16 turnovers. Defending champion Stallions drop to 0-3.',
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
      { name: 'Carson Graham (FRE)', team: 'Mad Dogs', stat: '14 PTS, 8 REB, 2 BLK (6-10 FG)' },
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
    date: 'Oct 29 • Season 4',
    headline: 'Golden State Enterprise 65, California Reds 58',
    subheadline: '#1 Pick Carlton Daugherty Drops 20 in Debut; Enterprise Defends Home Floor (1-0)',
    narrative:
      '#1 overall pick Carlton Daugherty scored 20 points in his pro debut, leading Golden State Enterprise to a 65-58 victory over the California Reds. Cameron Barkley controlled the glass with 14 points, 9 rebounds, and 3 blocks.',
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
    date: 'Oct 29 • Season 4',
    headline: 'Oakland Renegades 66, San Francisco Knights 52',
    subheadline: '23-Point 2nd Quarter Surge Sparks Renegades to 4-0; Dean (22 PTS) & Moon (13 PTS) Shine',
    narrative:
      'The Oakland Renegades took complete command of first place in CCH with a 66-52 victory over San Francisco, fueled by a devastating 23-11 second quarter blitz. Jamar Dean scored 22 and newly signed Jaycee Moon added 13 off the bench.',
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
    date: 'Oct 27 • Season 4',
    headline: 'Oakland Renegades 74, California Reds 50',
    subheadline: 'Dean Catches Fire for 36 PTS (13-18 FG); Bowen Grabs 20 PTS & 14 REB in Blowout',
    narrative:
      'Jamar Dean put on an offensive masterpiece, exploding for 36 points on 13-of-18 shooting, while Joshua Bowen notched 20 points, 14 rebounds, and 5 assists to pace Oakland past California.',
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
    date: 'Oct 25 • Season 4',
    headline: 'California Reds 68, Long Beach Vipers 61',
    subheadline: 'Marai (21 PTS) and Rodman (17 PTS) Fuel Reds Rebound; Vipers Fall to 0-2',
    narrative:
      'Despite a tough loss to the Strykers, the Reds (2-1) bounced back behind 21 points from Andor Marai and 17 points from Donald Rodman. The Vipers fall to 0-2.',
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
    date: 'Oct 25 • Season 4',
    headline: 'Oakland Renegades 57, Sacramento Stallions 50',
    subheadline: 'Renegades Move to 2-0 Behind Dean & Reece; Stallions Drop to 0-2',
    narrative:
      'The Renegades remain undefeated at 2-0 thanks to a gritty defensive effort. Jamar Dean paced the offense with 16 points, while Alonzo Reece added 14 points and 5 steals. For the 0-2 Stallions, Gemini Jackson was a bright spot, stuffing the stat sheet with 13 points, 4 assists, 2 steals, and an impressive 3 blocks.',
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
    date: 'Oct 22 • Season 4',
    headline: 'San Diego Strykers 102, California Reds 64',
    subheadline: 'Hinton Erupts for 42 Points on 12-of-14 from Three as Strykers Cruise to 3-0',
    narrative:
      'The Strykers are looking utterly unstoppable, improving to a perfect 3-0 record with a staggering 38-point demolition of the California Reds. Superstar guard A.J. Hinton delivered a performance for the ages, erupting for a game-high 42 points on a blistering 15-of-17 shooting from the field, including a perfect 12-for-14 from beyond the arc. Ray Gamble contributed 17 points and 5 assists in the blowout. The Strykers shot a scorching 67% from the floor, leading by as many as 40 points.',
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
  {
    id: 'game-4',
    articleId: 's4-g4-tigersharks-mad-dogs-s4',
    date: 'Nov 1 • Season 4',
    headline: 'Fresno Mad Dogs 59, San Jose Tigersharks 53',
    subheadline: 'Boomer Takes Over with 25 PTS (6-6 FT); Mad Dogs Secure Opening Night Road Triumph',
    narrative:
      'In a defensive battle on Season 4 Opening Night, Lloyd Boomer scored 25 points and drained 6-of-6 clutch free throws to carry Fresno past San Jose 59-53 at SAP Center.',
    winner: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      score: 59,
      record: '1-0 (1st)',
      isHome: false,
    },
    loser: {
      id: 'san-jose-tigersharks',
      name: 'San Jose Tigersharks',
      score: 53,
      record: '0-1 (7th)',
      isHome: true,
    },
    quarters: [
      { period: 'Q1', team1: 14, team2: 12 },
      { period: 'Q2', team1: 16, team2: 13 },
      { period: 'Q3', team1: 13, team2: 15 },
      { period: 'Q4', team1: 16, team2: 13 },
    ],
    starPlayer: {
      name: 'Lloyd Boomer',
      number: '#2',
      team: 'Fresno Mad Dogs',
      position: 'G • 89 OVR',
      statline: '25 PTS • 4 AST • 3 STL • 6-6 FT',
      highlightPill: 'Opening Night Scoring Clinic in Road Win',
      image: sjAtFre1Img,
    },
    keyStats: [
      { label: 'Boomer Clutch FTs', value: '6 - 6 FT', desc: '100% Free Throw Accuracy' },
      { label: 'Points Off Turnovers', value: '19 - 11', desc: 'Mad Dogs Disruptive Defense' },
      { label: 'Second Half Margin', value: '+3 PTS', desc: 'Fresno Closes Out in Crunch Time' },
      { label: 'Season 4 Opener', value: '1-0', desc: 'Fresno Sets Tone for Undefeated Run' },
    ],
    secondaryPerformers: [
      { name: 'Geraldo Jones (FRE)', team: 'Mad Dogs', stat: '11 PTS, 9 REB, 2 BLK' },
      { name: 'Vance Miller (FRE)', team: 'Mad Dogs', stat: '9 PTS, 5 AST, 2 STL' },
      { name: 'Marcus Reed (SJ)', team: 'Tigersharks', stat: '18 PTS, 6 REB, 3 AST' },
      { name: 'Tariq Bell (SJ)', team: 'Tigersharks', stat: '14 PTS, 8 REB, 2 BLK' },
    ],
    badgeColor: 'border-emerald-500/60 from-emerald-950/40 via-slate-900 to-teal-950/30',
    tagIcon: 'shield',
    tagText: 'OPENING NIGHT THRILLER • 1-0 RECORD',
  },
];

const getTeamShortName = (teamId: string, fullName: string): string => {
  const map: Record<string, string> = {
    'fresno-mad-dogs': 'Mad Dogs',
    'golden-state-enterprise': 'Enterprise',
    'sacramento-stallions': 'Stallions',
    'san-francisco-knights': 'Knights',
    'oakland-renegades': 'Renegades',
    'san-jose-tigersharks': 'Tigersharks',
    'los-angeles-dynamics': 'Dynamics',
    'california-reds': 'Reds',
    'san-diego-sabrewolves': 'Sabrewolves',
    'san-diego-strykers': 'Strykers',
    'anaheim-admirals': 'Admirals',
    'long-beach-vipers': 'Vipers',
  };
  if (map[teamId]) return map[teamId];
  if (fullName.toLowerCase().includes('mad dogs')) return 'Mad Dogs';
  return fullName.split(' ').pop() || fullName;
};

const getTeamCityName = (teamId: string, fullName: string): string => {
  const cityMap: Record<string, string> = {
    'sacramento-stallions': 'Sacramento',
    'san-francisco-knights': 'San Francisco',
    'oakland-renegades': 'Oakland',
    'san-jose-tigersharks': 'San Jose',
    'golden-state-enterprise': 'Golden State',
    'fresno-mad-dogs': 'Fresno',
    'los-angeles-dynamics': 'Los Angeles',
    'california-reds': 'California',
    'san-diego-sabrewolves': 'San Diego',
    'san-diego-strykers': 'San Diego',
    'anaheim-admirals': 'Anaheim',
    'long-beach-vipers': 'Long Beach',
  };
  if (cityMap[teamId]) return cityMap[teamId];
  return fullName.replace(/\s+(Mad Dogs|Enterprise|Admirals|Knights|Reds|Dynamics|Strykers|Sabrewolves|Renegades|Tigersharks|Stallions|Vipers)$/i, '').trim() || fullName;
};

export const LatestGamesShowcase: React.FC<LatestGamesShowcaseProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [selectedGameId, setSelectedGameId] = useState<string>('game-24');

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
            <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-1 rounded-md border border-emerald-500/30">
              NOVEMBER SLATE • LATEST RESULTS
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
            const winnerShort = getTeamShortName(game.winner.id, game.winner.name);
            const loserShort = getTeamShortName(game.loser.id, game.loser.name);
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
                      {getTeamCityName(activeGame.winner.id, activeGame.winner.name)}
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
                      {getTeamCityName(activeGame.loser.id, activeGame.loser.name)}
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
                          <span>{getTeamShortName(firstTeam.id, firstTeam.name)}</span>
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
                          <span>{getTeamShortName(secondTeam.id, secondTeam.name)}</span>
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
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => onNavigateToNews(activeGame.articleId)}
              className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer bg-transparent border-0"
            >
              <BookOpen size={14} />
              <span>Full Box Score &amp; Player Quotes</span>
              <ChevronRight size={14} />
            </button>
            {activeGame.youtubeUrl && (
              <a
                href={activeGame.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 rounded-xl bg-red-600/20 hover:bg-red-600/30 text-red-300 hover:text-red-100 border border-red-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                title="Watch Full Game on YouTube"
              >
                <Tv size={13} className="text-red-400" />
                <span>Watch on YouTube</span>
                <ExternalLink size={12} />
              </a>
            )}
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

      {/* Mini Cards for All Matchups */}
      <div className="space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <BarChart3 size={14} className="text-amber-400" />
            Matchup Highlights
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
                  <span className="font-bold text-amber-400">{game.date.split('•')[1]?.trim() || 'Final'}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <TeamBadge teamId={game.winner.id} size="xs" />
                      <span className="text-sm font-black text-white truncate">
                        {getTeamCityName(game.winner.id, game.winner.name)}
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
                        {getTeamCityName(game.loser.id, game.loser.name)}
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
