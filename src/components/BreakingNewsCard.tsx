import React from 'react';
import { Newspaper, ChevronRight, Sparkles, Quote, BookOpen } from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import jacobUnderwoodImg from '../assets/images/JacobUnderwood.png';

interface BreakingNewsCardProps {
  onNavigateToNews: (articleId?: string) => void;
}

export const BreakingNewsCard: React.FC<BreakingNewsCardProps> = ({ onNavigateToNews }) => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/30 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden group">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="animate-pulse flex h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
            <Newspaper size={14} className="text-amber-400" /> BREAKING FRONT OFFICE NEWS
          </span>
          <span className="text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            SEASON 4 OFFSEASON
          </span>
        </div>
        <span className="text-xs font-mono text-slate-400 font-bold">SAN DIEGO BEAT</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Photo Container */}
        <div className="lg:col-span-5 relative overflow-hidden rounded-2xl border border-amber-500/30 shadow-xl group/img bg-slate-950 flex flex-col justify-center items-center min-h-[220px]">
          <img
            src={jacobUnderwoodImg}
            alt="Head Coach Jacob Underwood"
            className="w-full h-auto max-h-[340px] object-contain transition-transform duration-700 group-hover/img:scale-105 p-1"
          />
          <div className="w-full bg-slate-950/95 border-t border-amber-500/20 px-3 py-2 flex items-center justify-between text-[11px] font-mono font-bold text-amber-300">
            <span className="flex items-center gap-1">
              <Sparkles size={12} className="text-amber-400" /> Head Coach Jacob Underwood
            </span>
            <span className="text-slate-300">4-YR / $29.11M</span>
          </div>
        </div>

        {/* Content Side */}
        <div className="lg:col-span-7 space-y-4">
          <div className="cursor-pointer" onClick={() => onNavigateToNews('s4-underwood-defection')}>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight tracking-tight group-hover:text-amber-300 transition-colors">
              SHOCKWAVES IN SAN DIEGO: Underwood Defects to Arch-Rival Sabrewolves
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              In the most stunning front-office defection in Cali Championship Hoops history, head coach Jacob Underwood turns down a lucrative Strykers extension to sign a monumental 4-year, $29.11 million contract with cross-town rival Sabrewolves.
            </p>
          </div>

          {/* Team Rivalry Badges (NO "FINAL SCORE") */}
          <div className="flex items-center gap-3 bg-slate-950/90 border border-slate-800 p-3 rounded-2xl w-fit">
            <div className="flex items-center gap-2">
              <TeamBadge teamId="san-diego-sabrewolves" size="md" />
              <span className="font-extrabold text-xs text-white">Sabrewolves</span>
            </div>
            <span className="text-[11px] font-black font-mono text-amber-400 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20">
              VS
            </span>
            <div className="flex items-center gap-2">
              <TeamBadge teamId="san-diego-strykers" size="md" />
              <span className="font-extrabold text-xs text-white">Strykers</span>
            </div>
          </div>

          {/* Quote Banner */}
          <div className="bg-slate-950/70 border-l-4 border-amber-500 p-3 rounded-r-2xl italic text-xs text-slate-200 flex items-start gap-2">
            <Quote size={14} className="text-amber-400 shrink-0 mt-0.5" />
            <span>
              &quot;When the Sabrewolves entered the picture with a blank check and a vision of defensive dominance, Underwood didn&apos;t just walk away—he crossed the deepest battle lines in the league.&quot;
            </span>
          </div>

          {/* CTA Button */}
          <div className="pt-1">
            <button
              onClick={() => onNavigateToNews('s4-underwood-defection')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Read Full Breaking News Story</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
