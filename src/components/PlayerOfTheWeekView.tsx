import React, { useState } from 'react';
import { Award, Star, Flame, Calendar, ChevronRight, Shield, Zap, BookOpen, Users, Sparkles, Check, Share2, Filter, Trophy, ArrowUpRight, X } from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import { POTW_WEEKS, ALL_TIME_POTW_LEADERS, POTWWeek } from '../data/potwData';
import jamarDean1Img from '../assets/images/JamarDean1.png';
import aMaraiS4_1Img from '../assets/images/AMaraiS4_1.png';
import ajHintonS4_1Img from '../assets/images/AJHintonS4_1.png';
import hinton42Img from '../assets/images/Hinton42_s4vsCAL.png';
import bowenPOTWImg from '../assets/images/BowenPOTW.png';
import hintonPOTWImg from '../assets/images/HintonPOTW.png';

const getTeamShortName = (team: string): string => {
  if (team.toLowerCase().includes('mad dogs')) return 'Mad Dogs';
  return team.split(' ').pop() || team;
};

interface PlayerOfTheWeekViewProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
  onNavigateToTab?: (tab: string) => void;
}

export const PlayerOfTheWeekView: React.FC<PlayerOfTheWeekViewProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab
}) => {
  const [selectedWeekId, setSelectedWeekId] = useState<string>('s4-week-2');
  const [copied, setCopied] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<{ src: string; title: string } | null>(null);

  const activeWeek: POTWWeek = POTW_WEEKS.find((w) => w.id === selectedWeekId) || POTW_WEEKS[0];

  const handleShare = () => {
    const baseUrl = window.location.href.split('#')[0];
    const directUrl = `${baseUrl}#potw?week=${selectedWeekId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directUrl).catch(() => {});
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Top Banner & Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/40 border-2 border-amber-500/60 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 bg-amber-500 text-slate-950 font-mono font-black text-xs uppercase tracking-wider rounded-lg shadow flex items-center gap-1.5">
                <Award size={14} className="fill-slate-950" /> OFFICIAL LEAGUE AWARDS
              </span>
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold text-xs uppercase rounded-lg flex items-center gap-1">
                <Star size={13} className="fill-amber-300" /> SEASON 4 HONORS
              </span>
              <span className="px-3 py-1 bg-sky-500/20 text-sky-300 border border-sky-500/30 font-mono font-bold text-xs uppercase rounded-lg">
                WEEKLY ARCHIVE &amp; TRACKER
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Player of the Week Awards
            </h1>
            <p className="text-sm sm:text-base text-slate-300 font-medium leading-relaxed">
              Every Monday, the Cali Championship Hoops League Office recognizes the premier individual performances across Northern and Southern Cali, evaluating game efficiency, team record, clutch shotmaking, and defensive dominance.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={handleShare}
              className="px-4 py-2.5 rounded-2xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-amber-500/40 text-xs sm:text-sm font-mono font-bold flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              {copied ? (
                <>
                  <Check size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Direct Link Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={16} className="text-amber-400" />
                  <span>Share Awards</span>
                </>
              )}
            </button>
            {activeWeek.newsArticleId && (
              <button
                onClick={() => onNavigateToNews(activeWeek.newsArticleId!)}
                className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
              >
                <BookOpen size={16} />
                <span>Read Official News Story</span>
                <ChevronRight size={16} />
              </button>
            )}
          </div>
        </div>

        {/* Week Selector Chips */}
        <div className="pt-4 border-t border-slate-800/80 relative z-10 flex flex-wrap items-center gap-2.5">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1 mr-1">
            <Calendar size={14} className="text-amber-400" /> Select Slate:
          </span>
          {POTW_WEEKS.map((week) => {
            const isSelected = week.id === selectedWeekId;
            const isAwarded = week.status === 'awarded';
            const northPlayer = (week.northernWinner || week.easternWinner)?.player || 'TBD';
            const southPlayer = (week.southernWinner || week.westernWinner)?.player || 'TBD';
            return (
              <button
                key={week.id}
                onClick={() => setSelectedWeekId(week.id)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isSelected
                    ? 'bg-amber-500 text-slate-950 border-amber-400 shadow-md scale-105'
                    : isAwarded
                    ? 'bg-slate-900/90 text-slate-200 border-slate-700 hover:border-amber-500/50 hover:bg-slate-800'
                    : 'bg-slate-950/60 text-slate-500 border-slate-800 hover:border-slate-700'
                }`}
              >
                <span>Week {week.weekNumber} ({week.dateRange})</span>
                {isAwarded ? (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-black ${isSelected ? 'bg-slate-950 text-amber-400' : 'bg-amber-500/20 text-amber-300'}`}>
                    {northPlayer.split(' ').pop()} &amp; {southPlayer.split(' ').pop()}
                  </span>
                ) : (
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-normal">
                    Upcoming
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Showcase Section for the Selected Week */}
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-black text-amber-400 uppercase">
                {activeWeek.dateRange}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs font-mono text-slate-400 font-bold">
                Season 4 • Week {activeWeek.weekNumber}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-1">
              {activeWeek.headline}
            </h2>
          </div>
          {activeWeek.newsArticleId && (
            <button
              onClick={() => onNavigateToNews(activeWeek.newsArticleId!)}
              className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0"
            >
              <span>Full Release &amp; Quotes</span>
              <ArrowUpRight size={15} />
            </button>
          )}
        </div>

        {/* Dual Spotlight Cards */}
        {(() => {
          const northWinner = activeWeek.northernWinner || activeWeek.easternWinner;
          const southWinner = activeWeek.southernWinner || activeWeek.westernWinner;
          return (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ========================================================================= */}
              {/* NORTHERN CALI SPOTLIGHT CARD */}
              {/* ========================================================================= */}
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-sky-950/40 border-2 border-sky-500/50 hover:border-sky-400 rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-sky-500/20 transition-all" />

                {/* Conference Badge & Team Info */}
                <div className="flex items-center justify-between border-b border-sky-500/30 pb-4 relative z-10">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-500/20 border border-sky-400/40 text-sky-300 font-mono font-black text-xs uppercase rounded-lg shadow-sm">
                      <Flame size={14} className="text-sky-400" /> NORTHERN CALI WINNER SPOTLIGHT
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <TeamBadge teamId={northWinner.teamId} size="sm" />
                      <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        {northWinner.team}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-sky-400">
                      {northWinner.ovr > 0 ? `${northWinner.ovr} OVR` : '--'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                      {northWinner.position} • {northWinner.jersey}
                    </span>
                  </div>
                </div>

                {/* Winner Content & Key Stats */}
                <div className="space-y-4 relative z-10">
                  {/* Official POTW Graphic Banner */}
                  {(northWinner.imageUrl || (activeWeek.id === 's4-week-2' && bowenPOTWImg)) && (
                    <div
                      onClick={() => setModalImage({
                        src: northWinner.imageUrl || bowenPOTWImg,
                        title: `${northWinner.player} • Northern Cali Player of the Week (Week 2)`
                      })}
                      className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-slate-950 aspect-[16/9] shadow-inner group/img cursor-pointer"
                    >
                      <img
                        src={northWinner.imageUrl || bowenPOTWImg}
                        alt={`${northWinner.player} Player of the Week Cover`}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-black bg-sky-500 text-slate-950 px-2 py-0.5 rounded shadow">
                          OFFICIAL POTW COVER
                        </span>
                        <span className="text-[10px] font-mono text-sky-200 font-bold bg-slate-950/80 px-2 py-0.5 rounded border border-sky-500/40">
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {northWinner.player}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                        Record in Slate: {northWinner.record}
                      </p>
                    </div>
                  </div>

                  {/* Stat Grid (4-box) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {northWinner.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 border border-sky-500/30 hover:border-sky-400/60 p-3 rounded-2xl text-center space-y-0.5 shadow transition-all"
                      >
                        <span className="text-[10px] font-mono text-sky-300 font-bold uppercase block">
                          {stat.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
                          {stat.value}
                        </span>
                        {stat.sub && (
                          <span className="text-[9px] font-mono text-slate-400 block truncate">
                            {stat.sub}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Narrative & Key Game */}
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2 font-sans">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
                      <Star size={14} className="fill-amber-300" />
                      <span>Key Performance:</span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono font-bold text-white">
                      {northWinner.keyGame}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {northWinner.blurb}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    {onSelectTeam && (
                      <button
                        onClick={() => onSelectTeam(northWinner.teamId, 4)}
                        className="text-xs font-mono font-bold text-sky-400 hover:text-sky-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0"
                      >
                        <Users size={14} />
                        <span>View {northWinner.team} Roster</span>
                      </button>
                    )}
                    {activeWeek.newsArticleId && (
                      <button
                        onClick={() => onNavigateToNews(activeWeek.newsArticleId!)}
                        className="px-3.5 py-1.5 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 border border-sky-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Read Analysis</span>
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* ========================================================================= */}
              {/* SOUTHERN CALI SPOTLIGHT CARD */}
              {/* ========================================================================= */}
              <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-2 border-amber-500/50 hover:border-amber-400 rounded-3xl p-6 sm:p-7 space-y-6 shadow-2xl transition-all relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/20 transition-all" />

                {/* Conference Badge & Team Info */}
                <div className="flex items-center justify-between border-b border-amber-500/30 pb-4 relative z-10">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/20 border border-amber-400/40 text-amber-300 font-mono font-black text-xs uppercase rounded-lg shadow-sm">
                      <Flame size={14} className="text-amber-400" /> SOUTHERN CALI WINNER SPOTLIGHT
                    </div>
                    <div className="flex items-center gap-2 pt-1">
                      <TeamBadge teamId={southWinner.teamId} size="sm" />
                      <span className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider">
                        {southWinner.team}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-3xl font-black font-mono text-amber-400">
                      {southWinner.ovr > 0 ? `${southWinner.ovr} OVR` : '--'}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 font-bold uppercase">
                      {southWinner.position} • {southWinner.jersey}
                    </span>
                  </div>
                </div>

                {/* Winner Content & Key Stats */}
                <div className="space-y-4 relative z-10">
                  {/* Official POTW Graphic Banner */}
                  {(southWinner.imageUrl || (activeWeek.id === 's4-week-2' && hintonPOTWImg)) && (
                    <div
                      onClick={() => setModalImage({
                        src: southWinner.imageUrl || hintonPOTWImg,
                        title: `${southWinner.player} • Southern Cali Player of the Week (Week 2)`
                      })}
                      className="relative rounded-2xl overflow-hidden border border-amber-500/30 bg-slate-950 aspect-[16/9] shadow-inner group/img cursor-pointer"
                    >
                      <img
                        src={southWinner.imageUrl || hintonPOTWImg}
                        alt={`${southWinner.player} Player of the Week Cover`}
                        className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-black bg-amber-500 text-slate-950 px-2 py-0.5 rounded shadow">
                          OFFICIAL POTW COVER
                        </span>
                        <span className="text-[10px] font-mono text-amber-200 font-bold bg-slate-950/80 px-2 py-0.5 rounded border border-amber-500/40">
                          Click to Enlarge
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {southWinner.player}
                      </h3>
                      <p className="text-xs font-mono text-emerald-400 font-bold mt-0.5">
                        Record in Slate: {southWinner.record}
                      </p>
                    </div>
                  </div>

                  {/* Stat Grid (4-box) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {southWinner.stats.map((stat, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 border border-amber-500/30 hover:border-amber-400/60 p-3 rounded-2xl text-center space-y-0.5 shadow transition-all"
                      >
                        <span className="text-[10px] font-mono text-amber-300 font-bold uppercase block">
                          {stat.label}
                        </span>
                        <span className="text-2xl sm:text-3xl font-black font-mono text-white block">
                          {stat.value}
                        </span>
                        {stat.sub && (
                          <span className="text-[9px] font-mono text-slate-400 block truncate">
                            {stat.sub}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Narrative & Key Game */}
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-2 font-sans">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-300">
                      <Star size={14} className="fill-amber-300" />
                      <span>Key Performance:</span>
                    </div>
                    <p className="text-xs sm:text-sm font-mono font-bold text-white">
                      {southWinner.keyGame}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium">
                      {southWinner.blurb}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                    {onSelectTeam && (
                      <button
                        onClick={() => onSelectTeam(southWinner.teamId, 4)}
                        className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer bg-transparent border-0"
                      >
                        <Users size={14} />
                        <span>View {southWinner.team} Roster</span>
                      </button>
                    )}
                    {activeWeek.newsArticleId && (
                      <button
                        onClick={() => onNavigateToNews(activeWeek.newsArticleId!)}
                        className="px-3.5 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                      >
                        <span>Read Analysis</span>
                        <ChevronRight size={14} />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Honorable Mentions & Quotes Section */}
      {activeWeek.honorableMentions && activeWeek.honorableMentions.length > 0 && (
        <div className="bg-slate-900/70 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2 font-mono uppercase tracking-wider">
              <Sparkles size={16} className="text-amber-400" />
              Week {activeWeek.weekNumber} Honorable Mentions
            </h3>
            <span className="text-xs font-mono text-slate-400 font-bold">
              {activeWeek.honorableMentions.length} Standout Finalists
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {activeWeek.honorableMentions.map((hm, idx) => (
              <div
                key={idx}
                className="bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/40 p-3.5 rounded-2xl space-y-1.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <TeamBadge teamId={hm.teamId} size="xs" />
                    <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                      {hm.conference}
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-black text-white">{hm.player}</h4>
                <p className="text-[10px] font-mono text-amber-300 font-medium leading-tight">
                  {hm.team}
                </p>
                <p className="text-xs text-slate-300 leading-snug pt-1 border-t border-slate-800/80 font-sans">
                  {hm.stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Season 4 Player of the Week Master Ledger Table (Matching 2K Association Awards Screen) */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-5 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Award size={14} /> SEASON 4 AWARDS CALENDAR
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Player of the Week Master Ledger
            </h2>
            <p className="text-xs text-slate-400">
              Complete weekly awards log recorded by the Cali Championship Hoops League Office.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px] uppercase tracking-wider">
                <th className="py-3 px-3 font-bold">Week</th>
                <th className="py-3 px-3 font-bold text-sky-400">Northern Cali</th>
                <th className="py-3 px-3 font-bold text-amber-400">Southern Cali</th>
                <th className="py-3 px-3 font-bold text-center">Status</th>
                <th className="py-3 px-3 text-right font-bold">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {POTW_WEEKS.map((w) => {
                const isCurrent = w.id === selectedWeekId;
                const northWinner = w.northernWinner || w.easternWinner;
                const southWinner = w.southernWinner || w.westernWinner;
                return (
                  <tr
                    key={w.id}
                    onClick={() => setSelectedWeekId(w.id)}
                    className={`transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-amber-500/10 text-white font-bold'
                        : 'hover:bg-slate-800/50 text-slate-300'
                    }`}
                  >
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${w.status === 'awarded' ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                        <span className="font-bold text-white">{w.dateRange}</span>
                        <span className="text-[10px] text-slate-400">Wk {w.weekNumber}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      {w.status === 'awarded' && northWinner ? (
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={northWinner.teamId} size="xs" />
                          <div>
                            <span className="font-black text-white">{northWinner.player}</span>
                            <span className="text-[10px] text-slate-400 block">
                              {getTeamShortName(northWinner.team)} • {northWinner.statSummary}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-500 italic">Voting in Progress</span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 whitespace-nowrap">
                      {w.status === 'awarded' && southWinner ? (
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={southWinner.teamId} size="xs" />
                          <div>
                            <span className="font-black text-white">{southWinner.player}</span>
                            <span className="text-[10px] text-slate-400 block">
                              {getTeamShortName(southWinner.team)} • {southWinner.statSummary}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <span className="text-slate-500 italic">Voting in Progress</span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-center whitespace-nowrap">
                      {w.status === 'awarded' ? (
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase">
                          Official
                        </span>
                      ) : (
                        <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-400 text-[10px] font-bold uppercase">
                          Upcoming
                        </span>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-right whitespace-nowrap">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedWeekId(w.id);
                        }}
                        className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* All-Time Player of the Week Hall of Fame / Leaderboard */}
      <div className="bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Trophy size={14} /> ALL-TIME LEAGUE HISTORY
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              All-Time Player of the Week Leaders (Seasons 1–4)
            </h2>
            <p className="text-xs text-slate-400">
              Most career Player of the Week awards accumulated in Cali Championship Hoops history.
            </p>
          </div>
          {onNavigateToTab && (
            <button
              onClick={() => onNavigateToTab('halloffame')}
              className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
            >
              <span>View Hall of Achievements</span>
              <ChevronRight size={14} />
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ALL_TIME_POTW_LEADERS.map((leader, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 border border-slate-800/80 hover:border-amber-500/40 p-4 rounded-2xl space-y-3 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-black px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                    #{idx + 1} All-Time
                  </span>
                  <span className="text-lg font-black font-mono text-white">
                    {leader.totalAwards} <span className="text-xs text-amber-400 font-bold">Awards</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <TeamBadge teamId={leader.teamId} size="sm" />
                  <div>
                    <h4 className="text-base font-black text-white">{leader.player}</h4>
                    <p className="text-xs font-mono text-slate-400">{leader.team}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 font-sans leading-relaxed pt-1 border-t border-slate-800">
                  {leader.highlights}
                </p>
              </div>

              <div className="text-[10px] font-mono text-slate-500 font-medium">
                Honors won in: {leader.seasons}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Preview Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-slate-950 border-2 border-amber-500/60 rounded-3xl overflow-hidden shadow-2xl space-y-3 p-4 cursor-default"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-sm sm:text-base font-mono font-black text-amber-400 truncate">
                {modalImage.title}
              </h3>
              <button
                onClick={() => setModalImage(null)}
                className="p-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer border border-slate-700"
              >
                <X size={18} />
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <img
                src={modalImage.src}
                alt={modalImage.title}
                className="w-full h-auto max-h-[75vh] object-contain mx-auto"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
