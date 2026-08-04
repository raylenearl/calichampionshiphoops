import { SEASON_1_SCHEDULE } from '../data/s1ScheduleData';
import { SEASON_2_SCHEDULE } from '../data/s2ScheduleData';
import { SEASON_3_SCHEDULE } from '../data/s3ScheduleData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { TEAMS } from '../data/teamsData';
import { GameRecord } from '../types';

export interface HeadToHeadGame {
  id: string;
  season: number;
  date: string;
  stage: 'Regular Season' | 'Playoffs';
  team1: string;
  team1Id: string;
  score1: number;
  team2: string;
  team2Id: string;
  score2: number;
  winnerId: string;
  highScorer?: string;
  notes?: string;
}

export interface HeadToHeadSummary {
  team1Id: string;
  team2Id: string;
  team1Wins: number;
  team2Wins: number;
  totalGames: number;
  team1Points: number;
  team2Points: number;
  streak: string; // e.g. "Stallions 2W"
  games: HeadToHeadGame[];
}

export interface TeamAllTimeStats {
  teamId: string;
  teamName: string;
  shortName: string;
  conference: string;
  totalWins: number;
  totalLosses: number;
  totalGames: number;
  winPercentage: number;
  regWins: number;
  regLosses: number;
  playoffWins: number;
  playoffLosses: number;
  pointsFor: number;
  pointsAgainst: number;
  pointDiff: number;
  championships: number;
  playoffAppearances: number;
}

export function normalizeTeamId(teamName: string): string {
  if (!teamName) return 'league';
  const lower = teamName.toLowerCase().trim();

  if (lower.includes('stallions') || lower.includes('sacramento')) return 'sacramento-stallions';
  if (lower.includes('knights') || lower.includes('san francisco')) return 'san-francisco-knights';
  if (lower.includes('renegades') || lower.includes('oakland')) return 'oakland-renegades';
  if (lower.includes('tigersharks') || lower.includes('san jose')) return 'san-jose-tigersharks';
  if (lower.includes('enterprise') || lower.includes('golden state')) return 'golden-state-enterprise';
  if (lower.includes('mad dogs') || lower.includes('fresno')) return 'fresno-mad-dogs';
  if (lower.includes('dynamics') || lower.includes('los angeles')) return 'los-angeles-dynamics';
  if (lower.includes('reds') || lower.includes('california')) return 'california-reds';
  if (lower.includes('sabrewolves') || lower.includes('san diego sabre')) return 'san-diego-sabrewolves';
  if (lower.includes('strykers') || lower.includes('san diego stry')) return 'san-diego-strykers';
  if (lower.includes('admirals') || lower.includes('anaheim')) return 'anaheim-admirals';
  if (lower.includes('vipers') || lower.includes('long beach')) return 'long-beach-vipers';

  const found = TEAMS.find(
    (t) => t.name.toLowerCase().includes(lower) || t.shortName.toLowerCase().includes(lower)
  );
  return found ? found.id : 'league';
}

