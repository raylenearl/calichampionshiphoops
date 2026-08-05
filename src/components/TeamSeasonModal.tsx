import React, { useState, useEffect } from 'react';
import { TEAMS } from '../data/teamsData';
import { STANDINGS_S1, STANDINGS_S2, STANDINGS_S3 } from '../data/standingsData';
import { getTeamSeasonRecap } from '../data/teamRecapsData';
import { SEASON_ROSTERS } from '../data/rostersData';
import { TeamBadge } from './TeamBadge';
import { X, Trophy, Award, Star, Calendar, Users, CheckCircle2, TrendingUp, Zap, Shield, Sparkles } from 'lucide-react';

interface TeamSeasonModalProps {
  teamId: string | null;
  initialSeason?: 1 | 2 | 3;
  onClose: () => void;
}

export const TeamSeasonModal: React.FC<TeamSeasonModalProps> = ({
  teamId,
  initialSeason = 3,
  onClose,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3>(initialSeason);

  useEffect(() => {
    setSelectedSeason(initialSeason);
  }, [initialSeason, teamId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (teamId) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [teamId, onClose]);

  if (!teamId) return null;

  const team = TEAMS.find((t) => t.id === teamId);
  if (!team) return null;

  const recap = getTeamSeasonRecap(teamId, selectedSeason);

  const standingsData = {
    1: STANDINGS_S1,
    2: STANDINGS_S2,
    3: STANDINGS_S3,
  }[selectedSeason];

  const standingsRow = standingsData.find((s) => s.teamId === teamId);

  const winPct = standingsRow
    ? ((standingsRow.wins / (standingsRow.wins + standingsRow.losses)) * 100).toFixed(1)
    : '0.0';

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-slate-900 border border-slate-800 w-full max-w-5xl lg:max-w-6xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[92vh] flex flex-col my-auto"
      >
        {/* Top Header Banner with Team Colors */}
        <div
          className="relative p-6 sm:p-8 flex flex-col justify-between border-b border-slate-800/80"
          style={{
            background: `linear-gradient(135deg, ${team.primaryColor}ee 0%, #0f172a 100%)`,
          }}
        >
          {/* Header Top Controls */}
          <div className="flex items-center justify-between gap-3 mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase border shadow-sm flex items-center gap-1.5"
              style={{
                backgroundColor: `${team.accentColor}20`,
                borderColor: team.accentColor,
                color: '#ffffff',
              }}
            >
              <Shield size={13} />
              {team.conference}
            </span>

            {/* Exit Button */}
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-950/80 hover:bg-slate-950 text-slate-200 hover:text-white rounded-xl text-xs font-bold transition-all border border-slate-700/80 shadow-md cursor-pointer shrink-0"
              title="Close Modal (Esc)"
            >
              <X size={16} />
              <span className="hidden sm:inline">Exit</span>
              <kbd className="hidden sm:inline-block bg-slate-800 text-slate-300 text-[10px] px-1.5 py-0.5 rounded font-mono border border-slate-700">ESC</kbd>
            </button>
          </div>

          {/* Team Name & Identity */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="p-2 bg-slate-950/60 rounded-2xl border border-white/10 shrink-0 self-start sm:self-auto shadow-xl">
              <TeamBadge teamId={team.id} size="lg" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-300">{team.city}</p>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                {team.name}
              </h2>
              <p className="text-xs text-slate-300 font-medium mt-1 max-w-2xl">
                {team.description}
              </p>
            </div>
          </div>

          {/* Season Selector Bar inside Modal */}
          <div className="mt-6 flex items-center justify-between gap-2 flex-wrap border-t border-white/10 pt-4">
            <span className="text-xs font-extrabold uppercase text-amber-400 flex items-center gap-1">
              <Calendar size={14} /> Select Season Recap:
            </span>
            <div className="bg-slate-950/90 border border-slate-800 p-1 rounded-xl flex text-xs font-extrabold shadow-inner">
              <button
                onClick={() => setSelectedSeason(1)}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedSeason === 1
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 1
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedSeason === 2
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 2
              </button>
              <button
                onClick={() => setSelectedSeason(3)}
                className={`px-3.5 py-1.5 rounded-lg transition-all ${
                  selectedSeason === 3
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 3
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
          {/* Quick Season Metrics Row */}
          {standingsRow && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  S{selectedSeason} Record
                </span>
                <p className="text-xl font-black text-amber-400 font-mono">
                  {standingsRow.wins} - {standingsRow.losses}
                </p>
                <span className="text-[10px] text-slate-500 font-mono">
                  {winPct}% Win Rate
                </span>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  League Rank
                </span>
                <p className="text-xl font-black text-white font-mono">
                  #{standingsRow.rank} <span className="text-xs text-slate-400">/ 12</span>
                </p>
                <span className="text-[10px] text-slate-400 font-semibold">
                  {standingsRow.ppg.toFixed(1)} PPG
                </span>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Streak
                </span>
                <p
                  className={`text-lg font-black font-mono ${
                    standingsRow.streak.startsWith('Won') ? 'text-emerald-400' : 'text-red-400'
                  }`}
                >
                  {standingsRow.streak}
                </p>
                <span className="text-[10px] text-slate-500">Regular Season</span>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1 col-span-2 sm:col-span-1">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Postseason Finish
                </span>
                <p className="text-xs font-black text-amber-300 leading-snug">
                  {recap?.playoffFinish || (standingsRow.clinchedPlayoffs ? 'Playoff Qualifier' : 'Missed Postseason')}
                </p>
              </div>
            </div>
          )}

          {/* Season Narrative Headline & Summary */}
          {recap && (
            <div className="bg-slate-950/80 border border-slate-800/80 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles size={18} />
                <h3 className="text-base font-extrabold text-white">
                  Season {selectedSeason} Narrative
                </h3>
              </div>
              <h4 className="text-sm font-black text-amber-400/90 leading-snug">
                "{recap.headline}"
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {recap.summary}
              </p>
            </div>
          )}

          {/* Key Accomplishments & Individual Season Awards */}
          {recap && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Accomplishments */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 size={16} />
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                    Season {selectedSeason} Highlights
                  </h4>
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {recap.keyAccomplishments.map((acc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold shrink-0">•</span>
                      <span>{acc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Individual Awards */}
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2.5">
                <div className="flex items-center gap-2 text-amber-400">
                  <Award size={16} />
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                    S{selectedSeason} Awards & Honors
                  </h4>
                </div>
                {recap.seasonAwards && recap.seasonAwards.length > 0 ? (
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {recap.seasonAwards.map((award, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Trophy size={13} className="text-amber-400 shrink-0 mt-0.5" />
                        <span className="font-semibold text-amber-200">{award}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs text-slate-500 italic">
                    No major individual league awards won in Season {selectedSeason}.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Official Full Season Roster */}
          {(() => {
            const seasonKey = (`s${selectedSeason}`) as 's1' | 's2' | 's3';
            const rosterData = SEASON_ROSTERS[teamId]?.[seasonKey];
            if (!rosterData || !rosterData.players.length) return null;

            return (
              <div className="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Users size={16} />
                    <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                      Official Season {selectedSeason} Full Roster
                    </h4>
                  </div>
                  {rosterData.coach && (
                    <span className="text-[11px] text-slate-400 font-medium">
                      Coach: <strong className="text-amber-300">{rosterData.coach}</strong>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {rosterData.players.map((p, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-900/90 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between gap-2 text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        {p.number && (
                          <span className="px-1.5 py-0.5 bg-slate-800 text-amber-400 font-mono font-bold rounded text-[10px] shrink-0">
                            #{p.number}
                          </span>
                        )}
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <p className="font-bold text-slate-200 truncate">{p.name}</p>
                            {p.ovr && (
                              <span className="text-[10px] font-mono font-bold px-1.5 py-0.2 bg-amber-500/10 text-amber-400 border border-amber-500/20 rounded">
                                OVR {p.ovr}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium truncate">
                            {p.position} {p.schoolOrNote ? `• ${p.schoolOrNote}` : ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          {/* Top Players for the Season Highlights */}
          {recap && recap.topPlayers && (
            <div className="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-blue-400">
                  <Users size={16} />
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                    Season {selectedSeason} Key Contributors
                  </h4>
                </div>
                <span className="text-[10px] text-slate-500 font-mono">ROSTER HIGHLIGHTS</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recap.topPlayers.map((player, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900/90 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-3"
                  >
                    <div>
                      <p className="text-xs font-bold text-white">{player.name}</p>
                      <p className="text-[10px] text-slate-400 font-medium">{player.role}</p>
                    </div>
                    {player.statLine && (
                      <span className="px-2 py-1 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] font-mono text-amber-300 font-bold shrink-0">
                        {player.statLine}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Wins / Matches */}
          {recap && recap.keyWins && (
            <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-amber-400">
                <Zap size={15} />
                <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                  Notable Season {selectedSeason} Matchups
                </h4>
              </div>
              <div className="flex flex-wrap gap-2 pt-1">
                {recap.keyWins.map((win, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-slate-900 border border-slate-800 rounded-lg text-xs font-mono text-slate-300 font-medium"
                  >
                    {win}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with Close Button */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <p className="text-[11px] text-slate-500 font-medium">
            Cali Championship Hoops Official Season Archive
          </p>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs transition-colors cursor-pointer shadow-md"
          >
            Close Recap
          </button>
        </div>
      </div>
    </div>
  );
};
