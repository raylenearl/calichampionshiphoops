import React, { useState } from 'react';
import { TEAMS } from '../data/teamsData';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { Team, PlayoffGame } from '../types';
import { TeamBadge } from './TeamBadge';
import { Search, Trophy, UserCheck, Shield, ChevronRight, X, Sparkles, MapPin, Award } from 'lucide-react';

interface TeamDirectoryProps {
  onSelectTeam?: (teamId: string) => void;
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
}

interface TeamPlayoffGameRecord {
  season: number;
  round: string;
  opponent: string;
  opponentSeed?: number;
  teamSeed?: number;
  teamScore: number;
  opponentScore: number;
  isWin: boolean | null;
  notes?: string;
}

interface TeamSeasonPlayoffSummary {
  season: number;
  finish: string;
  games: TeamPlayoffGameRecord[];
}

function getTeamPlayoffHistory(teamName: string) {
  const seasonSummaries: TeamSeasonPlayoffSummary[] = [];
  let totalWins = 0;
  let totalLosses = 0;
  let appearances = 0;
  let championships = 0;

  PLAYOFF_HISTORY.forEach((sp) => {
    const games: TeamPlayoffGameRecord[] = [];
    const isChampion = sp.champion === teamName;
    const isRunnerUp = sp.runnerUp === teamName;
    const isFinalistPending =
      sp.season === 3 &&
      (sp.finals.team1 === teamName || sp.finals.team2 === teamName) &&
      sp.finals.winner === 'Pending Finals';

    const checkAndAddGame = (game: PlayoffGame) => {
      if (game.team1 === teamName || game.team2 === teamName) {
        const isTeam1 = game.team1 === teamName;
        const opponent = isTeam1 ? game.team2 : game.team1;
        const opponentSeed = isTeam1 ? game.seed2 : game.seed1;
        const teamSeed = isTeam1 ? game.seed1 : game.seed2;
        const teamScore = isTeam1 ? game.score1 : game.score2;
        const opponentScore = isTeam1 ? game.score2 : game.score1;

        let isWin: boolean | null = null;
        if (game.winner !== 'Pending Finals') {
          isWin = game.winner === teamName;
          if (isWin) totalWins++;
          else totalLosses++;
        }

        games.push({
          season: sp.season,
          round: game.round,
          opponent,
          opponentSeed,
          teamSeed,
          teamScore,
          opponentScore,
          isWin,
          notes: game.notes,
        });
      }
    };

    sp.quarterfinals.forEach(checkAndAddGame);
    if (sp.semifinals) sp.semifinals.forEach(checkAndAddGame);
    checkAndAddGame(sp.finals);

    if (games.length > 0) {
      appearances++;
      let finish = 'Quarterfinalist';
      if (isChampion) {
        finish = 'CCH Champion 🏆';
        championships++;
      } else if (isRunnerUp) {
        finish = 'Finals Runner-Up 🥈';
      } else if (isFinalistPending) {
        finish = 'Finals Contender ⚔️';
      } else {
        const madeSemifinals = games.some(
          (g) =>
            g.round.toLowerCase().includes('semi') ||
            g.round.toLowerCase().includes('title')
        );
        if (madeSemifinals) {
          finish = 'Semifinalist';
        }
      }

      seasonSummaries.push({
        season: sp.season,
        finish,
        games,
      });
    } else {
      seasonSummaries.push({
        season: sp.season,
        finish: 'Missed Postseason',
        games: [],
      });
    }
  });

  return {
    seasonSummaries,
    totalWins,
    totalLosses,
    appearances,
    championships,
  };
}

