import React from 'react';
import { Tv, Sparkles, Flame } from 'lucide-react';

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
              <span className="text-[10px] font-black uppercase tracking-wider text-red-400 bg-red-950/80 border border-red-800/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> Live Broadcast
              </span>
              <span className="text-[11px] text-slate-400 font-mono font-bold">SAC TOWN ARENA</span>
            </div>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded-lg flex items-center gap-1">
              <Sparkles size={12} /> CCH Season 3 Finals
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            Season 3 Championship Game
          </h3>

          <div className="space-y-2 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
            <p className="line-clamp-2 sm:line-clamp-none font-medium text-slate-200">
              The ultimate clash of eras, styles, and destinies has arrived. Welcome to the Cali Championship Hoops Season 3 Championship Game live from a sold-out, electric SacTown Arena!
            </p>
            <p className="text-slate-400 text-xs hidden sm:block">
              Tonight, the championship road runs directly through Northern California as the league&apos;s ultimate David vs. Goliath story takes center stage. Will the veteran dynasty claim their second franchise title, or will the greatest Cinderella story in professional sports complete their historic giant-killing run?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
