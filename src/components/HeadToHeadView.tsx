import React, { useState, useMemo } from 'react';
import { TEAMS } from '../data/teamsData';
import { TeamBadge } from './TeamBadge';
import {
  GitCompare,
  Trophy,
  Activity,
  ArrowRightLeft,
  Calendar,
  Grid,
  Sparkles,
  Layers,
  Flame,
  Award,
  ChevronRight,
  User,
} from 'lucide-react';
import {
  getHeadToHeadSummary,
  getAllTimeFranchiseStats,
  normalizeTeamId,
  HeadToHeadGame,
} from '../utils/headToHeadUtils';

export const HeadToHeadView: React.FC = () => {
  const [viewMode, setViewMode] = useState<'matchup' | 'matrix' | 'standings'>('matchup');
  const [team1Id, setTeam1Id] = useState<string>('sacramento-stallions');
  const [team2Id, setTeam2Id] = useState<string>('california-reds');
  const [seasonFilter, setSeasonFilter] = useState<'all' | '1' | '2' | '3'>('all');

  const team1 = useMemo(() => TEAMS.find((t) => t.id === team1Id) || TEAMS[0], [team1Id]);
  const team2 = useMemo(() => TEAMS.find((t) => t.id === team2Id) || TEAMS[1], [team2Id]);

  const handleSwap = () => {
    setTeam1Id(team2Id);
    setTeam2Id(team1Id);
  };

  // Head to Head Summary for selected teams
  const h2hSummary = useMemo(() => getHeadToHeadSummary(team1Id, team2Id), [team1Id, team2Id]);

  // All-time franchise stats
  const allTimeStandings = useMemo(() => getAllTimeFranchiseStats(), []);

  // Filter games by season if needed
  const filteredGames = useMemo(() => {
    if (seasonFilter === 'all') return h2hSummary.games;
    const sNum = parseInt(seasonFilter, 10);
    return h2hSummary.games.filter((g) => g.season === sNum);
  }, [h2hSummary.games, seasonFilter]);

  // Matrix data calculation
  const matrixData = useMemo(() => {
    const map: Record<string, Record<string, { wins: number; losses: number; games: number }>> = {};
    TEAMS.forEach((t1) => {
      map[t1.id] = {};
      TEAMS.forEach((t2) => {
        map[t1.id][t2.id] = { wins: 0, losses: 0, games: 0 };
      });
    });

    TEAMS.forEach((t1) => {
      TEAMS.forEach((t2) => {
        if (t1.id !== t2.id) {
          const sum = getHeadToHeadSummary(t1.id, t2.id);
          map[t1.id][t2.id] = {
            wins: sum.team1Wins,
            losses: sum.team2Wins,
            games: sum.totalGames,
          };
        }
      });
    });
    return map;
  }, []);

  return (
    <div className="space-y-8">
      {/* Official Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            <GitCompare size={16} />
            CCH All-Time Head-to-Head & Series History
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            All-Time Opponent Records & Series History
          </h1>
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            Explore complete head-to-head records and game-by-game results for every single matchup in CCH history across Seasons 1, 2, and 3.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full mt-2">
            <Sparkles size={13} />
            Updated through Season 3 – Complete Official Game Logs
          </div>
        </div>

        {/* View Mode Nav */}
        <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex flex-wrap gap-1 text-xs font-bold shrink-0 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setViewMode('matchup')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'matchup'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <GitCompare size={14} />
            Matchup Explorer
          </button>
          <button
            onClick={() => setViewMode('matrix')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'matrix'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Grid size={14} />
            All-Time Series Matrix
          </button>
          <button
            onClick={() => setViewMode('standings')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              viewMode === 'standings'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy size={14} />
            All-Time Franchise Leaders
          </button>
        </div>
      </div>

      {/* MODE 1: MATCHUP EXPLORER */}
      {viewMode === 'matchup' && (
        <div className="space-y-6">
          {/* Team Selectors Controls */}
          <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center bg-slate-900 p-5 rounded-3xl border border-slate-800 shadow-xl">
            {/* Team 1 Select */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <TeamBadge teamId={team1.id} size="sm" />
                Select Primary Franchise:
              </label>
              <select
                value={team1Id}
                onChange={(e) => {
                  if (e.target.value === team2Id) handleSwap();
                  else setTeam1Id(e.target.value);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3.5 text-sm font-black text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {TEAMS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.conference})
                  </option>
                ))}
              </select>
            </div>

            {/* Swap Button */}
            <div className="md:col-span-1 flex justify-center py-2">
              <button
                onClick={handleSwap}
                className="p-3.5 bg-slate-950 hover:bg-slate-800 border border-slate-700 text-amber-400 rounded-2xl transition-all shadow-md cursor-pointer hover:scale-105"
                title="Swap Opponents"
              >
                <ArrowRightLeft size={18} />
              </button>
            </div>

            {/* Team 2 Select */}
            <div className="md:col-span-5 space-y-2">
              <label className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <TeamBadge teamId={team2.id} size="sm" />
                Select Opponent Franchise:
              </label>
              <select
                value={team2Id}
                onChange={(e) => {
                  if (e.target.value === team1Id) handleSwap();
                  else setTeam2Id(e.target.value);
                }}
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-3.5 text-sm font-black text-white focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                {TEAMS.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.conference})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Series Summary Scoreboard Card */}
          <div className="bg-slate-900 border-2 border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-6 relative z-10">
              {/* Team 1 Banner */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-start">
                <TeamBadge teamId={team1.id} size="xl" />
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-amber-950 text-amber-300 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
                    {team1.conference}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">{team1.name}</h2>
                  <p className="text-xs text-slate-400">{team1.city}, CA</p>
                </div>
              </div>

              {/* Matchup Score Counter */}
              <div className="flex flex-col items-center justify-center bg-slate-950 border border-slate-800 px-8 py-4 rounded-3xl shadow-inner shrink-0 w-full md:w-auto">
                <span className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-1">
                  All-Time Head-to-Head Series
                </span>
                <div className="flex items-center gap-4">
                  <span
                    className={`text-4xl sm:text-5xl font-black font-mono ${
                      h2hSummary.team1Wins >= h2hSummary.team2Wins ? 'text-amber-400' : 'text-slate-400'
                    }`}
                  >
                    {h2hSummary.team1Wins}
                  </span>
                  <span className="text-xl font-bold text-slate-600">-</span>
                  <span
                    className={`text-4xl sm:text-5xl font-black font-mono ${
                      h2hSummary.team2Wins >= h2hSummary.team1Wins ? 'text-amber-400' : 'text-slate-400'
                    }`}
                  >
                    {h2hSummary.team2Wins}
                  </span>
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs font-bold text-slate-300">
                  <span className="bg-amber-950 text-amber-300 border border-amber-800/60 px-2.5 py-0.5 rounded-full font-mono">
                    {h2hSummary.totalGames} Total Games
                  </span>
                  <span className="bg-slate-800 text-slate-300 px-2.5 py-0.5 rounded-full font-mono">
                    Streak: {h2hSummary.streak}
                  </span>
                </div>
              </div>

              {/* Team 2 Banner */}
              <div className="flex items-center gap-4 w-full md:w-auto justify-end md:text-right">
                <div className="order-2 md:order-1">
                  <span className="text-[10px] font-extrabold uppercase bg-amber-950 text-amber-300 border border-amber-800/60 px-2.5 py-0.5 rounded-full">
                    {team2.conference}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">{team2.name}</h2>
                  <p className="text-xs text-slate-400">{team2.city}, CA</p>
                </div>
                <div className="order-1 md:order-2">
                  <TeamBadge teamId={team2.id} size="xl" />
                </div>
              </div>
            </div>

            {/* Quick Series Breakdown Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-bold uppercase block mb-1">
                  Total Points Scored
                </span>
                <span className="text-lg font-black font-mono text-white">
                  {h2hSummary.team1Points} – {h2hSummary.team2Points}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  ({h2hSummary.team1Points + h2hSummary.team2Points} combined)
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-bold uppercase block mb-1">
                  Avg Points / Game
                </span>
                <span className="text-lg font-black font-mono text-amber-400">
                  {h2hSummary.totalGames > 0
                    ? (h2hSummary.team1Points / h2hSummary.totalGames).toFixed(1)
                    : 0}{' '}
                  –{' '}
                  {h2hSummary.totalGames > 0
                    ? (h2hSummary.team2Points / h2hSummary.totalGames).toFixed(1)
                    : 0}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Per-game average</span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-bold uppercase block mb-1">
                  Point Differential
                </span>
                <span
                  className={`text-lg font-black font-mono ${
                    h2hSummary.team1Points >= h2hSummary.team2Points ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {h2hSummary.team1Points - h2hSummary.team2Points > 0 ? '+' : ''}
                  {h2hSummary.team1Points - h2hSummary.team2Points}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  In favor of {h2hSummary.team1Points >= h2hSummary.team2Points ? team1.shortName : team2.shortName}
                </span>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800/80">
                <span className="text-[11px] text-slate-500 font-bold uppercase block mb-1">
                  Series Win %
                </span>
                <span className="text-lg font-black font-mono text-white">
                  {h2hSummary.totalGames > 0
                    ? ((h2hSummary.team1Wins / h2hSummary.totalGames) * 100).toFixed(1)
                    : 0}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">
                  {team1.shortName} win percentage
                </span>
              </div>
            </div>
          </div>

          {/* Game-by-Game Series Results Header & Filter */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white">All Games Played ({filteredGames.length})</h3>
                  <p className="text-xs text-slate-400">
                    Chronological game logs for {team1.name} vs {team2.name}
                  </p>
                </div>
              </div>

              {/* Season Filter Switcher */}
              <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-bold">
                <button
                  onClick={() => setSeasonFilter('all')}
                  className={`px-3 py-1 rounded-lg cursor-pointer ${
                    seasonFilter === 'all' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All Seasons
                </button>
                <button
                  onClick={() => setSeasonFilter('1')}
                  className={`px-3 py-1 rounded-lg cursor-pointer ${
                    seasonFilter === '1' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Season 1
                </button>
                <button
                  onClick={() => setSeasonFilter('2')}
                  className={`px-3 py-1 rounded-lg cursor-pointer ${
                    seasonFilter === '2' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Season 2
                </button>
                <button
                  onClick={() => setSeasonFilter('3')}
                  className={`px-3 py-1 rounded-lg cursor-pointer ${
                    seasonFilter === '3' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Season 3
                </button>
              </div>
            </div>

            {/* List of Game Results */}
            {filteredGames.length === 0 ? (
              <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl text-center text-slate-400 text-sm">
                No games found for this season selection.
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredGames.map((game, idx) => {
                  const winnerIsT1 = game.winnerId === team1.id;
                  const winnerName = winnerIsT1 ? team1.shortName : team2.shortName;

                  return (
                    <div
                      key={game.id || idx}
                      className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-4 space-y-3 transition-all shadow-md"
                    >
                      <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                        <span className="font-mono font-bold text-slate-300 flex items-center gap-1.5">
                          <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 rounded text-[10px] text-amber-400">
                            Season {game.season}
                          </span>
                          {game.date}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                            game.stage === 'Playoffs'
                              ? 'bg-amber-500 text-slate-950 font-black'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {game.stage}
                        </span>
                      </div>

                      {/* Scores */}
                      <div className="grid grid-cols-2 gap-3 items-center">
                        <div
                          className={`flex items-center justify-between p-2.5 rounded-xl border ${
                            game.winnerId === game.team1Id
                              ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                              : 'bg-slate-950 border-slate-800/80 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <TeamBadge teamId={game.team1Id} size="sm" />
                            <span className="text-xs font-extrabold truncate">{game.team1}</span>
                          </div>
                          <span className="font-mono font-black text-base ml-2">{game.score1}</span>
                        </div>

                        <div
                          className={`flex items-center justify-between p-2.5 rounded-xl border ${
                            game.winnerId === game.team2Id
                              ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                              : 'bg-slate-950 border-slate-800/80 text-slate-400'
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <TeamBadge teamId={game.team2Id} size="sm" />
                            <span className="text-xs font-extrabold truncate">{game.team2}</span>
                          </div>
                          <span className="font-mono font-black text-base ml-2">{game.score2}</span>
                        </div>
                      </div>

                      {/* Footer Details */}
                      {(game.highScorer || game.notes) && (
                        <div className="pt-2 border-t border-slate-800/80 text-[11px] flex items-center justify-between text-slate-400">
                          {game.highScorer ? (
                            <span className="flex items-center gap-1 font-mono text-amber-300">
                              <User size={12} className="text-amber-400" />
                              {game.highScorer}
                            </span>
                          ) : (
                            <span className="text-slate-500 italic">Regular Season Result</span>
                          )}
                          {game.notes && (
                            <span className="text-slate-300 font-semibold bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                              {game.notes}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* MODE 2: ALL-TIME SERIES MATRIX GRID */}
      {viewMode === 'matrix' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2">
              <Grid className="text-amber-400" size={20} />
              <h2 className="text-xl font-black text-white">All-Time Series Matrix (12x12 Grid)</h2>
            </div>
            <p className="text-xs text-slate-400">
              Interactive head-to-head records across all 12 CCH franchises. Click any cell to jump into the full matchup breakdown!
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl p-4">
            <div className="overflow-x-auto">
              <table className="w-full text-center text-xs border-collapse min-w-[950px]">
                <thead>
                  <tr className="bg-slate-950 border-b border-slate-800 text-slate-400 font-extrabold">
                    <th className="p-3 text-left">Franchise</th>
                    {TEAMS.map((t) => (
                      <th key={t.id} className="p-3 font-mono font-bold text-slate-300">
                        {t.shortName}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {TEAMS.map((rowTeam) => (
                    <tr key={rowTeam.id} className="hover:bg-slate-800/50 transition-colors">
                      {/* Row Header */}
                      <td className="p-3 text-left font-bold text-white whitespace-nowrap bg-slate-950/60 flex items-center gap-2">
                        <TeamBadge teamId={rowTeam.id} size="sm" />
                        <span>{rowTeam.shortName}</span>
                      </td>

                      {/* Matrix Cells */}
                      {TEAMS.map((colTeam) => {
                        if (rowTeam.id === colTeam.id) {
                          return (
                            <td key={colTeam.id} className="p-3 text-slate-600 bg-slate-950/40 font-mono">
                              —
                            </td>
                          );
                        }

                        const cellData = matrixData[rowTeam.id]?.[colTeam.id] || { wins: 0, losses: 0, games: 0 };
                        const isWinning = cellData.wins > cellData.losses;
                        const isTied = cellData.wins === cellData.losses;

                        return (
                          <td key={colTeam.id} className="p-2">
                            <button
                              onClick={() => {
                                setTeam1Id(rowTeam.id);
                                setTeam2Id(colTeam.id);
                                setViewMode('matchup');
                              }}
                              className={`w-full py-2 px-1 rounded-xl font-mono text-xs font-black transition-all cursor-pointer border ${
                                isWinning
                                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300 hover:bg-amber-500/20'
                                  : isTied
                                  ? 'bg-slate-950 border-slate-800 text-slate-300 hover:bg-slate-800'
                                  : 'bg-slate-950/80 border-slate-800/60 text-slate-400 hover:bg-slate-800'
                              }`}
                              title={`Click to view ${rowTeam.name} vs ${colTeam.name} full history`}
                            >
                              {cellData.wins}-{cellData.losses}
                            </button>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* MODE 3: ALL-TIME FRANCHISE LEADERS & STANDINGS */}
      {viewMode === 'standings' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-2">
            <div className="flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} />
              <h2 className="text-xl font-black text-white">All-Time Franchise Standings (Seasons 1–3)</h2>
            </div>
            <p className="text-xs text-slate-400">
              Aggregated all-time performance including regular season and playoff games across all 3 CCH seasons.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[850px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Rank & Team</th>
                    <th className="py-4 px-6">Conference</th>
                    <th className="py-4 px-6 text-center">All-Time W-L</th>
                    <th className="py-4 px-6 text-center">Win %</th>
                    <th className="py-4 px-6 text-center">Reg Season W-L</th>
                    <th className="py-4 px-6 text-center">Playoff W-L</th>
                    <th className="py-4 px-6 text-center">Point Diff</th>
                    <th className="py-4 px-6 text-center">Titles</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {allTimeStandings.map((stat, idx) => (
                    <tr
                      key={stat.teamId}
                      className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium"
                    >
                      <td className="py-4 px-6 font-bold text-white whitespace-nowrap">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs font-black text-amber-400 w-5">
                            #{idx + 1}
                          </span>
                          <TeamBadge teamId={stat.teamId} size="md" />
                          <span className="font-extrabold text-white text-base">{stat.teamName}</span>
                        </div>
                      </td>

                      <td className="py-4 px-6 text-xs text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {stat.conference}
                        </span>
                      </td>

                      <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-base whitespace-nowrap">
                        {stat.totalWins}-{stat.totalLosses}
                      </td>

                      <td className="py-4 px-6 text-center font-bold text-white font-mono text-sm whitespace-nowrap">
                        .{(stat.winPercentage * 1000).toFixed(0).padStart(3, '0')}
                      </td>

                      <td className="py-4 px-6 text-center font-mono text-xs text-slate-300 whitespace-nowrap">
                        {stat.regWins}-{stat.regLosses}
                      </td>

                      <td className="py-4 px-6 text-center font-mono text-xs text-slate-300 whitespace-nowrap">
                        {stat.playoffWins}-{stat.playoffLosses}
                      </td>

                      <td
                        className={`py-4 px-6 text-center font-mono text-xs font-bold whitespace-nowrap ${
                          stat.pointDiff > 0 ? 'text-emerald-400' : 'text-red-400'
                        }`}
                      >
                        {stat.pointDiff > 0 ? '+' : ''}
                        {stat.pointDiff}
                      </td>

                      <td className="py-4 px-6 text-center whitespace-nowrap">
                        {stat.championships > 0 ? (
                          <span className="inline-flex items-center gap-1 bg-amber-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-full">
                            🏆 {stat.championships} {stat.championships === 1 ? 'Title' : 'Titles'}
                          </span>
                        ) : (
                          <span className="text-slate-500 text-xs font-mono">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
