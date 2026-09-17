import { INAUGURAL_GAME_ARTICLE, GALLOWAY_BUZZER_BEATER_ARTICLE } from './leagueMilestonesData';
import { SEASON_1_SCHEDULE } from './s1ScheduleData';
import { SEASON_2_SCHEDULE } from './s2ScheduleData';
import { SEASON_3_SCHEDULE } from './s3ScheduleData';
import { SEASON_4_SCHEDULE } from './s4ScheduleData';
import { PLAYOFF_HISTORY } from './playoffsData';
import { TEAMS } from './teamsData';
import { GameRecord } from '../types';
import rjRush1Img from '../assets/images/RJRush1.png';
import boomerVsSf1Img from '../assets/images/Boomer_vs_SF1.png';
import cDaughertyVsSdImg from '../assets/images/CDaugherty_vs_SD.png';
import kingJordan1Img from '../assets/images/KingJordan1.png';
import rjRushVsFresnoImg from '../assets/images/RJRush_vs_Freso.png';
import ajHinton99Img from '../assets/images/AJHinton99.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import sdReboundS4Img from '../assets/images/SD_Rebound_S4.png';
import hintonVsJmjS4Img from '../assets/images/Hinton_vs_JMJs4.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import hinton42vsCalImg from '../assets/images/Hinton42_s4vsCAL.png';
import jDeanVsSacImg from '../assets/images/JDean_vs_SACs4.png';
import maraiVsLbImg from '../assets/images/Marai_vs_LBs4.png';
import maraiVsSfImg from '../assets/images/Marai_vs_SFs4.png';
import carltonDaughertyImg from '../assets/images/S4 Draft/Carlton Daugherty.png';
import boomerVsSacImg from '../assets/images/Boomer_VS_SAC1.png';
import boomerVsGsImg from '../assets/images/Boomer_vs_GS.png';
import ktVsSfImg from '../assets/images/KTvsSF_S4.png';
import daughertyVsCalImg from '../assets/images/Daugherty_vs_CAL1.png';
import jDeanVsSdImg from '../assets/images/JDean_vs_SDs4.png';
import deanVsSfImg from '../assets/images/DeanSFS1.png';
import calVsOakImg from '../assets/images/CALvsOAKs1.png';
import jacobUnderwoodImg from '../assets/images/JUnderwood.png';
import pognottiImg from '../assets/images/Pognotti.png';
import jGallowayImg from '../assets/images/JGalloway.png';
import hintonS4G1Img from '../assets/images/HintonS4G1.png';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import bowenPOTWImg from '../assets/images/BowenPOTW.png';
import hintonPOTWImg from '../assets/images/HintonPOTW.png';
import sjVsFreImg from '../assets/images/SJvsFREseason4.png';
import sjAtFre1Img from '../assets/images/SJatFREs4_1.png';
import aSaundersImg from '../assets/images/ASaunders.jpg';
import bNelsonImg from '../assets/images/BNelson.jpeg';
import cGoodwinImg from '../assets/images/CGoodwin.jpg';
import jUnderwoodPhoto from '../assets/images/JUnderwood.png';
import mStaufferImg from '../assets/images/MStauffer.jpeg';
import pSplitterImg from '../assets/images/PSplitter.jpg';
import rFloresImg from '../assets/images/RFlores.jpg';
import sPorterImg from '../assets/images/SPorter.jpeg';
import sRobertsImg from '../assets/images/SRoberts.jpeg';
import wWalkerImg from '../assets/images/WWalker.jpeg';
import wZimmermanImg from '../assets/images/WZimmerman.jpeg';
import zRandleImg from '../assets/images/image6.jpeg';

export interface CoachProfileCard {
  name: string;
  team: string;
  teamId: string;
  status: 'Returning' | 'Newcomer';
  tenure: string;
  tenureYears?: string;
  tenureNote?: string;
  photo: string;
  background: string;
  philosophy?: string;
}

export interface PodcastInfo {
  episodeTitle: string;
  broadcastBy?: string;
  duration?: string;
  description?: string;
}

export interface QuarterScore {
  period: string;
  team1: number;
  team2: number;
}

export interface CCHNewsArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  season: 1 | 2 | 3 | 4;
  category: 'recap' | 'offseason' | 'feature' | 'milestone' | 'championship';
  featured?: boolean;
  author: string;
  readTime: string;
  imageUrl?: string;
  imageCaption?: string;
  secondaryImage?: string;
  secondaryImageCaption?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  instagramEmbedUrl?: string;
  teams?: {
    team1: string;
    team1Id: string;
    score1?: number;
    team2: string;
    team2Id: string;
    score2?: number;
  };
  quarterScores?: QuarterScore[];
  headlineQuote?: string;
  contentParagraphs: string[];
  quotes?: { speaker: string; title: string; quote: string }[];
  playerStats?: { player: string; team: string; stat: string }[];
  coachesList?: CoachProfileCard[];
  audioUrl?: string;
  podcastInfo?: PodcastInfo;
}

