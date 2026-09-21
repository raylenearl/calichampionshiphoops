import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Zap,
  BookOpen,
  ChevronRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Calendar,
  Share2,
  Check,
  Play,
  ExternalLink,
  X,
  Tv,
  Archive,
  ArrowLeft
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import aCreekVsSjImg from '../assets/images/ACreek_vs_SJs4.png';
import boomerVsSf1Img from '../assets/images/Boomer_vs_SF1.png';
import cDaughertyVsSdImg from '../assets/images/CDaugherty_vs_SD.png';
import kingJordan1Img from '../assets/images/KingJordan1.png';
import rjRushVsFresnoImg from '../assets/images/RJRush_vs_Freso.png';
import maraiVsSfImg from '../assets/images/Marai_vs_SFs4.png';
import jDeanVsSdImg from '../assets/images/JDean_vs_SDs4.png';
import sdReboundS4Img from '../assets/images/SD_Rebound_S4.png';
import hintonVsJmjS4Img from '../assets/images/Hinton_vs_JMJs4.png';
import rjRush1Img from '../assets/images/RJRush1.png';
import carltonDaughertyImg from '../assets/images/S4 Draft/Carlton Daugherty.png';

interface FeaturedGameStoriesProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

interface GameStory {
  id: string;
  articleId: string;
  badgeTag: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  youtubeUrl?: string;
  youtubeEmbedUrl?: string;
  date: string;
  image: string;
  imageCaption: string;
  winner: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  loser: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  quarterScores: { period: string; team1: number; team2: number }[];
  starPlayer: {
    name: string;
    team: string;
    statline: string;
    highlight: string;
  };
  keyStats: { label: string; value: string; desc: string }[];
  quote: { speaker: string; text: string; role: string };
  secondaryImage?: string;
  secondaryImageCaption?: string;
}

