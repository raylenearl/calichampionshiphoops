import React, { useState, useMemo } from 'react';
import { SEASON_4_SCHEDULE } from '../data/s4ScheduleData';
import { SEASON_3_SCHEDULE } from '../data/s3ScheduleData';
import { SEASON_2_SCHEDULE } from '../data/s2ScheduleData';
import { SEASON_1_SCHEDULE } from '../data/s1ScheduleData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { TEAMS } from '../data/teamsData';
import { GameRecord } from '../types';
import { TeamBadge } from './TeamBadge';
import { InauguralGameModal } from './InauguralGameModal';
import { Calendar, Search, Flame, User, Trophy, Layers, X, Sparkles, BookOpen, FileText, Play, Tv, Star } from 'lucide-react';
import { InstagramIcon } from './SocialLinks';

interface ScheduleBrowserProps {
  selectedSeason: 1 | 2 | 3 | 4;
  setSelectedSeason: (s: 1 | 2 | 3 | 4) => void;
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
  onNavigateToNews?: (articleId?: string) => void;
}

export const ScheduleBrowser: React.FC<ScheduleBrowserProps> = ({
  selectedSeason,
  setSelectedSeason,
  onSelectTeamRecap,
  onNavigateToNews,
}) => {
  const scheduleSeasonKey = (selectedSeason <= 3 ? selectedSeason : 3) as 1 | 2 | 3;
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedTeam, setSelectedTeam] = useState<string>('All');
  const [gameStage, setGameStage] = useState<'all' | 'regular' | 'playoffs'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highScoringOnly, setHighScoringOnly] = useState<boolean>(false);
  const [isInauguralModalOpen, setIsInauguralModalOpen] = useState<boolean>(false);

  const handleTeamClick = (teamName: string) => {
    const matchedTeam = TEAMS.find(
      (t) => t.name.toLowerCase() === teamName.toLowerCase() || t.shortName.toLowerCase() === teamName.toLowerCase()
    );
    if (matchedTeam && onSelectTeamRecap) {
      onSelectTeamRecap(matchedTeam.id, selectedSeason);
    }
  };

  // Combine schedule & playoffs for the selected season
  const activeSchedule = useMemo(() => {
    let regSchedule: GameRecord[] = [];
    if (selectedSeason === 1) regSchedule = SEASON_1_SCHEDULE;
    else if (selectedSeason === 2) regSchedule = SEASON_2_SCHEDULE;
    else if (selectedSeason === 3) regSchedule = SEASON_3_SCHEDULE;
    else regSchedule = SEASON_4_SCHEDULE;

    if (gameStage === 'regular') return regSchedule;

    // Convert playoff games to GameRecord format
    const playoffData = PLAYOFF_HISTORY.find((p) => p.season === selectedSeason);
    const playoffGames: GameRecord[] = [];

    if (playoffData) {
      // Quarterfinals
      playoffData.quarterfinals.forEach((qf, i) => {
        playoffGames.push({
          id: `po-${selectedSeason}-qf-${i}`,
          season: selectedSeason,
          date: `${qf.round}`,
          month: 'Playoffs',
          team1: qf.team1,
          score1: qf.score1,
          team2: qf.team2,
          score2: qf.score2,
          notes: qf.notes ? `${qf.notes}` : `Winner: ${qf.winner}`,
        });
      });

      // Semifinals
      if (playoffData.semifinals) {
        playoffData.semifinals.forEach((sf, i) => {
          playoffGames.push({
            id: `po-${selectedSeason}-sf-${i}`,
            season: selectedSeason,
            date: `${sf.round}`,
            month: 'Playoffs',
            team1: sf.team1,
            score1: sf.score1,
            team2: sf.team2,
            score2: sf.score2,
            notes: sf.notes ? `${sf.notes}` : `Winner: ${sf.winner}`,
          });
        });
      }

      // Finals
      if (playoffData.finals) {
        const f = playoffData.finals;
        playoffGames.push({
          id: `po-${selectedSeason}-finals`,
          season: selectedSeason,
          date: 'CCH Finals',
          month: 'Playoffs',
          team1: f.team1,
          score1: f.score1,
          team2: f.team2,
          score2: f.score2,
          notes: f.notes ? `${f.notes}` : `Champion: ${f.winner}`,
        });
      }
    }

    if (gameStage === 'playoffs') return playoffGames;

    // 'all' stage: Regular season + Playoffs
    return [...regSchedule, ...playoffGames];
  }, [selectedSeason, gameStage]);

  // Compute the latest completed game for highlighting
  const latestCompletedGameId = useMemo(() => {
    const completed = activeSchedule.filter((g) => g.score1 > 0 || g.score2 > 0);
    return completed.length > 0 ? completed[completed.length - 1].id : null;
  }, [activeSchedule]);

  // Months available
  const months = ['All', 'October', 'November', 'December', 'January', 'February', 'March', 'April', 'Playoffs'];

  // Filter games
  const filteredGames = useMemo(() => {
    return activeSchedule.filter((game) => {
      // Month filter
      if (selectedMonth !== 'All' && game.month !== selectedMonth) return false;

      // Team filter
      if (selectedTeam !== 'All') {
        const teamObj = TEAMS.find((t) => t.id === selectedTeam);
        const namePart = teamObj ? teamObj.shortName.toLowerCase() : selectedTeam.toLowerCase();
        const fullName = teamObj ? teamObj.name.toLowerCase() : selectedTeam.toLowerCase();
        const t1 = game.team1.toLowerCase();
        const t2 = game.team2.toLowerCase();
        if (!t1.includes(namePart) && !t2.includes(namePart) && !t1.includes(fullName) && !t2.includes(fullName)) {
          return false;
        }
      }

      // High scoring (> 150 total points)
      if (highScoringOnly && game.score1 + game.score2 < 150) return false;

      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matchesTeams = game.team1.toLowerCase().includes(q) || game.team2.toLowerCase().includes(q);
        const matchesPlayer = game.highScorer ? game.highScorer.toLowerCase().includes(q) : false;
        const matchesDate = game.date.toLowerCase().includes(q);
        const matchesNotes = game.notes ? game.notes.toLowerCase().includes(q) : false;
        if (!matchesTeams && !matchesPlayer && !matchesDate && !matchesNotes) return false;
      }

      return true;
    });
  }, [activeSchedule, selectedMonth, selectedTeam, searchQuery, highScoringOnly]);

  const findTeamId = (teamName: string) => {
    const found = TEAMS.find(
      (t) =>
        t.name.toLowerCase() === teamName.toLowerCase() ||
        t.shortName.toLowerCase() === teamName.toLowerCase() ||
        teamName.toLowerCase().includes(t.shortName.toLowerCase())
    );
    return found ? found.id : 'league';
  };

  return (
    <div className="space-y-6">
      {/* Header & Controls */}
      <div className="bg-slate-900/90 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-5 shadow-xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Calendar className="text-amber-400" size={24} />
              <h2 className="text-2xl font-black text-white tracking-tight">
                Complete CCH Game Schedule & History
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {selectedSeason === 4
                ? 'Official 132-game Season 4 regular season schedule for all 12 franchises (Oct 17 – Apr 9).'
                : `Every single regular season and playoff game in Cali Championship Hoops history (Season ${selectedSeason}).`}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Stage Selector */}
            <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
              <button
                onClick={() => setGameStage('all')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  gameStage === 'all'
                    ? 'bg-slate-800 text-white font-extrabold border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers size={13} />
                All Games
              </button>
              <button
                onClick={() => setGameStage('regular')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  gameStage === 'regular'
                    ? 'bg-slate-800 text-white font-extrabold border border-slate-700'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Regular Season
              </button>
              <button
                onClick={() => setGameStage('playoffs')}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                  gameStage === 'playoffs'
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Trophy size={13} />
                Playoffs
              </button>
            </div>

            {/* Season Switcher */}
            <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
              <button
                onClick={() => setSelectedSeason(1)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 1 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 1
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 2 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 2
              </button>
              <button
                onClick={() => setSelectedSeason(3)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 3 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 3
              </button>
              <button
                onClick={() => setSelectedSeason(4)}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 4 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 4
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-800/80">
          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search team, player, or date..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Team Dropdown */}
          <div>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              <option value="All">All 12 Teams</option>
              {TEAMS.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          </div>

          {/* Month Selector */}
          <div>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500"
            >
              {months.map((m) => (
                <option key={m} value={m}>
                  {m === 'All' ? 'All Months (Oct - Apr + Postseason)' : m}
                </option>
              ))}
            </select>
          </div>

          {/* High Scoring Toggle */}
          <button
            onClick={() => setHighScoringOnly(!highScoringOnly)}
            className={`flex items-center justify-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
              highScoringOnly
                ? 'bg-amber-500/20 text-amber-400 border-amber-500/40'
                : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
            }`}
          >
            <Flame size={15} className={highScoringOnly ? 'text-amber-400' : 'text-slate-500'} />
            <span>High Scoring (&gt;150 Pts)</span>
          </button>
        </div>
      </div>

      {/* CCH Season 4 Schedule Banner (Shows for Season 4) */}
      {selectedSeason === 4 && (
        <div className="bg-gradient-to-r from-blue-950/70 via-slate-900 to-amber-950/50 border border-blue-500/40 p-5 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-blue-400 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles size={15} />
              Official Schedule • 132-Game Regular Season Slate
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Season 4 Full Schedule Released
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              All 12 franchises compete in a 22-game regular-season schedule spanning from Opening Night on October 17 through April 9. Filter games by month, franchise, or matchup below.
            </p>
          </div>
          <div className="bg-slate-950/90 border border-blue-500/30 px-4 py-2.5 rounded-2xl flex items-center gap-3 shrink-0 self-start md:self-center">
            <div className="text-center">
              <span className="text-[9px] uppercase font-bold text-slate-400 block whitespace-nowrap">Total Games</span>
              <span className="text-sm font-black text-amber-400 font-mono">132</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-[9px] uppercase font-bold text-slate-400 block whitespace-nowrap">Per Franchise</span>
              <span className="text-sm font-black text-blue-400 font-mono">22</span>
            </div>
            <div className="h-6 w-px bg-slate-800" />
            <div className="text-center">
              <span className="text-[9px] uppercase font-bold text-slate-400 block whitespace-nowrap">Opening Tip</span>
              <span className="text-sm font-black text-emerald-400 font-mono">Oct 17</span>
            </div>
          </div>
        </div>
      )}

      {/* CCH Inaugural Game Spotlight Banner (Shows for Season 1) */}
      {selectedSeason === 1 && (
        <div className="bg-gradient-to-r from-amber-950/60 via-slate-900 to-amber-950/60 border border-amber-500/40 p-5 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-wider">
              <Sparkles size={15} />
              Historic Milestone • League Opening Game
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              First-Ever CCH Game: California Reds vs. SD Sabrewolves
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Oct 24, Season 1 — Reds Triumph Over Sabrewolves in Inaugural Clash (80-74). Features quotes from Commissioner Ray Lenearl, Martin McCloud, Andre Creek, Coach William Walker & Captain J.C. McMillan.
            </p>
          </div>
          <button
            onClick={() => setIsInauguralModalOpen(true)}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-2xl transition-all cursor-pointer shadow-lg flex items-center gap-2 shrink-0 self-start md:self-center"
          >
            <BookOpen size={16} />
            Read Inaugural Game Story & Boxscore
          </button>
        </div>
      )}

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-2">
        <span>
          Showing <strong className="text-amber-400 font-mono font-bold">{filteredGames.length}</strong> CCH game results
        </span>
        {searchQuery || selectedTeam !== 'All' || selectedMonth !== 'All' || highScoringOnly || gameStage !== 'all' ? (
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedTeam('All');
              setSelectedMonth('All');
              setHighScoringOnly(false);
              setGameStage('all');
            }}
            className="text-amber-400 hover:underline font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        ) : null}
      </div>

      {/* Game Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredGames.map((game) => {
          const isPending = game.score1 === 0 && game.score2 === 0;
          const team1Wins = game.score1 > game.score2;
          const isHighScoring = game.score1 + game.score2 >= 150;
          const isPlayoff = game.month === 'Playoffs' || game.date.includes('Finals') || game.date.includes('Quarterfinals') || game.date.includes('Semifinals');
          const isInauguralGame = game.id === 's1-2' || (game.season === 1 && game.date === 'Oct 24' && game.team1.includes('California') && game.team2.includes('San Diego'));
          const isLatestCompleted = game.id === latestCompletedGameId;

          return (
            <div
              key={game.id}
              className={`bg-slate-900 border ${
                isLatestCompleted
                  ? 'border-amber-400/90 shadow-xl shadow-amber-500/15 ring-2 ring-amber-400/30'
                  : isInauguralGame
                  ? 'border-amber-400 shadow-amber-500/10'
                  : isPlayoff
                  ? 'border-amber-500/40 shadow-amber-950/20'
                  : 'border-slate-800'
              } hover:border-amber-500/60 rounded-2xl p-4 space-y-3 transition-all shadow-md hover:-translate-y-0.5`}
            >
              {/* Date & Tags */}
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                <span className="font-mono font-bold text-slate-300 flex items-center gap-1.5">
                  <Calendar size={13} className="text-amber-400" />
                  {game.date}
                </span>
                <div className="flex items-center gap-1.5">
                  {isLatestCompleted && (
                    <span className="text-[10px] bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow animate-pulse">
                      <Flame size={11} className="fill-slate-950" /> LATEST GAME
                    </span>
                  )}
                  {isInauguralGame && (
                    <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full flex items-center gap-1 shadow">
                      <Sparkles size={11} /> INAUGURAL GAME
                    </span>
                  )}
                  {isPlayoff && (
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Trophy size={11} /> POSTSEASON
                    </span>
                  )}
                  {isHighScoring && !isPlayoff && !isInauguralGame && !isLatestCompleted && (
                    <span className="text-[10px] bg-amber-950 text-amber-400 font-bold px-2 py-0.5 rounded-full border border-amber-800/60 flex items-center gap-1">
                      <Flame size={11} /> High Scoring
                    </span>
                  )}
                </div>
              </div>

              {/* Matchup Teams & Scores */}
              <div className="space-y-2.5">
                {/* Team 1 */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <TeamBadge teamId={findTeamId(game.team1)} size="sm" />
                    <span className={`text-sm font-extrabold ${!isPending && team1Wins ? 'text-white' : 'text-slate-300'}`}>
                      {game.team1}
                    </span>
                  </div>
                  {isPending ? (
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-1 rounded-lg border border-amber-800/60">
                      TBD
                    </span>
                  ) : (
                    <span
                      className={`font-mono text-base font-black px-2.5 py-0.5 rounded-lg shrink-0 ${
                        team1Wins ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {game.score1}
                    </span>
                  )}
                </div>

                {/* Team 2 */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <TeamBadge teamId={findTeamId(game.team2)} size="sm" />
                    <span className={`text-sm font-extrabold ${!isPending && !team1Wins ? 'text-white' : 'text-slate-300'}`}>
                      {game.team2}
                    </span>
                  </div>
                  {isPending ? (
                    <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/80 px-2 py-1 rounded-lg border border-amber-800/60">
                      TBD
                    </span>
                  ) : (
                    <span
                      className={`font-mono text-base font-black px-2.5 py-0.5 rounded-lg shrink-0 ${
                        !team1Wins ? 'bg-amber-500 text-slate-950' : 'bg-slate-950 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {game.score2}
                    </span>
                  )}
                </div>
              </div>

              {/* Leading Scorer or Notes */}
              {(game.starPlayer || game.playerOfTheGame || game.highScorer || game.notes || isInauguralGame) && (
                <div className="pt-2.5 border-t border-slate-800/80 flex flex-col gap-1.5 text-xs">
                  {(game.starPlayer || game.playerOfTheGame) && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-amber-400 font-bold flex items-center gap-1">
                        <Star size={12} className="fill-amber-400 text-amber-400" /> Star of the Game:
                      </span>
                      <span className="font-mono font-bold text-amber-300">
                        {game.starPlayer || game.playerOfTheGame}
                      </span>
                    </div>
                  )}
                  {game.highScorer && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                        <User size={12} className="text-slate-400" /> Leading Scorer:
                      </span>
                      <span className="font-mono font-bold text-slate-300">
                        {game.highScorer}
                        {game.points && !game.highScorer.includes('pts') ? ` (${game.points} pts)` : ''}
                      </span>
                    </div>
                  )}
                  {isInauguralGame ? (
                    <button
                      onClick={() => setIsInauguralModalOpen(true)}
                      className="w-full py-2 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-extrabold rounded-xl text-xs flex items-center justify-center gap-2 transition-all cursor-pointer mt-1"
                    >
                      <BookOpen size={14} /> Read Inaugural Game Article
                    </button>
                  ) : (game.score1 > 0 || game.score2 > 0) && onNavigateToNews ? (
                    <div className="space-y-1.5 mt-1">
                      {game.notes && (
                        <p className="text-[11px] text-amber-300/90 bg-amber-950/30 p-2 rounded-xl border border-amber-900/30 font-medium leading-relaxed">
                          💡 {game.notes}
                        </p>
                      )}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                        <button
                          onClick={() => onNavigateToNews(game.recapArticleId || game.id)}
                          className="py-2 px-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md"
                        >
                          <BookOpen size={13} /> Recap Story
                        </button>
                        {game.youtubeUrl && (
                          <a
                            href={game.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-2 bg-red-600/90 hover:bg-red-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md text-center"
                          >
                            <Play size={13} className="fill-white" /> Watch Replay
                          </a>
                        )}
                        {game.instagramUrl && (
                          <a
                            href={game.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-2 px-2 bg-pink-600/90 hover:bg-pink-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md text-center"
                          >
                            <InstagramIcon size={13} /> Instagram Reel
                          </a>
                        )}
                      </div>
                    </div>
                  ) : (game.notes || game.youtubeUrl || game.instagramUrl) ? (
                    <div className="space-y-1.5 mt-1">
                      {game.notes && (
                        <p className="text-[11px] text-amber-300/90 bg-amber-950/30 p-2 rounded-xl border border-amber-900/30 font-medium leading-relaxed">
                          💡 {game.notes}
                        </p>
                      )}
                      {(game.youtubeUrl || game.instagramUrl) && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                          {game.youtubeUrl && (
                            <a
                              href={game.youtubeUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-2 bg-red-600/90 hover:bg-red-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md text-center"
                            >
                              <Play size={13} className="fill-white" /> Watch Replay
                            </a>
                          )}
                          {game.instagramUrl && (
                            <a
                              href={game.instagramUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="py-2 px-2 bg-pink-600/90 hover:bg-pink-500 text-white font-black rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer shadow-md text-center"
                            >
                              <InstagramIcon size={13} /> Instagram Reel
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Inaugural Game Article Modal */}
      <InauguralGameModal
        isOpen={isInauguralModalOpen}
        onClose={() => setIsInauguralModalOpen(false)}
        onSelectTeamRecap={onSelectTeamRecap}
      />
    </div>
  );
};
