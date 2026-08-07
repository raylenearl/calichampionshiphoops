import React, { useState } from 'react';
import {
  BookOpen,
  Flame,
  Award,
  Users,
  Sparkles,
  Layers,
  History,
  Trophy,
  FileText,
} from 'lucide-react';
import {
  SINGLE_GAME_INDIVIDUAL,
  SINGLE_SEASON_INDIVIDUAL,
  SINGLE_SEASON_TEAM,
  REGULAR_SEASON_CAREER_TOTALS,
  PLAYOFF_SINGLE_GAME_RECORDS,
  PLAYOFF_SINGLE_POSTSEASON_RECORDS,
  PLAYOFF_CAREER_TOTALS_RECORDS,
} from '../data/recordsData';
import { TeamBadge } from './TeamBadge';

interface RecordBookViewProps {
  onSelectTeamRecap?: (teamId: string) => void;
}

export const RecordBookView: React.FC<RecordBookViewProps> = ({ onSelectTeamRecap }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'single' | 'season_ind' | 'season_team' | 'career_ind' | 'playoffs'>('all');

  return (
    <div className="space-y-6">
      {/* Sleek, Compact Official Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/25 p-4 sm:p-5 rounded-2xl shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 shrink-0">
            <BookOpen size={24} />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                The Official CCH Record Book
              </h1>
              <span className="inline-flex items-center gap-1 text-[10px] sm:text-xs text-amber-300 font-mono bg-amber-950/80 border border-amber-800/60 px-2.5 py-0.5 rounded-full font-bold">
                <Sparkles size={11} /> Updated S3 Archives
              </span>
            </div>
            <p className="text-xs text-slate-300 font-medium mt-1">
              Complete historical clarity featuring all-time record holders alongside previous record marks.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-2 shrink-0 bg-slate-950/60 border border-slate-800/80 px-3.5 py-1.5 rounded-xl text-xs font-mono text-slate-400">
          <Layers size={13} className="text-amber-400" />
          <span>6 Historical Categories</span>
        </div>
      </div>

      {/* Navigation Tabs - Clean, Dedicated Segmented Control Bar */}
      <div className="bg-slate-950/90 border border-slate-800/90 p-1.5 rounded-2xl flex items-center overflow-x-auto scrollbar-none gap-1 sm:gap-1.5 text-xs font-extrabold shadow-md">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'all'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Layers size={14} />
          All
        </button>
        <button
          onClick={() => setActiveTab('single')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'single'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Flame size={14} />
          Single Game
        </button>
        <button
          onClick={() => setActiveTab('season_ind')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'season_ind'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Award size={14} />
          Player Season
        </button>
        <button
          onClick={() => setActiveTab('season_team')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'season_team'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Users size={14} />
          Team Season
        </button>
        <button
          onClick={() => setActiveTab('career_ind')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'career_ind'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <History size={14} />
          Career
        </button>
        <button
          onClick={() => setActiveTab('playoffs')}
          className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
            activeTab === 'playoffs'
              ? 'bg-amber-500 text-slate-950 font-black shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Trophy size={14} />
          Playoffs
        </button>
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
                <h2 className="text-lg sm:text-xl font-black text-white">1. SINGLE‑GAME RECORDS (Individual)</h2>
                <p className="text-xs text-slate-400">All-time single-game benchmarks set in regular season action.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Individual Single-Game Highs
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Current Record Holder</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Team</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Current Stat</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Opponent / Date</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Season</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">
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
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-black text-white text-xs sm:text-sm whitespace-nowrap">
                        {item.player}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-300 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-semibold text-xs text-slate-200">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs text-slate-300 font-mono whitespace-normal max-w-[160px] sm:max-w-xs break-words">
                        {item.opponent} ({item.date})
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
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
                <h2 className="text-lg sm:text-xl font-black text-white">2. SINGLE‑SEASON RECORDS (Individual)</h2>
                <p className="text-xs text-slate-400">Individual single-season totals, averages, and shooting percentage benchmarks.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Season Individual Leaders
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Current Record Holder</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Team</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Current Stat</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Season</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">
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
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-black text-white text-xs sm:text-sm whitespace-nowrap">
                        {item.player}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-300 whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-semibold text-xs text-slate-200">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
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
                <h2 className="text-lg sm:text-xl font-black text-white">3. SINGLE‑SEASON RECORDS (Team)</h2>
                <p className="text-xs text-slate-400">Franchise single-season achievements, streak records, and team shooting metrics.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Team Season Records
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Current Record Holder</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Current Stat</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Season</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">
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
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-200 font-bold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-bold text-xs sm:text-sm text-white">{item.team}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                          {item.season}
                        </span>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
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

      {/* SECTION 4: CAREER TOTALS (Regular Season) */}
      {(activeTab === 'all' || activeTab === 'career_ind') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <History size={20} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">4. ALL-TIME CAREER TOTALS (Regular Season)</h2>
                <p className="text-xs text-slate-400">All-time career leaders in regular season scoring, rebounds, assists, steals, blocks, and milestones across Seasons 1–3.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Regular Season Career Leaders
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px] lg:min-w-full">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Current Record Holder</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Career Mark</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Breakdown & Context</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Span</th>
                    <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">
                      <div className="flex items-center gap-1.5 text-amber-400">
                        <History size={13} />
                        Runner-Up / Previous Mark
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {REGULAR_SEASON_CAREER_TOTALS.map((item, idx) => (
                    <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-200 font-bold whitespace-normal max-w-[180px] sm:max-w-xs break-words">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-black text-xs sm:text-sm text-white">{item.player}</span>
                        </div>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs text-slate-300 font-mono whitespace-normal max-w-[200px] sm:max-w-xs break-words">
                        {item.details}
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                          {item.seasonOrSpan}
                        </span>
                      </td>
                      <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
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

      {/* SECTION 5: PLAYOFF RECORDS */}
      {(activeTab === 'all' || activeTab === 'playoffs') && (
        <section className="space-y-8">
          {/* Subheader */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Trophy size={20} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">5. POSTSEASON & PLAYOFF RECORDS</h2>
                <p className="text-xs text-slate-400">Single game playoff high marks, single postseason totals, and career playoff leaders.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Postseason Record Book
            </span>
          </div>

          {/* 4A: Single Game Playoff Records */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Flame size={16} /> Single-Game Playoff Records
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Record Holder</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Stat</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Matchup & Context</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Season</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Previous Record</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_SINGLE_GAME_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm max-w-[140px] sm:max-w-[180px] break-words">
                          {item.category}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-200 font-bold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-xs sm:text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs text-slate-300 font-mono whitespace-normal max-w-[200px] sm:max-w-xs break-words">
                          {item.details}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
                          {item.previousRecord || <span className="text-slate-500 italic">None</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4B: Single Postseason Run Records */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Award size={16} /> Single Postseason Run Leaders
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Record Holder</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Postseason Total</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Breakdown & Context</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Season</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Previous Record</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_SINGLE_POSTSEASON_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm max-w-[140px] sm:max-w-[180px] break-words">
                          {item.category}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-200 font-bold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-xs sm:text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs text-slate-300 font-mono whitespace-normal max-w-[200px] sm:max-w-xs break-words">
                          {item.details}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
                          {item.previousRecord || <span className="text-slate-500 italic">None</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 4C: Career Playoff Totals & Milestones */}
          <div className="space-y-3">
            <h3 className="text-sm sm:text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Trophy size={16} /> All-Time Playoff Career Leaders & Milestones
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-700">
                <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[620px] lg:min-w-full">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-[10px] sm:text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Category</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Leader / Franchise</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5 text-center">Career Mark</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Details & Span</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Era</th>
                      <th className="py-3 sm:py-4 px-3 sm:px-4 md:px-5">Runner-Up Mark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_CAREER_TOTALS_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 font-bold text-amber-400 text-xs sm:text-sm max-w-[140px] sm:max-w-[180px] break-words">
                          {item.category}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-slate-200 font-bold whitespace-normal max-w-[180px] sm:max-w-xs break-words">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-xs sm:text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-center font-black text-amber-400 font-mono text-base sm:text-lg md:text-xl whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs text-slate-300 font-mono whitespace-normal max-w-[200px] sm:max-w-xs break-words">
                          {item.details}
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-3 sm:py-3.5 px-3 sm:px-4 md:px-5 text-xs font-mono text-slate-300 whitespace-normal max-w-[180px] sm:max-w-xs break-words bg-slate-950/40">
                          {item.previousRecord || <span className="text-slate-500 italic">None</span>}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
