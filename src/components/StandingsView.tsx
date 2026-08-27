import React, { useState } from 'react';
import { STANDINGS_S1, STANDINGS_S2, STANDINGS_S3, STANDINGS_S4 } from '../data/standingsData';
import { TEAM_ABBREVIATIONS, TEAMS } from '../data/teamsData';
import { StandingsRow } from '../types';
import { TeamBadge } from './TeamBadge';
import {
  Trophy,
  Activity,
  Filter,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Flame,
  Crown,
  ChevronRight,
  TrendingUp,
  Shield,
  Users,
  Target,
  BarChart3,
  Layers,
  ArrowUpRight,
  Star,
} from 'lucide-react';

interface StandingsViewProps {
  selectedSeason: 1 | 2 | 3 | 4;
  setSelectedSeason: (s: 1 | 2 | 3 | 4) => void;
  onSelectTeamRecap?: (teamId: string, season: 1 | 2 | 3 | 4) => void;
}

export const StandingsView: React.FC<StandingsViewProps> = ({
  selectedSeason,
  setSelectedSeason,
  onSelectTeamRecap,
}) => {
  const [conferenceFilter, setConferenceFilter] = useState<'All' | 'Northern Cali' | 'Southern Cali'>('All');
  const [standingsTab, setStandingsTab] = useState<'table' | 'conference_grid' | 'power_rankings'>('table');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const rawStandings: StandingsRow[] = {
    1: STANDINGS_S1,
    2: STANDINGS_S2,
    3: STANDINGS_S3,
    4: STANDINGS_S4,
  }[selectedSeason] || STANDINGS_S4;

  const standingsData = rawStandings
    .filter((row) => {
      if (conferenceFilter === 'All') return true;
      return row.conference === conferenceFilter;
    })
    .filter((row) => {
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        row.teamName.toLowerCase().includes(q) ||
        row.conference.toLowerCase().includes(q) ||
        (row.keyStars && row.keyStars.toLowerCase().includes(q)) ||
        (row.headCoach && row.headCoach.toLowerCase().includes(q))
      );
    });

  const norCalTeams = rawStandings.filter((r) => r.conference === 'Northern Cali');
  const soCalTeams = rawStandings.filter((r) => r.conference === 'Southern Cali');

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 flex-wrap">
              <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                <Activity size={22} />
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {selectedSeason === 4
                  ? 'Season 4 Official Standings & Power Hierarchy'
                  : `Season ${selectedSeason} Regular Season Standings`}
              </h2>
              {selectedSeason === 4 && (
                <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-amber-500 text-slate-950 shadow-md">
                  Active Season
                </span>
              )}
            </div>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
              {selectedSeason === 4
                ? 'Official 12-franchise standings table, Top 8 playoff cutoff tracker, and preseason team power ratings.'
                : `Official regular season standings with playoff seeding markers, conference finishes, and win/loss records.`}
            </p>
          </div>

          {/* Season Switcher Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">
              Season:
            </span>
            <div className="bg-slate-950 border border-slate-800 p-1 rounded-2xl flex flex-wrap text-xs font-semibold shadow-inner">
              <button
                onClick={() => setSelectedSeason(1)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedSeason === 1 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 1
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedSeason === 2 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 2
              </button>
              <button
                onClick={() => setSelectedSeason(3)}
                className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap ${
                  selectedSeason === 3 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 3
              </button>
              <button
                onClick={() => setSelectedSeason(4)}
                className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  selectedSeason === 4 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles size={13} className={selectedSeason === 4 ? 'text-slate-950' : 'text-amber-400'} />
                <span>Season 4</span>
              </button>
            </div>
          </div>
        </div>

        {/* Sub-Tabs & Filters Row */}
        <div className="pt-2 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Sub-view Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setStandingsTab('table')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                standingsTab === 'table'
                  ? 'bg-slate-800 text-amber-400 font-black shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <BarChart3 size={14} />
              <span>Standings Table</span>
            </button>
            <button
              onClick={() => setStandingsTab('conference_grid')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                standingsTab === 'conference_grid'
                  ? 'bg-slate-800 text-amber-400 font-black shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers size={14} />
              <span>Conference Playoff Grid</span>
            </button>
            <button
              onClick={() => setStandingsTab('power_rankings')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                standingsTab === 'power_rankings'
                  ? 'bg-slate-800 text-amber-400 font-black shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Flame size={14} />
              <span>Power Index & Rosters</span>
            </button>
          </div>

          {/* Conference Filter */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800/80">
            <button
              onClick={() => setConferenceFilter('All')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                conferenceFilter === 'All'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All 12 Teams
            </button>
            <button
              onClick={() => setConferenceFilter('Northern Cali')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                conferenceFilter === 'Northern Cali'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              NorCal (6)
            </button>
            <button
              onClick={() => setConferenceFilter('Southern Cali')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                conferenceFilter === 'Southern Cali'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SoCal (6)
            </button>
          </div>
        </div>
      </div>

      {/* Season 4 Highlight Callout Banner */}
      {selectedSeason === 4 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Crown size={20} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                #1 Pre-Season Rating
              </span>
              <p className="text-sm font-black text-white truncate">
                San Diego Strykers (92.5 OVR)
              </p>
              <span className="text-[11px] text-amber-400 font-semibold">
                MVP A.J. Hinton • DeAnte Gray • Ray Gambino Gamble
              </span>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
              <Flame size={20} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                NorCal Leader
              </span>
              <p className="text-sm font-black text-white truncate">
                Oakland Renegades (87.8 OVR)
              </p>
              <span className="text-[11px] text-blue-400 font-semibold">
                Jamar Dean (96) • Alonzo Reece (92)
              </span>
            </div>
          </div>

          <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-2xl flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Shield size={20} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wider block">
                Defending Champions
              </span>
              <p className="text-sm font-black text-white truncate">
                Sacramento Stallions
              </p>
              <span className="text-[11px] text-purple-400 font-semibold">
                2x CCH Title Holders (S1 & S3)
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 1: STANDINGS TABLE */}
      {standingsTab === 'table' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse min-w-[720px]">
              <thead>
                <tr className="bg-slate-950 text-slate-400 text-xs font-extrabold uppercase border-b border-slate-800">
                  <th className="py-4 px-4 w-16 text-center">Rank</th>
                  <th className="py-4 px-4">Franchise</th>
                  <th className="py-4 px-4">Conference</th>
                  <th className="py-4 px-4 text-center">W - L</th>
                  <th className="py-4 px-4 text-center">Win %</th>
                  <th className="py-4 px-4 text-center">GB</th>
                  <th className="py-4 px-4 text-center">PPG</th>
                  <th className="py-4 px-4 text-center">Streak / Status</th>
                  {selectedSeason === 4 && <th className="py-4 px-4 text-center">Roster OVR</th>}
                  <th className="py-4 px-4 text-center">Playoff Seeding</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {standingsData.map((row: StandingsRow, idx: number) => {
                  const totalGames = row.wins + row.losses;
                  const winPct = totalGames > 0 ? ((row.wins / totalGames) * 100).toFixed(1) : '0.0';
                  const topWins = standingsData[0]?.wins || row.wins;
                  const topLosses = standingsData[0]?.losses || row.losses;
                  const gbValue =
                    totalGames === 0
                      ? '-'
                      : idx === 0
                      ? '0.0'
                      : (((topWins - row.wins) + (row.losses - topLosses)) / 2).toFixed(1);
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
                              <div className="flex items-center gap-1.5 flex-wrap">
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
                              {row.headCoach && (
                                <span className="text-[11px] text-slate-400 font-normal block truncate">
                                  HC: {row.headCoach}
                                </span>
                              )}
                            </div>
                          </div>
                          <span className="text-[10px] bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-400 px-2.5 py-1 rounded-full font-bold transition-all shrink-0 flex items-center gap-1">
                            <span>S{selectedSeason} Hub</span>
                            <ArrowUpRight size={11} />
                          </span>
                        </div>
                      </td>

                      {/* Conference */}
                      <td className="py-3.5 px-4 text-xs">
                        <span
                          className={`px-2.5 py-0.5 rounded-full font-bold text-[10px] whitespace-nowrap ${
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

                      {/* Streak / Momentum */}
                      <td className="py-3.5 px-4 text-center text-xs font-semibold">
                        <span
                          className={`px-2.5 py-0.5 rounded-md font-mono text-[11px] whitespace-nowrap ${
                            row.streak.startsWith('Won') || row.streak.includes('#1')
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                              : row.streak.includes('Defending')
                              ? 'bg-purple-950 text-purple-300 border border-purple-800'
                              : row.streak.includes('Era') || row.streak.includes('Debut')
                              ? 'bg-blue-950 text-blue-300 border border-blue-800'
                              : 'bg-slate-950 text-slate-300 border border-slate-800'
                          }`}
                        >
                          {row.streak}
                        </span>
                      </td>

                      {/* Roster OVR (S4) */}
                      {selectedSeason === 4 && (
                        <td className="py-3.5 px-4 text-center font-bold font-mono text-xs text-amber-300">
                          {row.teamOvr ? `${row.teamOvr} OVR` : '84.0 OVR'}
                        </td>
                      )}

                      {/* Playoff Status */}
                      <td className="py-3.5 px-4 text-center text-xs font-medium">
                        {row.clinchedTopSeed ? (
                          <span className="inline-flex items-center gap-1 text-amber-400 font-extrabold text-[11px] bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800 whitespace-nowrap">
                            <Trophy size={12} /> #1 Seed
                          </span>
                        ) : row.clinchedPlayoffs ? (
                          <span className="inline-flex items-center gap-1 text-emerald-400 font-bold text-[11px] whitespace-nowrap">
                            <CheckCircle2 size={13} /> Playoffs
                          </span>
                        ) : selectedSeason === 4 ? (
                          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                            row.rank <= 4
                              ? 'text-amber-400 bg-amber-950/40 border border-amber-800/60'
                              : row.rank <= 8
                              ? 'text-emerald-400 bg-emerald-950/40 border border-emerald-800/60'
                              : 'text-slate-400 bg-slate-950 border border-slate-800'
                          }`}>
                            {row.rank <= 4 ? 'Top 4 Contender' : row.rank <= 8 ? 'Playoff Picture' : 'Hunting Spot'}
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
            <div className="flex flex-wrap items-center gap-4">
              <span className="flex items-center gap-1 font-mono text-amber-400 font-bold">
                z- Clinched #1 Overall Seed
              </span>
              <span className="flex items-center gap-1 font-mono text-slate-300 font-semibold">
                x- Clinched Playoff Spot (Top 8)
              </span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              {selectedSeason === 4
                ? 'Season 4 Playoff Format: Top 8 teams advance to the Championship Bracket.'
                : selectedSeason === 2
                ? 'Top 4 teams in each conference advance to the CCH Postseason Championship Bracket.'
                : 'Top 8 teams advance to the CCH Postseason Championship Bracket.'}
            </p>
          </div>
        </div>
      )}

      {/* TAB 2: CONFERENCE PLAYOFF GRID (SIDE-BY-SIDE NORCAL VS SOCAL) */}
      {standingsTab === 'conference_grid' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Northern Cali Conference Card */}
          <div className="bg-slate-900 border border-blue-900/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <h3 className="text-lg font-black text-white">Northern California Conference</h3>
              </div>
              <span className="text-xs font-mono text-blue-400 font-bold">6 Franchises</span>
            </div>

            <div className="space-y-2">
              {norCalTeams.map((team, idx) => (
                <div
                  key={team.teamId}
                  onClick={() => onSelectTeamRecap && onSelectTeamRecap(team.teamId, selectedSeason)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    idx < 4
                      ? 'bg-slate-950/80 border-blue-500/30 hover:border-blue-400'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <TeamBadge teamId={team.teamId} size="sm" />
                    <div className="min-w-0">
                      <p className="text-sm font-black text-white truncate hover:text-amber-400 transition-colors">
                        {team.teamName}
                      </p>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {team.headCoach || `Seed #${idx + 1}`}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-black font-mono text-amber-400 block">
                      {selectedSeason === 4 && team.teamOvr ? `${team.wins}-${team.losses} • ${team.teamOvr} OVR` : `${team.wins}-${team.losses}`}
                    </span>
                    <span className={`text-[10px] font-bold uppercase ${idx < 4 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {idx < 4 ? 'Playoff Seed' : 'Outside Cut'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-500 italic">
                {selectedSeason === 4
                  ? '— Top 8 overall league records clinch Championship Bracket berths —'
                  : '— Top 4 NorCal teams clinch automatic playoff berths —'}
              </span>
            </div>
          </div>

          {/* Southern Cali Conference Card */}
          <div className="bg-slate-900 border border-amber-900/40 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="w-3 h-3 rounded-full bg-amber-500" />
                <h3 className="text-lg font-black text-white">Southern California Conference</h3>
              </div>
              <span className="text-xs font-mono text-amber-400 font-bold">6 Franchises</span>
            </div>

            <div className="space-y-2">
              {soCalTeams.map((team, idx) => (
                <div
                  key={team.teamId}
                  onClick={() => onSelectTeamRecap && onSelectTeamRecap(team.teamId, selectedSeason)}
                  className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                    idx < 4
                      ? 'bg-slate-950/80 border-amber-500/30 hover:border-amber-400'
                      : 'bg-slate-950/40 border-slate-800 hover:border-slate-700 opacity-80'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 ${
                      idx === 0 ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-300'
                    }`}>
                      {idx + 1}
                    </span>
                    <TeamBadge teamId={team.teamId} size="sm" />
                    <div className="min-w-0">
                      <p className="text-sm font-black text-white truncate hover:text-amber-400 transition-colors">
                        {team.teamName}
                      </p>
                      <span className="text-[11px] text-slate-400 font-mono">
                        {team.headCoach || `Seed #${idx + 1}`}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-black font-mono text-amber-400 block">
                      {selectedSeason === 4 && team.teamOvr ? `${team.wins}-${team.losses} • ${team.teamOvr} OVR` : `${team.wins}-${team.losses}`}
                    </span>
                    <span className={`text-[10px] font-bold uppercase ${idx < 4 ? 'text-emerald-400' : 'text-slate-500'}`}>
                      {idx < 4 ? 'Playoff Seed' : 'Outside Cut'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-slate-500 italic">
                {selectedSeason === 4
                  ? '— Top 8 overall league records clinch Championship Bracket berths —'
                  : '— Top 4 SoCal teams clinch automatic playoff berths —'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: POWER INDEX & ROSTER ANALYSIS */}
      {standingsTab === 'power_rankings' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {standingsData.map((team) => (
            <div
              key={team.teamId}
              onClick={() => onSelectTeamRecap && onSelectTeamRecap(team.teamId, selectedSeason)}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-5 rounded-3xl space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group relative overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TeamBadge teamId={team.teamId} size="md" />
                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400 block">
                      Rank #{team.rank} • {team.conference}
                    </span>
                    <h4 className="text-base font-black text-white group-hover:text-amber-400 transition-colors">
                      {team.teamName}
                    </h4>
                  </div>
                </div>
                {team.teamOvr && (
                  <span className="text-lg font-black font-mono text-amber-400 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
                    {team.teamOvr}
                  </span>
                )}
              </div>

              {team.keyStars && (
                <div className="bg-slate-950 p-3 rounded-2xl border border-slate-800/80 space-y-1">
                  <span className="text-[10px] font-extrabold uppercase text-slate-400 block flex items-center gap-1">
                    <Star size={11} className="text-amber-400" /> Featured Roster Anchors:
                  </span>
                  <p className="text-xs text-slate-200 font-semibold leading-snug">
                    {team.keyStars}
                  </p>
                </div>
              )}

              {team.headCoach && (
                <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                  <span className="font-medium">Head Coach:</span>
                  <span className="font-bold text-slate-200">{team.headCoach}</span>
                </div>
              )}

              {team.notes && (
                <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/60 pt-2 italic">
                  &quot;{team.notes}&quot;
                </p>
              )}

              <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                <span className="text-[11px] font-mono text-slate-400">
                  {selectedSeason === 4 ? `Pre-Season Proj: ${team.ppg} PPG` : `Record: ${team.wins}-${team.losses}`}
                </span>
                <span className="text-xs font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>View Franchise Hub</span>
                  <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
