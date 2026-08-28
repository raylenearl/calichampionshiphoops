import React, { useState, useEffect, useMemo } from 'react';
import { TEAMS } from '../data/teamsData';
import { STANDINGS_S1, STANDINGS_S2, STANDINGS_S3, STANDINGS_S4 } from '../data/standingsData';
import { getTeamSeasonRecap } from '../data/teamRecapsData';
import { SEASON_ROSTERS } from '../data/rostersData';
import { TeamBadge } from './TeamBadge';
import { X, Trophy, Award, Calendar, Users, CheckCircle2, Shield, Sparkles, UserCheck, Hash, ArrowUpDown, MapPin } from 'lucide-react';

interface TeamSeasonModalProps {
  teamId: string | null;
  initialSeason?: 1 | 2 | 3 | 4;
  onClose: () => void;
}

export const TeamSeasonModal: React.FC<TeamSeasonModalProps> = ({
  teamId,
  initialSeason = 4,
  onClose,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3 | 4>(initialSeason);
  const [rosterSort, setRosterSort] = useState<'ovr' | 'jersey-asc' | 'jersey-desc' | 'name'>('ovr');

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

  const recap = selectedSeason <= 3 ? getTeamSeasonRecap(teamId, selectedSeason as 1 | 2 | 3) : null;

  const standingsData =
    selectedSeason === 1
      ? STANDINGS_S1
      : selectedSeason === 2
      ? STANDINGS_S2
      : selectedSeason === 3
      ? STANDINGS_S3
      : STANDINGS_S4;

  const standingsRow = standingsData ? standingsData.find((s) => s.teamId === teamId) : null;

  const winPct = standingsRow
    ? ((standingsRow.wins / (standingsRow.wins + standingsRow.losses)) * 100).toFixed(1)
    : '0.0';

  const seasonKey = (`s${selectedSeason}`) as 's1' | 's2' | 's3' | 's4';
  const rosterData = SEASON_ROSTERS[teamId]?.[seasonKey];

  // Calculate S4 Roster stats
  const avgOvr = rosterData?.players.length
    ? Math.round(
        rosterData.players.reduce((acc, p) => acc + (p.ovr || 70), 0) / rosterData.players.length
      )
    : null;

  const rookieCount = rosterData?.players.filter(
    (p) => p.seasonYear?.toLowerCase().includes('rookie')
  ).length || 0;

  const highestOvrPlayer = rosterData?.players
    ? [...rosterData.players].sort((a, b) => (b.ovr || 0) - (a.ovr || 0))[0]
    : null;

  const sortedRosterPlayers = useMemo(() => {
    if (!rosterData?.players) return [];
    return [...rosterData.players].sort((a, b) => {
      if (rosterSort === 'ovr') {
        return (b.ovr || 0) - (a.ovr || 0);
      } else if (rosterSort === 'jersey-asc') {
        const numA = parseInt(a.number || '999', 10);
        const numB = parseInt(b.number || '999', 10);
        return (isNaN(numA) ? 999 : numA) - (isNaN(numB) ? 999 : numB);
      } else if (rosterSort === 'jersey-desc') {
        const numA = parseInt(a.number || '999', 10);
        const numB = parseInt(b.number || '999', 10);
        return (isNaN(numB) ? 999 : numB) - (isNaN(numA) ? 999 : numA);
      } else if (rosterSort === 'name') {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }, [rosterData?.players, rosterSort]);

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
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-300">{team.city}</span>
                {team.arena && (
                  <>
                    <span className="text-slate-400 text-xs">•</span>
                    <span className="text-xs font-bold text-amber-300 flex items-center gap-1">
                      <MapPin size={12} className="text-amber-400" />
                      {team.arena}
                    </span>
                  </>
                )}
                {(team.id === 'california-reds' || team.id === 'los-angeles-dynamics') && (
                  <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/40">
                    Co-tenant with {team.id === 'california-reds' ? 'LA Dynamics' : 'California Reds'}
                  </span>
                )}
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight drop-shadow-md mt-0.5">
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
              <Calendar size={14} /> Select Season:
            </span>
            <div className="bg-slate-950/90 border border-slate-800 p-1 rounded-xl flex text-xs font-extrabold shadow-inner gap-1">
              <button
                onClick={() => setSelectedSeason(4)}
                className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1 cursor-pointer ${
                  selectedSeason === 4
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Sparkles size={12} />
                Season 4 (Current)
              </button>
              <button
                onClick={() => setSelectedSeason(3)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 3
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 3
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 2
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 2
              </button>
              <button
                onClick={() => setSelectedSeason(1)}
                className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 1
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Season 1
              </button>
            </div>
          </div>
        </div>

        {/* Modal Body Content (Scrollable) */}
        <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1 custom-scrollbar">
          {/* Season 4 Opening Day Overview Card */}
          {selectedSeason === 4 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Head Coach
                  </span>
                  <p className="text-sm font-black text-amber-400 whitespace-nowrap">
                    {rosterData?.coach || team.coach}
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {rosterData?.coachTenure || 'Season 4'}
                  </span>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Team Avg Rating
                  </span>
                  <p className="text-xl font-black text-white font-mono">
                    {avgOvr ? `${avgOvr} OVR` : '78 OVR'}
                  </p>
                  <span className="text-[10px] text-slate-400 font-semibold">
                    11-Man Opening Roster
                  </span>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Top Rated Star
                  </span>
                  <p className="text-sm font-black text-amber-300 whitespace-nowrap">
                    {highestOvrPlayer?.name || 'N/A'}
                  </p>
                  <span className="text-[10px] text-amber-400 font-mono font-bold">
                    {highestOvrPlayer?.ovr} OVR ({highestOvrPlayer?.position})
                  </span>
                </div>

                <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl text-center space-y-1">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                    Rookie Influx
                  </span>
                  <p className="text-xl font-black text-cyan-400 font-mono">
                    {rookieCount} <span className="text-xs text-slate-400">/ 11</span>
                  </p>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {Math.round((rookieCount / 11) * 100)}% Roster Turnover
                  </span>
                </div>
              </div>

              {/* S4 Narrative Box */}
              <div className="bg-slate-950/90 border border-amber-500/20 p-4 sm:p-5 rounded-2xl space-y-2 relative overflow-hidden">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles size={16} />
                  <h4 className="text-xs font-black uppercase tracking-wider text-amber-400">
                    Season 4 Opening Day Outlook & Roster Architecture
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  The {team.name} enter Season 4 under {rosterData?.coach} ({rosterData?.coachTenure}) with an overhauled 11-man opening day roster. Featuring key franchise anchors and an influx of drafted rookie talent, the team is primed for the new 22-game regular season campaign in the {team.conference} Conference.
                </p>
              </div>
            </div>
          )}

          {/* Quick Season Metrics Row for S1-S3 */}
          {selectedSeason <= 3 && standingsRow && (
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

          {/* Season Narrative Headline & Summary for S1-S3 */}
          {selectedSeason <= 3 && recap && (
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

          {/* Key Accomplishments & Individual Season Awards for S1-S3 */}
          {selectedSeason <= 3 && recap && (
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
          {rosterData && rosterData.players.length > 0 && (
            <div className="bg-slate-950 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 flex-wrap gap-2">
                <div className="flex items-center gap-2 text-amber-400">
                  <Users size={16} />
                  <h4 className="text-xs font-extrabold uppercase text-white tracking-wider">
                    Official Season {selectedSeason} Opening Day Roster ({rosterData.players.length} Players)
                  </h4>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {/* Sort selector */}
                  <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 rounded-xl px-2 py-1">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <ArrowUpDown size={10} /> Sort:
                    </span>
                    <select
                      value={rosterSort}
                      onChange={(e) => setRosterSort(e.target.value as any)}
                      className="bg-transparent text-xs font-bold text-amber-300 focus:outline-none cursor-pointer"
                    >
                      <option value="ovr" className="bg-slate-900 text-slate-200">Overall Rating (High → Low)</option>
                      <option value="jersey-asc" className="bg-slate-900 text-slate-200">Jersey # (Low → High)</option>
                      <option value="jersey-desc" className="bg-slate-900 text-slate-200">Jersey # (High → Low)</option>
                      <option value="name" className="bg-slate-900 text-slate-200">Player Name (A → Z)</option>
                    </select>
                  </div>

                  {rosterData.coach && (
                    <span className="text-xs text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-xl">
                      Head Coach: <strong className="text-amber-300">{rosterData.coach}</strong> {rosterData.coachTenure ? `(${rosterData.coachTenure})` : ''}
                    </span>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {sortedRosterPlayers.map((p, idx) => {
                  const isRookie = p.seasonYear?.toLowerCase().includes('rookie');
                  const isStar = (p.ovr || 0) >= 90;
                  const isHighOvr = (p.ovr || 0) >= 80 && (p.ovr || 0) < 90;

                  return (
                    <div
                      key={idx}
                      className={`p-3 rounded-2xl border transition-all flex flex-col justify-between gap-2 shadow-sm ${
                        isStar
                          ? 'bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-amber-500/40 shadow-amber-500/5'
                          : isHighOvr
                          ? 'bg-gradient-to-br from-emerald-950/30 via-slate-900 to-slate-900 border-emerald-500/30'
                          : 'bg-slate-900/90 border-slate-800/80 hover:border-slate-700'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                          {p.number && (
                            <span className="px-2 py-0.5 bg-slate-950 text-amber-400 font-mono font-black rounded-lg text-xs border border-slate-800 shrink-0">
                              #{p.number}
                            </span>
                          )}
                          <div className="min-w-0">
                            <p className="font-black text-slate-100 text-xs flex items-center gap-1.5">
                              {p.name}
                            </p>
                            <p className="text-[10px] text-slate-400 font-semibold">
                              {p.position}
                              {p.seasonYear ? ` • ${p.seasonYear}` : ''}
                            </p>
                          </div>
                        </div>

                        {p.ovr && (
                          <span
                            className={`text-xs font-mono font-black px-2 py-0.5 rounded-lg shrink-0 border ${
                              isStar
                                ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                : isHighOvr
                                ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                                : 'bg-slate-800 text-slate-300 border-slate-700'
                            }`}
                          >
                            {p.ovr} OVR
                          </span>
                        )}
                      </div>

                      {/* Bio & Details Footer */}
                      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800/80 pt-2 mt-1 gap-2 flex-wrap">
                        <span className="font-medium text-slate-300">
                          {p.schoolOrNote || '—'}
                        </span>
                        {(p.age || p.height || p.weight) && (
                          <span className="font-mono text-[10px] text-slate-400 shrink-0">
                            {[
                              p.age ? `${p.age}y` : null,
                              p.height,
                              p.weight ? `${p.weight} lbs` : null,
                            ]
                              .filter(Boolean)
                              .join(' • ')}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
