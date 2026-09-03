import React, { useState, useMemo } from 'react';
import { TEAMS } from '../data/teamsData';
import { SEASON_ROSTERS, RosterPlayer } from '../data/rostersData';
import { TeamBadge } from './TeamBadge';
import {
  Search,
  Users,
  Shield,
  Sparkles,
  Trophy,
  Filter,
  ArrowUpDown,
  Flame,
  LayoutGrid,
  ListFilter,
  Star,
  Zap,
  CheckCircle2,
  X,
  ExternalLink,
  ChevronDown,
  Award,
  Hash,
  Quote,
} from 'lucide-react';

interface OpeningDayRostersViewProps {
  onSelectTeam?: (teamId: string) => void;
  onOpenTeamModal?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
}

interface FlattenedRosterPlayer extends RosterPlayer {
  teamId: string;
  teamName: string;
  conference: 'Northern Cali' | 'Southern Cali';
  primaryColor: string;
  coach: string;
  coachTenure: string;
}

export const OpeningDayRostersView: React.FC<OpeningDayRostersViewProps> = ({
  onSelectTeam,
  onOpenTeamModal,
}) => {
  const [selectedTeamFilter, setSelectedTeamFilter] = useState<string>('all');
  const [selectedConference, setSelectedConference] = useState<string>('all');
  const [selectedPosition, setSelectedPosition] = useState<string>('all');
  const [selectedExperience, setSelectedExperience] = useState<string>('all');
  const [selectedRatingTier, setSelectedRatingTier] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table' | 'spotlight'>('cards');
  const [sortField, setSortField] = useState<'ovr' | 'name' | 'age' | 'number'>('ovr');
  const [sortAsc, setSortAsc] = useState<boolean>(false);

  // Flatten all 132 Season 4 players into a searchable list
  const allS4Players: FlattenedRosterPlayer[] = useMemo(() => {
    const list: FlattenedRosterPlayer[] = [];
    TEAMS.forEach((team) => {
      const roster = SEASON_ROSTERS[team.id]?.s4;
      if (roster && roster.players) {
        roster.players.forEach((p) => {
          list.push({
            ...p,
            teamId: team.id,
            teamName: team.name,
            conference: team.conference,
            primaryColor: team.primaryColor,
            coach: roster.coach || team.coach || 'Head Coach',
            coachTenure: roster.coachTenure || 'Season 4',
          });
        });
      }
    });
    return list;
  }, []);

  // Filtered players based on user selection
  const filteredPlayers = useMemo(() => {
    return allS4Players.filter((p) => {
      // Team filter
      if (selectedTeamFilter !== 'all' && p.teamId !== selectedTeamFilter) return false;

      // Conference filter
      if (selectedConference !== 'all' && p.conference !== selectedConference) return false;

      // Position filter
      if (selectedPosition !== 'all') {
        if (selectedPosition === 'Guard' && !p.position.includes('G')) return false;
        if (selectedPosition === 'Forward' && !p.position.includes('F')) return false;
        if (selectedPosition === 'Center' && !p.position.includes('C')) return false;
        if (['PG', 'SG', 'SF', 'PF', 'C'].includes(selectedPosition) && !p.position.includes(selectedPosition)) {
          return false;
        }
      }

      // Experience filter
      if (selectedExperience === 'rookie' && !p.seasonYear?.toLowerCase().includes('rookie')) return false;
      if (selectedExperience === 'veteran' && p.seasonYear?.toLowerCase().includes('rookie')) return false;

      // Rating Tier filter
      const ovr = p.ovr || 70;
      if (selectedRatingTier === '90plus' && ovr < 90) return false;
      if (selectedRatingTier === '80plus' && (ovr < 80 || ovr >= 90)) return false;
      if (selectedRatingTier === '75plus' && (ovr < 75 || ovr >= 80)) return false;
      if (selectedRatingTier === 'under75' && ovr >= 75) return false;

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = p.name.toLowerCase().includes(q);
        const matchesTeam = p.teamName.toLowerCase().includes(q);
        const matchesSchool = (p.schoolOrNote || '').toLowerCase().includes(q);
        const matchesPos = p.position.toLowerCase().includes(q);
        const matchesNum = (p.number || '').toLowerCase().includes(q);
        if (!matchesName && !matchesTeam && !matchesSchool && !matchesPos && !matchesNum) {
          return false;
        }
      }

      return true;
    });
  }, [
    allS4Players,
    selectedTeamFilter,
    selectedConference,
    selectedPosition,
    selectedExperience,
    selectedRatingTier,
    searchQuery,
  ]);

  // Sorted players
  const sortedPlayers = useMemo(() => {
    return [...filteredPlayers].sort((a, b) => {
      let comparison = 0;
      if (sortField === 'ovr') {
        comparison = (b.ovr || 0) - (a.ovr || 0);
      } else if (sortField === 'name') {
        comparison = a.name.localeCompare(b.name);
      } else if (sortField === 'age') {
        comparison = (a.age || 0) - (b.age || 0);
      } else if (sortField === 'number') {
        const numA = parseInt(a.number || '999', 10);
        const numB = parseInt(b.number || '999', 10);
        comparison = (isNaN(numA) ? 999 : numA) - (isNaN(numB) ? 999 : numB);
      }
      return sortAsc ? -comparison : comparison;
    });
  }, [filteredPlayers, sortField, sortAsc]);

  // Grouped by team for the Cards View
  const teamsToDisplay = useMemo(() => {
    let teams = TEAMS;
    if (selectedTeamFilter !== 'all') {
      teams = teams.filter((t) => t.id === selectedTeamFilter);
    }
    if (selectedConference !== 'all') {
      teams = teams.filter((t) => t.conference === selectedConference);
    }
    return teams;
  }, [selectedTeamFilter, selectedConference]);

  // League-wide Highlights
  const totalRookies = allS4Players.filter((p) => p.seasonYear?.toLowerCase().includes('rookie')).length;
  const superstars90Plus = allS4Players.filter((p) => (p.ovr || 0) >= 90);
  const topRookies = allS4Players
    .filter((p) => p.seasonYear?.toLowerCase().includes('rookie'))
    .sort((a, b) => (b.ovr || 0) - (a.ovr || 0))
    .slice(0, 6);

  const resetFilters = () => {
    setSelectedTeamFilter('all');
    setSelectedConference('all');
    setSelectedPosition('all');
    setSelectedExperience('all');
    setSelectedRatingTier('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    selectedTeamFilter !== 'all' ||
    selectedConference !== 'all' ||
    selectedPosition !== 'all' ||
    selectedExperience !== 'all' ||
    selectedRatingTier !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <div className="space-y-8">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
                <Sparkles size={13} />
                Official Season 4
              </span>
              <span className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-xs font-bold border border-slate-700">
                12 Teams • 132 Players
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Season 4 Opening Day Rosters
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed font-normal">
              Complete official rosters, player ratings, jersey numbers, physical measurables, college origins, and coaching staffs for all 12 CCH franchises heading into the Season 4 tip-off.
            </p>
          </div>

          {/* Quick Metrics Cluster */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 shrink-0">
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block whitespace-nowrap">Top Player</span>
              <p className="text-lg font-black text-amber-400 font-mono">99 OVR</p>
              <span className="text-[10px] text-slate-300 font-semibold whitespace-nowrap block">A.J. Hinton (SDS)</span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Rookie Class</span>
              <p className="text-lg font-black text-emerald-400 font-mono">{totalRookies}</p>
              <span className="text-[10px] text-slate-400 font-semibold">New Additions</span>
            </div>

            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center col-span-2 sm:col-span-1">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">Superstars (90+)</span>
              <p className="text-lg font-black text-amber-300 font-mono">{superstars90Plus.length}</p>
              <span className="text-[10px] text-slate-400 font-semibold">Franchise Icons</span>
            </div>
          </div>
        </div>

        {/* Season 4 MVP Quote Callout */}
        <div className="relative z-10 mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950/50 p-4 rounded-2xl border border-slate-800/60">
          <div className="flex items-start gap-3">
            <Quote className="text-amber-400 shrink-0 mt-0.5" size={20} />
            <p className="text-xs sm:text-sm italic text-slate-200 font-medium leading-snug">
              &quot;We have the talent, but individual ratings do not win championships. Our singular focus is getting to the Finals and finishing the job.&quot;
            </p>
          </div>
          <span className="text-[11px] font-black text-amber-400 whitespace-nowrap sm:text-right shrink-0">
            — A.J. Hinton <span className="text-slate-400 font-normal">(Reigning MVP • 99 OVR)</span>
          </span>
        </div>
      </div>

      {/* Filter & Search Control Center */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xl space-y-4">
        {/* Search Bar & View Mode Toggles */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-3 text-slate-500" size={18} />
            <input
              type="text"
              placeholder="Search by player name, college/origin, position, or jersey #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-colors shadow-inner font-medium"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* View Mode Buttons */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1 rounded-2xl border border-slate-800 shrink-0">
            <button
              onClick={() => setViewMode('cards')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-amber-500 text-slate-950 font-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid size={14} />
              <span>Team Cards</span>
            </button>

            <button
              onClick={() => setViewMode('table')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'table'
                  ? 'bg-amber-500 text-slate-950 font-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <ListFilter size={14} />
              <span>Master Table</span>
            </button>

            <button
              onClick={() => setViewMode('spotlight')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                viewMode === 'spotlight'
                  ? 'bg-amber-500 text-slate-950 font-black shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Star size={14} />
              <span>Spotlight</span>
            </button>
          </div>
        </div>

        {/* Dropdown Filters Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-slate-800/80">
          {/* Team Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              Team
            </label>
            <select
              value={selectedTeamFilter}
              onChange={(e) => setSelectedTeamFilter(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
            >
              <option value="all">All 12 Teams</option>
              {TEAMS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          {/* Conference Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              Conference
            </label>
            <select
              value={selectedConference}
              onChange={(e) => setSelectedConference(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
            >
              <option value="all">All Conferences</option>
              <option value="Northern Cali">Northern Cali</option>
              <option value="Southern Cali">Southern Cali</option>
            </select>
          </div>

          {/* Position Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              Position
            </label>
            <select
              value={selectedPosition}
              onChange={(e) => setSelectedPosition(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
            >
              <option value="all">All Positions</option>
              <option value="Guard">Guards (PG/SG)</option>
              <option value="Forward">Forwards (SF/PF)</option>
              <option value="Center">Centers (C)</option>
              <option value="PG">Point Guard (PG)</option>
              <option value="SG">Shooting Guard (SG)</option>
              <option value="SF">Small Forward (SF)</option>
              <option value="PF">Power Forward (PF)</option>
              <option value="C">Center (C)</option>
            </select>
          </div>

          {/* Experience Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              Experience
            </label>
            <select
              value={selectedExperience}
              onChange={(e) => setSelectedExperience(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
            >
              <option value="all">All Experience Levels</option>
              <option value="rookie">Rookies Only</option>
              <option value="veteran">Veterans (2nd - 5th Year)</option>
            </select>
          </div>

          {/* Rating Tier Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 block">
              Rating Tier
            </label>
            <select
              value={selectedRatingTier}
              onChange={(e) => setSelectedRatingTier(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-2.5 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
            >
              <option value="all">All Ratings</option>
              <option value="90plus">90+ Superstars</option>
              <option value="80plus">80-89 High Tier</option>
              <option value="75plus">75-79 Starters</option>
              <option value="under75">70-74 Depth / Role</option>
            </select>
          </div>

          {/* Sort By Filter */}
          <div>
            <label className="text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-1 block flex items-center gap-1">
              <ArrowUpDown size={11} /> Sort Order
            </label>
            <select
              value={`${sortField}-${sortAsc ? 'asc' : 'desc'}`}
              onChange={(e) => {
                const val = e.target.value;
                if (val === 'ovr-desc') { setSortField('ovr'); setSortAsc(false); }
                else if (val === 'ovr-asc') { setSortField('ovr'); setSortAsc(true); }
                else if (val === 'number-asc') { setSortField('number'); setSortAsc(true); }
                else if (val === 'number-desc') { setSortField('number'); setSortAsc(false); }
                else if (val === 'name-asc') { setSortField('name'); setSortAsc(false); }
                else if (val === 'name-desc') { setSortField('name'); setSortAsc(true); }
                else if (val === 'age-asc') { setSortField('age'); setSortAsc(false); }
                else if (val === 'age-desc') { setSortField('age'); setSortAsc(true); }
              }}
              className="w-full bg-slate-950 border border-amber-500/40 rounded-xl px-2.5 py-1.5 text-xs text-amber-300 focus:outline-none focus:border-amber-400 font-semibold"
            >
              <option value="ovr-desc">Rating: High to Low</option>
              <option value="ovr-asc">Rating: Low to High</option>
              <option value="number-asc">Jersey #: Low to High (#0 → #99)</option>
              <option value="number-desc">Jersey #: High to Low (#99 → #0)</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
              <option value="age-asc">Age: Youngest First</option>
              <option value="age-desc">Age: Oldest First</option>
            </select>
          </div>
        </div>

        {/* Active Filters Bar */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between gap-2 pt-2 text-xs border-t border-slate-800">
            <span className="text-slate-400 font-medium">
              Showing <strong className="text-amber-400">{filteredPlayers.length}</strong> matching players
            </span>
            <button
              onClick={resetFilters}
              className="text-xs text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer"
            >
              <X size={12} /> Reset all filters
            </button>
          </div>
        )}
      </div>

      {/* QUICK TEAM SELECT CHIP BAR */}
      <div className="bg-slate-900/60 border border-slate-800/80 p-3 sm:p-4 rounded-2xl space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
            <Users size={13} className="text-amber-400" /> Filter By Team ({TEAMS.length} Franchises):
          </span>
          {selectedTeamFilter !== 'all' && (
            <button
              onClick={() => setSelectedTeamFilter('all')}
              className="text-[11px] text-amber-400 hover:text-amber-300 font-bold cursor-pointer transition-colors"
            >
              Show All Teams
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <button
            onClick={() => setSelectedTeamFilter('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer border shrink-0 ${
              selectedTeamFilter === 'all'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md font-black ring-2 ring-amber-400/30'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
            }`}
          >
            All 12 Teams
          </button>
          {TEAMS.map((team) => (
            <button
              key={team.id}
              onClick={() => setSelectedTeamFilter(team.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 border shrink-0 ${
                selectedTeamFilter === team.id
                  ? 'bg-slate-800 text-white border-amber-500 shadow-md font-black ring-2 ring-amber-500/30'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: team.primaryColor }} />
              <span>{team.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* VIEW 1: TEAM-BY-TEAM ROSTER CARDS */}
      {/* ========================================================================= */}
      {viewMode === 'cards' && (
        <div className="space-y-8">
          {teamsToDisplay.map((team) => {
            const roster = SEASON_ROSTERS[team.id]?.s4;
            if (!roster) return null;

            // Filter and sort players within this team card based on search/position/sort
            const matchingPlayers = roster.players
              .filter((p) => {
                if (selectedPosition !== 'all') {
                  if (selectedPosition === 'Guard' && !p.position.includes('G')) return false;
                  if (selectedPosition === 'Forward' && !p.position.includes('F')) return false;
                  if (selectedPosition === 'Center' && !p.position.includes('C')) return false;
                  if (['PG', 'SG', 'SF', 'PF', 'C'].includes(selectedPosition) && !p.position.includes(selectedPosition)) {
                    return false;
                  }
                }
                if (selectedExperience === 'rookie' && !p.seasonYear?.toLowerCase().includes('rookie')) return false;
                if (selectedExperience === 'veteran' && p.seasonYear?.toLowerCase().includes('rookie')) return false;

                const ovr = p.ovr || 70;
                if (selectedRatingTier === '90plus' && ovr < 90) return false;
                if (selectedRatingTier === '80plus' && (ovr < 80 || ovr >= 90)) return false;
                if (selectedRatingTier === '75plus' && (ovr < 75 || ovr >= 80)) return false;
                if (selectedRatingTier === 'under75' && ovr >= 75) return false;

                if (searchQuery.trim()) {
                  const q = searchQuery.toLowerCase();
                  const matchesName = p.name.toLowerCase().includes(q);
                  const matchesSchool = (p.schoolOrNote || '').toLowerCase().includes(q);
                  const matchesPos = p.position.toLowerCase().includes(q);
                  const matchesNum = (p.number || '').toLowerCase().includes(q);
                  if (!matchesName && !matchesSchool && !matchesPos && !matchesNum) return false;
                }
                return true;
              })
              .sort((a, b) => {
                let comparison = 0;
                if (sortField === 'ovr') {
                  comparison = (b.ovr || 0) - (a.ovr || 0);
                } else if (sortField === 'name') {
                  comparison = a.name.localeCompare(b.name);
                } else if (sortField === 'age') {
                  comparison = (a.age || 0) - (b.age || 0);
                } else if (sortField === 'number') {
                  const numA = parseInt(a.number || '999', 10);
                  const numB = parseInt(b.number || '999', 10);
                  comparison = (isNaN(numA) ? 999 : numA) - (isNaN(numB) ? 999 : numB);
                }
                return sortAsc ? -comparison : comparison;
              });

            if (hasActiveFilters && matchingPlayers.length === 0) return null;

            const teamAvgOvr = Math.round(
              roster.players.reduce((acc, p) => acc + (p.ovr || 70), 0) / roster.players.length
            );
            const rookieCount = roster.players.filter((p) =>
              p.seasonYear?.toLowerCase().includes('rookie')
            ).length;
            const topPlayer = [...roster.players].sort((a, b) => (b.ovr || 0) - (a.ovr || 0))[0];

            return (
              <div
                key={team.id}
                className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl transition-all"
              >
                {/* Team Header Stripe */}
                <div
                  className="p-5 sm:p-6 border-b border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  style={{
                    background: `linear-gradient(135deg, ${team.primaryColor}22 0%, #0f172a 100%)`,
                  }}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2 bg-slate-950/80 rounded-2xl border border-white/10 shadow-lg shrink-0">
                      <TeamBadge teamId={team.id} size="md" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                          {team.conference}
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-[10px] font-bold text-amber-400">
                          {roster.players.filter((p) => p.status !== 'Waived').length}-Player Active Roster
                        </span>
                        {roster.players.some((p) => p.status === 'Waived') && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span className="text-[10px] font-bold text-rose-400">
                              {roster.players.filter((p) => p.status === 'Waived').length} Waived
                            </span>
                          </>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {team.name}
                      </h3>
                      <p className="text-xs text-slate-400 font-medium">
                        Head Coach: <strong className="text-amber-300">{roster.coach}</strong>{' '}
                        {roster.coachTenure ? `(${roster.coachTenure})` : ''}
                      </p>
                    </div>
                  </div>

                  {/* Team Stat Badges & Modal Trigger */}
                  <div className="flex items-center gap-2.5 flex-wrap self-start sm:self-auto">
                    <div className="bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-xl text-center">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Avg OVR</span>
                      <span className="text-xs font-black text-white font-mono">{teamAvgOvr}</span>
                    </div>

                    <div className="bg-slate-950/90 border border-slate-800 px-3 py-1.5 rounded-xl text-center">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block">Rookies</span>
                      <span className="text-xs font-black text-emerald-400 font-mono">{rookieCount}</span>
                    </div>

                    <div className="bg-slate-950/90 border border-slate-800 px-3.5 py-1.5 rounded-xl text-center min-w-[100px] shrink-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 block whitespace-nowrap">Top Star</span>
                      <span className="text-xs font-black text-amber-300 font-mono whitespace-nowrap block">
                        {topPlayer.name.split(' ').pop()} ({topPlayer.ovr})
                      </span>
                    </div>

                    {onOpenTeamModal && (
                      <button
                        onClick={() => onOpenTeamModal(team.id, 4)}
                        className="px-3.5 py-2 bg-amber-500/10 hover:bg-amber-500 text-amber-400 hover:text-slate-950 border border-amber-500/30 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0 shadow-sm"
                        title={`View ${team.name} Franchise Hub & History`}
                      >
                        <span>Team Details</span>
                        <ExternalLink size={13} className="shrink-0" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Player Grid inside Team Card */}
                <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
                  {matchingPlayers.map((player, idx) => {
                    const isRookie = player.seasonYear?.toLowerCase().includes('rookie');
                    const isSuperstar = (player.ovr || 0) >= 90;
                    const isAllStar = (player.ovr || 0) >= 80 && (player.ovr || 0) < 90;
                    const isWaived = player.status === 'Waived';

                    return (
                      <div
                        key={idx}
                        className={`p-3.5 rounded-2xl border transition-all flex flex-col justify-between gap-2.5 shadow-sm hover:-translate-y-0.5 ${
                          isWaived
                            ? 'bg-rose-950/10 border-rose-500/30 opacity-80'
                            : isSuperstar
                            ? 'bg-gradient-to-br from-amber-950/40 via-slate-950 to-slate-900 border-amber-500/50 shadow-amber-500/5'
                            : isAllStar
                            ? 'bg-gradient-to-br from-emerald-950/30 via-slate-950 to-slate-900 border-emerald-500/30'
                            : 'bg-slate-950 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        {/* Header: Number, Name, Position & OVR */}
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <span className="px-2 py-0.5 bg-slate-900 text-amber-400 font-mono font-black rounded-lg text-xs border border-slate-800 shrink-0">
                              #{player.number || '—'}
                            </span>
                            <div className="min-w-0">
                              <h4 className="font-black text-white text-xs sm:text-sm truncate flex items-center gap-1.5">
                                <span>{player.name}</span>
                                {isWaived && (
                                  <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40 shrink-0">
                                    WAIVED
                                  </span>
                                )}
                              </h4>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] font-extrabold uppercase text-amber-400">
                                  {player.position}
                                </span>
                                <span className="text-slate-600">•</span>
                                <span
                                  className={`text-[10px] font-bold ${
                                    isRookie ? 'text-emerald-400 font-extrabold' : 'text-slate-400'
                                  }`}
                                >
                                  {player.seasonYear || 'Pro'}
                                </span>
                              </div>
                            </div>
                          </div>

                          <span
                            className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg shrink-0 border ${
                              isSuperstar
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : isAllStar
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                : 'bg-slate-800 text-slate-300 border-slate-700'
                            }`}
                          >
                            {player.ovr} OVR
                          </span>
                        </div>

                        {/* Player Measurables & Origin */}
                        <div className="pt-2 border-t border-slate-800/70 text-[10px] space-y-1">
                          <div className="flex items-center justify-between text-slate-400">
                            <span className="font-semibold text-slate-300 truncate">
                              {player.schoolOrNote || '—'}
                            </span>
                            <span className="font-mono text-slate-400 shrink-0">
                              {player.age ? `${player.age} yrs` : ''}
                            </span>
                          </div>

                          {(player.height || player.weight) && (
                            <div className="flex items-center justify-between text-slate-400 font-mono text-[10px]">
                              <span>Height: <strong className="text-slate-200">{player.height || '—'}</strong></span>
                              <span>Weight: <strong className="text-slate-200">{player.weight ? `${player.weight} lbs` : '—'}</strong></span>
                            </div>
                          )}

                          {(player.contract || player.personality) && (
                            <div className="flex items-center justify-between text-slate-400 font-mono text-[9px] pt-0.5 border-t border-slate-900">
                              {player.personality ? <span>Trait: <strong className="text-cyan-300">{player.personality}</strong></span> : <span />}
                              {player.contract ? <span><strong className="text-amber-300">{player.contract}</strong></span> : <span />}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 2: MASTER TABULAR ROSTER VIEW */}
      {/* ========================================================================= */}
      {viewMode === 'table' && (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl">
          <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between gap-3 flex-wrap bg-slate-950/50">
            <div className="flex items-center gap-2 text-slate-200">
              <Users size={18} className="text-amber-400" />
              <h3 className="font-black text-sm uppercase tracking-wider text-white">
                Master League Roster Table ({sortedPlayers.length} Players)
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <span>Sort by:</span>
              <button
                onClick={() => {
                  if (sortField === 'number') setSortAsc(!sortAsc);
                  else {
                    setSortField('number');
                    setSortAsc(true);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition-all flex items-center gap-1 ${
                  sortField === 'number'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <Hash size={12} />
                <span>Jersey #{sortField === 'number' ? (sortAsc ? ' ↑' : ' ↓') : ''}</span>
              </button>
              <button
                onClick={() => {
                  if (sortField === 'ovr') setSortAsc(!sortAsc);
                  else {
                    setSortField('ovr');
                    setSortAsc(false);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition-all ${
                  sortField === 'ovr'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                OVR {sortField === 'ovr' ? (sortAsc ? '↑' : '↓') : ''}
              </button>
              <button
                onClick={() => {
                  if (sortField === 'name') setSortAsc(!sortAsc);
                  else {
                    setSortField('name');
                    setSortAsc(false);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition-all ${
                  sortField === 'name'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                Name {sortField === 'name' ? (sortAsc ? '↑' : '↓') : ''}
              </button>
              <button
                onClick={() => {
                  if (sortField === 'age') setSortAsc(!sortAsc);
                  else {
                    setSortField('age');
                    setSortAsc(false);
                  }
                }}
                className={`px-2.5 py-1 rounded-lg border font-bold cursor-pointer transition-all ${
                  sortField === 'age'
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                Age {sortField === 'age' ? (sortAsc ? '↑' : '↓') : ''}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-950 border-b border-slate-800 text-[11px] font-black uppercase tracking-wider text-slate-400">
                  <th
                    onClick={() => {
                      if (sortField === 'number') setSortAsc(!sortAsc);
                      else {
                        setSortField('number');
                        setSortAsc(true);
                      }
                    }}
                    className="py-3 px-3.5 text-center cursor-pointer hover:text-amber-300 transition-colors select-none"
                    title="Sort by Jersey Number"
                  >
                    <span className="inline-flex items-center gap-1">
                      # {sortField === 'number' && <span className="text-amber-400">{sortAsc ? '▲' : '▼'}</span>}
                    </span>
                  </th>
                  <th
                    onClick={() => {
                      if (sortField === 'name') setSortAsc(!sortAsc);
                      else {
                        setSortField('name');
                        setSortAsc(false);
                      }
                    }}
                    className="py-3 px-3.5 cursor-pointer hover:text-amber-300 transition-colors select-none"
                    title="Sort by Name"
                  >
                    <span className="inline-flex items-center gap-1">
                      Player {sortField === 'name' && <span className="text-amber-400">{sortAsc ? '▲' : '▼'}</span>}
                    </span>
                  </th>
                  <th className="py-3 px-3.5">Team</th>
                  <th className="py-3 px-3.5">Pos</th>
                  <th
                    onClick={() => {
                      if (sortField === 'ovr') setSortAsc(!sortAsc);
                      else {
                        setSortField('ovr');
                        setSortAsc(false);
                      }
                    }}
                    className="py-3 px-3.5 text-center cursor-pointer hover:text-amber-300 transition-colors select-none"
                    title="Sort by Overall Rating"
                  >
                    <span className="inline-flex items-center gap-1">
                      Rating {sortField === 'ovr' && <span className="text-amber-400">{sortAsc ? '▲' : '▼'}</span>}
                    </span>
                  </th>
                  <th className="py-3 px-3.5">Experience</th>
                  <th className="py-3 px-3.5">College / Origin</th>
                  <th
                    onClick={() => {
                      if (sortField === 'age') setSortAsc(!sortAsc);
                      else {
                        setSortField('age');
                        setSortAsc(false);
                      }
                    }}
                    className="py-3 px-3.5 text-center cursor-pointer hover:text-amber-300 transition-colors select-none"
                    title="Sort by Age"
                  >
                    <span className="inline-flex items-center gap-1">
                      Age {sortField === 'age' && <span className="text-amber-400">{sortAsc ? '▲' : '▼'}</span>}
                    </span>
                  </th>
                  <th className="py-3 px-3.5 text-center">Height</th>
                  <th className="py-3 px-3.5 text-center">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-medium text-slate-300">
                {sortedPlayers.map((p, idx) => {
                  const isSuperstar = (p.ovr || 0) >= 90;
                  const isAllStar = (p.ovr || 0) >= 80 && (p.ovr || 0) < 90;
                  const isRookie = p.seasonYear?.toLowerCase().includes('rookie');

                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-slate-800/50 transition-colors ${
                        isSuperstar
                          ? 'bg-amber-500/5'
                          : isAllStar
                          ? 'bg-emerald-500/5'
                          : idx % 2 === 0
                          ? 'bg-slate-900/40'
                          : 'bg-slate-900/80'
                      }`}
                    >
                      <td className="py-2.5 px-3.5 text-center font-mono font-bold text-amber-400">
                        {p.number || '—'}
                      </td>
                      <td className="py-2.5 px-3.5 font-bold text-white whitespace-nowrap">
                        <span className="flex items-center gap-1.5">
                          <span>{p.name}</span>
                          {p.status === 'Waived' && (
                            <span className="px-1.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider bg-rose-500/20 text-rose-300 border border-rose-500/40">
                              WAIVED
                            </span>
                          )}
                        </span>
                      </td>
                      <td className="py-2.5 px-3.5 whitespace-nowrap">
                        <span className="flex items-center gap-1.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: p.primaryColor }}
                          />
                          <span className="font-semibold text-slate-200">{p.teamName}</span>
                        </span>
                      </td>
                      <td className="py-2.5 px-3.5 font-mono font-extrabold text-amber-400">
                        {p.position}
                      </td>
                      <td className="py-2.5 px-3.5 text-center">
                        <span
                          className={`inline-block px-2 py-0.5 rounded-lg font-mono font-black text-xs border ${
                            isSuperstar
                              ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                              : isAllStar
                              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}
                        >
                          {p.ovr}
                        </span>
                      </td>
                      <td className="py-2.5 px-3.5 whitespace-nowrap">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                            isRookie
                              ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                              : 'bg-slate-800 text-slate-300'
                          }`}
                        >
                          {p.seasonYear || '—'}
                        </span>
                      </td>
                      <td className="py-2.5 px-3.5 text-slate-300 truncate max-w-[180px]">
                        {p.schoolOrNote || '—'}
                      </td>
                      <td className="py-2.5 px-3.5 text-center font-mono text-slate-400">
                        {p.age || '—'}
                      </td>
                      <td className="py-2.5 px-3.5 text-center font-mono text-slate-300">
                        {p.height || '—'}
                      </td>
                      <td className="py-2.5 px-3.5 text-center font-mono text-slate-400">
                        {p.weight ? `${p.weight} lbs` : '—'}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* VIEW 3: SPOTLIGHT ON 90+ SUPERSTARS & TOP ROOKIES */}
      {/* ========================================================================= */}
      {viewMode === 'spotlight' && (
        <div className="space-y-8">
          {/* 90+ Superstars Showcase */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Trophy className="text-amber-400" size={24} />
                <div>
                  <h3 className="text-xl font-black text-white">
                    The 90+ OVR Superstars of Season 4
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    The {superstars90Plus.length} highest-rated elite players in the CCH
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-full text-xs font-black">
                {superstars90Plus.length} Stars
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {superstars90Plus.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-lg relative overflow-hidden"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg font-black font-mono text-amber-400 bg-slate-900 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      #{p.number}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-white">{p.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{p.teamName}</p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {p.position} • {p.seasonYear} • {p.height}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-black font-mono text-amber-400 block">
                      {p.ovr} OVR
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">
                      {p.schoolOrNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Rookies Showcase */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <Sparkles className="text-emerald-400" size={24} />
                <div>
                  <h3 className="text-xl font-black text-white">
                    Top Rated Rookies of Season 4
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    The highest-rated incoming talent from the Season 4 Draft
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-full text-xs font-black">
                80+ OVR Rookies
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topRookies.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 border border-emerald-500/30 p-4 rounded-2xl flex items-center justify-between gap-3 shadow-lg"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg font-black font-mono text-emerald-400 bg-slate-900 border border-slate-800 w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                      #{p.number}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-sm font-black text-white">{p.name}</h4>
                      <p className="text-xs text-slate-400 font-medium">{p.teamName}</p>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {p.position} • Rookie • {p.height}
                      </p>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xl font-black font-mono text-emerald-400 block">
                      {p.ovr} OVR
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">
                      {p.schoolOrNote}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