const getYouTubeEmbedSrc = (url?: string, embedUrl?: string) => {
  if (embedUrl) return embedUrl;
  if (!url) return '';
  if (url.includes('/embed/')) return url;
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/live/')) {
    const id = url.split('youtube.com/live/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('watch?v=')) {
    const id = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

const FEATURED_STORIES: GameStory[] = [
  {
    id: 's4-g24-tigersharks-vs-sabrewolves',
    articleId: 's4-g24-sabrewolves-edge-tigersharks-pierce-record',
    badgeTag: '★ ALL-TIME RECORD • PIERCE 5 STEALS',
    badgeColor: 'border-emerald-500/60 bg-emerald-500/20 text-emerald-300',
    title: 'Sabrewolves Rally in 4th (18-11) to Edge Tigersharks 48-43 Despite Pierce’s Record 5 Steals',
    subtitle:
      'San Diego captures its first home win of Season 4 behind 10 team blocks, 23 bench points, and an 18-11 fourth-quarter surge to overcome 15 team steals and rookie Malique Pierce’s historic 5 thefts.',
    date: 'Nov 14 • Season 4 Regular Season',
    image: aCreekVsSjImg,
    imageCaption:
      'The San Diego Sabrewolves clamped down with 10 team blocks and rallied in the fourth quarter to claim a 48-43 win over San Jose, withstanding an all-time CCH single-game record 5 steals by Tigersharks rookie Malique Pierce.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 48,
      record: '2-3 (7th)',
      isHome: true,
    },
    loser: {
      id: 'san-jose-tigersharks',
      name: 'San Jose Tigersharks',
      city: 'San Jose',
      nickname: 'Tigersharks',
      score: 43,
      record: '0-2 (9th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 8, team2: 12 },
      { period: 'Q2', team1: 14, team2: 12 },
      { period: 'Q3', team1: 8, team2: 8 },
      { period: 'Q4', team1: 18, team2: 11 },
    ],
    starPlayer: {
      name: 'Malique Pierce',
      team: 'San Jose Tigersharks',
      statline: '5 STL (All-Time CCH Record) • 3 AST • 2 REB (0 PTS, 0-5 FG)',
      highlight: 'Shattered CCH single-game steals record with 5 thefts, eclipsing DeAnte Gray’s mark',
    },
    keyStats: [
      { label: 'Donald Hardy', value: '15 PTS, 4 STL', desc: 'Game-High 15 PTS (3-4 3PT), 5 REB, 4 STL' },
      { label: 'Malique Pierce', value: '5 STL', desc: 'All-Time CCH Single-Game Record' },
      { label: 'Team Blocks', value: '10 - 0 SD', desc: 'Sabrewolves Rim Protection (Glover 3 BLK)' },
      { label: 'Bench Points', value: '23 - 7 SD', desc: 'Sabrewolves 2nd Unit Outscores SJ 23-7' },
    ],
    quote: {
      speaker: 'Jacob Underwood',
      role: 'Head Coach • San Diego Sabrewolves (First Home S4 Win)',
      text: 'San Jose gave us everything with Pierce and Hardy jumping our passing lanes for 15 steals. But our defense held them to 21% shooting, our bench gave us 23 points, and our 10 team blocks won this in the fourth quarter.',
    },
  },
];

const ARCHIVED_STORIES: GameStory[] = [
  {
    id: 's4-g23-mad-dogs-vs-knights',
    articleId: 's4-g23-mad-dogs-rout-knights-boomer',
    badgeTag: '★ ARCHIVE • BOOMER 21 PTS',
    badgeColor: 'border-red-500/60 bg-red-500/20 text-red-300',
    title: 'Mad Dogs Bounce Back With 68-55 Road Victory Over Knights Behind Boomer & Jones',
    subtitle:
      'Lloyd Boomer scores 21 points (9-of-17 FG) and Geraldo Jones posts 10 PTS, 12 REB, 4 AST, 2 STL as Fresno controls the paint (28-26) and fast break (14-7) in San Francisco.',
    youtubeUrl: 'https://youtu.be/jQ8U80VCVBk?si=y8Z1FoRbbcB2XTDu',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/jQ8U80VCVBk?si=y8Z1FoRbbcB2XTDu',
    date: 'Nov 13 • Season 4 Regular Season',
    image: boomerVsSf1Img,
    imageCaption:
      'Lloyd Boomer led the charge with 21 points (9-of-17 FG) as the Fresno Mad Dogs bounced back with a decisive 68-55 road win over the San Francisco Knights.',
    winner: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      city: 'Fresno',
      nickname: 'Mad Dogs',
      score: 68,
      record: '4-1 (2nd)',
      isHome: false,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      city: 'San Francisco',
      nickname: 'Knights',
      score: 55,
      record: '0-5 (12th)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 12 },
      { period: 'Q2', team1: 16, team2: 15 },
      { period: 'Q3', team1: 17, team2: 14 },
      { period: 'Q4', team1: 17, team2: 14 },
    ],
    starPlayer: {
      name: 'Lloyd Boomer',
      team: 'Fresno Mad Dogs',
      statline: '21 PTS • 5 AST • 3 REB (9-17 FG)',
      highlight: 'Scored 21 points on 9-of-17 shooting to lead decisive bounce-back victory',
    },
    keyStats: [
      { label: 'Lloyd Boomer', value: '21 PTS', desc: 'Game-High 21 Points (9-of-17 FG)' },
      { label: 'Geraldo Jones', value: '10 & 12', desc: '10 PTS, 12 REB, 4 AST, 2 STL Double-Double' },
      { label: 'Points in Paint', value: '28 - 26', desc: 'Fresno Outscores Knights Inside (+2)' },
      { label: 'Fast Break Margin', value: '14 - 7', desc: 'Fresno +7 Transition Advantage' },
    ],
    quote: {
      speaker: 'Lloyd Boomer',
      role: 'Guard • Fresno Mad Dogs (21 PTS, 9-17 FG)',
      text: 'We took that loss to the Dynamics personally. We came into San Francisco Arena locked in, pushed the ball on the break, and Geraldo anchored the paint for all four quarters.',
    },
  },
  {
    id: 's4-g22-enterprise-vs-sabrewolves',
    articleId: 's4-g22-enterprise-rout-sabrewolves-daugherty',
    badgeTag: '★ ARCHIVE • 31-PT EXPLOSION',
    badgeColor: 'border-amber-500/60 bg-amber-500/20 text-amber-300',
    title: 'Enterprise Silences Sabrewolves 65-51 Behind Carlton Daugherty’s 31-Point Clinic',
    subtitle:
      'The #1 overall pick knocks down 7 three-pointers on 11-of-23 shooting as Golden State dominates the second quarter and cruises to a 14-point road victory in San Diego.',
    youtubeUrl: 'https://www.youtube.com/live/sZmDulCp-CY?si=BqXQ1pbiHlVReHCu',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/sZmDulCp-CY?si=BqXQ1pbiHlVReHCu',
    date: 'Nov 12 • Season 4 Regular Season',
    image: cDaughertyVsSdImg,
    imageCaption:
      'Carlton Daugherty put on an absolute masterclass, dropping 31 points on 11-of-23 shooting (7-of-12 from three) to lead Golden State Enterprise to a 65-51 road victory.',
    winner: {
      id: 'golden-state-enterprise',
      name: 'Golden State Enterprise',
      city: 'Golden State',
      nickname: 'Enterprise',
      score: 65,
      record: '2-1 (4th)',
      isHome: false,
    },
    loser: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 51,
      record: '1-3 (8th)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 16, team2: 14 },
      { period: 'Q2', team1: 20, team2: 12 },
      { period: 'Q3', team1: 13, team2: 11 },
      { period: 'Q4', team1: 16, team2: 14 },
    ],
    starPlayer: {
      name: 'Carlton Daugherty',
      team: 'Golden State Enterprise',
      statline: '31 PTS • 5 REB • 2 STL (11-23 FG, 7-12 3PT)',
      highlight: 'Explosive 31-point outburst with 7 three-pointers in road triumph',
    },
    keyStats: [
      { label: '3-Pointers Made', value: '7 3PM', desc: 'Daugherty 7-12 from Deep' },
      { label: 'Barkley Rebounds', value: '12 REB', desc: 'Game-High 12 Boards & 3 BLK' },
      { label: '3-Point %', value: '50% - 19%', desc: 'GSE 9-18 vs SD 3-16' },
      { label: 'Kirk Barnes', value: '18 PTS', desc: 'Team-High in Sabrewolves Loss' },
    ],
    quote: {
      speaker: 'Wyatt Zimmerman',
      role: 'Head Coach • Golden State Enterprise (2-1 Record)',
      text: 'Carlton was completely in the zone. Thirty-one points and seven threes on the road against a tough defense is special.',
    },
    secondaryImage: kingJordan1Img,
    secondaryImageCaption: 'Sabrewolves star Kirk "King Jordan" Barnes (18 PTS, 4 AST) and Andre Creek battle Enterprise at San Diego Arena.',
  },
  {
    id: 's4-g21-dynamics-vs-mad-dogs',
    articleId: 's4-g21-dynamics-edge-mad-dogs-rush',
    badgeTag: '★ ARCHIVE • 2ND-HALF COMEBACK',
    badgeColor: 'border-blue-500/60 bg-blue-500/20 text-blue-300',
    title: 'Dynamics Clamp Down in 2nd Half to Hand Mad Dogs Narrow 59-57 Defeat in Fresno',
    subtitle:
      'Trailing 41-34 at halftime, Los Angeles holds Fresno to 16 second-half points as R.J. Rush scores 23 (10-10 FT), Reggie Forte adds 12 off the bench, and Mo Alexander grabs 13 boards.',
    youtubeUrl: 'https://www.youtube.com/live/fXPrOZMpMBQ?si=vn8IostE2dSEMPZg',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/fXPrOZMpMBQ?si=vn8IostE2dSEMPZg',
    date: 'Nov 11 • Season 4 Regular Season',
    image: rjRushVsFresnoImg,
    imageCaption:
      'R.J. Rush tallied a game-high 23 points, shooting a flawless 10-of-10 from the free throw line, to lead the Los Angeles Dynamics to a gritty 59-57 comeback road win.',
    winner: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      city: 'Los Angeles',
      nickname: 'Dynamics',
      score: 59,
      record: '2-2 (6th)',
      isHome: false,
    },
    loser: {
      id: 'fresno-mad-dogs',
      name: 'Fresno Mad Dogs',
      city: 'Fresno',
      nickname: 'Mad Dogs',
      score: 57,
      record: '3-1 (3rd)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 16, team2: 20 },
      { period: 'Q2', team1: 18, team2: 21 },
      { period: 'Q3', team1: 10, team2: 4 },
      { period: 'Q4', team1: 15, team2: 12 },
    ],
    starPlayer: {
      name: 'R.J. Rush',
      team: 'Los Angeles Dynamics',
      statline: '23 PTS • 3 AST • 2 STL (6-14 FG, 10-10 FT)',
      highlight: 'Game-high 23 points and perfect 10-of-10 at the line in comeback win',
    },
    keyStats: [
      { label: '2nd Half Defense', value: '25 - 16 LA', desc: 'Held Fresno to 4 PTS in Q3' },
      { label: 'R.J. Rush Free Throws', value: '10-10 FT', desc: '100% Charity Stripe Accuracy' },
      { label: 'Mo Alexander', value: '13 REB', desc: 'Controlled Glass with 10 Def Boards' },
      { label: 'Reggie Forte Bench', value: '12 PTS', desc: 'Vital Bench Production (Gonzaga)' },
    ],
    quote: {
      speaker: 'Pooh Splitter',
      role: 'Head Coach • Los Angeles Dynamics (2-2 Record)',
      text: 'That was pure grit. Trailing by seven on the road and holding an undefeated team to 16 points in the second half proves what our defense is capable of.',
    },
  },
  {
    id: 's4-g21-renegades-vs-sabrewolves',
    articleId: 's4-g21-renegades-edge-sabrewolves-dean',
    badgeTag: '★ LEAD STORY • 4TH-QUARTER THRILLER',
    badgeColor: 'border-amber-500/60 bg-amber-500/20 text-amber-300',
    title: 'Renegades Edge Sabrewolves 60-59 in 4th-Quarter Thriller to Stay Unbeaten at 5-0',
    subtitle:
      "Jamar Dean scores 18 points, Alonzo Reece adds 12 with clutch free throws, and Oakland mounts an 18-14 fourth-quarter comeback in San Diego to overcome Kirk Barnes' 19 points.",
    youtubeUrl: 'https://www.youtube.com/watch?v=JdRXhCSupwM',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/JdRXhCSupwM?si=LroEqV-JMzZreXc_',
    date: 'Nov 9 • Season 4 Regular Season',
    image: jDeanVsSdImg,
    imageCaption:
      'Jamar Dean poured in 18 points, 6 rebounds, and 4 assists as the Oakland Renegades rallied in the fourth quarter to edge the San Diego Sabrewolves 60-59 at San Diego Arena.',
    winner: {
      id: 'oakland-renegades',
      name: 'Oakland Renegades',
      city: 'Oakland',
      nickname: 'Renegades',
      score: 60,
      record: '5-0 (1st)',
      isHome: false,
    },
    loser: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 59,
      record: '1-2 (7th)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 10, team2: 13 },
      { period: 'Q2', team1: 20, team2: 19 },
      { period: 'Q3', team1: 12, team2: 13 },
      { period: 'Q4', team1: 18, team2: 14 },
    ],
    starPlayer: {
      name: 'Jamar Dean',
      team: 'Oakland Renegades',
      statline: '18 PTS • 6 REB • 4 AST • 1 STL (7-20 FG, 3-3 FT, 26 MIN)',
      highlight: '18 PTS & Late Poise Leads 18-14 Fourth-Quarter Comeback',
    },
    keyStats: [
      { label: 'Turnovers', value: '3 - 11', desc: 'Oakland Season-Low 3 TOs' },
      { label: 'Pts Off TOs', value: '17 - 4', desc: 'Oakland +13 Decisive Margin' },
      { label: 'Free Throw %', value: '86.7% - 78.6%', desc: 'Oakland 13-15 FT (Reece 6-6)' },
      { label: 'Kirk Barnes (SD)', value: '19 PTS', desc: 'Game-High 19 PTS (7-7 FT)' },
    ],
    quote: {
      speaker: 'Carson Goodwin',
      role: 'Head Coach • Oakland Renegades (5-0 Record)',
      text: 'Three turnovers in 32 minutes on the road against a defense that blocked 9 shots is championship poise. Jamar and Alonzo controlled crunch time.',
    },
  },
  {
    id: 's4-g20-reds-vs-knights',
    articleId: 's4-g20-reds-rout-knights-marai',
    badgeTag: 'SOUTHERN STATEMENT • NOV 9',
    badgeColor: 'border-red-500/60 bg-red-500/10 text-red-400',
    title: "Marai's 18 & 14 Double-Double Anchors Reds in 64-49 Rout Over Knights",
    subtitle:
      'Andor Marai posts 18 points, 14 rebounds, and 3 assists while California shoots 51% from the floor and dominates the glass to roll past San Francisco.',
    youtubeUrl: 'https://www.youtube.com/watch?v=cHJfZTom0GU',
    youtubeEmbedUrl: 'https://www.youtube.com/embed/cHJfZTom0GU?si=fvuu2sTPlT1MeK8A',
    date: 'Nov 9 • Season 4 Regular Season',
    image: maraiVsSfImg,
    imageCaption: 'Andor Marai powered the California Reds with 18 points, 14 rebounds, 3 assists, and 2 steals in a 64-49 victory over the San Francisco Knights.',
    winner: {
      id: 'california-reds',
      name: 'California Reds',
      city: 'California',
      nickname: 'Reds',
      score: 64,
      record: '4-3 (4th)',
      isHome: true,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      city: 'San Francisco',
      nickname: 'Knights',
      score: 49,
      record: '0-4 (12th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 8 },
      { period: 'Q2', team1: 18, team2: 12 },
      { period: 'Q3', team1: 15, team2: 15 },
      { period: 'Q4', team1: 13, team2: 14 },
    ],
    starPlayer: {
      name: 'Andor Marai',
      team: 'California Reds',
      statline: '18 PTS • 14 REB • 3 AST • 2 STL • 1 BLK (8-15 FG, 28 MIN)',
      highlight: '18 PTS & 14 REB Dominates Glass to Secure 2nd Straight Win',
    },
    keyStats: [
      { label: 'Field Goal %', value: '51% - 33%', desc: 'California 27-53 vs SF 18-55' },
      { label: 'Total Rebounds', value: '41 - 28', desc: '+13 Glass Advantage for Reds' },
      { label: 'Points in Paint', value: '28 - 22', desc: 'Reds Interior Scoring Control' },
      { label: 'Marai Double-Double', value: '18 & 14', desc: 'Game-High 14 Boards (12 Def)' },
    ],
    quote: {
      speaker: 'William Walker',
      role: 'Head Coach • California Reds (4-3 Record)',
      text: 'Andor Marai controlled both ends of the floor tonight. When he commands the glass with 14 rebounds and we shoot over 50%, we establish our signature physical brand.',
    },
  },
  {
    id: 's4-g18-sabrewolves-vs-knights',
    articleId: 's4-g18-sabrewolves-stifle-knights-creek',
    badgeTag: 'DEFENSIVE CLINIC • NOV 7',
    badgeColor: 'border-blue-500/60 bg-blue-500/10 text-blue-400',
    title: "Creek's Flawless 23-Point Masterclass Lifts Sabrewolves Past Knights 61-48",
    subtitle:
      'Andre Creek shoots an unbelievable 11-of-12 from the floor for 23 points and 6 rebounds as San Diego pulls away with a 23-15 third quarter push to secure their first victory of Season 4.',
    date: 'Nov 7 • Season 4 Regular Season',
    image: sdReboundS4Img,
    imageCaption: 'Andre Creek went 11-of-12 from the floor for a game-high 23 points and 6 rebounds as the San Diego Sabrewolves defeated the San Francisco Knights 61-48.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 61,
      record: '1-1 (6th)',
      isHome: false,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      city: 'San Francisco',
      nickname: 'Knights',
      score: 48,
      record: '0-3 (11th)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 13, team2: 16 },
      { period: 'Q2', team1: 11, team2: 8 },
      { period: 'Q3', team1: 23, team2: 15 },
      { period: 'Q4', team1: 14, team2: 9 },
    ],
    starPlayer: {
      name: 'Andre Creek',
      team: 'San Diego Sabrewolves',
      statline: '23 PTS • 6 REB • 1 BLK • 11-12 FG (91.7% FG, 27 MIN)',
      highlight: '11-12 Field Goal Shooting Clinic Drives First Win of Season 4',
    },
    keyStats: [
      { label: 'Andre Creek FG', value: '11 - 12 FG', desc: '91.7% Shooting Accuracy' },
      { label: 'Points in Paint', value: '38 - 18', desc: '+20 Paint Advantage for SD' },
      { label: 'Fast Break Pts', value: '13 - 4', desc: 'Sabrewolves Transition Control' },
      { label: 'Kirk Barnes', value: '8 PTS • 6 AST', desc: 'Game-High 6 Assists, 2 3PM' },
    ],
    quote: {
      speaker: 'Jacob Underwood',
      role: 'Head Coach • San Diego Sabrewolves (1-1 Record)',
      text: 'Andre Creek was practically automatic tonight. We defended with discipline, limited them to 18 paint points, and executed our halfcourt sets.',
    },
  },
  {
    id: 's4-g17-strykers-vs-dynamics',
    articleId: 's4-g17-strykers-blowout-dynamics-hinton',
    badgeTag: 'SOCAL SHOWDOWN • NOV 5',
    badgeColor: 'border-yellow-500/60 bg-yellow-500/10 text-yellow-400',
    title: 'Strykers Dismantle Dynamics 82-58 in Marquee Clash to Remain Undefeated at 4-0',
    subtitle:
      'San Diego detonates with a 28-8 first quarter blitz, scoring 29 fast-break points and committing only 3 turnovers as A.J. Hinton (18 PTS) and DeAnte Gray (15 PTS) dominate.',
    date: 'Nov 5 • Season 4 Regular Season',
    image: hintonVsJmjS4Img,
    imageCaption: 'A.J. Hinton scored 18 points with 6 rebounds and 3 steals as the San Diego Strykers steamrolled the LA Dynamics 82-58 in front of a sold-out San Diego Arena.',
    winner: {
      id: 'san-diego-strykers',
      name: 'San Diego Strykers',
      city: 'San Diego',
      nickname: 'Strykers',
      score: 82,
      record: '4-0 (1st)',
      isHome: true,
    },
    loser: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      city: 'Los Angeles',
      nickname: 'Dynamics',
      score: 58,
      record: '1-2 (7th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 8, team2: 28 },
      { period: 'Q2', team1: 10, team2: 18 },
      { period: 'Q3', team1: 19, team2: 13 },
      { period: 'Q4', team1: 21, team2: 23 },
    ],
    starPlayer: {
      name: 'A.J. Hinton',
      team: 'San Diego Strykers',
      statline: '18 PTS • 6 REB • 3 STL • 2 AST • 1 BLK (8-14 FG, 2-6 3PT)',
      highlight: 'Leads 28-8 Opening Blitz to Cruise to 4-0 Record',
    },
    keyStats: [
      { label: 'Q1 Blitz', value: '28 - 8', desc: 'Strykers +20 Opening Run' },
      { label: 'Fast Break Pts', value: '29 - 8', desc: 'San Diego Transition Dominance' },
      { label: 'Turnovers', value: '3 - 12', desc: 'Season-Low 3 Turnovers' },
      { label: 'Team Assists', value: '23 AST', desc: '23 Assists on 33 Made FGs' },
    ],
    quote: {
      speaker: 'Adam Saunders',
      role: 'Head Coach • San Diego Strykers (4-0 Record)',
      text: 'Our defensive intensity in the first 12 minutes set the tone. 29 fast-break points and only 3 turnovers all night is championship basketball.',
    },
  },
];

