import { TeamSeasonRecap } from '../types';

export const TEAM_SEASON_RECAPS: Record<string, Record<number, TeamSeasonRecap>> = {
  'sacramento-stallions': {
    1: {
      teamId: 'sacramento-stallions',
      season: 1,
      headline: 'Inaugural Dominance & Season 1 Championship Trophy',
      summary: 'The Sacramento Stallions converted their league-best 17-5 regular season record into an unforgettable championship run. Anchored inside by 7-foot titan Dorell Kabal (.810 FG%) and fueled by clutch perimeter shooting from George Madsen, Sacramento dominated the inaugural CCH campaign. After cruising through the regular season as the #1 overall seed, the Stallions defeated Anaheim (91-79) and San Francisco (99-96) before holding off Golden State Enterprise 86-81 in the CCH Finals to capture the inaugural league title.',
      keyAccomplishments: [
        '17-5 Regular Season Record (#1 Seed in CCH)',
        'Season 1 CCH Postseason Champions (86-81 vs Golden State)',
        'League-leading defensive efficiency and interior paint scoring',
        'Dorell Kabal recorded historic .810 field goal percentage',
      ],
      seasonAwards: [
        'Dorell Kabal: Season 1 League MVP & Finals MVP',
        'Benjamin Nelson: Season 1 Coach of the Year',
      ],
      playoffFinish: 'Season 1 CCH Champions (Defeated Golden State 86-81)',
      topPlayers: [
        { name: 'Dorell Kabal', role: 'Titan Center (C)', statLine: '18.5 PPG, 9.4 RPG, .810 FG%' },
        { name: 'Frank Hackett', role: 'Versatile Forward (SF)', statLine: '14.1 PPG, 5.2 RPG' },
      ],
      keyWins: ['86-81 vs. Golden State (Finals)', '99-96 vs. SF Knights (Semis)', '91-79 vs. Anaheim (QF)'],
    },
    2: {
      teamId: 'sacramento-stallions',
      season: 2,
      headline: 'Northern California Conference Title & CCH Finals Return',
      summary: 'Entering Season 2 as defending champions, Sacramento produced a stellar 15-7 regular season to capture the #1 seed in Northern California. In the postseason, the Stallions dispatched San Francisco 69-57 and held off Oakland 79-76 to win the NorCal Championship Game. Their title defense culminated in an epic CCH Finals clash against the California Reds, where they fell 71-77 in a classic duel.',
      keyAccomplishments: [
        '15-7 Regular Season Record (#2 Overall, #1 NorCal Seed)',
        'Northern California Conference Postseason Champions',
        'Second consecutive CCH Finals appearance',
      ],
      seasonAwards: ['Dorell Kabal: All-Star Starter', 'George Madsen: All-Star Starter'],
      playoffFinish: 'Season 2 Postseason Runner-Up (Lost 71-77 vs California Reds)',
      topPlayers: [
        { name: 'Dorell Kabal', role: 'Center (C)', statLine: '17.8 PPG, 9.1 RPG, 2.2 BPG' },
        { name: 'George Madsen', role: 'Shooting Guard (SG)', statLine: '18.6 PPG, 4.0 APG' },
        { name: 'Frank Hackett', role: 'Small Forward (SF)', statLine: '15.0 PPG, 5.8 RPG' },
      ],
      keyWins: ['79-76 vs. Oakland (NorCal Title)', '69-57 vs. SF Knights (QF)'],
    },
    3: {
      teamId: 'sacramento-stallions',
      season: 3,
      headline: 'STALLIONS REIGN SUPREME: Two-Time CCH Champions & Dynasty Complete!',
      summary: 'The Sacramento Stallions captured their second CCH Championship in three seasons with a decisive 87-72 victory over the Cinderella Fresno Mad Dogs in the Season 3 Finals. Behind a masterful performance from Finals MVP Dorell Kabal, who announced his retirement postgame, Sacramento dominated the clincher. Kabal delivered 25 points, 11 rebounds, and 3 blocks on 11-of-14 shooting (78.6% FG), while George Madsen poured in 29 points (5-of-7 3PT). The Stallions finished 18-7 overall, cementing their place as the league’s first true dynasty.',
      keyAccomplishments: [
        'Season 3 CCH Champions (2-Time League Champions - S1 & S3)',
        '15-7 Regular Season (#2 Seed) & 18-7 Overall Postseason Record',
        '3 Consecutive CCH Finals Appearances (S1, S2, S3)',
        'Dorell Kabal Season 3 Finals MVP (25 PTS, 11 REB, 3 BLK 78.6% FG)',
        'George Madsen 29 PTS (11-15 FG, 5-7 3PT) in Championship Game',
      ],
      seasonAwards: [
        'Dorell Kabal: Season 3 Finals MVP',
        'Frank Hackett: All-Star Starter',
        'Trevor Floyd: All-Star Guard',
      ],
      playoffFinish: 'Season 3 CCH Champions (Defeated #8 Fresno Mad Dogs 87-72 in CCH Finals)',
      topPlayers: [
        { name: 'Dorell Kabal', role: 'Titan Center (C)', statLine: '25 PTS, 11 REB, 3 BLK (Finals MVP)' },
        { name: 'George Madsen', role: 'Shooting Guard (SG)', statLine: '29 PTS, 4 AST, 5 3PM (Finals)' },
        { name: 'Corie Ford', role: 'Guard (G)', statLine: '14 PTS, 3 AST (Finals)' },
        { name: 'Lance Harrison', role: 'Guard (G)', statLine: '7 PTS, 7 AST, 2 STL (Finals)' },
      ],
      keyWins: ['87-72 vs. Fresno Mad Dogs (Finals)', '88-72 vs. SD Sabrewolves (Semis)', '80-79 vs. SF Knights (QF)'],
    },
  },

  'california-reds': {
    1: {
      teamId: 'california-reds',
      season: 1,
      headline: 'The Lamar Anderson Explosion & The Infamous 9-Game Slump',
      summary: 'The Reds grabbed headlines by acquiring superstar guard Lamar Anderson via a blockbuster S1 trade with Fresno (who selected him #1 overall). Anderson set the league on fire, averaging 25.0 PPG to win the Scoring Title and 3PT Shootout. However, after a strong start, the Reds suffered an infamous 9-game losing streak at the tail end of the regular season, finishing 11-11 (#7 seed) before exiting in the Quarterfinals to LA Dynamics.',
      keyAccomplishments: [
        '11-11 Regular Season Record (#7 Seed)',
        'Acquired #1 Overall Pick Lamar Anderson in S1 Blockbuster Trade',
        'League-leading scoring average by a single player (25.0 PPG)',
      ],
      seasonAwards: [
        'Lamar Anderson: Season 1 Scoring Champion (25.0 PPG) & Offensive MVP',
        'Lamar Anderson: Season 1 3-Point Contest Champion',
      ],
      playoffFinish: 'Quarterfinals Exit (Lost 76-88 vs LA Dynamics)',
      topPlayers: [
        { name: 'Lamar Anderson', role: 'Franchise Guard (SG)', statLine: '25.0 PPG, 4.8 RPG, 5.2 APG' },
        { name: 'Terry Hart', role: 'Executive', statLine: 'Roster Architect' },
      ],
      keyWins: ['98-85 vs. LA Dynamics', '91-82 vs. Long Beach Vipers'],
    },
    2: {
      teamId: 'california-reds',
      season: 2,
      headline: 'Historic Turnaround & Season 2 CCH Championship',
      summary: 'In one of the greatest single-season turnarounds in sports history, the Reds engineered an 18-4 campaign under Coach William Walker—the most wins ever recorded in a CCH regular season. Led by League MVP Lamar Anderson, ROTY center Andor Marai, and point guard A.J. Cox, the Reds swept through Anaheim (83-63) and San Diego Strykers (70-61) before dethroning the Stallions 77-71 in the CCH Finals.',
      keyAccomplishments: [
        '18-4 Regular Season Record (All-Time CCH Win Record)',
        'Season 2 CCH Postseason Champions (77-71 vs Sacramento)',
        'Southern California Conference Champions',
      ],
      seasonAwards: [
        'Lamar Anderson: Season 2 League MVP, Finals MVP, All-Star MVP, Clutch POY',
        'Andor Marai: Season 2 Rookie of the Year',
        'William Walker: Season 2 Coach of the Year',
      ],
      playoffFinish: 'Season 2 CCH Champions (Defeated Sacramento Stallions 77-71)',
      topPlayers: [
        { name: 'Lamar Anderson', role: 'Shooting Guard (SG)', statLine: '24.2 PPG, 5.1 APG, 1.9 SPG' },
        { name: 'Andor Marai', role: 'Center (C)', statLine: '12.4 PPG, 8.2 RPG, 2.1 BPG' },
        { name: 'A.J. Cox', role: 'Point Guard (PG)', statLine: '10.5 PPG, 8.4 APG (Single-Game 15 AST)' },
      ],
      keyWins: ['77-71 vs. Sacramento (Finals)', '70-61 vs. Strykers (SoCal Title)', '83-63 vs. Anaheim (QF)'],
    },
    3: {
      teamId: 'california-reds',
      season: 3,
      headline: 'Top Overall Seed Back-to-Back & Quarterfinal Shockwave',
      summary: 'The Reds continued their regular season reign in Los Angeles, compiling a league-best 16-6 record to secure the #1 overall seed for the second consecutive year. However, the postseason brought unimaginable drama as the Reds were stunned 86-90 in the Quarterfinals by the #8 seed Fresno Mad Dogs in the biggest upset in league history.',
      keyAccomplishments: [
        '16-6 Regular Season Record (Top Overall Seed in CCH)',
        'Back-to-Back Regular Season League Titles',
        'Highest Team Bench Points & Assist Average',
      ],
      seasonAwards: [
        'Lamar Anderson: Season 3 Offensive Player of the Year',
        'William Walker: Season 3 Coach of the Year (Back-to-Back)',
        'Terry Hart: Season 3 Executive of the Year',
      ],
      playoffFinish: 'Quarterfinals Exit (Lost 86-90 vs #8 Fresno Mad Dogs)',
      topPlayers: [
        { name: 'Lamar Anderson', role: 'Shooting Guard (SG)', statLine: '23.8 PPG, 5.0 APG, 4.2 RPG' },
        { name: 'A.J. Cox', role: 'Point Guard (PG)', statLine: '11.2 PPG, 7.9 APG' },
        { name: 'Andor Marai', role: 'Center (C)', statLine: '11.8 PPG, 8.5 RPG' },
      ],
      keyWins: ['81-74 vs. Anaheim', '70-60 vs. Anaheim', '85-78 vs. LA Dynamics'],
    },
  },

  'los-angeles-dynamics': {
    1: {
      teamId: 'los-angeles-dynamics',
      season: 1,
      headline: 'The Defensive Titans Reach Inaugural CCH Finals',
      summary: 'Anchored by Defensive Player of the Year Jack McMichael Jr., the LA Dynamics established themselves as Southern California’s premier force in Season 1. Going 16-6 (#2 seed), the Dynamics ranked #1 in points allowed per game. They rolled past the California Reds 88-76 in the Quarterfinals before falling in a tight battle in the inaugural postseason.',
      keyAccomplishments: [
        '16-6 Regular Season Record (#2 Seed)',
        'Inaugural Postseason Finalist',
        'League-best scoring defense (74.2 PPG allowed)',
      ],
      seasonAwards: ['Jack McMichael Jr.: Season 1 Defensive Player of the Year'],
      playoffFinish: 'Season 1 Postseason Finalist / Semifinals',
      topPlayers: [
        { name: 'Jack McMichael Jr.', role: 'Forward/Center (PF/C)', statLine: '16.8 PPG, 10.1 RPG, 2.8 BPG' },
        { name: 'G. Mann', role: 'Combo Guard (G)', statLine: '15.4 PPG, 4.2 APG' },
      ],
      keyWins: ['88-76 vs. California Reds (QF)', '82-71 vs. Long Beach Vipers'],
    },
    2: {
      teamId: 'los-angeles-dynamics',
      season: 2,
      headline: 'Gritty 11-Win Season & Postseason Tiebreaker Heartbreak',
      summary: 'Despite compiling an 11-11 record in an ultra-stacked Southern California conference, the Dynamics were caught on the wrong side of the 4-team SoCal playoff filter in Season 2. Jack McMichael Jr. continued his dominant two-way play, keeping LA in top contention every night.',
      keyAccomplishments: [
        '11-11 Regular Season Record (7th Overall Rank)',
        'Top 3 Team Defensive Efficiency rating',
      ],
      seasonAwards: ['Jack McMichael Jr.: All-Star Selection'],
      playoffFinish: 'Missed Postseason (7th Rank - 11-11)',
      topPlayers: [
        { name: 'Jack McMichael Jr.', role: 'Forward (PF)', statLine: '17.2 PPG, 9.5 RPG, 2.2 BPG' },
        { name: 'G. Mann', role: 'Guard (SG)', statLine: '16.0 PPG, 4.0 APG' },
      ],
      keyWins: ['72-44 vs. Anaheim Admirals', '62-55 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'los-angeles-dynamics',
      season: 3,
      headline: '14-Win Resurgence & Historic 39-Point Blowout Victory',
      summary: 'The Dynamics surged back into elite status in Season 3, securing a 14-8 record and the #3 overall seed. LA’s season was highlighted by a record-shattering 91-52 victory over Anaheim (+39 points), the largest margin of victory in CCH history. In the postseason, LA fell 79-86 in a hard-fought Quarterfinal matchup against San Diego Sabrewolves.',
      keyAccomplishments: [
        '14-8 Regular Season Record (#3 Seed)',
        'Set CCH Record for Biggest Blowout Victory (+39 pts, 91-52 vs Anaheim)',
        'Top 3 Defensive Rating in CCH',
      ],
      seasonAwards: ['Jack McMichael Jr.: All-Star Starter'],
      playoffFinish: 'Quarterfinals Exit (Lost 79-86 vs San Diego Sabrewolves)',
      topPlayers: [
        { name: 'Jack McMichael Jr.', role: 'Forward (PF)', statLine: '18.1 PPG, 9.8 RPG, 2.4 BPG' },
        { name: 'G. Mann', role: 'Guard (SG)', statLine: '16.5 PPG, 4.5 APG' },
      ],
      keyWins: ['91-52 vs. Anaheim Admirals (Record +39)', '72-56 vs. Anaheim Admirals'],
    },
  },

  'san-diego-strykers': {
    1: {
      teamId: 'san-diego-strykers',
      season: 1,
      headline: 'Fast-Paced Foundations in San Diego',
      summary: 'The Strykers introduced an energetic, fast-break brand of basketball to San Diego in Season 1, finishing 9-13. While missing the inaugural postseason, the team laid the foundation for future contention behind emerging star forward A.J. Hinton and high-flying guard Ray Gambino.',
      keyAccomplishments: ['9-13 Regular Season Record', 'Top 3 team in fastbreak points'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (9th Rank - 9-13)',
      topPlayers: [
        { name: 'A.J. Hinton', role: 'Forward (SF)', statLine: '16.5 PPG, 7.2 RPG' },
        { name: 'Ray Gambino', role: 'Shooting Guard (SG)', statLine: '15.8 PPG, 3.2 APG' },
      ],
      keyWins: ['85-78 vs. Sacramento Stallions', '82-74 vs. Anaheim Admirals'],
    },
    2: {
      teamId: 'san-diego-strykers',
      season: 2,
      headline: '15-Win Surge & Southern Cali Championship Duel',
      summary: 'San Diego transformed into a title contender in Season 2, posting a 15-7 record (#3 Seed). Behind A.J. Hinton’s Defensive Player of the Year campaign, the Strykers defeated crosstown rival San Diego Sabrewolves 86-79 in the Southern Cali Semifinals before falling 61-70 to California Reds in the SoCal Title Game.',
      keyAccomplishments: [
        '15-7 Regular Season Record (#3 Seed)',
        'Southern California Postseason Finalist',
        'Defeated crosstown rival Sabrewolves 86-79 in Playoff Semifinals',
      ],
      seasonAwards: ['A.J. Hinton: Season 2 Defensive Player of the Year'],
      playoffFinish: 'Southern California Title Game (Lost 61-70 vs California Reds)',
      topPlayers: [
        { name: 'A.J. Hinton', role: 'Forward (SF)', statLine: '18.2 PPG, 8.5 RPG, 2.3 BPG' },
        { name: 'Ray Gambino', role: 'Guard (SG)', statLine: '17.0 PPG, 3.5 APG' },
      ],
      keyWins: ['86-79 vs. SD Sabrewolves (Semis)', '62-61 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'san-diego-strykers',
      season: 3,
      headline: 'MVP Season for A.J. Hinton & Semifinals Postseason Run',
      summary: 'The Strykers enjoyed a stellar Season 3 behind League MVP A.J. Hinton (21.1 PPG). Finishing 13-9 (#4 seed), San Diego launched an exciting playoff run. Ray Gambino erupted for 33 points in an 80-79 Quarterfinal thriller against Oakland, before San Diego fell 75-80 to the Cinderella #8 seed Fresno Mad Dogs in a hard-fought Semifinals clash.',
      keyAccomplishments: [
        '13-9 Regular Season Record (#4 Seed)',
        'Season 3 Postseason Semifinalists',
        'Ray Gambino dropped 33 PTS in 80-79 Quarterfinal thriller vs Oakland',
      ],
      seasonAwards: ['A.J. Hinton: Season 3 League MVP'],
      playoffFinish: 'Semifinals Exit (Lost 75-80 vs #8 Fresno Mad Dogs)',
      topPlayers: [
        { name: 'A.J. Hinton', role: 'Forward (SF)', statLine: '21.1 PPG, 5.3 RPG, 3.1 APG (League MVP)' },
        { name: 'Ray Gambino', role: 'Guard (SG)', statLine: '18.1 PPG, 4.3 APG' },
      ],
      keyWins: ['80-79 vs. Oakland Renegades (QF)', '85-58 vs. Anaheim Admirals'],
    },
  },

  'san-diego-sabrewolves': {
    1: {
      teamId: 'san-diego-sabrewolves',
      season: 1,
      headline: 'Inaugural Playoff Qualifier & 6th Man Honors',
      summary: 'The Sabrewolves put together a strong 12-10 campaign in Season 1 (#5 seed), powered by interior presence O.J. House and instant offense off the bench from B. Oakley, who earned the inaugural 6th Man of the Year award.',
      keyAccomplishments: ['12-10 Regular Season Record (#5 Seed)', 'Season 1 Playoff Qualifier'],
      seasonAwards: ['B. Oakley: Season 1 Sixth Man of the Year'],
      playoffFinish: 'Quarterfinals Exit (Lost 82-93 vs SF Knights)',
      topPlayers: [
        { name: 'O.J. House', role: 'Center (C)', statLine: '17.4 PPG, 8.1 RPG' },
        { name: 'B. Oakley', role: 'Guard (SG)', statLine: '14.2 PPG (Off Bench)' },
      ],
      keyWins: ['81-75 vs. LA Dynamics', '88-79 vs. Fresno Mad Dogs'],
    },
    2: {
      teamId: 'san-diego-sabrewolves',
      season: 2,
      headline: '15 Wins & Heated Crosstown Playoff Clash',
      summary: 'San Diego tied for the second-most wins in Southern California with a 15-7 record (#4 seed). Their postseason campaign featured a memorable battle in the San Diego derby against the Strykers.',
      keyAccomplishments: [
        '15-7 Regular Season Record (#4 Seed)',
        'Top team rebounding average in SoCal (38.4 RPG)',
      ],
      seasonAwards: ['O.J. House: All-Star Selection'],
      playoffFinish: 'Quarterfinals Exit (Lost 79-86 vs SD Strykers)',
      topPlayers: [
        { name: 'O.J. House', role: 'Center (C)', statLine: '18.0 PPG, 8.5 RPG' },
        { name: 'Kirk Barnes', role: 'Guard (SG)', statLine: '15.1 PPG, 3.9 APG' },
      ],
      keyWins: ['81-65 vs. Anaheim Admirals', '78-70 vs. LA Dynamics'],
    },
    3: {
      teamId: 'san-diego-sabrewolves',
      season: 3,
      headline: 'Quarterfinal Upset Shockwave over #3 LA Dynamics',
      summary: 'The Sabrewolves compiled a 12-10 regular season (#5 seed). In the postseason, Kirk Barnes poured in 25 points to pull off an 86-79 Quarterfinal upset over #3 LA Dynamics, advancing the Sabrewolves to the CCH Semifinals.',
      keyAccomplishments: [
        '12-10 Regular Season Record (#5 Seed)',
        'Upset #3 LA Dynamics 86-79 in Postseason Quarterfinals',
        'Reached Season 3 Postseason Semifinals',
      ],
      seasonAwards: ['Kirk Barnes: All-Star Guard'],
      playoffFinish: 'Semifinals Exit (Lost 72-88 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Kirk Barnes', role: 'Guard (SG)', statLine: '17.8 PPG, 4.5 APG' },
        { name: 'O.J. House', role: 'Center (C)', statLine: '16.5 PPG, 7.9 RPG' },
      ],
      keyWins: ['86-79 vs. LA Dynamics (QF)', '75-68 vs. SF Knights'],
    },
  },

  'long-beach-vipers': {
    1: {
      teamId: 'long-beach-vipers',
      season: 1,
      headline: 'Dominant Interior Defense & #3 Seed Finish',
      summary: 'Long Beach enjoyed a terrific inaugural regular season, going 13-9 (#3 seed). Behind Josh Parks’ paint dominance and D. Dudley’s perimeter play, the Vipers established themselves as a formidable contender before falling in a high-scoring Quarterfinal upset against Golden State.',
      keyAccomplishments: [
        '13-9 Regular Season Record (#3 Seed)',
        'Top 3 Scoring Defense in CCH',
        'Inaugural Postseason Berth',
      ],
      seasonAwards: ['Josh Parks: Rebounding & Paint Dominance Leader'],
      playoffFinish: 'Quarterfinals Exit (Lost 90-94 vs Golden State Enterprise)',
      topPlayers: [
        { name: 'Josh Parks', role: 'Center (C)', statLine: '16.2 PPG, 9.8 RPG' },
        { name: 'D. Dudley', role: 'Guard (SG)', statLine: '14.5 PPG, 3.4 APG' },
      ],
      keyWins: ['82-75 vs. Sacramento Stallions', '89-80 vs. California Reds'],
    },
    2: {
      teamId: 'long-beach-vipers',
      season: 2,
      headline: 'Rebuilding Road & Turnover Challenges',
      summary: 'Long Beach endured a tough 4-18 rebuilding season in Season 2, dealing with roster transitions and turnover issues while developing younger perimeter players for the future.',
      keyAccomplishments: ['4-18 Regular Season Record', 'Roster restructuring & youth development'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (12th Rank - 4-18)',
      topPlayers: [
        { name: 'D. Dudley', role: 'Guard (SG)', statLine: '15.0 PPG, 3.2 APG' },
        { name: 'Charlie Garnett', role: 'Guard (S2)', statLine: '12.4 PPG' },
      ],
      keyWins: ['72-65 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'long-beach-vipers',
      season: 3,
      headline: 'Gritty Defensive Progress & 8-Win Season',
      summary: 'The Vipers showed clear improvement in Season 3, doubling their win total to 8-14. Led by veteran guard D. Dudley, Long Beach re-established its hard-nosed physical identity.',
      keyAccomplishments: [
        '8-14 Regular Season Record (+4 win improvement from S2)',
        'Top 5 Defensive Field Goal % Allowed',
      ],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (10th Rank - 8-14)',
      topPlayers: [
        { name: 'D. Dudley', role: 'Guard (SG)', statLine: '16.8 PPG, 3.9 APG' },
      ],
      keyWins: ['58-47 vs. Anaheim Admirals', '60-43 vs. Fresno Mad Dogs'],
    },
  },

  'san-francisco-knights': {
    1: {
      teamId: 'san-francisco-knights',
      season: 1,
      headline: 'Munir Kassa’s Clutch Legacy & Semifinal Thriller',
      summary: 'San Francisco finished 12-10 (#4 seed) in Season 1. Spearheaded by Clutch Player of the Year Munir Kassa, the Knights beat Sabrewolves 93-82 in QF and pushed eventual champion Sacramento to the absolute limit in a 96-99 Semifinal thriller.',
      keyAccomplishments: [
        '12-10 Regular Season Record (#4 Seed)',
        'Reached CCH Postseason Semifinals',
        'Munir Kassa exploded for 32 PTS in Quarterfinal victory',
      ],
      seasonAwards: ['Munir Kassa: Season 1 Clutch Player of the Year'],
      playoffFinish: 'Semifinals Exit (Lost 96-99 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Munir Kassa', role: 'Point Guard (PG)', statLine: '18.9 PPG, 5.8 APG' },
        { name: 'S. Cook', role: 'Small Forward (SF)', statLine: '15.2 PPG, 4.8 RPG' },
      ],
      keyWins: ['93-82 vs. SD Sabrewolves (QF)', '84-78 vs. LA Dynamics'],
    },
    2: {
      teamId: 'san-francisco-knights',
      season: 2,
      headline: 'Playoff Qualification & Charlie Garnett’s 6th Man Trophy',
      summary: 'The Knights went 8-14 in Season 2, earning an 8-team playoff berth. Microwave scorer Charlie Garnett provided incredible bench punch, taking home 6th Man of the Year honors.',
      keyAccomplishments: [
        '8-14 Regular Season Record (Playoff Berth)',
        'Season 2 Sixth Man of the Year Award Winner',
      ],
      seasonAwards: ['Charlie Garnett: Season 2 Sixth Man of the Year'],
      playoffFinish: 'Quarterfinals Exit (Lost 57-69 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Charlie Garnett', role: 'Shooting Guard (SG)', statLine: '14.8 PPG (Off Bench)' },
        { name: 'Munir Kassa', role: 'Point Guard (PG)', statLine: '16.5 PPG, 5.0 APG' },
      ],
      keyWins: ['81-56 vs. Anaheim Admirals', '55-54 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'san-francisco-knights',
      season: 3,
      headline: '11-Win Rebound & 1-Point Quarterfinal Heartbreak',
      summary: 'The Knights bounced back with an 11-11 record (#7 seed) in Season 3. In the Quarterfinals, San Francisco pushed #2 seed Sacramento to the final buzzer, falling 79-80 in one of the most exciting games of the postseason.',
      keyAccomplishments: [
        '11-11 Regular Season Record (#7 Seed)',
        'Pushed #2 Stallions to 1-point finish in Postseason Quarterfinals',
      ],
      seasonAwards: ['Munir Kassa: All-Star Starter'],
      playoffFinish: 'Quarterfinals Exit (Lost 79-80 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Munir Kassa', role: 'Point Guard (PG)', statLine: '17.4 PPG, 6.2 APG' },
        { name: 'S. Cook', role: 'Small Forward (SF)', statLine: '14.9 PPG, 5.1 RPG' },
      ],
      keyWins: ['93-72 vs. Anaheim Admirals', '75-68 vs. San Jose Tigersharks'],
    },
  },

  'anaheim-admirals': {
    1: {
      teamId: 'anaheim-admirals',
      season: 1,
      headline: 'Snagging the Inaugural Postseason Ticket',
      summary: 'Anaheim finished 9-13 (#8 seed) in Season 1, earning a spot in the inaugural Cable Car Hoops playoffs behind sharpshooter Kirk Tinsley.',
      keyAccomplishments: ['9-13 Regular Season Record (#8 Seed)', 'Inaugural Playoff Qualifier'],
      seasonAwards: [],
      playoffFinish: 'Quarterfinals Exit (Lost 79-91 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Kirk Tinsley', role: 'Guard (SG)', statLine: '16.8 PPG, .485 3PT%' },
        { name: 'B. Oakley', role: 'Guard (PG)', statLine: '13.5 PPG' },
      ],
      keyWins: ['82-76 vs. California Reds', '78-72 vs. Long Beach Vipers'],
    },
    2: {
      teamId: 'anaheim-admirals',
      season: 2,
      headline: '12-Win Surge, 3PT % Title & Xavi Roach Most Improved Player',
      summary: 'Anaheim leaped to 12-10 (#6 seed) in Season 2. Kirk Tinsley posted an astonishing .626 3PT% to lead the league, while guard/forward Xavi Roach was crowned Most Improved Player for his breakout play.',
      keyAccomplishments: [
        '12-10 Regular Season Record (#6 Seed)',
        'Kirk Tinsley led CCH in 3PT % (.626 3PT%)',
        'Xavi Roach won Most Improved Player',
      ],
      seasonAwards: [
        'Xavi Roach: Season 2 Most Improved Player',
        'Kirk Tinsley: Season 2 3-Point % Leader (.626)',
      ],
      playoffFinish: 'Quarterfinals Exit (Lost 63-83 vs California Reds)',
      topPlayers: [
        { name: 'Kirk Tinsley', role: 'Guard (SG)', statLine: '18.4 PPG, .626 3PT%' },
        { name: 'Xavi Roach', role: 'Guard/Forward (G/F)', statLine: '15.2 PPG, 4.8 APG' },
      ],
      keyWins: ['78-76 vs. California Reds', '81-53 vs. Fresno Mad Dogs'],
    },
    3: {
      teamId: 'anaheim-admirals',
      season: 3,
      headline: 'Record-Breaking Perimeter Shooting by Kirk Tinsley',
      summary: 'Anaheim compiled an 8-14 record in Season 3. Highlights included Kirk Tinsley setting the CCH single-game record with 9 three-pointers against San Francisco.',
      keyAccomplishments: [
        '8-14 Regular Season Record',
        'Kirk Tinsley set CCH Single-Game 3PT Record (9 3PM)',
      ],
      seasonAwards: ['Kirk Tinsley: Single-Game 3PT Record Holder (9 3PM)'],
      playoffFinish: 'Missed Postseason (11th Rank - 8-14)',
      topPlayers: [
        { name: 'Kirk Tinsley', role: 'Guard (SG)', statLine: '19.1 PPG, .512 3PT%' },
        { name: 'Xavi Roach', role: 'Guard/Forward (G/F)', statLine: '14.8 PPG' },
      ],
      keyWins: ['86-73 vs. SD Strykers', '76-40 vs. SD Sabrewolves'],
    },
  },

  'oakland-renegades': {
    1: {
      teamId: 'oakland-renegades',
      season: 1,
      headline: 'High-Octane Fastbreak Offense in Oakland',
      summary: 'The Renegades went 7-15 in Season 1, treating fans to electric fastbreak scoring led by Alonzo Reece (21.4 PPG) and quick-handed guard Dakoulas Alexandris.',
      keyAccomplishments: ['7-15 Regular Season Record', 'Top 2 Fastbreak Scoring Team'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (11th Rank - 7-15)',
      topPlayers: [
        { name: 'Alonzo Reece', role: 'Scoring Guard (SG)', statLine: '21.4 PPG, 3.8 RPG' },
        { name: 'Dakoulas Alexandris', role: 'Point Guard (PG)', statLine: '13.8 PPG, 2.8 SPG' },
      ],
      keyWins: ['88-81 vs. San Jose Tigersharks', '82-76 vs. Fresno Mad Dogs'],
    },
    2: {
      teamId: 'oakland-renegades',
      season: 2,
      headline: '14-Win Surge, Scoring Title & NorCal Finalists',
      summary: 'Oakland vaulted to 14-8 (#5 seed) in Season 2. Alonzo Reece captured the Scoring Title, while Dakoulas Alexandris led the league in steals. Oakland beat Tigersharks 65-51 in QF before losing a 76-79 thriller in the NorCal Title Game.',
      keyAccomplishments: [
        '14-8 Regular Season Record (#5 Seed)',
        'Northern California Conference Postseason Finalist',
        'Alonzo Reece captured League Scoring Title',
      ],
      seasonAwards: [
        'Alonzo Reece: Season 2 Scoring Champion',
        'Dakoulas Alexandris: Season 2 Steals Leader',
      ],
      playoffFinish: 'Northern California Title Game (Lost 76-79 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Alonzo Reece', role: 'Guard (SG)', statLine: '23.5 PPG, 4.1 RPG' },
        { name: 'Dakoulas Alexandris', role: 'Point Guard (PG)', statLine: '14.2 PPG, 3.1 SPG' },
      ],
      keyWins: ['65-51 vs. San Jose Tigersharks (QF)', '72-60 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'oakland-renegades',
      season: 3,
      headline: '12-Win Season & Heartbreaking 1-Point Quarterfinal Exit',
      summary: 'Oakland posted a 12-10 record (#6 seed) in Season 3. In the playoffs, Oakland battled eventual champion San Diego Strykers to the wire, falling 79-80 in a classic.',
      keyAccomplishments: [
        '12-10 Regular Season Record (#6 Seed)',
        'Pushed eventual champion Strykers to 1-point finish in Quarterfinals',
      ],
      seasonAwards: ['Alonzo Reece: All-Star Starter'],
      playoffFinish: 'Quarterfinals Exit (Lost 79-80 vs SD Strykers)',
      topPlayers: [
        { name: 'Alonzo Reece', role: 'Guard (SG)', statLine: '22.8 PPG, 4.0 RPG' },
        { name: 'Dakoulas Alexandris', role: 'Point Guard (PG)', statLine: '14.0 PPG, 2.9 SPG' },
      ],
      keyWins: ['77-74 vs. Anaheim Admirals', '70-66 vs. Anaheim Admirals'],
    },
  },

  'san-jose-tigersharks': {
    1: {
      teamId: 'san-jose-tigersharks',
      season: 1,
      headline: 'Developing Silicon Valley Hoops Foundations',
      summary: 'San Jose finished 8-14 in Season 1, focusing on perimeter passing and interior chemistry.',
      keyAccomplishments: ['8-14 Regular Season Record'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (10th Rank - 8-14)',
      topPlayers: [
        { name: 'K. Tinsley', role: 'Guard (G)', statLine: '15.2 PPG' },
        { name: 'J. Young', role: 'Forward (F)', statLine: '12.8 PPG' },
      ],
      keyWins: ['81-74 vs. Golden State Enterprise'],
    },
    2: {
      teamId: 'san-jose-tigersharks',
      season: 2,
      headline: 'Snagging the #8 Postseason Berth in NorCal',
      summary: 'San Jose finished 8-14 in Season 2, earning an 8-team postseason berth and facing Oakland in the Quarterfinals.',
      keyAccomplishments: ['8-14 Regular Season Record (Playoff Berth)'],
      seasonAwards: [],
      playoffFinish: 'Quarterfinals Exit (Lost 51-65 vs Oakland Renegades)',
      topPlayers: [
        { name: 'Kirk Tinsley', role: 'Guard (G)', statLine: '16.0 PPG' },
      ],
      keyWins: ['65-62 vs. Fresno Mad Dogs'],
    },
    3: {
      teamId: 'san-jose-tigersharks',
      season: 3,
      headline: 'Ice-Cold Scorer K. Tinsley Wins Clutch Player of the Year',
      summary: 'San Jose went 8-14 in Season 3. Guard Kirk Tinsley was the standout star, hitting multiple game-winners to take home Clutch Player of the Year honors.',
      keyAccomplishments: [
        '8-14 Regular Season Record',
        'Clutch Player of the Year Award Winner',
      ],
      seasonAwards: ['Kirk Tinsley: Season 3 Clutch Player of the Year'],
      playoffFinish: 'Missed Postseason (9th Rank - 8-14)',
      topPlayers: [
        { name: 'Kirk Tinsley', role: 'Guard (SG)', statLine: '17.5 PPG, 4.2 APG' },
      ],
      keyWins: ['82-75 vs. Anaheim Admirals', '68-60 vs. Anaheim Admirals'],
    },
  },

  'golden-state-enterprise': {
    1: {
      teamId: 'golden-state-enterprise',
      season: 1,
      headline: 'The Magical Cinderella Run to the Inaugural CCH Finals',
      summary: 'Golden State went 11-11 (#6 seed) in the regular season before mounting a miraculous playoff run. The Enterprise knocked off #3 Long Beach (94-90) and #2 LA Dynamics (85-82) to shock the league and reach the CCH Finals before falling 81-86 to Sacramento.',
      keyAccomplishments: [
        '11-11 Regular Season Record (#6 Seed)',
        'Inaugural CCH Postseason Finals Appearance',
        'Upset #3 seed Long Beach and #2 seed LA Dynamics in Postseason',
      ],
      seasonAwards: ['Howie Carney: Playoff Breakthrough Star'],
      playoffFinish: 'Season 1 Postseason Finalist (Lost 81-86 vs Sacramento Stallions)',
      topPlayers: [
        { name: 'Howie Carney', role: 'Forward (PF)', statLine: '17.8 PPG, 6.2 RPG' },
      ],
      keyWins: ['94-90 vs. Long Beach (QF)', '85-82 vs. LA Dynamics (Semis)'],
    },
    2: {
      teamId: 'golden-state-enterprise',
      season: 2,
      headline: 'Rebuilding Phase & Roster Transitions',
      summary: 'Golden State went 6-16 in Season 2, retooling their roster around versatile forward Howie Carney.',
      keyAccomplishments: ['6-16 Regular Season Record'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (10th Rank - 6-16)',
      topPlayers: [
        { name: 'Howie Carney', role: 'Forward (PF)', statLine: '15.5 PPG, 5.8 RPG' },
      ],
      keyWins: ['74-68 vs. Fresno Mad Dogs'],
    },
    3: {
      teamId: 'golden-state-enterprise',
      season: 3,
      headline: 'Youth Development in the Bay Area',
      summary: 'Golden State completed a 5-17 campaign in Season 3, prioritizing draft positioning and young talent evaluation.',
      keyAccomplishments: ['5-17 Regular Season Record'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (12th Rank - 5-17)',
      topPlayers: [
        { name: 'Howie Carney', role: 'Forward (PF)', statLine: '14.8 PPG, 5.5 RPG' },
      ],
      keyWins: ['75-70 vs. Fresno Mad Dogs'],
    },
  },

  'fresno-mad-dogs': {
    1: {
      teamId: 'fresno-mad-dogs',
      season: 1,
      headline: 'Physical Interior Identity in the Central Valley',
      summary: 'Fresno compiled a 7-15 record in Season 1, selecting superstar guard Lamar Anderson #1 overall before sending him to California in a franchise-altering blockbuster trade.',
      keyAccomplishments: [
        '7-15 Regular Season Record',
        'Drafted #1 Overall Pick Lamar Anderson (Traded to Reds in S1 Blockbuster)',
      ],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (12th Rank - 7-15)',
      topPlayers: [
        { name: 'Josh Parks', role: 'Center (C)', statLine: '14.5 PPG, 8.2 RPG' },
      ],
      keyWins: ['80-72 vs. Oakland Renegades'],
    },
    2: {
      teamId: 'fresno-mad-dogs',
      season: 2,
      headline: 'Laying the Groundwork for Postseason Glory',
      summary: 'Fresno went 6-16 in Season 2, developing interior toughness and key late-game sets.',
      keyAccomplishments: ['6-16 Regular Season Record'],
      seasonAwards: [],
      playoffFinish: 'Missed Postseason (11th Rank - 6-16)',
      topPlayers: [
        { name: 'Josh Parks', role: 'Center (C)', statLine: '15.8 PPG, 8.9 RPG' },
      ],
      keyWins: ['73-65 vs. Anaheim Admirals'],
    },
    3: {
      teamId: 'fresno-mad-dogs',
      season: 3,
      headline: 'The Ultimate #8 Seed Cinderella CCH Finals Campaign!',
      summary: 'Fresno snuck into the playoffs as the #8 seed with a 10-12 record and mounted the greatest Cinderella story in CCH history. Fresno physically dominated top seed California Reds 90-86 in the Quarterfinals, then eliminated #4 seed SD Strykers 80-75 behind Josh Parks’ 27-point masterpiece to reach the Season 3 CCH Finals. In the championship clincher against Sacramento, Douglas Bradley fought valiantly with a team-high 28 points on 11-of-17 shooting, as Fresno earned Season 3 Runner-Up honors.',
      keyAccomplishments: [
        '10-12 Regular Season Record (#8 Seed)',
        'Stunned #1 Seed California Reds 90-86 in Postseason Quarterfinals',
        'Eliminated #4 Seed SD Strykers 80-75 in Semifinals',
        'Season 3 CCH Finals Runner-Up',
        'Douglas Bradley dropped 28 PTS in Season 3 Finals',
      ],
      seasonAwards: ['Josh Parks: Postseason Standout', 'Douglas Bradley: Finals Lead Scorer (28 PTS)'],
      playoffFinish: 'Season 3 CCH Runner-Up (Lost 72-87 vs #2 Sacramento Stallions in CCH Finals)',
      topPlayers: [
        { name: 'D. Bradley', role: 'Shooting Guard / Small Forward (SG/SF)', statLine: '28 PTS in CCH Finals (11-17 FG)' },
        { name: 'Josh Parks', role: 'Guard / Point Guard (PG)', statLine: '12 PTS, 3 AST in CCH Finals' },
        { name: 'E. Ball', role: 'Guard (G)', statLine: '8 PTS, 3 AST in CCH Finals' },
        { name: 'D. Cousins', role: 'Center (C)', statLine: '6 PTS in CCH Finals' },
      ],
      keyWins: ['90-86 vs. California Reds (QF Upset)', '80-75 vs. SD Strykers (Semis)'],
    },
  },
};

export function getTeamSeasonRecap(teamId: string, season: 1 | 2 | 3): TeamSeasonRecap | null {
  const teamMap = TEAM_SEASON_RECAPS[teamId];
  if (!teamMap) return null;
  return teamMap[season] || null;
}
