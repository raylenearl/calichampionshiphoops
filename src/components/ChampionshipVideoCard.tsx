import React from 'react';
import { Tv, Sparkles, Flame, Trophy } from 'lucide-react';

export const ChampionshipVideoCard: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Embedded YouTube Player Container (Shorter / Compact) */}
        <div className="lg:col-span-6 xl:col-span-5 relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950 max-h-[240px]">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/3CFkc5G6EHM?si=0k2qFHmh1Z2vTP2Z"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Side */}
        <div className="lg:col-span-6 xl:col-span-7 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                <Trophy size={12} className="text-amber-400" /> Finals Replay
              </span>
              <span className="text-[11px] text-slate-400 font-mono font-bold">SAC TOWN ARENA</span>
            </div>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded-lg flex items-center gap-1">
              <Sparkles size={12} /> CCH Season 3 Finals Final: Stallions 87, Mad Dogs 72
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            STALLIONS REIGN SUPREME: Season 3 Finals Broadcast
          </h3>

          <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <p className="line-clamp-2 sm:line-clamp-none font-medium text-slate-200">
              Behind a masterclass from Finals MVP Dorell Kabal (25 PTS, 11 REB, 3 BLK on 78.6% FG) in his final game and 29 points from George Madsen (5-7 3PT), the Sacramento Stallions captured their 2nd CCH Title with an 87–72 victory over the Cinderella Fresno Mad Dogs!
            </p>
            <p className="text-slate-400 text-xs hidden sm:block">
              Fresno fought valiantly led by Douglas Bradley’s 28 points, but Sacramento’s veteran discipline and interior dominance sealed their status as the league&apos;s first true dynasty (2-time champions, 3 consecutive Finals).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