export const FeaturedGameStories: React.FC<FeaturedGameStoriesProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [isArchiveView, setIsArchiveView] = useState<boolean>(false);
  const [selectedStoryId, setSelectedStoryId] = useState<string>(FEATURED_STORIES[0].id);
  const [activeVideoStoryId, setActiveVideoStoryId] = useState<string | null>(null);

  const activeStories = isArchiveView ? ARCHIVED_STORIES : FEATURED_STORIES;
  const displayedStories =
    selectedStoryId === 'all'
      ? activeStories
      : activeStories.filter((s) => s.id === selectedStoryId).length > 0
      ? activeStories.filter((s) => s.id === selectedStoryId)
      : [activeStories[0]];

  return (
    <section className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame size={18} />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {isArchiveView ? 'Game Archives (Earlier Matchups)' : 'Lead Front Page Stories'}
            </h2>
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1.5">
              <Sparkles size={11} className="text-amber-400" />
              {isArchiveView ? 'ARCHIVED GAMES' : 'FEATURED GAME STORY • SEASON 4'}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            {isArchiveView
              ? 'Archived game recaps and verified box scores from earlier in Season 4.'
              : 'The latest verified matchup from the Season 4 slate with full game recap, stats, and cover photo.'}
          </p>
        </div>

        {/* Story Selector Switcher & Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          {!isArchiveView ? (
            /* FEATURED GAME CONTROLS */
            <>
              <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 flex-wrap gap-1">
                <button
                  onClick={() => setSelectedStoryId('s4-g24-tigersharks-vs-sabrewolves')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1 ${
                    selectedStoryId === 's4-g24-tigersharks-vs-sabrewolves'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>★ SJ 64, SD 52 (Pierce Record)</span>
                </button>
              </div>

              <button
                onClick={() => {
                  setIsArchiveView(true);
                  setSelectedStoryId(ARCHIVED_STORIES[0].id);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                title="View earlier archived games"
              >
                <Archive size={13} className="text-amber-400" />
                <span>Archives ({ARCHIVED_STORIES.length})</span>
              </button>
            </>
          ) : (
            /* ARCHIVED GAMES CONTROLS */
            <>
              <button
                onClick={() => {
                  setIsArchiveView(false);
                  setSelectedStoryId(FEATURED_STORIES[0].id);
                }}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-mono font-black flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowLeft size={13} />
                <span>Featured Game</span>
              </button>

              <div className="flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 flex-wrap gap-1">
                <button
                  onClick={() => setSelectedStoryId('s4-g23-mad-dogs-vs-knights')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1 ${
                    selectedStoryId === 's4-g23-mad-dogs-vs-knights'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>FRE vs SF</span>
                </button>
                <button
                  onClick={() => setSelectedStoryId('s4-g22-enterprise-vs-sabrewolves')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1 ${
                    selectedStoryId === 's4-g22-enterprise-vs-sabrewolves'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>GSE vs SD</span>
                </button>
                <button
                  onClick={() => setSelectedStoryId('s4-g21-dynamics-vs-mad-dogs')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1 ${
                    selectedStoryId === 's4-g21-dynamics-vs-mad-dogs'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>LAD vs FRE</span>
                </button>
                <button
                  onClick={() => setSelectedStoryId('s4-g21-renegades-vs-sabrewolves')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer flex items-center gap-1 ${
                    selectedStoryId === 's4-g21-renegades-vs-sabrewolves'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <span>OAK vs SD</span>
                </button>
                <button
                  onClick={() => setSelectedStoryId('all')}
                  className={`px-2.5 py-1 rounded-xl text-xs font-mono font-black transition-all cursor-pointer ${
                    selectedStoryId === 'all'
                      ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Archives ({ARCHIVED_STORIES.length})
                </button>
              </div>
            </>
          )}

          <button
            onClick={() => onNavigateToTab && onNavigateToTab('news')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <BookOpen size={13} className="text-amber-400" />
            <span>All Recaps</span>
          </button>
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('schedule')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calendar size={13} className="text-amber-400" />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* Featured Game Story Presentation */}
      <div className={displayedStories.length === 1 ? "max-w-4xl mx-auto w-full" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}>
        {displayedStories.map((story) => {
          const isLead = story.id === FEATURED_STORIES[0].id;
          return (
            <article
              key={story.id}
              className={`bg-slate-900/95 border rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-200 group ${
                isLead
                  ? 'border-amber-500/50 shadow-amber-500/5 ring-1 ring-amber-500/30'
                  : 'border-slate-800 hover:border-amber-500/40'
              }`}
            >
              {/* Top Banner: Embedded Video Player or Photo with Play Button */}
              {activeVideoStoryId === story.id && (story.youtubeEmbedUrl || story.youtubeUrl) ? (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${getYouTubeEmbedSrc(story.youtubeUrl, story.youtubeEmbedUrl)}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <button
                    onClick={() => setActiveVideoStoryId(null)}
                    className="absolute top-3 right-3 z-30 bg-slate-950/90 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
                    title="Close Video Replay"
                  >
                    <X size={14} />
                    <span>Close Replay</span>
                  </button>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* YouTube Video Play Button Overlay */}
                  {story.youtubeUrl && (
                    <button
                      onClick={() => setActiveVideoStoryId(story.id)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 transition-all cursor-pointer border-2 border-white/90 z-10 group/btn"
                      title="Watch Game Video Replay"
                      aria-label="Play game replay video"
                    >
                      <Play size={24} className="fill-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  )}

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${story.badgeColor}`}
                    >
                      {story.badgeTag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                    {story.date}
                  </div>

                {/* Scoreboard Overlay on the bottom of the image */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 bg-slate-950/95 backdrop-blur-md border border-slate-800/90 rounded-2xl p-3 shadow-xl">
                  <div className="grid grid-cols-2 items-center divide-x divide-slate-800 gap-2">
                    {/* Team 1 (Winner) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.winner.id)}
                      className="flex items-center justify-between pr-2 sm:pr-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.winner.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-black text-white leading-tight">
                            {story.winner.name}
                          </div>
                          <div className="text-[10px] font-mono text-emerald-400 font-bold">
                            {story.winner.record} • Winner
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 pl-2 shrink-0">
                        {story.winner.score}
                      </div>
                    </div>

                    {/* Team 2 (Loser) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.loser.id)}
                      className="flex items-center justify-between pl-2 sm:pl-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.loser.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-300 leading-tight">
                            {story.loser.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {story.loser.record}
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-slate-400 pl-2 shrink-0">
                        {story.loser.score}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

              {/* Story Details & Content Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                  >
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {story.subtitle}
                  </p>

                  {/* Star Spotlight Pill */}
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-amber-400 flex items-center gap-1">
                        <Sparkles size={12} className="text-amber-400" />
                        PLAYER OF THE GAME
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {story.starPlayer.team}
                      </span>
                    </div>
                    <div className="text-sm font-black text-white">
                      {story.starPlayer.name}
                    </div>
                    <div className="text-xs font-mono text-amber-300 font-bold">
                      {story.starPlayer.statline}
                    </div>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {story.keyStats.map((st, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/60 border border-slate-800/80 p-2.5 rounded-xl text-center space-y-0.5"
                      >
                        <div className="text-[9px] font-mono text-slate-400 font-bold uppercase leading-tight">
                          {st.label}
                        </div>
                        <div className="text-sm sm:text-base font-black text-amber-400 font-mono">
                          {st.value}
                        </div>
                        <div className="text-[9px] text-slate-400 leading-tight">
                          {st.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quarter by Quarter Box Score */}
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 overflow-x-auto">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-[10px] text-slate-400 uppercase border-b border-slate-800/80">
                          <th className="text-left py-0.5 font-bold">Team</th>
                          {story.quarterScores.map((q) => (
                            <th key={q.period} className="text-center py-0.5 font-bold">
                              {q.period}
                            </th>
                          ))}
                          <th className="text-right py-0.5 font-bold text-amber-400">T</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/40">
                        <tr>
                          <td className="py-1 text-white font-bold whitespace-nowrap">
                            {story.winner.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-300">
                              {q.team1}
                            </td>
                          ))}
                          <td className="text-right py-1 font-black text-amber-400">
                            {story.winner.score}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-slate-400 font-semibold whitespace-nowrap">
                            {story.loser.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-400">
                              {q.team2}
                            </td>
                          ))}
                          <td className="text-right py-1 font-bold text-slate-400">
                            {story.loser.score}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Coach / Player Quote */}
                  {story.quote && (
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs italic text-slate-300">
                      <span className="font-mono text-[10px] uppercase font-bold text-amber-400 not-italic block mb-0.5">
                        {story.quote.speaker} ({story.quote.role}):
                      </span>
                      &ldquo;{story.quote.text}&rdquo;
                    </div>
                  )}

                  {/* Secondary Story Image (placed later in the article) */}
                  {story.secondaryImage && (
                    <div className="pt-2">
                      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                        <img
                          src={story.secondaryImage}
                          alt={story.secondaryImageCaption || story.title}
                          className="w-full max-h-56 object-cover object-center"
                        />
                        {story.secondaryImageCaption && (
                          <div className="p-2.5 bg-slate-950/90 border-t border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                            <Sparkles size={12} className="text-amber-400 shrink-0" />
                            <span>{story.secondaryImageCaption}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-end gap-2.5">
                  {story.youtubeUrl && (
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveVideoStoryId(activeVideoStoryId === story.id ? null : story.id)}
                        className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                          activeVideoStoryId === story.id
                            ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                            : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/20'
                        }`}
                      >
                        <Play size={14} className="fill-current" />
                        <span>{activeVideoStoryId === story.id ? 'Close Video' : 'Watch Replay'}</span>
                      </button>
                      <a
                        href={story.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 transition-colors cursor-pointer"
                        title="Open directly on YouTube"
                        aria-label="Open on YouTube"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  )}
                  <button
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
