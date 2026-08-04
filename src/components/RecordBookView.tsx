import React, { useState } from 'react';
import {
  BookOpen,
  Flame,
  Award,
  Users,
  Sparkles,
  Layers,
  History,
} from 'lucide-react';
import {
  SINGLE_GAME_INDIVIDUAL,
  SINGLE_SEASON_INDIVIDUAL,
  SINGLE_SEASON_TEAM,
} from '../data/recordsData';
import { TeamBadge } from './TeamBadge';

export const RecordBookView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'single' | 'season_ind' | 'season_team'>('all');

  return (
    <div className="space-y-10">
      {/* Official Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 p-6 sm:p-8 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            <BookOpen size={16} />
            CCH Record Book & Historical Archives
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            The Official CCH Record Book
          </h1>
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            Every record displays both the current all-time mark and the previous record holder, providing complete historical clarity.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 font-mono bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full mt-2">
            <Sparkles size={13} />
            Updated through Season 3 – Official CCH Archives
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-slate-950 border border-slate-800 p-1.5 rounded-2xl flex flex-wrap gap-1 text-xs font-bold shrink-0 self-start md:self-auto shadow-inner">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'all'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers size={14} />
            All Categories
          </button>
          <button
            onClick={() => setActiveTab('single')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'single'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Flame size={14} />
            1. Single-Game
          </button>
          <button
            onClick={() => setActiveTab('season_ind')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'season_ind'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award size={14} />
            2. Season (Player)
          </button>
          <button
            onClick={() => setActiveTab('season_team')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'season_team'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Users size={14} />
            3. Season (Team)
          </button>
        </div>
      </div>

      {/* SECTION 1: SINGLE-GAME RECORDS (Individual) */}
      {(activeTab === 'all' || activeTab === 'single') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Flame size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">1. SINGLE‑GAME RECORDS (Individual)</h2>
                <p className="text-xs text-slate-400">All-time single-game benchmarks set in regular season action.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Individual Single-Game Highs
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[850px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Current Record Holder</th>
                    <th className="py-4 px-6">Team</th>
                    <th className="py-4 px-6 text-center">Current Stat</th>
                    <th className="py-4 px-6">Opponent / Date</th>
                    <th className="py-4 px-6">Season</th>
                    <th className="py-4 px-6">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <History size={13} />
                        Previous Record Holder
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {SINGLE_GAME_INDIVIDUAL.map((item, idx) => (
                    <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                      <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 font-black text-white text-base whitespace-nowrap">
                        {item.player}
                      </td>
                      <td className="py-4 px-6 text-slate-300 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-semibold text-xs text-slate-200">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-xl whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-mono whitespace-nowrap">
                        {item.opponent} ({item.date})
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
                        {item.previousRecord ? (
                          <span className="text-slate-300">{item.previousRecord}</span>
                        ) : (
                          <span className="text-slate-500 italic">None</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: SINGLE-SEASON RECORDS (Individual) */}
      {(activeTab === 'all' || activeTab === 'season_ind') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Award size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">2. SINGLE‑SEASON RECORDS (Individual)</h2>
                <p className="text-xs text-slate-400">Individual single-season totals, averages, and shooting percentage benchmarks.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Season Individual Leaders
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Current Record Holder</th>
                    <th className="py-4 px-6">Team</th>
                    <th className="py-4 px-6 text-center">Current Stat</th>
                    <th className="py-4 px-6">Season</th>
                    <th className="py-4 px-6">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <History size={13} />
                        Previous Record Holder
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {SINGLE_SEASON_INDIVIDUAL.map((item, idx) => (
                    <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                      <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 font-black text-white text-base whitespace-nowrap">
                        {item.player}
                      </td>
                      <td className="py-4 px-6 text-slate-300 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-semibold text-xs text-slate-200">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
                        {item.previousRecord ? (
                          <span className="text-slate-300">{item.previousRecord}</span>
                        ) : (
                          <span className="text-slate-500 italic">None</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: SINGLE-SEASON RECORDS (Team) */}
      {(activeTab === 'all' || activeTab === 'season_team') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Users size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">3. SINGLE‑SEASON RECORDS (Team)</h2>
                <p className="text-xs text-slate-400">Franchise single-season achievements, streak records, and team shooting metrics.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Team Season Records
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[750px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Current Record Holder</th>
                    <th className="py-4 px-6 text-center">Current Stat</th>
                    <th className="py-4 px-6">Season</th>
                    <th className="py-4 px-6">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <History size={13} />
                        Previous Record Holder
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {SINGLE_SEASON_TEAM.map((item, idx) => (
                    <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                      <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 text-slate-200 font-bold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-bold text-sm text-white">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
                        {item.previousRecord ? (
                          <span className="text-slate-300">{item.previousRecord}</span>
                        ) : (
                          <span className="text-slate-500 italic">None</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
