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
  Award,
  ExternalLink
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import { PodcastPlayerCard } from './PodcastPlayerCard';
import rjRush1Img from '../assets/images/RJRush1.png';
import hintonS4G1Img from '../assets/images/HintonS4G1.png';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import sjAtFre1Img from '../assets/images/SJatFREs4_1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';

interface OpeningDayRecapCardProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
}

export const OpeningDayRecapCard: React.FC<OpeningDayRecapCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
}) => {
  // Default to game6 (the latest game) or user toggle
  const [selectedGame, setSelectedGame] = useState<'game1' | 'game2' | 'game3' | 'game4' | 'game5' | 'game6'>('game6');

  return (
    <div
      id="opening-day-recap-card"
      className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/50 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-all" />

      {/* Top Game Switcher & Status Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 relative z-10 border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setSelectedGame('game6')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game6'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/25 ring-2 ring-amber-400/40'
                : 'bg-amber-950/40 text-amber-300 border-amber-500/60 hover:bg-amber-500 hover:text-slate-950'
            }`}
          >
            <Flame size={14} className={selectedGame === 'game6' ? 'fill-slate-950 text-slate-950' : 'text-amber-400 fill-amber-400 animate-pulse'} />
            ★ Game 6 (LATEST): Strykers 85, Admirals 43
          </button>

          <button
            onClick={() => setSelectedGame('game5')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game5'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Shield size={13} className={selectedGame === 'game5' ? 'text-slate-950' : 'text-amber-400'} />
            Game 5: Reds 59, Stallions 44
          </button>

          <button
            onClick={() => setSelectedGame('game4')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game4'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Zap size={13} className={selectedGame === 'game4' ? 'text-slate-950' : 'text-amber-400'} />
            Game 4: Mad Dogs 59, Tigersharks 53
          </button>

          <button
            onClick={() => setSelectedGame('game3')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game3'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Flame size={13} className={selectedGame === 'game3' ? 'text-slate-950' : 'text-red-400'} />
            Game 3: Renegades 71, Admirals 49
          </button>

          <button
            onClick={() => setSelectedGame('game2')}
            className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border ${
              selectedGame === 'game2'
                ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md shadow-amber-500/20'
                : 'bg-slate-900/90 text-slate-300 border-slate-700 hover:border-amber-400 hover:text-white'
            }`}
          >
            <Sparkles size={13} className={selectedGame === 'game2' ? 'text-slate-950' : 'text-yellow-400'} />
            Game 2: Dynamics 77, Sabrewolves 55
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
            {selectedGame === 'game1' && 'The LBC Pit • Long Beach, CA'}
            {selectedGame === 'game2' && 'LA Arena • Los Angeles, CA'}
            {selectedGame === 'game3' && 'Oakland Arena • Oakland, CA'}
            {selectedGame === 'game4' && 'Fresno Center • Fresno, CA'}
            {selectedGame === 'game5' && 'LA Arena • Los Angeles, CA'}
            {selectedGame === 'game6' && 'Anaheim Arena • Anaheim, CA'}
          </span>

          <button
            onClick={() =>
              onNavigateToNews(
                selectedGame === 'game1'
                  ? 's4-g1-strykers-crush-vipers'
                  : selectedGame === 'game2'
                  ? 's4-g2-rush-dynamics-cruise-sabrewolves'
                  : selectedGame === 'game3'
                  ? 's4-g3-renegades-blitz-admirals'
                  : selectedGame === 'game4'
                  ? 's4-g4-tigersharks-mad-dogs-s4'
                  : selectedGame === 'game5'
                  ? 's4-g5-reds-stallions-s4'
                  : 's4-g6-hinton-strykers-rout-admirals'
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

      {/* ========================================================================= */}
      {/* GAME 3: OAKLAND RENEGADES 71, ANAHEIM ADMIRALS 49 */}
      {/* ========================================================================= */}
      {selectedGame === 'game3' && (
        <>
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> LATEST GAME FINAL
              </span>
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
                <Award size={12} /> 21-7 THIRD-QUARTER BLITZ
              </span>
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
                Season 4 Opening Night • Game 3
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Renegades&apos; Third-Quarter Blitz Sinks Admirals, 71-49 Behind Jamar Dean&apos;s 26 Points
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Oakland comes out of halftime with suffocating perimeter pressure and erupts for 21 points while holding Anaheim to just 7 in a decisive 22-point victory at Oakland Arena.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Left Column: Big Standout Photo + Efficiency Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={jamarDean1Img}
                    alt="Jamar Dean Season 4 Game 3"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      Jamar Dean • 26 PTS, 3 REB, 2 STL (8-12 FG, 7-8 FT)
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/50 font-black">
                        ★ Player of the Game: Unstoppable Downhill Attack
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Milestone Callout Box */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-3.5 flex items-center gap-4 transition-all shadow-lg">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Shield size={24} />
                </div>
                <div className="space-y-1 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <span className="font-black text-white font-mono text-xs block">Oakland 2-3 Matchup Zone Dominance</span>
                  <p className="text-slate-400 text-xs leading-snug">
                    Oakland held Anaheim to 36.2% shooting and won the rebounding margin while Joshua Bowen (11 PTS, 6 REB, 2 BLK) and Alonzo Reece (10 PTS, 4 AST) controlled the paint.
                  </p>
                </div>
              </div>

              {/* YouTube Video Broadcast Player */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-red-500/40 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-lg">
                <div className="w-full sm:w-56 aspect-video shrink-0 rounded-xl overflow-hidden bg-black border-2 border-red-500/40 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dT8Kop4dOxo?si=1cZFfuDOY1FHwffO"
                    title="YouTube video player - Admirals vs Renegades Season 4 Game 3"
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
                    Watch the complete match replay featuring Jamar Dean&apos;s 26-point masterclass and the Renegades&apos; 21-7 third-quarter blitz at Oakland Arena.
                  </p>
                  <div className="pt-0.5 flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-bold flex items-center gap-1">
                      <Play size={10} className="fill-red-300" /> 1080p Replay
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=dT8Kop4dOxo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-0.5 transition-colors underline"
                    >
                      Open on YouTube <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scoreboard, Quarter-by-Quarter Table, Key Performers */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  {/* Admirals (Away) */}
                  <div
                    onClick={() => onSelectTeam?.('anaheim-admirals')}
                    className="flex items-center gap-2.5 cursor-pointer group/team"
                  >
                    <TeamBadge teamId="anaheim-admirals" size="md" />
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Admirals
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-1 • LOSS</span>
                    </div>
                  </div>

                  {/* Score Display */}
                  <div className="text-center px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      49 - 71
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

                  {/* Renegades (Home) */}
                  <div
                    onClick={() => onSelectTeam?.('oakland-renegades')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Renegades
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN (#1)</span>
                    </div>
                    <TeamBadge teamId="oakland-renegades" size="md" />
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
                          Admirals
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">14</td>
                        <td className="py-1.5 px-1.5 text-slate-300">13</td>
                        <td className="py-1.5 px-1.5 text-red-400 bg-amber-500/10 rounded">7</td>
                        <td className="py-1.5 px-1.5 text-slate-300">15</td>
                        <td className="py-1.5 px-1.5 font-black text-slate-300">49</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Renegades
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">18</td>
                        <td className="py-1.5 px-1.5 text-slate-300">19</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400 bg-amber-500/10 rounded">21</td>
                        <td className="py-1.5 px-1.5 text-slate-400">13</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">71</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[10px] font-mono text-amber-300/80 text-center mt-1.5">
                    ★ 3rd Quarter Blitz: Oakland outscored Anaheim 21-7 (led by up to 28 PTS)
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
                      <span className="font-bold text-white block">Jamar Dean (OAK)</span>
                      <span className="text-[10px] text-slate-400">8-12 FG, 7-8 FT, 2 STL</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">26 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Joshua Bowen (OAK)</span>
                      <span className="text-[10px] text-slate-400">5-8 FG, 2 BLK</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">11 PTS, 6 REB</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Kirk Tinsley (ADM)</span>
                      <span className="text-[10px] text-slate-400">4-7 3PT</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">14 PTS</span>
                  </div>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g3-renegades-blitz-admirals')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Game Recap</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => onSelectTeam?.('oakland-renegades')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Users size={14} className="text-amber-400" />
                  <span>Renegades Roster</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* GAME 2: LOS ANGELES DYNAMICS 77, SAN DIEGO SABREWOLVES 55 */}
      {/* ========================================================================= */}
      {selectedGame === 'game2' && (
        <>
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> OPENING NIGHT RECORD
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={rjRush1Img}
                    alt="R.J. Rush Season 4 Game 2"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

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

            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
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

                  <div className="text-center px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      55 - 77
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

                  <div
                    onClick={() => onSelectTeam?.('los-angeles-dynamics')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Dynamics
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN</span>
                    </div>
                    <TeamBadge teamId="los-angeles-dynamics" size="md" />
                  </div>
                </div>

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
                    ★ 2nd Quarter Surge: Dynamics outscored Sabrewolves 22-5 (80% FG)
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl space-y-2.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Zap size={12} className="text-amber-400" />
                  Key Performers &amp; Box Highlights
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">R.J. Rush (LA)</span>
                      <span className="text-[10px] text-slate-400">CCH Record • 14-14 FT, 9-14 FG</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">33 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Mo Alexander (LA)</span>
                      <span className="text-[10px] text-slate-400">9-9 FG (100%), 9 REB</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">20 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Kirk Barnes (SD)</span>
                      <span className="text-[10px] text-slate-400">6-12 FG, 4-4 FT</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">17 PTS</span>
                  </div>
                </div>
              </div>

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
      )}

      {/* ========================================================================= */}
      {/* GAME 1: SAN DIEGO STRYKERS 53, LONG BEACH VIPERS 35 */}
      {/* ========================================================================= */}
      {selectedGame === 'game1' && (
        <>
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

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            <div className="lg:col-span-7 space-y-4">
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

            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
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

                  <div className="text-center px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      53 - 35
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

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

      {/* ========================================================================= */}
      {/* GAME 4: FRESNO MAD DOGS 59, SAN JOSE TIGERSHARKS 53 */}
      {/* ========================================================================= */}
      {selectedGame === 'game4' && (
        <>
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> STUNNING COMEBACK
              </span>
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
                <Zap size={12} /> BOOMER: 25 PTS (6-6 FT)
              </span>
              <span className="px-2.5 py-0.5 bg-slate-800 text-slate-300 font-mono font-bold text-[11px] uppercase rounded-md">
                Season 4 Opening Night • Game 4
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Boomer Leads Mad Dogs&apos; Comeback Over Tigersharks, 59-53
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Fresno clamps down after falling behind 23-8 in the first quarter, outscoring San Jose 26-16 in the fourth to complete a dramatic Opening Night turnaround.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={sjAtFre1Img}
                    alt="San Jose Tigersharks vs Fresno Mad Dogs Season 4"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      Lloyd Boomer • 25 PTS, 6-6 FT • Al Sloan • 21 PTS (9-11 FG)
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/50 font-black">
                        ★ 19-24 Free Throws • 45-23 Second-Half Turnaround
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-3.5 flex items-center gap-4 transition-all shadow-lg">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Zap size={24} />
                </div>
                <div className="space-y-1 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <span className="font-black text-white font-mono text-xs block">Fresno Center Defensive Lockdown</span>
                  <p className="text-slate-400 text-xs leading-snug">
                    After trailing 23-8 after Q1, the Mad Dogs held San Jose to just 7 points in Q2 and 7 in Q3 before unleashing a 26-point fourth-quarter barrage led by Lloyd Boomer.
                  </p>
                </div>
              </div>

              {/* YouTube Video Broadcast Player */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-red-500/40 rounded-2xl p-3.5 flex flex-col sm:flex-row items-center gap-4 transition-all shadow-lg">
                <div className="w-full sm:w-56 aspect-video shrink-0 rounded-xl overflow-hidden bg-black border-2 border-red-500/40 shadow-lg relative">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/jOZHLsv44uw?si=-uW-g7sz9KPYCezp"
                    title="YouTube video player - Tigersharks vs Mad Dogs Season 4 Game 4"
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
                    Watch the complete match replay as Lloyd Boomer (25 PTS) and the Fresno Mad Dogs rally from an early 23-8 deficit with a 26-16 fourth-quarter comeback.
                  </p>
                  <div className="pt-0.5 flex items-center gap-2">
                    <span className="text-[10px] font-mono bg-red-500/20 text-red-300 px-2 py-0.5 rounded border border-red-500/30 font-bold flex items-center gap-1">
                      <Play size={10} className="fill-red-300" /> 1080p Replay
                    </span>
                    <a
                      href="https://www.youtube.com/watch?v=jOZHLsv44uw"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[10px] font-mono text-slate-400 hover:text-white flex items-center gap-0.5 transition-colors underline"
                    >
                      Open on YouTube <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  <div
                    onClick={() => onSelectTeam?.('san-jose-tigersharks')}
                    className="flex items-center gap-2.5 cursor-pointer group/team"
                  >
                    <TeamBadge teamId="san-jose-tigersharks" size="md" />
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Tigersharks
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-1 • LOSS</span>
                    </div>
                  </div>

                  <div className="text-center px-3.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                    <div className="text-2xl font-black font-mono text-amber-400">
                      53 - 59
                    </div>
                    <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                      FINAL
                    </span>
                  </div>

                  <div
                    onClick={() => onSelectTeam?.('fresno-mad-dogs')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Mad Dogs
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN</span>
                    </div>
                    <TeamBadge teamId="fresno-mad-dogs" size="md" />
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800">
                  <table className="w-full text-center text-xs font-mono">
                    <thead>
                      <tr className="text-slate-400 border-b border-slate-800">
                        <th className="py-1 px-1.5 text-left font-sans text-[11px] font-bold">Team</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q1</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q2</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400">Q3</th>
                        <th className="py-1 px-1.5 font-bold text-amber-400 bg-amber-500/10 rounded">Q4</th>
                        <th className="py-1 px-1.5 font-black text-white">T</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Tigersharks
                        </td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">23</td>
                        <td className="py-1.5 px-1.5 text-slate-300">7</td>
                        <td className="py-1.5 px-1.5 text-slate-300">7</td>
                        <td className="py-1.5 px-1.5 text-slate-300 bg-amber-500/10 rounded">16</td>
                        <td className="py-1.5 px-1.5 font-black text-slate-300">53</td>
                      </tr>
                      <tr>
                        <td className="py-1.5 px-1.5 text-left font-sans font-bold text-slate-200">
                          Mad Dogs
                        </td>
                        <td className="py-1.5 px-1.5 text-slate-300">8</td>
                        <td className="py-1.5 px-1.5 text-slate-300">6</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">19</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400 bg-amber-500/10 rounded">26</td>
                        <td className="py-1.5 px-1.5 font-black text-amber-400">59</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="text-[10px] font-mono text-amber-300/80 text-center mt-1.5">
                    ★ 4th Quarter Climax: Fresno outscored San Jose 26-16 to complete the comeback
                  </p>
                </div>
              </div>

              <div className="bg-slate-950 border border-slate-800 p-3.5 rounded-2xl space-y-2.5">
                <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1">
                  <Zap size={12} className="text-amber-400" />
                  Key Performers &amp; Box Highlights
                </span>

                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Lloyd Boomer (FRE)</span>
                      <span className="text-[10px] text-slate-400">Player of the Game • 6-6 FT</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">25 PTS, 9-22 FG</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Al Sloan (SJ)</span>
                      <span className="text-[10px] text-slate-400">9-11 FG (81.8%), 6 REB</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">21 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Albert Gill (SJ)</span>
                      <span className="text-[10px] text-slate-400">3-3 3PT (100%) in 10 MIN</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">9 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Free Throw Disparity</span>
                      <span className="text-[10px] text-slate-400">Fresno 19-24 FT (79%) vs SJ 3-3 FT (100%)</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">+16 FT Pts</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g4-tigersharks-mad-dogs-s4')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Game Recap</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => onSelectTeam?.('fresno-mad-dogs')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Users size={14} className="text-amber-400" />
                  <span>Mad Dogs Roster</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* GAME 5: CALIFORNIA REDS 59, SACRAMENTO STALLIONS 44 */}
      {/* ========================================================================= */}
      {selectedGame === 'game5' && (
        <>
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> OPENING NIGHT FINAL
              </span>
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
                <Award size={12} /> MARAI 24 PTS & 11 REB (10-12 FG)
              </span>
              <span className="px-2.5 py-0.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
                Season 4 • Game 5
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Marai, Rodman Lead Reds Past Defending Champion Stallions, 59-44
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              Andor Marai posts a masterclass 24 points and 11 rebounds on 83% shooting as the California Reds stifle Sacramento with 7 blocks and disciplined interior defense.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Left Column: Big Standout Photo + Efficiency Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={aMaraiS4_1Img}
                    alt="Andor Marai Season 4 Game 5"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      Andor Marai • 24 PTS, 11 REB, 2 BLK, 2 STL (10-12 FG)
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/50 font-black">
                        ★ Player of the Game: Dominant Interior Clinic
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Milestone Callout Box */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-3.5 flex items-center gap-4 transition-all shadow-lg">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Shield size={24} />
                </div>
                <div className="space-y-1 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <span className="font-black text-white font-mono text-xs block">Reds Frontcourt Stifles Defending Champs</span>
                  <p className="text-slate-400 text-xs leading-snug">
                    California held Sacramento to just 35.1% shooting (20-57 FG) and 13.3% from 3PT (2-15), while recording 18 assists on 26 made field goals with 7 blocked shots.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Scoreboard, Quarter-by-Quarter Table, Key Performers */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl space-y-3">
                <div className="flex items-center justify-between">
                  {/* Stallions (Away) */}
                  <div
                    onClick={() => onSelectTeam?.('sacramento-stallions')}
                    className="flex items-center gap-2.5 cursor-pointer group/team"
                  >
                    <TeamBadge teamId="sacramento-stallions" size="md" />
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Stallions
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-1 • LOSS</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                      FINAL SCORE
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-slate-400">44</span>
                      <span className="text-slate-600 font-bold">-</span>
                      <span className="text-2xl sm:text-3xl font-black font-mono text-amber-400">59</span>
                    </div>
                  </div>

                  {/* Reds (Home) */}
                  <div
                    onClick={() => onSelectTeam?.('california-reds')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Reds
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">1-0 • WIN</span>
                    </div>
                    <TeamBadge teamId="california-reds" size="md" />
                  </div>
                </div>

                {/* Quarter By Quarter Table */}
                <div className="border-t border-slate-800/80 pt-2.5">
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-[11px] text-slate-400 font-bold mb-1">
                    <span className="text-left">TEAM</span>
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                    <span className="text-white">T</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-xs py-1 border-b border-slate-800/50 text-slate-300">
                    <span className="text-left font-bold text-slate-300">SAC</span>
                    <span>8</span>
                    <span>10</span>
                    <span className="text-amber-300 font-bold">18</span>
                    <span>8</span>
                    <span className="font-black text-slate-300">44</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-xs py-1 text-amber-300 bg-amber-500/5 rounded font-bold">
                    <span className="text-left font-black text-amber-400">CAL</span>
                    <span className="font-black text-emerald-400">14</span>
                    <span className="font-black text-emerald-400">16</span>
                    <span>15</span>
                    <span className="font-black text-emerald-400">14</span>
                    <span className="font-black text-amber-400 text-sm">59</span>
                  </div>
                </div>

                {/* Key Performers Box */}
                <div className="border-t border-slate-800/80 pt-2 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[10px] uppercase font-bold">
                    <span>Key Performer</span>
                    <span>Key Statline</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-amber-500/30">
                    <div>
                      <span className="font-black text-amber-300 block">Andor Marai (CAL)</span>
                      <span className="text-[10px] text-slate-400">10-12 FG (83.3%), 11 REB, 2 BLK</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">24 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Donald Rodman (CAL)</span>
                      <span className="text-[10px] text-slate-400">5-8 FG, 7 REB, 2 BLK</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">11 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Adrian Pognotti (SAC)</span>
                      <span className="text-[10px] text-slate-400">6-13 FG, 6 REB, 2 BLK</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">14 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Reds Interior Defense</span>
                      <span className="text-[10px] text-slate-400">Held Stallions to 35.1% FG & 13.3% 3PT</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">7 BLK</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g5-reds-stallions-s4')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Game Recap</span>
                  <ChevronRight size={15} />
                </button>
                <button
                  onClick={() => onSelectTeam?.('california-reds')}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <Users size={14} className="text-amber-400" />
                  <span>Reds Roster</span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ========================================================================= */}
      {/* GAME 6: SAN DIEGO STRYKERS 85, ANAHEIM ADMIRALS 43 */}
      {/* ========================================================================= */}
      {selectedGame === 'game6' && (
        <>
          <div className="space-y-2 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 bg-red-600/90 text-white font-mono font-black text-[11px] uppercase tracking-wider rounded-md shadow-sm flex items-center gap-1">
                <Flame size={12} /> LATEST GAME FINAL
              </span>
              <span className="px-2.5 py-0.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-black text-[11px] uppercase rounded-md flex items-center gap-1">
                <Award size={12} /> HINTON 30 PTS & 8 3PM
              </span>
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-bold text-[11px] uppercase rounded-md">
                Season 4 • Game 6 (Oct 20)
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
              Hinton Erupts for 30 as Strykers Demolish Admirals, 85-43
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              A 24-4 third-quarter blitz powers the San Diego Strykers to an 85-43 demolition of Anaheim at Anaheim Arena as reigning MVP A.J. Hinton sinks 8 three-pointers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
            {/* Left Column: Big Standout Photo + Efficiency Highlights */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/60 bg-slate-950 group/photo">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center bg-black overflow-hidden">
                  <img
                    src={ajHintonS4_1Img}
                    alt="A.J. Hinton Season 4 Game 6"
                    className="w-full h-full object-cover object-center group-hover/photo:scale-[1.03] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/20 to-transparent pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 text-left space-y-1 z-10">
                    <p className="text-sm sm:text-base font-black text-white font-mono drop-shadow-md">
                      A.J. Hinton • 30 PTS, 4 STL, 3 AST (11-16 FG, 8-11 3PT)
                    </p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono bg-amber-500/30 text-amber-300 px-2 py-0.5 rounded border border-amber-500/50 font-black">
                        ★ Player of the Game: 8 Three-Pointers from Everywhere
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Game Milestone Callout Box */}
              <div className="bg-slate-950/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-3.5 flex items-center gap-4 transition-all shadow-lg">
                <div className="p-3 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20 shrink-0">
                  <Zap size={24} />
                </div>
                <div className="space-y-1 text-xs text-slate-300 min-w-0 flex-1 text-left">
                  <span className="font-black text-white font-mono text-xs block">Strykers 24-4 Third Quarter Blitz</span>
                  <p className="text-slate-400 text-xs leading-snug">
                    San Diego held Anaheim to just one made field goal in the 3rd quarter while raining 15 three-pointers (55.6% 3PT) and dishing out 24 assists on 32 field goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Scoreboard, Quarter-by-Quarter Table, Key Performers */}
            <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
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
                      <span className="text-[10px] font-mono text-emerald-400 font-bold">2-0 • WIN</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                      FINAL SCORE
                    </span>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-mono text-amber-400">85</span>
                      <span className="text-slate-600 font-bold">-</span>
                      <span className="text-2xl sm:text-3xl font-black font-mono text-slate-400">43</span>
                    </div>
                  </div>

                  {/* Admirals (Home) */}
                  <div
                    onClick={() => onSelectTeam?.('anaheim-admirals')}
                    className="flex items-center gap-2.5 cursor-pointer group/team text-right"
                  >
                    <div>
                      <h4 className="text-sm font-black text-white group-hover/team:text-amber-400 transition-colors">
                        Admirals
                      </h4>
                      <span className="text-[10px] font-mono text-red-400 font-bold">0-2 • LOSS</span>
                    </div>
                    <TeamBadge teamId="anaheim-admirals" size="md" />
                  </div>
                </div>

                {/* Quarter By Quarter Table */}
                <div className="border-t border-slate-800/80 pt-2.5">
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-[11px] text-slate-400 font-bold mb-1">
                    <span className="text-left">TEAM</span>
                    <span>Q1</span>
                    <span>Q2</span>
                    <span>Q3</span>
                    <span>Q4</span>
                    <span className="text-white">T</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-xs py-1 text-amber-300 bg-amber-500/5 rounded font-bold">
                    <span className="text-left font-black text-amber-400">SD</span>
                    <span className="font-black text-emerald-400">20</span>
                    <span className="font-black text-emerald-400">23</span>
                    <span className="font-black text-emerald-400">24</span>
                    <span className="font-black text-emerald-400">18</span>
                    <span className="font-black text-amber-400 text-sm">85</span>
                  </div>
                  <div className="grid grid-cols-6 gap-1 text-center font-mono text-xs py-1 border-t border-slate-800/50 text-slate-300">
                    <span className="text-left font-bold text-slate-300">ANA</span>
                    <span>17</span>
                    <span>9</span>
                    <span className="text-red-400 font-black">4</span>
                    <span>13</span>
                    <span className="font-black text-slate-300">43</span>
                  </div>
                </div>

                {/* Key Performers Box */}
                <div className="border-t border-slate-800/80 pt-2 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-slate-400 font-mono text-[10px] uppercase font-bold">
                    <span>Key Performer</span>
                    <span>Key Statline</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-amber-500/30">
                    <div>
                      <span className="font-black text-amber-300 block">A.J. Hinton (SD)</span>
                      <span className="text-[10px] text-slate-400">8-11 3PT (72.7%), 4 STL</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">30 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">DeAnte Gray (SD)</span>
                      <span className="text-[10px] text-slate-400">6-10 FG, 6 REB, 6 AST</span>
                    </div>
                    <span className="font-black text-emerald-400 text-sm">15 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Stephan Sirven (ANA)</span>
                      <span className="text-[10px] text-slate-400">5-18 FG, 4-4 FT, 2 AST</span>
                    </div>
                    <span className="font-black text-slate-300 text-sm">15 PTS</span>
                  </div>

                  <div className="flex items-center justify-between bg-slate-900/90 p-2 rounded-xl border border-slate-800">
                    <div>
                      <span className="font-bold text-white block">Strykers 3-Point Barrage</span>
                      <span className="text-[10px] text-slate-400">15-of-27 3PT (55.6%) • 24 Assists</span>
                    </div>
                    <span className="font-black text-amber-400 text-sm">15 3PM</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <button
                  onClick={() => onNavigateToNews('s4-g6-hinton-strykers-rout-admirals')}
                  className="flex-1 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={15} />
                  <span>Read Full Game Recap</span>
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
        </>
      )}
    </div>
  );
};
