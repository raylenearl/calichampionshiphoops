import React, { useState } from 'react';
import {
  Flame,
  ChevronRight,
  Sparkles,
  BookOpen,
  Award,
  Share2,
  Check,
  TrendingUp,
  Activity,
  ArrowUpRight,
  Calendar,
  Users
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import boomerVsGsImg from '../assets/images/Boomer_vs_GS.png';
import boomerVsSacImg from '../assets/images/Boomer_VS_SAC1.png';

interface LatestLeagueNewsCardProps {
  onNavigateToNews: (articleId?: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

export const LatestLeagueNewsCard: React.FC<LatestLeagueNewsCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [copied, setCopied] = useState(false);

  const articleId = 's4-update-renegades-reign-supreme-weekly-honors';

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const baseUrl = window.location.href.split('#')[0];
    const directUrl = `${baseUrl}#news?article=${articleId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directUrl).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div
      id="latest-league-news-card"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/30 border-2 border-amber-500/70 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header Banner with Cover Photo */}
      <div className="space-y-4 relative z-10 border-b border-slate-800/80 pb-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-amber-500 text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1.5">
              <Sparkles size={14} className="fill-slate-950" /> OFFICIAL LEAGUE UPDATE
            </span>
            <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-[11px] uppercase rounded-md flex items-center gap-1">
              <Activity size={12} /> NOVEMBER 6 SLATE
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 border border-slate-700 font-mono text-[11px] uppercase rounded-md">
              Season 4 Front Page Feature
            </span>
          </div>

          <button
            onClick={handleShare}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/30 hover:border-amber-400 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md group/share"
            title="Share Article / Copy Direct Link"
          >
            {copied ? (
              <>
                <Check size={14} className="text-emerald-400 shrink-0" />
                <span className="text-emerald-400 font-black">Copied!</span>
              </>
            ) : (
              <>
                <Share2 size={14} className="text-amber-400 group-hover/share:scale-110 transition-transform shrink-0" />
                <span>Share Article</span>
              </>
            )}
          </button>
        </div>

        {/* Hero Headline & Cover Photo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-3">
            <h2 
              onClick={() => onNavigateToNews(articleId)}
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight group-hover:text-amber-400 transition-colors cursor-pointer"
            >
              Season 4 Update: Renegades Reign Supreme, Marai and Graham Earn Weekly Honors
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The battle for the top of the CCH standings is heating up. Oakland sits alone at 4-0, Fresno (3-0) and San Diego (3-0) follow undefeated, California claws back to .500, and Anaheim notches its first win.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                <Calendar size={12} className="text-amber-400" /> Official League Dispatch
              </span>
              <button
                onClick={() => onNavigateToNews(articleId)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-mono font-black text-xs transition-all cursor-pointer shadow"
              >
                <BookOpen size={13} /> Read Full Story →
              </button>
            </div>
          </div>

          {/* Cover Photo */}
          <div className="lg:col-span-5">
            <div
              onClick={() => onNavigateToNews(articleId)}
              className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 hover:border-amber-400 shadow-xl bg-slate-950 group/cover cursor-pointer transition-all hover:shadow-amber-500/10"
            >
              <img
                src={boomerVsGsImg}
                alt="Lloyd Boomer in Fresno Mad Dogs 82-75 win over Golden State"
                className="w-full h-48 sm:h-56 object-cover object-center group-hover/cover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow">
                    COVER STORY PHOTO
                  </span>
                  <p className="text-xs font-bold text-white mt-1 drop-shadow leading-snug">
                    Lloyd Boomer (26 PTS, 8 AST) powers Mad Dogs to 3-0 in 82-75 thriller
                  </p>
                </div>
                <div className="p-1.5 rounded-lg bg-slate-900/90 text-amber-400 border border-amber-500/40 shrink-0 ml-2">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid Content: 3 Game Highlights & Standings Pulse */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
        {/* Left Column: Recent Game Breakdowns (Lg: col-span-7) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Flame size={14} className="text-amber-400 fill-amber-400" /> RECENT MATCHUP HIGHLIGHTS
            </span>
            <button
              onClick={() => onNavigateToNews(articleId)}
              className="text-xs text-slate-400 hover:text-amber-400 font-mono font-bold flex items-center gap-1 cursor-pointer transition-colors"
            >
              Read Full Article <ChevronRight size={14} />
            </button>
          </div>

          {/* Game 1: Fresno vs Golden State */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl space-y-2.5 transition-all">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                Fresno 82, Golden State 75 (Final)
              </span>
              <span className="text-slate-400 font-mono">Nov 5</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong>Lloyd Boomer</strong> dropped 26 points, 8 assists, and 3 steals to lead the Mad Dogs (3-0). Newly signed forward <strong>Luke Davidson</strong> registered a 12-point, 10-rebound double-double in his debut, and Jud Drew added 13 PTS. For Enterprise (1-1), Carlton Daugherty scored 18 PTS (4 3PM) and Jud Thompson had 17 PTS & 6 AST.
            </p>
          </div>

          {/* Game 2: Anaheim vs San Francisco */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl space-y-2.5 transition-all">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                Anaheim 56, San Francisco 52 (Final)
              </span>
              <span className="text-slate-400 font-mono">Nov 2</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              The Admirals earned their first win of Season 4 behind <strong>Stephan Sirven</strong> (18 PTS, 6-6 FT) and <strong>Kirk Tinsley</strong> (16 PTS, 4-5 3PT). For San Francisco (0-2), Eric Higgins had 16 PTS & 9 REB and Manny Payton added 10 PTS & 11 REB.
            </p>
          </div>

          {/* Game 3: California vs LA Dynamics */}
          <div className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 p-4 rounded-2xl space-y-2.5 transition-all">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-red-400 bg-red-500/10 px-2 py-0.5 rounded border border-red-500/20">
                California 61, LA Dynamics 56 (Final)
              </span>
              <span className="text-slate-400 font-mono">Nov 1</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              <strong>Andor Marai</strong> was dominant in the paint, posting 20 points, 14 rebounds, and 4 steals to push the Reds back to .500 (3-3). Donald Rodman added 11 PTS and 9 REB. For LA (1-1), rookie sensation R.J. Rush paced the Dynamics with 14 points.
            </p>
          </div>
        </div>

        {/* Right Column: Weekly Award Winners & Top Standings (Lg: col-span-5) */}
        <div className="lg:col-span-5 space-y-4">
          <span className="text-xs font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
            <Award size={14} className="text-amber-400" /> PLAYERS OF THE WEEK (OCT 29 – NOV 4)
          </span>

          {/* POTW 1: Carson Graham (North) */}
          <div className="bg-slate-900/90 border border-amber-500/30 p-3.5 rounded-2xl flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 font-bold font-mono">
              #7
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Northern Cali POTW</span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold">3-0 Record</span>
              </div>
              <h4 className="text-sm font-black text-white truncate">Carson Graham</h4>
              <p className="text-xs text-slate-400 font-mono">Fresno Mad Dogs • SF/PF</p>
              <p className="text-[11px] text-slate-300 mt-1">Two-way dominance anchoring Fresno's undefeated start.</p>
            </div>
          </div>

          {/* POTW 2: Andor Marai (South) */}
          <div className="bg-slate-900/90 border border-amber-500/30 p-3.5 rounded-2xl flex items-center gap-3.5">
            <img
              src={aMaraiS4_1Img}
              alt="Andor Marai"
              className="w-12 h-12 rounded-xl object-cover border border-amber-500/40 shrink-0"
              referrerPolicy="no-referrer"
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-amber-400 uppercase">Southern Cali POTW</span>
                <span className="text-[10px] font-mono text-amber-300 font-bold">3-3 Record</span>
              </div>
              <h4 className="text-sm font-black text-white truncate">Andor Marai</h4>
              <p className="text-xs text-slate-400 font-mono">California Reds • C (93 OVR)</p>
              <p className="text-[11px] text-slate-300 mt-1">20 PTS, 14 REB, 4 STL in statement win at LA.</p>
            </div>
          </div>

          {/* Standings Snapshot Quick Bar */}
          <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-mono font-bold text-slate-300">LEAGUE LEADERS</span>
              <button
                onClick={() => onNavigateToTab && onNavigateToTab('standings')}
                className="text-amber-400 hover:underline font-mono text-[11px] font-bold cursor-pointer"
              >
                View Table &rarr;
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="block text-amber-400 font-mono font-black">4 - 0</span>
                <span className="text-[10px] text-slate-400 truncate block">Oakland</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="block text-amber-400 font-mono font-black">3 - 0</span>
                <span className="text-[10px] text-slate-400 truncate block">San Diego</span>
              </div>
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="block text-amber-400 font-mono font-black">3 - 0</span>
                <span className="text-[10px] text-slate-400 truncate block">Fresno</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 relative z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigateToNews(articleId)}
            className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl flex items-center gap-1.5 transition-all shadow-md cursor-pointer"
          >
            <BookOpen size={14} /> Read Full Official Article <ChevronRight size={14} />
          </button>
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('news')}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 font-bold text-xs rounded-xl flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <TrendingUp size={14} className="text-amber-400" /> League News Desk
          </button>
        </div>
      </div>
    </div>
  );
};
