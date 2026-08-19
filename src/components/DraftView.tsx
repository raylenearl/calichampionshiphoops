import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Search,
  SlidersHorizontal,
  GraduationCap,
  Globe,
  Award,
  ShieldCheck,
  Flame,
  CheckCircle2,
  ChevronRight,
  X,
  Target,
  ArrowUpDown,
  Zap,
  MapPin,
  TrendingUp,
  Info,
  LayoutGrid,
  ListFilter,
  Layers,
  Star,
  RotateCcw,
  Headphones,
} from 'lucide-react';
import {
  DRAFT_PROSPECTS,
  DRAFT_QUICK_STATS,
  TOP_FIVE_PLAYERS_TO_WATCH,
} from '../data/draftData';
import { DraftProspect } from '../types';
import { PodcastPlayerCard } from './PodcastPlayerCard';

interface DraftViewProps {
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3) => void;
}

export const DraftView: React.FC<DraftViewProps> = ({ onSelectTeamRecap: _onSelectTeamRecap }) => {
  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTier, setSelectedTier] = useState<string>('All');
  const [selectedPosition, setSelectedPosition] = useState<string>('All');
  const [selectedOrigin, setSelectedOrigin] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rank' | 'ovr-desc' | 'name-asc' | 'position'>('rank');
  const [viewMode, setViewMode] = useState<'cards' | 'table' | 'california'>('cards');
  const [activeProspectModal, setActiveProspectModal] = useState<DraftProspect | null>(null);

  // Position colors
  const getPosBadgeClass = (pos: string) => {
    if (pos.includes('PG')) return 'bg-sky-500/20 text-sky-400 border-sky-500/40';
    if (pos.includes('SG')) return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40';
    if (pos.includes('SF')) return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40';
    if (pos.includes('PF')) return 'bg-amber-500/20 text-amber-400 border-amber-500/40';
    if (pos.includes('C')) return 'bg-rose-500/20 text-rose-400 border-rose-500/40';
    return 'bg-slate-800 text-slate-300 border-slate-700';
  };

  // OVR color badge
  const getOvrBadgeClass = (ovr: number) => {
    if (ovr >= 84) return 'bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 font-black shadow-amber-500/30';
    if (ovr >= 80) return 'bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-950 font-black shadow-amber-500/20';
    if (ovr >= 76) return 'bg-gradient-to-br from-emerald-500 to-teal-600 text-white font-black shadow-emerald-500/20';
    if (ovr >= 73) return 'bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black shadow-blue-500/20';
    return 'bg-gradient-to-br from-slate-700 to-slate-800 text-slate-200 font-bold';
  };

  // Filtered & Sorted prospects for Season 4
  const filteredProspects = useMemo(() => {
    return DRAFT_PROSPECTS.filter((p) => {
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.school.toLowerCase().includes(q) ||
        p.position.toLowerCase().includes(q) ||
        p.notableAttributes.toLowerCase().includes(q) ||
        p.archetype.toLowerCase().includes(q);

      const matchesTier =
        selectedTier === 'All' ||
        (selectedTier === 'Top' && p.tier === 'Top Prospects') ||
        (selectedTier === 'Lottery' && p.tier === 'Lottery Prospects') ||
        (selectedTier === 'Mid' && p.tier === 'Mid-Round Prospects') ||
        (selectedTier === 'Late' && p.tier === 'Late Round / Two-Way');

      const matchesPosition =
        selectedPosition === 'All' ||
        p.primaryPosition === selectedPosition ||
        p.secondaryPosition === selectedPosition ||
        p.position.includes(selectedPosition);

      const matchesOrigin =
        selectedOrigin === 'All' ||
        (selectedOrigin === 'California' && p.schoolType === 'California College') ||
        (selectedOrigin === 'NCAA' && p.schoolType === 'NCAA / University') ||
        (selectedOrigin === 'International' && p.schoolType === 'International') ||
        (selectedOrigin === 'HighSchool' && p.schoolType === 'High School / JUCO');

      if (viewMode === 'california' && p.schoolType !== 'California College') {
        return false;
      }

      return matchesSearch && matchesTier && matchesPosition && matchesOrigin;
    }).sort((a, b) => {
      if (sortBy === 'rank') return a.rank - b.rank;
      if (sortBy === 'ovr-desc') return b.ovr - a.ovr || a.rank - b.rank;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      if (sortBy === 'position') return a.position.localeCompare(b.position) || a.rank - b.rank;
      return 0;
    });
  }, [searchQuery, selectedTier, selectedPosition, selectedOrigin, sortBy, viewMode]);

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Hero Header Banner */}
      <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-2 border-amber-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Glow backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1.5">
                <Sparkles size={14} className="text-amber-400" />
                SEASON 4 DRAFT CENTRAL
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs font-mono font-bold px-3 py-1 rounded-full border border-slate-700">
                {DRAFT_PROSPECTS.length} Verified Prospects
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Season 4 Draft Prospects Big Board
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Complete scouting profiles, physical measurements, skill grades, and attribute breakdowns for all {DRAFT_PROSPECTS.length} draft candidates entering Cali Championship Hoops. From UC San Diego’s consensus #1 wing Carlton Daugherty to jumbo floor-general R.J. Rush, sharpshooter Lloyd Boomer, international snipers, and California collegiate pipeline stars.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5 shrink-0">
            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Top Tier (80+)
              </span>
              <span className="text-xl sm:text-2xl font-black text-amber-400">
                {DRAFT_QUICK_STATS.topTierCount}
              </span>
              <span className="text-[10px] text-slate-500 block">Franchise Stars</span>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Lottery (76-79)
              </span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400">
                {DRAFT_QUICK_STATS.lotteryCount}
              </span>
              <span className="text-[10px] text-slate-500 block">Core Starters</span>
            </div>

            <div className="bg-slate-900/90 border border-slate-800 p-3.5 rounded-2xl text-center">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-wider block">
                Cali Colleges
              </span>
              <span className="text-xl sm:text-2xl font-black text-sky-400">
                {DRAFT_QUICK_STATS.californiaCollegesCount}
              </span>
              <span className="text-[10px] text-slate-500 block">Local Pipeline</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Podcast Episode inside Draft Central */}
      <PodcastPlayerCard
        audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Daugherty_versus_Wilkens_for_Franchise_Foundation.m4a"
        title="Draft Debate: Carlton Daugherty vs. Grok Wilkens for Franchise Foundation"
        subtitle="CCH Insider Roundtable • UC San Diego two-way maestro vs. Kentucky interior titan"
      />

      {/* Top 5 Players to Watch Spotlight */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30">
              <Flame size={18} />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                Top 5 Players to Watch
              </h2>
              <p className="text-xs text-slate-400 font-mono">
                Marquee blue-chips & high-impact defensive anchors ready for immediate stardom
              </p>
            </div>
          </div>
          <span className="text-xs font-mono font-bold text-amber-400 hidden sm:inline-block">
            Featured Scouts Pick
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TOP_FIVE_PLAYERS_TO_WATCH.map((watchPlayer) => {
            const prospect = DRAFT_PROSPECTS.find((p) => p.rank === watchPlayer.rank);
            if (!prospect) return null;

            return (
              <div
                key={watchPlayer.rank}
                onClick={() => setActiveProspectModal(prospect)}
                className="bg-gradient-to-b from-slate-900 to-slate-950 border border-amber-500/30 hover:border-amber-400 p-4 rounded-2xl shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Top 5 Tag */}
                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded-bl-lg shadow-sm flex items-center gap-0.5">
                  <Star size={9} className="fill-slate-950" />
                  TOP 5
                </div>

                <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-2xl group-hover:bg-amber-500/15 transition-all" />

                <div className="space-y-3 pt-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-amber-400">
                      #{prospect.rank}
                    </span>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-black ${getOvrBadgeClass(prospect.ovr)}`}>
                      {prospect.ovr} OVR
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors leading-tight">
                      {prospect.name}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-1">
                      <span className={`px-1.5 py-0.2 rounded text-[11px] font-bold border ${getPosBadgeClass(prospect.position)}`}>
                        {prospect.position}
                      </span>
                      <span>•</span>
                      <span className="truncate">{prospect.school}</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-1">
                    <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                      Key Strength
                    </span>
                    <p className="text-xs text-slate-200 font-semibold leading-snug">
                      {watchPlayer.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 group-hover:text-amber-300">
                  <span>Full Report</span>
                  <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Bar: Search, Tiers, Positions, View Modes */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3 text-amber-400" size={18} />
            <input
              type="text"
              placeholder="Search by prospect name, school, position, or attribute (e.g. 'Carlton', 'Pacific', '3PT', 'Perimeter D')..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-11 pr-10 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-medium transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-3 text-slate-500 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* View Mode & Sort Dropdowns */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* View Mode Switcher */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-1 flex items-center text-xs">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'cards'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <LayoutGrid size={14} />
                <span>Cards</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <ListFilter size={14} />
                <span>Table</span>
              </button>
              <button
                onClick={() => setViewMode('california')}
                className={`px-3 py-1.5 rounded-xl font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  viewMode === 'california'
                    ? 'bg-amber-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <MapPin size={14} />
                <span>Cali Pipeline</span>
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-1 bg-slate-950 border border-slate-800 p-1 rounded-2xl text-xs">
              <span className="text-[11px] font-mono text-slate-500 px-2 font-bold flex items-center gap-1">
                <ArrowUpDown size={12} /> Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-slate-200 text-xs font-bold focus:outline-none pr-2 cursor-pointer"
              >
                <option value="rank" className="bg-slate-900 text-white">Rank (#1-44)</option>
                <option value="ovr-desc" className="bg-slate-900 text-white">Overall Rating (High-Low)</option>
                <option value="name-asc" className="bg-slate-900 text-white">Name (A-Z)</option>
                <option value="position" className="bg-slate-900 text-white">Position (PG-C)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Filter Pills: Tiers, Positions, Origins */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-xs">
          {/* Tiers */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Tier:</span>
            {['All', 'Top', 'Lottery', 'Mid', 'Late'].map((tier) => (
              <button
                key={tier}
                onClick={() => setSelectedTier(tier)}
                className={`px-3 py-1 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedTier === tier
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {tier === 'All' ? 'All Tiers' : tier === 'Top' ? 'Top (80+)' : tier === 'Lottery' ? 'Lottery (76-79)' : tier === 'Mid' ? 'Mid (73-75)' : 'Late (70-72)'}
              </button>
            ))}
          </div>

          {/* Positions */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Pos:</span>
            {['All', 'PG', 'SG', 'SF', 'PF', 'C'].map((pos) => (
              <button
                key={pos}
                onClick={() => setSelectedPosition(pos)}
                className={`px-2.5 py-1 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedPosition === pos
                    ? 'bg-amber-500 text-slate-950'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {pos}
              </button>
            ))}
          </div>

          {/* Origin Filter */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] font-mono text-slate-500 font-bold uppercase tracking-wider">Origin:</span>
            {['All', 'California', 'NCAA', 'International'].map((origin) => (
              <button
                key={origin}
                onClick={() => setSelectedOrigin(origin)}
                className={`px-2.5 py-1 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  selectedOrigin === origin
                    ? 'bg-sky-500 text-slate-950'
                    : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {origin === 'California' ? '🌴 California College' : origin}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results Summary Bar */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
        <span>
          Showing <strong className="text-amber-400 font-bold">{filteredProspects.length}</strong> of {DRAFT_PROSPECTS.length} prospects
        </span>
        {(searchQuery || selectedTier !== 'All' || selectedPosition !== 'All' || selectedOrigin !== 'All' || viewMode === 'california') && (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTier('All');
              setSelectedPosition('All');
              setSelectedOrigin('All');
              setViewMode('cards');
            }}
            className="text-amber-400 hover:underline flex items-center gap-1 cursor-pointer font-bold"
          >
            <RotateCcw size={12} /> Reset Filters
          </button>
        )}
      </div>

      {/* CARDS VIEW */}
      {viewMode !== 'table' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProspects.map((prospect) => (
            <div
              key={prospect.rank}
              onClick={() => setActiveProspectModal(prospect)}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-5 rounded-3xl space-y-4 shadow-xl hover:-translate-y-1 transition-all cursor-pointer group flex flex-col justify-between relative overflow-hidden"
            >
              <div className="space-y-3">
                {/* Header Rank + Position + OVR */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-black px-2 py-0.5 rounded-lg bg-slate-950 border border-slate-800 text-amber-400">
                      #{prospect.rank}
                    </span>
                    <span className={`px-2 py-0.5 rounded-lg text-xs font-bold border ${getPosBadgeClass(prospect.position)}`}>
                      {prospect.position}
                    </span>
                  </div>
                  <span className={`px-2.5 py-0.5 rounded-xl text-xs font-black ${getOvrBadgeClass(prospect.ovr)}`}>
                    {prospect.ovr} OVR
                  </span>
                </div>

                {/* Prospect Name & School */}
                <div>
                  <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors leading-tight">
                    {prospect.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-1">
                    <GraduationCap size={13} className="text-amber-400 shrink-0" />
                    <span className="truncate">{prospect.school}</span>
                    {prospect.schoolType === 'California College' && (
                      <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.2 rounded border border-sky-500/20 shrink-0">
                        Cali
                      </span>
                    )}
                  </div>
                </div>

                {/* Archetype & Key Strength */}
                <div className="space-y-1.5 bg-slate-950/80 p-3 rounded-2xl border border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-amber-400 font-bold">{prospect.archetype}</span>
                    <span className="text-slate-500">{prospect.height || ''}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium leading-snug">
                    {prospect.keyStrength}
                  </p>
                </div>

                {/* Grade Badges Grid */}
                <div className="grid grid-cols-2 gap-1.5">
                  {prospect.gradeBadges.slice(0, 2).map((badge, i) => (
                    <div key={i} className="bg-slate-950 p-2 rounded-xl border border-slate-800/60 text-center">
                      <span className="text-[10px] font-mono text-slate-400 block truncate">{badge.label}</span>
                      <span className="text-xs font-black text-amber-400 mt-0.5 block">{badge.grade}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Card */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-amber-300">
                <span className="truncate text-[11px]">Comp: {prospect.proComparison?.split('/')[0] || 'Starter'}</span>
                <span className="flex items-center gap-0.5 font-bold shrink-0">
                  Report <ChevronRight size={13} />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TABLE VIEW */}
      {viewMode === 'table' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950 text-slate-400 font-mono font-bold border-b border-slate-800">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Prospect</th>
                  <th className="py-3 px-4">Pos</th>
                  <th className="py-3 px-4">School / Origin</th>
                  <th className="py-3 px-4 text-center">OVR</th>
                  <th className="py-3 px-4 hidden md:table-cell">Archetype</th>
                  <th className="py-3 px-4">Notable Strengths</th>
                  <th className="py-3 px-4 text-right">Scouting</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                {filteredProspects.map((p) => (
                  <tr
                    key={p.rank}
                    onClick={() => setActiveProspectModal(p)}
                    className="hover:bg-slate-800/40 transition-colors cursor-pointer"
                  >
                    <td className="py-3.5 px-4 font-mono font-black text-amber-400">
                      #{p.rank}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-black text-white text-sm">{p.name}</div>
                      <div className="text-[11px] text-slate-400 font-mono">{p.height} • {p.weight}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-md text-xs font-bold border ${getPosBadgeClass(p.position)}`}>
                        {p.position}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="text-slate-200 font-semibold">{p.school}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{p.schoolType}</div>
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <span className={`px-2.5 py-1 rounded-xl text-xs font-black ${getOvrBadgeClass(p.ovr)}`}>
                        {p.ovr}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 hidden md:table-cell text-slate-300">
                      <span className="text-slate-200 font-semibold">{p.archetype}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {p.notableAttributes.split(',').map((attr, i) => (
                          <span
                            key={i}
                            className="text-[10px] font-mono font-bold bg-slate-950 text-slate-200 px-2 py-0.5 rounded border border-slate-800"
                          >
                            {attr.trim()}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveProspectModal(p);
                        }}
                        className="px-3 py-1 rounded-xl bg-slate-950 hover:bg-amber-500 text-slate-300 hover:text-slate-950 font-mono text-xs font-bold border border-slate-800 transition-all cursor-pointer"
                      >
                        Scout →
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* California Pipeline Spotlight Box */}
      <div className="bg-gradient-to-r from-sky-950/40 via-slate-900 to-slate-950 border border-sky-500/30 rounded-3xl p-6 space-y-4 shadow-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-sky-500/20 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 rounded-2xl bg-sky-500/20 text-sky-400 border border-sky-500/30">
              <MapPin size={20} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-black text-white">
                California Collegiate Pipeline Spotlight
              </h3>
              <p className="text-xs text-slate-400">
                8 local collegiate stars available across Northern and Southern California programs
              </p>
            </div>
          </div>
          <span className="text-xs font-mono text-sky-400 font-bold bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/30">
            UC San Diego • Pacific • San Jose State • LMU • Santa Clara • USF • MSJC • UC Davis
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {DRAFT_PROSPECTS.filter((p) => p.schoolType === 'California College' || p.school.includes('San Jacinto')).map((p) => (
            <div
              key={p.rank}
              onClick={() => setActiveProspectModal(p)}
              className="bg-slate-950/80 border border-slate-800 hover:border-sky-400 p-3 rounded-2xl text-center space-y-1.5 cursor-pointer transition-all hover:scale-105"
            >
              <span className="text-[10px] font-mono font-black text-amber-400 block">#{p.rank}</span>
              <h4 className="text-xs font-black text-white truncate">{p.name}</h4>
              <span className="text-[10px] font-mono text-sky-400 truncate block font-bold">{p.school}</span>
              <span className={`inline-block text-[10px] px-2 py-0.5 rounded-lg ${getOvrBadgeClass(p.ovr)}`}>
                {p.ovr} OVR
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* INTERACTIVE PROSPECT DETAIL MODAL */}
      {activeProspectModal && (
        <div
          onClick={() => setActiveProspectModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border-2 border-amber-500/40 w-full max-w-2xl rounded-3xl p-6 sm:p-7 space-y-6 relative shadow-2xl text-left"
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProspectModal(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    DRAFT BOARD RANK #{activeProspectModal.rank}
                  </span>
                  {(activeProspectModal.isTopFiveWatch || activeProspectModal.rank <= 5) && (
                    <span className="font-mono text-xs font-black px-2.5 py-0.5 rounded-lg bg-amber-500 text-slate-950 shadow-sm flex items-center gap-1">
                      <Star size={12} className="fill-slate-950" />
                      TOP 5 PROSPECT
                    </span>
                  )}
                  <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${getPosBadgeClass(activeProspectModal.position)}`}>
                    {activeProspectModal.position}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-semibold">
                    {activeProspectModal.tier}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {activeProspectModal.name}
                </h2>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-300 font-medium pt-1">
                  <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                    <GraduationCap size={15} /> {activeProspectModal.school}
                  </span>
                  {activeProspectModal.height && (
                    <span>• Height: <strong className="text-white">{activeProspectModal.height}</strong></span>
                  )}
                  {activeProspectModal.weight && (
                    <span>• Weight: <strong className="text-white">{activeProspectModal.weight}</strong></span>
                  )}
                </div>
              </div>

              {/* Big OVR Badge */}
              <div className="flex flex-col items-center">
                <div className={`w-20 h-20 rounded-3xl flex flex-col items-center justify-center shadow-2xl ${getOvrBadgeClass(activeProspectModal.ovr)}`}>
                  <span className="text-2xl font-black">{activeProspectModal.ovr}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest -mt-1">OVR</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 font-bold mt-1.5">Consensus Grade</span>
              </div>
            </div>

            {/* Key Strengths & Pro Comparison */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Zap size={13} /> Archetype
                </span>
                <p className="text-sm font-bold text-white">{activeProspectModal.archetype}</p>
                <p className="text-xs text-slate-400">{activeProspectModal.keyStrength}</p>
              </div>

              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-1">
                <span className="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-wider flex items-center gap-1">
                  <Target size={13} /> NBA / Pro Comparison
                </span>
                <p className="text-sm font-bold text-white">{activeProspectModal.proComparison || 'High-Impact Rotation Player'}</p>
                <p className="text-xs text-slate-400">Playstyle & functional role analog</p>
              </div>
            </div>

            {/* Notable Attributes Badges */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                Scouted Notable Attributes & Skill Grades
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {activeProspectModal.gradeBadges.map((badge, i) => (
                  <div key={i} className="bg-slate-950 border border-slate-800 p-2.5 rounded-xl text-center">
                    <span className="text-[10px] font-mono text-slate-400 block truncate">{badge.label}</span>
                    <span className="text-sm font-black text-amber-400 mt-0.5 block">{badge.grade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scouting Notes Paragraph */}
            <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-1.5">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info size={14} /> Official Scouting Evaluation
              </span>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                {activeProspectModal.scoutingNotes}
              </p>
            </div>

            {/* Action Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-800">
              <span className="text-xs font-mono text-slate-500">
                Season 4 Draft Class • Cali Championship Hoops
              </span>
              <button
                onClick={() => setActiveProspectModal(null)}
                className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
