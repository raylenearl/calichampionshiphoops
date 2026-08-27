import React, { useState } from 'react';
import {
  Trophy,
  Play,
  Tv,
  ChevronRight,
  BookOpen,
  Sparkles,
  Shield,
  Zap,
  Activity,
  Flame,
  Clock,
  MapPin,
  Users,
  Award
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import { PodcastPlayerCard } from './PodcastPlayerCard';
import rjRush1Img from '../assets/images/RJRush1.png';
import hintonS4G1Img from '../assets/images/HintonS4G1.png';

interface OpeningDayRecapCardProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
}

export const OpeningDayRecapCard: React.FC<OpeningDayRecapCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
}) => {
  // Default to game 2 (Latest game)
  const [selectedGame, setSelectedGame] = useState<'game2' | 'game1'>('game2');

  return (
    <div
      id="opening-day-recap-card"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/50 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-all" />

      {/* Top Game Switcher & Status Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedGame('game2')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game2'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Flame size={14} className={selectedGame === 'game2' ? 'fill-slate-950' : 'text-amber-400'} />
            ★ Latest Game: Dynamics 77, Sabrewolves 55
          </button>

          <button
            onClick={() => setSelectedGame('game1')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game1'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Tv size={13} className={selectedGame === 'game1' ? 'text-slate-950' : 'text-slate-400'} />
            Game 1: Strykers 53, Vipers 35
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-slate-400 font-mono text-xs hidden md:flex items-center gap-1">
            <MapPin size={13} className="text-amber-400" />
            {selectedGame === 'game2' ? 'Los Angeles, CA • Dynamics Arena' : 'The LBC Pit • Long Beach, CA'}
          </span>

          <button
            onClick={() =>
              onNavigateToNews(
                selectedGame === 'game2'
                  ? 's4-g2-rush-dynamics-cruise-sabrewolves'
                  : 's4-g1-strykers-crush-vipers'
              )
            }
            className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0 self-start sm:self-auto"
          >
            <BookOpen size={14} />
            <span>Full Article in News</span>
            <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {selectedGame === 'game2' ? (
        /* ========================================================================= */
        /* GAME 2 RECAP: LATEST HEADLINE (Dynamics 77, Sabrewolves 55) */
        /* ========================================================================= */
        <>
          {/* Headline & Subtitle */}
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> LATEST GAME FINAL
              </span>
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
                <Award size={12} /> CCH ALL-TIME RECORD: 14/14 FT
              </span>
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
                Season 4 Opening Night • Game 2
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Rookie R.J. Rush Sets CCH Record with 14-of-14 Free Throws, Drops 33 as Dynamics Cruise 77-55
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              A historic, record-breaking shooting clinic and a 22-5 second-quarter blitz propel the Los Angeles Dynamics to a commanding victory over the San Diego Sabrewolves.
            </p>
          </div>

          {/* Main Content Grid: Hero Photo + Stat Showcase on Left, Scoreboard & Box on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Left Column: Big Standout Photo + Efficiency Highlights */}
            <div className="lg:col-span-7 space-y-4">
              {/* MAIN HERO PHOTO */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={rjRush1Img}
                    alt="R.J. Rush Season 4 Game 2"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  {/* Subtle Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Bottom Caption Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      R.J. Rush • 33 PTS, 2 BLK, 9-14 FG, 14-14 FT
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/50 font-black">
                        ★ New League Record: Most Free Throws Made (14/14, 100%)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* COMPANION YOUTUBE VIDEO BROADCAST */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-red-500/40 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-lg">
                <div className="w-full sm:w-56 aspect-video shrink-0 rounded-xl overflow-hidden bg-black border-2 border-red-500/40 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/vrro7eyGMMk?si=UrCRkjRO9DNCVVeh"
                    title="YouTube video player - Dynamics vs Sabrewolves Season 4 Game 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <Tv size={14} className="text-red-400" />
                    <span className="font-black text-white font-mono text-xs">Official Full Game Video Broadcast</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-snug">
                    Watch the full game replay featuring rookie R.J. Rush&apos;s record-setting 14-of-14 free throw display and the Dynamics&apos; 22-5 second quarter run.
                  </p>
                  <div className="pt-0.5 flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-bold flex items-center gap-1">
                      <Play size={10} className="fill-red-300" /> 1080p Replay
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Full Game Coverage
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scoreboard, Quarter-by-Quarter Table, Key Performers */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {/* Match Scoreboard Header */}
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  {/* Sabrewolves (Away) */}
                  <div
                    onClick={() => onSelectTeam?.('san-diego-sabrewolves')}
                    className="flex items-center gap-2.5 cursor-pointer group/team"
                  >
                    <TeamBadge teamId="san-diego-sabrewolves" size="md" />
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Sabrewolves
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-1 • LOSS</span>
                    </div>
                  </div>

                  {/* Score Display */}
                  <div className="text-center px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      55 - 77
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

                  {/* Dynamics (Home) */}
                  <div
                    onClick={() => onSelectTeam?.('los-angeles-dynamics')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Dynamics
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN (#1)</span>
                    </div>
                    <TeamBadge teamId="los-angeles-dynamics" size="md" />
                  </div>
                </div>

                {/* Quarter-by-Quarter Line Score */}
                <div className="pt-2 border-t border-slate-800">
                  <table className="w-full text-center text-xs font-mono">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-800">
                        <th className="py-1 px-1.5 text-left font-sans text-[11px] font-bold">Team</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q1</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400 bg-amber-500/10 rounded">Q2</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q3</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q4</th>
                        <th className="py-1 px-1.5 font-black text-white">T</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Sabrewolves
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">15</td>
                        <td className="py-1.5 px-1.5 text-red-400 bg-amber-500/10 rounded">5</td>
                        <td className="py-1.5 px-1.5 text-slate-300">16</td>
                        <td className="py-1.5 px-1.5 text-slate-300">19</td>
                        <td className="py-1.5 px-1.5 font-black text-slate-300">55</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Dynamics
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">19</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400 bg-amber-500/10 rounded">22</td>
                        <td className="py-1.5 px-1.5 text-slate-300">23</td>
                        <td className="py-1.5 px-1.5 text-slate-400">13</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">77</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[10px] font-mono text-amber-300/80 text-center mt-1.5">
                    ★ 2nd Quarter Surge: Dynamics 22-5 run (80% FG) pushed lead to 31 PTS
                  </p>
                </div>
              </div>

              {/* Key Performers Box */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl space-y-2.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Zap size={12} className="text-amber-400" />
                  Key Performers &amp; Box Highlights
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-amber-500/30">
                    <div>
                      <span className="font-bold text-white block">R.J. Rush (LA)</span>
                      <span className="text-[10px] text-amber-400">★ CCH Record: 14-14 FT (100%), 2 BLK</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">33 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Mo Alexander (LA)</span>
                      <span className="text-[10px] text-emerald-400">9-9 FG (100%), 2 AST, 2 STL</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">20 PTS, 9 REB</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Kirk Barnes (SD)</span>
                      <span className="text-[10px] text-slate-400">6-12 FG, 4-4 FT</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">17 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Andre Creek (SD)</span>
                      <span className="text-[10px] text-slate-400">6-8 FG, 4 STL</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">13 PTS, 5 REB</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g2-rush-dynamics-cruise-sabrewolves')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Game Recap</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => onSelectTeam?.('los-angeles-dynamics')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Users size={14} className="text-amber-400" />
                  <span>Dynamics Roster</span>
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        /* ========================================================================= */
        /* GAME 1 RECAP: Strykers 53, Vipers 35 (Video & Podcast Available) */
        /* ========================================================================= */
        <>
          {/* Headline & Subtitle */}
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> Opening Day Opener
              </span>
              <span className="px-2.5 py-0.5 bg-red-500/20 text-red-400 border border-red-500/30 font-mono font-bold text-[11px] uppercase rounded-md flex items-center gap-1">
                <Tv size={12} /> Game 1 Broadcast &amp; Podcast
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Strykers Crush Vipers Behind Dominant 3rd Quarter, Win 53-35
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              A suffocating defensive clinic and a 25-6 third-quarter blitz propel the Strykers to a resounding 53-35 victory over the Vipers at The LBC Pit.
            </p>
          </div>

          {/* Main Content Grid: Hero Photo + Video on Left, Scoreboard & Stats on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Left Column: Big Standout Photo + Downsized Companion Video Player */}
            <div className="lg:col-span-7 space-y-4">
              {/* MAIN HERO PHOTO */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={hintonS4G1Img}
                    alt="A.J. Hinton Season 4 Game 1"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      A.J. Hinton • 15 PTS, 6 REB, 4 STL, 2 BLK
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/25 text-amber-300 px-2 py-0.5 rounded border border-amber-500/40 font-bold">
                        Defensive Masterclass
                      </span>
                      <span className="text-[11px] font-mono text-slate-300">
                        Held Vipers to 29% FG &amp; 1-19 3PT at The LBC Pit
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* DOWNSIZED COMPANION YOUTUBE VIDEO BOX */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-red-500/40 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-lg">
                <div className="w-full sm:w-56 aspect-video shrink-0 rounded-xl overflow-hidden bg-black border-2 border-red-500/40 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/LqS71EzeFUc?si=NlaEW8hZMWHBcE8v"
                    title="YouTube video player - Strykers vs Vipers Season 4 Game 1"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-1.5 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <div className="flex items-center gap-1.5">
                    <Tv size={14} className="text-red-400" />
                    <span className="font-black text-white font-mono text-xs">Official Full Game Video Broadcast</span>
                  </div>
                  <p className="text-slate-400 text-xs leading-snug">
                    Relive the complete broadcast including the decisive 25-6 third-quarter surge and postgame breakdown.
                  </p>
                  <div className="pt-0.5 flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-bold flex items-center gap-1">
                      <Play size={10} className="fill-red-300" /> 1080p Replay
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">
                      Full Game Coverage
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scoreboard, Quarter-by-Quarter Table, Key Performers */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              {/* Match Scoreboard Header */}
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  {/* Strykers (Away) */}
                  <div
                    onClick={() => onSelectTeam?.('san-diego-strykers')}
                    className="flex items-center gap-2.5 cursor-pointer group/team"
                  >
                    <TeamBadge teamId="san-diego-strykers" size="md" />
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Strykers
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN</span>
                    </div>
                  </div>

                  {/* Score Display */}
                  <div className="text-center px-3 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      53 - 35
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

                  {/* Vipers (Home) */}
                  <div
                    onClick={() => onSelectTeam?.('long-beach-vipers')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Vipers
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-1 • LOSS</span>
                    </div>
                    <TeamBadge teamId="long-beach-vipers" size="md" />
                  </div>
                </div>

                {/* Quarter-by-Quarter Line Score */}
                <div className="pt-2 border-t border-slate-800">
                  <table className="w-full text-center text-xs font-mono">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-800">
                        <th className="py-1 px-1.5 text-left font-sans text-[11px] font-bold">Team</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q1</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q2</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400 bg-amber-500/10 rounded">Q3</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q4</th>
                        <th className="py-1 px-1.5 font-black text-white">T</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Strykers
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">8</td>
                        <td className="py-1.5 px-1.5 text-slate-300">17</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400 bg-amber-500/10 rounded">25</td>
                        <td className="py-1.5 px-1.5 text-slate-400">3</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">53</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Vipers
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">5</td>
                        <td className="py-1.5 px-1.5 text-slate-300">7</td>
                        <td className="py-1.5 px-1.5 text-red-400 bg-amber-500/10 rounded">6</td>
                        <td className="py-1.5 px-1.5 text-slate-300">17</td>
                        <td className="py-1.5 px-1.5 font-black text-slate-300">35</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[10px] font-mono text-amber-300/80 text-center mt-1.5">
                    ★ 3rd Quarter Blitz: Strykers outscored Vipers 25-6 (stretched lead to 33 PTS)
                  </p>
                </div>
              </div>

              {/* Key Performers Box */}
              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl space-y-2.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Zap size={12} className="text-amber-400" />
                  Key Performers &amp; Box Highlights
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">A.J. Hinton (SD)</span>
                      <span className="text-[10px] text-slate-400">Game High • 4 STL, 2 BLK</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">15 PTS, 6 REB</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">DeAnte Gray (SD)</span>
                      <span className="text-[10px] text-slate-400">5-7 FG off the bench</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">13 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Maxwell Mayo (LB)</span>
                      <span className="text-[10px] text-slate-400">5-11 FG</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">11 PTS, 2 REB</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g1-strykers-crush-vipers')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Recap</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => onSelectTeam?.('san-diego-strykers')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Users size={14} className="text-amber-400" />
                  <span>Strykers Roster</span>
                </button>
              </div>
            </div>
          </div>

          {/* Official Game Recap Podcast Player */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 pt-2 border-t border-slate-800/80"
          >
            <PodcastPlayerCard
              audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Why_the_Strykers_box_score_lies.m4a"
              title="Game Recap Podcast: Why the Strykers Box Score Lies"
              subtitle="Official CCH Season 4 Game 1 Breakdown • Defensive clinic, third-quarter surge, and film review"
              compact={false}
            />
          </div>
        </>
      )}
    </div>
  );
};