export const CCH_NEWS_ARTICLES: CCHNewsArticle[] = [
  {
    id: 's4-g23-mad-dogs-rout-knights-boomer',
    title: 'Fresno Mad Dogs 68, San Francisco Knights 55',
    subtitle: 'The Mad Dogs bounce back from their loss to the Dynamics with a decisive victory over the Knights behind Lloyd Boomer\'s 21 points and Geraldo Jones\' double-double.',
    date: 'Season 4 Recap • Nov 13',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Bay Area Beat',
    readTime: '3 min read',
    youtubeUrl: 'https://www.youtube.com/embed/jQ8U80VCVBk?si=y8Z1FoRbbcB2XTDu',
    imageUrl: boomerVsSf1Img,
    imageCaption: 'Lloyd Boomer led the charge with 21 points (9-of-17 FG) while Geraldo Jones stuffed the stat sheet as the Fresno Mad Dogs dominated the paint and fast break to defeat the San Francisco Knights 68-55.',
    teams: {
      team1: 'Fresno Mad Dogs',
      team1Id: 'fresno-mad-dogs',
      score1: 68,
      team2: 'San Francisco Knights',
      team2Id: 'san-francisco-knights',
      score2: 55,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 12 },
      { period: 'Q2', team1: 16, team2: 15 },
      { period: 'Q3', team1: 17, team2: 14 },
      { period: 'Q4', team1: 17, team2: 14 },
    ],
    headlineQuote: 'The Mad Dogs bounced back from their loss to the Dynamics with a decisive victory over the Knights. Lloyd Boomer led the charge with 21 points (9-of-17 FG), while Geraldo Jones stuffed the stat sheet with 10 points, 12 rebounds, 4 assists, and 2 steals. The Mad Dogs dominated the paint (28-26) and the fast break (14-7).',
    contentParagraphs: [
      'San Francisco, CA – The Fresno Mad Dogs (4-1) bounced back emphatically from their loss to the Dynamics, securing a decisive 68-55 road victory over the San Francisco Knights (0-5) at San Francisco Arena on Thursday night.',
      'BOOMER LEADS THE CHARGE:\nLloyd Boomer led the charge with 21 points on 9-of-17 shooting from the floor, dictating tempo from the opening tip and answering every San Francisco run with timely baskets inside and in the mid-range.',
      'JONES STUFFS STAT SHEET & INTERIOR DOMINANCE:\nGeraldo Jones stuffed the stat sheet with 10 points, 12 rebounds, 4 assists, and 2 steals, providing relentless energy on both ends of the floor. The Mad Dogs dominated the paint (28-26) and pushed the tempo relentlessly, controlling the fast break by a decisive 14-7 margin.',
      'KNIGHTS RECAP:\nFor the winless Knights (0-5), guard Ed Burks had a tough shooting night (5-of-19 FG) but still finished with 14 points and 6 assists, while Marion Payton added 11 points and 8 rebounds. Erik Higgins chipped in 10 points, but San Francisco could not overcome Fresno\'s transition scoring and interior rebounding.'
    ],
    quotes: [
      {
        speaker: 'Lloyd Boomer',
        title: 'Guard • Fresno Mad Dogs (21 PTS, 9-17 FG)',
        quote: 'We took that Dynamics loss personally and came in determined to set the tone from the opening tip. Geraldo was phenomenal on the glass and our defense got us easy points in transition.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (4-1 Record)',
        quote: 'That was the response we needed. Bouncing back on the road against a desperate Knights team showed our maturity. Lloyd controlled the flow and Geraldo gave us huge minutes on both ends.'
      },
      {
        speaker: 'Arthur Saunders',
        title: 'Head Coach • San Francisco Knights (0-5 Record)',
        quote: 'Ed Burks and Marion Payton battled all night, but giving up a 14-7 fast break advantage and shooting cold from the perimeter makes it tough to beat a disciplined team like Fresno.'
      }
    ],
    playerStats: [
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '21 PTS, 5 AST, 3 REB (9-17 FG)' },
      { player: 'Geraldo Jones', team: 'Fresno Mad Dogs', stat: '10 PTS, 12 REB, 4 AST, 2 STL (Double-Double)' },
      { player: 'Ed Burks', team: 'San Francisco Knights', stat: '14 PTS, 6 AST, 2 STL (5-19 FG)' },
      { player: 'Marion Payton', team: 'San Francisco Knights', stat: '11 PTS, 8 REB, 1 BLK' },
      { player: 'Erik Higgins', team: 'San Francisco Knights', stat: '10 PTS, 6 REB (5-11 FG)' },
      { player: 'Luke Davidson', team: 'Fresno Mad Dogs', stat: '9 PTS, 7 REB' },
      { player: 'Carson Graham', team: 'Fresno Mad Dogs', stat: '8 PTS, 5 REB, 1 BLK' },
      { player: 'Fast Break Points', team: 'Team Comparison', stat: 'Fresno 14 • San Francisco 7 (+7 FRE)' },
      { player: 'Points in Paint', team: 'Team Comparison', stat: 'Fresno 28 • San Francisco 26 (+2 FRE)' },
      { player: 'Rebound Battle', team: 'Team Comparison', stat: 'Fresno 39 (Jones 12) • San Francisco 36 (Payton 8)' }
    ]
  },
  {
    id: 's4-g22-enterprise-rout-sabrewolves-daugherty',
    title: 'Golden State Enterprise 65, San Diego Sabrewolves 51',
    subtitle: 'Carlton Daugherty drops 31 points (7-12 3PT), Cameron Barkley pulls down 12 rebounds with 3 blocks, and Golden State silences the Sabrewolves in San Diego.',
    date: 'Season 4 Recap • Nov 12',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • SoCal Beat',
    readTime: '3 min read',
    youtubeUrl: 'https://www.youtube.com/embed/sZmDulCp-CY?si=BqXQ1pbiHlVReHCu',
    imageUrl: cDaughertyVsSdImg,
    imageCaption: 'Carlton Daugherty put on an absolute masterclass, dropping 31 points on 11-of-23 shooting and 7 three-pointers to power Golden State Enterprise to a 65-51 road victory over the San Diego Sabrewolves.',
    secondaryImage: kingJordan1Img,
    secondaryImageCaption: 'Sabrewolves star Kirk "King Jordan" Barnes (18 PTS, 4 AST) and Andre Creek (14 PTS, 9 REB) battle Enterprise on their home floor at San Diego Arena.',
    teams: {
      team1: 'Golden State Enterprise',
      team1Id: 'golden-state-enterprise',
      score1: 65,
      team2: 'San Diego Sabrewolves',
      team2Id: 'san-diego-sabrewolves',
      score2: 51,
    },
    quarterScores: [
      { period: 'Q1', team1: 16, team2: 14 },
      { period: 'Q2', team1: 20, team2: 12 },
      { period: 'Q3', team1: 13, team2: 11 },
      { period: 'Q4', team1: 16, team2: 14 },
    ],
    headlineQuote: 'Carlton Daugherty put on an absolute masterclass, dropping 31 points on 11-of-23 shooting (7-of-12 from three-point range) to single-handedly dismantle the Sabrewolves defense in a commanding 65-51 road victory.',
    contentParagraphs: [
      'San Diego, CA – Golden State Enterprise (2-1) delivered an emphatic statement on Wednesday night at San Diego Arena, dismantling the San Diego Sabrewolves (1-3) in a 65-51 road triumph propelled by an unforgettable offensive masterpiece from rookie sensation Carlton Daugherty.',
      'DAUGHERTY MASTERCLASS:\nCarlton Daugherty put on an absolute masterclass, dropping 31 points on 11-of-23 shooting (7-of-12 from three-point range) to single-handedly dismantle the Sabrewolves defense. Daugherty caught fire early and never cooled off, drilling contested step-backs, pull-up jumpers, and transition triples from all angles on the floor to put the contest out of reach.',
      "ENTERPRISE INTERIOR & PLAYMAKING:\nBacking Daugherty's scoring explosion, center Cameron Barkley anchored the interior with 8 points, 12 rebounds, and 3 blocked shots, completely neutralizing San Diego's paint attack. Playmaker Jud Thompson orchestrated the offense with precision, recording 10 points and 6 assists while committing zero turnovers. Chad Bryant added 8 points and 4 rebounds as Golden State outscored San Diego 20-12 in the second quarter to seize total momentum.",
      "SABREWOLVES RECAP:\nFor San Diego (1-3), star guard Kirk Barnes battled for a team-high 18 points on 6-of-14 shooting, 4 assists, and 3 rebounds, while center Andre Creek contributed 14 points, 9 rebounds, and 2 blocks. However, San Diego struggled mightily from long distance (3-of-16 3PT) and could not contain Daugherty's 7-of-12 barrage from beyond the arc as the Sabrewolves suffered their second straight defeat."
    ],
    quotes: [
      {
        speaker: 'Carlton Daugherty',
        title: 'Forward • Golden State Enterprise (31 PTS, 7-12 3PT)',
        quote: 'My teammates set great screens and found me in rhythm. Once that first three went down, the basket looked huge. We wanted to set a tone on the road and Cameron and Jud were unbelievable on both ends.'
      },
      {
        speaker: 'Wyatt Zimmerman',
        title: 'Head Coach • Golden State Enterprise (2-1 Record)',
        quote: "Carlton was completely in the zone. Thirty-one points and seven threes on the road against a tough defense is special. Barkley's 12 rebounds and 3 blocks kept them from getting anything easy inside."
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves (1-3 Record)',
        quote: "When a scorer like Daugherty gets hot and hits seven threes, you have to run him off the line. We let him get comfortable in the second quarter, and we didn't hit enough shots on our end to keep pace."
      }
    ],
    playerStats: [
      { player: 'Carlton Daugherty', team: 'Golden State Enterprise', stat: '31 PTS, 5 REB, 2 STL (11-23 FG, 7-12 3PT)' },
      { player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '18 PTS, 3 REB, 4 AST (6-14 FG, 2-5 3PT, 4-4 FT)' },
      { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '14 PTS, 9 REB, 2 BLK (6-11 FG)' },
      { player: 'Jud Thompson', team: 'Golden State Enterprise', stat: '10 PTS, 6 AST, 2 STL (4-7 FG, 0 TO)' },
      { player: 'Cameron Barkley', team: 'Golden State Enterprise', stat: '8 PTS, 12 REB, 3 BLK (4-8 FG)' },
      { player: 'Chad Bryant', team: 'Golden State Enterprise', stat: '8 PTS, 4 REB (3-7 FG)' },
      { player: 'Wes Taylor', team: 'San Diego Sabrewolves', stat: '7 PTS, 4 REB, 2 STL' },
      { player: 'Leo Washington Jr.', team: 'San Diego Sabrewolves', stat: '6 PTS, 2 AST' },
      { player: '3-Point Shooting', team: 'Team Comparison', stat: 'Golden State 9-18 (50%) • San Diego 3-16 (18.8%)' },
      { player: 'Rebounds', team: 'Team Comparison', stat: 'Golden State 38 • San Diego 34 (+4 GSE)' },
      { player: '2nd Quarter Margin', team: 'Team Comparison', stat: 'Golden State 20 • San Diego 12 (+8 GSE)' }
    ]
  },
  {
    id: 's4-g21-dynamics-edge-mad-dogs-rush',
    title: 'Los Angeles Dynamics 59, Fresno Mad Dogs 57',
    subtitle: 'R.J. Rush leads with game-high 23 points (10-10 FT), Reggie Forte adds 12 off the bench, and Mo Alexander grabs 13 boards as LA rallies from 7 down at the break.',
    date: 'Season 4 Recap • Nov 11',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Central Valley Beat',
    readTime: '3 min read',
    youtubeUrl: 'https://www.youtube.com/embed/fXPrOZMpMBQ?si=vn8IostE2dSEMPZg',
    imageUrl: rjRushVsFresnoImg,
    imageCaption: 'R.J. Rush tallied a game-high 23 points, shooting 10-of-10 from the free throw line, to propel the Los Angeles Dynamics to a gritty 59-57 road comeback over the Fresno Mad Dogs.',
    teams: {
      team1: 'Los Angeles Dynamics',
      team1Id: 'los-angeles-dynamics',
      score1: 59,
      team2: 'Fresno Mad Dogs',
      team2Id: 'fresno-mad-dogs',
      score2: 57,
    },
    quarterScores: [
      { period: 'Q1', team1: 16, team2: 20 },
      { period: 'Q2', team1: 18, team2: 21 },
      { period: 'Q3', team1: 10, team2: 4 },
      { period: 'Q4', team1: 15, team2: 12 },
    ],
    headlineQuote: 'The Dynamics pulled off a gritty upset on the road, handing the Mad Dogs a narrow defeat. Despite trailing 41-34 at halftime, Los Angeles clamped down defensively in the second half, winning the third quarter 10-4 and the fourth 15-12 to steal the game.',
    contentParagraphs: [
      'Fresno, CA – The Los Angeles Dynamics (2-2) pulled off a gritty upset on the road at Save Mart Center, handing the Fresno Mad Dogs (3-1) a narrow 59-57 defeat in a defensive second-half slugfest.',
      'SECOND-HALF CLAMPDOWN:\nDespite trailing 41-34 at halftime, Los Angeles clamped down defensively in the second half, winning the third quarter 10-4 and the fourth 15-12 to steal the game. The Dynamics held Fresno to just 16 total points over the final two periods while forcing contested shots and controlling the glass.',
      'DYNAMICS PRODUCTION:\nR.J. Rush led the way for the Dynamics with a game-high 23 points, hitting 10-of-10 free throws, while Reggie Forte added 12 points off the bench with timely interior scoring and energetic defense. Mo Alexander controlled the glass with 13 rebounds, locking down the paint and preventing second-chance opportunities in the fourth quarter.',
      'MAD DOGS EFFORT:\nFor the Mad Dogs (3-1), newly acquired Luke Davidson was incredibly efficient, scoring 17 points on 7-of-10 shooting (3-of-4 from deep). Despite the loss, Lloyd Boomer finished with 12 points and 5 assists, and Geraldo Jones secured a double-double with 10 points and 10 rebounds.'
    ],
    quotes: [
      {
        speaker: 'R.J. Rush',
        title: 'Guard • Los Angeles Dynamics (23 PTS, 10-10 FT)',
        quote: 'We knew we had to tighten up defensively after giving up 41 in the first half. Winning the third quarter 10-4 set the tone. Reggie Forte was huge off the bench, and Mo controlled the glass down the stretch.'
      },
      {
        speaker: 'Pooh Splitter',
        title: 'Head Coach • Los Angeles Dynamics (2-2 Record)',
        quote: 'That was pure grit. Trailing by seven on the road and holding an undefeated team to 16 points in the entire second half proves what our defense is capable of when we stay disciplined.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (3-1 Record)',
        quote: 'Luke Davidson gave us great efficiency with 17 points, but scoring four points in the third quarter cost us. Credit to LA; Rush got to the line and went 10-for-10, and they executed when it mattered most.'
      }
    ],
    playerStats: [
      { player: 'R.J. Rush', team: 'Los Angeles Dynamics', stat: '23 PTS, 3 AST, 2 STL (6-14 FG, 10-10 FT)' },
      { player: 'Luke Davidson', team: 'Fresno Mad Dogs', stat: '17 PTS, 4 REB (7-10 FG, 3-4 3PT)' },
      { player: 'Reggie Forte', team: 'Los Angeles Dynamics', stat: '12 PTS, 5 REB, 1 BLK off bench (5-8 FG)' },
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '12 PTS, 5 AST, 3 REB (5-12 FG)' },
      { player: 'Geraldo Jones', team: 'Fresno Mad Dogs', stat: '10 PTS, 10 REB (Double-Double, 4-8 FG)' },
      { player: 'Mo Alexander', team: 'Los Angeles Dynamics', stat: '6 PTS, 13 REB, 2 BLK (10 Def REB)' },
      { player: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', stat: '8 PTS, 4 AST, 3 REB' },
      { player: 'Carson Graham', team: 'Fresno Mad Dogs', stat: '6 PTS, 4 REB' },
      { player: '2nd-Half Defense', team: 'Team Comparison', stat: 'LA held Fresno to 16 PTS (10-4 Q3, 15-12 Q4)' },
      { player: 'Free Throw Shooting', team: 'Team Comparison', stat: 'LA 15-17 (Rush 10-10) • Fresno 6-8' },
      { player: 'Rebound Battle', team: 'Team Comparison', stat: 'LA 37 (Alexander 13) • Fresno 35 (Jones 10)' }
    ]
  },
  {
    id: 's4-g21-renegades-edge-sabrewolves-dean',
    title: 'Renegades Edge Sabrewolves 60-59 in 4th-Quarter Thriller to Stay Unbeaten at 5-0',
    subtitle: "Jamar Dean scores 18 points, Alonzo Reece adds 12 with clutch free throws, and Oakland mounts an 18-14 fourth-quarter comeback in San Diego to overcome Kirk Barnes' 19 points.",
    date: 'Season 4 Recap • Nov 9',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • SoCal Beat',
    readTime: '3 min read',
    youtubeUrl: 'https://www.youtube.com/embed/JdRXhCSupwM?si=LroEqV-JMzZreXc_',
    imageUrl: jDeanVsSdImg,
    imageCaption: 'Jamar Dean poured in 18 points, 6 rebounds, and 4 assists as the Oakland Renegades rallied in the fourth quarter to edge the San Diego Sabrewolves 60-59 at San Diego Arena.',
    teams: {
      team1: 'Oakland Renegades',
      team1Id: 'oakland-renegades',
      score1: 60,
      team2: 'San Diego Sabrewolves',
      team2Id: 'san-diego-sabrewolves',
      score2: 59,
    },
    quarterScores: [
      { period: 'Q1', team1: 10, team2: 13 },
      { period: 'Q2', team1: 20, team2: 19 },
      { period: 'Q3', team1: 12, team2: 13 },
      { period: 'Q4', team1: 18, team2: 14 },
    ],
    headlineQuote: 'Three turnovers in 32 minutes on the road against a defense that blocked 9 shots is championship poise. Jamar and Alonzo controlled crunch time.',
    contentParagraphs: [
      'San Diego, CA – In one of the most intense, defense-dominated showdowns of Season 4, the visiting Oakland Renegades (5-0) preserved their unblemished record with a nerve-wracking 60-59 victory over the San Diego Sabrewolves (1-2) at San Diego Arena on Sunday night.',
      'FOURTH-QUARTER COMEBACK:\nEntering the fourth quarter trailing 45-42 in a hostile environment, Oakland leaned on their superstar backcourt and textbook ball protection to stage an 18-14 final-period surge. The defining statistic of the game was turnovers: Oakland committed a season-low 3 turnovers across the entire contest while forcing 11 Sabrewolves giveaways. The Renegades transformed those mistakes into 17 crucial points off turnovers (compared to just 4 points off turnovers for San Diego), providing the razor-thin margin needed to secure the one-point win on the road.',
      "RENEGADES PRODUCTION:\nAll-Cali guard Jamar Dean spearheaded Oakland's attack with a team-high 18 points, 6 rebounds (2 offensive), 4 assists, and a steal in 26 minutes of action. Co-star Alonzo Reece orchestrated the late-game offense with supreme poise, delivering 12 points and 5 assists while finishing a flawless 6-of-6 from the free throw line. Rookie big man Carl Marks turned in a stellar, hyper-efficient performance with 11 points (3-of-4 FG, 1-of-1 3PT, 4-of-4 FT) and 5 rebounds. Off the bench, Jaylen Moon provided instant offensive punch with 10 points in just 12 minutes (5-of-9 FG), and center Joshua Bowen anchored the passing lanes with 4 steals and 7 rebounds alongside Andrew Woods (5 points, 2 steals). Oakland shot 13-of-15 (86.7%) from the free throw line as a team.",
      "SABREWOLVES RECAP:\nFor San Diego (1-2), premier scoring maestro Kirk Barnes delivered a sensational display, racking up a game-high 19 points on 5-of-10 shooting, 2-of-4 from downtown, and a perfect 7-of-7 from the charity stripe, plus 5 rebounds, 3 assists, and a block. Anchor center Andre Creek was an intimidating force in the paint with 12 points on 6-of-9 shooting, 7 rebounds, and 3 blocked shots, pacing a Sabrewolves defense that tallied 9 blocks. Reserve guard Leo Washington Jr. gave San Diego huge production off the bench with 10 points on 4-of-6 shooting (2-of-2 3PT), Alan Perben added 6 points and 3 assists, and Wes Taylor battled for 4 rebounds, 2 assists, and 2 blocks. However, San Diego's 11 turnovers and inability to slow Oakland's late free-throw parade proved decisive in the final seconds."
    ],
    quotes: [
      {
        speaker: 'Jamar Dean',
        title: 'Guard • Oakland Renegades (18 PTS, 6 REB, 4 AST)',
        quote: 'Playing in San Diego is always a dogfight. They protected the rim with Creek and blocked nine shots, but we never got rattled. We took care of the ball, had only 3 turnovers the whole night, and Alonzo and Carl came up huge at the line.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades (5-0 Record)',
        quote: 'Three turnovers in 32 minutes on the road against a defense that blocked 9 shots is championship poise. Jamar and Alonzo controlled crunch time, and our bench gave us vital minutes when we were down entering the fourth.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves (1-2 Record)',
        quote: 'To hold Oakland to 60 points and 41% shooting and lose by a single point is gut-wrenching. Kirk Barnes and Andre Creek competed at an elite level, but giving up 17 points off our 11 turnovers is what decided the ballgame.'
      }
    ],
    playerStats: [
      { player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '19 PTS, 5 REB, 3 AST, 1 BLK (5-10 FG, 2-4 3PT, 7-7 FT)' },
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '18 PTS, 6 REB, 4 AST, 1 STL (7-20 FG, 1-4 3PT, 3-3 FT)' },
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '12 PTS, 5 AST, 2 REB (3-5 FG, 6-6 FT)' },
      { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '12 PTS, 7 REB, 3 BLK, 1 STL (6-9 FG)' },
      { player: 'Carl Marks', team: 'Oakland Renegades', stat: '11 PTS, 5 REB, 1 STL (3-4 FG, 1-1 3PT, 4-4 FT)' },
      { player: 'Jaylen Moon', team: 'Oakland Renegades', stat: '10 PTS (5-9 FG in 12 MIN)' },
      { player: 'Leo Washington Jr.', team: 'San Diego Sabrewolves', stat: '10 PTS, 1 STL, 1 BLK (4-6 FG, 2-2 3PT)' },
      { player: 'Alan Perben', team: 'San Diego Sabrewolves', stat: '6 PTS, 3 REB, 3 AST, 1 BLK (2-4 FG, 2-3 FT)' },
      { player: 'Andrew Woods', team: 'Oakland Renegades', stat: '5 PTS, 1 REB, 1 AST, 2 STL (2-5 FG, 1-4 3PT)' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '4 PTS, 7 REB, 4 STL (2-4 FG)' },
      { player: 'Tingus Atgusanas', team: 'San Diego Sabrewolves', stat: '3 PTS, 2 REB, 2 AST, 1 BLK (1-3 FG, 1-2 FT)' },
      { player: 'Rick Glover', team: 'San Diego Sabrewolves', stat: '3 PTS, 3 REB (1-3 FG, 1-2 FT)' },
      { player: 'Wes Taylor', team: 'San Diego Sabrewolves', stat: '2 PTS, 4 REB, 2 AST, 2 BLK, 1 STL (1-5 FG)' },
      { player: 'Matt Holland', team: 'San Diego Sabrewolves', stat: '2 PTS, 2 REB, 1 AST (1-2 FG)' },
      { player: 'Garrison Iverson', team: 'San Diego Sabrewolves', stat: '2 PTS, 3 REB, 1 AST (1-3 FG)' },
      { player: 'Points Off Turnovers', team: 'Team Comparison', stat: 'Oakland 17 PTS (3 TO) • San Diego 4 PTS (11 TO) [+13 OAK]' },
      { player: 'Free Throw %', team: 'Team Comparison', stat: 'Oakland 13-15 (86.7%) • San Diego 11-14 (78.6%)' },
      { player: 'Turnovers', team: 'Team Comparison', stat: 'Oakland 3 TO • San Diego 11 TO' },
      { player: 'Team Blocks', team: 'Team Comparison', stat: 'San Diego 9 BLK • Oakland 0 BLK' },
      { player: 'Bench Points', team: 'Team Comparison', stat: 'San Diego 21 PTS • Oakland 10 PTS' }
    ]
  },
  {
    id: 's4-g20-reds-rout-knights-marai',
    title: "Marai's 18 & 14 Double-Double Anchors Reds in 64-49 Rout Over Knights",
    subtitle: 'Andor Marai posts 18 points, 14 rebounds, and 3 assists while California shoots 51% from the field and dominates the boards to drop San Francisco to 0-4.',
    date: 'Season 4 Recap • Nov 9',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • SoCal Beat',
    readTime: '3 min read',
    youtubeUrl: 'https://www.youtube.com/embed/cHJfZTom0GU?si=fvuu2sTPlT1MeK8A',
    imageUrl: maraiVsSfImg,
    imageCaption: 'Andor Marai registered 18 points, 14 rebounds, 3 assists, 2 steals, and 1 block to lead the California Reds to a convincing 64-49 home victory over the San Francisco Knights.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 64,
      team2: 'San Francisco Knights',
      team2Id: 'san-francisco-knights',
      score2: 49,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 8 },
      { period: 'Q2', team1: 18, team2: 12 },
      { period: 'Q3', team1: 15, team2: 15 },
      { period: 'Q4', team1: 13, team2: 14 },
    ],
    headlineQuote: 'Andor Marai controlled both ends of the floor tonight. When he commands the glass with 14 rebounds and we shoot over 50%, we establish our signature physical brand.',
    contentParagraphs: [
      'Inglewood, CA – The California Reds (4-3) continued their positive momentum on Sunday night, pulling away early and playing suffocating halfcourt defense to secure a comfortable 64-49 home victory over the winless San Francisco Knights (0-4) at the Forum.',
      'Hungarian center Andor Marai was dominant in the paint, recording a massive double-double with 18 points on 8-of-15 shooting, a game-high 14 rebounds (2 offensive, 12 defensive), 3 assists, 2 steals, and a block in 28 minutes. California established an 18-8 lead in the opening period and maintained a double-digit cushion throughout the evening, shooting an efficient 51% (27-of-53) from the floor and 40% (6-of-15) from three-point range.',
      'SUPPORTING PRODUCTION:\nForward Donald Rodman provided steady frontcourt muscle with 11 points and 7 rebounds on 5-of-8 shooting. Guard Stan Roberts contributed 10 points (2-of-4 3PT) and 3 assists, while reserve Jadon Gordon provided instant energy off the bench with 10 points, 5 rebounds, and 3 steals in only 12 minutes. Kyle Robinson sank two triples for 8 points, and Malik Holman orchestrated the offense with 6 assists and 7 rebounds.',
      'KNIGHTS RECAP:\nFor San Francisco (0-4), Ed Burks paced the offense with 12 points, 2 rebounds, 2 assists, and 2 steals. Dexter Cage and Marion Payton chipped in 7 points apiece off the bench, with Payton grabbing 4 steals in just 6 minutes of action. Nelson Battle added 6 points on two 3-pointers, and center Marty Dunn contributed 5 points, 6 rebounds, and a game-high 3 blocks. However, the Knights were held to just 33% shooting (18-of-55) and 24% from beyond the arc (4-of-17).'
    ],
    quotes: [
      {
        speaker: 'Andor Marai',
        title: 'Center • California Reds (18 PTS, 14 REB)',
        quote: 'We wanted to establish our physical presence on the glass right from the tip. Our guards did a tremendous job finding me in good post spots, and our defensive rotations were sharp all night.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds (4-3 Record)',
        quote: 'Andor Marai controlled both ends of the floor tonight. When he commands the glass with 14 rebounds and we shoot over 50%, we establish our signature physical brand.'
      },
      {
        speaker: 'Zack Randle',
        title: 'Head Coach • San Francisco Knights (0-4 Record)',
        quote: 'You cannot spot a team like California an 18-8 first quarter deficit and expect to claw back on their home floor. We struggled to finish at the rim against Marai and gave up too many high-percentage looks.'
      }
    ],
    playerStats: [
      { player: 'Andor Marai', team: 'California Reds', stat: '18 PTS, 14 REB, 3 AST, 2 STL, 1 BLK (8-15 FG, 1-1 3PT, 1-1 FT)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '11 PTS, 7 REB (5-8 FG, 1-3 3PT)' },
      { player: 'Stan Roberts', team: 'California Reds', stat: '10 PTS, 2 REB, 3 AST, 1 STL (4-9 FG, 2-4 3PT)' },
      { player: 'Jadon Gordon', team: 'California Reds', stat: '10 PTS, 5 REB, 3 STL (4-6 FG, 2-4 FT)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '8 PTS, 3 AST (3-5 FG, 2-3 3PT)' },
      { player: 'Don Irving', team: 'California Reds', stat: '3 PTS, 3 REB, 1 AST, 1 STL (1-2 FG, 1-2 FT)' },
      { player: 'Malik Holman', team: 'California Reds', stat: '2 PTS, 7 REB, 6 AST (1-2 FG)' },
      { player: 'Ronnie Pierce', team: 'California Reds', stat: '2 PTS, 1 STL (1-1 FG)' },
      { player: 'Ed Burks', team: 'San Francisco Knights', stat: '12 PTS, 2 REB, 2 AST, 2 STL (4-15 FG, 2-8 3PT, 2-2 FT)' },
      { player: 'Dexter Cage', team: 'San Francisco Knights', stat: '7 PTS, 2 REB, 4 AST, 1 STL (3-6 FG, 1-1 FT)' },
      { player: 'Marion Payton', team: 'San Francisco Knights', stat: '7 PTS, 2 REB, 4 STL (3-3 FG, 1-2 FT)' },
      { player: 'Nelson Battle', team: 'San Francisco Knights', stat: '6 PTS, 2 REB (2-7 FG, 2-4 3PT)' },
      { player: 'Marty Dunn', team: 'San Francisco Knights', stat: '5 PTS, 6 REB, 1 STL, 3 BLK (2-7 FG, 1-2 FT)' },
      { player: 'Damian Gilmore', team: 'San Francisco Knights', stat: '3 PTS, 4 REB, 1 STL, 1 BLK (0-5 FG, 3-4 FT)' },
      { player: 'Gheorghe Stefan', team: 'San Francisco Knights', stat: '3 PTS, 2 REB, 1 AST (1-4 FG, 1-1 FT)' },
      { player: 'Donnie Anderson', team: 'San Francisco Knights', stat: '2 PTS, 1 REB, 3 AST, 1 STL (1-3 FG)' },
      { player: 'Erik Higgins', team: 'San Francisco Knights', stat: '2 PTS, 4 REB, 1 AST, 2 STL (1-4 FG)' },
      { player: 'Martin Tinsley', team: 'San Francisco Knights', stat: '2 PTS, 1 REB (1-1 FG)' },
      { player: 'Field Goal %', team: 'Team Comparison', stat: 'California 27-53 (51%) • San Francisco 18-55 (33%)' },
      { player: 'Rebounds', team: 'Team Comparison', stat: 'California 41 REB (5 OFF, 36 DEF) • San Francisco 28 REB (4 OFF, 24 DEF)' },
      { player: 'Assists / Turnovers', team: 'Team Comparison', stat: 'California 19 AST, 13 TO • San Francisco 12 AST, 9 TO' }
    ]
  },
  {
    id: 's4-g18-sabrewolves-stifle-knights-creek',
    title: "Creek's Flawless 23-Point Masterclass Lifts Sabrewolves Past Knights 61-48 for First Win",
    subtitle: 'Andre Creek shoots a scorching 11-of-12 from the floor for 23 points and 6 rebounds as San Diego pulls away in the second half to defeat San Francisco 61-48.',
    date: 'Season 4 Recap • Nov 7',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Bay Area Beat',
    readTime: '3 min read',
    imageUrl: sdReboundS4Img,
    imageCaption: 'Andre Creek connected on 11-of-12 field goal attempts for a game-high 23 points and 6 rebounds as the San Diego Sabrewolves captured their first win of Season 4, 61-48 over San Francisco.',
    teams: {
      team1: 'San Diego Sabrewolves',
      team1Id: 'san-diego-sabrewolves',
      score1: 61,
      team2: 'San Francisco Knights',
      team2Id: 'san-francisco-knights',
      score2: 48,
    },
    quarterScores: [
      { period: 'Q1', team1: 13, team2: 16 },
      { period: 'Q2', team1: 11, team2: 8 },
      { period: 'Q3', team1: 23, team2: 15 },
      { period: 'Q4', team1: 14, team2: 9 },
    ],
    headlineQuote: 'Andre Creek was practically automatic tonight. When your leading scorer goes 11-of-12 from the field, everything else flows naturally on offense.',
    contentParagraphs: [
      'San Francisco – The San Diego Sabrewolves secured their first victory of Season 4 on Friday night, holding the San Francisco Knights to just 48 points in a disciplined 61-48 road win at the Bill Graham Civic Auditorium.',
      'Forward Andre Creek was the undisputed star of the evening, putting on a clinic in mid-range and interior scoring with 23 points on 11-of-12 shooting (91.7% FG) to go along with 6 rebounds and a block. San Diego controlled the second half with a 23-15 third quarter push, exploiting their size and transition opportunities (13 fast break points to SF’s 4, and 38 paint points to 18).',
      'SUPPORTING PRODUCTION:\nAlan Perben gave San Diego 9 points and 3 rebounds, while veteran playmaker Kirk Barnes dished out a game-high 6 assists with 8 points (2-of-3 3PT). Garrison Iverson contributed 7 points and 4 rebounds, while Lynwood Washington Jr. swatted 2 blocks. On the perimeter, Rick Glover made huge defensive plays, collecting 4 steals in the second half.',
      'KNIGHTS RECAP:\nFor San Francisco (0-3), Damian Gilmore led the scoring with 11 points (6-8 FT) and 2 blocks, while Erik Higgins matched him with 11 points on 5-of-8 shooting. Marion Payton pulled down 6 rebounds and Gheorghe Stefan grabbed 5 boards. However, the Knights struggled from outside (4-of-17, 24% 3PT) and turned the ball over 16 times against San Diego’s active passing-lane defense.'
    ],
    quotes: [
      {
        speaker: 'Andre Creek',
        title: 'Forward • San Diego Sabrewolves (23 PTS, 11-12 FG)',
        quote: 'My teammates found me in rhythm and in spots where I could attack quickly. We needed this win to bounce back after the opener, and our second-half defense was locked in.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves (1-1 Record)',
        quote: 'Andre Creek was practically automatic tonight. We defended with discipline, limited them to 18 paint points, and executed our halfcourt sets.'
      },
      {
        speaker: 'Zack Randle',
        title: 'Head Coach • San Francisco Knights (0-3 Record)',
        quote: 'Creek hurt us in the high post all night. We had open looks in the third quarter that didn’t fall, and you can’t give up 38 points in the paint when shooting 35%.'
      }
    ],
    playerStats: [
      { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '23 PTS, 6 REB, 1 BLK (11-12 FG, 1-2 FT)' },
      { player: 'Alan Perben', team: 'San Diego Sabrewolves', stat: '9 PTS, 3 REB, 1 AST, 1 STL, 1 BLK (4-8 FG, 1-2 3PT)' },
      { player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '8 PTS, 6 AST, 1 REB, 1 BLK (3-9 FG, 2-3 3PT)' },
      { player: 'Garrison Iverson', team: 'San Diego Sabrewolves', stat: '7 PTS, 4 REB, 1 STL (3-6 FG, 1-2 FT)' },
      { player: 'Lynwood Washington Jr.', team: 'San Diego Sabrewolves', stat: '6 PTS, 2 BLK, 1 AST (2-7 FG, 2-2 FT)' },
      { player: 'Wes Taylor', team: 'San Diego Sabrewolves', stat: '3 PTS, 5 AST, 3 REB (1-4 FG, 1-2 FT)' },
      { player: 'Tingus Atgusanas', team: 'San Diego Sabrewolves', stat: '2 PTS, 7 REB, 3 AST, 2 STL' },
      { player: 'Rick Glover', team: 'San Diego Sabrewolves', stat: '2 PTS, 4 REB, 4 STL, 1 AST' },
      { player: 'Damian Gilmore', team: 'San Francisco Knights', stat: '11 PTS, 2 STL, 2 BLK (2-5 FG, 6-8 FT)' },
      { player: 'Erik Higgins', team: 'San Francisco Knights', stat: '11 PTS, 3 REB, 2 STL, 1 BLK (5-8 FG)' },
      { player: 'Marty Dunn', team: 'San Francisco Knights', stat: '7 PTS, 4 REB, 1 STL (3-4 FG)' },
      { player: 'Donnie Anderson', team: 'San Francisco Knights', stat: '6 PTS, 4 AST, 3 STL, 1 BLK' },
      { player: 'Points in Paint', team: 'Team Comparison', stat: 'San Diego 38 PTS • San Francisco 18 PTS (+20 SD)' },
      { player: 'Fast Break Points', team: 'Team Comparison', stat: 'San Diego 13 PTS • San Francisco 4 PTS (+9 SD)' }
    ]
  },
  {
    id: 's4-g17-strykers-blowout-dynamics-hinton',
    title: 'Strykers Dismantle Dynamics 82-58 in Marquee Clash to Remain Undefeated at 4-0',
    subtitle: 'San Diego opens with an overpowering 28-8 first quarter, generating 29 fast break points and 11 steals to cruise past Los Angeles 82-58 behind A.J. Hinton’s 18 points.',
    date: 'Season 4 Recap • Nov 5',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Southern Cali Beat',
    readTime: '4 min read',
    imageUrl: hintonVsJmjS4Img,
    imageCaption: 'A.J. Hinton scored 18 points with 6 rebounds and 3 steals as the San Diego Strykers unleashed a 28-8 opening blitz to crush the LA Dynamics 82-58.',
    teams: {
      team1: 'Los Angeles Dynamics',
      team1Id: 'los-angeles-dynamics',
      score1: 58,
      team2: 'San Diego Strykers',
      team2Id: 'san-diego-strykers',
      score2: 82,
    },
    quarterScores: [
      { period: 'Q1', team1: 8, team2: 28 },
      { period: 'Q2', team1: 10, team2: 18 },
      { period: 'Q3', team1: 19, team2: 13 },
      { period: 'Q4', team1: 21, team2: 23 },
    ],
    headlineQuote: 'Our defensive intensity in the first 12 minutes set the tone. 29 fast-break points and only 3 turnovers all night is championship basketball.',
    contentParagraphs: [
      'San Diego – In one of the most anticipated matchups of the young Season 4 calendar, the San Diego Strykers made a resounding statement, dominating the Los Angeles Dynamics 82-58 in front of a capacity crowd at San Diego Arena.',
      'The Strykers blew the game wide open in the opening quarter with a devastating 28-8 blitz, converting defensive pressure into instantaneous transition offense. San Diego scored an astounding 29 fast-break points and dished out 23 assists on 33 made field goals while committing just 3 turnovers all game.',
      'BALANCED STRIKE FORCE:\nA.J. Hinton led the way with 18 points (8-14 FG, 2 3PM), 6 rebounds, and 3 steals. DeAnte Gray delivered an efficient 15 points (6-10 FG, 2-3 3PT) and 6 boards, while Ray "Gambino" Gamble controlled the tempo with 14 points and 4 assists. In the frontcourt, Johnny Galloway and Carl Marshall chipped in 8 points apiece.',
      'DYNAMICS HIGHLIGHTS:\nLos Angeles (1-2) fought back in the second half behind rookie guard R.J. Rush, who posted 19 points and went a perfect 7-of-7 from the foul line. Jack McMichael Jr. (14 PTS, 7-7 FT) and Mo Alexander (14 PTS, 5 REB, 2 BLK, 7-11 FG) provided solid interior punch, but the early 29-point deficit proved insurmountable against the league\'s top defense.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Guard • San Diego Strykers (18 PTS, 6 REB, 3 STL)',
        quote: 'We wanted to set the tone immediately. When we run the floor and share the ball like we did in that first quarter, we are extremely tough to stop.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (4-0 Record)',
        quote: 'Our defensive intensity in the first 12 minutes set the tone. 29 fast-break points and only 3 turnovers all night is championship basketball.'
      },
      {
        speaker: 'Pooh Splitter',
        title: 'Head Coach • Los Angeles Dynamics (1-2 Record)',
        quote: 'You cannot spot the Strykers a 20-point first quarter on their home floor. We battled in the second half, but the early turnovers cost us.'
      }
    ],
    playerStats: [
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '18 PTS, 6 REB, 3 STL, 2 AST, 1 BLK (8-14 FG, 2-6 3PT)' },
      { player: 'DeAnte Gray', team: 'San Diego Strykers', stat: '15 PTS, 6 REB, 3 AST, 1 BLK (6-10 FG, 2-3 3PT)' },
      { player: 'Ray Gambino Gamble', team: 'San Diego Strykers', stat: '14 PTS, 4 AST, 3 REB, 1 STL (6-14 FG)' },
      { player: 'Johnny Galloway', team: 'San Diego Strykers', stat: '8 PTS, 4 REB, 1 AST (3-4 FG, 1-1 3PT)' },
      { player: 'Carl Marshall', team: 'San Diego Strykers', stat: '8 PTS, 4 AST, 3 REB, 1 STL, 1 BLK (4-6 FG)' },
      { player: 'Joe Grantham', team: 'San Diego Strykers', stat: '6 PTS, 5 AST, 3 REB, 3 STL (4-4 FT)' },
      { player: 'Milo Novak', team: 'San Diego Strykers', stat: '6 PTS, 1 REB (3-3 FG)' },
      { player: 'Lance Nixon', team: 'San Diego Strykers', stat: '4 PTS, 2 AST (2-2 FT)' },
      { player: 'R.J. Rush', team: 'Los Angeles Dynamics', stat: '19 PTS, 2 AST, 1 REB, 1 BLK (6-13 FG, 7-7 FT)' },
      { player: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', stat: '14 PTS, 4 REB, 1 AST (3-5 FG, 1-1 3PT, 7-7 FT)' },
      { player: 'Mo Alexander', team: 'Los Angeles Dynamics', stat: '14 PTS, 5 REB, 3 AST, 2 BLK (7-11 FG)' },
      { player: 'Uwe Kramer', team: 'Los Angeles Dynamics', stat: '5 PTS, 3 REB (1-3 FG, 2-2 FT)' },
      { player: 'Fast Break Points', team: 'Team Comparison', stat: 'San Diego 29 PTS • LA Dynamics 10 PTS (+19 SDS)' },
      { player: 'Turnovers', team: 'Team Comparison', stat: 'San Diego 3 TOs • LA Dynamics 13 TOs (+10 SDS)' }
    ]
  },
  {
    id: 's4-update-renegades-reign-supreme-weekly-honors',
    title: 'Season 4 Update: Strykers & Renegades Undefeated at 4-0, Sabrewolves Break Through',
    subtitle: 'San Diego and Oakland share the top spot at 4-0, Fresno stays unbeaten at 3-0, Sabrewolves capture their first win behind Creek’s 23, and the standings tighten.',
    date: 'Season 4 Official League Update • Nov 8',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Office & Editorial Desk',
    readTime: '4 min read',
    imageUrl: ajHinton99Img,
    imageCaption: 'The San Diego Strykers moved to 4-0 behind an 82-58 blowout over LA Dynamics, sharing the league’s top record with the 4-0 Oakland Renegades.',
    headlineQuote: 'The battle for the top of the CCH standings is electrifying, with San Diego and Oakland setting the pace at 4-0.',
    contentParagraphs: [
      'CALIFORNIA — Season 4 action has reached full throttle across the California Champions Hoop circuit. Two powerhouses stand atop the conference ladders at 4-0: the San Diego Strykers (South #1) and the Oakland Renegades (North #1). Meanwhile, the Fresno Mad Dogs are lurking right behind at 3-0, and the San Diego Sabrewolves have broken through for their first win of the campaign.',
      'STANDINGS & CONFERENCE BREAKDOWN:\n1. San Diego Strykers (4-0, -- GB, 80.5 PPG, 50.0 OPP, +30.5 DIFF)\n2. Oakland Renegades (4-0, -- GB, 67.0 PPG, 50.3 OPP, +16.8 DIFF)\n3. Fresno Mad Dogs (3-0, 0.5 GB, 68.3 PPG, 58.7 OPP, +9.7 DIFF)\n4. California Reds (3-3, 2.0 GB, 60.0 PPG, 67.0 OPP, -7.0 DIFF)\n5. Golden State Enterprise (1-1, 2.0 GB, 70.0 PPG, 70.0 OPP, 0.0 DIFF)\n6. San Diego Sabrewolves (1-1, 2.0 GB, 58.0 PPG, 62.5 OPP, -4.5 DIFF)\n7. Los Angeles Dynamics (1-2, 2.5 GB, 63.7 PPG, 66.0 OPP, -2.3 DIFF)\n8. Anaheim Admirals (1-2, 2.5 GB, 49.3 PPG, 69.3 OPP, -20.0 DIFF)\n9. San Jose Tigersharks (0-1, 2.5 GB, 53.0 PPG, 59.0 OPP, -6.0 DIFF)\n10. Long Beach Vipers (0-2, 3.0 GB, 48.0 PPG, 60.5 OPP, -12.5 DIFF)\n11. San Francisco Knights (0-3, 3.5 GB, 50.7 PPG, 61.0 OPP, -10.3 DIFF)\n12. Sacramento Stallions (0-3, 3.5 GB, 47.3 PPG, 60.0 OPP, -12.7 DIFF)',
      'LATEST GAMES RECAPS:\n• San Diego Strykers 82, Los Angeles Dynamics 58: The Strykers blew open the showdown with a 28-8 first-quarter barrage, forcing 13 turnovers and pouring in 29 fast-break points. A.J. Hinton scored 18 points with 6 rebounds and 3 steals, DeAnte Gray tallied 15 points, and Ray Gamble added 14. For LA (1-2), R.J. Rush led with 19 points (7-7 FT) and Jack McMichael Jr. and Mo Alexander added 14 apiece.\n• San Diego Sabrewolves 61, San Francisco Knights 48: Andre Creek delivered one of the most efficient scoring performances of the season, scoring 23 points on 11-of-12 shooting (91.7% FG) with 6 rebounds to give San Diego its first win. Kirk Barnes added 8 points and 6 assists. For San Francisco (0-3), Damian Gilmore and Erik Higgins scored 11 points each.\n• Fresno Mad Dogs 82, Golden State Enterprise 75: Lloyd Boomer dropped 26 points with 8 assists, while newly signed Luke Davidson notched a 12-point, 10-rebound double-double in his Fresno debut.\n• Anaheim Admirals 56, San Francisco Knights 52: Stephan Sirven (18 PTS) and Kirk Tinsley (16 PTS, 4 3PM) delivered Anaheim’s first win of the season.'
    ],
    quotes: [
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (4-0 Record)',
        quote: 'We are clicking on all cylinders right now, but we know every team is bringing their best shot against us.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves (1-1 Record)',
        quote: 'Getting this first win in San Francisco is huge for our confidence. Andre Creek gave us tremendous interior punch.'
      }
    ],
    playerStats: [
      { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '23 PTS, 6 REB (11-12 FG vs Knights)' },
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '18 PTS, 6 REB, 3 STL vs LA Dynamics' },
      { player: 'R.J. Rush', team: 'Los Angeles Dynamics', stat: '19 PTS, 7/7 FT vs SD Strykers' },
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '26 PTS, 8 AST, 3 STL vs Enterprise' }
    ]
  },
  {
    id: 's4-g16-mad-dogs-outlast-enterprise-boomer',
    title: 'Boomer Drops 26 & 8 AST as Mad Dogs Stay Unbeaten at 3-0 in 82-75 Thriller Over Enterprise',
    subtitle: 'Lloyd Boomer orchestrates an electric 82-75 road victory with 26 points and 8 assists, while newly acquired forward Luke Davidson records a 12-point, 10-rebound double-double in his Fresno debut.',
    date: 'Season 4 Recap • Nov 5',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Central Valley Beat',
    readTime: '3 min read',
    imageUrl: boomerVsGsImg,
    imageCaption: 'Lloyd Boomer scored 26 points with 8 assists and 3 steals as the Fresno Mad Dogs outlasted Golden State 82-75 to stay undefeated at 3-0.',
    teams: {
      team1: 'Fresno Mad Dogs',
      team1Id: 'fresno-mad-dogs',
      score1: 82,
      team2: 'Golden State Enterprise',
      team2Id: 'golden-state-enterprise',
      score2: 75,
    },
    quarterScores: [
      { period: 'Q1', team1: 22, team2: 19 },
      { period: 'Q2', team1: 20, team2: 18 },
      { period: 'Q3', team1: 19, team2: 20 },
      { period: 'Q4', team1: 21, team2: 18 },
    ],
    headlineQuote: 'Lloyd Boomer was masterful down the stretch, orchestrating our transition attack and finding open looks whenever Enterprise mounted a run.',
    contentParagraphs: [
      'Golden State – The Fresno Mad Dogs remained undefeated at 3-0, securing a gritty 82-75 road victory over Golden State Enterprise in a high-octane battle between two of the league’s most explosive perimeter offenses.',
      'Rookie sensation Lloyd Boomer put on a playmaking clinic, dropping 26 points on 10-of-17 shooting while dishing out 8 assists and picking up 3 steals. Fresno received an immediate boost from newly signed rookie forward Luke Davidson (6\'9", Nebraska), who dominated the glass with a 12-point, 10-rebound double-double in his Mad Dogs debut.',
      'FOURTH-QUARTER POISE:\nJud Drew added 13 points and 5 rebounds, including a clutch corner three with 1:14 remaining to put Fresno ahead by two possessions. Carson Graham anchored the interior defense with 8 points, 7 rebounds, and 2 blocks.',
      'ENTERPRISE RECAP:\nFor Golden State (1-1), #1 overall draft pick Carlton Daugherty scored 18 points on four three-pointers, while Jud Thompson contributed 17 points and 6 assists. Cameron Barkley posted 14 points and 8 rebounds, but Enterprise was unable to contain Fresno\'s fast-break scoring (22-12 in transition).'
    ],
    quotes: [
      {
        speaker: 'Lloyd Boomer',
        title: 'Guard • Fresno Mad Dogs (26 PTS, 8 AST, 3 STL)',
        quote: 'We knew this would be a hostile environment against a very talented Enterprise team. Luke Davidson gave us a huge physical presence inside and we executed our sets down the stretch.'
      },
      {
        speaker: 'Luke Davidson',
        title: 'Forward • Fresno Mad Dogs (12 PTS, 10 REB Debut)',
        quote: 'Coach Flores and the guys welcomed me with open arms. When Boomer drives, he pulls so much gravity that all I have to do is crash the boards and finish inside.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (3-0 Record)',
        quote: 'Lloyd Boomer was masterful down the stretch. He controlled the game tempo, made the right reads, and our defense got the necessary stops late.'
      },
      {
        speaker: 'Wyatt Zimmerman',
        title: 'Head Coach • Golden State Enterprise (1-1 Record)',
        quote: 'Boomer is special in the open floor. We made runs in the second half, but Davidson hurt us on the offensive glass and we gave up too many transition points.'
      }
    ],
    playerStats: [
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '26 PTS, 8 AST, 5 REB, 3 STL (10-17 FG, 2-5 3PT, 4-4 FT)' },
      { player: 'Luke Davidson', team: 'Fresno Mad Dogs', stat: '12 PTS, 10 REB, 1 BLK (Debut Double-Double, 5-8 FG)' },
      { player: 'Jud Drew', team: 'Fresno Mad Dogs', stat: '13 PTS, 5 REB, 2 AST (5-9 FG, 2-3 3PT)' },
      { player: 'Carson Graham', team: 'Fresno Mad Dogs', stat: '8 PTS, 7 REB, 2 BLK, 2 STL' },
      { player: 'Carlton Daugherty', team: 'Golden State Enterprise', stat: '18 PTS, 4 REB, 3 AST (4-8 3PT)' },
      { player: 'Jud Thompson', team: 'Golden State Enterprise', stat: '17 PTS, 6 AST, 3 REB (7-13 FG)' },
      { player: 'Cameron Barkley', team: 'Golden State Enterprise', stat: '14 PTS, 8 REB, 2 BLK (6-11 FG)' },
      { player: 'Fast Break Points', team: 'Team Stats', stat: 'Fresno 22 PTS • Golden State 12 PTS (+10 FRE)' },
      { player: 'Fresno Mad Dogs', team: 'Team Record', stat: '3-0 Overall • Undefeated Start' }
    ]
  },
  {
    id: 's4-g15-admirals-edge-knights-first-win',
    title: 'Admirals Capture Season-First Victory Behind Sirven and Tinsley in 56-52 Nailbiter Over Knights',
    subtitle: 'Stephan Sirven scores 18 points (6-of-6 FT) and Kirk Tinsley drains 4-of-5 three-pointers for 16 points as Anaheim notches its first win of Season 4.',
    date: 'Season 4 Recap • Nov 2',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Southern Cali Beat',
    readTime: '3 min read',
    imageUrl: ktVsSfImg,
    imageCaption: 'Kirk Tinsley connected on 4-of-5 from deep for 16 points and Stephan Sirven scored 18 as the Anaheim Admirals captured their first win of the season, 56-52 over San Francisco.',
    teams: {
      team1: 'San Francisco Knights',
      team1Id: 'san-francisco-knights',
      score1: 52,
      team2: 'Anaheim Admirals',
      team2Id: 'anaheim-admirals',
      score2: 56,
    },
    quarterScores: [
      { period: 'Q1', team1: 12, team2: 15 },
      { period: 'Q2', team1: 14, team2: 13 },
      { period: 'Q3', team1: 11, team2: 16 },
      { period: 'Q4', team1: 15, team2: 12 },
    ],
    headlineQuote: 'Kirk Tinsley gave us the perimeter spark we desperately needed, and Stephan Sirven sealed the game at the charity stripe.',
    contentParagraphs: [
      'Anaheim, CA – The Anaheim Admirals broke through for their first victory of Season 4, holding off the San Francisco Knights in a tense 56-52 finish behind the clutch perimeter shooting of Kirk Tinsley and steady scoring from Stephan Sirven.',
      'Sirven led Anaheim with 18 points, converting a perfect 6-of-6 from the free throw line in the fourth quarter to keep the Knights at bay. Sharpshooter Kirk Tinsley provided an offensive jolt, pouring in 16 points on an ultra-efficient 4-of-5 shooting from beyond the three-point arc.',
      'DEFENSIVE STAND & CRUNCH TIME:\nAnaheim (1-2) locked down defensively in the third quarter (16-11), denying paint penetration and forcing 14 San Francisco turnovers. Center Barry Nelson grabbed 8 rebounds and blocked 2 shots to anchor the backline.',
      'KNIGHTS HEARTBREAK:\nFor San Francisco (0-2), Erik Higgins led the charge with a 16-point, 9-rebound performance, while Marion Payton chipped in 10 points and 11 rebounds. Despite out-rebounding Anaheim 39-32, the Knights were unable to overcome a 3-of-15 shooting slump from three-point range.'
    ],
    quotes: [
      {
        speaker: 'Stephan Sirven',
        title: 'Guard • Anaheim Admirals (18 PTS, 6-6 FT)',
        quote: 'Getting that first win off our backs is huge. We stayed disciplined, communicated on defensive switches, and trusted our sets down the stretch.'
      },
      {
        speaker: 'Kirk Tinsley',
        title: 'Guard • Anaheim Admirals (16 PTS, 4-5 3PT)',
        quote: 'My teammates found me in rhythm on the perimeter. Knocking down those threes early gave our whole team confidence.'
      },
      {
        speaker: 'Sam Porter',
        title: 'Head Coach • Anaheim Admirals (1-2 Record)',
        quote: 'Kirk Tinsley gave us the perimeter spark we needed, and Sirven closed it out with veteran leadership. This is the defensive standard we want moving forward.'
      },
      {
        speaker: 'Zack Randle',
        title: 'Head Coach • San Francisco Knights (0-2 Record)',
        quote: 'We fought hard on the glass, but shooting 20% from three and turning it over 14 times makes it very difficult to win close games on the road.'
      }
    ],
    playerStats: [
      { player: 'Stephan Sirven', team: 'Anaheim Admirals', stat: '18 PTS, 4 REB, 3 AST (6-6 FT, 5-11 FG)' },
      { player: 'Kirk Tinsley', team: 'Anaheim Admirals', stat: '16 PTS, 3 REB, 2 AST (4-5 3PT, 6-9 FG)' },
      { player: 'Barry Nelson', team: 'Anaheim Admirals', stat: '6 PTS, 8 REB, 2 BLK, 1 STL' },
      { player: 'Erik Higgins', team: 'San Francisco Knights', stat: '16 PTS, 9 REB, 2 BLK (7-13 FG)' },
      { player: 'Marion Payton', team: 'San Francisco Knights', stat: '10 PTS, 11 REB, 2 AST (5-9 FG)' },
      { player: 'Gheorghe Stefan', team: 'San Francisco Knights', stat: '9 PTS, 7 REB (4-8 FG)' },
      { player: 'Perimeter Shooting Battle', team: 'Team Stats', stat: 'Anaheim 6/12 3PT (50.0%) • San Francisco 3/15 3PT (20.0%)' },
      { player: 'Anaheim Admirals', team: 'Team Record', stat: '1-2 Overall • First Win of Season 4' }
    ]
  },
  {
    id: 's4-g14-reds-edge-dynamics-marai',
    title: 'Marai Dominates with 20 PTS, 14 REB & 4 STL as Reds Edge Dynamics 61-56 on the Road',
    subtitle: 'Andor Marai puts on a masterclass in the paint to power California back to .500 (3-3), overcoming 14 points from rookie sensation R.J. Rush in Los Angeles.',
    date: 'Season 4 Recap • Nov 1',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Southern Cali Beat',
    readTime: '3 min read',
    imageUrl: aMaraiS4_1Img,
    imageCaption: 'Andor Marai scored 20 points, grabbed 14 rebounds, and notched 4 steals as the California Reds (3-3) earned a gritty 61-56 road victory over the LA Dynamics.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 61,
      team2: 'Los Angeles Dynamics',
      team2Id: 'los-angeles-dynamics',
      score2: 56,
    },
    quarterScores: [
      { period: 'Q1', team1: 16, team2: 15 },
      { period: 'Q2', team1: 15, team2: 13 },
      { period: 'Q3', team1: 14, team2: 16 },
      { period: 'Q4', team1: 16, team2: 12 },
    ],
    headlineQuote: 'Andor Marai demanded the ball inside and delivered, controlling the glass and giving us second-chance opportunities when the game was on the line.',
    contentParagraphs: [
      'Los Angeles, CA – The California Reds clawed their way back to .500 on the season, battling to a tough 61-56 road victory over the Los Angeles Dynamics behind an all-around masterpiece from superstar center Andor Marai.',
      'Marai was an immovable force in the interior, recording 20 points, 14 rebounds, 4 steals, and 2 blocks on 8-of-13 shooting. Donald Rodman provided crucial support with 11 points and 9 boards, allowing the Reds to control the rebounding battle 41-33.',
      'DEFENSIVE LOCKDOWN:\nWith the score tied at 52-52 with three minutes left in the fourth quarter, Marai scored back-to-back interior baskets and intercepted a Dynamics entry pass, leading to a transition jumper by Kyle Robinson to ice the victory.',
      'DYNAMICS HIGHLIGHTS:\nFor Los Angeles (1-1), rookie sensation R.J. Rush led the squad with 14 points and 4 assists, while Reggie Forte contributed 9 points and 6 rebounds. Forward Travis Weaver added 8 points, but the Dynamics shot just 39% from the field against California\'s physical frontcourt.'
    ],
    quotes: [
      {
        speaker: 'Andor Marai',
        title: 'Center • California Reds (20 PTS, 14 REB, 4 STL)',
        quote: 'We took our recent losses personally. Getting back to .500 was our sole focus, and we brought high intensity from the opening tip in LA.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds (3-3 Record)',
        quote: 'Andor Marai demanded the ball inside and delivered. He set the tone physically and anchored our half-court defense down the stretch.'
      },
      {
        speaker: 'Marshall Stauffer',
        title: 'Head Coach • Los Angeles Dynamics (1-1 Record)',
        quote: 'Marai beat us to too many loose balls and rebounds. We had our chances in the fourth quarter, but give California credit for executing in the clutch.'
      }
    ],
    playerStats: [
      { player: 'Andor Marai', team: 'California Reds', stat: '20 PTS, 14 REB, 4 STL, 2 BLK (8-13 FG, 4-5 FT)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '11 PTS, 9 REB, 2 AST (5-10 FG)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '10 PTS, 5 AST, 3 REB (4-8 FG)' },
      { player: 'R.J. Rush', team: 'Los Angeles Dynamics', stat: '14 PTS, 4 AST, 3 REB (5-12 FG)' },
      { player: 'Reggie Forte', team: 'Los Angeles Dynamics', stat: '9 PTS, 6 REB, 1 BLK' },
      { player: 'Travis Weaver', team: 'Los Angeles Dynamics', stat: '8 PTS, 5 REB, 2 STL' },
      { player: 'Rebounding Battle', team: 'Team Stats', stat: 'California 41 REB • Los Angeles 33 REB (+8 CAL)' },
      { player: 'California Reds', team: 'Team Record', stat: '3-3 Overall • Claws Back to .500' }
    ]
  },
  {
    id: 's4-podcast-san-diego-impossible-five-percent-defense',
    title: 'PODCAST: San Diego\'s Impossible Five Percent Defense & The Anatomy of a Lockdown Contender',
    subtitle: 'An exhaustive film breakdown of the San Diego Strykers\' historically suffocating defensive scheme, holding opponents to an unbelievable 5% from three-point range and unleashing back-to-back blowout quarter blitzes.',
    date: 'Season 4 Official Film Breakdown • Audio Podcast',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH Film Room & Media Network',
    readTime: 'Audio Podcast • Film Breakdown',
    imageUrl: ajHintonS4_1Img,
    imageCaption: 'Film breakdown of how A.J. Hinton, Johnny Galloway, and DeAnte Gray orchestrated San Diego\'s suffocating defensive scheme, holding opponents to an historic 5% 3-point percentage across early Season 4 action.',
    audioUrl: 'https://dn800307.us.archive.org/0/items/nba-2-k-24-2024-05-12-02-07-45/San_Diego_s_Impossible_Five_Percent_Defense.m4a',
    podcastInfo: {
      episodeTitle: 'San Diego\'s Impossible Five Percent Defense',
      broadcastBy: 'CCH Media Network • Official Film Room Podcast',
      duration: 'Official Audio Podcast',
      description: 'Tactical breakdown of how Adam Saunders and the San Diego Strykers constructed an historically suffocating perimeter defense—holding opponents to an unfathomable 5% from beyond the arc (1-of-19 3PT vs. Long Beach), engineering back-to-back 25-6 and 24-4 quarter blitzes, and pairing elite defensive discipline with A.J. Hinton\'s MVP offensive firepower.',
    },
    headlineQuote: 'Holding professional shooters to 5% from deep isn\'t luck—it\'s a masterclass in scheme, switchability, and relentless perimeter recovery by the San Diego Strykers.',
    contentParagraphs: [
      'SAN DIEGO, CA — While A.J. Hinton\'s 12-three-pointer record and 42-point explosions have grabbed every headline in early Season 4, the true foundation of the San Diego Strykers\' 3-0 surge is on the defensive end of the floor.',
      'In this special film room audio breakdown, the CCH Media Network dives deep into the metrics, scheme adjustments, and individual match-up discipline that have produced "The Impossible 5% Defense."',
      'HOW THE FIVE PERCENT DEFENSE WORKS:\n• Perimeter Containment & Help-Side Timing: Against Long Beach, the Strykers held the Vipers to an unfathomable 1-of-19 (5.3%) from beyond the arc. San Diego runs off-ball shooters off the line while maintaining crisp rotations that eliminate corner kick-outs.\n• Devastating Third-Quarter Blitzes: Over consecutive games, San Diego outscored Long Beach 25-6 and Anaheim 24-4 in the third quarter—holding Anaheim to just one made field goal in 12 minutes.\n• Two-Way Synergy: Johnny Galloway\'s 11-rebound glue work and DeAnte Gray\'s switchability free up A.J. Hinton to aggressively jump passing lanes (4.0 SPG), turning stops into instant transition offense.',
      'LISTEN TO THE FULL PODCAST:\nStream the complete film study above for an in-depth breakdown of San Diego\'s defensive rotations, coaching philosophies, and why this unit poses an existential threat to the rest of the CCH championship field.'
    ],
    quotes: [
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (3-0 Start)',
        quote: 'Defense is our bedrock. When we communicate and execute our switch schemes, it completely chokes off the opponent\'s perimeter rhythm.'
      },
      {
        speaker: 'Johnny Galloway',
        title: 'Defensive Anchor • San Diego Strykers',
        quote: 'We take pride in contesting every single shot. When you hold teams to one shot and control the glass, nobody can get going from deep.'
      },
      {
        speaker: 'A.J. Hinton',
        title: 'Reigning MVP • San Diego Strykers (4.0 SPG)',
        quote: 'Our stops generate our fastest breaks. When the defense is flying around like that, everything on the offensive end just opens up.'
      }
    ],
    playerStats: [
      { player: 'Opponent 3PT % vs San Diego', team: 'Defensive Metric', stat: '5.3% (1/19 3PT vs Long Beach)' },
      { player: '3rd Quarter Blitz vs Long Beach', team: 'Defensive Dominance', stat: 'Outscored Vipers 25-6 (+19)' },
      { player: '3rd Quarter Blitz vs Anaheim', team: 'Defensive Dominance', stat: 'Outscored Admirals 24-4 (1 Made FG)' },
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '4.0 SPG • 42 PTS vs CAL • 30 PTS vs ANA' },
      { player: 'Johnny Galloway', team: 'San Diego Strykers', stat: '11 REB vs ANA • 8 REB, 2 STL vs CAL' },
      { player: 'San Diego Strykers', team: 'Team Defense', stat: '47.3 OPP PPG • +32.7 Point Differential (3-0 Record)' }
    ]
  },
  {
    id: 's4-update-renegades-standings-signings',
    title: 'Season 4 Update: Renegades Take Command of the Standings; Heavy Signing Spree Shakes Up the League',
    subtitle: 'The Oakland Renegades surge to 4-0 to capture the #1 spot in CCH, while San Diego (3-0) and Fresno (2-0) stay undefeated and six franchises execute key roster acquisitions.',
    date: 'Season 4 Official League Update • Oct 31',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Office & Editorial Desk',
    readTime: '4 min read',
    imageUrl: jamarDean1Img,
    imageCaption: 'The Oakland Renegades (4-0) have officially claimed 1st place in Season 4 behind an explosive scoring run led by Jamar Dean and Joshua Bowen.',
    headlineQuote: 'The Oakland Renegades have officially taken the top spot in the standings, riding a massive scoring wave to a perfect 4-0 record.',
    contentParagraphs: [
      'CALIFORNIA — The Oakland Renegades have officially taken the top spot in the standings, riding a massive scoring wave to a perfect 4-0 record. Meanwhile, the San Diego Strykers (3-0) and Fresno Mad Dogs (2-0) remain right on their heels, while the California Reds have hit a rough patch, dropping to 2-3.',
      'STANDINGS & CONFERENCE BREAKDOWN:\n1. Oakland Renegades (4-0, -- GB, 67.0 PPG, 50.3 OPP, +16.8 DIFF)\n2. San Diego Strykers (3-0, 0.5 GB, 80.0 PPG, 47.3 OPP, +32.7 DIFF)\n3. Fresno Mad Dogs (2-0, 1.0 GB, 61.5 PPG, 50.5 OPP, +11.0 DIFF)\n4. Los Angeles Dynamics (1-0, 1.5 GB, 77.0 PPG, 55.0 OPP, +22.0 DIFF)\n5. Golden State Enterprise (1-0, 1.5 GB, 65.0 PPG, 58.0 OPP, +7.0 DIFF)\n6. California Reds (2-3, 2.5 GB, 60.2 PPG, 68.2 OPP, -8.0 DIFF)\n7. San Jose Tigersharks (0-1, 2.5 GB, 53.0 PPG, 59.0 OPP, -6.0 DIFF)\n8. San Francisco Knights (0-1, 2.5 GB, 52.0 PPG, 66.0 OPP, -14.0 DIFF)\n9. San Diego Sabrewolves (0-1, 2.5 GB, 55.0 PPG, 77.0 OPP, -22.0 DIFF)\n10. Long Beach Vipers (0-2, 3.0 GB, 48.0 PPG, 60.5 OPP, -12.5 DIFF)\n11. Anaheim Admirals (0-2, 3.0 GB, 46.0 PPG, 78.0 OPP, -32.0 DIFF)\n12. Sacramento Stallions (0-3, 3.5 GB, 47.3 PPG, 60.0 OPP, -12.7 DIFF)',
      'GAME RECAPS & HIGHLIGHTS:\n• Fresno Mad Dogs 64, Sacramento Stallions 48: Lloyd Boomer dropped a game-high 26 points on 9-for-14 shooting as Fresno dominated the paint 40-20 and forced 16 turnovers to keep Fresno undefeated at 2-0. Adrian Pognotti scored 16 points and Gemini Jackson blocked 6 shots for Sacramento (0-3).\n• Oakland Renegades 66, San Francisco Knights 52: Oakland deployed a 23-point second-quarter blitz to overpower San Francisco. Jamar Dean scored 22 points (5 AST) and newly signed rookie Jaycee Moon provided 13 points off the bench.\n• Oakland Renegades 74, California Reds 50: Jamar Dean put on a masterclass with 36 points on 13-of-18 shooting, while Joshua Bowen notched 20 points, 14 rebounds, and 5 assists.\n• Golden State Enterprise 65, California Reds 58: Enterprise opened their season with a statement win behind #1 overall pick Carlton Daugherty (20 PTS) and center Cameron Barkley.',
      'LEAGUE-WIDE TRANSACTIONS & SIGNINGS:\nFranchises across Cali Championship Hoops completed key depth moves this week:\n• Anaheim Admirals signed SF/SG Archie Hubbard (Louisiana-Monroe), SG/SF Theodore Dantley (Oklahoma State), and PF/SF Randy Christie (Vanderbilt).\n• Oakland Renegades signed PG/SG Rudy Theus (Bradley), SF Andrew Woods (UC Riverside), and PG Jaycee Moon (Kent State).\n• California Reds signed PG Ernest Cannady (Michigan State).\n• Long Beach Vipers signed PG Brevin McCloud (Virginia Tech), SG Felipe Lopez (Puerto Rico), and PG Sarunas Simunic (Lithuania).\n• Golden State Enterprise signed SG/SF Leslie Carlson (Connors State College) and PG/SG Alan Haywood (Duke).\n• San Diego Sabrewolves signed SF/PF Randolph May (Temple).'
    ],
    quotes: [
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades (4-0 Record)',
        quote: 'Taking the top spot in the standings is a testament to how locked in our guys have been on both ends of the floor. Jamar Dean and Joshua Bowen are setting the tone every single night.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (2-0 Record)',
        quote: 'Our paint presence and defensive energy against Sacramento showed our identity. We want to be the toughest team in this league for 48 minutes.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (3-0 Record)',
        quote: 'We like where we are at 3-0, but this league is deep. Every night brings a battle, and we have to stay sharp.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '36 PTS vs CAL • 22 PTS vs SF • Season Scoring Leader' },
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '26 PTS vs SAC (9-14 FG) • Led Fresno to 2-0' },
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '42 PTS vs CAL • 30 PTS vs ANA • Strykers 3-0' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '20 PTS, 14 REB, 5 AST vs California Reds' },
      { player: 'Carlton Daugherty', team: 'Golden State Enterprise', stat: '20 PTS in Debut • 65-58 Win Over California' },
      { player: 'Adrian Pognotti', team: 'Sacramento Stallions', stat: '16 PTS, 5 REB, 2 BLK vs Fresno Mad Dogs' },
      { player: 'Gemini Jackson', team: 'Sacramento Stallions', stat: '11 PTS, 6 BLK, 4 AST vs Fresno Mad Dogs' },
      { player: 'Oakland Renegades', team: 'Team Record', stat: '4-0 Overall • #1 in CCH Standings' }
    ]
  },
  {
    id: 's4-g10-renegades-crush-reds-dean-36',
    title: 'Dean Erupts for 36 as Renegades Dismantle Reds 74-50 in Road Statement',
    subtitle: 'Jamar Dean catches fire for 36 points on 13-of-18 shooting, while Joshua Bowen posts 20 points, 14 rebounds, and 5 assists to pace Oakland past California.',
    date: 'Season 4 Recap • Oct 27',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Oakland Beat',
    readTime: '3 min read',
    imageUrl: calVsOakImg,
    imageCaption: 'Jamar Dean put on an offensive clinic with 36 points on 13-of-18 shooting as the Renegades routed the California Reds 74-50.',
    teams: {
      team1: 'Oakland Renegades',
      team1Id: 'oakland-renegades',
      score1: 74,
      team2: 'California Reds',
      team2Id: 'california-reds',
      score2: 50,
    },
    quarterScores: [
      { period: 'Q1', team1: 19, team2: 13 },
      { period: 'Q2', team1: 18, team2: 12 },
      { period: 'Q3', team1: 20, team2: 14 },
      { period: 'Q4', team1: 17, team2: 11 },
    ],
    headlineQuote: 'Jamar Dean delivered one of the most efficient scoring clinics of the season, dropping 36 points on 13-of-18 shooting to pace Oakland.',
    contentParagraphs: [
      'California – The Oakland Renegades sent a resounding message across the league, dismantling the California Reds 74-50 on the road behind an offensive masterpiece from superstar guard Jamar Dean.',
      'Dean was simply untouchable, pouring in a season-high 36 points on a blistering 13-for-18 shooting from the floor, including 4-of-5 from three-point range. Center Joshua Bowen controlled the interior with an authoritative double-double, registering 20 points, 14 rebounds, and 5 assists to dominate both ends of the floor.',
      'DEFENSIVE CLAMP & PACING:\nOakland held California to just 50 points, winning all four quarters (19-13, 18-12, 20-14, 17-11). Alonzo Reece orchestrated the transition attack with 10 points, 8 assists, and 3 steals.',
      'REDS PERSPECTIVE:\nFor the Reds, Andor Marai fought for 18 points and 11 rebounds, while Donald Rodman chipped in 12 points and 7 boards. However, California struggled from deep, converting just 2-of-14 from beyond the arc against Oakland\'s aggressive perimeter defense.'
    ],
    quotes: [
      {
        speaker: 'Jamar Dean',
        title: 'Shooting Guard • Oakland Renegades (36 PTS, 13-18 FG)',
        quote: 'My teammates set great screens and kept finding me in transition. When the first few pull-ups dropped, I just stayed aggressive.'
      },
      {
        speaker: 'Joshua Bowen',
        title: 'Center • Oakland Renegades (20 PTS, 14 REB, 5 AST)',
        quote: 'We wanted to own the paint and limit second-chance points. Dominating the glass allowed us to get out on the break and run.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds',
        quote: 'Dean was on another level tonight, and we couldn\'t match their pace. We have to regroup and fix our defensive rotations.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '36 PTS, 5 REB, 3 AST, 2 STL (13-18 FG, 4-5 3PT, 6-7 FT)' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '20 PTS, 14 REB, 5 AST, 3 BLK (9-14 FG)' },
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '10 PTS, 8 AST, 3 STL (4-9 FG)' },
      { player: 'Andor Marai', team: 'California Reds', stat: '18 PTS, 11 REB, 2 BLK (8-15 FG)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '12 PTS, 7 REB, 1 STL (5-11 FG)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '8 PTS, 5 AST (3-8 FG)' },
      { player: 'Renegades Field Goal %', team: 'Team Stats', stat: '58.5% FG (31/53) • 6/11 3PT (54.5%)' },
      { player: 'Reds Perimeter Shooting', team: 'Team Stats', stat: '2/14 3PT (14.3%) • 50 Total PTS' }
    ]
  },
  {
    id: 's4-g11-renegades-bury-knights',
    title: 'Renegades Blitz Knights 66-52 Behind 23-Point Second Quarter and Dean\'s 22 Points',
    subtitle: 'Oakland explodes in the second quarter to overwhelm San Francisco 66-52, improving to a league-leading 4-0 as Jamar Dean scores 22 and Jaycee Moon adds 13 off the bench.',
    date: 'Season 4 Recap • Oct 29',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Bay Area Beat',
    readTime: '3 min read',
    imageUrl: deanVsSfImg,
    imageCaption: 'The Oakland Renegades improved to a perfect 4-0 on the season with a 66-52 win over San Francisco, fueled by a 23-point second quarter surge.',
    teams: {
      team1: 'San Francisco Knights',
      team1Id: 'san-francisco-knights',
      score1: 52,
      team2: 'Oakland Renegades',
      team2Id: 'oakland-renegades',
      score2: 66,
    },
    quarterScores: [
      { period: 'Q1', team1: 14, team2: 15 },
      { period: 'Q2', team1: 11, team2: 23 },
      { period: 'Q3', team1: 13, team2: 14 },
      { period: 'Q4', team1: 14, team2: 14 },
    ],
    headlineQuote: 'A 23-point second quarter blitz propelled the Oakland Renegades to 4-0 as Jamar Dean poured in 22 points with 5 assists.',
    contentParagraphs: [
      'Oakland, CA – The Oakland Renegades tightened their grip on first place in the CCH standings, blowing past the San Francisco Knights 66-52 behind a commanding second quarter run.',
      'After a tight opening period (15-14), the Renegades erupted with a 23-11 second-quarter scoring barrage that put the game firmly out of reach. Jamar Dean once again led the attack with 22 points and 5 assists, while newly signed rookie guard Jaycee Moon provided instant electricity off the bench with 13 points on 5-of-8 shooting.',
      'SOLID TWO-WAY PLAY:\nJoshua Bowen added 12 points, 10 rebounds, and 2 blocks, recording his second consecutive double-double, while Alonzo Reece notched 10 points, 6 assists, and 4 steals.',
      'KNIGHTS RECAP:\nFor San Francisco (0-1), center Gheorghe Stefan led the way with 16 points and 6 rebounds, and rookie standout Damian Gilmore chipped in 14 points and 4 assists. Ed Burks added 10 points and 5 rebounds, but the Knights could not match Oakland\'s bench scoring and transition tempo.'
    ],
    quotes: [
      {
        speaker: 'Jamar Dean',
        title: 'Guard • Oakland Renegades (22 PTS, 5 AST, 4-0 Record)',
        quote: 'That second quarter changed everything. Jaycee Moon gave us an enormous spark off the bench, and we fed off the energy of the home crowd.'
      },
      {
        speaker: 'Jaycee Moon',
        title: 'Rookie Guard • Oakland Renegades (13 PTS in Debut)',
        quote: 'Coach Goodwin told me to be ready and play with pace. Playing alongside Jamar and Alonzo makes the game easy because they draw so much attention.'
      },
      {
        speaker: 'Zack Randle',
        title: 'Head Coach • San Francisco Knights',
        quote: 'Oakland\'s second quarter run dug us into a hole we couldn\'t climb out of. We liked our defensive effort in the second half, but 23 points in one quarter was the difference.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '22 PTS, 5 AST, 4 REB (8-15 FG, 3-6 3PT)' },
      { player: 'Jaycee Moon', team: 'Oakland Renegades', stat: '13 PTS, 3 AST, 2 STL (5-8 FG, 2-3 3PT in Debut)' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '12 PTS, 10 REB, 2 BLK (5-9 FG)' },
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '10 PTS, 6 AST, 4 STL (4-10 FG)' },
      { player: 'Gheorghe Stefan', team: 'San Francisco Knights', stat: '16 PTS, 6 REB, 2 BLK (7-12 FG)' },
      { player: 'Damian Gilmore', team: 'San Francisco Knights', stat: '14 PTS, 4 AST, 2 REB (5-13 FG)' },
      { player: 'Ed Burks', team: 'San Francisco Knights', stat: '10 PTS, 5 REB (4-8 FG)' },
      { player: 'Renegades 2nd Qtr Blitz', team: 'Team Stats', stat: '23-11 Scoring Run in Q2 • 4-0 Record' }
    ]
  },
  {
    id: 's4-g12-enterprise-edge-reds-daugherty',
    title: 'Daugherty Shines With 20 in Debut as Enterprise Edge Reds 65-58',
    subtitle: '#1 overall draft pick Carlton Daugherty scores 20 points in his professional debut as Golden State opens Season 4 with a tough 65-58 home victory over California.',
    date: 'Season 4 Recap • Oct 29',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Golden State Beat',
    readTime: '3 min read',
    imageUrl: daughertyVsCalImg,
    imageCaption: 'Carlton Daugherty delivered 20 points in his rookie debut as Golden State Enterprise captured a 65-58 home opening victory over the California Reds.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 58,
      team2: 'Golden State Enterprise',
      team2Id: 'golden-state-enterprise',
      score2: 65,
    },
    quarterScores: [
      { period: 'Q1', team1: 15, team2: 17 },
      { period: 'Q2', team1: 14, team2: 16 },
      { period: 'Q3', team1: 15, team2: 16 },
      { period: 'Q4', team1: 14, team2: 16 },
    ],
    headlineQuote: 'Carlton Daugherty wasted no time validating his #1 overall draft status, scoring 20 points to lead Golden State to an opening night win.',
    contentParagraphs: [
      'San Jose, CA – Golden State Enterprise opened their Season 4 campaign with authority, grinding out a 65-58 home victory over the California Reds behind a sensational debut from #1 overall pick Carlton Daugherty.',
      'Daugherty poured in 20 points on 8-of-14 shooting, showcasing his polished three-level scoring package and clutch perimeter shotmaking. Center Cameron Barkley anchored the paint with 14 points, 9 rebounds, and 3 blocks, controlling the interior against California\'s physical frontcourt.',
      'ENTERPRISE DEPTH & DEFENSE:\nCoach Wyatt Zimmerman\'s squad executed steadily across all four frames (17-15, 16-14, 16-15, 16-14), denying open looks and winning the rebounding battle 38-31. Veteran guard Terrence West added 11 points and 6 assists.',
      'REDS PERSPECTIVE:\nFor the Reds (2-3), Andor Marai battled inside for 19 points and 10 rebounds, while Donald Rodman chipped in 14 points and 6 boards. However, California was unable to overcome 15 turnovers and Enterprise\'s timely fourth-quarter stops.'
    ],
    quotes: [
      {
        speaker: 'Carlton Daugherty',
        title: 'Guard • Golden State Enterprise (20 PTS in Debut, 1-0 Record)',
        quote: 'It felt great to get out there in front of the home crowd and get our first win. The veterans made it easy for me to settle in and find my spots.'
      },
      {
        speaker: 'Wyatt Zimmerman',
        title: 'Head Coach • Golden State Enterprise (1-0 Record)',
        quote: 'Carlton played with tremendous poise for a rookie. When the game got tight in the fourth quarter, he made winning basketball plays.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds',
        quote: 'Daugherty made tough shots when they needed them, and we gave up too many second-chance opportunities in the second half.'
      }
    ],
    playerStats: [
      { player: 'Carlton Daugherty', team: 'Golden State Enterprise', stat: '20 PTS, 4 REB, 3 AST (8-14 FG, 2-4 3PT in Debut)' },
      { player: 'Cameron Barkley', team: 'Golden State Enterprise', stat: '14 PTS, 9 REB, 3 BLK (6-11 FG)' },
      { player: 'Terrence West', team: 'Golden State Enterprise', stat: '11 PTS, 6 AST, 2 STL (4-9 FG)' },
      { player: 'Andor Marai', team: 'California Reds', stat: '19 PTS, 10 REB, 2 BLK (8-16 FG)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '14 PTS, 6 REB, 1 STL (6-12 FG)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '9 PTS, 6 AST (3-7 FG)' },
      { player: 'Enterprise Rebound Margin', team: 'Team Stats', stat: '38 Rebounds to 31 Rebounds (+7 GSE)' },
      { player: 'Opening Statement', team: 'Team Record', stat: 'Golden State Enterprise Starts 1-0' }
    ]
  },
  {
    id: 's4-g13-mad-dogs-dominate-stallions',
    title: 'Boomer Drops 26 as Undefeated Mad Dogs Down Defending Champion Stallions 64-48',
    subtitle: 'Lloyd Boomer shoots 9-for-14 to drop 26 points and lead Fresno (2-0) to a commanding 64-48 victory over the struggling Sacramento Stallions (0-3).',
    date: 'Season 4 Recap • Oct 31',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Central Valley Beat',
    readTime: '3 min read',
    imageUrl: boomerVsSacImg,
    imageCaption: 'Lloyd Boomer scored a game-high 26 points on 9-for-14 shooting as Fresno dominated Sacramento 64-48 to remain unbeaten at 2-0.',
    teams: {
      team1: 'Sacramento Stallions',
      team1Id: 'sacramento-stallions',
      score1: 48,
      team2: 'Fresno Mad Dogs',
      team2Id: 'fresno-mad-dogs',
      score2: 64,
    },
    quarterScores: [
      { period: 'Q1', team1: 12, team2: 16 },
      { period: 'Q2', team1: 10, team2: 18 },
      { period: 'Q3', team1: 14, team2: 15 },
      { period: 'Q4', team1: 12, team2: 15 },
    ],
    headlineQuote: 'Lloyd Boomer was unstoppable for the Mad Dogs, dropping a game-high 26 points on 9-for-14 shooting to keep Fresno undefeated.',
    contentParagraphs: [
      'Fresno, CA – Lloyd Boomer was unstoppable for the Mad Dogs, dropping a game-high 26 points on 9-for-14 shooting to keep Fresno undefeated at 2-0 with a dominant 64-48 win over the Sacramento Stallions.',
      'The Mad Dogs dominated the paint, outscoring the Stallions 40-20 inside and forcing 16 turnovers with relentless pressure. Carson Graham provided strong interior muscle with 14 points and 8 rebounds, while Geraldo Jones chipped in 10 points and 7 boards.',
      'STALLIONS SLUMP CONTINUES:\nFor the struggling defending champion Stallions (0-3), Adrian Pognotti led the way with 16 points, 5 rebounds, and 2 blocks, while Gemini Jackson added a monstrous 6 blocks to go with 11 points and 4 assists. Frank Hackett contributed 10 points and 6 rebounds, but Sacramento was unable to find consistent perimeter offense, dropping their third straight road game.'
    ],
    quotes: [
      {
        speaker: 'Lloyd Boomer',
        title: 'Guard • Fresno Mad Dogs (26 PTS, 9-14 FG, 2-0 Record)',
        quote: 'We wanted to establish our physical presence early. Getting 40 points in the paint and forcing 16 turnovers gave us complete control of the tempo.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (2-0 Start)',
        quote: 'Lloyd was aggressive from the tip-off. Holding the defending champions to 48 points on our home floor shows what kind of defense this group is capable of.'
      },
      {
        speaker: 'Benjamin Nelson',
        title: 'Head Coach • Sacramento Stallions (0-3 Record)',
        quote: 'We got beat in the paint 40 to 20 and turned the ball over 16 times. You cannot win on the road giving up that kind of interior advantage.'
      }
    ],
    playerStats: [
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '26 PTS, 5 REB, 3 AST (9-14 FG, 2-4 3PT, 6-7 FT)' },
      { player: 'Carson Graham', team: 'Fresno Mad Dogs', stat: '14 PTS, 8 REB, 2 BLK (6-10 FG)' },
      { player: 'Geraldo Jones', team: 'Fresno Mad Dogs', stat: '10 PTS, 7 REB (4-7 FG)' },
      { player: 'Adrian Pognotti', team: 'Sacramento Stallions', stat: '16 PTS, 5 REB, 2 BLK (7-13 FG)' },
      { player: 'Gemini Jackson', team: 'Sacramento Stallions', stat: '11 PTS, 6 BLK, 4 AST, 2 STL (5-10 FG)' },
      { player: 'Frank Hackett', team: 'Sacramento Stallions', stat: '10 PTS, 6 REB (4-11 FG)' },
      { player: 'Paint Scoring Battle', team: 'Team Stats', stat: 'Fresno 40 PTS in Paint • Sacramento 20 PTS in Paint' },
      { player: 'Turnovers Forced', team: 'Team Defense', stat: 'Fresno Forced 16 Turnovers • +7 Turnover Margin' }
    ]
  },
  {
    id: 's4-g9-reds-bounce-back-vipers',
    title: 'Marai and Rodman Power Reds Past Vipers 68-61 in Bounce-Back Victory',
    subtitle: 'Andor Marai scores 21 points and Donald Rodman adds 17 as the California Reds rebound to improve to 2-1 on the season, dropping Long Beach to 0-2.',
    date: 'Season 4 Recap • Oct 25',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Long Beach Beat',
    readTime: '3 min read',
    imageUrl: maraiVsLbImg,
    imageCaption: 'Andor Marai scored 21 points and Donald Rodman added 17 as the California Reds (2-1) earned a hard-fought 68-61 road victory over Long Beach.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 68,
      team2: 'Long Beach Vipers',
      team2Id: 'long-beach-vipers',
      score2: 61,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 14 },
      { period: 'Q2', team1: 17, team2: 16 },
      { period: 'Q3', team1: 16, team2: 15 },
      { period: 'Q4', team1: 17, team2: 16 },
    ],
    headlineQuote: 'Despite a tough loss to the Strykers, the Reds (2-1) bounced back behind 21 points from Andor Marai and 17 points from Donald Rodman.',
    contentParagraphs: [
      'The LBC Pit – Despite a tough loss to the San Diego Strykers earlier in the week, the California Reds (2-1) bounced back with authority, securing a hard-fought 68-61 road victory over the Long Beach Vipers.',
      'Andor Marai was a force in the paint once again, scoring a team-high 21 points while pulling down 10 rebounds and blocking 2 shots. Donald Rodman provided crucial secondary scoring, adding 17 points and 8 rebounds on active cutting and offensive putbacks.',
      'CONSISTENT EXECUTION:\nThe Reds led at the end of every quarter (18-14, 35-30, 51-45), executing with poise in the closing minutes as point guard Kyle Robinson chipped in 12 points and 6 assists.',
      'VIPERS STRUGGLES CONTINUE:\nWith the loss, the Vipers fall to 0-2 on the season. Maxwell Mayo led Long Beach with 16 points and 5 rebounds, while Grok Wilkens added 14 points, 9 rebounds, and 2 blocks. J.C. McMillan scored 11 points with 6 boards, but the Vipers were unable to overcome 12 turnovers and California\'s interior efficiency.'
    ],
    quotes: [
      {
        speaker: 'Andor Marai',
        title: 'Center • California Reds (21 PTS, 10 REB, 2 BLK)',
        quote: 'After the tough game in San Diego, we wanted to show our character. We came into The Pit focused on executing our half-court offense and establishing the paint.'
      },
      {
        speaker: 'Donald Rodman',
        title: 'Power Forward • California Reds (17 PTS, 8 REB)',
        quote: 'Winning on the road in this building is never easy. We stayed together, made our free throws, and got the stops we needed late.'
      },
      {
        speaker: 'Stretch Roberts',
        title: 'Head Coach • Long Beach Vipers (0-2 Record)',
        quote: 'We battled hard for 48 minutes, but Marai and Rodman hurt us on the glass. We have to eliminate the small mistakes that turn into 7-point deficits.'
      }
    ],
    playerStats: [
      { player: 'Andor Marai', team: 'California Reds', stat: '21 PTS, 10 REB, 2 BLK (9-15 FG)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '17 PTS, 8 REB, 3 STL (7-12 FG)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '12 PTS, 6 AST, 2 REB (5-10 FG)' },
      { player: 'Maxwell Mayo', team: 'Long Beach Vipers', stat: '16 PTS, 5 REB, 2 AST (6-13 FG)' },
      { player: 'Grok Wilkens', team: 'Long Beach Vipers', stat: '14 PTS, 9 REB, 2 BLK (6-10 FG)' },
      { player: 'J.C. McMillan', team: 'Long Beach Vipers', stat: '11 PTS, 6 REB, 2 AST (5-9 FG)' },
      { player: 'Reds Interior Production', team: 'Team Stats', stat: '42 PTS in Paint • 38-31 Rebounding Advantage' },
      { player: 'Vipers Season Start', team: 'Team Stats', stat: '0-2 Overall Record' }
    ]
  },
  {
    id: 's4-g8-renegades-edge-stallions',
    title: 'Renegades Remain Undefeated at 2-0 with Gritty 57-50 Defensive Win Over Stallions',
    subtitle: 'Jamar Dean scores 16 points and Alonzo Reece racks up 14 points with 5 steals as Oakland clamps down late to send the defending champion Sacramento Stallions to 0-2.',
    date: 'Season 4 Recap • Oct 25',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Oakland Beat',
    readTime: '3 min read',
    imageUrl: jDeanVsSacImg,
    imageCaption: 'Jamar Dean scored 16 points and Alonzo Reece recorded 14 points and 5 steals to lead the undefeated Oakland Renegades (2-0) past Sacramento 57-50.',
    teams: {
      team1: 'Sacramento Stallions',
      team1Id: 'sacramento-stallions',
      score1: 50,
      team2: 'Oakland Renegades',
      team2Id: 'oakland-renegades',
      score2: 57,
    },
    quarterScores: [
      { period: 'Q1', team1: 12, team2: 15 },
      { period: 'Q2', team1: 14, team2: 13 },
      { period: 'Q3', team1: 11, team2: 16 },
      { period: 'Q4', team1: 13, team2: 13 },
    ],
    headlineQuote: 'The Renegades remain undefeated at 2-0 thanks to a gritty defensive effort in front of a raucous home crowd at Oakland Arena.',
    contentParagraphs: [
      'Oakland, CA – The Renegades remain undefeated at 2-0 thanks to a gritty defensive effort against their Northern California rivals, outlasting the Sacramento Stallions 57-50.',
      'Jamar Dean paced the Oakland offense with 16 points on disciplined shot selection, while All-Star backcourt partner Alonzo Reece added 14 points and a game-high 5 steals. The Renegades forced 14 Sacramento turnovers and turned defensive stops into critical transition buckets during a pivotal 16-11 third quarter.',
      'DEFENSIVE BATTLE IN THE PAINT:\nJoshua Bowen provided key rim protection inside with 10 points, 8 rebounds, and 2 blocked shots, neutralizing Sacramento\'s interior post-ups in the final minutes.',
      'STALLIONS NOTES:\nFor the 0-2 Stallions, Gemini Jackson was a bright spot, stuffing the stat sheet with 13 points, 4 assists, 2 steals, and an impressive 3 blocks. Adrian Pognotti recorded 10 points and 9 rebounds with 3 blocks, while Frank Hackett fought for 11 points and 7 boards. However, Sacramento struggled from the perimeter, hitting just 3-of-18 from long distance as their offensive slump continues.'
    ],
    quotes: [
      {
        speaker: 'Jamar Dean',
        title: 'Shooting Guard • Oakland Renegades (16 PTS, 2-0 Record)',
        quote: 'This was a classic NorCal rivalry battle. It wasn\'t pretty on every possession, but our defense held firm when the game was on the line.'
      },
      {
        speaker: 'Alonzo Reece',
        title: 'Point Guard • Oakland Renegades (14 PTS, 5 STL)',
        quote: 'We wanted to create havoc on the perimeter. Getting 5 steals and pushing the pace gave us the cushion we needed down the stretch.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades',
        quote: 'Holding Sacramento to 50 points shows the commitment our guys have on the defensive end. 2-0 is a great foundation.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '16 PTS, 4 REB, 2 AST (6-12 FG)' },
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '14 PTS, 3 REB, 4 AST, 5 STL (5-11 FG)' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '10 PTS, 8 REB, 2 BLK (4-7 FG)' },
      { player: 'Gemini Jackson', team: 'Sacramento Stallions', stat: '13 PTS, 4 AST, 2 STL, 3 BLK (5-10 FG)' },
      { player: 'Frank Hackett', team: 'Sacramento Stallions', stat: '11 PTS, 7 REB, 1 AST (4-9 FG)' },
      { player: 'Adrian Pognotti', team: 'Sacramento Stallions', stat: '10 PTS, 9 REB, 3 BLK (5-8 FG)' },
      { player: 'Renegades Perimeter Pressure', team: 'Team Defense', stat: '11 Steals • Forced 14 Turnovers' },
      { player: 'Stallions Perimeter Slump', team: 'Team Stats', stat: '3/18 3PT (16.7%) • 0-2 Record' }
    ]
  },
  {
    id: 's4-g7-strykers-rout-reds-hinton-42',
    title: 'Hinton Shatters All-Time 3PT Record With 12 Triples, Strykers Demolish Reds 102-64',
    subtitle: 'A.J. Hinton puts on a shooting clinic for the ages with 42 points, breaking the all-time CCH single-game record with 12 made three-pointers (12-14 3PT) on 15-of-17 shooting in a 38-point rout over California.',
    date: 'Season 4 Recap • Oct 22',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • San Diego Beat',
    readTime: '3 min read',
    imageUrl: hinton42vsCalImg,
    imageCaption: 'A.J. Hinton shattered the all-time CCH single-game record with 12 made three-pointers (12-of-14 3PT), erupting for 42 points on 15-of-17 shooting as the Strykers dismantled the Reds 102-64.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 64,
      team2: 'San Diego Strykers',
      team2Id: 'san-diego-strykers',
      score2: 102,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 28 },
      { period: 'Q2', team1: 16, team2: 26 },
      { period: 'Q3', team1: 14, team2: 27 },
      { period: 'Q4', team1: 16, team2: 21 },
    ],
    headlineQuote: 'The Strykers improved to 3-0 behind an historic shooting masterclass as A.J. Hinton shattered the all-time CCH single-game record with 12 three-pointers in a 102-64 demolition of the Reds.',
    contentParagraphs: [
      'San Diego, CA – The Strykers are looking utterly unstoppable, improving to a perfect 3-0 record with a staggering 38-point demolition of the California Reds, headlined by an historic record-breaking eruption.',
      'Superstar guard and reigning MVP A.J. Hinton delivered a performance for the history books, shattering the all-time CCH single-game record by sinking 12 three-pointers (12-for-14 from beyond the arc) on a blistering 15-of-17 shooting from the field for 42 points. Hinton eclipsed the previous league marks (Kirk Tinsley\'s 9 3PM in S3 and Jack McMichael Jr.\'s 8 3PM in S1), having the home crowd on its feet from the opening quarter with deep contested step-backs and pull-up triples.',
      'PLAYMAKING & SUPPORTING CAST:\nRay Gamble contributed 17 points and 5 assists in the blowout, orchestrating the offense with veteran poise and finding open shooters in transition. DeAnte Gray added 14 points, 6 rebounds, and 4 assists, while Johnny Galloway provided relentless defense and grabbed 8 boards. The Strykers shot a scorching 67% from the floor as a team, leading by as many as 40 points in the second half.',
      'REDS PERSPECTIVE:\nFor the California Reds (1-1), Andor Marai battled inside with 18 points and 8 rebounds, and Donald Rodman fought for 14 points and 6 rebounds. However, California was unable to slow down San Diego\'s perimeter onslaught, as the Strykers poured in 102 points—the highest scoring output of Season 4.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Superstar Guard • San Diego Strykers (42 PTS, 12-14 3PT • All-Time Single-Game 3PT Record)',
        quote: 'My teammates found me in rhythm all night. When you hit a couple early and see the ball go through the net cleanly, the hoop looks huge. Breaking the all-time record in front of the home crowd makes it even more special.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (3-0 Start)',
        quote: 'A.J. put on the greatest shooting display in CCH history tonight. Sinking 12 threes on 14 attempts against a defense like California is a record that might stand for a very long time.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds',
        quote: 'When Hinton gets going like that and drops an all-time record 12 threes, there isn\'t much you can do defensively. We have to flush this one and get ready for Long Beach.'
      }
    ],
    playerStats: [
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '42 PTS, 3 REB, 4 AST, 3 STL (15-17 FG, 12-14 3PT • NEW CCH SINGLE-GAME 3PM RECORD)' },
      { player: 'Ray Gamble', team: 'San Diego Strykers', stat: '17 PTS, 5 AST, 3 REB (7-11 FG)' },
      { player: 'DeAnte Gray', team: 'San Diego Strykers', stat: '14 PTS, 6 REB, 4 AST (6-9 FG)' },
      { player: 'Johnny Galloway', team: 'San Diego Strykers', stat: '8 PTS, 8 REB, 3 AST, 2 STL' },
      { player: 'Andor Marai', team: 'California Reds', stat: '18 PTS, 8 REB, 2 BLK (8-14 FG)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '14 PTS, 6 REB, 1 STL (6-11 FG)' },
      { player: 'Strykers Shooting Masterclass', team: 'Team Stats', stat: '67.2% FG (39/58) • 17/24 3PT (70.8%) • 102 PTS' },
      { player: 'Margin of Victory', team: 'Team Stats', stat: '+38 PTS (Led by as many as 40)' }
    ]
  },
  {
    id: 's4-potw-week-2-bowen-hinton',
    title: 'Players of the Week (Oct 22–28): Joshua Bowen & A.J. Hinton Capture Week 2 Honors',
    subtitle: 'Oakland\'s versatile forward Joshua Bowen anchors a 4-0 Renegades start to win the Northern Cali award, while San Diego superstar A.J. Hinton sets a new all-time CCH single-game record with 12 triples (42.0 PPG, 12.0 3PMPG) for the Southern Cali nod.',
    date: 'Season 4 Official Awards • Week 2 (Oct 22–28)',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Office & Awards Committee',
    readTime: '3 min read',
    imageUrl: hintonPOTWImg || hinton42vsCalImg,
    imageCaption: 'A.J. Hinton (Southern Cali POTW, 42.0 PPG, all-time record 12.0 3PMPG) and Joshua Bowen (Northern Cali POTW, 14.5 PTS, 11.5 REB, 4.5 AST) captured Week 2 Player of the Week honors.',
    headlineQuote: 'Joshua Bowen\'s interior double-double mastery and A.J. Hinton\'s all-time record-shattering 12 three-pointers per game set a thrilling new standard in Week 2.',
    contentParagraphs: [
      'CALIFORNIA — The Cali Championship Hoops League Office has officially announced the Players of the Week for Week 2 of Season 4, covering matchups contested from October 22 through October 28.',
      'NORTHERN CALI PLAYER OF THE WEEK: JOSHUA BOWEN (OAKLAND RENEGADES)\nOakland Renegades forward/center Joshua Bowen captured Northern Cali honors after orchestrating two decisive victories to keep Oakland undefeated at 4-0. Bowen averaged a dominant double-double of 14.5 points, 11.5 rebounds, 4.5 assists, and 1.5 steals per game. In Oakland\'s 74-50 statement rout over the California Reds, Bowen delivered 20 points, 14 rebounds, and 5 assists, anchoring Oakland\'s frontline on both ends of the floor.',
      'SOUTHERN CALI PLAYER OF THE WEEK: A.J. HINTON (SAN DIEGO STRYKERS)\nSan Diego Strykers superstar and reigning MVP A.J. Hinton took home Southern Cali honors following one of the most blistering perimeter shooting displays in professional basketball history. Hinton averaged a staggering 42.0 points, 4.0 rebounds, 3.0 assists, and an unprecedented 12.0 made three-pointers per game. Hinton punctuated the week by breaking the all-time CCH single-game record with 12 three-pointers (12-of-14 3PT) in a 42-point explosion during a 102-64 triumph over California.',
      'HONORABLE MENTIONS:\n• Lloyd Boomer (Fresno Mad Dogs): Poured in 26 points with 5 rebounds and 4 assists to lead Fresno\'s 57-50 triumph over Sacramento.\n• Carlton Daugherty (Golden State Enterprise): #1 overall pick registered 20 points and 4 rebounds in his pro debut to defeat California 65-58.\n• Mo Alexander (Los Angeles Dynamics): Posted 18.5 PPG, 13.0 RPG, and 3.5 BPG in a flawless 2-0 week for Los Angeles.\n• Kirk Barnes (San Diego Sabrewolves): Averaged 28.0 PPG and 6.0 RPG under new head coach Jacob Underwood.'
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Week 2 showcased individual excellence at the highest level. A.J. Hinton\'s single-game record 12 triples is revolutionary, and Joshua Bowen has established Oakland as the team to beat in California.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades',
        quote: 'Joshua Bowen is the glue of our ballclub. He sets screens, cleans the glass with 11.5 rebounds, passes out of the post, and locks down the paint.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers',
        quote: 'A.J. Hinton is on another planet right now. Setting the league single-game record with 12 threes and averaging 42 points shows why he is the reigning MVP.'
      }
    ],
    playerStats: [
      { player: 'Joshua Bowen (Northern Cali POTW)', team: 'Oakland Renegades', stat: '14.5 PTS, 11.5 REB, 4.5 AST, 1.5 SPG • 2-0 Week (4-0 Overall)' },
      { player: 'A.J. Hinton (Southern Cali POTW)', team: 'San Diego Strykers', stat: '42.0 PPG, 4.0 RPG, 3.0 APG, 12.0 3PMPG (New Single-Game Record: 12 3PM) • 2-0 Week (3-0 Overall)' },
      { player: 'Lloyd Boomer (Hon. Mention)', team: 'Fresno Mad Dogs', stat: '26.0 PPG, 5.0 RPG, 4.0 APG (57-50 win vs SAC)' },
      { player: 'Carlton Daugherty (Hon. Mention)', team: 'Golden State Enterprise', stat: '20.0 PPG, 4.0 RPG, 3 3PM (Pro Debut Win)' },
      { player: 'Mo Alexander (Hon. Mention)', team: 'Los Angeles Dynamics', stat: '18.5 PPG, 13.0 RPG, 3.5 BPG (2-0 Week)' }
    ]
  },
  {
    id: 's4-potw-week-1-dean-marai',
    title: 'Players of the Week (Oct 15–21): Jamar Dean & Andor Marai Capture Week 1 Honors',
    subtitle: 'Oakland\'s scoring dynamo Jamar Dean and California\'s paint anchor Andor Marai are named Northern and Southern Conference Players of the Week for explosive Opening Week performances.',
    date: 'Season 4 Official Awards • Week 1 (Oct 15–21)',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Office & Awards Committee',
    readTime: '3 min read',
    imageUrl: jamarDean1Img,
    imageCaption: 'Jamar Dean (Northern Conference POTW) and Andor Marai (Southern Conference POTW) earned Week 1 Player of the Week accolades.',
    headlineQuote: 'Jamar Dean\'s 26-point masterclass and Andor Marai\'s 24-point, 11-rebound clinic set the standard for individual excellence in Opening Week.',
    contentParagraphs: [
      'CALIFORNIA — The Cali Championship Hoops League Office has officially announced the Players of the Week for Week 1 of Season 4, spanning games played from October 15 through October 21.',
      'NORTHERN CONFERENCE PLAYER OF THE WEEK: JAMAR DEAN (OAKLAND RENEGADES)\nOakland Renegades superstar shooting guard Jamar Dean takes home Northern Conference honors after igniting Oakland\'s 71-49 Opening Night victory over the Anaheim Admirals. Dean scored a game-high 26 points on an electric 8-of-12 shooting from the floor, adding 3 rebounds and 2 steals while converting 7-of-8 from the free-throw line. Dean spearheaded a 21-7 third-quarter blitz that blew the game open for the Renegades.',
      'SOUTHERN CONFERENCE PLAYER OF THE WEEK: ANDOR MARAI (CALIFORNIA REDS)\nCalifornia Reds center Andor Marai captured the Southern Conference award following a vintage paint performance in California\'s 59-44 statement win over the defending champion Sacramento Stallions. Marai posted 24 points, 11 rebounds, 2 steals, and 2 blocks on an astounding 10-of-12 shooting (83.3%) from the field, dominating the boards and anchoring California\'s defense to hold Sacramento to just 44 points.',
      'HONORABLE MENTIONS:\n• A.J. Hinton (San Diego Strykers): Exploded for 30 points (8-11 3PT, 4 STL) against Anaheim and led San Diego to a league-best 2-0 start.\n• R.J. Rush (Los Angeles Dynamics): Smashed the all-time CCH single-game record with 14-of-14 free throws, scoring 33 points in a 77-55 rout of San Diego.\n• Lloyd Boomer (Fresno Mad Dogs): Poured in 25 points (6-6 FT) to guide Fresno\'s 59-53 fourth-quarter comeback over San Jose.'
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Jamar Dean and Andor Marai delivered sensational opening statements. Both displayed elite efficiency and led their respective clubs to commanding victories.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades',
        quote: 'Jamar Dean played with total command against Anaheim. He attacked downhill, drew contact, and set the emotional tone for our entire squad.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds',
        quote: 'Andor Marai is the heartbeat of our interior attack. When he controls the paint with 24 and 11 against Sacramento, we are tough to beat.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean (Northern POTW)', team: 'Oakland Renegades', stat: '26.0 PPG, 3.0 RPG, 2.0 SPG (66.7% FG, 87.5% FT) • 1-0 Record' },
      { player: 'Andor Marai (Southern POTW)', team: 'California Reds', stat: '24.0 PPG, 11.0 RPG, 2.0 BPG, 2.0 SPG (83.3% FG, 80.0% FT) • 1-0 Record' },
      { player: 'A.J. Hinton (Hon. Mention)', team: 'San Diego Strykers', stat: '22.5 PPG, 3.5 RPG, 4.0 SPG, 8 3PM (30 PTS vs Anaheim) • 2-0 Record' },
      { player: 'R.J. Rush (Hon. Mention)', team: 'Los Angeles Dynamics', stat: '33.0 PPG, 2.0 BPG (CCH Record 14-14 FT) • 1-0 Record' },
      { player: 'Lloyd Boomer (Hon. Mention)', team: 'Fresno Mad Dogs', stat: '25.0 PPG, 4.0 RPG, 1.0 APG (6-6 FT) • 1-0 Record' }
    ]
  },
  {
    id: 's4-g6-hinton-strykers-rout-admirals',
    title: 'Hinton Erupts for 30 as Strykers Demolish Admirals, 85-43',
    subtitle: 'A 24-4 third-quarter blitz powers the San Diego Strykers to an 85-43 demolition of the Anaheim Admirals at Anaheim Arena as A.J. Hinton sinks 8 three-pointers.',
    date: 'Season 4 Recap • Oct 20',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Anaheim Beat',
    readTime: '3 min read',
    imageUrl: ajHintonS4_1Img,
    imageCaption: 'A.J. Hinton caught fire from downtown, hitting 8 three-pointers on his way to 30 points, 4 steals, and 3 assists in San Diego\'s 85-43 blowout road victory over Anaheim.',
    audioUrl: 'https://dn800307.us.archive.org/0/items/nba-2-k-24-2024-05-12-02-07-45/San_Diego_s_Impossible_Five_Percent_Defense.m4a',
    podcastInfo: {
      episodeTitle: 'San Diego\'s Impossible Five Percent Defense: Film Breakdown & Tactical Review',
      broadcastBy: 'CCH Media Network • Official Film Room Podcast',
      duration: 'Official Audio Podcast',
      description: 'Film analysis of the Strykers\' 85-43 rout in Anaheim: How San Diego held opponents to 5% from deep, mounted a 24-4 third-quarter lockdown, and paired Hinton\'s 30-point eruption with elite two-way team defense.',
    },
    teams: {
      team1: 'San Diego Strykers',
      team1Id: 'san-diego-strykers',
      score1: 85,
      team2: 'Anaheim Admirals',
      team2Id: 'anaheim-admirals',
      score2: 43,
    },
    quarterScores: [
      { period: 'Q1', team1: 20, team2: 17 },
      { period: 'Q2', team1: 23, team2: 9 },
      { period: 'Q3', team1: 24, team2: 4 },
      { period: 'Q4', team1: 18, team2: 13 },
    ],
    headlineQuote: 'After taking a 43-26 lead into the locker room, the Strykers blew the game completely open in the third quarter, outscoring Anaheim 24-4 and holding the Admirals to just one made field goal.',
    contentParagraphs: [
      'Anaheim, CA – The San Diego Strykers put on an absolute clinic on Sunday evening, dismantling the Anaheim Admirals 85-43 at Anaheim Arena.',
      'After a competitive first half that saw San Diego take a 43-26 lead into the locker room, the Strykers blew the game completely open in the third quarter. San Diego opened the frame on a back-breaking run, outscoring Anaheim 24-4 and holding the Admirals to just one made field goal to turn the contest into an all-out rout.',
      'PLAYER OF THE GAME:\nThe story of the night was the scorching perimeter shooting of reigning league MVP A.J. Hinton. Hinton was virtually unguardable, exploding for a game-high 30 points on 11-of-16 shooting from the floor, including an absurd 8-of-11 from beyond the arc. Hinton scored from everywhere—pulling up from deep in transition, working off ball screens, and knifing through passing lanes to rack up 4 steals.',
      'SUPPORTING CAST & BALL MOVEMENT:\nSan Diego’s balance was on full display as well. DeAnte Gray poured in 15 points, 6 rebounds, and 6 assists, while Johnny Galloway provided his usual do-it-all glue work with 4 points, 11 rebounds, 4 assists, and 2 steals. Carl Marshall chipped in 8 points and 5 rebounds off the bench. The Strykers shot a blistering 55% from the field (32/58) and 56% (15-of-27) from three-point range as a team while dishing out 24 assists on 32 made field goals.',
      'ADMIRALS PERSPECTIVE:\nFor the Admirals, it was an evening to forget offensively. Anaheim was held to just 30% shooting (14-of-46) and an icy 2-of-18 (11%) from three-point territory. Rookie Stephan Sirven led Anaheim with 15 points, and Kirk Tinsley added 11, while Jesse Wingate grabbed 9 rebounds with 6 points. However, the Admirals were thoroughly overwhelmed by San Diego’s length and defensive discipline, committing 13 turnovers that led to 20 Strykers transition points.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Reigning MVP • San Diego Strykers (30 PTS, 8-11 3PT, 4 STL)',
        quote: 'When the rhythm gets going like that and the ball is popping, the basket feels twice as big. Our team defense in the third quarter holding them to 4 points set the table for everything.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers (2-0 Start)',
        quote: 'Holding an opponent to one field goal in a 24-4 third quarter is elite execution. A.J. Hinton put on a shooting clinic, and DeAnte and Johnny anchored both ends.'
      },
      {
        speaker: 'Steve Porter',
        title: 'Head Coach • Anaheim Admirals',
        quote: 'We couldn\'t get stops, and when you let a 99-rated shooter like Hinton get clean looks from deep, it snowballs fast. We have to regroup and fix our transition defense.'
      }
    ],
    playerStats: [
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '30 PTS, 1 REB, 3 AST, 4 STL (11-16 FG, 8-11 3PT, 20 MIN)' },
      { player: 'DeAnte Gray', team: 'San Diego Strykers', stat: '15 PTS, 6 REB, 6 AST, 1 STL, 1 BLK (6-10 FG, 3-5 3PT)' },
      { player: 'Johnny Galloway', team: 'San Diego Strykers', stat: '4 PTS, 11 REB, 4 AST, 2 STL (30 MIN)' },
      { player: 'Carl Marshall', team: 'San Diego Strykers', stat: '8 PTS, 5 REB, 1 AST (4-6 FG)' },
      { player: 'Stephan Sirven', team: 'Anaheim Admirals', stat: '15 PTS, 2 REB, 2 AST, 4-4 FT (5-18 FG)' },
      { player: 'Kirk Tinsley', team: 'Anaheim Admirals', stat: '11 PTS, 2 REB, 4 AST, 4-4 FT (3-11 FG)' },
      { player: 'Jesse Wingate', team: 'Anaheim Admirals', stat: '6 PTS, 9 REB, 1 STL, 1 BLK (3-4 FG)' },
      { player: 'Tracy Howard', team: 'Anaheim Admirals', stat: '6 PTS, 5 REB, 1 AST' },
      { player: 'Strykers 3-Point Barrage', team: 'Team Stats', stat: '15/27 3PT (55.6%) • 24 Assists on 32 FGs' },
      { player: 'Strykers 3rd Quarter Blitz', team: 'Team Defense', stat: 'Outscored Admirals 24-4 (Held to 1 Made FG)' }
    ]
  },
  {
    id: 's4-g5-reds-stallions-s4',
    title: 'Marai, Rodman Lead Reds Past Stallions in 59-44 Grudge Match',
    subtitle: 'Andor Marai posts 24 points and 11 rebounds on 10-of-12 shooting as the California Reds stifle the defending champion Sacramento Stallions 59-44.',
    date: 'Season 4 Opening Night Recap (Oct 17)',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Southern California Beat',
    readTime: '3 min read',
    imageUrl: aMaraiS4_1Img,
    imageCaption: 'Andor Marai dominated the paint with 24 points (10-12 FG), 11 rebounds, 2 steals, and 2 blocks to lead the California Reds to a 59-44 victory over Sacramento.',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 59,
      team2: 'Sacramento Stallions',
      team2Id: 'sacramento-stallions',
      score2: 44,
    },
    quarterScores: [
      { period: 'Q1', team1: 14, team2: 8 },
      { period: 'Q2', team1: 16, team2: 10 },
      { period: 'Q3', team1: 15, team2: 18 },
      { period: 'Q4', team1: 14, team2: 8 },
    ],
    headlineQuote: 'Marai was virtually unstoppable in the paint, posting a monster double-double with 24 points, 11 rebounds, 2 steals, and 2 blocks on an ultra-efficient 10-of-12 shooting from the floor.',
    contentParagraphs: [
      'Sacramento, CA – In a fiercely physical rematch between two of the CCH\'s elite heavyweights, big man Andor Marai delivered a masterclass inside to lead the California Reds to a convincing 59-44 victory over the Sacramento Stallions.',
      'Marai was virtually unstoppable in the paint, posting a monster double-double with 24 points, 11 rebounds, 2 steals, and 2 blocks on an ultra-efficient 10-of-12 shooting from the floor. Whenever the Reds needed a bucket against Sacramento\'s vaunted interior defense, Marai delivered with soft touch around the rim and relentless activity on the offensive glass.',
      'SUPPORTING CAST & DEFENSIVE REBOUNDING:\nDonald Rodman provided the ideal complementary scoring punch, chipping in 11 points, 7 rebounds, and 2 blocks on 5-of-8 shooting, while Jadon Gordon added 10 points and 3 steals off the bench. The Reds controlled the tempo from the opening tip, establishing a 30-18 halftime advantage with disciplined interior defense and crisp ball movement (18 assists on 26 made field goals). Kyle Robinson orchestrated the offense brilliantly with 9 points and 7 assists.',
      'DEFENDING CHAMPS STIFLED:\nThe defending champion Stallions struggled to find their offensive rhythm against California\'s physical frontline. Adrian Pognotti paced Sacramento with 14 points, 6 rebounds, and 2 blocks, while Isaiah Levingston added 8 points off the bench and Gemini Jackson distributed 6 assists with 3 steals. However, Sacramento was held to just 35% shooting from the field (20-of-57) and 2-of-15 (13%) from deep, unable to overcome California\'s 35-30 rebounding advantage and 7 blocked shots.'
    ],
    quotes: [
      {
        speaker: 'Andor Marai',
        title: 'Center • California Reds (24 PTS, 11 REB, 10-12 FG, 2 BLK)',
        quote: 'Playing against Sacramento always demands our highest level of physicality. We wanted to set the tone on the glass and finish strong inside against their length.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds (4th Season)',
        quote: 'Holding a championship squad like Sacramento to 44 points and 35% shooting is what Reds basketball is built on. Andor Marai was simply sensational tonight.'
      },
      {
        speaker: 'Benjamin Nelson',
        title: 'Head Coach • Sacramento Stallions (4th Season)',
        quote: 'Credit to California, they took away our primary options and Marai dominated the interior. We will learn from this film and tighten up our offensive execution.'
      }
    ],
    playerStats: [
      { player: 'Andor Marai', team: 'California Reds', stat: '24 PTS, 11 REB, 2 STL, 2 BLK, 4-5 FT (10-12 FG, 27 MIN)' },
      { player: 'Donald Rodman', team: 'California Reds', stat: '11 PTS, 7 REB, 1 AST, 2 STL, 2 BLK (5-8 FG)' },
      { player: 'Jadon Gordon', team: 'California Reds', stat: '10 PTS, 1 REB, 3 STL, 1 BLK (5-9 FG)' },
      { player: 'Kyle Robinson', team: 'California Reds', stat: '9 PTS, 2 REB, 7 AST, 1 BLK (4-12 FG)' },
      { player: 'Stan Roberts', team: 'California Reds', stat: '5 PTS, 3 REB, 6 AST, 1 STL (2-6 FG)' },
      { player: 'Adrian Pognotti', team: 'Sacramento Stallions', stat: '14 PTS, 6 REB, 3 STL, 2 BLK (6-13 FG)' },
      { player: 'Isaiah Levingston', team: 'Sacramento Stallions', stat: '8 PTS, 2 REB, 4 AST, 1 STL (4-7 FG)' },
      { player: 'Gemini Jackson', team: 'Sacramento Stallions', stat: '6 PTS, 4 REB, 6 AST, 3 STL, 1 BLK' },
      { player: 'Reds Field Goal Efficiency', team: 'Team Stats', stat: '26/53 FG (49.1%) • 18 Assists • 7 Blocks' },
      { player: 'Stallions Shooting Struggles', team: 'Team Defense', stat: 'Held to 20/57 FG (35.1%) & 2/15 3PT (13.3%)' }
    ]
  },
  {
    id: 's4-g3-renegades-blitz-admirals',
    title: "Renegades' Third-Quarter Blitz Sinks Admirals, 71-49 Behind Jamar Dean's 26 Points",
    subtitle: 'A 21-7 third-quarter surge powers the Oakland Renegades to a convincing 71-49 victory over the Anaheim Admirals in front of a sold-out Oakland Arena.',
    date: 'Season 4 Opening Night Recap',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Oakland Beat',
    readTime: '3 min read',
    imageUrl: jamarDean1Img,
    youtubeUrl: 'https://www.youtube.com/embed/dT8Kop4dOxo?si=1cZFfuDOY1FHwffO',
    imageCaption: 'Jamar Dean erupted for a game-high 26 points on an efficient 8-of-12 shooting (7-8 FT) as the Oakland Renegades pulled away for a 71-49 victory over Anaheim.',
    teams: {
      team1: 'Anaheim Admirals',
      team1Id: 'anaheim-admirals',
      score1: 49,
      team2: 'Oakland Renegades',
      team2Id: 'oakland-renegades',
      score2: 71,
    },
    quarterScores: [
      { period: 'Q1', team1: 14, team2: 18 },
      { period: 'Q2', team1: 13, team2: 19 },
      { period: 'Q3', team1: 7, team2: 21 },
      { period: 'Q4', team1: 15, team2: 13 },
    ],
    headlineQuote: 'The game was decided in the third quarter. Oakland came out of the locker room on a mission, suffocating the Admirals on defense and erupting for 21 points while holding Anaheim to just 7.',
    contentParagraphs: [
      'Oakland, CA – The Oakland Renegades used a massive second-half surge to pull away from a stubborn Anaheim Admirals squad, securing a convincing 71-49 victory in front of a sold-out crowd at Oakland Arena.',
      'The Renegades set the tone early, taking a 37-27 lead into the halftime break behind sharp ball movement and active perimeter pressure. However, the game was completely decided in the third quarter. Oakland came out of the locker room on a mission, suffocating the Admirals on defense and erupting for 21 points while holding Anaheim to just 7, effectively breaking the game wide open and building a lead that reached as high as 28 points.',
      'PLAYER OF THE GAME:\nJamar Dean was unstoppable for the Renegades, dropping a game-high 26 points on an incredibly efficient 8-of-12 shooting from the field, including a lethal 7-for-8 performance from the free-throw line. Dean attacked downhill relentlessly, drawing fouls and orchestrating Oakland\'s offense with surgical precision.',
      'SUPPORTING CAST & DEFENSIVE REBOUNDING:\nDean was ably supported by big man Joshua Bowen, who contributed 11 points, 6 rebounds, and 2 blocks in the paint, while franchise scoring icon Alonzo Reece chipped in 10 points and dished out 4 assists with 2 steals. Oakland dominated the boards and held Anaheim to just 36% shooting from the floor.',
      'ADMIRALS PERSPECTIVE:\nFor Anaheim, veteran guard Kirk Tinsley led the offense with 14 points, connecting on 4-of-7 from beyond the arc. French rookie sensation Stephan Sirven showed flashes of brilliance with 12 points in his regular-season debut, but the Admirals were unable to sustain offense against Oakland\'s aggressive 2-3 matchup zone in the second half.'
    ],
    quotes: [
      {
        speaker: 'Jamar Dean',
        title: 'Shooting Guard • Oakland Renegades (26 PTS, 8-12 FG, 7-8 FT)',
        quote: 'We knew Anaheim would come out swinging, but Coach told us at halftime to clamp down on the perimeter and run in transition. Once our defense got stops in that third quarter, the basket looked like an ocean.'
      },
      {
        speaker: 'Carson Goodwin',
        title: 'Head Coach • Oakland Renegades (1st Season)',
        quote: 'Holding a talented team like Anaheim to 7 points in the third quarter while scoring 21 is championship-level execution. Jamar Dean played with poise and Joshua Bowen owned the paint.'
      },
      {
        speaker: 'Steve Porter',
        title: 'Head Coach • Anaheim Admirals (4th Season)',
        quote: 'That third quarter got away from us completely. We had unforced turnovers and gave up easy run-outs. We have to be much tougher with the ball.'
      }
    ],
    playerStats: [
      { player: 'Jamar Dean', team: 'Oakland Renegades', stat: '26 PTS, 3 REB, 2 STL (8-12 FG, 7-8 FT)' },
      { player: 'Joshua Bowen', team: 'Oakland Renegades', stat: '11 PTS, 6 REB, 2 BLK (5-8 FG)' },
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '10 PTS, 4 AST, 2 STL (4-9 FG)' },
      { player: 'Kirk Tinsley', team: 'Anaheim Admirals', stat: '14 PTS, 2 AST (4-7 3PT)' },
      { player: 'Stephan Sirven', team: 'Anaheim Admirals', stat: '12 PTS, 3 REB, 1 STL (Rookie Debut)' },
      { player: 'George Brooks', team: 'Anaheim Admirals', stat: '7 PTS, 7 REB, 1 BLK' },
      { player: 'Renegades 3rd Quarter Blitz', team: 'Team Defense', stat: 'Outscored Anaheim 21-7 (28-Point Lead Peak)' },
      { player: 'Oakland Shooting & Defense', team: 'Team Stats', stat: '53.8% FG • Held Admirals to 36.2% FG' }
    ]
  },
  {
    id: 's4-g4-tigersharks-mad-dogs-s4',
    title: 'Boomer Leads Mad Dogs\' Comeback Over Tigersharks, 59-53',
    subtitle: 'Fresno clamps down after falling behind 23-8 early, outscoring San Jose 26-16 in the 4th quarter as Lloyd Boomer erupts for 25 points at the Fresno Center.',
    date: 'Season 4 Opening Night Recap',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Central Valley Beat',
    readTime: '3 min read',
    imageUrl: sjVsFreImg,
    youtubeUrl: 'https://www.youtube.com/embed/jOZHLsv44uw?si=-uW-g7sz9KPYCezp',
    imageCaption: 'Fresno Mad Dogs celebrate a dramatic 59-53 comeback victory over the San Jose Tigersharks at the Fresno Center on Opening Night.',
    teams: {
      team1: 'San Jose Tigersharks',
      team1Id: 'san-jose-tigersharks',
      score1: 53,
      team2: 'Fresno Mad Dogs',
      team2Id: 'fresno-mad-dogs',
      score2: 59,
    },
    quarterScores: [
      { period: 'Q1', team1: 23, team2: 8 },
      { period: 'Q2', team1: 7, team2: 6 },
      { period: 'Q3', team1: 7, team2: 19 },
      { period: 'Q4', team1: 16, team2: 26 },
    ],
    headlineQuote: 'It was a tale of two halves at the Fresno Center. After a disastrous first quarter, the Fresno Mad Dogs completely clamped down to storm back and stun the San Jose Tigersharks, 59-53.',
    contentParagraphs: [
      'Fresno, CA – It was a tale of two halves at the Fresno Center. After a disastrous first quarter, the Fresno Mad Dogs completely clamped down to storm back and stun the San Jose Tigersharks, 59-53.',
      'The Tigersharks came out absolutely scorching, dropping 23 points in the opening frame while holding the Mad Dogs to just 8. However, the San Jose offense completely vanished over the next two quarters, scoring just 7 points in the second and 7 in the third. The Mad Dogs took advantage, clawing back into the game and finally seizing control in the fourth quarter, where they outscored the Tigersharks 26-16 to steal the win.',
      'PLAYER OF THE GAME:\nLloyd Boomer was the engine of the comeback for the Mad Dogs. He carried the scoring load with a game-high 25 points on 9-of-22 shooting, doing most of his damage at the charity stripe where he was a perfect 6-for-6.',
      'TIGERSHARKS NOTES:\nAl Sloan had a phenomenal individual performance for the Tigersharks, scoring 21 points on a blistering 9-of-11 shooting from the field. Unfortunately for San Jose, he received virtually no scoring help, as the team managed just 53 points total on 42% shooting.',
      'STATISTICAL BREAKDOWN:\nThe most telling stat of the game was the free-throw disparity. Fresno lived at the line, attempting 24 free throws (hitting 19, 79%) compared to San Jose\'s 3 attempts. The Mad Dogs also forced 10 turnovers and won the rebounding battle 33-30. Despite the Tigersharks edging them 28-20 in points in the paint, the sheer volume of points from the stripe and the 19-7 third-quarter run proved to be the deciding factor.'
    ],
    quotes: [
      {
        speaker: 'Lloyd Boomer',
        title: 'Point Guard • Fresno Mad Dogs (Player of the Game)',
        quote: 'We stayed resilient after that tough first quarter. Our defensive intensity turned the game around, and we attacked downhill to get to the free-throw line.'
      },
      {
        speaker: 'Ronnie Flores',
        title: 'Head Coach • Fresno Mad Dogs (1st Season)',
        quote: 'Down 23-8, our guys never flinched. Clamping down to hold them to 14 points combined across the second and third quarters won us this basketball game.'
      },
      {
        speaker: 'Al Sloan',
        title: 'Center • San Jose Tigersharks',
        quote: 'We started fast but let our offensive execution slip. When Fresno got into the penalty and made their run in the second half, we couldn\'t match their momentum.'
      }
    ],
    playerStats: [
      { player: 'Lloyd Boomer', team: 'Fresno Mad Dogs', stat: '25 PTS, 4 REB, 1 AST, 9-22 FG, 6-6 FT (Player of the Game)' },
      { player: 'Al Sloan', team: 'San Jose Tigersharks', stat: '21 PTS, 6 REB, 9-11 FG (81.8%), 3-3 FT' },
      { player: 'Albert Gill', team: 'San Jose Tigersharks', stat: '9 PTS, 3-3 3PT in 10 MIN' },
      { player: 'Carson Graham', team: 'Fresno Mad Dogs', stat: '8 PTS, 4 REB, 2 AST, 1 STL, 2-4 FG' },
      { player: 'Dell Gooden', team: 'San Jose Tigersharks', stat: '8 PTS, 2 REB, 1 AST, 1 STL, 4-8 FG' },
      { player: 'Donnell Wingate', team: 'Fresno Mad Dogs', stat: '7 PTS, 3 REB, 2 AST, 1 BLK' },
      { player: 'Jud Drew', team: 'Fresno Mad Dogs', stat: '7 PTS, 5 REB, 1 STL (3-3 FG)' },
      { player: 'Russell Wilson', team: 'San Jose Tigersharks', stat: '6 PTS, 4 REB, 2 AST (2-4 3PT)' },
      { player: 'Geraldo Jones', team: 'Fresno Mad Dogs', stat: '6 PTS, 4 REB, 2 STL, 1 BLK' },
      { player: 'Donald Hardy', team: 'San Jose Tigersharks', stat: '5 PTS, 2 REB, 7 AST, 1 BLK' },
      { player: 'Free Throw Disparity', team: 'Key Stat', stat: 'Fresno: 19-24 FT (79%) vs. San Jose: 3-3 FT (100%)' },
      { player: 'Fresno Defense & Glass', team: 'Team Stats', stat: '9 STL, 3 BLK, 33-30 Rebounds (7 Offensive REB)' }
    ]
  },
  {
    id: 's4-g2-rush-dynamics-cruise-sabrewolves',
    title: 'Rookie R.J. Rush Sets CCH Record with 14-of-14 Free Throws, Drops 33 as Dynamics Cruise',
    subtitle: 'A historic, record-breaking shooting performance propelled the Los Angeles Dynamics to a resounding 77-55 victory over the San Diego Sabrewolves as rookie R.J. Rush broke the all-time single-game free throws record.',
    date: 'Season 4 Opening Night Recap',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Los Angeles Beat',
    readTime: '3 min read',
    imageUrl: rjRush1Img,
    youtubeUrl: 'https://www.youtube.com/embed/vrro7eyGMMk?si=UrCRkjRO9DNCVVeh',
    imageCaption: 'Rookie R.J. Rush set a new Cali Championship Hoops all-time single-game record with 14 made free throws on a perfect 14-for-14 shooting, finishing with 33 PTS, 2 BLK, alongside Mo Alexander (20 PTS, 9-9 FG, 9 REB) in the Dynamics\' 77-55 blowout victory.',
    teams: {
      team1: 'San Diego Sabrewolves',
      team1Id: 'san-diego-sabrewolves',
      score1: 55,
      team2: 'Los Angeles Dynamics',
      team2Id: 'los-angeles-dynamics',
      score2: 77,
    },
    quarterScores: [
      { period: 'Q1', team1: 15, team2: 19 },
      { period: 'Q2', team1: 5, team2: 22 },
      { period: 'Q3', team1: 16, team2: 23 },
      { period: 'Q4', team1: 19, team2: 13 },
    ],
    headlineQuote: 'The star of the night was undeniably rookie R.J. Rush, who delivered a scoring masterclass for the Dynamics with 33 points on 9-for-14 shooting and a new league-record 14-for-14 performance from the free-throw line.',
    contentParagraphs: [
      'Los Angeles, CA – A historic and scorching-hot shooting performance propelled the Los Angeles Dynamics to a resounding 77-55 victory over the San Diego Sabrewolves on Opening Night.',
      'The Dynamics set the tone early with efficient offense, taking a 19-15 lead after the first quarter. However, the game was completely decided in the second period. Los Angeles put together a dominant 22-5 run, shooting a blistering 80% from the field to take a commanding 41-20 lead into the halftime break.',
      'The third quarter saw the Dynamics extend their advantage further, outscoring the Sabrewolves 23-16 to push the lead to a game-high 31 points. San Diego managed to "win" the final frame 19-13 in garbage time, but the 22-point final margin was a true reflection of the LA dominance.',
      'HISTORIC RECORD-BREAKING PERFORMANCE:\nThe star of the night was undeniably rookie sensation R.J. Rush, who etched his name into the Cali Championship Hoops record books in his very first regular season game. Rush broke the CCH single-game record for most free throws made in a single game, converting an immaculate 14-of-14 from the charity stripe. Rush finished with a game-high 33 points on 9-for-14 shooting from the field. He was ably supported by veteran center Mo Alexander, who was also perfect from the floor, contributing 20 points and grabbing 9 rebounds on 9-for-9 shooting.',
      'SABREWOLVES KEY PERFORMERS:\nThe Sabrewolves were led by Kirk Barnes, who dropped 17 points on 6-for-12 shooting, while Andre Creek contributed 13 points and 5 rebounds.',
      'STATISTICAL BREAKDOWN:\nThe numbers highlight just how efficient the Los Angeles offense was. The Dynamics shot a staggering 60% (28/47) from the field compared to the Sabrewolves\' 43% (23/53). Los Angeles also dominated the interior, racking up 46 points in the paint and consistently getting to the charity stripe, converting 19-of-22 free throws (86%)—led by Rush\'s record-breaking 14-of-14.\n\nThe rebounding battle was also a decisive factor, with LA controlling the glass 33-23, including a 27-17 advantage on the defensive end. Turnovers were relatively even (8 for LA, 9 for SD), but LA\'s superior shooting and foul discipline (only 6 team fouls compared to SD\'s 14) ensured the Sabrewolves never had a chance to claw back into the game.'
    ],
    quotes: [
      {
        speaker: 'R.J. Rush',
        title: 'Point Guard • Los Angeles Dynamics (33 PTS, CCH Record 14-14 FT)',
        quote: 'Breaking the league free throw record in my very first game is an honor, but the win is what matters most. We wanted to set a ferocious tone on our home floor from the opening tip. When I attacked the lane and got to the line, I just locked in and knocked them down.'
      },
      {
        speaker: 'Pooh Splitter',
        title: 'Head Coach • Los Angeles Dynamics (1st Season)',
        quote: 'R.J. Rush showed poise beyond his years tonight. Going 14-for-14 from the stripe against a physical Sabrewolves defense to set the all-time CCH single-game record is sensational. That 22-5 second quarter was clinic basketball.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves (1st Season)',
        quote: 'The second quarter blitz put us in a hole we couldn\'t recover from. Rush was unstoppable getting downhill and we couldn\'t stop fouling him. When a guy goes 14-of-14 from the line and Alexander goes 9-of-9 inside, you\'re in for a long night.'
      }
    ],
    playerStats: [
      { player: 'R.J. Rush', team: 'Los Angeles Dynamics', stat: '33 PTS, 1 REB, 2 BLK (9-14 FG, 1-2 3PT, 14-14 FT • CCH Single-Game Record)' },
      { player: 'Mo Alexander', team: 'Los Angeles Dynamics', stat: '20 PTS, 9 REB, 2 AST, 2 STL (9-9 FG, 2-2 FT)' },
      { player: 'Kirk Barnes', team: 'San Diego Sabrewolves', stat: '17 PTS, 1 REB, 1 AST, 1 BLK (6-12 FG, 4-4 FT)' },
      { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '13 PTS, 5 REB, 2 AST, 4 STL, 1 BLK (6-8 FG)' },
      { player: 'Alan Perben', team: 'San Diego Sabrewolves', stat: '9 PTS (4-8 FG, 1-1 3PT)' },
      { player: 'Robert Riley', team: 'Los Angeles Dynamics', stat: '6 PTS, 2 REB, 1 AST (3-5 FG)' },
      { player: 'Josh Mullin', team: 'Los Angeles Dynamics', stat: '6 PTS, 2 REB, 1 STL (3-4 FG)' },
      { player: 'Tingus Atgusanas', team: 'San Diego Sabrewolves', stat: '6 PTS, 1 REB, 1 AST (3-3 FG)' },
      { player: 'Matt Holland', team: 'San Diego Sabrewolves', stat: '6 PTS, 4 REB, 1 STL (3-7 FG)' },
      { player: 'Lynwood Washington Jr.', team: 'San Diego Sabrewolves', stat: '4 PTS, 2 REB, 1 AST, 1 STL' },
      { player: 'Bryant Humphries', team: 'Los Angeles Dynamics', stat: '4 PTS, 2 REB, 1 AST, 1 STL (1-5 3PT)' },
      { player: 'R.J. Rush Record Mark', team: 'CCH All-Time Record', stat: '14 Free Throws Made (14/14, 100%) in a Single Game' },
      { player: 'Dynamics Interior & Efficiency', team: 'Team Stats', stat: '60% FG (28/47) • 46 PTS in Paint • 19/22 FT (86%)' },
      { player: 'Rebounding Battle', team: 'Team Stats', stat: 'LA Dynamics 33 (27 DEF) - SD Sabrewolves 23 (17 DEF)' }
    ]
  },
  {
    id: 's4-g1-strykers-crush-vipers',
    title: 'Strykers Crush Vipers Behind Dominant 3rd Quarter, Win 53-35',
    subtitle: 'A suffocating defensive performance and a monumental 25-6 third-quarter blitz propel the Strykers to a resounding 53-35 victory over the Vipers at The LBC Pit.',
    date: 'Season 4 Opening Night Recap',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Long Beach Beat',
    readTime: '3 min read',
    imageUrl: hintonS4G1Img,
    imageCaption: 'A.J. Hinton (15 PTS, 6 REB, 4 STL, 2 BLK) powers San Diego to a 53-35 Opening Day victory over Long Beach.',
    youtubeUrl: 'https://www.youtube.com/embed/LqS71EzeFUc?si=NlaEW8hZMWHBcE8v',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Why_the_Strykers_box_score_lies.m4a',
    podcastInfo: {
      episodeTitle: 'Why the Strykers Box Score Lies: Opening Night Breakdown & Season 4 Film Review',
      broadcastBy: 'CCH Media Network • Official Recap Podcast',
      duration: 'Official Audio Podcast',
      description: 'Deep dive into Season 4 Opener: Why the 53-35 final score masks a 33-point blowout, A.J. Hinton\'s lockdown defense, the explosive 25-6 third-quarter blitz, and what the Vipers must adjust going forward.',
    },
    teams: {
      team1: 'San Diego Strykers',
      team1Id: 'san-diego-strykers',
      score1: 53,
      team2: 'Long Beach Vipers',
      team2Id: 'long-beach-vipers',
      score2: 35,
    },
    quarterScores: [
      { period: 'Q1', team1: 8, team2: 5 },
      { period: 'Q2', team1: 17, team2: 7 },
      { period: 'Q3', team1: 25, team2: 6 },
      { period: 'Q4', team1: 3, team2: 17 },
    ],
    headlineQuote: 'The Strykers came into The LBC Pit and set the tone defensively from the opening tip, holding the Vipers to a dismal 29% shooting from the field and an abysmal 1-for-19 from three-point range.',
    contentParagraphs: [
      'The LBC Pit – A suffocating defensive performance and a monumental third-quarter run propelled the Strykers to a resounding 53-35 victory over the Vipers.',
      'The Strykers came into The LBC Pit and set the tone defensively from the opening tip, holding the Vipers to a dismal 29% shooting from the field and an abysmal 1-for-19 (5%) from three-point range on their way to a blowout victory.',
      'FIRST HALF: SLOW START, STRYKERS PULL AHEAD\nThe game started as a grind-it-out affair. The Strykers struggled to find their rhythm early, taking an 8-5 lead after the first quarter on just 29% shooting. The offense began to click in the second period, with the Strykers outscoring the Vipers 17-7, taking a 25-12 lead into the halftime break. A.J. Hinton and Maxwell Mayo were tied as the top performers at the half with 7 points each.',
      'THE TURNING POINT: A THIRD-QUARTER BLITZ\nWhatever Strykers head coach said in the locker room worked to perfection. The game was completely blown open in the third quarter. The Strykers exploded for 25 points while holding the Vipers to just 6, outscoring them by 19 points in the frame. Strykers shot a blistering 56% from the field and 50% from beyond the arc during this run. The massive surge stretched their lead to a game-high 33 points, effectively putting the game out of reach.',
      'GARBAGE TIME SURGE\nWith the outcome firmly decided, the Vipers put forth a desperate late surge, actually winning the fourth quarter 17-3 to make the final score look slightly more respectable than the game actually was.',
      'KEY PERFORMERS:\n\n• Strykers: The offense was led by A.J. Hinton, who finished with a game-high 15 points and stuffed the stat sheet with 6 rebounds, 4 steals, and 2 blocks. DeAnte Gray provided an efficient scoring punch off the bench, adding 13 points on 5-of-7 shooting. As a team, the Strykers controlled the glass with 37 rebounds and dished out 13 assists.\n\n• Vipers: Maxwell Mayo led the way for the home team with 11 points and 2 rebounds on 5-of-11 shooting. Floyd Elliott was a bright spot on the boards, logging 9 points and grabbing 8 rebounds. However, the Vipers were their own worst enemy, committing 11 turnovers that led to 8 Strykers points and failing to take care of the ball in the half-court set.\n\nThe Strykers walk away with a dominant 18-point road win, while the Vipers will head back to the drawing board to try and fix their shooting woes.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Reigning MVP • San Diego Strykers (99 OVR)',
        quote: 'We set the tone on defense from the jump. When we came out of halftime and executed in that third quarter, the floor just opened up.'
      },
      {
        speaker: 'Adam Saunders',
        title: 'Head Coach • San Diego Strykers',
        quote: 'Holding an explosive offensive team to 29% from the field and 1-of-19 from deep shows the defensive dedication this team brought tonight.'
      },
      {
        speaker: 'Stretch Roberts',
        title: 'Head Coach • Long Beach Vipers',
        quote: 'You can\'t shoot 5% from three and give up a 25-6 third quarter against the best team in the conference. We will head back to the film room.'
      }
    ],
    playerStats: [
      { player: 'A.J. Hinton', team: 'San Diego Strykers', stat: '15 PTS, 6 REB, 4 STL, 2 BLK' },
      { player: 'DeAnte Gray', team: 'San Diego Strykers', stat: '13 PTS, 5-7 FG (Bench Spark)' },
      { player: 'Maxwell Mayo', team: 'Long Beach Vipers', stat: '11 PTS, 2 REB (5-11 FG)' },
      { player: 'Floyd Elliott', team: 'Long Beach Vipers', stat: '9 PTS, 8 REB' },
      { player: 'Strykers Defense', team: 'Team Defense', stat: 'Held Vipers to 29% FG & 1-19 3PT (5.3%)' },
      { player: 'Strykers Glass & Ball Movement', team: 'Team Stats', stat: '37 Rebounds & 13 Assists' }
    ]
  },
  {
    id: 's4-blockbuster-signings-pognotti-galloway',
    title: 'BREAKING: Adrian Pognotti Inks 4-Year Mega Deal with Sacramento Stallions; Johnny Galloway Re-Signs with Strykers on $171.87M Contract',
    subtitle: 'The CCH landscape trembles as the reigning champion Stallions secure 7\'2" defensive titan Adrian Pognotti (87 OVR), while the San Diego Strykers lock down two-way phenom Johnny Galloway (88 OVR) with matching 4-year, $171.87M contracts.',
    date: 'Breaking News • Season 4 Blockbuster Deals',
    season: 4,
    category: 'offseason',
    featured: true,
    author: 'CCH League Operations & Free Agency Desk',
    readTime: '4 min read',
    imageUrl: pognottiImg,
    imageCaption: 'Adrian Pognotti joins StallionsNation on a 4-year, $171.87M contract; Johnny Galloway recommits to Strykers on matching terms.',
    headlineQuote: 'The dotted line has been signed. Two franchise anchors secure massive 4-year commitments ahead of an electrifying Season 4 tip-off.',
    contentParagraphs: [
      'SACRAMENTO & SAN DIEGO — In a pair of seismic roster moves sending shockwaves across Cali Championship Hoops, two of the league\'s most dominant frontcourt forces have officially put pen to paper on blockbuster 4-year, $171.87 million contracts.',
      'POGNOTTI HEADS TO THE CAPITAL TO ANCHOR THE DEFENDING CHAMPS\nAdrian Pognotti, the 7\'2", 280-pound center who holds the all-time CCH single-game record with 10 blocked shots, has officially signed with the reigning champion Sacramento Stallions. Rated at 87 OVR with an imposing interior presence, Pognotti gives head coach Benjamin Nelson a devastating defensive centerpiece to pair alongside All-Cali power forward Frank Hackett (89 OVR) and dynamic wing George Madsen (88 OVR). Stallions Nation erupted on social media following the announcement as Sacramento bolsters its frontcourt in pursuit of a back-to-back title defense.',
      'GALLOWAY SECURES $171.87M EXTENSION TO STAY IN SAN DIEGO\nMeanwhile in Southern California, the San Diego Strykers finalized terms to bring back versatile two-way forward Johnny Galloway on an identical 4-year, $171.87 million pact. Galloway, rated 88 OVR with elite positional versatility across both forward spots (6\'5", 240 lbs, Portland State), rejoins reigning MVP A.J. Hinton (99 OVR), scoring dynamo DeAnte Gray (96 OVR), and playmaker Ray Gambino Gamble (94 OVR). Under new head coach Adam Saunders, Galloway\'s lockdown perimeter and interior defense solidifies the Strykers as top-tier championship favorites heading into Opening Night against Long Beach on October 17.',
      'IMPACT ON THE TITLE RACE\nWith both players locked into long-term contracts, Sacramento and San Diego have solidified their rosters with prime All-Defensive caliber talent. Both franchises will square off twice during the Season 4 regular season in what promises to be two of the most heavily anticipated cross-conference battles of the year.'
    ],
    quotes: [
      {
        speaker: 'Nate Duncan',
        title: 'NBA / CCH Analyst',
        quote: 'Several news outlets reporting that Adrian Pognotti will join the Stallions on a 4yr/$171.87M contract.'
      },
      {
        speaker: 'Sacramento Stallions',
        title: 'Official Team Statement',
        quote: 'The dotted line has been signed. Adrian Pognotti is now a part of StallionsNation. Here we go!'
      },
      {
        speaker: 'Nabil Karim',
        title: 'CCH Insider',
        quote: 'Strykers secure the services of Johnny Galloway with a 4yr/$171.87M contract.'
      },
      {
        speaker: 'San Diego Strykers',
        title: 'Official Team Statement',
        quote: 'It\'s a done deal, folks! Johnny Galloway is joining us on a 4yr/$171.87M deal. Welcome!'
      }
    ],
    playerStats: [
      { player: 'Adrian Pognotti', team: 'Sacramento Stallions', stat: '87 OVR • 7\'2", 280 lbs (4yr/$171.87M)' },
      { player: 'Johnny Galloway', team: 'San Diego Strykers', stat: '88 OVR • 6\'5", 240 lbs (4yr/$171.87M)' },
      { player: 'Pognotti Record', team: 'CCH All-Time', stat: '10 BLK in a Single Game' },
      { player: 'Galloway Accolades', team: 'San Diego Strykers', stat: 'All-Defensive 1st Team' }
    ]
  },
  {
    id: 's4-schedule-announcement',
    title: 'Official Season 4 Schedule Released: 132 Regular-Season Games, Opening Night Slate & Key Rivalries',
    subtitle: 'The CCH League Office reveals the complete 22-game calendar for all 12 franchises from Oct 17 through Apr 9—highlighted by an explosive 5-game Opening Night, holiday doubleheaders, and Underwood’s first derby against the Strykers.',
    date: 'Season 4 Official Schedule Release',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Operations & Scheduling Desk',
    readTime: '4 min read',
    imageUrl: '/logos/cch_league_logo.png',
    imageCaption: 'Official CCH Season 4 Schedule Release • 132 Games Across 12 Franchises',
    headlineQuote: 'Season 4 brings the most balanced and fiercely competitive schedule in league history. Every single game matters with 12 loaded rosters fighting for playoff seeding.',
    contentParagraphs: [
      'CALIFORNIA — The Cali Championship Hoops League Office has officially ratified and published the complete 132-game regular-season schedule for Season 4. All 12 franchises will contest a grueling 22-game slate spanning seven months from Opening Night on October 17 through the regular season finale on April 9.',
      'OPENING NIGHT BLOCKBUSTER SLATE (OCTOBER 17)\nSeason 4 tips off with five marquee matchups across California:\n• Anaheim Admirals at Oakland Renegades\n• San Diego Strykers at Long Beach Vipers\n• Sacramento Stallions at California Reds\n• San Jose Tigersharks at Fresno Mad Dogs\n• San Diego Sabrewolves at Los Angeles Dynamics',
      'MARQUEE RIVALRIES & KEY DATES\n• San Diego Cross-Town Derby: Former Strykers coach Jacob Underwood leads the Sabrewolves into battle against his former squad on Jan 16 (at Strykers) and Feb 6 (at Sabrewolves).\n• Christmas Day Showcase (Dec 25): San Diego Sabrewolves visit the Oakland Coliseum to take on the Oakland Renegades.\n• Rematch of the Season 3 Finals: Sacramento Stallions meet the Fresno Mad Dogs on Oct 31 (at Fresno) and Nov 26 (at Sacramento).\n• Regular Season Finale (April 9): Anaheim Admirals travel to face the California Reds in the final regular season clash before the playoffs.',
      'BROWSE THE FULL SCHEDULE\nFans can explore the complete schedule in the Schedule tab, filtering by month, team, conference, and matchup.'
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Season 4 brings the most balanced and fiercely competitive schedule in league history. Every single game matters with 12 loaded rosters fighting for playoff seeding.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves',
        quote: 'Opening on the road against Los Angeles on Oct 17 will test our chemistry immediately. We are locked in for a 22-game war.'
      }
    ],
    playerStats: [
      { player: 'Total Games', team: 'League Slate', stat: '132 Regular Season Games' },
      { player: 'Games Per Team', team: 'All 12 Teams', stat: '22 Regular Season Games' },
      { player: 'Opening Night', team: 'League-Wide', stat: 'October 17 (5 Games)' },
      { player: 'Regular Season Finale', team: 'Admirals @ Reds', stat: 'April 9' }
    ]
  },
  {
    id: 's4-opening-day-rosters-unveiled',
    title: 'Season 4 Official Opening Day Rosters Unveiled: 132 Players, Elite Ratings & Complete Rotations',
    subtitle: 'From 99 OVR MVP A.J. Hinton and the Strykers super-team to Oakland\'s 96-92 backcourt tandem, Carlton Daugherty\'s arrival in Golden State, and 12 revamped coaching staffs—the official 11-man rosters for all 12 franchises are finalized.',
    date: 'Season 4 Official Release • Top Story',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH League Office & Operations Desk',
    readTime: '6 min read',
    imageUrl: ajHinton99Img,
    imageCaption: 'First 99 rated player in CCH History',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/The_New_Architecture_of_CCH_Season_4.m4a',
    podcastInfo: {
      episodeTitle: 'The New Architecture of CCH Season 4: Roster Construction, 99 OVR Hinton & Complete Roster Breakdown',
      broadcastBy: 'CCH Media Network • Official Roster Breakdown Podcast',
      duration: 'Official Audio Podcast',
      description: 'Comprehensive Season 4 opening day breakdown: 132 active players, super-team constructions, 99 OVR A.J. Hinton, Oakland\'s explosive 96-92 tandem, rookie impacts, and 12-team rotation architecture.',
    },
    headlineQuote: 'We have the talent, but individual ratings do not win championships. Our singular focus is getting to the Finals and finishing the job.',
    contentParagraphs: [
      'CALIFORNIA — The Cali Championship Hoops front office has formally certified and published the complete 11-man Opening Day Rosters for all 12 franchises ahead of the Season 4 tip-off. With 132 players under active contract, the league enters its most fiercely contested regular season campaign.',
      'THE 90+ SUPERSTAR POWER RANKINGS & FRANCHISE ICONS\nThe top tier of the league is anchored by reigning MVP A.J. Hinton (San Diego Strykers), who stands alone at 99 OVR as the premier offensive force in basketball. He is joined in San Diego by All-Cali forward DeAnte Gray (96 OVR) and floor general Ray Gambino Gamble (94 OVR) to form the highest-rated trio in CCH history.\n\nIn Oakland, superstar Jamar Dean (96 OVR) and All-Star Alonzo Reece (92 OVR) lead a thunderous offensive backcourt. Los Angeles Dynamics field a menacing inside-out duo in Jack McMichael Jr. (96 OVR) and 7\'2" defensive titan Mo Alexander (94 OVR). Arch-rival San Diego Sabrewolves counter with 56-point scoring king Kirk Barnes (93 OVR) and 7\'4" rim protector Andre Creek (92 OVR). Defending regular season top seed California Reds feature Hungarian center Andor Marai (93 OVR) alongside Donald Rodman (88 OVR).',
      'ROOKIE INFLUX & NEW ROTATION CORNERSTONES\nAll 36 draft selections have claimed their active roster spots across the 12 teams. #1 overall pick Carlton Daugherty (85 OVR SF) steps into Golden State\'s starting lineup alongside Jud Thompson and veteran center Cameron Barkley. French phenom Stephan Sirven (84 OVR SG) pairs with Kirk Tinsley in Anaheim, while Dell Gooden (84 OVR PF/C) anchors San Jose alongside reigning ROTY Donald Hardy. In Long Beach, 7-foot Kentucky powerhouse Grok Wilkens (83 OVR C) unites with veteran forward J.C. McMillan.',
      'COACHING STAFFS & SIDELINE DIRECTION\nFour head coaches return to defend their established culture (Steve Porter in Anaheim, William Walker in California, Benjamin Nelson in Sacramento, and Michael Stauffer in San Jose), while eight franchises debut new tacticians, including Jacob Underwood taking over the Sabrewolves, Adam Saunders with the Strykers, Pooh Splitter with the Dynamics, Stretch Roberts returning to Long Beach, Ronnie Flores in Fresno, Wyatt Zimmerman in Golden State, Carson Goodwin in Oakland, and Zack Randle in San Francisco.',
      'HOW TO EXPLORE\nFans and analysts can view every single player\'s ratings, jersey numbers, college origins, physical measurables, and team rosters through the official Season 4 Rosters Hub tab or by clicking on any franchise in the directory.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Reigning MVP • San Diego Strykers (99 OVR)',
        quote: 'We have the talent, but individual ratings do not win championships. Our singular focus is getting to the Finals and finishing the job.'
      },
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Every roster has been constructed to compete for the championship. The depth of talent across all 12 teams ensures that every regular season matchup will have postseason intensity.'
      },
      {
        speaker: 'Wyatt Zimmerman',
        title: 'Head Coach • Golden State Enterprise',
        quote: 'With Carlton Daugherty, Cameron Barkley, and our young core, we have built a roster that can compete with anyone in the league.'
      }
    ],
    playerStats: [
      { player: 'Highest Rated Player', team: 'A.J. Hinton (Strykers)', stat: '99 OVR SG • Reigning MVP' },
      { player: 'Highest Rated Duo', team: 'Jamar Dean & Alonzo Reece (Renegades)', stat: '96 & 92 OVR Backcourt' },
      { player: 'Highest Rated Rookie', team: 'Carlton Daugherty (Enterprise)', stat: '85 OVR SF • #1 Pick' },
      { player: 'Total Active Players', team: 'League-Wide', stat: '132 Players across 12 Teams' }
    ]
  },
  {
    id: 's4-draft-recap-steals-and-reaches',
    title: 'Season 4 Draft Recap: Steals, Reaches & Franchise Hauls Audio Special',
    subtitle: 'From Golden State landing consensus #1 Carlton Daugherty to Duke steal King Jordan, French sharpshooter Stephan Sirven, and Santa Clara value pick Isaac Levingston—listen to the official 3-round draft recap and team grades breakdown.',
    date: 'Season 4 Draft • Official Audio Podcast',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Draft War Room & Analytics Desk',
    readTime: '6 min read',
    imageUrl: '/logos/cch_league_logo.png',
    imageCaption: 'Official Cali Championship Hoops League Crest • Season 4 Draft Class Recap',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/CCH_Season_Four_Draft_steals_and_reaches.m4a',
    podcastInfo: {
      episodeTitle: 'CCH Season Four Draft: Steals, Reaches & Franchise Hauls',
      broadcastBy: 'CCH Draft War Room • Official Recap Podcast',
      duration: 'Official Audio Broadcast',
      description: 'Comprehensive 3-round draft breakdown covering all 36 selections: Golden State\'s dream haul with Carlton Daugherty & King Jordan, the biggest draft steals, surprise reaches, and immediate franchise outlooks.',
    },
    headlineQuote: 'Draft night transformed the entire competitive landscape of Season 4. From franchise-altering cornerstones to late-round steals that will define playoff rotations, every general manager made their mark.',
    contentParagraphs: [
      'CALIFORNIA — The Season 4 Cali Championship Hoops Draft is officially in the books, delivering 36 new selections across 3 historic rounds. The CCH Media Network presents the official Draft Recap Special, breaking down every team\'s draft strategy, notable steals, controversial reaches, and rookie projections.',
      'THE CONSENSUS #1 & LOTTERY FIREWORKS\nGolden State Enterprise capitalized on the top overall pick by drafting UC San Diego standout Carlton Daugherty (SF, 85 OVR), pairing the consensus top player with head coach Wyatt Zimmerman. Anaheim secured French perimeter sniper Stephan Sirven (SG, 84 OVR) at #2, San Jose nabbed versatile stretch forward Dell Gooden (PF/C, 84 OVR) at #3, Long Beach anchored their defense with 7-foot Kentucky titan Grok Wilkens (C, 84 OVR) at #4, and Fresno acquired Louisiana-Monroe jumbo playmaker R.J. Rush (PG, 83 OVR) at #5.',
      'BIGGEST DRAFT STEALS\n• King Jordan (Round 3, Pick 1 • Golden State Enterprise • Duke, 75 OVR): Projected as a high 2nd-round talent, Duke scoring guard King Jordan slid into Round 3, giving Golden State a dynamic bench scoring punch.\n• Isaac Levingston (Round 3, Pick 12 • Sacramento Stallions • Santa Clara, 75 OVR): The final pick of the draft proved to be an absolute coup for Sacramento, adding a 6\'11" low-post master with Grade A interior scoring touch.\n• Carl Marks (Round 1, Pick 8 • Long Beach Vipers • Pacific, 81 OVR): Pacific big man provides instant rim-protection and paint authority.\n• Tingus Atgusanas (Round 1, Pick 9 • San Diego Sabrewolves • Latvia, 80 OVR): 6\'10" Latvian stretch forward who brings elite glass-cleaning and inside scoring touch.',
      'SURPRISE REACHES & BOLD STRATEGIES\nSeveral front offices drafted for immediate tactical necessity rather than consensus board ranking. Oakland made a decisive move for Arizona State floor general Rodger Green (PG, 78 OVR) at Pick 9, while San Francisco prioritized Texas perimeter sharpshooter Donald Jones (SG, 77 OVR) at Pick 11 to bolster their backcourt spacing.',
      'LISTEN TO THE FULL PODCAST\nStream the complete audio recap above for in-depth team-by-team draft grades, player fit analysis, and rookie season predictions.'
    ],
    quotes: [
      {
        speaker: 'CCH Draft War Room',
        title: 'Lead Draft Analyst',
        quote: 'Golden State Enterprise walked away with the single most impactful draft class in league history: an 85 OVR superstar in Carlton Daugherty and two ready-to-play rotation pieces in Jud Thompson and King Jordan.'
      },
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'The depth of this Season 4 class is unprecedented. The players selected in Rounds 2 and 3 will be competing in high-leverage playoff minutes this season.'
      }
    ],
    playerStats: [
      { player: 'Top Overall Pick', team: 'Carlton Daugherty (Golden State)', stat: '85 OVR SF • UC San Diego' },
      { player: 'Biggest Steal', team: 'King Jordan (Golden State)', stat: '75 OVR SG • Round 3 Pick 1 (Duke)' },
      { player: 'Mr. Irrelevant Value', team: 'Isaac Levingston (Sacramento)', stat: '75 OVR PF • Round 3 Pick 12 (Santa Clara)' },
      { player: 'International Jewel', team: 'Stephan Sirven (Anaheim)', stat: '84 OVR SG • Pick 2 (France)' },
    ]
  },
  {
    id: 's4-carlton-daugherty-profile',
    title: 'Franchise Transformed: Carlton Daugherty Drafted #1 Overall by Golden State Enterprise',
    subtitle: 'Official Draft Profile & Scouting Deep-Dive on UC San Diego\'s 85 OVR two-way superstar wing—plus how Enterprise GM and coach Wyatt Zimmerman landed the ultimate cornerstone alongside Jud Thompson and King Jordan.',
    date: 'Season 4 Draft Special • Top Story',
    season: 4,
    category: 'feature',
    featured: true,
    author: 'CCH Scouting & Analytics Desk',
    readTime: '5 min read',
    imageUrl: carltonDaughertyImg,
    imageCaption: 'Official CCH Draft Profile Card • Carlton Daugherty (SF, UC San Diego • #1 Pick to Golden State Enterprise • 85 OVR)',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Daugherty_versus_Wilkens_for_Franchise_Foundation.m4a',
    podcastInfo: {
      episodeTitle: 'Draft Special: Daugherty vs. Wilkens for Franchise Foundation',
      broadcastBy: 'CCH Draft War Room • Official Scouting Podcast',
      duration: 'Official Audio Breakdown',
      description: 'Scouting breakdown examining how Carlton Daugherty\'s lethal 3-level scoring and A+ perimeter defense make him the premier franchise-altering prospect of Season 4.',
    },
    headlineQuote: 'Carlton Daugherty possesses the rarest combination in modern basketball: lethal 40%+ three-point accuracy off the catch or bounce, relentless downhill finishing, and true lockdown perimeter defense against premier scorers.',
    contentParagraphs: [
      'SAN FRANCISCO — With the first overall pick in the Season 4 Cali Championship Hoops Draft, Golden State Enterprise selected small forward Carlton Daugherty out of UC San Diego, locking in the consensus #1 prospect and most anticipated rookie in league history.',
      'A GENERATIONAL TWO-WAY THREE-LEVEL CORNERSTONE\nStanding 6\'7" and boasting an immaculate 85 overall rating, Daugherty earned unanimous top-tier grades across all scouting departments. His attribute breakdown represents the archetype of a modern championship wing: Grade A+ Three-Point Marksmanship, Grade A+ Lockdown Perimeter Defense, Grade A Inside Finishing, and Grade A- Mid-Range Pull-Up touch.',
      'THE UC SAN DIEGO LEGACY TO ENTERPRISE SYSTEM\nDaugherty dominated collegiate basketball with effortless scoring bursts and an unyielding defensive motor. For new Enterprise head coach Wyatt Zimmerman, Daugherty provides an immediate centerpiece to construct both an explosive fastbreak transition attack and a half-court defensive fortress in the Bay Area.',
      'A HISTORIC DRAFT CLASS FOR GOLDEN STATE\nGolden State did not stop with Daugherty. The Enterprise assembled a masterclass draft haul by grabbing sharpshooting point guard Jud Thompson (St. Peter\'s, 77 OVR) in Round 2, and scoring steal King Jordan (Duke, 75 OVR) in Round 3. With Daugherty leading the wing, Thompson setting the table, and Jordan providing defensive bite, the Enterprise have accelerated from rebuilding hopefuls straight into title contention.'
    ],
    quotes: [
      {
        speaker: 'Carlton Daugherty',
        title: '#1 Overall Pick • Golden State Enterprise (85 OVR SF)',
        quote: 'Putting on the Golden State jersey is an honor. I take pride in guarding the opposing team\'s best scorer every single night and making winning plays on both ends of the floor. We are building something special here.'
      },
      {
        speaker: 'Wyatt Zimmerman',
        title: 'Head Coach • Golden State Enterprise',
        quote: 'Carlton was our target from the very beginning. His work ethic, maturity, and complete two-way skillset make him the ideal leader for our franchise culture.'
      }
    ],
    playerStats: [
      { player: 'Carlton Daugherty', team: 'Golden State Enterprise', stat: '85 OVR • #1 Overall Pick • SF' },
      { player: 'Key Attributes', team: 'Scouting Grades', stat: 'A+ 3PT • A+ Perimeter D • A Inside' },
      { player: 'Pro Comparison', team: 'Style Blueprint', stat: 'Kawhi Leonard / Jayson Tatum hybrid' },
    ]
  },
  {
    id: 's4-draft-big-board-unveiled',
    title: 'Season 4 Draft Central: 44 Verified Prospects Unveiled on Official Big Board',
    subtitle: 'From UC San Diego scoring phenom Carlton Daugherty (#1) and Euro sniper Stephan Sirven (#2) to Minnesota powerhouse Dell Gooden (#3), Kentucky rim anchor Grok Wilkens (#4), jumbo floor general R.J. Rush (#5), and Wyoming sharpshooter Lloyd Boomer (#6), front offices prepare for a generational draft class.',
    date: 'Season 4 Offseason • Latest Release',
    season: 4,
    category: 'offseason',
    featured: true,
    author: 'CCH Scouting Department',
    readTime: '6 min read',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Daugherty_versus_Wilkens_for_Franchise_Foundation.m4a',
    podcastInfo: {
      episodeTitle: 'Draft Special: Daugherty vs. Wilkens for Franchise Foundation',
      broadcastBy: 'CCH Draft War Room • Official Scouting Podcast',
      duration: 'Official Audio Breakdown',
      description: 'Exclusive scouting debate analyzing whether front offices should target perimeter scoring superstar Carlton Daugherty (#1) or defensive anchor Grok Wilkens (#4) at the top of the Season 4 Draft.',
    },
    headlineQuote: 'This is the deepest draft pool in Cali Championship Hoops history. With nine California collegiate programs represented and game-changing talent across all five positions, franchise fortunes will pivot on draft night.',
    contentParagraphs: [
      'CALIFORNIA — The official Big Board for the upcoming Season 4 Cali Championship Hoops Draft has been finalized, featuring 44 verified prospects scouted across collegiate tournaments, international leagues, and high school circuits.',
      'THE TIER 1 TITANS: DAUGHERTY, SIRVEN, GOODEN, WILKENS, RUSH, BOOMER & GILMORE HEADLINE TOP BOARD\nAt the peak of the 2026 class sits Carlton Daugherty (SF, UC San Diego, 85 OVR), a three-level scoring wing with elite A+ perimeter shooting and lockdown on-ball defense. Daugherty is joined by French sharpshooter Stephan Sirven (SG, France, 84 OVR), Minnesota dynamic stretch big Dell Gooden (PF/C, 84 OVR), Kentucky 7-foot defensive powerhouse Grok Wilkens (C, 84 OVR), Louisiana-Monroe 6’6" jumbo point guard engine R.J. Rush (PG, 83 OVR), Wyoming high-octane offensive guard Lloyd Boomer (PG, 83 OVR), and Pacific stopper Damian Gilmore (SF/SG, 83 OVR).',
      'CALIFORNIA COLLEGIATE PIPELINE STANDS TALL\nNine local programs feature premier draft talent ready to make immediate professional impacts:\n• Carlton Daugherty (UC San Diego, #1 Rank, 85 OVR SF)\n• Damian Gilmore (Pacific, #7 Rank, 83 OVR SF/SG)\n• Carl Marks (Pacific, #8 Rank, 81 OVR PF/C)\n• Leo Bass (San Jose State, #10 Rank, 80 OVR C)\n• Robert Riley (Loyola Marymount, #13 Rank, 78 OVR SF)\n• Isaac Levingson (Santa Clara, #23 Rank, 75 OVR PF/C)\n• Rod Hammonds (San Francisco, #24 Rank, 75 OVR PF/SF)\n• Nelson Battle (Mt. San Jacinto JUCO, #34 Rank, 72 OVR PG/SG)\n• Frederick Lloyd (UC Davis, #38 Rank, 70 OVR PF/C)',
      'FRANCHISE BUILDING BLOCKS ACROSS ALL TIERS\nFrom lottery rim-protectors like Carl Marshall (Georgia, 80 OVR) and Latvian stretch big Tingus Atgusanas (Latvia, 80 OVR), down to sleeper playmakers and defensive stoppers throughout the mid and late rounds, every organization holds ammunition to transform their franchise trajectory.'
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'The talent pipeline coming into Season 4 is unprecedented. Fans and general managers will see players who can step onto the floor in Week 1 and alter the championship landscape.'
      },
      {
        speaker: 'R.J. Rush',
        title: '#5 Ranked Prospect • Louisiana-Monroe (83 OVR PG)',
        quote: 'Being a 6’6" point guard who can score at all three levels and run the entire offense gives me an edge. I am ready to step in and lead any team to playoff contention.'
      },
      {
        speaker: 'Carlton Daugherty',
        title: '#1 Ranked Prospect • UC San Diego (85 OVR SF)',
        quote: 'Staying in California and competing against the best players in the world is the ultimate dream. Whatever team calls my name is getting a competitor ready to win on day one.'
      }
    ],
    playerStats: [
      { player: 'Carlton Daugherty', team: 'UC San Diego', stat: '85 OVR • #1 Overall SF' },
      { player: 'Stephan Sirven', team: 'France', stat: '84 OVR • #2 Overall SG' },
      { player: 'Dell Gooden', team: 'Minnesota', stat: '84 OVR • #3 Overall PF/C' },
      { player: 'Grok Wilkens', team: 'Kentucky', stat: '84 OVR • #4 Overall C' },
      { player: 'R.J. Rush', team: 'Louisiana-Monroe', stat: '83 OVR • #5 Overall PG' },
      { player: 'Lloyd Boomer', team: 'Wyoming', stat: '83 OVR • #6 Overall PG' },
    ]
  },
  {
    id: 's4-head-coaches-introduction',
    title: 'Season 4 Head Coaches Unveiled: Continuity Meets High-Stakes Sideline Shakeups',
    subtitle: 'With four battle-tested championship tacticians returning and eight franchises debuting new sideline leadership, Cali Championship Hoops enters Season 4 with unprecedented tactical intrigue across all 12 franchises.',
    date: 'Season 4 Offseason',
    season: 4,
    category: 'offseason',
    featured: true,
    author: 'Front-Office Insider',
    readTime: '5 min read',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Cali_Hoops_Season_4_Coaching_Shakeups.m4a',
    podcastInfo: {
      episodeTitle: 'Season 4 Coaching Shakeups & Sideline Carousel Special',
      broadcastBy: 'CCH Media Network • Front-Office Insider',
      duration: 'Official Audio Broadcast',
      description: 'Official audio breakdown discussing all 12 head coaches, tactical identities, the Underwood defection to the Sabrewolves, and coaching storylines entering Season 4.',
    },
    imageUrl: jacobUnderwoodImg,
    imageCaption: 'The Season 4 Head Coaching Class: 12 Leaders Setting the Course for Championship Glory',
    headlineQuote: 'The sideline chess match in Season 4 will be the fiercest in league history. Four enduring pillars defend their culture against eight fresh tacticians determined to reshape the championship hierarchy.',
    contentParagraphs: [
      'CALIFORNIA — As the dust settles on the wildest offseason in Cali Championship Hoops history, the league officially unveils the 12 head coaches who will command the sidelines for Season 4. Marked by blockbuster cross-town defections, coaching royalty returns, and ambitious new tacticians stepping into high-pressure roles, the tactical landscape has never been more competitive.',
      'THE RETURNING VANGUARD: FOUR STALWARTS OF CONTINUITY\nWhile the coaching carousel spun at dizzying speeds this summer, four franchises chose to double down on their proven masterminds:\n\n• Steve Porter (Anaheim Admirals, 4th Season): Entering his fourth consecutive season in Anaheim, Porter represents the gold standard of steady player development. Porter has built the Admirals around sharp perimeter ball movement, leading the league in free-throw efficiency and maximizing dead-eye shooter Kirk Tinsley.\n\n• William Walker (California Reds, 4th Season): The reigning 2-Time CCH Coach of the Year (Season 2 & Season 3) and Season 2 Champion. Walker transformed California from a 9-game losing streak in Season 1 into a back-to-back regular season juggernaut, orchestrating the superstar tandem of Lamar Anderson and defensive anchor Andor Marai.\n\n• Benjamin Nelson (Sacramento Stallions, 4th Season): The winningest coach in CCH history. With two championship rings (Season 1 & Season 3) and three consecutive Finals appearances, Nelson remains on the throne. Season 4 will test his tactical genius as he constructs a new offensive identity following the retirement of legendary Finals MVP Dorell Kabal.\n\n• Michael Stauffer (San Jose Tigersharks, 3rd Season): Entering his third year at the helm in San Jose after taking over in Season 2. Stauffer brought home the rivalry Platinum Cup and has established one of the league’s grittiest frontcourts centered around rookie phenom Dell Gooden and Donald Hardy.',
      'THE NEWCOMERS & HIGH-PROFILE SHAKEUPS: EIGHT SIDELINES REBORN\nEight organizations enter Season 4 under new direction, featuring veteran switches, beloved reunions, and high-energy newcomers:\n\n• Jacob Underwood (San Diego Sabrewolves): The biggest coaching defection in league history. After mentoring A.J. Hinton to the Season 3 MVP with the Strykers, Underwood crossed enemy lines to sign a monumental 4-year, $29.11M deal with the arch-rival Sabrewolves. Underwood now commands 56-point scoring king Kirk Barnes and DPOY Wes Taylor.\n\n• Adam Saunders (San Diego Strykers): Stepping directly into the fire in San Diego, Saunders takes the helm of a championship-ready Strykers roster hungry for redemption, boasting MVP A.J. Hinton, floor general Ray Gambino Gamble, and All-Cali forward DeAnte Gray.\n\n• Pooh Splitter (Los Angeles Dynamics): After three seasons guiding the Fresno Mad Dogs to the Season 3 Finals in an iconic Cinderella run, Splitter brings his hard-nosed defensive toughness down south to Los Angeles, taking over a perennial contender headlined by Mo Alexander and Jack McMichael Jr.\n\n• Stretch Roberts (Long Beach Vipers, 4th Season): The Season 1 Coach of the Year returns to the sidelines after taking a personal leave in Season 3. Roberts brings his infectious energy back to Long Beach to lead veteran forward J.C. McMillan and 7-foot rookie center Grok Wilkens.\n\n• Ronnie Flores (Fresno Mad Dogs): Handed the keys in Fresno following Splitter’s departure, Flores inherits a passionate underdog culture and looks to keep the Mad Dogs in title contention with an up-tempo transition engine led by rookie Lloyd Boomer.\n\n• Wyatt Zimmerman (Golden State Enterprise): Named head coach in the East Bay, Zimmerman brings modern pace-and-space philosophies designed to unlock #1 overall pick Carlton Daugherty, Jud Thompson, and veteran center Cameron Barkley.\n\n• Carson Goodwin (Oakland Renegades): Taking over in Oakland, Goodwin looks to unleash scoring machines Jamar Dean and Alonzo Reece in a high-octane offensive attack.\n\n• Zack Randle (San Francisco Knights): Charged with guiding the tactical Knights, Randle brings refined motion schemes tailored to dynamic rookie wing Damian Gilmore and former #1 pick Gheorghe Stefan.'
    ],
    quotes: [
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: 'Coaching in Cali Championship Hoops requires supreme tactical adaptability and mental fortitude. With four tenured legends and eight dynamic new leaders, Season 4 will showcase masterclasses on every sideline.'
      },
      {
        speaker: 'William Walker',
        title: 'Head Coach • California Reds (2x Coach of the Year)',
        quote: 'Continuity is our greatest weapon, but complacency is the ultimate trap. Every team in this league upgraded their sideline brainpower this offseason. We are ready for the challenge.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves',
        quote: 'A new chapter, a new city-wide standard. The Sabrewolves have all the pieces to hang banners, and we are going to dictate terms every single night.'
      }
    ],
    coachesList: [
      {
        name: 'Steve Porter',
        team: 'Anaheim Admirals',
        teamId: 'anaheim-admirals',
        status: 'Returning',
        tenure: '4th Season\n(Inaugural Head Coach)',
        tenureYears: '4th Season',
        tenureNote: '(Inaugural Head Coach)',
        photo: sPorterImg,
        background: 'Continuous sideline anchor for Anaheim since Day 1. Specialist in perimeter execution, free-throw efficiency (.804 FT%), and unlocking dynamic scorer Kirk Tinsley.',
        philosophy: 'Disciplined ball movement, spacing, and perimeter precision.'
      },
      {
        name: 'William Walker',
        team: 'California Reds',
        teamId: 'california-reds',
        status: 'Returning',
        tenure: '4th Season\n(Season 2 & 3 Coach of the Year)',
        tenureYears: '4th Season',
        tenureNote: '(Season 2 & 3 Coach of the Year)',
        photo: wWalkerImg,
        background: 'Architect of California’s historic Season 2 Championship and back-to-back 1st-place regular season finishes (18-4 in S2, 16-6 in S3). Master tactician alongside MVP Lamar Anderson.',
        philosophy: 'Unrelenting tempo, elite conditioning, and two-way dominance.'
      },
      {
        name: 'Benjamin Nelson',
        team: 'Sacramento Stallions',
        teamId: 'sacramento-stallions',
        status: 'Returning',
        tenure: '4th Season\n(2-Time CCH Champion: S1 & S3)',
        tenureYears: '4th Season',
        tenureNote: '(2-Time Champion: S1 & S3)',
        photo: bNelsonImg,
        background: 'The league’s most decorated coach, leading Sacramento to three straight CCH Finals and two titles. Now re-tooling the Stallions around George Madsen in the post-Kabal era.',
        philosophy: 'Championship culture, defensive poise, and situational clutch execution.'
      },
      {
        name: 'Michael Stauffer',
        team: 'San Jose Tigersharks',
        teamId: 'san-jose-tigersharks',
        status: 'Returning',
        tenure: '3rd Season\n(Took over in Season 2)',
        tenureYears: '3rd Season',
        tenureNote: '(Took over in Season 2)',
        photo: mStaufferImg,
        background: 'Enters his 3rd year steering San Jose after transforming the team’s interior grit. Captured the Platinum Cup and pairs rookie #3 pick Dell Gooden alongside Donald Hardy.',
        philosophy: 'Physical interior defense, dominant rebounding, and high-effort transition.'
      },
      {
        name: 'Ronnie Flores',
        team: 'Fresno Mad Dogs',
        teamId: 'fresno-mad-dogs',
        status: 'Newcomer',
        tenure: '1st Season in Fresno\n(New Head Coach)',
        tenureYears: '1st Season in Fresno',
        tenureNote: '(New Head Coach)',
        photo: rFloresImg,
        background: 'Takes the reins in Fresno following the Mad Dogs’ historic Season 3 Cinderella Finals run. Brings intense defensive pressure and fast-break schemes to empower rookie point guard Lloyd Boomer and forward Carson Graham.',
        philosophy: 'Relentless underdog energy, full-court pressure, and aggressive paint attacking.'
      },
      {
        name: 'Wyatt Zimmerman',
        team: 'Golden State Enterprise',
        teamId: 'golden-state-enterprise',
        status: 'Newcomer',
        tenure: '1st Season in Golden State\n(New Head Coach)',
        tenureYears: '1st Season in Golden State',
        tenureNote: '(New Head Coach)',
        photo: wZimmermanImg,
        background: 'Appointed to re-energize Golden State. Focuses on modern pace-and-space sets, capitalizing on #1 overall pick Carlton Daugherty, Jud Thompson, and veteran center Cameron Barkley.',
        philosophy: 'Five-out spacing, rapid ball rotation, and analytical shot selection.'
      },
      {
        name: 'Stretch Roberts',
        team: 'Long Beach Vipers',
        teamId: 'long-beach-vipers',
        status: 'Newcomer',
        tenure: '4th Season\n(Returned after S3 leave / S1 Coach of the Year)',
        tenureYears: '4th Season in Long Beach',
        tenureNote: '(Returned after S3 leave / S1 COTY)',
        photo: sRobertsImg,
        background: 'The charismatic Season 1 Coach of the Year triumphantly returns to the Vipers bench after taking a personal leave in Season 3. Now leads veteran forward J.C. McMillan and 7-foot rookie center Grok Wilkens.',
        philosophy: 'Empowering player confidence, high-octane tempo, and aggressive perimeter drives.'
      },
      {
        name: 'Pooh Splitter',
        team: 'Los Angeles Dynamics',
        teamId: 'los-angeles-dynamics',
        status: 'Newcomer',
        tenure: '1st Season in LA\n(Former Fresno HC, S1-S3)',
        tenureYears: '1st Season in LA',
        tenureNote: '(Former Fresno HC, S1-S3)',
        photo: pSplitterImg,
        background: 'The respected veteran makes a blockbuster move south to Los Angeles after three iconic seasons in Fresno. Pooh brings playoff grit to a star-studded Dynamics roster featuring Mo Alexander.',
        philosophy: 'Suffocating half-court defense, interior toughness, and disciplined execution.'
      },
      {
        name: 'Carson Goodwin',
        team: 'Oakland Renegades',
        teamId: 'oakland-renegades',
        status: 'Newcomer',
        tenure: '1st Season in Oakland\n(New Head Coach)',
        tenureYears: '1st Season in Oakland',
        tenureNote: '(New Head Coach)',
        photo: cGoodwinImg,
        background: 'Hired to steer Oakland’s explosive offense. Goodwin aims to unleash Jamar Dean and Alonzo Reece into the league’s top scoring attack.',
        philosophy: 'Fast-break transition, creative guard action, and perimeter aggression.'
      },
      {
        name: 'Zack Randle',
        team: 'San Francisco Knights',
        teamId: 'san-francisco-knights',
        status: 'Newcomer',
        tenure: '1st Season in San Francisco\n(New Head Coach)',
        tenureYears: '1st Season in San Francisco',
        tenureNote: '(New Head Coach)',
        photo: zRandleImg,
        background: 'Stepping in to lead the Knights, Randle brings a refined motion offense tailored around explosive rookie wing Damian Gilmore and former #1 overall pick Gheorghe Stefan.',
        philosophy: 'Motion basketball, pinpoint screening, and late-game tactical precision.'
      },
      {
        name: 'Jacob Underwood',
        team: 'San Diego Sabrewolves',
        teamId: 'san-diego-sabrewolves',
        status: 'Newcomer',
        tenure: '1st Season with Sabrewolves\n(Former Strykers HC, S2-S3)',
        tenureYears: '1st Season in San Diego (Wolves)',
        tenureNote: '(Former Strykers HC, S2-S3)',
        photo: jUnderwoodPhoto,
        background: 'Signed a record 4-year, $29.11M contract to jump across town to the Sabrewolves. Underwood pairs his offensive wizardry with scoring champion Kirk Barnes (56 pts) and DPOY Wes Taylor.',
        philosophy: 'Championship-level intensity, tailored isolation schemes, and elite defensive switching.'
      },
      {
        name: 'Adam Saunders',
        team: 'San Diego Strykers',
        teamId: 'san-diego-strykers',
        status: 'Newcomer',
        tenure: '1st Season with Strykers\n(New Head Coach)',
        tenureYears: '1st Season in San Diego (Strykers)',
        tenureNote: '(New Head Coach)',
        photo: aSaundersImg,
        background: 'Selected to lead the Strykers into a new era following Underwood’s departure. Entrusted with reigning MVP A.J. Hinton and All-Star point guard Ray Gambino Gamble to capture San Diego’s first crown.',
        philosophy: 'Up-tempo firepower, seamless backcourt synergy, and defensive resilience.'
      }
    ]
  },
  {
    id: 's4-underwood-defection',
    title: 'SHOCKWAVES IN SAN DIEGO: Underwood Defects to Arch-Rival Sabrewolves',
    subtitle: 'In the most stunning front-office defection in CCH history, head coach Jacob Underwood turns down a lucrative Strykers extension to sign a monumental 4-year, $29.11M deal with cross-town rival Sabrewolves.',
    date: 'Season 4 Offseason',
    season: 4,
    category: 'offseason',
    featured: false,
    author: 'League Wire • San Diego Beat',
    readTime: '3 min read',
    imageUrl: jacobUnderwoodImg,
    imageCaption: 'Head Coach Jacob Underwood Signs 4-Year, $29.11M Deal With San Diego Sabrewolves',
    teams: {
      team1: 'San Diego Sabrewolves',
      team1Id: 'san-diego-sabrewolves',
      team2: 'San Diego Strykers',
      team2Id: 'san-diego-strykers',
    },
    headlineQuote: 'When the cross-town Sabrewolves entered the picture with a blank check and a vision of defensive dominance, Underwood didn\'t just walk away—he crossed the deepest battle lines in the league.',
    contentParagraphs: [
      'SAN DIEGO, CA — The San Diego basketball landscape has been split wide open. In the most stunning front-office defection in Cali Championship Hoops history, head coach Jacob Underwood has turned down a lucrative contract extension with the San Diego Strykers to sign a monumental four-year, $29.11 million contract with their bitter cross-town rivals, the San Diego Sabrewolves.',
      'The move, finalized just hours into the Season 4 offseason, has sent shockwaves through the league and instantly turned the "Battle of San Diego" into a blood feud.',
      'The Decision That Rocked the Strykers\nUnderwood was widely expected to sign a long-term extension to remain the mastermind of the Strykers. Hired in Season 2 to replace Jake Thomas, Underwood immediately transformed the Strykers into an offensive juggernaut, culminating in a spectacular Season 3 campaign where superstar guard A.J. Hinton captured the league MVP award under his tutelage.',
      'Sources close to the Strykers organization reveal that negotiations for an extension had been ongoing for weeks. However, Underwood reportedly grew frustrated with the front office\'s hesitation to meet his valuation and their philosophical differences regarding future roster construction.',
      'When the cross-town Sabrewolves entered the picture with a blank check and a vision of defensive dominance, Underwood didn\'t just walk away—he crossed the deepest battle lines in the league.',
      'A Rivalry Redefined: Joining the Sabrewolves\nBy joining the Sabrewolves, Underwood takes the reins of a franchise known for its hard-nosed, suffocating defensive identity. Under former coach Milan Mack, the Sabrewolves consistently fielded elite defensive units, led by Season 3 Defensive Player of the Year Wes Taylor and interior anchor Andre Creek.',
      'The irony is thick: Underwood\'s new squad features single-game scoring king Kirk Barnes, who famously torched Underwood\'s Strykers for a league-record 56 points in February of Season 3. Now, the coach who spent nights trying to draw up defensive schemes to stop Barnes will be drawing up plays to unleash him.',
      'Betrayal on the Hardwood: How the Strykers Reacted\nThe reaction from the Strykers\' camp has been nothing short of volatile. Fans have taken to social media to voice their outrage, labeling Underwood a "traitor" for joining the team\'s primary rival.',
      'Strykers star and reigning MVP A.J. Hinton reportedly expressed "extreme disappointment and shock" upon hearing the news, having built a close relationship with Underwood over the past two seasons. The Strykers front office is now left in an incredibly vulnerable position: they have a championship-ready roster featuring Hinton and elite point guard Ray Gambino Gamble, but no head coach to guide them into Season 4.'
    ],
    quotes: [
      {
        speaker: 'A.J. Hinton',
        title: 'Reigning CCH MVP • San Diego Strykers',
        quote: 'Extreme disappointment and shock. We built something special here over two seasons and were ready to go all the way.'
      },
      {
        speaker: 'Jacob Underwood',
        title: 'Head Coach • San Diego Sabrewolves',
        quote: 'The vision presented by the Sabrewolves leadership aligns with my championship ambitions. I am ready for the next chapter in San Diego.'
      }
    ]
  },
  {
    id: 's3-championship-recap',
    title: 'Sacramento Stallions Claim Second CCH Title in 87-72 Finals Victory Over Fresno',
    subtitle: 'Finals MVP Dorell Kabal delivers a 25 PTS, 11 REB farewell performance on 78.6% FG alongside George Madsen’s 29 points to seal Sacramento’s dynasty status.',
    date: 'Season 3 Championship Night',
    season: 3,
    category: 'championship',
    featured: false,
    author: 'League Wire • Operations Sports Dynasty Beat',
    readTime: '4 min read',
    youtubeUrl: 'https://www.youtube.com/embed/3CFkc5G6EHM?si=0k2qFHmh1Z2vTP2Z',
    teams: {
      team1: 'Sacramento Stallions',
      team1Id: 'sacramento-stallions',
      score1: 87,
      team2: 'Fresno Mad Dogs',
      team2Id: 'fresno-mad-dogs',
      score2: 72,
    },
    headlineQuote: "To walk away with my second ring and Finals MVP trophy in my final career game is a storybook ending I could never have scripted better.",
    contentParagraphs: [
      "SACRAMENTO — In front of a raucous sellout crowd, the Sacramento Stallions captured their second CCH Championship in three seasons with a decisive 87-72 victory over the #8 seed Fresno Mad Dogs in the Season 3 Title Game.",
      "Led by legendary center Dorell Kabal, who announced his retirement following the contest, Sacramento cemented their legacy as the premier dynasty in Cali Championship Hoops history. Kabal dominated the paint with 25 points, 11 rebounds, and 3 blocks on 11-of-14 shooting (78.6% FG) in his final professional appearance.",
      "Co-star guard George Madsen provided lethal perimeter scoring, pouring in a game-high 29 points on 11-of-15 shooting, including 5-of-7 from three-point range.",
      "Guard Corie Ford added 14 points, while Lance Harrison dished out 7 assists to orchestrate Sacramento's second-half pull-away run.",
      "With the victory, Sacramento completes a 18-7 overall campaign, securing their second CCH Championship trophy (Season 1 and Season 3) after appearing in all three CCH Finals to date."
    ],
    quotes: [
      {
        speaker: 'Dorell Kabal',
        title: 'Season 3 Finals MVP • Sacramento Stallions',
        quote: "To walk away with my second ring and Finals MVP trophy in my final career game is a storybook ending I could never have scripted better."
      },
      {
        speaker: 'George Madsen',
        title: 'All-CCH Guard • Sacramento Stallions',
        quote: "Dorell set the standard for this entire organization from Day 1. Sending him off with a second banner on our home floor is the greatest feeling in basketball."
      },
      {
        speaker: 'Ray Lenearl',
        title: 'CCH Commissioner',
        quote: "Sacramento demonstrated elite poise throughout the postseason. Congratulations to coach, management, and fans on an unforgettable Season 3 finale."
      }
    ],
    playerStats: [
      { player: 'George Madsen', team: 'Sacramento Stallions', stat: '29 PTS, 4 AST, 5-7 3PT' },
      { player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '25 PTS, 11 REB, 3 BLK (11-14 FG)' },
      { player: 'Corie Ford', team: 'Sacramento Stallions', stat: '14 PTS, 3 AST' },
      { player: 'Lance Harrison', team: 'Sacramento Stallions', stat: '7 PTS, 7 AST, 2 STL' }
    ]
  },
  {
    id: 's3-podcast-special',
    title: 'SPECIAL BROADCAST: Kabal’s Final Ring & Underwood’s Defection Podcast Breakdown',
    subtitle: 'Listen to the official audio retrospective covering the Season 3 Championship, Dorell Kabal’s Hall-of-Fame retirement sendoff, and the seismic coaching shakeups heading into Season 4.',
    date: 'Season 3 Postseason Retrospective',
    season: 3,
    category: 'feature',
    featured: false,
    author: 'CCH Official Media Network',
    readTime: 'Audio Podcast • 4 min listen',
    audioUrl: 'https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a',
    podcastInfo: {
      episodeTitle: "Kabal's Final Ring & Underwood's Defection Breakdown",
      broadcastBy: 'CCH Dynasty Podcast • Sactown Media',
      duration: 'Championship Special • Official Audio',
      description: "Official postgame audio recap breaking down Dorell Kabal's Finals MVP retirement sendoff, Sacramento's second banner, and Jacob Underwood's cross-town coaching move.",
    },
    headlineQuote: "Inside the locker room moments, strategic adjustments, and offseason rumors that define the transition to Season 4.",
    contentParagraphs: [
      "In one of the most dramatic conclusions to a Cali Championship Hoops campaign, Season 3 closed with the Sacramento Stallions hoisting their second franchise title behind a 25-point, 11-rebound retirement masterpiece from Finals MVP Dorell Kabal.",
      "Beyond the on-court celebration, the aftermath unleashed an unprecedented coaching carousel. Former California Reds architect Jacob Underwood completed a shock defection to the San Diego Sabrewolves, setting off ripple effects that saw eight head coaching seats turn over.",
      "Stream the official audio podcast above to hear in-depth commentary on the tactical blueprints being completely reimagined across all 12 organizations."
    ]
  },
  {
    id: 's3-mvp-hinton-announcement',
    title: 'San Diego Strykers’ A.J. Hinton Named CCH Season 3 Most Valuable Player',
    subtitle: 'Perimeter scoring phenom captures league MVP honors averaging 21.1 PPG, topping Ray Gambino Gamble and Lamar Anderson in official voting.',
    date: 'Season 3 Awards Ceremony',
    season: 3,
    category: 'milestone',
    featured: false,
    author: 'CCH Awards Panel',
    readTime: '2 min read',
    headlineQuote: "A.J. Hinton delivered one of the most explosive offensive campaigns in CCH history.",
    contentParagraphs: [
      "SAN DIEGO — In official voting by league executives and media representatives, San Diego Strykers guard A.J. Hinton was named the Season 3 CCH Most Valuable Player.",
      "Hinton led the league in scoring efficiency and explosive perimeter production, averaging 21.1 points, 5.3 rebounds, 3.1 assists, and 1.1 steals per game.",
      "In final MVP voting, Hinton finished first ahead of San Diego guard Ray Gambino Gamble (18.1 PPG, 4.3 APG) and California Reds star Lamar Anderson (15.9 PPG, 4.8 APG)."
    ],
    playerStats: [
      { player: 'A.J. Hinton (1st MVP)', team: 'San Diego Strykers', stat: '21.1 PPG, 5.3 RPG, 3.1 APG' },
      { player: 'Ray Gambino Gamble (2nd MVP)', team: 'San Diego Strykers', stat: '18.1 PPG, 4.3 APG' },
      { player: 'Lamar Anderson (3rd MVP)', team: 'California Reds', stat: '15.9 PPG, 4.8 APG' }
    ]
  },
  {
    id: 's3-fresno-upset-recap',
    title: 'Quarterfinal Shockwave: #8 Seed Fresno Mad Dogs Stun #1 Seed California Reds 90-86',
    subtitle: 'The biggest upset in CCH postseason history sees Fresno oust the 16-6 regular season champions in a thrilling 90-86 clash.',
    date: 'Season 3 Quarterfinals',
    season: 3,
    category: 'recap',
    featured: false,
    author: 'League Wire',
    readTime: '3 min read',
    teams: {
      team1: 'Fresno Mad Dogs',
      team1Id: 'fresno-mad-dogs',
      score1: 90,
      team2: 'California Reds',
      team2Id: 'california-reds',
      score2: 86
    },
    headlineQuote: "Nobody outside our locker room gave us a chance against California. We played with heart and togetherness.",
    contentParagraphs: [
      "LOS ANGELES — In the biggest postseason upset in Cali Championship Hoops history, the #8 seed Fresno Mad Dogs defeated the top-seeded California Reds 90-86 in the Season 3 Quarterfinals.",
      "The Reds entered the playoffs as back-to-back regular season titles holders with a league-best 16-6 record under Coach of the Year William Walker and Executive of the Year Terry Hart.",
      "However, Fresno executed flawlessly down the stretch to pull off the 90-86 shocker, advancing to the Semifinals where they subsequently ousted Golden State Enterprise to earn a berth in the Season 3 CCH Finals."
    ]
  },
  {
    id: 's2-championship-reds-victory',
    title: 'California Reds Crowned Season 2 CCH Champions in 77-71 Triumph Over Sacramento',
    subtitle: 'Lamar Anderson claims Season 2 MVP & Finals MVP as California caps off a historic 18-4 campaign under Coach William Walker.',
    date: 'Season 2 Championship Night',
    season: 2,
    category: 'championship',
    featured: false,
    author: 'League Wire',
    readTime: '3 min read',
    teams: {
      team1: 'California Reds',
      team1Id: 'california-reds',
      score1: 77,
      team2: 'Sacramento Stallions',
      team2Id: 'sacramento-stallions',
      score2: 71
    },
    headlineQuote: "We redeemed ourselves after last year's playoff heartbreak. This trophy belongs to the entire California Reds family.",
    contentParagraphs: [
      "OAKLAND — Completing the greatest single-season turnaround in CCH history ('The Redemption Era'), the California Reds defeated the defending champion Sacramento Stallions 77-71 to capture the Season 2 CCH Championship.",
      "Under Coach of the Year William Walker, California compiled a league-record 18-4 regular season mark before powering through the postseason.",
      "Lamar Anderson earned both Season 2 League MVP and Finals MVP honors, scoring 26 points in the title game. Center Andor Marai, who won Season 2 Rookie of the Year after leading the league in steals (1.6 SPG), anchored the defense alongside veteran guard A.J. Cox."
    ],
    quotes: [
      {
        speaker: 'Lamar Anderson',
        title: 'Season 2 MVP & Finals MVP • California Reds',
        quote: "From an 11-11 record in Season 1 to 18-4 and a championship ring today—this team fought through every adversity to get here."
      },
      {
        speaker: 'William Walker',
        title: 'Season 2 Coach of the Year • California Reds',
        quote: "Our defensive intensity and unselfish execution defined our entire season. I couldn't be prouder of this group."
      }
    ],
    playerStats: [
      { player: 'Lamar Anderson', team: 'California Reds', stat: '26 PTS, 5 APG (Finals MVP)' },
      { player: 'Andor Marai', team: 'California Reds', stat: '12 PTS, 9 REB, 2 BLK' },
      { player: 'A.J. Cox', team: 'California Reds', stat: '11 PTS, 8 AST' }
    ]
  },
  {
    id: 's1-championship-stallions-first',
    title: 'Sacramento Stallions Make History as Inaugural CCH Champions in 86-81 Win',
    subtitle: 'League MVP Dorell Kabal and Coach Benjamin Nelson lead Sacramento to the first-ever CCH title over Golden State Enterprise.',
    date: 'Season 1 Championship Night',
    season: 1,
    category: 'championship',
    featured: false,
    author: 'League Wire',
    readTime: '3 min read',
    teams: {
      team1: 'Sacramento Stallions',
      team1Id: 'sacramento-stallions',
      score1: 86,
      team2: 'Golden State Enterprise',
      team2Id: 'golden-state-enterprise',
      score2: 81
    },
    headlineQuote: "To be the very first champions of Cali Championship Hoops is a badge of honor we will wear forever.",
    contentParagraphs: [
      "SACRAMENTO — The Sacramento Stallions officially etched their name into state basketball history by winning the Season 1 CCH Championship with an 86-81 victory over Golden State Enterprise.",
      "After finishing with a league-best 17-5 regular season record, Sacramento stormed through the inaugural playoffs, defeating Anaheim 91-79 in the Quarterfinals and San Francisco 99-96 in the Semifinals.",
      "Dominant center Dorell Kabal, who posted a historic .810 field goal percentage during the regular season, took home both Season 1 League MVP and Finals MVP trophies, while Benjamin Nelson earned Coach of the Year honors."
    ],
    quotes: [
      {
        speaker: 'Dorell Kabal',
        title: 'Season 1 MVP & Finals MVP • Sacramento Stallions',
        quote: "We set out to establish a standard of excellence from Day 1. Bringing the first trophy home to Sacramento is a dream come true."
      }
    ],
    playerStats: [
      { player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '18.5 PPG, 9.4 RPG, .810 FG%' },
      { player: 'Frank Hackett', team: 'Sacramento Stallions', stat: '14.1 PPG, 5.2 RPG' }
    ]
  },
  {
    id: 's1-trade-anderson-blockbuster',
    title: 'The Blueprint for a Championship: Inside the Lamar Anderson Blockbuster Trade',
    subtitle: 'How the California Reds acquired the #1 overall pick from Fresno, setting the foundation for Season 2 glory.',
    date: 'Season 1 Trade Analysis',
    season: 1,
    category: 'offseason',
    featured: false,
    author: 'CCH Trade Insider',
    readTime: '3 min read',
    headlineQuote: "Landed Lamar Anderson in California—the trade that reshaped the competitive landscape of CCH.",
    contentParagraphs: [
      "LOS ANGELES — In what is universally recognized as the most consequential deal in CCH history, the California Reds pulled off a multi-stage blockbuster during Season 1 to acquire superstar guard Lamar Anderson from the Fresno Mad Dogs.",
      "Selected #1 overall in the inaugural CCH Draft by Fresno, Anderson was traded to California alongside center Dell Nelson in exchange for center Cameron Barkley and a Top-5 Protected Season 2 1st Round Draft Pick.",
      "Anderson went on to win the Season 1 Scoring Title (25.0 PPG) and 3-Point Contest before orchestrating California's Season 2 Championship run."
    ]
  },
  {
    id: 's1-stallions-reds-ot-thriller',
    title: 'STALLIONS OUTLAST REDS 100-98 IN OVERTIME THRILLER',
    subtitle: "Coty Barry Carroll pours in 31 points and hits crucial overtime threes as Sacramento wins a high-scoring 100-98 instant classic over California.",
    date: 'Season 1 • Dec 11',
    season: 1,
    category: 'recap',
    featured: false,
    author: 'Chloe Summers • Cali Championship Hoops Correspondent',
    readTime: '3 min read',
    teams: {
      team1: 'Sacramento Stallions',
      team1Id: 'sacramento-stallions',
      score1: 100,
      team2: 'California Reds',
      team2Id: 'california-reds',
      score2: 98
    },
    headlineQuote: "It was a battle out there tonight. The Reds are a tough team, but we stayed composed and executed when it mattered most.",
    contentParagraphs: [
      "SACRAMENTO, Calif. – The Sacramento Stallions (7-2) emerged victorious in a thrilling overtime clash against the California Reds (6-2), securing a narrow 100-98 win. Coty Barry Carroll's stellar performance, highlighted by 31 points and crucial three-pointers in overtime, proved decisive in the Stallions' hard-fought victory.",
      "The game was a back-and-forth affair, with neither team able to establish a significant lead. Martin McCloud led the charge for the Reds with an impressive 32-point outing, supported by A.J. Cox's 19 points. However, the Stallions' sharpshooting from beyond the arc, hitting 12 three-pointers as a team, ultimately made the difference.",
      "The game's turning point came in the waning moments of regulation, with the Stallions clinging to an 87-84 lead. Carroll, who had been instrumental all game, missed two crucial free throws, allowing Mo Parks of the Reds to sink a game-tying three-pointer, forcing the game into overtime.",
      "In the extra period, the Stallions maintained their composure, knocking down clutch free throws to secure the win. Dorell Kabal contributed a double-double with 27 points and 12 rebounds, while Jonathon Blount provided a spark off the bench with 11 points.",
      "Despite the loss, the Reds displayed resilience, connecting on 17 three-pointers and battling on the boards with nine offensive rebounds. The game was a showcase of high-level basketball, with both teams shooting over 60% from the field."
    ],
    quotes: [
      {
        speaker: 'Coty Barry Carroll',
        title: 'Sacramento Stallions Guard',
        quote: "It was a battle out there tonight. The Reds are a tough team, but we stayed composed and executed when it mattered most. I'm proud of how we came together as a team."
      },
      {
        speaker: 'Benjamin Nelson',
        title: 'Sacramento Stallions Head Coach',
        quote: "We knew it was going to be a tough game against a talented Reds team. Our guys showed a lot of heart and determination, especially in overtime. We executed our game plan and made big plays when we needed them."
      }
    ],
    playerStats: [
      { player: 'Martin McCloud', team: 'California Reds', stat: '32 PTS (17 3PM Team Total)' },
      { player: 'Coty Barry Carroll', team: 'Sacramento Stallions', stat: '31 PTS (Clutch OT 3PT)' },
      { player: 'Dorell Kabal', team: 'Sacramento Stallions', stat: '27 PTS, 12 REB' },
      { player: 'A.J. Cox', team: 'California Reds', stat: '19 PTS' },
      { player: 'Jonathon Blount', team: 'Sacramento Stallions', stat: '11 PTS (Off Bench)' }
    ]
  },
  {
    id: 's1-fresno-oakland-reece-43',
    title: "Mad Dogs Secure 1st Win, Reece's Record-Breaking Performance Not Enough for Renegades",
    subtitle: "In a 93-85 thriller at Oakland Arena, Fresno clinches its inaugural victory while Oakland's Alonzo Reece erupts for a CCH single-game record 43 points.",
    date: 'Season 1 • Dec 16',
    season: 1,
    category: 'recap',
    featured: false,
    author: 'Chloe Summers • Cali Championship Hoops Correspondent',
    readTime: '3 min read',
    teams: {
      team1: 'Fresno Mad Dogs',
      team1Id: 'fresno-mad-dogs',
      score1: 93,
      team2: 'Oakland Renegades',
      team2Id: 'oakland-renegades',
      score2: 85
    },
    headlineQuote: "I'd trade all 43 points for a win, but this is a night I'll never forget.",
    contentParagraphs: [
      "OAKLAND, CA – In a thrilling matchup, the Fresno Mad Dogs (1-6) clinched their inaugural victory, triumphing over the Oakland Renegades (3-4) in a 93-85 win at the packed Oakland Arena. The game featured a historic performance from Oakland's Alonzo Reece, who set a new Cali Championship Hoops single-game scoring record with an astounding 43 points.",
      "Reece was in the zone throughout the game, shooting 60% from the field, including 67% from beyond the arc. His 43-point outburst surpassed the previous record of 41 points set by Dorell Kabal of the Sacramento Stallions. Despite his remarkable display, Reece remained humble, stating, \"I'd trade all 43 points for a win, but this is a night I'll never forget.\"",
      "However, the Mad Dogs' victory was a team effort, with three players scoring in double figures. Lamar Anderson led the charge with 30 points on an efficient 57% shooting. Dell Nelson contributed 11 points and 6 rebounds, while Melvin Cassell added 13 points and nine boards. Fresno dominated the rebounding battle, outmuscling Oakland 32-20 and capitalizing with a 34-26 advantage in points in the paint.",
      "The Renegades displayed solid teamwork with 17 assists, but it wasn't enough to counter Fresno's balanced attack. Dakoulas Alexandris provided support with 15 points and six rebounds.",
      "\"This win means everything to our franchise and fans,\" expressed an emotional Anderson postgame. \"We've been working so hard, so to finally break through with this first victory is incredible. Hopefully, this is just the start of something special.\"",
      "While Alonzo Reece left his mark on the record books, the night belonged to the Mad Dogs. Fresno's collective effort proved decisive, overcoming Reece's exceptional performance and securing a milestone win for the franchise."
    ],
    quotes: [
      {
        speaker: 'Alonzo Reece',
        title: 'Oakland Renegades Guard',
        quote: "I'd trade all 43 points for a win, but this is a night I'll never forget."
      },
      {
        speaker: 'Lamar Anderson',
        title: 'Fresno Mad Dogs Guard',
        quote: "This win means everything to our franchise and fans. We've been working so hard, so to finally break through with this first victory is incredible. Hopefully, this is just the start of something special."
      }
    ],
    playerStats: [
      { player: 'Alonzo Reece', team: 'Oakland Renegades', stat: '43 PTS (CCH Record, 60% FG, 67% 3PT)' },
      { player: 'Lamar Anderson', team: 'Fresno Mad Dogs', stat: '30 PTS (57% FG)' },
      { player: 'Dakoulas Alexandris', team: 'Oakland Renegades', stat: '15 PTS, 6 REB, 17 Team AST' },
      { player: 'Melvin Cassell', team: 'Fresno Mad Dogs', stat: '13 PTS, 9 REB' },
      { player: 'Dell Nelson', team: 'Fresno Mad Dogs', stat: '11 PTS, 6 REB' }
    ]
  },
  {
    id: 's1-spencer-jenkins-trade',
    title: 'Breaking News: SD Strykers Trade Unhappy Spencer to Long Beach',
    subtitle: 'In the first player trade in league history, San Diego sends disgruntled forward Coby Spencer to Long Beach for power forward Earl Jenkins and a second-round pick.',
    date: 'Season 1 • Dec 18',
    season: 1,
    category: 'offseason',
    featured: false,
    author: 'Mindy Mason • CCH News Network',
    readTime: '3 min read',
    headlineQuote: "San Diego might have to move Coby Spencer who sources say isn't happy. Last thing you need is a cancer in the locker room. #CutYourLosses",
    contentParagraphs: [
      "SAN DIEGO — In a move that is sending shockwaves through Cali Championship Hoops, the San Diego Strykers have agreed to trade the disgruntled Coby Spencer to the Long Beach Vipers in exchange for power forward Earl Jenkins and an unprotected second-round draft pick.",
      "This deal represents the first player trade in the history of the league. But it's the circumstances surrounding Spencer's departure from San Diego that is garnering even more attention.",
      "Tensions had been rising with the 19-year-old Spencer, who sources say had grown unhappy with his situation and role under Strykers head coach Jake Thomas. Insider Mindy Mason was the first to drop the bombshell news on Twitter, stating: \"San Diego might have to move Coby Spencer who sources say isn't happy. Last thing you need is a cancer in the locker room. #CutYourLosses\"",
      "Despite putting up 8.3 points and 2.5 rebounds per game, Spencer's production was overshadowed by reports of his discontent and disruptive behavior behind the scenes. Rather than let the situation potentially become an even bigger distraction and divide the locker room, San Diego made the difficult decision to cut ties via trade.",
      "The Long Beach Vipers are taking a calculated gamble that a change of scenery could be Spencer's wake-up call to regain his motivation and harness his immense talent on the court. But if the attitude issues persist, they surrendered very little asset-wise to acquire the young forward.",
      "This historic first trade has rocked the Cali Championship Hoops world and could have long-lasting ripple effects across the league. Both franchises are banking that this deal will improve their respective chemistry and trajectories moving forward. All eyes will be on Spencer and how he responds after this wake-up call trade. One thing is certain - this unprecedented deal has added a compelling new layer of drama to the inaugural season.",
      "Jenkins heads to San Diego averaging 6.0 points and 2.8 rebounds per game. The Strykers and Vipers are scheduled to face off on December 23rd."
    ],
    quotes: [
      {
        speaker: 'Mindy Mason',
        title: 'League Insider',
        quote: "San Diego might have to move Coby Spencer who sources say isn't happy. Last thing you need is a cancer in the locker room. #CutYourLosses"
      }
    ],
    playerStats: [
      { player: 'Coby Spencer', team: 'Traded to Long Beach Vipers', stat: '8.3 PPG, 2.5 RPG' },
      { player: 'Earl Jenkins', team: 'Traded to San Diego Strykers', stat: '6.0 PPG, 2.8 RPG' },
      { player: 'Draft Pick', team: 'Traded to Long Beach Vipers', stat: 'Unprotected 2nd-Round Pick' }
    ]
  },
  {
    id: 's1-playoff-first-game-gse-lb',
    title: '#6 Golden State 94, #3 Long Beach 90: Enterprise Upset Vipers in First-Ever Playoff Game',
    subtitle: 'Golden State pulls off a minor upset over Long Beach behind Howie Carney\'s 24 points and Adin Durmanenko\'s 21 in the inaugural CCH postseason clash.',
    date: 'Season 1 Postseason • Mar 20',
    season: 1,
    category: 'recap',
    featured: false,
    author: 'Chloe Summers • CCH Postseason Correspondent',
    readTime: '2 min read',
    teams: {
      team1: 'Golden State Enterprise',
      team1Id: 'golden-state-enterprise',
      score1: 94,
      team2: 'Long Beach Vipers',
      team2Id: 'long-beach-vipers',
      score2: 90
    },
    headlineQuote: 'In the first-ever playoff game in league history, the Golden State Enterprise (12-11) pulled off a minor upset over the higher-seeded Long Beach Vipers (13-10).',
    contentParagraphs: [
      "In the first-ever playoff game in league history, the Golden State Enterprise (12-11) pulled off a minor upset over the higher-seeded Long Beach Vipers (13-10). The Enterprise rode a balanced scoring onslaught, with Howie Carney leading the way with 24 points on a scorching 4-of-6 shooting display from beyond the arc. Adin Durmanenko provided valuable support, tallying 21 points and hauling down five rebounds, while Melvin Cassell chipped in 13 points and four boards.",
      "For the Vipers, Eugene Simon turned in a solid performance with 19 points and eight rebounds, but lacked sufficient support from his teammates. A.J. Hinton scored 18 points, while Randall Reynolds contributed 11 points off the bench, but it wasn't enough to overcome the Enterprise's offensive barrage."
    ],
    quotes: [
      {
        speaker: 'Chloe Summers',
        title: 'CCH Postseason Correspondent',
        quote: "The Enterprise rode a balanced scoring onslaught in the first-ever playoff game in league history."
      }
    ],
    playerStats: [
      { player: 'Howie Carney', team: 'Golden State Enterprise', stat: '24 PTS (4-6 3PT)' },
      { player: 'Adin Durmanenko', team: 'Golden State Enterprise', stat: '21 PTS, 5 REB' },
      { player: 'Eugene Simon', team: 'Long Beach Vipers', stat: '19 PTS, 8 REB' },
      { player: 'A.J. Hinton', team: 'Long Beach Vipers', stat: '18 PTS' },
      { player: 'Melvin Cassell', team: 'Golden State Enterprise', stat: '13 PTS, 4 REB' },
      { player: 'Randall Reynolds', team: 'Long Beach Vipers', stat: '11 PTS (Off Bench)' }
    ]
  },
  {
    id: INAUGURAL_GAME_ARTICLE.id,
    title: INAUGURAL_GAME_ARTICLE.title,
    subtitle: INAUGURAL_GAME_ARTICLE.subtitle,
    date: INAUGURAL_GAME_ARTICLE.date,
    season: 1,
    category: 'milestone',
    featured: false,
    author: 'CCH League Archives',
    readTime: '3 min read',
    teams: {
      team1: INAUGURAL_GAME_ARTICLE.teams.team1,
      team1Id: 'california-reds',
      score1: INAUGURAL_GAME_ARTICLE.teams.score1,
      team2: INAUGURAL_GAME_ARTICLE.teams.team2,
      team2Id: 'san-diego-sabrewolves',
      score2: INAUGURAL_GAME_ARTICLE.teams.score2
    },
    headlineQuote: INAUGURAL_GAME_ARTICLE.headlineQuote,
    contentParagraphs: INAUGURAL_GAME_ARTICLE.contentParagraphs,
    quotes: INAUGURAL_GAME_ARTICLE.quotes,
    playerStats: INAUGURAL_GAME_ARTICLE.playerStats
  },
  {
    id: GALLOWAY_BUZZER_BEATER_ARTICLE.id,
    title: GALLOWAY_BUZZER_BEATER_ARTICLE.title,
    subtitle: GALLOWAY_BUZZER_BEATER_ARTICLE.subtitle,
    date: GALLOWAY_BUZZER_BEATER_ARTICLE.date,
    season: 1,
    category: 'milestone',
    featured: false,
    author: 'CCH League Archives',
    readTime: '3 min read',
    imageUrl: jGallowayImg,
    imageCaption: 'Johnny Galloway (San Francisco Knights) delivers legendary beyond-half-court game-winner in Season 1.',
    instagramUrl: GALLOWAY_BUZZER_BEATER_ARTICLE.instagramUrl,
    instagramEmbedUrl: GALLOWAY_BUZZER_BEATER_ARTICLE.instagramEmbedUrl,
    teams: {
      team1: GALLOWAY_BUZZER_BEATER_ARTICLE.teams.team1,
      team1Id: 'san-francisco-knights',
      score1: GALLOWAY_BUZZER_BEATER_ARTICLE.teams.score1,
      team2: GALLOWAY_BUZZER_BEATER_ARTICLE.teams.team2,
      team2Id: 'san-diego-sabrewolves',
      score2: GALLOWAY_BUZZER_BEATER_ARTICLE.teams.score2
    },
    headlineQuote: GALLOWAY_BUZZER_BEATER_ARTICLE.headlineQuote,
    contentParagraphs: GALLOWAY_BUZZER_BEATER_ARTICLE.contentParagraphs,
    quotes: GALLOWAY_BUZZER_BEATER_ARTICLE.quotes,
    playerStats: GALLOWAY_BUZZER_BEATER_ARTICLE.playerStats
  }
];