export function getAllProcessedGames(): HeadToHeadGame[] {
  const allGames: HeadToHeadGame[] = [];

  // 1. Regular Season Schedules (Seasons 1, 2, 3)
  const regSchedules: { list: GameRecord[]; s: number }[] = [
    { list: SEASON_1_SCHEDULE, s: 1 },
    { list: SEASON_2_SCHEDULE, s: 2 },
    { list: SEASON_3_SCHEDULE, s: 3 },
  ];

  regSchedules.forEach(({ list, s }) => {
    list.forEach((g) => {
      // Ignore unplayed / pending games (0 - 0)
      if (g.score1 === 0 && g.score2 === 0) return;

      const t1Id = normalizeTeamId(g.team1);
      const t2Id = normalizeTeamId(g.team2);
      const winnerId = g.score1 > g.score2 ? t1Id : t2Id;

      allGames.push({
        id: g.id || `s${s}-${g.date}-${g.team1}-${g.team2}`,
        season: s,
        date: g.date,
        stage: 'Regular Season',
        team1: g.team1,
        team1Id: t1Id,
        score1: g.score1,
        team2: g.team2,
        team2Id: t2Id,
        score2: g.score2,
        winnerId,
        highScorer: g.highScorer,
        notes: g.notes,
      });
    });
  });

  // 2. Playoff Games
  PLAYOFF_HISTORY.forEach((pData) => {
    const s = pData.season;

    // Quarterfinals
    pData.quarterfinals.forEach((qf, idx) => {
      if (qf.score1 === 0 && qf.score2 === 0) return;
      const t1Id = normalizeTeamId(qf.team1);
      const t2Id = normalizeTeamId(qf.team2);
      const winnerId = qf.score1 > qf.score2 ? t1Id : t2Id;
      allGames.push({
        id: `po-s${s}-qf-${idx}`,
        season: s,
        date: qf.round,
        stage: 'Playoffs',
        team1: qf.team1,
        team1Id: t1Id,
        score1: qf.score1,
        team2: qf.team2,
        team2Id: t2Id,
        score2: qf.score2,
        winnerId,
        notes: qf.notes ? `${qf.notes}` : `Playoffs ${qf.round}`,
      });
    });

    // Semifinals
    if (pData.semifinals) {
      pData.semifinals.forEach((sf, idx) => {
        if (sf.score1 === 0 && sf.score2 === 0) return;
        const t1Id = normalizeTeamId(sf.team1);
        const t2Id = normalizeTeamId(sf.team2);
        const winnerId = sf.score1 > sf.score2 ? t1Id : t2Id;
        allGames.push({
          id: `po-s${s}-sf-${idx}`,
          season: s,
          date: sf.round,
          stage: 'Playoffs',
          team1: sf.team1,
          team1Id: t1Id,
          score1: sf.score1,
          team2: sf.team2,
          team2Id: t2Id,
          score2: sf.score2,
          winnerId,
          notes: sf.notes ? `${sf.notes}` : `Playoffs ${sf.round}`,
        });
      });
    }

    // Finals
    if (pData.finals && (pData.finals.score1 > 0 || pData.finals.score2 > 0)) {
      const f = pData.finals;
      const t1Id = normalizeTeamId(f.team1);
      const t2Id = normalizeTeamId(f.team2);
      const winnerId = f.score1 > f.score2 ? t1Id : t2Id;
      allGames.push({
        id: `po-s${s}-finals`,
        season: s,
        date: 'CCH Finals',
        stage: 'Playoffs',
        team1: f.team1,
        team1Id: t1Id,
        score1: f.score1,
        team2: f.team2,
        team2Id: t2Id,
        score2: f.score2,
        winnerId,
        notes: f.notes ? `${f.notes}` : `Season ${s} Championship Game`,
      });
    }
  });

  return allGames;
}

export function getHeadToHeadSummary(t1Id: string, t2Id: string): HeadToHeadSummary {
  const allGames = getAllProcessedGames();

  // Filter games involving both t1Id and t2Id
  const h2hGames = allGames.filter(
    (g) =>
      (g.team1Id === t1Id && g.team2Id === t2Id) ||
      (g.team1Id === t2Id && g.team2Id === t1Id)
  );

  let t1Wins = 0;
  let t2Wins = 0;
  let t1Pts = 0;
  let t2Pts = 0;

  h2hGames.forEach((g) => {
    const isT1Team1 = g.team1Id === t1Id;
    const t1Score = isT1Team1 ? g.score1 : g.score2;
    const t2Score = isT1Team1 ? g.score2 : g.score1;

    t1Pts += t1Score;
    t2Pts += t2Score;

    if (g.winnerId === t1Id) {
      t1Wins++;
    } else if (g.winnerId === t2Id) {
      t2Wins++;
    }
  });

  // Calculate streak
  let streak = 'No games';
  if (h2hGames.length > 0) {
    const lastGame = h2hGames[h2hGames.length - 1];
    const teamObj = TEAMS.find((t) => t.id === lastGame.winnerId);
    const winShort = teamObj ? teamObj.shortName : 'Winner';

    // Count consecutive wins by the latest winner
    let count = 0;
    for (let i = h2hGames.length - 1; i >= 0; i--) {
      if (h2hGames[i].winnerId === lastGame.winnerId) {
        count++;
      } else {
        break;
      }
    }
    streak = `${winShort} ${count}W`;
  }

  return {
    team1Id: t1Id,
    team2Id: t2Id,
    team1Wins: t1Wins,
    team2Wins: t2Wins,
    totalGames: h2hGames.length,
    team1Points: t1Pts,
    team2Points: t2Pts,
    streak,
    games: h2hGames,
  };
}

