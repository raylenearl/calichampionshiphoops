import React, { useState } from 'react';
import { PLAYOFF_HISTORY } from '../data/playoffsData';
import { TEAMS } from '../data/teamsData';
import { TeamBadge } from './TeamBadge';
import { Trophy, Flame, Sparkles, Award, ShieldAlert, ChevronRight, Zap } from 'lucide-react';

interface PlayoffsViewProps {
  selectedSeason: 1 | 2 | 3;
  setSelectedSeason: (s: 1 | 2 | 3) => void;
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3) => void;
}

export const PlayoffsView: React.FC<PlayoffsViewProps> = ({
  selectedSeason,
  setSelectedSeason,
  onSelectTeamRecap,
}) => {
  const playoffInfo = PLAYOFF_HISTORY.find((p) => p.season === selectedSeason) || PLAYOFF_HISTORY[2];

  const handleTeamClick = (teamName: string) => {
    const matchedTeam = TEAMS.find(
      (t) => t.name.toLowerCase() === teamName.toLowerCase() || t.shortName.toLowerCase() === teamName.toLowerCase()
    );
    if (matchedTeam && onSelectTeamRecap) {
      onSelectTeamRecap(matchedTeam.id, selectedSeason);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header Controls */}
      <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="text-amber-400" size={26} />
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              CCH Postseason & Championship History
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Interactive playoff brackets, Cinderella underdog runs, and CCH Finals MVPs
          </p>
        </div>

        {/* Season Switcher */}
        <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold">
          <button
            onClick={() => setSelectedSeason(1)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 1 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 1
          </button>
          <button
            onClick={() => setSelectedSeason(2)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 2 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 2
          </button>
          <button
            onClick={() => setSelectedSeason(3)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 3 ? 'bg-amber-500 text-slate-950 font-black' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 3
          </button>
        </div>
      </div>

      {/* Season Narrative & Finals Spotlight Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-800 pb-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <Sparkles size={14} />
              {playoffInfo.title}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Champion: <span className="text-amber-400">{playoffInfo.champion}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {playoffInfo.narrative}
            </p>
          </div>

          <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2 min-w-[260px] shrink-0">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase">
              <Award size={16} />
              Finals MVP & Result
            </div>
            <div className="text-xs text-slate-200 font-semibold">{playoffInfo.finalsMvp}</div>
            <div className="text-xs text-slate-400 font-mono font-bold bg-slate-900 p-2 rounded-xl border border-slate-800">
              {playoffInfo.finalsScore}
            </div>
          </div>
        </div>

        {/* Season 3 Cinderella Spotlight Feature */}
        {selectedSeason === 3 && (
          <div className="bg-red-950/40 border border-red-800/60 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-red-400 font-black text-xs uppercase tracking-wider">
                <Flame size={16} className="text-red-500 animate-bounce" />
                Historic Postseason Shockwave: #8 Seed Cinderella Run
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                Fresno Mad Dogs (10-12 regular season) orchestrated the most improbable upset in league history, defeating the reigning top seed California Reds (16-6) by 90-86 in the Quarterfinals!
              </p>
            </div>
            <div className="bg-slate-950 border border-red-900/80 px-4 py-2 rounded-xl text-center shrink-0">
              <span className="block text-[10px] text-slate-400 uppercase font-bold">Upset Boxscore</span>
              <span className="font-mono font-black text-red-400 text-sm">#8 FRE 90 - 86 REDS #1</span>
            </div>
          </div>
        )}
      </div>

      {/* Visual Bracket Display */}
      <div className="space-y-6">
        <h3 className="text-xl font-black text-white flex items-center gap-2">
          <Zap size={20} className="text-amber-400" />
          Season {selectedSeason} Postseason Bracket Flow
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Quarterfinals Column */}
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-xs font-black uppercase text-amber-400">Quarterfinals</span>
            </div>
            <div className="space-y-3">
              {playoffInfo.quarterfinals.map((qg, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 hover:border-slate-700 transition-all shadow-md"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                        #{qg.seed1}
                      </span>
                      {qg.team1}
                    </span>
                    <span className="font-mono font-black text-white">{qg.score1}</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                        #{qg.seed2}
                      </span>
                      {qg.team2}
                    </span>
                    <span className="font-mono font-black text-white">{qg.score2}</span>
                  </div>
                  {qg.notes && (
                    <div className="text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-lg border border-amber-900/40 mt-1 font-medium">
                      ⚡ {qg.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Semifinals Column */}
          <div className="space-y-4">
            <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl text-center">
              <span className="text-xs font-black uppercase text-amber-400">Semifinals</span>
            </div>
            <div className="space-y-3">
              {playoffInfo.semifinals ? (
                playoffInfo.semifinals.map((sg, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 hover:border-slate-700 transition-all shadow-md"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                          #{sg.seed1}
                        </span>
                        {sg.team1}
                      </span>
                      <span className="font-mono font-black text-white">{sg.score1}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                          #{sg.seed2}
                        </span>
                        {sg.team2}
                      </span>
                      <span className="font-mono font-black text-white">{sg.score2}</span>
                    </div>
                    {sg.notes && (
                      <div className="text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-lg border border-amber-900/40 mt-1 font-medium">
                        ⚡ {sg.notes}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="text-xs text-slate-500 italic p-4 text-center">Semifinal data recorded in chronological logs</div>
              )}
            </div>
          </div>

          {/* Championship Finals Column */}
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 p-3 rounded-2xl text-center">
              <span className="text-xs font-black uppercase text-amber-400 flex items-center justify-center gap-1.5">
                <Trophy size={14} /> CCH Championship Finals
              </span>
            </div>
            <div className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-5 space-y-3 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded font-black font-mono">
                    #{playoffInfo.finals.seed1}
                  </span>
                  {playoffInfo.finals.team1}
                </span>
                <span className="font-mono font-black text-amber-400 text-base">{playoffInfo.finals.score1 || 'TBD'}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                    #{playoffInfo.finals.seed2}
                  </span>
                  {playoffInfo.finals.team2}
                </span>
                <span className="font-mono font-black text-amber-400 text-base">{playoffInfo.finals.score2 || 'TBD'}</span>
              </div>

              {playoffInfo.finals.notes && (
                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 font-medium">
                  🏆 {playoffInfo.finals.notes}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
