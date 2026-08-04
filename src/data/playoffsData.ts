import { PlayoffGame } from '../types';

export interface SeasonPlayoffInfo {
  season: 1 | 2 | 3;
  title: string;
  champion: string;
  runnerUp: string;
  finalsMvp: string;
  finalsScore: string;
  narrative: string;
  quarterfinals: PlayoffGame[];
  semifinals?: PlayoffGame[];
  finals: PlayoffGame;
}

export const PLAYOFF_HISTORY: SeasonPlayoffInfo[] = [
  {
    season: 1,
    title: 'Season 1 Playoffs',
    champion: 'Sacramento Stallions',
    runnerUp: 'Golden State Enterprise',
    finalsMvp: 'Dorell Kabal (Sacramento Stallions)',
    finalsScore: 'Sacramento Stallions 86, Golden State Enterprise 81',
    narrative: 'The Sacramento Stallions converted their league-best 17-5 regular season record into a dominant postseason run, capped by an 86-81 victory in the CCH Finals behind MVP center Dorell Kabal.',
    quarterfinals: [
      { round: 'Quarterfinals', team1: 'Sacramento Stallions', seed1: 1, score1: 91, team2: 'Anaheim Admirals', seed2: 8, score2: 79, winner: 'Sacramento Stallions', notes: 'Kabal dominated inside with 30 PTS, outscoring the Admirals 48-28 in the paint.' },
      { round: 'Quarterfinals', team1: 'San Francisco Knights', seed1: 4, score1: 93, team2: 'San Diego Sabrewolves', seed2: 5, score2: 82, winner: 'San Francisco Knights', notes: 'Munir Kassa exploded for 32 PTS on 12-of-18 shooting.' },
      { round: 'Quarterfinals', team1: 'Los Angeles Dynamics', seed1: 2, score1: 88, team2: 'California Reds', seed2: 7, score2: 76, winner: 'Los Angeles Dynamics', notes: 'Jack McMichael Jr. dropped 21 to send the Reds home with a 10-game losing streak.' },
      { round: 'Quarterfinals', team1: 'Golden State Enterprise', seed1: 6, score1: 94, team2: 'Long Beach Vipers', seed2: 3, score2: 90, winner: 'Golden State Enterprise', notes: 'In a major upset, Howie Carney shot 4-of-6 from deep to drop 24 PTS.' },
    ],
    semifinals: [
      { round: 'Semifinals', team1: 'Sacramento Stallions', seed1: 1, score1: 99, team2: 'San Francisco Knights', seed2: 4, score2: 96, winner: 'Sacramento Stallions' },
      { round: 'Semifinals', team1: 'Golden State Enterprise', seed1: 6, score1: 85, team2: 'Los Angeles Dynamics', seed2: 2, score2: 82, winner: 'Golden State Enterprise' },
    ],
    finals: { round: 'Season 1 Finals', team1: 'Sacramento Stallions', seed1: 1, score1: 86, team2: 'Golden State Enterprise', seed2: 6, score2: 81, winner: 'Sacramento Stallions', notes: 'Dorell Kabal secured the championship and was crowned Finals MVP.' },
  },
  {
    season: 2,
    title: 'Season 2 Playoffs',
    champion: 'California Reds',
    runnerUp: 'Sacramento Stallions',
    finalsMvp: 'Lamar Anderson (California Reds)',
    finalsScore: 'California Reds 77, Sacramento Stallions 71',
    narrative: 'Following a trade for Lamar Anderson, the California Reds established a league-best 18-4 record and defeated the defending champion Stallions 77-71 in the Finals.',
    quarterfinals: [
      { round: 'Quarterfinals (South)', team1: 'California Reds', seed1: 1, score1: 83, team2: 'Anaheim Admirals', seed2: 4, score2: 63, winner: 'California Reds' },
      { round: 'Quarterfinals (South)', team1: 'San Diego Strykers', seed1: 2, score1: 86, team2: 'San Diego Sabrewolves', seed2: 3, score2: 79, winner: 'San Diego Strykers' },
      { round: 'Quarterfinals (North)', team1: 'Sacramento Stallions', seed1: 1, score1: 69, team2: 'San Francisco Knights', seed2: 4, score2: 57, winner: 'Sacramento Stallions' },
      { round: 'Quarterfinals (North)', team1: 'Oakland Renegades', seed1: 2, score1: 65, team2: 'San Jose Tigersharks', seed2: 3, score2: 51, winner: 'Oakland Renegades' },
    ],
    semifinals: [
      { round: 'Southern Cali Title', team1: 'California Reds', seed1: 1, score1: 70, team2: 'San Diego Strykers', seed2: 2, score2: 61, winner: 'California Reds' },
      { round: 'Northern Cali Title', team1: 'Sacramento Stallions', seed1: 1, score1: 79, team2: 'Oakland Renegades', seed2: 2, score2: 76, winner: 'Sacramento Stallions' },
    ],
    finals: { round: 'Season 2 Finals', team1: 'California Reds', seed1: 1, score1: 77, team2: 'Sacramento Stallions', seed2: 1, score2: 71, winner: 'California Reds', notes: 'Lamar Anderson solidified his legacy with a 26-point Finals MVP masterpiece, ending the Stallions’ dynasty.' },
  },
  {
    season: 3,
    title: 'Season 3 Playoffs',
    champion: 'Pending Finals Result',
    runnerUp: 'Pending Finals Result',
    finalsMvp: 'TBD',
    finalsScore: 'Fresno Mad Dogs vs. Sacramento Stallions',
    narrative: 'The #8 seed Fresno Mad Dogs pulled off a major postseason victory by eliminating top seed California Reds 90-86 in the Quarterfinals, advancing to face #2 seed Sacramento Stallions in the Season 3 Finals.',
    quarterfinals: [
      { round: 'Quarterfinals', team1: 'Fresno Mad Dogs', seed1: 8, score1: 90, team2: 'California Reds', seed2: 1, score2: 86, winner: 'Fresno Mad Dogs', notes: 'Fresno physically dominated the interior, outscoring the Reds 50-40 in the paint.' },
      { round: 'Quarterfinals', team1: 'Sacramento Stallions', seed1: 2, score1: 80, team2: 'San Francisco Knights', seed2: 7, score2: 79, winner: 'Sacramento Stallions', notes: 'Sacramento rallied from a 10-point first-half deficit to survive.' },
      { round: 'Quarterfinals', team1: 'San Diego Strykers', seed1: 4, score1: 80, team2: 'Oakland Renegades', seed2: 5, score2: 79, winner: 'San Diego Strykers', notes: 'Ray Gambino erupted for 33 PTS, and a clutch free throw with under a minute left sealed the win.' },
      { round: 'Quarterfinals', team1: 'San Diego Sabrewolves', seed1: 6, score1: 86, team2: 'Los Angeles Dynamics', seed2: 3, score2: 79, winner: 'San Diego Sabrewolves', notes: 'Kirk Barnes scored 25 PTS in a wire-to-wire victory.' },
    ],
    semifinals: [
      { round: 'Semifinals', team1: 'Fresno Mad Dogs', seed1: 8, score1: 80, team2: 'San Diego Strykers', seed2: 4, score2: 75, winner: 'Fresno Mad Dogs', notes: 'The Cinderella run lived on behind a legendary 27-point game from Josh Parks.' },
      { round: 'Semifinals', team1: 'Sacramento Stallions', seed1: 2, score1: 88, team2: 'San Diego Sabrewolves', seed2: 6, score2: 72, winner: 'Sacramento Stallions', notes: 'The Stallions put on a shooting clinic, hitting 12-of-17 three-pointers.' },
    ],
    finals: { round: 'Season 3 Finals', team1: 'Fresno Mad Dogs', seed1: 8, score1: 0, team2: 'Sacramento Stallions', seed2: 2, score2: 0, winner: 'Pending Finals', notes: 'Season 3 Championship Game pending between #8 Fresno and #2 Sacramento.' },
  },
];
