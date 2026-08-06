import React from 'react';
import { Trophy, Flame, ChevronRight, Zap, Award } from 'lucide-react';
import { TeamBadge } from './TeamBadge';

interface HeroBannerProps {
  onNavigate: (tab: string) => void;
  selectedSeason: 1 | 2 | 3;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, selectedSeason }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 mb-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Headline Section */}
        <div className="lg:col-span-7 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            CALI CHAMPIONSHIP <br />
            <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-orange-500 bg-clip-text text-transparent">
              HOOPS ENCYCLOPEDIA
            </span>
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
            California&apos;s ultimate proving ground for basketball talent. 12 power organizations featuring intense regular season rivalries and postseason championship battles.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="block text-2xl font-black text-amber-400">12</span>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Franchises</span>
            </div>
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl">
              <span className="block text-2xl font-black text-amber-400">3</span>
              <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wide">Seasons Logged</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('playoffs')}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Trophy size={16} />
              <span>Explore Season {selectedSeason} Postseason</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => onNavigate('schedule')}
              className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Zap size={16} className="text-amber-400" />
              <span>Schedule & Box Scores</span>
            </button>
          </div>
        </div>

        {/* Right Spotlight Card: Cinderella Finals Drama / Featured Story */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 relative shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                <Flame size={15} className="text-amber-500" />
                Season 3 Champions
              </span>
              <span className="text-[10px] bg-amber-950 text-amber-400 font-bold px-2 py-0.5 rounded-full border border-amber-800 flex items-center gap-1">
                <Trophy size={12} /> CCH CHAMPIONS
              </span>
            </div>

            <div className="text-center space-y-3 py-2">
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                Season 3 Championship Game Final
              </div>

              <div className="flex items-center justify-around gap-2 bg-slate-900/90 p-4 rounded-2xl border border-slate-800">
                {/* Team 1: Sacramento Stallions (#2 Dynasty) */}
                <div className="flex flex-col items-center space-y-1">
                  <TeamBadge teamId="sacramento-stallions" size="lg" />
                  <span className="text-xs font-bold text-slate-200 mt-1">Sacramento</span>
                  <span className="text-[10px] text-amber-400 font-black bg-amber-950/60 px-2 py-0.5 rounded-full border border-amber-800/50">
                    87 (CHAMPS)
                  </span>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-lg font-black text-amber-400">FINAL</span>
                  <span className="text-[10px] text-slate-400 uppercase font-mono font-bold">87 - 72</span>
                </div>

                {/* Team 2: Fresno Mad Dogs (#8 Seed Cinderella) */}
                <div className="flex flex-col items-center space-y-1">
                  <TeamBadge teamId="fresno-mad-dogs" size="lg" />
                  <span className="text-xs font-bold text-slate-200 mt-1">Fresno</span>
                  <span className="text-[10px] text-slate-400 font-bold bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                    72 (Runner-Up)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed italic bg-slate-900/50 p-3 rounded-xl border border-slate-800/50">
                &quot;STALLIONS REIGN SUPREME! Sacramento captured their 2nd CCH title with an 87-72 victory over Fresno behind Finals MVP Dorell Kabal&apos;s 25 PTS, 11 REB retirement masterpiece and 29 PTS from George Madsen!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