// Helper to look up team by name
function findTeamByName(name: string) {
  const lower = name.toLowerCase().trim();
  return TEAMS.find(
    (t) =>
      t.name.toLowerCase() === lower ||
      t.shortName.toLowerCase() === lower ||
      lower.includes(t.shortName.toLowerCase()) ||
      (lower.includes('reds') && t.id === 'california-reds') ||
      (lower.includes('sabrewolves') && t.id === 'san-diego-sabrewolves') ||
      (lower.includes('knights') && t.id === 'san-francisco-knights') ||
      (lower.includes('strykers') && t.id === 'san-diego-strykers') ||
      (lower.includes('stallions') && t.id === 'sacramento-stallions') ||
      (lower.includes('dynamics') && t.id === 'los-angeles-dynamics') ||
      (lower.includes('enterprise') && t.id === 'golden-state-enterprise') ||
      (lower.includes('renegades') && t.id === 'oakland-renegades') ||
      (lower.includes('tigersharks') && t.id === 'san-jose-tigersharks') ||
      (lower.includes('admirals') && t.id === 'anaheim-admirals') ||
      (lower.includes('vipers') && t.id === 'long-beach-vipers') ||
      (lower.includes('mad dogs') && t.id === 'fresno-mad-dogs')
  );
}

function generateQuarterScoresForGame(s1: number, s2: number): QuarterScore[] {
  if (s1 === 0 && s2 === 0) return [];
  const q1_1 = Math.round(s1 * 0.24);
  const q2_1 = Math.round(s1 * 0.26);
  const q3_1 = Math.round(s1 * 0.25);
  const q4_1 = s1 - (q1_1 + q2_1 + q3_1);

  const q1_2 = Math.round(s2 * 0.25);
  const q2_2 = Math.round(s2 * 0.24);
  const q3_2 = Math.round(s2 * 0.26);
  const q4_2 = s2 - (q1_2 + q2_2 + q3_2);

  return [
    { period: 'Q1', team1: q1_1, team2: q1_2 },
    { period: 'Q2', team1: q2_1, team2: q2_2 },
    { period: 'Q3', team1: q3_1, team2: q3_2 },
    { period: 'Q4', team1: q4_1, team2: q4_2 },
  ];
}

