import React, { useState } from 'react';
import { Award, Flame, Star, ChevronRight, BookOpen, Users, Shield, Zap, Share2, Check, Sparkles, Trophy } from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import hinton42Img from '../assets/images/Hinton42_s4vsCAL.png';
import bowenPOTWImg from '../assets/images/BowenPOTW.png';
import hintonPOTWImg from '../assets/images/HintonPOTW.png';

interface PlayerOfTheWeekCardProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

export const PlayerOfTheWeekCard: React.FC<PlayerOfTheWeekCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab
}) => {
  const [selectedWeek, setSelectedWeek] = useState<2 | 1>(2);
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const baseUrl = window.location.href.split('#')[0];
    const articleId = selectedWeek === 2 ? 's4-potw-week-2-bowen-hinton' : 's4-potw-week-1-dean-marai';
    const directUrl = `${baseUrl}#potw?week=s4-week-${selectedWeek}`;
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
      id="player-of-the-week-card"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/60 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header Banner */}
      <div className="space-y-3 relative z-10 border-b border-slate-800/80 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1.5">
              <Award size={14} className="fill-slate-950" /> OFFICIAL LEAGUE AWARDS
            </span>
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
              <Star size={12} className="fill-amber-300" /> {selectedWeek === 2 ? 'WEEK 2 (OCT 22–28)' : 'WEEK 1 (OCT 15–21)'}
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
              Season 4 Official Slate
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Week Selector Toggle */}
            <div className="inline-flex rounded-xl bg-slate-900 border border-slate-700 p-0.5">
              <button
                onClick={() => setSelectedWeek(2)}
                className={`px-3 py-1 text-xs font-mono font-black rounded-lg transition-all cursor-pointer ${
                  selectedWeek === 2
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Week 2 (Latest)
              </button>
              <button
                onClick={() => setSelectedWeek(1)}
                className={`px-3 py-1 text-xs font-mono font-black rounded-lg transition-all cursor-pointer ${
                  selectedWeek === 1
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Week 1
              </button>
            </div>

            <button
              onClick={handleShare}
              className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/30 hover:border-amber-400 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md group/share"
              title="Share Article / Copy Direct Link"
              aria-label="Share direct link to Player of the Week awards"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-black">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={14} className="text-amber-400 group-hover/share:text-amber-300 shrink-0" />
                  <span>Share</span>
                </>
              )}
            </button>

            {onNavigateToTab && (
              <button
                onClick={() => onNavigateToTab('potw')}
                className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <Trophy size={14} className="text-amber-400" />
                <span>POTW Hub &amp; Ledger</span>
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>

        {selectedWeek === 2 ? (
          <>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Players of the Week (Oct 22–28): Joshua Bowen &amp; A.J. Hinton Capture Week 2 Honors
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-5xl">
              Oakland&apos;s defensive anchor <strong className="text-sky-300">Joshua Bowen</strong> takes home the Northern Cali honor after averaging a double-double (14.5 PTS, 11.5 REB, 4.5 AST) to keep the Renegades 4-0, while reigning MVP <strong className="text-amber-300">A.J. Hinton</strong> captures the Southern Cali nod following an historic 42.0 PPG and 12.0 triples per game shooting explosion.
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Players of the Week (Oct 15–21): Jamar Dean &amp; Andor Marai Capture Week 1 Honors
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-5xl">
              <strong className="text-amber-300">Jamar Dean</strong> of the Oakland Renegades took home the Northern Cali honor (26.0 PPG, 66.7% FG), while <strong className="text-amber-300">Andor Marai</strong> of the California Reds earned the Southern Cali nod (24.0 PPG, 11.0 RPG, 83.3% FG).
            </p>
          </>
        )}
      </div>

      {/* Dual Winner Spotlight Grid */}
      {selectedWeek === 2 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {/* ========================================================================= */}
          {/* WEEK 2 NORTHERN CALI: JOSHUA BOWEN (OAKLAND RENEGADES) */}
          {/* ========================================================================= */}
          <div className="bg-slate-950/90 border-2 border-sky-500/40 hover:border-sky-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/bowen">
            <div className="space-y-4">
              {/* Top Badging */}
              <div className="flex items-center justify-between border-b border-sky-500/20 pb-3">
                <div
                  onClick={() => onSelectTeam?.('oakland-renegades')}
                  className="flex items-center gap-2.5 cursor-pointer group/team"
                >
                  <TeamBadge teamId="oakland-renegades" size="md" />
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-sky-400 tracking-wider block">
                      NORTHERN CALI WINNER SPOTLIGHT
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-team:text-sky-300 transition-colors">
                      Oakland Renegades
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-black bg-sky-500 text-slate-950 px-2.5 py-1 rounded-xl shadow inline-block">
                    86 OVR
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block font-bold mt-0.5">2-0 Slate (4-0 Overall)</span>
                </div>
              </div>

              {/* Bio & Stats Box */}
              <div className="space-y-3">
                {/* Official POTW Graphic Cover Banner */}
                <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-slate-900 aspect-[16/9] shadow-inner group/img">
                  <img
                    src={bowenPOTWImg}
                    alt="Joshua Bowen Player of the Week Cover"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black bg-sky-500/90 text-slate-950 px-2 py-0.5 rounded shadow">
                      NORTHERN CALI POTW
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <h4 className="text-2xl font-black text-white">Joshua Bowen</h4>
                  <span className="text-xs font-mono font-bold text-sky-400">#29 • PF / C</span>
                </div>

                {/* 4-Stat Box */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">PTS</span>
                    <span className="text-xl font-black font-mono text-sky-300">14.5</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">REB</span>
                    <span className="text-xl font-black font-mono text-white">11.5</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">AST</span>
                    <span className="text-xl font-black font-mono text-sky-300">4.5</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">SPG</span>
                    <span className="text-xl font-black font-mono text-white">1.5</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                    <span>Key Showcase Performance:</span>
                    <span>20 PTS • 14 REB • 5 AST</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed pt-1 border-t border-slate-800">
                    Controlled both sides of the glass in Oakland&apos;s 74-50 rout of California, anchoring an undefeated Renegades defense that held opponents to 53.5 PPG.
                  </p>
                </div>
              </div>

              {/* Coach Quote Box */}
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-xs text-slate-300">
                <p className="italic text-sky-200">
                  &ldquo;Joshua Bowen does the gritty work that wins championships. 14.5 points, 11.5 rebounds, and 4.5 assists from your power forward sets the tone every night.&rdquo;
                </p>
                <span className="text-[10px] font-mono text-slate-400 font-bold block mt-1">
                  — Carson Goodwin, Head Coach • Oakland Renegades
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => onNavigateToNews('s4-potw-week-2-bowen-hinton')}
                className="flex-1 px-3 py-2 bg-sky-500 hover:bg-sky-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <BookOpen size={14} />
                <span>Week 2 Official Story</span>
              </button>
              <button
                onClick={() => onSelectTeam?.('oakland-renegades')}
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
              >
                <Users size={13} className="text-sky-400" />
                <span>Roster</span>
              </button>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* WEEK 2 SOUTHERN CALI: A.J. HINTON (SAN DIEGO STRYKERS) */}
          {/* ========================================================================= */}
          <div className="bg-slate-950/90 border-2 border-amber-500/40 hover:border-amber-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/hinton">
            <div className="space-y-4">
              {/* Top Badging */}
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div
                  onClick={() => onSelectTeam?.('san-diego-strykers')}
                  className="flex items-center gap-2.5 cursor-pointer group/team"
                >
                  <TeamBadge teamId="san-diego-strykers" size="md" />
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider block">
                      SOUTHERN CALI WINNER SPOTLIGHT
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-team:text-amber-300 transition-colors">
                      San Diego Strykers
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-xl shadow inline-block">
                    99 OVR
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block font-bold mt-0.5">2-0 Slate (3-0 Overall)</span>
                </div>
              </div>

              {/* Bio & Stats Box */}
              <div className="space-y-3">
                {/* Official POTW Graphic Cover Banner */}
                <div className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-900 aspect-[16/9] shadow-inner group/img">
                  <img
                    src={hintonPOTWImg}
                    alt="A.J. Hinton Player of the Week Cover"
                    className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-2.5 right-2.5 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-black bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow">
                      SOUTHERN CALI POTW
                    </span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between">
                  <h4 className="text-2xl font-black text-white">A.J. Hinton</h4>
                  <span className="text-xs font-mono font-bold text-amber-400">#21 • SF / SG</span>
                </div>

                {/* 4-Stat Box */}
                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">PPG</span>
                    <span className="text-xl font-black font-mono text-amber-300">42.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">3PMPG</span>
                    <span className="text-xl font-black font-mono text-red-400 font-bold">12.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">RPG</span>
                    <span className="text-xl font-black font-mono text-white">4.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">APG</span>
                    <span className="text-xl font-black font-mono text-amber-300">3.0</span>
                  </div>
                </div>

                <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1">
                  <div className="flex items-center justify-between text-emerald-400 font-mono font-bold">
                    <span>Key Showcase Performance:</span>
                    <span>42 PTS • 12 3PT vs CAL (102-64 W)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed pt-1 border-t border-slate-800">
                    Reigning MVP staged an historic long-range shooting display, sinking 12 threes against California and powering San Diego to a league-best +32.7 scoring margin.
                  </p>
                </div>
              </div>

              {/* Coach Quote Box */}
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-xs text-slate-300">
                <p className="italic text-amber-200">
                  &ldquo;A.J. Hinton is playing at an all-time level. When he gets into a shooting groove like that, you just clear out and let the MVP work.&rdquo;
                </p>
                <span className="text-[10px] font-mono text-slate-400 font-bold block mt-1">
                  — Adam Saunders, Head Coach • San Diego Strykers
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => onNavigateToNews('s4-g9-hinton-42-strykers-rout-reds')}
                className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Flame size={14} />
                <span>42-Point Game Recap</span>
              </button>
              <button
                onClick={() => onSelectTeam?.('san-diego-strykers')}
                className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
              >
                <Users size={13} className="text-amber-400" />
                <span>Roster</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
          {/* WEEK 1 NORTHERN CALI: JAMAR DEAN */}
          <div className="bg-slate-950/90 border-2 border-amber-500/40 hover:border-amber-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/dean">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                <div
                  onClick={() => onSelectTeam?.('oakland-renegades')}
                  className="flex items-center gap-2.5 cursor-pointer group/team"
                >
                  <TeamBadge teamId="oakland-renegades" size="md" />
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider block">
                      NORTHERN CALI WINNER SPOTLIGHT
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-team:text-amber-300 transition-colors">
                      Oakland Renegades
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-xl shadow inline-block">
                    96 OVR
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block font-bold mt-0.5">1-0 Record</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-2xl font-black text-white">Jamar Dean</h4>
                  <span className="text-xs font-mono font-bold text-amber-400">#1 • SG</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">PPG</span>
                    <span className="text-xl font-black font-mono text-amber-300">26.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">FG%</span>
                    <span className="text-xl font-black font-mono text-white">66.7%</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">RPG</span>
                    <span className="text-xl font-black font-mono text-white">3.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">SPG</span>
                    <span className="text-xl font-black font-mono text-amber-300">2.0</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  Ignited Oakland&apos;s 21-7 third-quarter blitz over Anaheim, scoring a game-high 26 points on 8-of-12 shooting with 7-of-8 free throws.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => onNavigateToNews('s4-potw-week-1-dean-marai')}
                className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Zap size={14} />
                <span>Week 1 Story</span>
              </button>
            </div>
          </div>

          {/* WEEK 1 SOUTHERN CALI: ANDOR MARAI */}
          <div className="bg-slate-950/90 border-2 border-red-500/40 hover:border-red-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/marai">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
                <div
                  onClick={() => onSelectTeam?.('california-reds')}
                  className="flex items-center gap-2.5 cursor-pointer group/team"
                >
                  <TeamBadge teamId="california-reds" size="md" />
                  <div>
                    <span className="text-[10px] font-mono font-black uppercase text-red-400 tracking-wider block">
                      SOUTHERN CALI WINNER SPOTLIGHT
                    </span>
                    <h3 className="text-base sm:text-lg font-black text-white group-team:text-red-300 transition-colors">
                      California Reds
                    </h3>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-xl shadow inline-block">
                    93 OVR
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block font-bold mt-0.5">1-0 Record</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-2xl font-black text-white">Andor Marai</h4>
                  <span className="text-xs font-mono font-bold text-red-400">#33 • C</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">PPG</span>
                    <span className="text-xl font-black font-mono text-amber-300">24.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">REB</span>
                    <span className="text-xl font-black font-mono text-white">11.0</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">FG%</span>
                    <span className="text-xl font-black font-mono text-white">83.3%</span>
                  </div>
                  <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-center">
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">BLK</span>
                    <span className="text-xl font-black font-mono text-red-400">2.0</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-900/90 p-3 rounded-xl border border-slate-800">
                  Put on an interior masterclass against the defending champions, shooting 10-of-12 (83.3%) from the field while grabbing 11 rebounds and blocking 2 shots in 59-44 win.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
              <button
                onClick={() => onNavigateToNews('s4-potw-week-1-dean-marai')}
                className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
              >
                <Shield size={14} />
                <span>Week 1 Story</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Honorable Mentions Bar */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
            <Star size={14} className="fill-amber-400" /> {selectedWeek === 2 ? 'WEEK 2' : 'WEEK 1'} HONORABLE MENTIONS
          </span>
          <span className="text-[10px] font-mono text-slate-400">Official Finalists</span>
        </div>

        {selectedWeek === 2 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">Lloyd Boomer</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">Fresno</span>
              </div>
              <p className="text-[11px] text-slate-300">
                26.0 PPG, 5.0 RPG, 4.0 APG in 57-50 triumph over Sacramento.
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">Carlton Daugherty</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">Golden State</span>
              </div>
              <p className="text-[11px] text-slate-300">
                #1 pick dropped 20 PTS, 4 REB, 3 3PM in pro debut win vs CAL (65-58).
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">Mo Alexander</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">LA Dynamics</span>
              </div>
              <p className="text-[11px] text-slate-300">
                18.5 PPG, 13.0 RPG, 3.5 BPG in undefeated 2-0 week.
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">Kirk Barnes</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">Sabrewolves</span>
              </div>
              <p className="text-[11px] text-slate-300">
                28.0 PPG, 6.0 RPG under new head coach Jacob Underwood.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">A.J. Hinton</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">San Diego Strykers</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Exploded for 30 points (8-11 3PT, 4 STL) in Game 6 blowout of Anaheim; led Strykers to 2-0 start.
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">R.J. Rush</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">Los Angeles Dynamics</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Set all-time single-game CCH record with 14-of-14 free throws, posting 33 points in 77-55 rout.
              </p>
            </div>

            <div className="bg-slate-900/90 p-3 rounded-xl border border-slate-800/80 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-black text-white">Lloyd Boomer</span>
                <span className="text-[10px] font-mono font-bold text-amber-400">Fresno Mad Dogs</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Poured in 25 points (6-6 FT) to spearhead fourth-quarter comeback over San Jose (59-53).
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-800/80 relative z-10">
        <button
          onClick={() => onNavigateToNews(selectedWeek === 2 ? 's4-potw-week-2-bowen-hinton' : 's4-potw-week-1-dean-marai')}
          className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
        >
          <BookOpen size={16} />
          <span>Read Full Player of the Week Article &amp; Voting Breakdown</span>
          <ChevronRight size={16} />
        </button>

        {onNavigateToTab && (
          <button
            onClick={() => onNavigateToTab('potw')}
            className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0"
          >
            <span>Open Dedicated Player of the Week Page</span>
            <ChevronRight size={14} />
          </button>
        )}
      </div>
    </div>
  );
};
