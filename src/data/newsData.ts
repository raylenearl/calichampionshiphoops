import { INAUGURAL_GAME_ARTICLE } from './leagueMilestonesData';

export interface CCHNewsArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  season: 1 | 2 | 3;
  category: 'recap' | 'offseason' | 'feature' | 'milestone' | 'championship';
  featured?: boolean;
  author: string;
  readTime: string;
  imageUrl?: string;
  teams?: {
    team1: string;
    team1Id: string;
    score1?: number;
    team2: string;
    team2Id: string;
    score2?: number;
  };
  headlineQuote?: string;
  contentParagraphs: string[];
  quotes?: { speaker: string; title: string; quote: string }[];
  playerStats?: { player: string; team: string; stat: string }[];
  audioUrl?: string;
}

export const CCH_NEWS_ARTICLES: CCHNewsArticle[] = [
  {
    id: 's3-championship-recap',
    title: 'Sacramento Stallions Claim Second CCH Title in 87-72 Finals Victory Over Fresno',
    subtitle: 'Finals MVP Dorell Kabal delivers a 25 PTS, 11 REB farewell performance on 78.6% FG alongside George Madsen’s 29 points to seal Sacramento’s dynasty status.',
    date: 'Season 3 Championship Night',
    season: 3,
    category: 'championship',
    featured: true,
    author: 'CCH League Wire • Operations Sports Dynasty Beat',
    readTime: '4 min read',
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
    title: 'SPECIAL REPORT: Kabal’s Final Ring & Underwood’s Defection Podcast Breakdown',
    subtitle: 'Listen to the official audio analysis covering the Season 3 Championship, Dorell Kabal’s hall-of-fame retirement, and coaching shockwaves.',
    date: 'Season 3 Postseason Special',
    season: 3,
    category: 'feature',
    featured: false,
    author: 'CCH Official Media Network',
    readTime: '15 min audio broadcast',
    audioUrl: 'https://dn601201.us.archive.org/0/items/cchoops2k/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a',
    headlineQuote: "Inside the locker room moments, strategic adjustments, and offseason rumors that will define Season 4.",
    contentParagraphs: [
      "Catch up on the official CCH Dynasty Podcast breaking down all the drama from Season 3 Postseason action.",
      "Topics include: Dorell Kabal's flawless farewell game, the key defensive schemes Sacramento used to neutralize Fresno's offense, and exclusive insider analysis regarding Jacob Underwood's coaching staff in San Diego.",
      "Stream the audio above or download the episode from the official CCH Archives."
    ]
  },
  {
    id: 's3-mvp-hinton-announcement',
    title: 'San Diego Strykers’ A.J. Hinton Named CCH Season 3 Most Valuable Player',
    subtitle: 'Perimeter scoring phenom captures league MVP honors averaging 21.1 PPG, topping Ray Gambino and Lamar Anderson in official voting.',
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
      "In final MVP voting, Hinton finished first ahead of San Diego guard Ray Gambino (18.1 PPG, 4.3 APG) and California Reds star Lamar Anderson (15.9 PPG, 4.8 APG)."
    ],
    playerStats: [
      { player: 'A.J. Hinton (1st MVP)', team: 'San Diego Strykers', stat: '21.1 PPG, 5.3 RPG, 3.1 APG' },
      { player: 'Ray Gambino (2nd MVP)', team: 'San Diego Strykers', stat: '18.1 PPG, 4.3 APG' },
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
    author: 'CCH League Wire',
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
    author: 'CCH League Wire',
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
    author: 'CCH League Wire',
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
