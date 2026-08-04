import React, { useState, useMemo } from 'react';
import { SEASON_3_SCHEDULE } from '../data/s3ScheduleData';
import { SEASON_2_SCHEDULE } from '../data/s2ScheduleData';
import { SEASON_1_SCHEDULE } from '../data/s1ScheduleData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { TEAMS } from '../data/teamsData';
import { GameRecord } from '../types';
import { TeamBadge } from './TeamBadge';
import { Calendar, Search, Flame, User, Trophy, Layers } from 'lucide-react';

interface ScheduleBrowserProps {
  selectedSeason: 1 | 2 | 3;
  setSelectedSeason: (s: 1 | 2 | 3) => void;
}

export const ScheduleBrowser: React.FC<ScheduleBrowserProps> = ({ selectedSeason, setSelectedSeason }) => {
  const [selectedMonth, setSelectedMonth] = useState<string>('All');
  const [selectedTeam, setSelectedTeam] = useState<string>('All');
  const [gameStage, setGameStage] = useState<'all' | 'regular' | 'playoffs'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [highScoringOnly, setHighScoringOnly] = useState<boolean>(false);

  // Combine schedule & playoffs for the selected season
  const activeSchedule = useMemo(() => {
    let regSchedule: GameRecord[] = [];
    if (selectedSeason === 1) regSchedule = SEASON_1_SCHEDULE;
    else if (selectedSeason === 2) regSchedule = SEASON_2_SCHEDULE;
    else regSchedule = SEASON_3_SCHEDULE;

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
                Complete CCH Game History
              </h2>
            </div>
            <p className="text-xs text-slate-400 font-medium mt-1">
              Every single regular season and playoff game in Cali Championship Hoops history (Seasons 1–3).
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
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
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

          return (
            <div
              key={game.id}
              className={`bg-slate-900 border ${
                isPlayoff ? 'border-amber-500/40 shadow-amber-950/20' : 'border-slate-800'
              } hover:border-slate-700 rounded-2xl p-4 space-y-3 transition-all shadow-md hover:-translate-y-0.5`}
            >
              {/* Date & Tags */}
              <div className="flex items-center justify-between text-xs border-b border-slate-800/80 pb-2">
                <span className="font-mono font-bold text-slate-300 flex items-center gap-1.5">
                  <Calendar size={13} className="text-amber-400" />
                  {game.date}
                </span>
                <div className="flex items-center gap-1.5">
                  {isPlayoff && (
                    <span className="text-[10px] bg-amber-500 text-slate-950 font-black px-2 py-0.5 rounded-full flex items-center gap-1">
                      <Trophy size={11} /> POSTSEASON
                    </span>
                  )}
                  {isHighScoring && !isPlayoff && (
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
                  <div className="flex items-center gap-2 overflow-hidden">
                    <TeamBadge teamId={findTeamId(game.team1)} size="sm" />
                    <span className={`text-sm font-extrabold truncate ${!isPending && team1Wins ? 'text-white' : 'text-slate-300'}`}>
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
                  <div className="flex items-center gap-2 overflow-hidden">
                    <TeamBadge teamId={findTeamId(game.team2)} size="sm" />
                    <span className={`text-sm font-extrabold truncate ${!isPending && !team1Wins ? 'text-white' : 'text-slate-300'}`}>
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
              {(game.highScorer || game.notes) && (
                <div className="pt-2.5 border-t border-slate-800/80 flex flex-col gap-1 text-xs">
                  {game.highScorer && (
                    <div className="flex items-center justify-between text-slate-300">
                      <span className="text-[11px] text-slate-400 font-bold flex items-center gap-1">
                        <User size={12} className="text-amber-400" /> Leading Scorer:
                      </span>
                      <span className="font-mono font-bold text-amber-300">
                        {game.highScorer}
                        {game.points && !game.highScorer.includes('pts') ? ` (${game.points} pts)` : ''}
                      </span>
                    </div>
                  )}
                  {game.notes && (
                    <p className="text-[11px] text-amber-300/90 bg-amber-950/30 p-2 rounded-xl border border-amber-900/30 font-medium leading-relaxed mt-1">
                      💡 {game.notes}
                    </p>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