export function getAllTimeFranchiseStats(): TeamAllTimeStats[] {
  const allGames = getAllProcessedGames();

  const statsMap: Record<
    string,
    {
      regWins: number;
      regLosses: number;
      playoffWins: number;
      playoffLosses: number;
      ptsFor: number;
      ptsAgainst: number;
    }
  > = {};

  TEAMS.forEach((t) => {
    statsMap[t.id] = {
      regWins: 0,
      regLosses: 0,
      playoffWins: 0,
      playoffLosses: 0,
      ptsFor: 0,
      ptsAgainst: 0,
    };
  });

  allGames.forEach((g) => {
    const isReg = g.stage === 'Regular Season';

    // Team 1
    if (statsMap[g.team1Id]) {
      statsMap[g.team1Id].ptsFor += g.score1;
      statsMap[g.team1Id].ptsAgainst += g.score2;
      if (g.winnerId === g.team1Id) {
        if (isReg) statsMap[g.team1Id].regWins++;
        else statsMap[g.team1Id].playoffWins++;
      } else {
        if (isReg) statsMap[g.team1Id].regLosses++;
        else statsMap[g.team1Id].playoffLosses++;
      }
    }

    // Team 2
    if (statsMap[g.team2Id]) {
      statsMap[g.team2Id].ptsFor += g.score2;
      statsMap[g.team2Id].ptsAgainst += g.score1;
      if (g.winnerId === g.team2Id) {
        if (isReg) statsMap[g.team2Id].regWins++;
        else statsMap[g.team2Id].playoffWins++;
      } else {
        if (isReg) statsMap[g.team2Id].regLosses++;
        else statsMap[g.team2Id].playoffLosses++;
      }
    }
  });

  return TEAMS.map((t) => {
    const s = statsMap[t.id] || {
      regWins: 0,
      regLosses: 0,
      playoffWins: 0,
      playoffLosses: 0,
      ptsFor: 0,
      ptsAgainst: 0,
    };

    const totalWins = s.regWins + s.playoffWins;
    const totalLosses = s.regLosses + s.playoffLosses;
    const totalGames = totalWins + totalLosses;
    const winPercentage = totalGames > 0 ? parseFloat((totalWins / totalGames).toFixed(3)) : 0;

    let championships = 0;
    if (t.id === 'sacramento-stallions') championships = 1; // Season 1
    if (t.id === 'california-reds') championships = 1; // Season 2

    let playoffAppearances = 3; // Most teams qualified in S1, S2, S3
    if (t.id === 'long-beach-vipers') playoffAppearances = 1; // S1 only
    if (t.id === 'golden-state-enterprise') playoffAppearances = 1; // S1 only
    if (t.id === 'anaheim-admirals') playoffAppearances = 2; // S1 & S2

    return {
      teamId: t.id,
      teamName: t.name,
      shortName: t.shortName,
      conference: t.conference,
      totalWins,
      totalLosses,
      totalGames,
      winPercentage,
      regWins: s.regWins,
      regLosses: s.regLosses,
      playoffWins: s.playoffWins,
      playoffLosses: s.playoffLosses,
      pointsFor: s.ptsFor,
      pointsAgainst: s.ptsAgainst,
      pointDiff: s.ptsFor - s.ptsAgainst,
      championships,
      playoffAppearances,
    };
  }).sort((a, b) => b.winPercentage - a.winPercentage || b.totalWins - a.totalWins);
}
