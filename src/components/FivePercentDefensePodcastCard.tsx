import React, { useState } from 'react';
import { Headphones, Sparkles, Shield, ChevronRight, Share2, Check, BookOpen, Users, Activity, Play, Radio, Volume2 } from 'lucide-react';
import { PodcastPlayerCard } from './PodcastPlayerCard';
import { TeamBadge } from './TeamBadge';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import aSaundersImg from '../assets/images/ASaunders.jpg';
import jGallowayImg from '../assets/images/JGalloway.png';

interface FivePercentDefensePodcastCardProps {
  onNavigateToNews: (articleId?: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

export const FivePercentDefensePodcastCard: React.FC<FivePercentDefensePodcastCardProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [copied, setCopied] = useState(false);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const baseUrl = window.location.href.split('#')[0];
    const directUrl = `${baseUrl}#news?article=s4-podcast-san-diego-impossible-five-percent-defense`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directUrl).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  const podcastAudioUrl = 'https://dn800307.us.archive.org/0/items/nba-2-k-24-2024-05-12-02-07-45/San_Diego_s_Impossible_Five_Percent_Defense.m4a';

  return (
    <div
      id="featured-podcast-card"
      className="bg-gradient-to-br from-amber-950/70 via-slate-950 to-slate-900 border-2 border-amber-500/60 p-5 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      {/* Header Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/30 pb-4 relative z-10">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="animate-pulse flex h-3 w-3 rounded-full bg-amber-500 shadow-lg shadow-amber-500/50" />
          <span className="text-xs font-black uppercase tracking-widest bg-amber-500 text-slate-950 px-3 py-1 rounded-md font-mono flex items-center gap-1.5 shadow-sm">
            <Headphones size={13} /> LATEST PODCAST &amp; FILM ROOM
          </span>
          <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/40">
            SEASON 4 SPECIAL BROADCAST
          </span>
          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30">
            3-0 DEFENSIVE CLINIC
          </span>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            id="share-podcast-btn"
            onClick={handleShare}
            className="px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/40 hover:border-amber-400 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md group/share"
            title="Share Episode / Copy Direct Link"
            aria-label="Share direct link to this podcast episode"
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
          <button
            onClick={() => onNavigateToNews('s4-podcast-san-diego-impossible-five-percent-defense')}
            className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
          >
            Read Film Notes →
          </button>
        </div>
      </div>

      {/* Main Grid: Visual / Film Thumbnail + Embedded Player & Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        {/* Left Column: Film Study Graphic & Quotes */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/40 shadow-xl bg-slate-950 group/img">
            <img
              src={ajHintonS4_1Img}
              alt="A.J. Hinton and San Diego Strykers Defense"
              className="w-full h-56 sm:h-64 object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            
            <div className="absolute top-3 left-3 flex items-center gap-1.5">
              <span className="px-2.5 py-1 rounded-lg bg-red-600/90 text-white font-mono font-black text-[10px] tracking-wider uppercase backdrop-blur-md shadow">
                5.3% 3PT ALLOWED
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-950/80 text-amber-300 font-mono font-bold text-[10px] border border-amber-500/30 backdrop-blur-md">
                +32.7 DIFF
              </span>
            </div>

            <div className="absolute bottom-3 left-3 right-3 space-y-1">
              <div className="flex items-center gap-2">
                <TeamBadge teamId="san-diego-strykers" size="sm" />
                <div>
                  <span className="text-[10px] font-mono uppercase text-amber-400 font-black">SAN DIEGO STRYKERS</span>
                  <h4 className="text-sm font-black text-white leading-tight">Suffocating Perimeter Blueprint</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Key Audio Takeaways Card */}
          <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2.5">
            <span className="text-[10px] font-mono font-black uppercase text-amber-400 flex items-center gap-1.5">
              <Sparkles size={12} /> Film Room Key Takeaways
            </span>
            <ul className="text-xs text-slate-300 space-y-2 font-medium">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">1-of-19 3PT (5.3%):</strong> Strykers ran Long Beach off the perimeter and eliminated corner kick-outs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Third-Quarter Blitzes:</strong> Outscored Long Beach 25-6 and Anaheim 24-4 (holding ANA to 1 made FG).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                <span><strong className="text-white">Two-Way Dominance:</strong> A.J. Hinton (4.0 SPG) and Johnny Galloway fueling an unstoppable fastbreak.</span>
              </li>
            </ul>
          </div>

          {/* Coach & Player Soundbites */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-slate-900/70 border border-slate-800 p-3 rounded-2xl space-y-1.5 flex items-start gap-2.5">
              <img src={aSaundersImg} alt="Adam Saunders" className="w-9 h-9 rounded-xl object-cover border border-amber-500/40 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] font-black text-white block truncate">Adam Saunders</span>
                <span className="text-[9px] font-mono text-amber-400 block truncate">Head Coach</span>
                <p className="text-[10px] text-slate-300 italic line-clamp-2 mt-1 leading-snug">&ldquo;Defense is our bedrock.&rdquo;</p>
              </div>
            </div>
            <div className="bg-slate-900/70 border border-slate-800 p-3 rounded-2xl space-y-1.5 flex items-start gap-2.5">
              <img src={jGallowayImg} alt="Johnny Galloway" className="w-9 h-9 rounded-xl object-cover border border-amber-500/40 shrink-0" />
              <div className="min-w-0">
                <span className="text-[10px] font-black text-white block truncate">Johnny Galloway</span>
                <span className="text-[9px] font-mono text-amber-400 block truncate">Defensive Anchor</span>
                <p className="text-[10px] text-slate-300 italic line-clamp-2 mt-1 leading-snug">&ldquo;Contest every single shot.&rdquo;</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Exhaustive Player & Stat Metrics */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider flex items-center gap-1">
                <Radio size={12} className="animate-pulse text-red-400" /> OFFICIAL AUDIO PODCAST
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-[10px] font-mono text-slate-400 font-bold">CCH Media Network</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              San Diego&apos;s Impossible Five Percent Defense &amp; The Anatomy of a Lockdown Contender
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              An exhaustive film breakdown of how Adam Saunders and the Strykers engineered an historically stifling perimeter defense—holding opponents to an unfathomable 5% from deep, unleashing consecutive 25-6 and 24-4 third-quarter blitzes, and turning stops into instant offense.
            </p>
          </div>

          {/* Interactive Full Audio Podcast Player */}
          <div className="bg-slate-950/90 rounded-2xl border-2 border-amber-500/40 p-1 shadow-xl">
            <PodcastPlayerCard
              audioUrl={podcastAudioUrl}
              podcastInfo={{
                episodeTitle: "San Diego's Impossible Five Percent Defense",
                broadcastBy: 'CCH Media Network • Official Film Room Podcast',
                duration: 'Official Audio Podcast',
                description: 'Tactical film analysis of San Diego\'s 3-0 start: holding opponents to 5.3% from 3PT range (1-of-19 vs Long Beach), consecutive 25-6 & 24-4 quarter blitzes, and pairing elite team rotations with A.J. Hinton\'s MVP scoring.',
              }}
            />
          </div>

          {/* 4 Key Tactical Stat Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Opponent 3PT%</span>
              <span className="text-xl sm:text-2xl font-black text-red-400 font-mono">5.3%</span>
              <span className="text-[9px] text-slate-400 block truncate">1/19 vs. Long Beach</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">3rd Qtr Blitz</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 font-mono">24-4</span>
              <span className="text-[9px] text-slate-400 block truncate">1 Made FG vs. ANA</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Opponent PPG</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">47.3</span>
              <span className="text-[9px] text-slate-400 block truncate">#1 in Cali Hoops</span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center space-y-0.5">
              <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Hinton Steals</span>
              <span className="text-xl sm:text-2xl font-black text-sky-400 font-mono">4.0</span>
              <span className="text-[9px] text-slate-400 block truncate">SPG (League Leader)</span>
            </div>
          </div>

          {/* Quick Action Navigation CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-800">
            <button
              onClick={() => onNavigateToNews('s4-podcast-san-diego-impossible-five-percent-defense')}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Read Full Film Breakdown</span>
              <ChevronRight size={16} />
            </button>
            <button
              onClick={() => onSelectTeam ? onSelectTeam('san-diego-strykers') : (onNavigateToTab && onNavigateToTab('rosters'))}
              className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Users size={16} className="text-amber-400" />
              <span>View Strykers Roster</span>
            </button>
            <button
              onClick={() => onNavigateToTab && onNavigateToTab('standings')}
              className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
            >
              <Activity size={16} className="text-amber-400" />
              <span>View S4 Standings</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