// Synthesize a full CCH News Article for any game in the archives
export function generateArticleForGameRecord(game: GameRecord, isPlayoff = false): CCHNewsArticle {
  const team1Obj = findTeamByName(game.team1);
  const team2Obj = findTeamByName(game.team2);
  const isPlayed = game.score1 > 0 || game.score2 > 0;
  const isTeam1Winner = isPlayed && game.score1 >= game.score2;
  const winner = isTeam1Winner ? game.team1 : game.team2;
  const loser = isTeam1Winner ? game.team2 : game.team1;
  const winningScore = isTeam1Winner ? game.score1 : game.score2;
  const losingScore = isTeam1Winner ? game.score2 : game.score1;
  const margin = winningScore - losingScore;

  const winnerObj = isTeam1Winner ? team1Obj : team2Obj;
  const loserObj = isTeam1Winner ? team2Obj : team1Obj;

  const isFinals = isPlayoff && (game.date.includes('FINALS') || game.date.includes('Finals'));
  const isSemifinals = isPlayoff && (game.date.includes('Semis') || game.date.includes('Title') || game.date.includes('Semifinals'));

  // Title calculation
  let title = '';
  if (!isPlayed) {
    title = `Season ${game.season} Matchup Preview: ${game.team1} vs. ${game.team2}`;
  } else if (isFinals) {
    title = `${winner} Defeats ${loser} ${winningScore}-${losingScore} to Win Season ${game.season} Championship`;
  } else if (isPlayoff) {
    title = `${winner} Advances to Next Round with ${winningScore}-${losingScore} Playoff Victory Over ${loser}`;
  } else if (margin >= 20) {
    title = `${winner} Runs Away With ${winningScore}-${losingScore} Blowout Over ${loser}`;
  } else if (margin <= 3) {
    title = `${winner} Holds Off ${loser} ${winningScore}-${losingScore} in Thrilling Wire-to-Wire Finish`;
  } else {
    title = `${winner} Pulls Away in Second Half for ${winningScore}-${losingScore} Win Over ${loser}`;
  }

  // Subtitle
  const subtitle = game.notes
    ? `${game.notes} — Official game recap and detailed boxscore analysis.`
    : isPlayed
    ? `${winner} claimed an important Season ${game.season} victory over ${loser} in front of an electric crowd.`
    : `Upcoming Season ${game.season} clash between ${game.team1} and ${game.team2} scheduled for ${game.date}.`;

  // Paragraphs
  const contentParagraphs: string[] = [];
  if (isPlayed) {
    contentParagraphs.push(
      `${winnerObj?.city || 'California'} – In a high-energy Season ${game.season} battle, the ${winner} earned a ${winningScore}-${losingScore} victory over the ${loser} on ${game.date}.`
    );

    if (game.notes) {
      contentParagraphs.push(
        `KEY MOMENTUM & HIGHLIGHTS:\n${game.notes}`
      );
    } else {
      contentParagraphs.push(
        `GAME FLOW & EXECUTION:\nThe ${winner} established control with sharp interior ball movement and relentless perimeter pressure. A critical scoring surge during the third and fourth quarters allowed ${winner} to build a commanding cushion that ${loser} could not overcome.`
      );
    }

    if (game.highScorer) {
      contentParagraphs.push(
        `STAR OF THE GAME:\n${game.highScorer} led all scorers with ${game.points ? `${game.points} points` : 'a game-defining performance'}, dominating the half-court sets and dictating the tempo from the opening tip.`
      );
    } else {
      contentParagraphs.push(
        `BALANCED SCORING EFFORT:\nThe ${winner} relied on balanced contribution across their roster, punishing defensive lapses and controlling second-chance points in the paint.`
      );
    }

    contentParagraphs.push(
      `LOOKING AHEAD:\nWith this result in the books, the ${winner} build valuable momentum in the CCH standings, while the ${loser} look to regroup and adjust defensive assignments ahead of their next regular season matchup.`
    );
  } else {
    contentParagraphs.push(
      `The Cali Championship Hoops season continues on ${game.date} with a marquee matchup featuring the ${game.team1} and ${game.team2}.`
    );
    contentParagraphs.push(
      `Both squads enter the contest looking to assert dominance in the conference standings and execute their tactical gameplans in high-leverage minutes.`
    );
  }

  // Coach quotes
  const quotes = isPlayed
    ? [
        {
          speaker: winnerObj?.coach || `${winner} Coaching Staff`,
          title: `Head Coach, ${winner}`,
          quote: `“Our guys bought into the defensive gameplan and executed on the break. When we share the basketball and push the pace, we're extremely tough to beat.”`,
        },
        {
          speaker: loserObj?.coach || `${loser} Coaching Staff`,
          title: `Head Coach, ${loser}`,
          quote: `“Credit to ${winner}, they capitalized on our mistakes and controlled the tempo. We have to clean up our turnovers and be more physical on the glass next game.”`,
        },
      ]
    : undefined;

  // Player stats
  const playerStats = game.highScorer
    ? [
        {
          player: game.highScorer,
          team: winner,
          stat: game.points ? `${game.points} PTS (Game High)` : 'Top Performer',
        },
      ]
    : undefined;

  return {
    id: game.recapArticleId || game.id,
    title,
    subtitle,
    date: `Season ${game.season} • ${game.date} ${isPlayoff ? 'Postseason' : 'Matchup'}`,
    season: (game.season as 1 | 2 | 3 | 4) || 4,
    category: isPlayoff ? 'championship' : 'recap',
    featured: false,
    author: 'CCH Game Recap Desk • Official Match Report',
    readTime: '2 min read',
    youtubeUrl: game.youtubeUrl,
    instagramUrl: game.instagramUrl,
    teams: {
      team1: game.team1,
      team1Id: team1Obj?.id || 'california-reds',
      score1: game.score1,
      team2: game.team2,
      team2Id: team2Obj?.id || 'long-beach-vipers',
      score2: game.score2,
    },
    quarterScores: generateQuarterScoresForGame(game.score1, game.score2),
    headlineQuote: game.notes || `${winner} claims ${winningScore}-${losingScore} victory over ${loser}.`,
    contentParagraphs,
    quotes,
    playerStats,
  };
}

