import { Player, PlayerAwardItem } from '../types';
import { ALL_AWARDS, ALL_CALI_TEAMS, SEASON_LEADERS, SEASON_1_SINGLE_GAME_HIGHS } from '../data/awardsData';
import { SINGLE_GAME_RECORDS } from '../data/recordsData';
import { ALL_STAR_GAMES } from '../data/allStarData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';

export interface ComparisonPreset {
  id: string;
  title: string;
  tagline: string;
  player1Id: string;
  player2Id: string;
  badge: string;
}

export const COMPARISON_PRESETS: ComparisonPreset[] = [
  {
    id: 'mvp-scoring-titans',
    title: 'MVP & Scoring Royalty',
    tagline: 'Lamar Anderson vs. A.J. Hinton',
    player1Id: 'p-lamar-anderson',
    player2Id: 'p-aj-hinton',
    badge: '👑 MVP Duel',
  },
  {
    id: 'paint-dynasty-titans',
    title: 'Paint & Defense Enforcers',
    tagline: 'Dorell Kabal vs. Mo Alexander',
    player1Id: 'p-dorell-kabal',
    player2Id: 'p-mo-alexander',
    badge: '🛡️ Dynasty Clash',
  },
  {
    id: '3pt-sharpshooters',
    title: 'Historic 3-Point Snipers',
    tagline: 'Jack McMichael Jr. vs. Kirk Tinsley',
    player1Id: 'p-jack-mcmichael',
    player2Id: 'p-kirk-tinsley',
    badge: '🎯 Perimeter Fire',
  },
  {
    id: 'explosive-scorers',
    title: '56-Pt Record vs. 3PT Champion',
    tagline: 'Kirk Barnes vs. Alonzo Reece',
    player1Id: 'p-kirk-barnes',
    player2Id: 'p-alonzo-reece',
    badge: '⚡ Scoring Explosion',
  },
  {
    id: 'lockdown-wings',
    title: 'Defensive Monsters',
    tagline: 'Wes Taylor vs. DeAnte Gray',
    player1Id: 'p-wes-taylor',
    player2Id: 'p-deante-gray',
    badge: '🔒 DPOY & All-Defensive',
  },
  {
    id: 's3-finals-duel',
    title: 'Season 3 CCH Finals Duel',
    tagline: 'George Madsen vs. Douglas Bradley',
    player1Id: 'p-george-madsen',
    player2Id: 'p-douglas-bradley',
    badge: '🏆 Finals Showdown',
  },
  {
    id: 'high-flyers',
    title: 'Dunk Champions & ROTY',
    tagline: 'Cameron Barkley vs. Donald Hardy',
    player1Id: 'p-cameron-barkley',
    player2Id: 'p-donald-hardy',
    badge: '🚀 Above the Rim',
  },
  {
    id: 'floor-generals',
    title: 'Ice-Cold Floor Generals',
    tagline: 'Munir Kassa vs. Ray Gambino Gamble',
    player1Id: 'p-munir-kassa',
    player2Id: 'p-ray-gambino',
    badge: '🧊 Clutch Playmakers',
  },
];

export interface PlayerTrophyCount {
  championships: number;
  mvps: number;
  finalsMvp: number;
  majorAwards: number;
  allCaliCount: number;
  allDefensiveCount: number;
  allRookieCount: number;
  allStarCount: number;
  statTitles: number;
  recordsCount: number;
  totalScore: number;
}

