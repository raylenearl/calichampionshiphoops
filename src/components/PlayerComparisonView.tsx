import React, { useState, useMemo } from 'react';
import { Player, Team } from '../types';
import { PLAYERS } from '../data/playersData';
import { TEAMS } from '../data/teamsData';
import {
  COMPARISON_PRESETS,
  calculatePlayerTrophies,
  comparePlayerStats,
  generateMatchupAnalysis,
  getPlayerAllAwards,
  StatAdvantage,
} from '../utils/playerComparisonUtils';
import {
  Trophy,
  ArrowLeftRight,
  Sparkles,
  Search,
  Check,
  ChevronDown,
  Activity,
  Flame,
  Shield,
  Target,
  Award,
  Zap,
  Share2,
  Shuffle,
  Star,
  Layers,
  Crown,
} from 'lucide-react';

interface PlayerComparisonViewProps {
  initialPlayer1Id?: string;
  initialPlayer2Id?: string;
  onSelectTeam?: (teamId: string) => void;
}

export const PlayerComparisonView: React.FC<PlayerComparisonViewProps> = ({
  initialPlayer1Id = 'p-lamar-anderson',
  initialPlayer2Id = 'p-aj-hinton',
  onSelectTeam,
}) => {
  const [player1Id, setPlayer1Id] = useState<string>(initialPlayer1Id);
  const [player2Id, setPlayer2Id] = useState<string>(initialPlayer2Id);
  const [activeTab, setActiveTab] = useState<'overview' | 'stats' | 'awards' | 'seasons' | 'attributes'>('overview');
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [isDropdown1Open, setIsDropdown1Open] = useState(false);
  const [isDropdown2Open, setIsDropdown2Open] = useState(false);
  const [copyToast, setCopyToast] = useState<string | null>(null);

  // Lookup players
  const player1 = useMemo(() => PLAYERS.find((p) => p.id === player1Id) || PLAYERS[0], [player1Id]);
  const player2 = useMemo(() => PLAYERS.find((p) => p.id === player2Id) || PLAYERS[1], [player2Id]);

  // Lookup teams
  const team1 = useMemo(() => TEAMS.find((t) => t.id === player1.teamId), [player1.teamId]);
  const team2 = useMemo(() => TEAMS.find((t) => t.id === player2.teamId), [player2.teamId]);

  // Awards and Trophies
  const trophies1 = useMemo(() => calculatePlayerTrophies(player1), [player1]);
  const trophies2 = useMemo(() => calculatePlayerTrophies(player2), [player2]);
  const awards1 = useMemo(() => getPlayerAllAwards(player1), [player1]);
  const awards2 = useMemo(() => getPlayerAllAwards(player2), [player2]);

  // Stat comparisons
  const statComparisons = useMemo(() => comparePlayerStats(player1, player2), [player1, player2]);

  // Filtered player lists for dropdowns
  const filteredPlayers1 = useMemo(() => {
    return PLAYERS.filter((p) =>
      p.name.toLowerCase().includes(search1.toLowerCase()) ||
      p.teamName.toLowerCase().includes(search1.toLowerCase()) ||
      p.position.toLowerCase().includes(search1.toLowerCase())
    );
  }, [search1]);

  const filteredPlayers2 = useMemo(() => {
    return PLAYERS.filter((p) =>
      p.name.toLowerCase().includes(search2.toLowerCase()) ||
      p.teamName.toLowerCase().includes(search2.toLowerCase()) ||
      p.position.toLowerCase().includes(search2.toLowerCase())
    );
  }, [search2]);

  // Swap players
  const handleSwap = () => {
    const temp = player1Id;
    setPlayer1Id(player2Id);
    setPlayer2Id(temp);
  };

  // Randomize matchup
  const handleRandom = () => {
    const available = [...PLAYERS];
    const rand1 = available[Math.floor(Math.random() * available.length)];
    const remaining = available.filter((p) => p.id !== rand1.id);
    const rand2 = remaining[Math.floor(Math.random() * remaining.length)];
    setPlayer1Id(rand1.id);
    setPlayer2Id(rand2.id);
  };

  // Copy comparison summary to clipboard
  const handleShare = () => {
    const summary = `🏀 CCH Player Comparison: ${player1.name} vs. ${player2.name}\n` +
      `• ${player1.name} (${player1.teamName}): ${player1.ppg ?? 0} PPG | ${player1.rpg ?? 0} RPG | ${player1.apg ?? 0} APG | ${trophies1.championships}x Champion\n` +
      `• ${player2.name} (${player2.teamName}): ${player2.ppg ?? 0} PPG | ${player2.rpg ?? 0} RPG | ${player2.apg ?? 0} APG | ${trophies2.championships}x Champion\n` +
      `Check out full stats and awards on California Classic Hoops Encyclopedia!`;
    navigator.clipboard.writeText(summary);
    setCopyToast('Matchup comparison copied to clipboard!');
    setTimeout(() => setCopyToast(null), 3000);
  };

  // Matchup analysis
  const analysisText = useMemo(() => generateMatchupAnalysis(player1, player2), [player1, player2]);

  return (
    <div id="player-comparison-view" className="space-y-6">
      {/* Toast Notification */}
      {copyToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-amber-500 text-slate-950 font-bold px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 animate-bounce">
          <Check className="w-5 h-5 text-slate-950" />
          <span>{copyToast}</span>
        </div>
      )}

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-2xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              CCH Head-to-Head Analytics
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
              Player Comparison & Tale of the Tape
            </h1>
            <p className="text-sm text-slate-400 max-w-2xl">
              Compare career averages, seasonal progression, championship pedigree, and individual awards history between any two California Classic Hoops stars.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="random-matchup-btn"
              onClick={handleRandom}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
              title="Pick two random players"
            >
              <Shuffle className="w-4 h-4 text-amber-400" />
              <span>Random</span>
            </button>
            <button
              id="swap-players-btn"
              onClick={handleSwap}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 rounded-xl text-sm font-medium transition-all flex items-center gap-2 shadow-sm"
              title="Swap Player 1 and Player 2"
            >
              <ArrowLeftRight className="w-4 h-4 text-cyan-400" />
              <span>Swap</span>
            </button>
            <button
              id="share-comparison-btn"
              onClick={handleShare}
              className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl text-sm font-bold transition-all flex items-center gap-2 shadow-sm"
              title="Copy comparison summary"
            >
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Quick Presets Carousel */}
        <div className="mt-6 pt-5 border-t border-slate-800/80">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            Marquee Matchup Presets:
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {COMPARISON_PRESETS.map((preset) => {
              const isActive =
                (player1Id === preset.player1Id && player2Id === preset.player2Id) ||
                (player1Id === preset.player2Id && player2Id === preset.player1Id);
              return (
                <button
                  key={preset.id}
                  id={`preset-${preset.id}`}
                  onClick={() => {
                    setPlayer1Id(preset.player1Id);
                    setPlayer2Id(preset.player2Id);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 border ${
                    isActive
                      ? 'bg-amber-500/20 border-amber-500/50 text-amber-300 font-semibold shadow-sm'
                      : 'bg-slate-800/80 border-slate-700/60 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <span>{preset.badge}</span>
                  <span className="text-slate-400">|</span>
                  <span>{preset.tagline}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selectors Bar */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Player 1 Selector */}
        <div className="relative">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Select Player 1
          </label>
          <div className="relative">
            <button
              id="player1-selector-btn"
              onClick={() => {
                setIsDropdown1Open(!isDropdown1Open);
                setIsDropdown2Open(false);
              }}
              className="w-full bg-slate-900 border border-slate-700 hover:border-amber-500/60 rounded-xl px-4 py-3 text-left flex items-center justify-between text-slate-100 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-black text-amber-400 text-sm">
                  #{player1.jersey ?? '—'}
                </div>
                <div>
                  <div className="font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                    {player1.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {player1.position} • {player1.teamName}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-amber-400 transition-transform" />
            </button>

            {isDropdown1Open && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-30 p-2 max-h-72 flex flex-col">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={search1}
                    onChange={(e) => setSearch1(e.target.value)}
                    placeholder="Search player, team, or position..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                    autoFocus
                  />
                </div>
                <div className="overflow-y-auto space-y-1 flex-1">
                  {filteredPlayers1.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setPlayer1Id(p.id);
                        setIsDropdown1Open(false);
                        setSearch1('');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        p.id === player1Id
                          ? 'bg-amber-500/20 text-amber-300 font-bold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-[10px] text-slate-400">{p.position} • {p.teamName}</div>
                      </div>
                      {p.id === player1Id && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Player 2 Selector */}
        <div className="relative">
          <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
            Select Player 2
          </label>
          <div className="relative">
            <button
              id="player2-selector-btn"
              onClick={() => {
                setIsDropdown2Open(!isDropdown2Open);
                setIsDropdown1Open(false);
              }}
              className="w-full bg-slate-900 border border-slate-700 hover:border-cyan-500/60 rounded-xl px-4 py-3 text-left flex items-center justify-between text-slate-100 transition-all shadow-md group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-black text-cyan-400 text-sm">
                  #{player2.jersey ?? '—'}
                </div>
                <div>
                  <div className="font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {player2.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {player2.position} • {player2.teamName}
                  </div>
                </div>
              </div>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-transform" />
            </button>

            {isDropdown2Open && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl z-30 p-2 max-h-72 flex flex-col">
                <div className="relative mb-2">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={search2}
                    onChange={(e) => setSearch2(e.target.value)}
                    placeholder="Search player, team, or position..."
                    className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-500"
                    autoFocus
                  />
                </div>
                <div className="overflow-y-auto space-y-1 flex-1">
                  {filteredPlayers2.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setPlayer2Id(p.id);
                        setIsDropdown2Open(false);
                        setSearch2('');
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs flex items-center justify-between transition-colors ${
                        p.id === player2Id
                          ? 'bg-cyan-500/20 text-cyan-300 font-bold'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div>
                        <div className="font-semibold">{p.name}</div>
                        <div className="text-[10px] text-slate-400">{p.position} • {p.teamName}</div>
                      </div>
                      {p.id === player2Id && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tale of the Tape: Side-by-Side Player Profiles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Player 1 Profile Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                PLAYER 1
              </div>
              <h2 className="text-2xl font-black text-slate-100 tracking-tight">
                {player1.name}
              </h2>
              <button
                onClick={() => onSelectTeam?.(player1.teamId)}
                className="text-xs font-semibold text-slate-400 hover:text-amber-400 transition-colors text-left"
              >
                {player1.teamName} ({player1.position})
              </button>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-amber-400 tracking-tighter">
                {player1.ovr ?? 88}
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                OVR RATING
              </div>
            </div>
          </div>

          {/* Archetype & Bio details */}
          <div className="space-y-3 pt-3 border-t border-slate-800">
            {player1.archetype && (
              <div className="inline-block px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold rounded-md">
                ⚡ {player1.archetype}
              </div>
            )}
            <div className="grid grid-cols-3 gap-2 text-center bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Height</div>
                <div className="text-xs font-bold text-slate-200">{player1.height ?? '6\'4"'}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">College</div>
                <div className="text-xs font-bold text-slate-200">{player1.college ?? 'N/A'}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Jersey</div>
                <div className="text-xs font-bold text-slate-200">#{player1.jersey ?? '—'}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {player1.bio}
            </p>
          </div>
        </div>

        {/* Player 2 Profile Card */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div className="space-y-1">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                PLAYER 2
              </div>
              <h2 className="text-2xl font-black text-slate-100 tracking-tight">
                {player2.name}
              </h2>
              <button
                onClick={() => onSelectTeam?.(player2.teamId)}
                className="text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors text-left"
              >
                {player2.teamName} ({player2.position})
              </button>
            </div>
            <div className="text-right">
              <div className="text-3xl font-black text-cyan-400 tracking-tighter">
                {player2.ovr ?? 88}
              </div>
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                OVR RATING
              </div>
            </div>
          </div>

          {/* Archetype & Bio details */}
          <div className="space-y-3 pt-3 border-t border-slate-800">
            {player2.archetype && (
              <div className="inline-block px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-semibold rounded-md">
                ⚡ {player2.archetype}
              </div>
            )}
            <div className="grid grid-cols-3 gap-2 text-center bg-slate-950/60 p-2.5 rounded-xl border border-slate-800/80">
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Height</div>
                <div className="text-xs font-bold text-slate-200">{player2.height ?? '6\'4"'}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">College</div>
                <div className="text-xs font-bold text-slate-200">{player2.college ?? 'N/A'}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-semibold uppercase">Jersey</div>
                <div className="text-xs font-bold text-slate-200">#{player2.jersey ?? '—'}</div>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              {player2.bio}
            </p>
          </div>
        </div>
      </div>

      {/* Analytical Breakdown / Matchup Overview Banner */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 shadow-lg">
        <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
          <Activity className="w-4 h-4" />
          Style Matchup & Analytical Verdict
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {analysisText}
        </p>
      </div>

      {/* Navigation Subtabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'overview'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          }`}
        >
          <Activity className="w-4 h-4" />
          <span>Stat Battle (Career Averages)</span>
        </button>
        <button
          onClick={() => setActiveTab('awards')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'awards'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          }`}
        >
          <Trophy className="w-4 h-4" />
          <span>Trophy Case & Awards ({awards1.length} vs {awards2.length})</span>
        </button>
        <button
          onClick={() => setActiveTab('attributes')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'attributes'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          }`}
        >
          <Target className="w-4 h-4" />
          <span>Skill Attributes & Radar</span>
        </button>
        <button
          onClick={() => setActiveTab('seasons')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
            activeTab === 'seasons'
              ? 'bg-amber-500 text-slate-950 shadow-md'
              : 'bg-slate-900 text-slate-400 hover:text-slate-100 hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Season Trajectory (S1 - S3)</span>
        </button>
      </div>

      {/* Tab 1: Stat Battle & Visual Comparison Bars */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Quick Hardware Tally Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase">Championships</div>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm font-black">
                <span className="text-amber-400">{trophies1.championships}</span>
                <span className="text-slate-600">vs</span>
                <span className="text-cyan-400">{trophies2.championships}</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase">League & Finals MVPs</div>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm font-black">
                <span className="text-amber-400">{trophies1.mvps + trophies1.finalsMvp}</span>
                <span className="text-slate-600">vs</span>
                <span className="text-cyan-400">{trophies2.mvps + trophies2.finalsMvp}</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase">All-Cali Selections</div>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm font-black">
                <span className="text-amber-400">{trophies1.allCaliCount}</span>
                <span className="text-slate-600">vs</span>
                <span className="text-cyan-400">{trophies2.allCaliCount}</span>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 text-center">
              <div className="text-[10px] font-bold text-slate-500 uppercase">All-Star Appearances</div>
              <div className="flex items-center justify-center gap-2 mt-1 text-sm font-black">
                <span className="text-amber-400">{trophies1.allStarCount}</span>
                <span className="text-slate-600">vs</span>
                <span className="text-cyan-400">{trophies2.allStarCount}</span>
              </div>
            </div>
          </div>

          {/* Detailed Side-by-Side Stat Comparison Bars */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="text-sm font-bold text-amber-400">{player1.name}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Per-Game Metric</div>
              <div className="text-sm font-bold text-cyan-400">{player2.name}</div>
            </div>

            <div className="space-y-4">
              {statComparisons.map((stat) => {
                const isP1Winner = stat.winner === 1;
                const isP2Winner = stat.winner === 2;

                return (
                  <div key={stat.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className={`font-bold ${isP1Winner ? 'text-amber-400' : 'text-slate-300'}`}>
                        {stat.val1}
                        {isP1Winner && (
                          <span className="ml-1.5 text-[10px] px-1.5 py-0.5 bg-amber-500/20 text-amber-300 rounded font-semibold">
                            ADV
                          </span>
                        )}
                      </span>
                      <span className="font-semibold text-slate-400 text-[11px] uppercase tracking-wider">
                        {stat.label}
                      </span>
                      <span className={`font-bold ${isP2Winner ? 'text-cyan-400' : 'text-slate-300'}`}>
                        {isP2Winner && (
                          <span className="mr-1.5 text-[10px] px-1.5 py-0.5 bg-cyan-500/20 text-cyan-300 rounded font-semibold">
                            ADV
                          </span>
                        )}
                        {stat.val2}
                      </span>
                    </div>

                    {/* Dual Comparative Bar */}
                    <div className="grid grid-cols-2 gap-2 h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      {/* P1 bar (aligned right) */}
                      <div className="flex justify-end h-full">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isP1Winner ? 'bg-amber-400' : 'bg-amber-700/60'
                          }`}
                          style={{
                            width: `${Math.min(100, Math.max(15, parseFloat(String(stat.val1)) * 3))}%`,
                          }}
                        />
                      </div>
                      {/* P2 bar (aligned left) */}
                      <div className="flex justify-start h-full">
                        <div
                          className={`h-full rounded-full transition-all ${
                            isP2Winner ? 'bg-cyan-400' : 'bg-cyan-700/60'
                          }`}
                          style={{
                            width: `${Math.min(100, Math.max(15, parseFloat(String(stat.val2)) * 3))}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career Single-Game Highs Section */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              Career Single-Game Records & Highs
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[
                { label: 'Points', val1: player1.careerHighs?.points ?? '30+', val2: player2.careerHighs?.points ?? '30+' },
                { label: 'Rebounds', val1: player1.careerHighs?.rebounds ?? '8+', val2: player2.careerHighs?.rebounds ?? '8+' },
                { label: 'Assists', val1: player1.careerHighs?.assists ?? '8+', val2: player2.careerHighs?.assists ?? '8+' },
                { label: 'Steals', val1: player1.careerHighs?.steals ?? '4+', val2: player2.careerHighs?.steals ?? '4+' },
                { label: 'Blocks', val1: player1.careerHighs?.blocks ?? '2+', val2: player2.careerHighs?.blocks ?? '2+' },
                { label: '3-Pointers', val1: player1.careerHighs?.threePointers ?? '4+', val2: player2.careerHighs?.threePointers ?? '4+' },
              ].map((item) => (
                <div key={item.label} className="bg-slate-950 p-3 rounded-xl border border-slate-800 text-center">
                  <div className="text-[10px] text-slate-500 font-semibold uppercase">{item.label}</div>
                  <div className="flex items-center justify-center gap-1.5 mt-1 font-bold text-sm">
                    <span className="text-amber-400">{item.val1}</span>
                    <span className="text-slate-600 text-xs">/</span>
                    <span className="text-cyan-400">{item.val2}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Trophy Case & Awards History */}
      {activeTab === 'awards' && (
        <div className="space-y-6">
          {/* Trophy Count Comparison Matrix */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Crown className="w-4 h-4 text-amber-400" />
              Hardware & Trophy Case Matrix
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 uppercase text-[10px]">
                    <th className="py-2.5 px-3">Award Category</th>
                    <th className="py-2.5 px-3 text-center text-amber-400 font-bold">{player1.name}</th>
                    <th className="py-2.5 px-3 text-center text-cyan-400 font-bold">{player2.name}</th>
                    <th className="py-2.5 px-3 text-right">Advantage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  <tr>
                    <td className="py-3 px-3 text-slate-200">🏆 CCH Championships</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.championships}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.championships}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {trophies1.championships > trophies2.championships
                        ? `+${trophies1.championships - trophies2.championships} (${player1.name.split(' ')[0]})`
                        : trophies2.championships > trophies1.championships
                        ? `+${trophies2.championships - trophies1.championships} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-slate-200">👑 League MVPs & Finals MVPs</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.mvps + trophies1.finalsMvp}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.mvps + trophies2.finalsMvp}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {(trophies1.mvps + trophies1.finalsMvp) > (trophies2.mvps + trophies2.finalsMvp)
                        ? `+${(trophies1.mvps + trophies1.finalsMvp) - (trophies2.mvps + trophies2.finalsMvp)} (${player1.name.split(' ')[0]})`
                        : (trophies2.mvps + trophies2.finalsMvp) > (trophies1.mvps + trophies1.finalsMvp)
                        ? `+${(trophies2.mvps + trophies2.finalsMvp) - (trophies1.mvps + trophies1.finalsMvp)} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-slate-200">🛡️ Major Seasonal Awards (DPOY/OPOY/Clutch/6MOTY/MIP/ROTY)</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.majorAwards}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.majorAwards}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {trophies1.majorAwards > trophies2.majorAwards
                        ? `+${trophies1.majorAwards - trophies2.majorAwards} (${player1.name.split(' ')[0]})`
                        : trophies2.majorAwards > trophies1.majorAwards
                        ? `+${trophies2.majorAwards - trophies1.majorAwards} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-slate-200">🌟 All-Cali Teams</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.allCaliCount}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.allCaliCount}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {trophies1.allCaliCount > trophies2.allCaliCount
                        ? `+${trophies1.allCaliCount - trophies2.allCaliCount} (${player1.name.split(' ')[0]})`
                        : trophies2.allCaliCount > trophies1.allCaliCount
                        ? `+${trophies2.allCaliCount - trophies1.allCaliCount} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-slate-200">🔒 All-Defensive Teams</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.allDefensiveCount}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.allDefensiveCount}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {trophies1.allDefensiveCount > trophies2.allDefensiveCount
                        ? `+${trophies1.allDefensiveCount - trophies2.allDefensiveCount} (${player1.name.split(' ')[0]})`
                        : trophies2.allDefensiveCount > trophies1.allDefensiveCount
                        ? `+${trophies2.allDefensiveCount - trophies1.allDefensiveCount} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-3 text-slate-200">🎯 Stat Titles & Single-Game Records</td>
                    <td className="py-3 px-3 text-center font-bold text-amber-400">{trophies1.statTitles + trophies1.recordsCount}</td>
                    <td className="py-3 px-3 text-center font-bold text-cyan-400">{trophies2.statTitles + trophies2.recordsCount}</td>
                    <td className="py-3 px-3 text-right text-slate-400">
                      {(trophies1.statTitles + trophies1.recordsCount) > (trophies2.statTitles + trophies2.recordsCount)
                        ? `+${(trophies1.statTitles + trophies1.recordsCount) - (trophies2.statTitles + trophies2.recordsCount)} (${player1.name.split(' ')[0]})`
                        : (trophies2.statTitles + trophies2.recordsCount) > (trophies1.statTitles + trophies1.recordsCount)
                        ? `+${(trophies2.statTitles + trophies2.recordsCount) - (trophies1.statTitles + trophies1.recordsCount)} (${player2.name.split(' ')[0]})`
                        : 'Tied'}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Individual Accolade Timelines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Player 1 Awards List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {player1.name} Accolade History
                </h4>
                <span className="text-xs text-slate-400 font-semibold">
                  {awards1.length} Total Honors
                </span>
              </div>

              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                {awards1.map((aw, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 hover:border-amber-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">
                        {aw.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-amber-500/10 text-amber-300 font-bold rounded-full border border-amber-500/20">
                        Season {aw.season}
                      </span>
                    </div>
                    {aw.description && (
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {aw.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Player 2 Awards List */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  {player2.name} Accolade History
                </h4>
                <span className="text-xs text-slate-400 font-semibold">
                  {awards2.length} Total Honors
                </span>
              </div>

              <div className="space-y-2.5 max-h-96 overflow-y-auto pr-1">
                {awards2.map((aw, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1 hover:border-cyan-500/30 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-100">
                        {aw.title}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 bg-cyan-500/10 text-cyan-300 font-bold rounded-full border border-cyan-500/20">
                        Season {aw.season}
                      </span>
                    </div>
                    {aw.description && (
                      <p className="text-[11px] text-slate-400 leading-relaxed">
                        {aw.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Skill Attributes & Radar Breakdown */}
      {activeTab === 'attributes' && (
        <div className="space-y-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="text-sm font-bold text-amber-400">{player1.name}</div>
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Skill Rating (2K Scale)</div>
              <div className="text-sm font-bold text-cyan-400">{player2.name}</div>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Scoring & Shot Creation', a1: player1.attributes?.scoring ?? 85, a2: player2.attributes?.scoring ?? 85 },
                { label: 'Shooting & 3PT Range', a1: player1.attributes?.shooting ?? 80, a2: player2.attributes?.shooting ?? 80 },
                { label: 'Playmaking & Court Vision', a1: player1.attributes?.playmaking ?? 80, a2: player2.attributes?.playmaking ?? 80 },
                { label: 'Rebounding & Glass Work', a1: player1.attributes?.rebounding ?? 70, a2: player2.attributes?.rebounding ?? 70 },
                { label: 'Interior Rim Protection', a1: player1.attributes?.interiorDef ?? 60, a2: player2.attributes?.interiorDef ?? 60 },
                { label: 'Perimeter Defense & Steals', a1: player1.attributes?.perimeterDef ?? 75, a2: player2.attributes?.perimeterDef ?? 75 },
                { label: 'Clutch Impact & Shotmaking', a1: player1.attributes?.clutch ?? 88, a2: player2.attributes?.clutch ?? 88 },
                { label: 'Athleticism & Speed', a1: player1.attributes?.athleticism ?? 85, a2: player2.attributes?.athleticism ?? 85 },
              ].map((item) => {
                const diff = item.a1 - item.a2;
                const p1Lead = diff > 0;
                const p2Lead = diff < 0;

                return (
                  <div key={item.label} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-semibold">
                      <span className={p1Lead ? 'text-amber-400 font-bold' : 'text-slate-300'}>
                        {item.a1}
                      </span>
                      <span className="text-slate-400 uppercase tracking-wider text-[11px]">
                        {item.label}
                      </span>
                      <span className={p2Lead ? 'text-cyan-400 font-bold' : 'text-slate-300'}>
                        {item.a2}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                      <div className="flex justify-end h-full">
                        <div
                          className={`h-full rounded-full ${p1Lead ? 'bg-amber-400' : 'bg-amber-700/60'}`}
                          style={{ width: `${item.a1}%` }}
                        />
                      </div>
                      <div className="flex justify-start h-full">
                        <div
                          className={`h-full rounded-full ${p2Lead ? 'bg-cyan-400' : 'bg-cyan-700/60'}`}
                          style={{ width: `${item.a2}%` }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Season-by-Season Trajectory */}
      {activeTab === 'seasons' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Player 1 Season History */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-amber-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {player1.name} Season Trajectory
            </h4>

            {player1.seasonStats && player1.seasonStats.length > 0 ? (
              <div className="space-y-3">
                {player1.seasonStats.map((st) => (
                  <div key={st.season} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-amber-400">Season {st.season}</span>
                      <span className="text-slate-400">{st.team}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">PPG</div>
                        <div className="font-bold text-slate-100">{st.ppg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">RPG</div>
                        <div className="font-bold text-slate-100">{st.rpg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">APG</div>
                        <div className="font-bold text-slate-100">{st.apg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">FG%</div>
                        <div className="font-bold text-slate-100">{st.fgPct ? `${(st.fgPct * 100).toFixed(1)}%` : '—'}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400 p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                Career averages: {player1.ppg ?? 0} PPG, {player1.rpg ?? 0} RPG, {player1.apg ?? 0} APG.
              </div>
            )}
          </div>

          {/* Player 2 Season History */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h4 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
              <Layers className="w-4 h-4" />
              {player2.name} Season Trajectory
            </h4>

            {player2.seasonStats && player2.seasonStats.length > 0 ? (
              <div className="space-y-3">
                {player2.seasonStats.map((st) => (
                  <div key={st.season} className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-cyan-400">Season {st.season}</span>
                      <span className="text-slate-400">{st.team}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-xs">
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">PPG</div>
                        <div className="font-bold text-slate-100">{st.ppg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">RPG</div>
                        <div className="font-bold text-slate-100">{st.rpg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">APG</div>
                        <div className="font-bold text-slate-100">{st.apg}</div>
                      </div>
                      <div className="bg-slate-900 p-1.5 rounded-lg">
                        <div className="text-[10px] text-slate-500 font-semibold">FG%</div>
                        <div className="font-bold text-slate-100">{st.fgPct ? `${(st.fgPct * 100).toFixed(1)}%` : '—'}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-xs text-slate-400 p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                Career averages: {player2.ppg ?? 0} PPG, {player2.rpg ?? 0} RPG, {player2.apg ?? 0} APG.
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