// Master resolver to find any article or synthesize an authentic article for any game
export function getArticleById(articleId: string): CCHNewsArticle | undefined {
  if (!articleId) return undefined;

  // 1. Direct match in pre-written articles
  const exactMatch = CCH_NEWS_ARTICLES.find((a) => a.id === articleId);
  if (exactMatch) return exactMatch;

  // 2. Match against Season 4 schedule
  const s4Game = SEASON_4_SCHEDULE.find((g) => g.id === articleId || g.recapArticleId === articleId);
  if (s4Game) return generateArticleForGameRecord(s4Game, false);

  // 3. Match against Season 3 schedule
  const s3Game = SEASON_3_SCHEDULE.find((g) => g.id === articleId || g.recapArticleId === articleId);
  if (s3Game) return generateArticleForGameRecord(s3Game, false);

  // 4. Match against Season 2 schedule
  const s2Game = SEASON_2_SCHEDULE.find((g) => g.id === articleId || g.recapArticleId === articleId);
  if (s2Game) return generateArticleForGameRecord(s2Game, false);

  // 5. Match against Season 1 schedule
  const s1Game = SEASON_1_SCHEDULE.find((g) => g.id === articleId || g.recapArticleId === articleId);
  if (s1Game) return generateArticleForGameRecord(s1Game, false);

  // 6. Match against Playoff games
  for (const p of PLAYOFF_HISTORY) {
    for (let i = 0; i < p.quarterfinals.length; i++) {
      const qf = p.quarterfinals[i];
      const qfId = `po-${p.season}-qf-${i}`;
      if (qfId === articleId || qf.recapArticleId === articleId) {
        return generateArticleForGameRecord(
          {
            id: qfId,
            season: p.season,
            date: `S${p.season} QF`,
            month: 'Playoffs',
            team1: qf.team1,
            score1: qf.score1,
            team2: qf.team2,
            score2: qf.score2,
            notes: qf.notes || `Playoff Quarterfinals: ${qf.winner} advances.`,
            recapArticleId: qf.recapArticleId,
          },
          true
        );
      }
    }
    if (p.semifinals) {
      for (let i = 0; i < p.semifinals.length; i++) {
        const sf = p.semifinals[i];
        const sfId = `po-${p.season}-sf-${i}`;
        if (sfId === articleId || sf.recapArticleId === articleId) {
          return generateArticleForGameRecord(
            {
              id: sfId,
              season: p.season,
              date: `S${p.season} ${sf.round || 'Semis'}`,
              month: 'Playoffs',
              team1: sf.team1,
              score1: sf.score1,
              team2: sf.team2,
              score2: sf.score2,
              notes: sf.notes || `Playoff Semifinals: ${sf.winner} advances.`,
              recapArticleId: sf.recapArticleId,
            },
            true
          );
        }
      }
    }
    if (p.finals) {
      const finalsId = `po-${p.season}-finals`;
      if (finalsId === articleId || p.finals.recapArticleId === articleId) {
        return generateArticleForGameRecord(
          {
            id: finalsId,
            season: p.season,
            date: `S${p.season} FINALS 🏆`,
            month: 'Playoffs',
            team1: p.finals.team1,
            score1: p.finals.score1,
            team2: p.finals.team2,
            score2: p.finals.score2,
            notes: p.finals.notes || `Season ${p.season} CCH Champion: ${p.champion} (Finals MVP: ${p.finalsMvp}).`,
            recapArticleId: p.finals.recapArticleId,
          },
          true
        );
      }
    }
  }

  // 7. Check if composite ID e.g. game-s4-1 or game-s1-1
  if (articleId.startsWith('game-')) {
    const rawGameId = articleId.replace('game-', '');
    return getArticleById(rawGameId);
  }

  return undefined;
}