export function calculatePlayerTrophies(player: Player): PlayerTrophyCount {
  const awards = getPlayerAllAwards(player);
  let championships = 0;
  let mvps = 0;
  let finalsMvp = 0;
  let majorAwards = 0;
  let allCaliCount = 0;
  let allDefensiveCount = 0;
  let allRookieCount = 0;
  let allStarCount = 0;
  let statTitles = 0;
  let recordsCount = 0;

  awards.forEach((award) => {
    const titleLower = award.title.toLowerCase();
    if (award.type === 'championship' || titleLower.includes('champion') && !titleLower.includes('contest') && !titleLower.includes('scoring')) {
      championships += 1;
    }
    if (award.type === 'mvp') {
      if (titleLower.includes('finals')) {
        finalsMvp += 1;
      } else {
        mvps += 1;
      }
    }
    if (award.type === 'major_award') {
      majorAwards += 1;
    }
    if (award.type === 'all_cali') {
      allCaliCount += 1;
    }
    if (award.type === 'all_defensive') {
      allDefensiveCount += 1;
    }
    if (award.type === 'all_rookie') {
      allRookieCount += 1;
    }
    if (award.type === 'all_star') {
      allStarCount += 1;
    }
    if (award.type === 'stat_leader') {
      statTitles += 1;
    }
    if (award.type === 'record') {
      recordsCount += 1;
    }
  });

  // Calculate weighted prestige score
  const totalScore =
    championships * 15 +
    mvps * 12 +
    finalsMvp * 10 +
    majorAwards * 6 +
    allCaliCount * 4 +
    allDefensiveCount * 4 +
    allStarCount * 2 +
    statTitles * 3 +
    recordsCount * 4 +
    allRookieCount * 2;

  return {
    championships,
    mvps,
    finalsMvp,
    majorAwards,
    allCaliCount,
    allDefensiveCount,
    allRookieCount,
    allStarCount,
    statTitles,
    recordsCount,
    totalScore,
  };
}

export function getPlayerAllAwards(player: Player): PlayerAwardItem[] {
  if (player.awardsList && player.awardsList.length > 0) {
    return player.awardsList;
  }

  // Fallback: build dynamically from data sources
  const list: PlayerAwardItem[] = [];
  const playerName = player.name.toLowerCase().trim();

  // From ALL_AWARDS
  ALL_AWARDS.forEach((aw) => {
    if (aw.player.toLowerCase().includes(playerName)) {
      let type: PlayerAwardItem['type'] = 'major_award';
      if (aw.category.includes('MVP')) type = 'mvp';
      list.push({
        season: aw.season,
        title: aw.category,
        type,
        description: aw.description || aw.statDetails,
      });
    }
  });

  // From ALL_CALI_TEAMS
  ALL_CALI_TEAMS.forEach((team) => {
    team.players.forEach((p) => {
      if (p.name.toLowerCase().includes(playerName)) {
        let type: PlayerAwardItem['type'] = 'all_cali';
        if (team.teamCategory === 'All-Defensive') type = 'all_defensive';
        if (team.teamCategory === 'All-Rookie') type = 'all_rookie';
        list.push({
          season: team.season,
          title: `${team.teamCategory} ${team.tier}`,
          type,
          description: `Season ${team.season} ${team.teamCategory} ${team.tier} honoree`,
        });
      }
    });
  });

  // From SEASON_LEADERS
  SEASON_LEADERS.forEach((lead) => {
    if (lead.player.toLowerCase().includes(playerName)) {
      list.push({
        season: lead.season,
        title: `${lead.statCategory} Leader`,
        type: 'stat_leader',
        description: `${lead.statValue} (${lead.subText || ''})`,
      });
    }
  });

  // From SEASON_1_SINGLE_GAME_HIGHS
  SEASON_1_SINGLE_GAME_HIGHS.forEach((high) => {
    if (high.player.toLowerCase().includes(playerName)) {
      list.push({
        season: high.season,
        title: `Single-Game High: ${high.statCategory}`,
        type: 'record',
        description: `${high.statValue} (${high.gameDetails})`,
      });
    }
  });

  // From SINGLE_GAME_RECORDS
  SINGLE_GAME_RECORDS.forEach((rec) => {
    if (rec.player.toLowerCase().includes(playerName)) {
      const seasonNum: 1 | 2 | 3 = rec.season.includes('1') ? 1 : rec.season.includes('2') ? 2 : 3;
      list.push({
        season: seasonNum,
        title: `All-Time Record: ${rec.category}`,
        type: 'record',
        description: `${rec.statistic} (${rec.opponentDate})`,
      });
    }
  });

  return list;
}

