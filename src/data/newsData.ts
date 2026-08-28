import { INAUGURAL_GAME_ARTICLE } from './leagueMilestonesData';
import rjRush1Img from '../assets/images/RJRush1.png';
import ajHinton99Img from '../assets/images/AJHinton99.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import carltonDaughertyImg from '../assets/images/S4 Draft/Carlton Daugherty.png';
import jacobUnderwoodImg from '../assets/images/JUnderwood.png';
import pognottiImg from '../assets/images/Pognotti.png';
import jGallowayImg from '../assets/images/JGalloway.png';
import hintonS4G1Img from '../assets/images/HintonS4G1.png';
import jamarDean1Img from '../assets/images/JamarDean1.png';
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
  youtubeUrl?: string;
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
      'HONORABLE MENTIONS:\n• A.J. Hinton (San Diego Strykers): Exploded for 30 points (8-11 3PT, 4 STL) against Anaheim in Game 6 and led San Diego to a league-best 2-0 start.\n• R.J. Rush (Los Angeles Dynamics): Smashed the all-time CCH single-game record with 14-of-14 free throws, scoring 33 points in a 77-55 rout of San Diego.\n• Lloyd Boomer (Fresno Mad Dogs): Poured in 25 points (6-6 FT) to guide Fresno\'s 59-53 fourth-quarter comeback over San Jose.'
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
      { player: 'A.J. Hinton (Hon. Mention)', team: 'San Diego Strykers', stat: '22.5 PPG, 3.5 RPG, 4.0 SPG, 8 3PM (30 PTS in G6) • 2-0 Record' },
      { player: 'R.J. Rush (Hon. Mention)', team: 'Los Angeles Dynamics', stat: '33.0 PPG, 2.0 BPG (CCH Record 14-14 FT) • 1-0 Record' },
      { player: 'Lloyd Boomer (Hon. Mention)', team: 'Fresno Mad Dogs', stat: '25.0 PPG, 4.0 RPG, 1.0 APG (6-6 FT) • 1-0 Record' }
    ]
  },
  {
    id: 's4-g6-hinton-strykers-rout-admirals',
    title: 'Hinton Erupts for 30 as Strykers Demolish Admirals, 85-43',
    subtitle: 'A 24-4 third-quarter blitz powers the San Diego Strykers to an 85-43 demolition of the Anaheim Admirals at Anaheim Arena as A.J. Hinton sinks 8 three-pointers.',
    date: 'Season 4 • Game 6 Recap (Oct 20)',
    season: 4,
    category: 'recap',
    featured: true,
    author: 'CCH Game Recap Desk • Anaheim Beat',
    readTime: '3 min read',
    imageUrl: ajHintonS4_1Img,
    imageCaption: 'A.J. Hinton caught fire from downtown, hitting 8 three-pointers on his way to 30 points, 4 steals, and 3 assists in San Diego\'s 85-43 blowout road victory over Anaheim.',
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
    date: 'Season 4 Opening Night • Game 5 Recap (Oct 17)',
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
    date: 'Season 4 Opening Night • Game 3 Recap',
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
    date: 'Season 4 Opening Night • Game 4 Recap',
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
      { player: 'Cameron Graham', team: 'Fresno Mad Dogs', stat: '8 PTS, 4 REB, 2 AST, 1 STL, 2-4 FG' },
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
    date: 'Season 4 Opening Night • Game 2 Recap',
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
    date: 'Season 4 Opening Night • Game 1 Recap',
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
      broadcastBy: 'CCH Media Network • Official Game 1 Recap Podcast',
      duration: 'Official Audio Podcast',
      description: 'Deep dive into Season 4 Game 1: Why the 53-35 final score masks a 33-point blowout, A.J. Hinton\'s lockdown defense, the explosive 25-6 third-quarter blitz, and what the Vipers must adjust going forward.',
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
        background: 'Takes the reins in Fresno following the Mad Dogs’ historic Season 3 Cinderella Finals run. Brings intense defensive pressure and fast-break schemes to empower rookie point guard Lloyd Boomer and forward Cameron Graham.',
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
  }
];
