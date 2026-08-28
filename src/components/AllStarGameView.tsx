import React, { useState } from 'react';
import { ALL_STAR_GAMES, AllStarGame } from '../data/allStarData';
import { TeamBadge } from './TeamBadge';
import {
  Star,
  Trophy,
  Flame,
  Award,
  Sparkles,
  Zap,
  Target,
  Users,
  CheckCircle2,
  Clock,
  CircleDot,
  Globe,
} from 'lucide-react';

export const AllStarGameView: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<number>(3);
  const [activeTab, setActiveTab] = useState<'overview' | 'rosters' | 'elam'>('overview');

  const currentGame: AllStarGame =
    ALL_STAR_GAMES.find((g) => g.season === selectedSeason) || ALL_STAR_GAMES[0];

  return (
    <div className="space-y-8">
      {/* Main Header Banner */}
      <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            <Star size={16} className="fill-amber-400 text-amber-400" />
            CCH All-Star Game & Skills Festivities
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Official CCH All-Star Showcase
          </h1>
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            Featuring the NorCal vs. SoCal Conference clash, Dunk Contest, 3-Point Shootout, and side exhibition games.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full mt-2">
            <Sparkles size={13} />
            Season {currentGame.season} Showcase • {currentGame.location}
          </div>
        </div>

        {/* Season Switcher */}
        <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex items-center gap-1 text-xs font-bold shrink-0 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setSelectedSeason(3)}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              selectedSeason === 3
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 3
          </button>
          <button
            onClick={() => setSelectedSeason(2)}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              selectedSeason === 2
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 2
          </button>
          <button
            onClick={() => setSelectedSeason(1)}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              selectedSeason === 1
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 1
          </button>
        </div>
      </div>

      {/* Sub-Navigation Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 text-xs font-bold overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'overview'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
          }`}
        >
          <Trophy size={14} />
          Game Summary
        </button>
        <button
          onClick={() => setActiveTab('rosters')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'rosters'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
          }`}
        >
          <Users size={14} />
          Box Scores
        </button>
        <button
          onClick={() => setActiveTab('elam')}
          className={`px-4 py-2 rounded-xl transition-all flex items-center gap-2 cursor-pointer ${
            activeTab === 'elam'
              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
              : 'text-slate-400 hover:text-white bg-slate-900 border border-slate-800'
          }`}
        >
          <Target size={14} />
          Format & Rules
        </button>
      </div>

      {/* TAB 1: OVERVIEW & HIGHLIGHTS */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Main Scoreboard Display */}
          <div className="bg-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-800 pb-6 relative z-10">
              {/* Winner Team */}
              <div className="flex items-center gap-4 text-center md:text-left">
                <div className="p-4 bg-amber-500/20 border border-amber-500/40 rounded-2xl text-amber-400 font-black text-2xl">
                  {currentGame.winner.includes('Northern') || currentGame.winner.includes('NorCal') ? 'NOR' : 'SOC'}
                </div>
                <div>
                  <span className="text-[10px] font-extrabold uppercase bg-emerald-950 text-emerald-400 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                    ALL-STAR CHAMPIONS
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {currentGame.winner}
                  </h2>
                  <p className="text-xs text-slate-400">{currentGame.location}</p>
                </div>
              </div>

              {/* Score Display */}
              <div className="bg-slate-950 border border-slate-800 px-8 py-4 rounded-3xl text-center shrink-0 shadow-inner">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest block mb-1">
                  {currentGame.format}
                </span>
                <div className="flex items-center gap-4 font-mono font-black text-4xl sm:text-5xl text-white">
                  <span className="text-amber-400">{currentGame.winningScore}</span>
                  <span className="text-slate-600 text-2xl">-</span>
                  <span className="text-slate-400">{currentGame.losingScore}</span>
                </div>
                {currentGame.elamEndingDetails && (
                  <span className="inline-block mt-2 text-[11px] font-bold text-amber-300 bg-amber-950/80 px-2.5 py-0.5 rounded-full border border-amber-800/60 font-mono">
                    Target Score Finish
                  </span>
                )}
              </div>

              {/* Runner Up Team */}
              <div className="flex items-center gap-4 text-center md:text-right">
                <div className="order-2 md:order-1">
                  <span className="text-[10px] font-extrabold uppercase bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded-full">
                    RUNNER-UP
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-300 mt-1">
                    {currentGame.loser}
                  </h2>
                  <p className="text-xs text-slate-500">Season {currentGame.season} Exhibition</p>
                </div>
                <div className="order-1 md:order-2 p-4 bg-slate-950 border border-slate-800 rounded-2xl text-slate-400 font-black text-2xl">
                  {currentGame.loser.includes('Northern') || currentGame.loser.includes('NorCal') ? 'NOR' : 'SOC'}
                </div>
              </div>
            </div>

            {/* Game Summary Recap */}
            <p className="text-sm text-slate-300 leading-relaxed italic bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80">
              &quot;{currentGame.recap}&quot;
            </p>
          </div>

          {/* Side Exhibition Game Showcase (if present) */}
          {currentGame.sideGame && (
            <div className="bg-slate-900/90 border border-purple-500/30 p-6 rounded-3xl space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-purple-900/50 pb-3">
                <div className="flex items-center gap-2 text-purple-400 font-extrabold text-sm uppercase tracking-wider">
                  <Globe size={18} />
                  <span>All-Star Weekend Exhibition: {currentGame.sideGame.title}</span>
                </div>
                <span className="text-xs font-mono font-bold bg-purple-950 text-purple-300 border border-purple-800 px-3 py-1 rounded-full">
                  Exhibition Showcase
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Final Score</span>
                  <div className="text-xl font-black text-white font-mono mt-1">
                    <span className="text-purple-400">{currentGame.sideGame.winner} {currentGame.sideGame.winnerScore}</span>
                    <span className="text-slate-500 mx-2">-</span>
                    <span className="text-slate-400">{currentGame.sideGame.loser} {currentGame.sideGame.loserScore}</span>
                  </div>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <span className="text-[10px] font-bold text-slate-400 uppercase block">Player of the Game</span>
                  <div className="text-base font-extrabold text-white mt-1">
                    {currentGame.sideGame.playerOfTheGame}
                  </div>
                  <span className="text-xs text-amber-300 font-mono font-semibold">
                    {currentGame.sideGame.potgStats}
                  </span>
                </div>

                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 flex items-center">
                  <p className="text-xs text-slate-300 leading-relaxed italic">
                    {currentGame.sideGame.details}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Honors & Skill Contests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MVP Card */}
            <div className="bg-slate-900 border border-amber-500/40 p-6 rounded-3xl space-y-4 shadow-lg relative overflow-hidden">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Trophy size={16} /> All-Star MVP
                </span>
                <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2.5 py-0.5 rounded-full font-mono">
                  Season {currentGame.season}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TeamBadge teamId={currentGame.mvp.teamId} size="lg" />
                <div>
                  <h3 className="text-2xl font-black text-white">{currentGame.mvp.player}</h3>
                  <p className="text-xs text-slate-400 font-semibold">{currentGame.mvp.team}</p>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 font-mono text-xs text-amber-300 font-bold">
                {currentGame.mvp.statLine}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {currentGame.mvp.notes}
              </p>
            </div>

            {/* Slam Dunk Contest Card */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-lg">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Flame size={16} /> Dunk Contest Winner
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 font-bold px-2.5 py-0.5 rounded-full font-mono">
                  Slam Dunk
                </span>
              </div>

              <div className="flex items-center gap-3">
                <TeamBadge teamId={currentGame.dunkContestWinner.teamId} size="lg" />
                <div>
                  <h3 className="text-2xl font-black text-white">
                    {currentGame.dunkContestWinner.player}
                  </h3>
                  <p className="text-xs text-slate-400 font-semibold">
                    {currentGame.dunkContestWinner.team}
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 leading-relaxed">
                💡 <strong className="text-amber-300">Highlight:</strong> {currentGame.dunkContestWinner.highlight}
              </div>
            </div>

            {/* 3-Point Contest Card */}
            {currentGame.threePointWinner && (
              <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                    <Zap size={16} /> 3pt Contest Winner
                  </span>
                  <span className="text-[10px] bg-slate-800 text-slate-300 font-bold px-2.5 py-0.5 rounded-full font-mono">
                    3-Point Contest
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <TeamBadge teamId={currentGame.threePointWinner.teamId} size="lg" />
                  <div>
                    <h3 className="text-2xl font-black text-white">
                      {currentGame.threePointWinner.player}
                    </h3>
                    <p className="text-xs text-slate-400 font-semibold">
                      {currentGame.threePointWinner.team}
                    </p>
                  </div>
                </div>

                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800 font-mono text-xs text-amber-300 font-bold">
                  {currentGame.threePointWinner.score || '3pt Shootout Champion'}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: ROSTERS & BOX SCORES */}
      {activeTab === 'rosters' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-2">
            <h2 className="text-xl font-black text-white flex items-center gap-2">
              <Users size={20} className="text-amber-400" />
              Season {currentGame.season} All-Star Official Box Score
            </h2>
            <p className="text-xs text-slate-400">
              Detailed statistical breakdown for East/NorCal and West/SoCal All-Stars.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* NorCal / East Box Score */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl overflow-x-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 min-w-[340px]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-amber-500 text-slate-950 font-black text-xs rounded-lg">
                    NorCal
                  </span>
                  <h3 className="text-lg font-black text-white">Northern California All-Stars</h3>
                </div>
                <span className="font-mono text-2xl font-black text-amber-400">
                  {currentGame.winningScore > currentGame.losingScore && (currentGame.winner.includes('Nor') || currentGame.winner.includes('North'))
                    ? currentGame.winningScore
                    : currentGame.losingScore}{' '}
                  PTS
                </span>
              </div>

              <table className="w-full text-left text-xs font-mono border-collapse min-w-[340px]">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase">
                    <th className="pb-2 font-bold">Name</th>
                    <th className="pb-2 font-bold text-center">MIN</th>
                    <th className="pb-2 font-bold text-center text-amber-400">PTS</th>
                    <th className="pb-2 font-bold text-center">REB</th>
                    <th className="pb-2 font-bold text-center">AST</th>
                    <th className="pb-2 font-bold text-center">STL</th>
                    <th className="pb-2 font-bold text-center">BLK</th>
                    <th className="pb-2 font-bold text-center">FG</th>
                    <th className="pb-2 font-bold text-center">3PT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {currentGame.norCalRoster.map((player, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="py-2.5 font-sans font-bold text-white">
                        <div className="flex items-center gap-1.5">
                          <TeamBadge teamId={player.teamId} size="sm" />
                          <div>
                            <div>{player.name}</div>
                            <div className="text-[9px] text-slate-400 font-normal">{player.team}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2.5 text-center text-slate-300">{player.min ?? '-'}</td>
                      <td className="py-2.5 text-center font-bold text-amber-400 text-sm">{player.pts ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.reb ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.ast ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-400">{player.stl ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-400">{player.blk ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.fg ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.fg3 ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* SoCal / West Box Score */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl overflow-x-auto">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 min-w-[340px]">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-black text-xs rounded-lg">
                    SoCal
                  </span>
                  <h3 className="text-lg font-black text-white">Southern California All-Stars</h3>
                </div>
                <span className="font-mono text-2xl font-black text-slate-300">
                  {currentGame.winningScore > currentGame.losingScore && (currentGame.winner.includes('So') || currentGame.winner.includes('South'))
                    ? currentGame.winningScore
                    : currentGame.losingScore}{' '}
                  PTS
                </span>
              </div>

              <table className="w-full text-left text-xs font-mono border-collapse min-w-[340px]">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase">
                    <th className="pb-2 font-bold">Name</th>
                    <th className="pb-2 font-bold text-center">MIN</th>
                    <th className="pb-2 font-bold text-center text-amber-400">PTS</th>
                    <th className="pb-2 font-bold text-center">REB</th>
                    <th className="pb-2 font-bold text-center">AST</th>
                    <th className="pb-2 font-bold text-center">STL</th>
                    <th className="pb-2 font-bold text-center">BLK</th>
                    <th className="pb-2 font-bold text-center">FG</th>
                    <th className="pb-2 font-bold text-center">3PT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {currentGame.soCalRoster.map((player, idx) => (
                    <tr key={idx} className="hover:bg-slate-800/40">
                      <td className="py-2.5 font-sans font-bold text-white">
                        <div className="flex items-center gap-1.5">
                          <TeamBadge teamId={player.teamId} size="sm" />
                          <div>
                            <div>{player.name}</div>
                            <div className="text-[9px] text-slate-400 font-normal">{player.team}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-2.5 text-center text-slate-300">{player.min ?? '-'}</td>
                      <td className="py-2.5 text-center font-bold text-amber-400 text-sm">{player.pts ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.reb ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.ast ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-400">{player.stl ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-400">{player.blk ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.fg ?? '-'}</td>
                      <td className="py-2.5 text-center text-slate-300">{player.fg3 ?? '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Side Exhibition Box Score (e.g. Rookies vs Sophomores) */}
          {currentGame.sideGame && currentGame.sideGame.team1Roster && currentGame.sideGame.team2Roster && (
            <div className="pt-6 border-t border-slate-800 space-y-6">
              <div className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-slate-950 border border-purple-500/40 p-5 rounded-3xl space-y-2">
                <div className="flex items-center gap-2 text-purple-400 font-extrabold text-xs uppercase tracking-widest">
                  <Globe size={16} />
                  Rising Stars Exhibition Box Score
                </div>
                <h3 className="text-xl font-black text-white">
                  {currentGame.sideGame.title} (Final: {currentGame.sideGame.winner} {currentGame.sideGame.winnerScore} - {currentGame.sideGame.loserScore} {currentGame.sideGame.loser})
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Sophomores / Team 1 Box Score */}
                <div className="bg-slate-900 border border-purple-500/30 rounded-3xl p-5 space-y-4 shadow-xl overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 min-w-[340px]">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-purple-500 text-slate-950 font-black text-xs rounded-lg">
                        Sophomores
                      </span>
                      <h4 className="text-base font-black text-white">{currentGame.sideGame.team1Name}</h4>
                    </div>
                    <span className="font-mono text-2xl font-black text-purple-400">
                      {currentGame.sideGame.winnerScore} PTS
                    </span>
                  </div>

                  <table className="w-full text-left text-xs font-mono border-collapse min-w-[340px]">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase">
                        <th className="pb-2 font-bold">Name</th>
                        <th className="pb-2 font-bold text-center">MIN</th>
                        <th className="pb-2 font-bold text-center text-purple-400">PTS</th>
                        <th className="pb-2 font-bold text-center">REB</th>
                        <th className="pb-2 font-bold text-center">AST</th>
                        <th className="pb-2 font-bold text-center">STL</th>
                        <th className="pb-2 font-bold text-center">BLK</th>
                        <th className="pb-2 font-bold text-center">FG</th>
                        <th className="pb-2 font-bold text-center">3PT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {currentGame.sideGame.team1Roster.map((player, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="py-2.5 font-sans font-bold text-white">
                            <div className="flex items-center gap-1.5">
                              <TeamBadge teamId={player.teamId} size="sm" />
                              <div>
                                <div>{player.name}</div>
                                <div className="text-[9px] text-slate-400 font-normal">{player.team}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 text-center text-slate-300">{player.min ?? '-'}</td>
                          <td className="py-2.5 text-center font-bold text-purple-400 text-sm">{player.pts ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.reb ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.ast ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-400">{player.stl ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-400">{player.blk ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.fg ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.fg3 ?? '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Rookies / Team 2 Box Score */}
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 shadow-xl overflow-x-auto">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 min-w-[340px]">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-slate-800 text-slate-300 font-black text-xs rounded-lg">
                        Rookies
                      </span>
                      <h4 className="text-base font-black text-white">{currentGame.sideGame.team2Name}</h4>
                    </div>
                    <span className="font-mono text-2xl font-black text-slate-300">
                      {currentGame.sideGame.loserScore} PTS
                    </span>
                  </div>

                  <table className="w-full text-left text-xs font-mono border-collapse min-w-[340px]">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase">
                        <th className="pb-2 font-bold">Name</th>
                        <th className="pb-2 font-bold text-center">MIN</th>
                        <th className="pb-2 font-bold text-center text-amber-400">PTS</th>
                        <th className="pb-2 font-bold text-center">REB</th>
                        <th className="pb-2 font-bold text-center">AST</th>
                        <th className="pb-2 font-bold text-center">STL</th>
                        <th className="pb-2 font-bold text-center">BLK</th>
                        <th className="pb-2 font-bold text-center">FG</th>
                        <th className="pb-2 font-bold text-center">3PT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {currentGame.sideGame.team2Roster.map((player, idx) => (
                        <tr key={idx} className="hover:bg-slate-800/40">
                          <td className="py-2.5 font-sans font-bold text-white">
                            <div className="flex items-center gap-1.5">
                              <TeamBadge teamId={player.teamId} size="sm" />
                              <div>
                                <div>{player.name}</div>
                                <div className="text-[9px] text-slate-400 font-normal">{player.team}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-2.5 text-center text-slate-300">{player.min ?? '-'}</td>
                          <td className="py-2.5 text-center font-bold text-amber-400 text-sm">{player.pts ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.reb ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.ast ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-400">{player.stl ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-400">{player.blk ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.fg ?? '-'}</td>
                          <td className="py-2.5 text-center text-slate-300">{player.fg3 ?? '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: TARGET SCORE FORMAT EXPLANATION */}
      {activeTab === 'elam' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-slate-950 border border-amber-500/40 p-6 sm:p-8 rounded-3xl space-y-4">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
              <Target size={18} />
              Basketball Finish Dynamics
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Understanding the 4th Quarter Target Score Format
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed max-w-3xl">
              Introduced in CCH Season 3 for the All-Star Game at Sac Town Center, the target score format replaces the standard 4th-quarter countdown clock with a fixed target score, ensuring every game finishes with a made bucket.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl w-fit">
                <Clock size={22} />
              </div>
              <h3 className="text-lg font-black text-white">1. Clock Shutoff</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                At the designated benchmark in the 4th quarter, the game clock is permanently turned OFF.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl w-fit">
                <CircleDot size={22} />
              </div>
              <h3 className="text-lg font-black text-white">2. Setting the Target</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                A Target Score is established by adding a predetermined number of points to the leading team&apos;s score. Every possession becomes high-stakes basketball down the stretch.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
              <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl w-fit">
                <CheckCircle2 size={22} />
              </div>
              <h3 className="text-lg font-black text-white">3. Walk-off Winner</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                The first team to reach or exceed the Target Score wins immediately! Every game ends with a walk-off field goal or clutch free throw.
              </p>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-3">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <Sparkles size={18} className="text-amber-400" />
              Season 3 All-Star Game Historical Impact
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              In a thrilling Season 3 showdown at Sac Town Center, Northern Cali edged Southern Cali 79-77. San Jose star Donald Hardy capped off an unforgettable All-Star Weekend—after winning the Slam Dunk Contest, he hit the walk-off game-winner to secure MVP honors and a 79-77 victory for NorCal.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