export interface StatAdvantage {
  category: string;
  label: string;
  val1: number | string;
  val2: number | string;
  winner: 1 | 2 | 0; // 1 = player1, 2 = player2, 0 = tie
  diffText: string;
  unit?: string;
  higherIsBetter?: boolean;
}

export function comparePlayerStats(p1: Player, p2: Player): StatAdvantage[] {
  const compareNum = (
    label: string,
    val1: number | undefined,
    val2: number | undefined,
    category: string,
    unit = '',
    higherIsBetter = true
  ): StatAdvantage => {
    const v1 = val1 ?? 0;
    const v2 = val2 ?? 0;
    let winner: 1 | 2 | 0 = 0;
    let diffText = 'Tied';

    if (v1 > v2) {
      winner = higherIsBetter ? 1 : 2;
      const diff = Math.abs(v1 - v2);
      diffText = `+${diff.toFixed(unit === '%' ? 1 : 1)}${unit} P1`;
    } else if (v2 > v1) {
      winner = higherIsBetter ? 2 : 1;
      const diff = Math.abs(v2 - v1);
      diffText = `+${diff.toFixed(unit === '%' ? 1 : 1)}${unit} P2`;
    }

    return {
      category,
      label,
      val1: unit === '%' ? `${(v1 * 100).toFixed(1)}%` : v1.toFixed(1),
      val2: unit === '%' ? `${(v2 * 100).toFixed(1)}%` : v2.toFixed(1),
      winner,
      diffText,
      unit,
      higherIsBetter,
    };
  };

  return [
    compareNum('Overall Rating (OVR)', p1.ovr ?? 88, p2.ovr ?? 88, 'Rating'),
    compareNum('Points Per Game', p1.ppg, p2.ppg, 'Per Game', ' PPG'),
    compareNum('Rebounds Per Game', p1.rpg, p2.rpg, 'Per Game', ' RPG'),
    compareNum('Assists Per Game', p1.apg, p2.apg, 'Per Game', ' APG'),
    compareNum('Steals Per Game', p1.spg, p2.spg, 'Per Game', ' SPG'),
    compareNum('Blocks Per Game', p1.bpg, p2.bpg, 'Per Game', ' BPG'),
    compareNum('Field Goal %', p1.fgPct, p2.fgPct, 'Efficiency', '%'),
    compareNum('3-Point FG %', p1.threePct, p2.threePct, 'Efficiency', '%'),
    compareNum('Free Throw %', p1.ftPct, p2.ftPct, 'Efficiency', '%'),
    compareNum('Minutes Per Game', p1.mpg, p2.mpg, 'Workload', ' MPG'),
  ];
}

export function generateMatchupAnalysis(p1: Player, p2: Player): string {
  const p1Trophies = calculatePlayerTrophies(p1);
  const p2Trophies = calculatePlayerTrophies(p2);

  const scoringLeader = (p1.ppg ?? 0) >= (p2.ppg ?? 0) ? p1.name : p2.name;
  const defenseLeader = ((p1.bpg ?? 0) + (p1.spg ?? 0)) >= ((p2.bpg ?? 0) + (p2.spg ?? 0)) ? p1.name : p2.name;
  const trophyLeader = p1Trophies.totalScore >= p2Trophies.totalScore ? p1.name : p2.name;

  return `${p1.name} and ${p2.name} represent two contrasting pillars of California Classic Hoops basketball. ` +
    `Offensively, ${scoringLeader} holds the edge in scoring volume, while ${defenseLeader} brings the higher defensive stock impact. ` +
    `In terms of hardware and trophy equity, ${trophyLeader} carries greater historical weight across CCH championships and major honors. ` +
    `Both stars have carved unforgettable legacies into California basketball folklore.`;
}
