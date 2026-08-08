import { INAUGURAL_GAME_ARTICLE } from './leagueMilestonesData';
import jacobUnderwoodImg from '../assets/images/JacobUnderwood.png';

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
    id: 's4-underwood-defection',
    title: 'SHOCKWAVES IN SAN DIEGO: Underwood Defects to Arch-Rival Sabrewolves',
    subtitle: 'In the most stunning front-office defection in CCH history, head coach Jacob Underwood turns down a lucrative Strykers extension to sign a monumental 4-year, $29.11M deal with cross-town rival Sabrewolves.',
    date: 'Season 4 Offseason',
    season: 4,
    category: 'offseason',
    featured: true,
    author: 'League Wire • San Diego Beat',
    readTime: '3 min read',
    imageUrl: jacobUnderwoodImg,
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
      'Strykers star and reigning MVP A.J. Hinton reportedly expressed "extreme disappointment and shock" upon hearing the news, having built a close relationship with Underwood over the past two seasons. The Strykers front office is now left in an incredibly vulnerable position: they have a championship-ready roster featuring Hinton and elite point guard Ray Gambino, but no head coach to guide them into Season 4.'
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
