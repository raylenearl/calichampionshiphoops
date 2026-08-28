export interface CCHMilestoneArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  season: 1 | 2 | 3;
  teams: { team1: string; score1: number; team2: string; score2: number };
  headlineQuote: string;
  contentParagraphs: string[];
  quotes: { speaker: string; title: string; quote: string }[];
  playerStats: { player: string; team: string; stat: string }[];
  highlights: string[];
  instagramUrl?: string;
  instagramEmbedUrl?: string;
}

export const INAUGURAL_GAME_ARTICLE: CCHMilestoneArticle = {
  id: 'inaugural-game-s1',
  title: 'Reds Triumph Over Sabrewolves in Inaugural Clash',
  subtitle: "The Historic First-Ever CCH Regular Season Game • California vs. SD Sabrewolves (Oct. 24, Season 1)",
  date: 'October 24, Season 1',
  season: 1,
  teams: {
    team1: 'California Reds',
    score1: 80,
    team2: 'San Diego Sabrewolves',
    score2: 74,
  },
  headlineQuote: "The atmosphere tonight was electric. It's a privilege to be part of this historic kickoff to our new league.",
  contentParagraphs: [
    "In a showdown marking the commencement of Cali Championship Hoops' inaugural season, the California Reds and the visiting San Diego Sabrewolves treated fans to a game filled with intensity, skill, and some league \"firsts.\"",
    "The stage was set as Donnell Nash of the Sabrewolves etched his name in the league's history books, delivering the first-ever basket with a two-point jump shot. However, the Reds responded with flair as Martin McCloud showcased precision with the league's first made three-pointer, setting the tone for an electrifying contest.",
    "The spotlight, however, shone brightly on Andre Creek, a first-round pick for the Sabrewolves. Creek wasted no time making his presence felt, amassing 20 points, 5 rebounds, and two blocks in his league debut.",
    "The Sabrewolves maintained a 39-38 lead at the half.",
    "The Reds showcased their shooting expertise, particularly from beyond the arc, where they finished shooting 50%.",
    "California emerged victorious with a final score of 80-74, securing the first win in the new league.",
  ],
  quotes: [
    {
      speaker: 'Ray Lenearl',
      title: 'CCH Commissioner',
      quote: "The atmosphere tonight was electric. It's a privilege to be part of this historic kickoff to our new league.",
    },
    {
      speaker: 'Martin McCloud',
      title: 'California Reds Guard',
      quote: "I just wanted to make my mark early on and contribute to the team's success. Scoring the first three-pointer in league history was special, and I will never forget it.",
    },
    {
      speaker: 'Andre Creek',
      title: 'San Diego Sabrewolves Forward',
      quote: "I've been working hard to get to this point, and it feels good to contribute to the team from the get-go. I hate to begin my career with a tough loss, but we'll keep building on this.",
    },
    {
      speaker: 'William Walker',
      title: 'California Reds Head Coach',
      quote: "Long-range shooting is a vital aspect of our game, and tonight, the players demonstrated their proficiency. If we can keep it up, it's a positive sign for us moving forward.",
    },
    {
      speaker: 'J.C. McMillan',
      title: 'California Reds Team Captain',
      quote: "It's an incredible feeling to secure the first win in our league's history. This is just the beginning, and we're excited for the journey ahead in Cali Championship Hoops.",
    },
  ],
  playerStats: [
    { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '20 points, 5 rebounds, 2 blocks' },
    { player: 'Mo Parks', team: 'California Reds', stat: '18 points, 2 rebounds, 1 assist' },
    { player: 'Martin McCloud', team: 'California Reds', stat: '16 points, 1 rebound, 1 assist' },
    { player: 'A.J. Cox', team: 'California Reds', stat: '15 points, 3 rebounds, 6 assists' },
    { player: 'J.C. McMillan', team: 'California Reds', stat: '10 points, 10 rebounds, 1 steal, 1 block' },
  ],
  highlights: [
    'First-Ever CCH Basket: Donnell Nash (San Diego Sabrewolves) - 2-point jump shot',
    'First-Ever CCH Three-Pointer: Martin McCloud (California Reds)',
    'First-Ever CCH Game Victory: California Reds (80-74 over SD Sabrewolves)',
    'First-Ever CCH Standout Debut: Andre Creek (20 PTS, 5 REB, 2 BLK)',
  ],
};

