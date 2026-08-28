import React from 'react';
import { Award, Flame, Star, ChevronRight, BookOpen, Users, Shield, Zap } from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';

interface PlayerOfTheWeekCardProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
}

export const PlayerOfTheWeekCard: React.FC<PlayerOfTheWeekCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
}) => {
  return (
    <div
      id="player-of-the-week-card"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/60 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header Banner */}
      <div className="space-y-2 relative z-10 border-b border-slate-800/80 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1.5">
              <Award size={14} className="fill-slate-950" /> OFFICIAL LEAGUE AWARDS
            </span>
            <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
              <Star size={12} className="fill-amber-300" /> WEEK 1 (OCT 15–21)
            </span>
            <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
              Season 4 Opening Week
            </span>
          </div>

          <button
            onClick={() => onNavigateToNews('s4-potw-week-1-dean-marai')}
            className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0 self-start sm:self-auto"
          >
            <span>Read Official Awards Release</span>
            <ChevronRight size={14} />
          </button>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
          Players of the Week (Oct 15–21): Jamar Dean &amp; Andor Marai Capture Week 1 Honors
        </h2>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium max-w-5xl">
          The league offices announced their first weekly awards. <strong className="text-amber-300">Jamar Dean</strong> of the Oakland Renegades took home the Northern Cali Conference honor, while <strong className="text-amber-300">Andor Marai</strong> of the California Reds earned the Southern Cali Conference nod.
        </p>
      </div>

      {/* Dual Winner Spotlight Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
        {/* ========================================================================= */}
        {/* NORTHERN CONFERENCE: JAMAR DEAN (OAKLAND RENEGADES) */}
        {/* ========================================================================= */}
        <div className="bg-slate-950/90 border-2 border-amber-500/40 hover:border-amber-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/dean">
          <div className="space-y-4">
            {/* Top Badging */}
            <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
              <div
                onClick={() => onSelectTeam?.('oakland-renegades')}
                className="flex items-center gap-2.5 cursor-pointer group/team"
              >
                <TeamBadge teamId="oakland-renegades" size="md" />
                <div>
                  <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider block">
                    NORTHERN CALI CONFERENCE POTW
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

            {/* Photo & Bio Box */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5 rounded-2xl bg-slate-900 border-2 border-amber-500/50 overflow-hidden shadow-lg group-hover/dean:border-amber-400 transition-colors aspect-[4/3] sm:aspect-auto">
                <img
                  src={jamarDean1Img}
                  alt="Jamar Dean - Oakland Renegades Northern Conference POTW"
                  className="w-full h-full object-cover object-center group-hover/dean:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:col-span-7 space-y-2 text-left">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-black text-white">Jamar Dean</h4>
                  <span className="text-xs font-mono font-bold text-amber-400">#10 • SG</span>
                </div>

                <div className="text-[11px] font-mono text-slate-300 space-y-1 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Points &amp; FG%:</span>
                    <span className="font-bold text-amber-300">26 PTS • 8/12 FG (66.7%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Free Throws:</span>
                    <span className="font-bold text-white">7/8 FT (87.5%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Rebounds &amp; Steals:</span>
                    <span className="font-bold text-white">3 REB • 2 STL</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span className="text-emerald-400 font-bold">Week 1 Result:</span>
                    <span className="font-black text-emerald-300">W 71-49 vs Anaheim</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Ignited Oakland&apos;s 21-7 third-quarter blitz over Anaheim, scoring a game-high 26 points with relentless downhill attacks and perimeter precision.
                </p>
              </div>
            </div>

            {/* Coach Quote Box */}
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-xs text-slate-300">
              <p className="italic text-amber-200">
                &ldquo;Jamar Dean played with total command against Anaheim. He attacked downhill, drew contact, and set the emotional tone for our entire squad.&rdquo;
              </p>
              <span className="text-[10px] font-mono text-slate-400 font-bold block mt-1">
                — Carson Goodwin, Head Coach • Oakland Renegades
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => onNavigateToNews('s4-g3-renegades-blitz-admirals')}
              className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Zap size={14} />
              <span>Oakland G3 Recap</span>
            </button>
            <button
              onClick={() => onSelectTeam?.('oakland-renegades')}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
            >
              <Users size={13} className="text-amber-400" />
              <span>Roster</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SOUTHERN CONFERENCE: ANDOR MARAI (CALIFORNIA REDS) */}
        {/* ========================================================================= */}
        <div className="bg-slate-950/90 border-2 border-red-500/40 hover:border-red-400 rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl transition-all flex flex-col justify-between group/marai">
          <div className="space-y-4">
            {/* Top Badging */}
            <div className="flex items-center justify-between border-b border-red-500/20 pb-3">
              <div
                onClick={() => onSelectTeam?.('california-reds')}
                className="flex items-center gap-2.5 cursor-pointer group/team"
              >
                <TeamBadge teamId="california-reds" size="md" />
                <div>
                  <span className="text-[10px] font-mono font-black uppercase text-red-400 tracking-wider block">
                    SOUTHERN CALI CONFERENCE POTW
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

            {/* Photo & Bio Box */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
              <div className="sm:col-span-5 rounded-2xl bg-slate-900 border-2 border-red-500/50 overflow-hidden shadow-lg group-hover/marai:border-red-400 transition-colors aspect-[4/3] sm:aspect-auto">
                <img
                  src={aMaraiS4_1Img}
                  alt="Andor Marai - California Reds Southern Conference POTW"
                  className="w-full h-full object-cover object-center group-hover/marai:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="sm:col-span-7 space-y-2 text-left">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-xl font-black text-white">Andor Marai</h4>
                  <span className="text-xs font-mono font-bold text-red-400">#44 • C</span>
                </div>

                <div className="text-[11px] font-mono text-slate-300 space-y-1 bg-slate-900/90 p-2.5 rounded-xl border border-slate-800">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Points &amp; FG%:</span>
                    <span className="font-bold text-amber-300">24 PTS • 10/12 FG (83.3%)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Rebounds:</span>
                    <span className="font-bold text-white">11 REB (Double-Double)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Defense:</span>
                    <span className="font-bold text-white">2 BLK • 2 STL</span>
                  </div>
                  <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                    <span className="text-emerald-400 font-bold">Week 1 Result:</span>
                    <span className="font-black text-emerald-300">W 59-44 vs Sacramento</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  Put on an interior masterclass against the defending champions, shooting 83.3% from the field while controlling both glasses and anchoring the paint.
                </p>
              </div>
            </div>

            {/* Coach Quote Box */}
            <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl text-xs text-slate-300">
              <p className="italic text-red-200">
                &ldquo;Andor Marai is the heartbeat of our interior attack. When he controls the paint with 24 and 11 against Sacramento, we are tough to beat.&rdquo;
              </p>
              <span className="text-[10px] font-mono text-slate-400 font-bold block mt-1">
                — William Walker, Head Coach • California Reds
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-3 border-t border-slate-800">
            <button
              onClick={() => onNavigateToNews('s4-g5-reds-stallions-s4')}
              className="flex-1 px-3 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-md flex items-center justify-center gap-1.5 transition-all cursor-pointer"
            >
              <Shield size={14} />
              <span>California G5 Recap</span>
            </button>
            <button
              onClick={() => onSelectTeam?.('california-reds')}
              className="px-3 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs rounded-xl flex items-center gap-1 transition-all cursor-pointer"
            >
              <Users size={13} className="text-amber-400" />
              <span>Roster</span>
            </button>
          </div>
        </div>
      </div>

      {/* Week 1 Honorable Mentions Bar */}
      <div className="bg-slate-950/90 border border-slate-800 rounded-2xl p-4 space-y-3 relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-xs font-mono font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
            <Star size={14} className="fill-amber-400" /> WEEK 1 HONORABLE MENTIONS
          </span>
          <span className="text-[10px] font-mono text-slate-400">Oct 15 – Oct 21 Performances</span>
        </div>

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
              Poured in 25 points (6-6 FT) to spearhead 26-16 fourth-quarter comeback over San Jose (59-53).
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1 border-t border-slate-800/80 relative z-10">
        <button
          onClick={() => onNavigateToNews('s4-potw-week-1-dean-marai')}
          className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
        >
          <BookOpen size={16} />
          <span>Read Full Player of the Week Article &amp; Voting Breakdown</span>
          <ChevronRight size={16} />
        </button>

        <span className="text-xs font-mono text-slate-400">
          Awarded by CCH League Office &amp; Awards Committee
        </span>
      </div>
    </div>
  );
};
