import React, { useState, useRef, useMemo, useEffect } from 'react';
import { SEASON_4_SCHEDULE } from '../data/s4ScheduleData';
import { SEASON_3_SCHEDULE } from '../data/s3ScheduleData';
import { SEASON_2_SCHEDULE } from '../data/s2ScheduleData';
import { SEASON_1_SCHEDULE } from '../data/s1ScheduleData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { TEAMS, TEAM_ABBREVIATIONS } from '../data/teamsData';
import { GameRecord } from '../types';
import { TeamBadge } from './TeamBadge';
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Trophy,
  Play,
  FileText,
  Sparkles,
  ChevronDown,
  ChevronUp,
  X,
  ExternalLink,
  Flame,
  Zap,
} from 'lucide-react';

interface ScoreboardTickerProps {
  selectedSeason: 1 | 2 | 3 | 4;
  onSelectSeason?: (s: 1 | 2 | 3 | 4) => void;
  onNavigateToNews?: (articleId?: string) => void;
  onSelectTeam?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
  onNavigateToSchedule?: () => void;
}

export const ScoreboardTicker: React.FC<ScoreboardTickerProps> = ({
  selectedSeason,
  onSelectSeason,
  onNavigateToNews,
  onSelectTeam,
  onNavigateToSchedule,
}) => {
  const [activeSeasonFilter, setActiveSeasonFilter] = useState<1 | 2 | 3 | 4 | 'playoffs'>(selectedSeason);
  const [filterMode, setFilterMode] = useState<'all' | 'finals' | 'upcoming'>('all');
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedGameForModal, setSelectedGameForModal] = useState<GameRecord | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sync activeSeasonFilter with prop if prop changes
  useEffect(() => {
    setActiveSeasonFilter(selectedSeason);
  }, [selectedSeason]);

  // Helper to find team id from team name
  const findTeam = (teamName: string) => {
    const lower = teamName.toLowerCase().trim();
    return TEAMS.find(
      (t) =>
        t.name.toLowerCase() === lower ||
        t.shortName.toLowerCase() === lower ||
        lower.includes(t.shortName.toLowerCase()) ||
        (lower.includes('reds') && t.id === 'california-reds') ||
        (lower.includes('sabrewolves') && t.id === 'san-diego-sabrewolves') ||
        (lower.includes('knights') && t.id === 'san-francisco-knights') ||
        (lower.includes('strykers') && t.id === 'san-diego-strykers') ||
        (lower.includes('stallions') && t.id === 'sacramento-stallions') ||
        (lower.includes('dynamics') && t.id === 'los-angeles-dynamics') ||
        (lower.includes('enterprise') && t.id === 'golden-state-enterprise') ||
        (lower.includes('renegades') && t.id === 'oakland-renegades') ||
        (lower.includes('tigersharks') && t.id === 'san-jose-tigersharks') ||
        (lower.includes('admirals') && t.id === 'anaheim-admirals') ||
        (lower.includes('vipers') && t.id === 'long-beach-vipers') ||
        (lower.includes('mad dogs') && t.id === 'fresno-mad-dogs')
    );
  };

  const getTeamAbbreviation = (teamName: string) => {
    const team = findTeam(teamName);
    if (team && TEAM_ABBREVIATIONS[team.id]) {
      return TEAM_ABBREVIATIONS[team.id];
    }
    return team?.shortName || teamName.substring(0, 3).toUpperCase();
  };

  // Compile games based on selected filter
  const gamesList = useMemo(() => {
    let rawGames: GameRecord[] = [];

    if (activeSeasonFilter === 'playoffs') {
      PLAYOFF_HISTORY.forEach((p) => {
        p.quarterfinals.forEach((qf, idx) => {
          rawGames.push({
            id: `po-${p.season}-qf-${idx}`,
            season: p.season,
            date: `S${p.season} QF`,
            month: 'Playoffs',
            team1: qf.team1,
            score1: qf.score1,
            team2: qf.team2,
            score2: qf.score2,
            notes: qf.notes || `Winner: ${qf.winner}`,
            recapArticleId: qf.recapArticleId || `po-${p.season}-qf-${idx}`,
          });
        });
        if (p.semifinals) {
          p.semifinals.forEach((sf, idx) => {
            rawGames.push({
              id: `po-${p.season}-sf-${idx}`,
              season: p.season,
              date: `S${p.season} ${sf.round || 'Semis'}`,
              month: 'Playoffs',
              team1: sf.team1,
              score1: sf.score1,
              team2: sf.team2,
              score2: sf.score2,
              notes: sf.notes || `Winner: ${sf.winner}`,
              recapArticleId: sf.recapArticleId || `po-${p.season}-sf-${idx}`,
            });
          });
        }
        if (p.finals) {
          rawGames.push({
            id: `po-${p.season}-finals`,
            season: p.season,
            date: `S${p.season} FINALS 🏆`,
            month: 'Playoffs',
            team1: p.finals.team1,
            score1: p.finals.score1,
            team2: p.finals.team2,
            score2: p.finals.score2,
            notes: p.finals.notes || `Champion: ${p.champion}`,
            recapArticleId: p.finals.recapArticleId || `po-${p.season}-finals`,
          });
        }
      });
    } else {
      switch (activeSeasonFilter) {
        case 1:
          rawGames = [...SEASON_1_SCHEDULE];
          break;
        case 2:
          rawGames = [...SEASON_2_SCHEDULE];
          break;
        case 3:
          rawGames = [...SEASON_3_SCHEDULE];
          break;
        case 4:
        default:
          rawGames = [...SEASON_4_SCHEDULE];
          break;
      }
    }

    // Apply quick sub-filter
    if (filterMode === 'finals') {
      return rawGames.filter((g) => g.score1 > 0 || g.score2 > 0);
    }
    if (filterMode === 'upcoming') {
      return rawGames.filter((g) => g.score1 === 0 && g.score2 === 0);
    }
    return rawGames;
  }, [activeSeasonFilter, filterMode]);

  // Check scroll position to show/hide scroll indicators
  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [gamesList]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 380;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Jump directly to the latest played game
  const jumpToLatest = () => {
    if (scrollRef.current) {
      // Find index of last played game in current list
      let lastPlayedIdx = -1;
      for (let i = gamesList.length - 1; i >= 0; i--) {
        if (gamesList[i].score1 > 0 || gamesList[i].score2 > 0) {
          lastPlayedIdx = i;
          break;
        }
      }
      if (lastPlayedIdx !== -1) {
        const cardWidth = 200; // estimated card + gap
        const targetScroll = Math.max(0, lastPlayedIdx * cardWidth - 200);
        scrollRef.current.scrollTo({ left: targetScroll, behavior: 'smooth' });
      }
    }
  };

  const handleGameCardClick = (game: GameRecord) => {
    const isPlayed = game.score1 > 0 || game.score2 > 0;
    if (isPlayed && onNavigateToNews) {
      const articleId = game.recapArticleId || game.id || `game-${game.season}-${game.team1}-${game.team2}`;
      onNavigateToNews(articleId);
    } else {
      setSelectedGameForModal(game);
    }
  };

  return (
    <div
      id="espn-scoreboard-ticker"
      className="w-full bg-slate-950/95 border-b border-slate-800/90 text-slate-100 relative select-none"
    >
      {/* Top Controls & Filter Sub-Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between gap-2 text-xs border-b border-slate-900/80">
        {/* Left: Scoreboard Branding & Season Buttons */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 overflow-x-auto scrollbar-none py-0.5 min-w-0">
          <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-black text-[10px] sm:text-[11px] tracking-wider uppercase shrink-0">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>SCORES</span>
          </div>

          {/* Season Switcher Pills */}
          <div className="flex items-center bg-slate-900/90 border border-slate-800 rounded-xl p-0.5 text-[11px] font-semibold shrink-0">
            {([4, 3, 2, 1] as const).map((s) => (
              <button
                key={s}
                onClick={() => {
                  setActiveSeasonFilter(s);
                  if (onSelectSeason) onSelectSeason(s);
                }}
                className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-bold ${
                  activeSeasonFilter === s
                    ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                S{s} {s === 4 ? '🔥' : ''}
              </button>
            ))}
            <button
              onClick={() => setActiveSeasonFilter('playoffs')}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer font-bold flex items-center gap-1 ${
                activeSeasonFilter === 'playoffs'
                  ? 'bg-amber-500 text-slate-950 shadow-sm font-black'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Trophy size={11} />
              <span>Playoffs</span>
            </button>
          </div>

          {/* Filter Status (All / Finals / Upcoming) */}
          <div className="hidden md:flex items-center bg-slate-900/60 border border-slate-800/80 rounded-xl p-0.5 text-[10px] font-medium text-slate-400">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'all' ? 'bg-slate-800 text-white font-bold' : 'hover:text-white'
              }`}
            >
              All ({gamesList.length})
            </button>
            <button
              onClick={() => setFilterMode('finals')}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'finals' ? 'bg-slate-800 text-amber-400 font-bold' : 'hover:text-white'
              }`}
            >
              Final Scores
            </button>
            <button
              onClick={() => setFilterMode('upcoming')}
              className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer ${
                filterMode === 'upcoming' ? 'bg-slate-800 text-sky-400 font-bold' : 'hover:text-white'
              }`}
            >
              Upcoming
            </button>
          </div>
        </div>

        {/* Right: Quick Jumps & Navigation */}
        <div className="flex items-center gap-1.5 shrink-0">
          {activeSeasonFilter === 4 && (
            <button
              onClick={jumpToLatest}
              className="hidden sm:flex items-center gap-1 px-2 py-0.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-amber-400 hover:text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold transition-all cursor-pointer shadow-sm"
              title="Jump to latest played games"
            >
              <Zap size={11} />
              <span>Jump to Latest</span>
            </button>
          )}

          {onNavigateToSchedule && (
            <button
              onClick={onNavigateToSchedule}
              className="hidden lg:flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition-colors cursor-pointer px-1.5 py-0.5"
            >
              <Calendar size={12} />
              <span>Full Schedule →</span>
            </button>
          )}

          {/* Collapse/Expand Scoreboard Button */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            title={isCollapsed ? 'Expand Scoreboard' : 'Collapse Scoreboard'}
            aria-label={isCollapsed ? 'Expand Scoreboard' : 'Collapse Scoreboard'}
          >
            {isCollapsed ? <ChevronDown size={14} /> : <ChevronUp size={14} />}
          </button>
        </div>
      </div>

      {/* Horizontal Scrollable ESPN Scoreboard Strip */}
      {!isCollapsed && (
        <div className="relative group/ticker py-2 px-1 sm:px-3">
          {/* Left Arrow Button */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-12 sm:w-8 sm:h-14 bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 rounded-l-lg border border-slate-700/80 flex items-center justify-center shadow-2xl transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
          )}

          {/* Left Gradient Fade */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none z-10" />
          )}

          {/* Scrollable Track */}
          <div
            ref={scrollRef}
            className="flex items-center gap-2.5 sm:gap-3 overflow-x-auto scrollbar-none scroll-smooth px-2 sm:px-4 py-1"
          >
            {gamesList.map((game) => {
              const team1Obj = findTeam(game.team1);
              const team2Obj = findTeam(game.team2);
              const isPlayed = game.score1 > 0 || game.score2 > 0;
              const isTeam1Winner = isPlayed && game.score1 > game.score2;
              const isTeam2Winner = isPlayed && game.score2 > game.score1;
              const team1Abbr = getTeamAbbreviation(game.team1);
              const team2Abbr = getTeamAbbreviation(game.team2);

              return (
                <div
                  key={game.id}
                  onClick={() => handleGameCardClick(game)}
                  className="min-w-[185px] sm:min-w-[200px] max-w-[215px] shrink-0 bg-gradient-to-b from-slate-900/90 to-slate-950/95 hover:from-slate-850 hover:to-slate-900 border border-slate-800 hover:border-amber-500/60 rounded-2xl p-2.5 transition-all duration-200 cursor-pointer shadow-md hover:shadow-xl hover:-translate-y-0.5 group/card relative overflow-hidden"
                  title={isPlayed ? "Click to view full game recap article" : "Click to view matchup details"}
                >
                  {/* Top Status & Date Row */}
                  <div className="flex items-center justify-between gap-1 text-[10px] font-mono mb-2 pb-1.5 border-b border-slate-800/80">
                    <div className="flex items-center gap-1.5">
                      {isPlayed ? (
                        <span className="font-extrabold text-emerald-400 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          FINAL
                        </span>
                      ) : (
                        <span className="font-bold text-sky-400">UPCOMING</span>
                      )}
                      <span className="text-slate-400">{game.date}</span>
                    </div>

                    {/* Media Badges */}
                    <div className="flex items-center gap-1">
                      {game.youtubeUrl && (
                        <span
                          className="px-1 py-0.2 rounded bg-red-950/60 border border-red-800/60 text-red-400 text-[9px] font-bold flex items-center gap-0.5"
                          title="Watch Highlights"
                        >
                          <Play size={8} className="fill-red-400" />
                        </span>
                      )}
                      {isPlayed && (
                        <span
                          className="px-1.5 py-0.2 rounded bg-amber-500/15 border border-amber-500/40 text-amber-400 text-[9px] font-extrabold flex items-center gap-0.5 group-hover/card:bg-amber-500 group-hover/card:text-slate-950 transition-colors"
                          title="Click to read full article on new page"
                        >
                          <FileText size={8} />
                          <span>ARTICLE</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Teams & Scores */}
                  <div className="space-y-1.5">
                    {/* Team 1 Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={team1Obj?.id || 'california-reds'} size="sm" />
                        <span
                          className={`text-xs font-bold truncate ${
                            isPlayed
                              ? isTeam1Winner
                                ? 'text-white font-black'
                                : 'text-slate-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {team1Abbr}
                        </span>
                      </div>
                      <div className="font-mono text-sm font-black shrink-0">
                        {isPlayed ? (
                          <span className={isTeam1Winner ? 'text-amber-400 font-extrabold' : 'text-slate-400'}>
                            {game.score1}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">-</span>
                        )}
                      </div>
                    </div>

                    {/* Team 2 Row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={team2Obj?.id || 'california-reds'} size="sm" />
                        <span
                          className={`text-xs font-bold truncate ${
                            isPlayed
                              ? isTeam2Winner
                                ? 'text-white font-black'
                                : 'text-slate-400'
                              : 'text-slate-200'
                          }`}
                        >
                          {team2Abbr}
                        </span>
                      </div>
                      <div className="font-mono text-sm font-black shrink-0">
                        {isPlayed ? (
                          <span className={isTeam2Winner ? 'text-amber-400 font-extrabold' : 'text-slate-400'}>
                            {game.score2}
                          </span>
                        ) : (
                          <span className="text-slate-400 text-xs">-</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom / High Scorer or Notes Snippet */}
                  <div className="mt-2 pt-1.5 border-t border-slate-800/60 text-[10px] text-slate-400 truncate flex items-center justify-between">
                    {game.highScorer ? (
                      <span className="truncate text-amber-300/90 font-medium">
                        ⭐️ {game.highScorer}
                      </span>
                    ) : game.notes ? (
                      <span className="truncate text-slate-400">{game.notes}</span>
                    ) : (
                      <span className="text-slate-400">Matchup Preview</span>
                    )}
                    {isPlayed && (
                      <span className="text-amber-400 font-bold opacity-0 group-hover/card:opacity-100 transition-opacity shrink-0 ml-1 text-[9px]">
                        Read →
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Gradient Fade */}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-16 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none z-10" />
          )}

          {/* Right Arrow Button */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-12 sm:w-8 sm:h-14 bg-slate-950/90 hover:bg-amber-500 hover:text-slate-950 text-slate-200 rounded-r-lg border border-slate-700/80 flex items-center justify-center shadow-2xl transition-all cursor-pointer backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          )}
        </div>
      )}

      {/* Quick Game Summary Modal (when clicking on a game without article or for full boxscore) */}
      {selectedGameForModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative text-slate-100">
            {/* Close Button */}
            <button
              onClick={() => setSelectedGameForModal(null)}
              className="absolute top-5 right-5 p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full border border-slate-800 transition-colors cursor-pointer"
              title="Close Modal"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="space-y-2 border-b border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold text-xs">
                  SEASON {selectedGameForModal.season} • {selectedGameForModal.date}
                </span>
                {selectedGameForModal.month && (
                  <span className="text-xs text-slate-400 font-medium">
                    {selectedGameForModal.month}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-black text-white">Game Summary & Boxscore</h3>
            </div>

            {/* Teams Faceoff Card */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-800 p-5 grid grid-cols-2 gap-4 items-center">
              {/* Team 1 */}
              <div
                onClick={() => {
                  const t1 = findTeam(selectedGameForModal.team1);
                  if (t1 && onSelectTeam) {
                    onSelectTeam(t1.id, selectedGameForModal.season as 1 | 2 | 3 | 4);
                    setSelectedGameForModal(null);
                  }
                }}
                className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer group"
              >
                <TeamBadge teamId={findTeam(selectedGameForModal.team1)?.id || 'california-reds'} size="lg" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-amber-400 transition-colors">
                    {selectedGameForModal.team1}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {findTeam(selectedGameForModal.team1)?.conference || 'CCH'}
                  </div>
                </div>
                <div
                  className={`text-3xl font-black font-mono ${
                    selectedGameForModal.score1 > selectedGameForModal.score2
                      ? 'text-amber-400'
                      : 'text-slate-400'
                  }`}
                >
                  {selectedGameForModal.score1 > 0 || selectedGameForModal.score2 > 0
                    ? selectedGameForModal.score1
                    : '-'}
                </div>
              </div>

              {/* Team 2 */}
              <div
                onClick={() => {
                  const t2 = findTeam(selectedGameForModal.team2);
                  if (t2 && onSelectTeam) {
                    onSelectTeam(t2.id, selectedGameForModal.season as 1 | 2 | 3 | 4);
                    setSelectedGameForModal(null);
                  }
                }}
                className="flex flex-col items-center text-center space-y-2 p-3 rounded-xl hover:bg-slate-900 transition-colors cursor-pointer group"
              >
                <TeamBadge teamId={findTeam(selectedGameForModal.team2)?.id || 'california-reds'} size="lg" />
                <div>
                  <div className="font-extrabold text-sm text-white group-hover:text-amber-400 transition-colors">
                    {selectedGameForModal.team2}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {findTeam(selectedGameForModal.team2)?.conference || 'CCH'}
                  </div>
                </div>
                <div
                  className={`text-3xl font-black font-mono ${
                    selectedGameForModal.score2 > selectedGameForModal.score1
                      ? 'text-amber-400'
                      : 'text-slate-400'
                  }`}
                >
                  {selectedGameForModal.score1 > 0 || selectedGameForModal.score2 > 0
                    ? selectedGameForModal.score2
                    : '-'}
                </div>
              </div>
            </div>

            {/* Key Performer / High Scorer */}
            {selectedGameForModal.highScorer && (
              <div className="bg-amber-950/20 border border-amber-500/30 rounded-2xl p-4 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500 text-slate-950 font-black shrink-0">
                  <Flame size={20} />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                    Game High Scorer / Top Performer
                  </div>
                  <div className="text-sm font-extrabold text-white">
                    {selectedGameForModal.highScorer}
                    {selectedGameForModal.points ? ` (${selectedGameForModal.points} PTS)` : ''}
                  </div>
                </div>
              </div>
            )}

            {/* Game Notes */}
            {selectedGameForModal.notes && (
              <div className="bg-slate-950/60 rounded-2xl border border-slate-800 p-4 space-y-1">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  Game Recap & Context
                </div>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {selectedGameForModal.notes}
                </p>
              </div>
            )}

            {/* YouTube Embed or Link if available */}
            {selectedGameForModal.youtubeUrl && (
              <div className="space-y-2">
                <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Play size={12} className="text-red-400 fill-red-400" />
                  <span>Official Video Broadcast Highlights</span>
                </div>
                <a
                  href={selectedGameForModal.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-red-950/60 hover:bg-red-900/80 text-red-200 border border-red-700/60 font-bold text-xs transition-all shadow-md"
                >
                  <Play size={14} className="fill-red-400" />
                  <span>Watch Complete Game Highlights on YouTube</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            )}

            {/* Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              {(selectedGameForModal.score1 > 0 || selectedGameForModal.score2 > 0) && onNavigateToNews && (
                <button
                  onClick={() => {
                    const artId = selectedGameForModal.recapArticleId || selectedGameForModal.id;
                    setSelectedGameForModal(null);
                    onNavigateToNews(artId);
                  }}
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center gap-1.5 shadow-md transition-all cursor-pointer"
                >
                  <FileText size={14} />
                  <span>Read Full In-Depth Story in News →</span>
                </button>
              )}
              <button
                onClick={() => setSelectedGameForModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
