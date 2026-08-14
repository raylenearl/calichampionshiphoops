import React, { useState, useEffect } from 'react';
import { TEAMS } from '../data/teamsData';
import { PLAYERS } from '../data/playersData';
import { SINGLE_GAME_RECORDS, ABSOLUTE_SEASON_LEADERS } from '../data/recordsData';
import { SEASON_3_SCHEDULE } from '../data/s3ScheduleData';
import { ALL_AWARDS } from '../data/awardsData';
import { TRANSACTIONS_DATA } from '../data/transactionsData';
import { TeamBadge } from './TeamBadge';
import { Search, X, Trophy, Users, Calendar, BookOpen, ChevronRight, Star, ArrowLeftRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateTab: (tab: string) => void;
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3) => void;
  onComparePlayer?: (playerId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigateTab,
  onSelectTeamRecap,
  onComparePlayer,
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedTeams = q ? TEAMS.filter((t) => t.name.toLowerCase().includes(q) || t.city.toLowerCase().includes(q)) : [];
  const matchedPlayers = q ? PLAYERS.filter((p) => p.name.toLowerCase().includes(q) || p.teamName.toLowerCase().includes(q)) : [];
  const matchedRecords = q ? SINGLE_GAME_RECORDS.filter((r) => r.category.toLowerCase().includes(q) || r.player.toLowerCase().includes(q) || r.statistic.toString().toLowerCase().includes(q)) : [];
  const matchedGames = q ? SEASON_3_SCHEDULE.filter((g) => g.team1.toLowerCase().includes(q) || g.team2.toLowerCase().includes(q) || (g.highScorer && g.highScorer.toLowerCase().includes(q))).slice(0, 5) : [];
  const matchedAwards = q ? ALL_AWARDS.filter((a) => a.player.toLowerCase().includes(q) || a.category.toLowerCase().includes(q) || a.team.toLowerCase().includes(q)) : [];
  const matchedTransactions = q ? TRANSACTIONS_DATA.filter((tx) => tx.title.toLowerCase().includes(q) || tx.description.toLowerCase().includes(q) || tx.teams.some(t => t.name.toLowerCase().includes(q))).slice(0, 4) : [];
  const isAllStarMatch = q && ('all star'.includes(q) || 'allstar'.includes(q) || 'elam'.includes(q) || '36-23'.includes(q) || 'target'.includes(q) || 'dunk'.includes(q));

  const hasResults = matchedTeams.length > 0 || matchedPlayers.length > 0 || matchedRecords.length > 0 || matchedGames.length > 0 || matchedAwards.length > 0 || matchedTransactions.length > 0 || isAllStarMatch;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center p-4 pt-16 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 w-full max-w-2xl rounded-3xl p-5 sm:p-6 space-y-4 relative shadow-2xl"
      >
        {/* Extended Search Bar Header with Exit Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-3.5 text-amber-400" size={20} />
            <input
              type="text"
              autoFocus
              placeholder="Search teams, players, scores, records, or awards..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-2xl pl-12 pr-10 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 font-medium"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="absolute right-3 top-3.5 text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-slate-800 transition-colors"
                title="Clear input"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-1.5 px-3.5 py-3 bg-amber-500/10 hover:bg-amber-500/20 text-amber-400 hover:text-amber-300 border border-amber-500/30 rounded-2xl text-xs font-bold transition-all cursor-pointer shrink-0 shadow-sm"
            title="Exit Search (Esc)"
          >
            <X size={16} />
            <span>Exit</span>
            <kbd className="hidden sm:inline-block bg-slate-950 text-amber-300/80 text-[10px] px-1.5 py-0.5 rounded font-mono ml-0.5 border border-amber-500/20">ESC</kbd>
          </button>
        </div>

        {/* Search Results */}
        {q !== '' && (
          <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
            {!hasResults && (
              <div className="text-center py-8 text-slate-500 text-xs italic">
                No matching CCH records found for &quot;{query}&quot;
              </div>
            )}

            {/* Teams */}
            {matchedTeams.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users size={12} className="text-amber-400" /> Franchises ({matchedTeams.length})
                </span>
                <div className="space-y-1">
                  {matchedTeams.map((team) => (
                    <div
                      key={team.id}
                      onClick={() => {
                        onNavigateTab('teams');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800 cursor-pointer transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <TeamBadge teamId={team.id} size="sm" />
                        <div>
                          <div className="text-xs font-bold text-white">{team.name}</div>
                          <div className="text-[10px] text-slate-400">{team.conference} Conference</div>
                        </div>
                      </div>
                      <ChevronRight size={16} className="text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Players */}
            {matchedPlayers.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Users size={12} className="text-amber-400" /> Star Players ({matchedPlayers.length})
                </span>
                <div className="space-y-1">
                  {matchedPlayers.map((player) => (
                    <div
                      key={player.id}
                      onClick={() => {
                        onNavigateTab('players');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800 cursor-pointer transition-all"
                    >
                      <div>
                        <div className="text-xs font-bold text-white">{player.name}</div>
                        <div className="text-[10px] text-amber-400">{player.teamName} • {player.position}</div>
                      </div>
                      <ChevronRight size={16} className="text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* All-Star Showcase Result */}
            {isAllStarMatch && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Star size={12} className="text-amber-400 fill-amber-400" /> CCH All-Star Showcase
                </span>
                <div
                  onClick={() => {
                    onNavigateTab('allstar');
                    onClose();
                  }}
                  className="flex items-center justify-between p-3.5 bg-gradient-to-r from-amber-950/60 to-slate-950 hover:bg-slate-800 rounded-2xl border border-amber-500/40 cursor-pointer transition-all"
                >
                  <div>
                    <div className="text-xs font-black text-white">Season 3 CCH All-Star Game (NorCal 79, SoCal 77)</div>
                    <div className="text-[10px] text-amber-300">Donald Hardy Dunk & ASG MVP Double • Target Score Finish</div>
                  </div>
                  <ChevronRight size={16} className="text-amber-400" />
                </div>
              </div>
            )}

            {/* Single Game Records */}
            {matchedRecords.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <BookOpen size={12} className="text-amber-400" /> Record Book Peaks ({matchedRecords.length})
                </span>
                <div className="space-y-1">
                  {matchedRecords.map((rec) => (
                    <div
                      key={rec.id}
                      onClick={() => {
                        onNavigateTab('records');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800 cursor-pointer transition-all"
                    >
                      <div>
                        <div className="text-xs font-bold text-amber-400">{rec.category}: {rec.statistic}</div>
                        <div className="text-[10px] text-slate-300">{rec.player} ({rec.team})</div>
                      </div>
                      <ChevronRight size={16} className="text-slate-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Transactions */}
            {matchedTransactions.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <ArrowLeftRight size={12} className="text-amber-400" /> Transactions ({matchedTransactions.length})
                </span>
                <div className="space-y-1">
                  {matchedTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      onClick={() => {
                        onNavigateTab('transactions');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800 cursor-pointer transition-all text-xs"
                    >
                      <div>
                        <div className="font-bold text-amber-400">{tx.title} (S{tx.season})</div>
                        <div className="text-[10px] text-slate-300 line-clamp-1">{tx.description}</div>
                      </div>
                      <ChevronRight size={16} className="text-slate-500 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Games */}
            {matchedGames.length > 0 && (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar size={12} className="text-amber-400" /> Season 3 Games
                </span>
                <div className="space-y-1">
                  {matchedGames.map((g) => (
                    <div
                      key={g.id}
                      onClick={() => {
                        onNavigateTab('schedule');
                        onClose();
                      }}
                      className="flex items-center justify-between p-3 bg-slate-950 hover:bg-slate-800/80 rounded-2xl border border-slate-800 cursor-pointer transition-all text-xs"
                    >
                      <span className="font-mono text-slate-400">{g.date}</span>
                      <span className="font-bold text-white">
                        {g.team1} {g.score1} - {g.score2} {g.team2}
                      </span>
                      {g.highScorer && <span className="text-[10px] text-amber-400">{g.highScorer}</span>}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
