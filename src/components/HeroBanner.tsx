import React, { useState, useEffect } from 'react';
import { Trophy, ChevronRight, Zap, ExternalLink, Radio } from 'lucide-react';

interface HeroBannerProps {
  onNavigate: (tab: string) => void;
  selectedSeason: 1 | 2 | 3 | 4;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onNavigate, selectedSeason }) => {
  const [embedSrc, setEmbedSrc] = useState<string>('');
  const [loadError, setLoadError] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hostname = window.location.hostname || 'localhost';
      const parents = Array.from(
        new Set([
          hostname,
          'localhost',
          'ai.studio',
          'aistudio.google.com',
          'google.com',
          'run.app',
        ].filter(Boolean))
      );
      
      const parentParams = parents.map((p) => `parent=${encodeURIComponent(p)}`).join('&');
      setEmbedSrc(`https://player.twitch.tv/?channel=cchoops2k&${parentParams}&autoplay=false&muted=true`);
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 mb-8">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

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
              onClick={() => onNavigate(selectedSeason <= 3 ? 'playoffs' : 'schedule')}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <Trophy size={16} />
              <span>{selectedSeason <= 3 ? `Explore Season ${selectedSeason} Postseason` : 'Explore Season 4 Schedule'}</span>
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

        {/* Right Spotlight Card: Twitch Stream Embed */}
        <div className="lg:col-span-5">
          <div className="bg-slate-950/90 border border-purple-500/30 rounded-3xl p-4 sm:p-5 relative shadow-2xl space-y-3.5 group">
            {/* Ambient Twitch Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/20 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 relative z-10">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
                </span>
                <span className="text-xs font-black uppercase text-purple-400 tracking-wider flex items-center gap-1.5 font-mono">
                  <Radio size={14} className="text-purple-400" />
                  CCH LIVE STREAM
                </span>
              </div>
              <a
                href="https://www.twitch.tv/cchoops2k"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] bg-purple-950/80 hover:bg-purple-900 text-purple-300 hover:text-white font-bold px-2.5 py-1 rounded-xl border border-purple-700/50 flex items-center gap-1.5 transition-all shadow-sm"
              >
                <span>twitch.tv/cchoops2k</span>
                <ExternalLink size={12} />
              </a>
            </div>

            {/* Twitch Player iFrame Container */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center">
              {embedSrc ? (
                <iframe
                  src={embedSrc}
                  frameBorder="0"
                  allowFullScreen={true}
                  scrolling="no"
                  allow="autoplay; fullscreen"
                  sandbox="allow-modals allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                  className="w-full h-full"
                  title="Cali Championship Hoops Live Stream"
                  onError={() => setLoadError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center p-6 text-center space-y-2">
                  <Radio size={24} className="text-purple-400 animate-pulse" />
                  <span className="text-xs text-slate-400">Loading CCH stream player...</span>
                </div>
              )}
            </div>

            {/* Bottom Stream Info & Direct Watch Link */}
            <div className="flex items-center justify-between pt-1 text-[11px] text-slate-400 relative z-10 font-sans">
              <span className="truncate max-w-[190px] sm:max-w-[240px] text-slate-300 font-medium">
                Official CCH 2K Broadcasts & Archives
              </span>
              <a
                href="https://www.twitch.tv/cchoops2k"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-900/60 hover:bg-purple-800 text-purple-200 hover:text-white px-2.5 py-1 rounded-lg border border-purple-700/50 font-bold transition-all shrink-0 flex items-center gap-1 shadow-sm"
              >
                <span>Watch on Twitch</span>
                <ExternalLink size={11} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

