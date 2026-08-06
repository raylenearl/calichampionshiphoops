import React, { useState } from 'react';
import { STANDINGS_S1, STANDINGS_S2, STANDINGS_S3 } from '../data/standingsData';
import { TEAM_ABBREVIATIONS } from '../data/teamsData';
import { StandingsRow } from '../types';
import { TeamBadge } from './TeamBadge';
import { Trophy, Activity, Filter, CheckCircle2, AlertCircle } from 'lucide-react';

interface StandingsViewProps {
  selectedSeason: 1 | 2 | 3;
  setSelectedSeason: (s: 1 | 2 | 3) => void;
  onSelectTeamRecap?: (teamId: string, season: 1 | 2 | 3) => void;
}

export const StandingsView: React.FC<StandingsViewProps> = ({
  selectedSeason,
  setSelectedSeason,
  onSelectTeamRecap,
}) => {
  const [conferenceFilter, setConferenceFilter] = useState<'All' | 'Northern Cali' | 'Southern Cali'>('All');

  const rawStandings = {
    1: STANDINGS_S1,
    2: STANDINGS_S2,
    3: STANDINGS_S3,
  }[selectedSeason];

  const standingsData = rawStandings.filter((row) => {
    if (conferenceFilter === 'All') return true;
    return row.conference === conferenceFilter;
  });

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-slate-900/80 border border-slate-800 p-5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Activity className="text-amber-400" size={24} />
            <h2 className="text-2xl font-black text-white">
              Regular Season Standings - Season {selectedSeason}
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Regular season standings with playoff seeding markers and current win/loss streaks
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Season Toggle */}
          <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
            <button
              onClick={() => setSelectedSeason(1)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedSeason === 1 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Season 1
            </button>
            <button
              onClick={() => setSelectedSeason(2)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedSeason === 2 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Season 2
            </button>
            <button
              onClick={() => setSelectedSeason(3)}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedSeason === 3 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Season 3
            </button>
          </div>

          {/* Conference Filter */}
          <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
            <button
              onClick={() => setConferenceFilter('All')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                conferenceFilter === 'All' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              All League
            </button>
            <button
              onClick={() => setConferenceFilter('Northern Cali')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                conferenceFilter === 'Northern Cali' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              NorCal
            </button>
            <button
              onClick={() => setConferenceFilter('Southern Cali')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                conferenceFilter === 'Southern Cali' ? 'bg-slate-800 text-amber-400 font-bold' : 'text-slate-400 hover:text-white'
              }`}
            >
              SoCal
            </button>
          </div>
        </div>
      </div>

      {/* Standings Table */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse">
            <thead>
              <tr className="bg-slate-950 text-slate-400 text-xs font-extrabold uppercase border-b border-slate-800">
                <th className="py-4 px-4 w-16 text-center">Rank</th>
                <th className="py-4 px-4">Team</th>
                <th className="py-4 px-4">Conference</th>
                <th className="py-4 px-4 text-center">W - L</th>
                <th className="py-4 px-4 text-center">Win %</th>
                <th className="py-4 px-4 text-center">GB</th>
                <th className="py-4 px-4 text-center">PPG</th>
                <th className="py-4 px-4 text-center">Streak</th>
                <th className="py-4 px-4 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {standingsData.map((row: StandingsRow, idx: number) => {
                const winPct = ((row.wins / (row.wins + row.losses)) * 100).toFixed(1);
                const topWins = standingsData[0]?.wins || row.wins;
                const topLosses = standingsData[0]?.losses || row.losses;
                const gbValue = idx === 0 ? '0.0' : (((topWins - row.wins) + (row.losses - topLosses)) / 2).toFixed(1);
                const isTop8 = row.rank <= 8;

                return (
                  <tr
                    key={row.teamId}
                    onClick={() => onSelectTeamRecap && onSelectTeamRecap(row.teamId, selectedSeason)}
                    className={`hover:bg-slate-800/80 transition-colors cursor-pointer group ${
                      isTop8 ? 'bg-slate-900/40' : 'bg-slate-950/20'
                    }`}
                  >
                    {/* Rank */}
                    <td className="py-3.5 px-4 text-center font-black text-slate-300">
                      <span
                        className={`inline-flex items-center justify-center w-7 h-7 rounded-lg text-xs ${
                          row.rank === 1
                            ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                            : row.rank <= 8
                            ? 'bg-slate-800 text-slate-200'
                            : 'text-slate-500'
                        }`}
                      >
                        {row.rank}
                      </span>
                    </td>

                    {/* Team Name & Badge */}
                    <td className="py-3.5 px-4 font-bold text-white">
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <TeamBadge teamId={row.teamId} size="sm" />
                          <div>
                            <div className="flex items-center gap-1.5">
                              {row.clinchedTopSeed ? (
                                <span className="text-amber-400 font-extrabold text-xs">z-</span>
                              ) : row.clinchedPlayoffs ? (
                                <span className="text-slate-400 font-bold text-xs">x-</span>
                              ) : null}
                              <span className="group-hover:text-amber-400 font-black text-sm transition-colors">
                                {row.teamName}
                              </span>
                              {TEAM_ABBREVIATIONS[row.teamId] && (
                                <span className="text-[10px] font-mono font-bold text-amber-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 shrink-0">
                                  {TEAM_ABBREVIATIONS[row.teamId]}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <span className="text-[10px] bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-400 px-2 py-0.5 rounded-full font-bold transition-all shrink-0">
                          S{selectedSeason} Recap
                        </span>
                      </div>
                    </td>

                    {/* Conference */}
                    <td className="py-3.5 px-4 text-xs">
                      <span
                        className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] ${
                          row.conference === 'Northern Cali'
                            ? 'bg-blue-950 text-blue-300 border border-blue-800'
                            : 'bg-amber-950 text-amber-300 border border-amber-800'
                        }`}
                      >
                        {row.conference}
                      </span>
                    </td>

                    {/* Wins - Losses */}
                    <td className="py-3.5 px-4 text-center font-bold font-mono text-slate-200">
                      {row.wins} - {row.losses}
                    </td>

                    {/* Win % */}
                    <td className="py-3.5 px-4 text-center font-semibold font-mono text-slate-400 text-xs">
                      {winPct}%
                    </td>

                    {/* Games Behind (GB) */}
                    <td className="py-3.5 px-4 text-center font-bold font-mono text-slate-300 text-xs">
                      {gbValue === '0.0' ? '-' : gbValue}
                    </td>

                    {/* PPG */}
                    <td className="py-3.5 px-4 text-center font-bold font-mono text-amber-400">
                      {row.ppg.toFixed(1)}
                    </td>

                    {/* Streak */}
                    <td className="py-3.5 px-4 text-center text-xs font-semibold">
                      <span
                        className={`px-2 py-0.5 rounded-md font-mono text-[11px] ${
                          row.streak.startsWith('Won')
                            ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                            : 'bg-red-950 text-red-400 border border-red-800'
                        }`}
                      >
                        {row.streak}
                      </span>
                    </td>

                    {/* Playoff Status */}
                    <td className="py-3.5 px-4 text-center text-xs font-medium">
                      {row.clinchedTopSeed ? (
                        <span className="inline-flex items-center gap-1 text-amber-400 font-extrabold text-[11px] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800">
                          <Trophy size={12} /> #1 Seed
                        </span>
                      ) : row.clinchedPlayoffs ? (
                        <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-[11px]">
                          <CheckCircle2 size={13} /> Playoffs
                        </span>
                      ) : (
                        <span className="text-slate-500 text-[11px]">Eliminated</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Legend Footer */}
        <div className="bg-slate-950 p-4 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 font-mono text-amber-400 font-bold">
              z- Clinched #1 Overall Seed
            </span>
            <span className="flex items-center gap-1 font-mono text-slate-300 font-semibold">
              x- Clinched Playoff Spot (Top 8)
            </span>
          </div>
          <p className="text-[11px] text-slate-500 italic">
            {selectedSeason === 2
              ? 'Top 4 teams in each conference advance to the CCH Postseason Championship Bracket.'
              : 'Top 8 teams advance to the CCH Postseason Championship Bracket.'}
          </p>
        </div>
      </div>
    </div>
  );
};