export const GALLOWAY_BUZZER_BEATER_ARTICLE: CCHMilestoneArticle = {
  id: 's1-galloway-miracle-buzzer-beater',
  title: 'Miracle at the Horn: Johnny Galloway Stuns Sabrewolves with Beyond-Half-Court Buzzer-Beater, 83-81',
  subtitle: 'Season 1 Classic • San Francisco Knights Forward Johnny Galloway Launches Unbelievable 65-Foot Game-Winner as Time Expires',
  date: 'December 1, Season 1',
  season: 1,
  teams: {
    team1: 'San Francisco Knights',
    score1: 83,
    team2: 'San Diego Sabrewolves',
    score2: 81,
  },
  headlineQuote: "As soon as it left my hand, it felt right on line. To see it bank through as the buzzer sounded was absolute pandemonium.",
  contentParagraphs: [
    "SAN FRANCISCO, CA — In what immediately became an iconic moment in Cali Championship Hoops lore, the San Francisco Knights defeated the San Diego Sabrewolves 83-81 on a jaw-dropping, beyond-half-court buzzer-beater by rookie forward Johnny Galloway.",
    "With the game deadlocked at 81-81 and only 1.8 seconds remaining on the clock after a furious Sabrewolves rally, San Francisco inbounded the ball deep in their backcourt. Galloway gathered the inbound pass, took two running strides, and launched a desperation heave from approximately 65 feet away.",
    "The ball sailed through the rafters of the arena, kissed off the glass, and splashed cleanly through the net as the final red lights illuminated the backboard, triggering wild pandemonium on the court as the Knights bench mobbed Galloway at center court.",
    "Munir Kassa led all scorers with 29 points for the Knights, while Galloway contributed clutch two-way play before delivering the most memorable game-winner in Season 1 history.",
    "The miraculous shot cemented Galloway's reputation as a fearless performer on the biggest stage and remains one of the most replayed viral highlights in CCH history across social media."
  ],
  quotes: [
    {
      speaker: 'Johnny Galloway',
      title: 'San Francisco Knights Forward',
      quote: "I just caught it, turned, and let it fly. As soon as it left my hand, it felt right on line. To see it bank through as the buzzer sounded was absolute pandemonium."
    },
    {
      speaker: 'Munir Kassa',
      title: 'San Francisco Knights Guard',
      quote: "That is the greatest shot I have ever witnessed in person. Johnny has that clutch gene, and tonight he gave our fans a memory that will last forever."
    },
    {
      speaker: 'Steve Porter',
      title: 'San Francisco Knights Head Coach',
      quote: "We drew up the quick touch, but Johnny made a legendary individual play. In this league, you play to the final tenth of a second."
    },
    {
      speaker: 'Ray Lenearl',
      title: 'CCH Commissioner',
      quote: "Moments like Johnny Galloway's half-court buzzer-beater define what Cali Championship Hoops is all about — raw passion, extraordinary skill, and unforgettable drama."
    }
  ],
  playerStats: [
    { player: 'Munir Kassa', team: 'San Francisco Knights', stat: '29 PTS, 4 AST, 3 REB, 2 STL' },
    { player: 'Johnny Galloway', team: 'San Francisco Knights', stat: '11 PTS, 7 REB, 2 BLK • Game-Winning 65-Foot Buzzer-Beater' },
    { player: 'Donnell Nash', team: 'San Diego Sabrewolves', stat: '22 PTS, 6 REB, 5 AST' },
    { player: 'Andre Creek', team: 'San Diego Sabrewolves', stat: '19 PTS, 8 REB, 2 BLK' }
  ],
  highlights: [
    'Season 1 Defining Moment: Johnny Galloway beyond-half-court buzzer-beater at the horn',
    'Final Score: San Francisco Knights 83, San Diego Sabrewolves 81',
    'Knights Top Scorer: Munir Kassa with 29 PTS',
    'Official Video: Shared on CCH Instagram (@cchoops2k)'
  ],
  instagramUrl: 'https://www.instagram.com/reel/C3lhWjKPTa3/',
  instagramEmbedUrl: 'https://www.instagram.com/reel/C3lhWjKPTa3/embed/'
};
