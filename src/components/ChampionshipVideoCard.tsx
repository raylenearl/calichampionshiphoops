import React from 'react';
import { Sparkles, Trophy, Radio, Download } from 'lucide-react';

export const ChampionshipVideoCard: React.FC = () => {
  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-4 sm:p-5 shadow-xl">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* Embedded YouTube Player Container */}
        <div className="lg:col-span-6 xl:col-span-5 relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950 max-h-[260px]">
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
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                <Trophy size={12} className="text-amber-400" /> Finals Replay & Podcast
              </span>
              <span className="text-[11px] text-slate-400 font-mono font-bold">SAC TOWN ARENA</span>
            </div>
            <span className="text-[10px] font-bold text-amber-400 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded-lg flex items-center gap-1">
              <Sparkles size={12} /> Stallions 87, Mad Dogs 72
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-black text-white tracking-tight leading-snug">
            STALLIONS REIGN SUPREME: Season 3 Finals Broadcast & Championship Podcast
          </h3>

          <div className="space-y-1 text-xs text-slate-300 leading-relaxed font-normal">
            <p className="line-clamp-2 sm:line-clamp-none font-medium text-slate-200">
              Behind a masterclass from Finals MVP Dorell Kabal (25 PTS, 11 REB, 3 BLK on 78.6% FG) in his final game and 29 points from George Madsen (5-7 3PT), the Sacramento Stallions captured their 2nd CCH Title!
            </p>
          </div>

          {/* Podcast Audio Player */}
          <div className="bg-slate-950/90 border border-amber-500/30 p-3.5 rounded-2xl space-y-2 mt-2 shadow-inner">
            <div className="flex items-center justify-between text-xs text-amber-400 font-extrabold font-mono">
              <span className="flex items-center gap-1.5">
                <Radio size={15} className="animate-pulse text-amber-400" /> Championship Podcast
              </span>
              <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                Kabal&apos;s Final Ring &amp; Underwood&apos;s Defection
              </span>
            </div>

            <audio
              controls
              style={{ width: '100%' }}
              className="w-full h-10 accent-amber-500 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none"
            >
              <source
                src="https://dn601201.us.archive.org/0/items/cchoops2k/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a"
                type="audio/mp4"
              />
              Your browser does not support the audio element.
            </audio>

            <div className="flex items-center justify-between text-xs pt-0.5">
              <a
                href="https://dn601201.us.archive.org/0/items/cchoops2k/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a"
                download
                className="inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-bold hover:underline transition-colors text-[11px]"
              >
                <Download size={13} />
                <span>📥 Download Podcast Episode</span>
              </a>
              <span className="text-[10px] text-slate-500 font-mono">m4a • CCH Archive</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
