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
  Calendar,
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
import { InauguralGameModal } from './InauguralGameModal';
import { INAUGURAL_GAME_ARTICLE } from '../data/leagueMilestonesData';

interface RecordBookViewProps {
  onSelectTeamRecap?: (teamId: string) => void;
}

export const RecordBookView: React.FC<RecordBookViewProps> = ({ onSelectTeamRecap }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'milestones' | 'single' | 'season_ind' | 'season_team' | 'career_ind' | 'playoffs'>('all');
  const [isInauguralModalOpen, setIsInauguralModalOpen] = useState<boolean>(false);

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
            onClick={() => setActiveTab('milestones')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'milestones'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles size={14} />
            League Firsts
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
          <button
            onClick={() => setActiveTab('career_ind')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'career_ind'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <History size={14} />
            4. Career Totals
          </button>
          <button
            onClick={() => setActiveTab('playoffs')}
            className={`px-3.5 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'playoffs'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy size={14} />
            5. Playoff Records
          </button>
        </div>
      </div>

      {/* SECTION 0: HISTORIC MILESTONES & LEAGUE FIRSTS */}
      {(activeTab === 'all' || activeTab === 'milestones') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">HISTORIC CCH LEAGUE MILESTONES & FIRSTS</h2>
                <p className="text-xs text-slate-400">Defining foundational moments in Cali Championship Hoops history.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Historical League Archives
            </span>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-full">
                  <Calendar size={13} /> {INAUGURAL_GAME_ARTICLE.date}
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {INAUGURAL_GAME_ARTICLE.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  California Reds (80) vs. San Diego Sabrewolves (74) — The first-ever game in CCH history. Donnell Nash scored the league's first basket, Martin McCloud hit the first three-pointer, and Andre Creek logged a 20-point league debut.
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-300 pt-1">
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First Basket: Donnell Nash (SD)
                  </span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First 3PT: Martin McCloud (CAL)
                  </span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First Win: California Reds
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsInauguralModalOpen(true)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={16} />
                  Read Full Inaugural Game Article
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

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

      {/* SECTION 4: CAREER TOTALS (Regular Season) */}
      {(activeTab === 'all' || activeTab === 'career_ind') && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <History size={20} />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">4. ALL-TIME CAREER TOTALS (Regular Season)</h2>
                <p className="text-xs text-slate-400">All-time career leaders in regular season scoring, rebounds, assists, steals, blocks, and milestones across Seasons 1–3.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Regular Season Career Leaders
            </span>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                    <th className="py-4 px-6">Category</th>
                    <th className="py-4 px-6">Current Record Holder</th>
                    <th className="py-4 px-6 text-center">Career Mark</th>
                    <th className="py-4 px-6">Breakdown & Context</th>
                    <th className="py-4 px-6">Span</th>
                    <th className="py-4 px-6">
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
                      <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                        {item.category}
                      </td>
                      <td className="py-4 px-6 text-slate-200 font-bold whitespace-nowrap">
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={item.teamId} size="sm" />
                          <span className="font-black text-base text-white">{item.player}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                        {item.stat}
                      </td>
                      <td className="py-4 px-6 text-xs text-slate-300 font-mono whitespace-normal max-w-xs">
                        {item.details}
                      </td>
                      <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                        <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                          {item.seasonOrSpan}
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
                <h2 className="text-xl font-black text-white">5. POSTSEASON & PLAYOFF RECORDS</h2>
                <p className="text-xs text-slate-400">Single game playoff high marks, single postseason totals, and career playoff leaders.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Postseason Record Book
            </span>
          </div>

          {/* 4A: Single Game Playoff Records */}
          <div className="space-y-3">
            <h3 className="text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Flame size={16} /> Single-Game Playoff Records
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-4 px-6">Category</th>
                      <th className="py-4 px-6">Record Holder</th>
                      <th className="py-4 px-6 text-center">Stat</th>
                      <th className="py-4 px-6">Matchup & Context</th>
                      <th className="py-4 px-6">Season</th>
                      <th className="py-4 px-6">Previous Record</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_SINGLE_GAME_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-slate-200 font-bold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-300 font-mono whitespace-normal max-w-xs">
                          {item.details}
                        </td>
                        <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
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
            <h3 className="text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Award size={16} /> Single Postseason Run Leaders
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-4 px-6">Category</th>
                      <th className="py-4 px-6">Record Holder</th>
                      <th className="py-4 px-6 text-center">Postseason Total</th>
                      <th className="py-4 px-6">Breakdown & Context</th>
                      <th className="py-4 px-6">Season</th>
                      <th className="py-4 px-6">Previous Record</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_SINGLE_POSTSEASON_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-slate-200 font-bold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-300 font-mono whitespace-normal max-w-xs">
                          {item.details}
                        </td>
                        <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
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
            <h3 className="text-base font-extrabold text-amber-400 flex items-center gap-2">
              <Trophy size={16} /> All-Time Playoff Career Leaders & Milestones
            </h3>
            <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse min-w-[750px]">
                  <thead>
                    <tr className="bg-slate-950/90 border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-extrabold">
                      <th className="py-4 px-6">Category</th>
                      <th className="py-4 px-6">Leader / Franchise</th>
                      <th className="py-4 px-6 text-center">Career Mark</th>
                      <th className="py-4 px-6">Details & Span</th>
                      <th className="py-4 px-6">Era</th>
                      <th className="py-4 px-6">Runner-Up Mark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/80">
                    {PLAYOFF_CAREER_TOTALS_RECORDS.map((item, idx) => (
                      <tr key={idx} className="bg-slate-900/90 hover:bg-slate-800/60 transition-colors font-medium">
                        <td className="py-4 px-6 font-bold text-amber-400 text-sm whitespace-nowrap">
                          {item.category}
                        </td>
                        <td className="py-4 px-6 text-slate-200 font-bold whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            <TeamBadge teamId={item.teamId} size="sm" />
                            <span className="font-bold text-sm text-white">{item.player}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center font-black text-amber-400 font-mono text-lg whitespace-nowrap">
                          {item.stat}
                        </td>
                        <td className="py-4 px-6 text-xs text-slate-300 font-mono whitespace-normal max-w-xs">
                          {item.details}
                        </td>
                        <td className="py-4 px-6 text-xs font-semibold text-slate-400 whitespace-nowrap">
                          <span className="bg-slate-950 border border-slate-800 px-2.5 py-1 rounded-lg">
                            {item.seasonOrSpan}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-xs font-mono text-slate-300 whitespace-nowrap bg-slate-950/40">
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

      {/* Inaugural Game Modal */}
      <InauguralGameModal
        isOpen={isInauguralModalOpen}
        onClose={() => setIsInauguralModalOpen(false)}
        onSelectTeamRecap={onSelectTeamRecap}
      />
    </div>
  );
};