export const TeamDirectory: React.FC<TeamDirectoryProps> = ({ onSelectTeamRecap }) => {
  const [selectedConference, setSelectedConference] = useState<'All' | 'Northern Cali' | 'Southern Cali'>('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTeamModal, setActiveTeamModal] = useState<Team | null>(null);

  const filteredTeams = TEAMS.filter((team) => {
    const matchesConf = selectedConference === 'All' || team.conference === selectedConference;
    const matchesSearch =
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.keyPlayers.some((p) => p.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesConf && matchesSearch;
  });

  return (
    <div className="space-y-6">
      {/* Header & Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-5 rounded-3xl">
        <div>
          <h2 className="text-2xl font-black text-white flex items-center gap-2">
            <Shield className="text-amber-400" size={24} />
            Official CCH Team Directory
          </h2>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Explore all 12 power franchises in Cali Championship Hoops
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Box */}
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search team or player..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 transition-all"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Conference Filter Tabs */}
          <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
            <button
              onClick={() => setSelectedConference('All')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedConference === 'All' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              All 12
            </button>
            <button
              onClick={() => setSelectedConference('Northern Cali')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedConference === 'Northern Cali' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Northern Cali
            </button>
            <button
              onClick={() => setSelectedConference('Southern Cali')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedConference === 'Southern Cali' ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
              }`}
            >
              Southern Cali
            </button>
          </div>
        </div>
      </div>

      {/* Grid of 12 Teams */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredTeams.map((team) => (
          <div
            key={team.id}
            onClick={() => setActiveTeamModal(team)}
            className="group bg-slate-900/90 hover:bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-5 shadow-lg transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 hover:-translate-y-1"
          >
            {/* Top Bar: Badge, Name, Conference */}
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <TeamBadge teamId={team.id} size="lg" />
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono font-black text-amber-400 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800 shadow-sm">
                    {team.abbreviation}
                  </span>
                  <span
                    className={`text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full border ${
                      team.conference === 'Northern Cali'
                        ? 'bg-blue-950/80 text-blue-300 border-blue-800'
                        : 'bg-amber-950/80 text-amber-300 border-amber-800'
                    }`}
                  >
                    {team.conference}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-black text-white group-hover:text-amber-400 transition-colors flex items-center justify-between">
                  <span>{team.name}</span>
                  <ChevronRight size={18} className="text-slate-600 group-hover:text-amber-400 transition-colors" />
                </h3>
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium mt-0.5">
                  <MapPin size={12} className="text-amber-500 shrink-0" />
                  <span>{team.city}, CA</span>
                  {team.arena && (
                    <>
                      <span>•</span>
                      <span className="text-amber-300 font-bold">{team.arena}</span>
                    </>
                  )}
                </div>
              </div>

              <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                {team.description}
              </p>
            </div>

            {/* Middle Section: Records Pill */}
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-2.5 grid grid-cols-3 gap-1.5 text-center text-xs">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTeamRecap ? onSelectTeamRecap(team.id, 1) : setActiveTeamModal(team);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-800 transition-colors group/s1 text-left sm:text-center"
              >
                <span className="block text-[10px] text-slate-500 group-hover/s1:text-amber-400 font-bold uppercase">S1 Record</span>
                <span className="font-bold text-slate-300 text-xs">{team.s1Record}</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTeamRecap ? onSelectTeamRecap(team.id, 2) : setActiveTeamModal(team);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-800 transition-colors group/s2 text-left sm:text-center"
              >
                <span className="block text-[10px] text-slate-500 group-hover/s2:text-amber-400 font-bold uppercase">S2 Record</span>
                <span className="font-bold text-slate-300 text-xs">{team.s2Record}</span>
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectTeamRecap ? onSelectTeamRecap(team.id, 3) : setActiveTeamModal(team);
                }}
                className="p-1.5 rounded-xl hover:bg-slate-800 transition-colors group/s3 text-left sm:text-center"
              >
                <span className="block text-[10px] text-slate-500 group-hover/s3:text-amber-400 font-bold uppercase">S3 Record</span>
                <span className="font-bold text-amber-400 text-xs">{team.s3Record}</span>
              </button>
            </div>

            {/* Coach & Key Stars */}
            <div className="space-y-2">
              {team.coach && (
                <div className="flex items-center justify-between text-xs bg-slate-950/60 border border-slate-800/80 px-2.5 py-1.5 rounded-xl">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Head Coach</span>
                  <span className="text-amber-300 font-extrabold text-[11px]">{team.coach}</span>
                </div>
              )}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">Key Stars:</span>
                <div className="flex flex-wrap gap-1.5">
                  {team.keyPlayers.slice(0, 3).map((player, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-slate-800/80 text-slate-300 border border-slate-700/60 px-2 py-0.5 rounded-lg"
                    >
                      {player}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Team Detail Modal */}
      {activeTeamModal && (
        <div
          onClick={() => setActiveTeamModal(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-slate-900 border border-slate-800 w-full max-w-5xl lg:max-w-6xl max-h-[85vh] sm:max-h-[90vh] rounded-3xl flex flex-col shadow-2xl overflow-hidden relative my-auto"
          >
            {/* Modal Header (Sticky Top with Close Button) */}
            <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-4 sm:p-5 flex items-center justify-between gap-4 shrink-0">
              <div className="flex items-center gap-3">
                <TeamBadge teamId={activeTeamModal.id} size="lg" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black text-amber-400 bg-slate-950 px-2 py-0.5 rounded-full border border-slate-800">
                      {activeTeamModal.abbreviation}
                    </span>
                    <span className="text-[10px] font-black uppercase text-amber-400 bg-amber-950/60 border border-amber-800/60 px-2 py-0.5 rounded-full">
                      {activeTeamModal.conference}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                    {activeTeamModal.name}
                  </h2>
                  <p className="text-[11px] text-slate-400 font-medium flex items-center gap-1.5 flex-wrap">
                    <span>Home City: {activeTeamModal.city}, California</span>
                    {activeTeamModal.arena && (
                      <>
                        <span>•</span>
                        <span className="text-amber-300 font-bold flex items-center gap-1">
                          <MapPin size={11} className="text-amber-400" />
                          Home Arena: {activeTeamModal.arena}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setActiveTeamModal(null)}
                className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all shrink-0 cursor-pointer"
                title="Close Profile (Esc or click outside)"
              >
                <X size={20} />
              </button>
            </div>

            {/* Scrollable Modal Content Body */}
            <div className="p-4 sm:p-6 space-y-6 overflow-y-auto flex-1">
              {/* Shared Arena Spotlight Callout for Reds & Dynamics */}
              {(activeTeamModal.id === 'california-reds' || activeTeamModal.id === 'los-angeles-dynamics') && (
                <div className="bg-gradient-to-r from-blue-950/40 via-purple-950/30 to-red-950/40 border border-amber-500/30 rounded-2xl p-3.5 flex items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 bg-amber-500/20 text-amber-400 rounded-xl">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-mono font-black text-amber-400 uppercase text-[11px] block">
                        LA Arena Co-Tenancy
                      </span>
                      <p className="text-slate-300 text-xs">
                        The <span className="font-bold text-white">California Reds</span> and <span className="font-bold text-white">Los Angeles Dynamics</span> both play their home games at the <span className="text-amber-300 font-bold">LA Arena</span> in Los Angeles.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 shrink-0">
                    <TeamBadge teamId="california-reds" size="sm" />
                    <span className="text-xs font-mono font-bold text-slate-500">✕</span>
                    <TeamBadge teamId="los-angeles-dynamics" size="sm" />
                  </div>
                </div>
              )}

              {/* Overview & Bio */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles size={14} className="text-amber-400" />
                  Franchise Profile & Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
                  {activeTeamModal.description}
                </p>
              </div>

              {/* Key Roster & Coaching Staff */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-2">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <UserCheck size={14} className="text-amber-400" />
                    Key Players & Roster
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-300">
                    {activeTeamModal.keyPlayers.map((player, idx) => (
                      <li key={idx} className="flex items-center gap-2 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{player}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-slate-950/80 p-4 rounded-2xl border border-slate-800 space-y-3">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Trophy size={14} className="text-amber-400" />
                    Staff & Honors
                  </h4>
                  <div className="space-y-1.5">
                    {activeTeamModal.coach && (
                      <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">Head Coach</span>
                        <span className="text-amber-300 font-extrabold">{activeTeamModal.coach}</span>
                      </div>
                    )}
                    {activeTeamModal.executive && (
                      <div className="bg-slate-900/90 border border-slate-800 p-2.5 rounded-xl flex items-center justify-between text-xs">
                        <span className="text-slate-400 font-semibold">Front Office / GM</span>
                        <span className="text-slate-200 font-bold">{activeTeamModal.executive}</span>
                      </div>
                    )}
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Titles & Accomplishments:</span>
                    <div className="space-y-1">
                      {activeTeamModal.titles.map((title, idx) => (
                        <span key={idx} className="block text-xs bg-amber-500/10 text-amber-300 border border-amber-500/20 px-2.5 py-1 rounded-lg font-semibold">
                          🏆 {title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Seasonal Record History */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
                  Regular Season Finish (Overall Place)
                </h4>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="block text-[10px] text-slate-500 font-bold">Season 1</span>
                    <span className="font-black text-slate-200 text-sm">{activeTeamModal.s1Record}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="block text-[10px] text-slate-500 font-bold">Season 2</span>
                    <span className="font-black text-slate-200 text-sm">{activeTeamModal.s2Record}</span>
                  </div>
                  <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                    <span className="block text-[10px] text-slate-500 font-bold">Season 3</span>
                    <span className="font-black text-amber-400 text-sm">{activeTeamModal.s3Record}</span>
                  </div>
                </div>
              </div>

              {/* Playoff History Section */}
              {(() => {
                const playoffHistory = getTeamPlayoffHistory(activeTeamModal.name);
                return (
                  <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                        <Trophy size={14} className="text-amber-400" />
                        Playoff History & Postseason Performance
                      </h4>
                      <div className="flex items-center gap-2 text-[11px] font-mono font-bold">
                        <span className="bg-slate-900 text-slate-300 border border-slate-800 px-2.5 py-0.5 rounded-lg">
                          Record: {playoffHistory.totalWins}-{playoffHistory.totalLosses}
                        </span>
                        <span className="bg-slate-900 text-amber-400 border border-amber-900/50 px-2.5 py-0.5 rounded-lg">
                          Appearances: {playoffHistory.appearances}/3
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {playoffHistory.seasonSummaries.map((ss) => (
                        <div key={ss.season} className="bg-slate-900/80 border border-slate-800/80 rounded-xl p-3 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-extrabold text-slate-300">
                              Season {ss.season} Postseason
                            </span>
                            <span
                              className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                                ss.finish.includes('Champion')
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                  : ss.finish.includes('Runner-Up') || ss.finish.includes('Contender')
                                  ? 'bg-blue-500/20 text-blue-300 border-blue-500/40'
                                  : ss.games.length > 0
                                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                  : 'bg-slate-800/60 text-slate-500 border-slate-700/40'
                              }`}
                            >
                              {ss.finish}
                            </span>
                          </div>

                          {ss.games.length > 0 ? (
                            <div className="space-y-1.5 pt-1">
                              {ss.games.map((g, idx) => (
                                <div key={idx} className="bg-slate-950/70 border border-slate-800/60 rounded-lg p-2 text-xs space-y-1">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2 font-semibold text-slate-200">
                                      <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">
                                        {g.round}
                                      </span>
                                      <span>
                                        vs {g.opponentSeed ? `#${g.opponentSeed} ` : ''}
                                        {g.opponent}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <span className="font-mono font-bold text-slate-300">
                                        {g.teamScore}-{g.opponentScore}
                                      </span>
                                      {g.isWin === true && (
                                        <span className="text-[10px] font-black uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-1.5 py-0.5 rounded">
                                          WIN
                                        </span>
                                      )}
                                      {g.isWin === false && (
                                        <span className="text-[10px] font-black uppercase bg-rose-500/20 text-rose-400 border border-rose-500/30 px-1.5 py-0.5 rounded">
                                          LOSS
                                        </span>
                                      )}
                                      {g.isWin === null && (
                                        <span className="text-[10px] font-black uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1.5 py-0.5 rounded">
                                          PENDING
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                  {g.notes && (
                                    <p className="text-[11px] text-slate-400 italic pl-1">
                                      "{g.notes}"
                                    </p>
                                  )}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-[11px] text-slate-500 italic pl-1">
                              Did not qualify for the Season {ss.season} Playoffs.
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>

            {/* Modal Sticky Footer with Close Button */}
            <div className="p-3 sm:p-4 border-t border-slate-800 bg-slate-900/95 flex justify-end shrink-0">
              <button
                onClick={() => setActiveTeamModal(null)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
              >
                <X size={16} />
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
