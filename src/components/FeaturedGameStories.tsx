import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Zap,
  BookOpen,
  ChevronRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Calendar,
  Share2,
  Check,
  Play,
  ExternalLink,
  X,
  Tv,
  Newspaper,
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import aCreekVsSjImg from '../assets/images/ACreek_vs_SJs4.png';
import sdReboundS4Img from '../assets/images/SD_Rebound_S4.png';

interface FeaturedGameStoriesProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

interface GameStory {
  id: string;
  articleId: string;
  badgeTag: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  youtubeUrl?: string;
  youtubeEmbedUrl?: string;
  date: string;
  image: string;
  imageCaption: string;
  winner: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  loser: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  quarterScores: { period: string; team1: number; team2: number }[];
  starPlayer: {
    name: string;
    team: string;
    statline: string;
    highlight: string;
  };
  keyStats: { label: string; value: string; desc: string }[];
  quote: { speaker: string; text: string; role: string };
  secondaryImage?: string;
  secondaryImageCaption?: string;
}

const getYouTubeEmbedSrc = (url?: string, embedUrl?: string) => {
  if (embedUrl) return embedUrl;
  if (!url) return '';
  if (url.includes('/embed/')) return url;
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('youtube.com/live/')) {
    const id = url.split('youtube.com/live/')[1].split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes('watch?v=')) {
    const id = url.split('watch?v=')[1].split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  return url;
};

const FEATURED_STORIES: GameStory[] = [
  {
    id: 's4-g24-tigersharks-vs-sabrewolves',
    articleId: 's4-g24-sabrewolves-edge-tigersharks-pierce-record',
    badgeTag: '★ ALL-TIME RECORD • PIERCE 5 STEALS',
    badgeColor: 'border-emerald-500/60 bg-emerald-500/20 text-emerald-300',
    title: 'Sabrewolves Rally in 4th (18-11) to Edge Tigersharks 48-43 Despite Pierce’s Record 5 Steals',
    subtitle:
      'San Diego captures its first home win of Season 4 behind 10 team blocks, 23 bench points, and an 18-11 fourth-quarter surge to overcome 15 team steals and rookie Malique Pierce’s historic 5 thefts.',
    date: 'Nov 14 • Season 4 Regular Season',
    image: aCreekVsSjImg,
    imageCaption:
      'The San Diego Sabrewolves clamped down with 10 team blocks and rallied in the fourth quarter to claim a 48-43 win over San Jose, withstanding an all-time CCH single-game record 5 steals by Tigersharks rookie Malique Pierce.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 48,
      record: '2-3 (7th)',
      isHome: true,
    },
    loser: {
      id: 'san-jose-tigersharks',
      name: 'San Jose Tigersharks',
      city: 'San Jose',
      nickname: 'Tigersharks',
      score: 43,
      record: '0-2 (9th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 8, team2: 12 },
      { period: 'Q2', team1: 14, team2: 12 },
      { period: 'Q3', team1: 8, team2: 8 },
      { period: 'Q4', team1: 18, team2: 11 },
    ],
    starPlayer: {
      name: 'Andre Creek',
      team: 'San Diego Sabrewolves',
      statline: '8 PTS (4-4 FG) • 13 REB (Game-High) • 2 AST • 2 BLK',
      highlight: 'Named Player of the Game after dominating the glass and anchoring 10-block interior defense in 48-43 comeback win',
    },
    keyStats: [
      { label: 'Andre Creek', value: '8 PTS, 13 REB', desc: 'Player of the Game • 4-4 FG, 2 BLK' },
      { label: 'Malique Pierce', value: '5 STL', desc: 'All-Time CCH Single-Game Record' },
      { label: 'Donald Hardy', value: '15 PTS, 4 STL', desc: 'Game-High 15 PTS (3-4 3PT), 5 REB' },
      { label: 'Team Blocks', value: '10 - 0 SD', desc: 'Sabrewolves Rim Protection (Glover 3 BLK)' },
    ],
    quote: {
      speaker: 'Jacob Underwood',
      role: 'Head Coach • San Diego Sabrewolves (First Home S4 Win)',
      text: 'San Jose gave us everything with Pierce and Hardy jumping our passing lanes for 15 steals. But our defense held them to 21% shooting, our bench gave us 23 points, and our 10 team blocks won this in the fourth quarter.',
    },
  },
];

export const FeaturedGameStories: React.FC<FeaturedGameStoriesProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [activeVideoStoryId, setActiveVideoStoryId] = useState<string | null>(null);

  const displayedStories = FEATURED_STORIES;

  return (
    <section className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame size={18} />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Lead Front Page Story
            </h2>
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30 flex items-center gap-1.5">
              <Sparkles size={11} className="text-amber-400" />
              FEATURED GAME STORY • SEASON 4
            </span>
          </div>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('news')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Newspaper size={13} className="text-amber-400" />
            <span>All News & Recaps</span>
          </button>
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('schedule')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calendar size={13} className="text-amber-400" />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* Featured Game Story Presentation */}
      <div className={displayedStories.length === 1 ? "max-w-4xl mx-auto w-full" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}>
        {displayedStories.map((story) => {
          const isLead = story.id === FEATURED_STORIES[0].id;
          return (
            <article
              key={story.id}
              className={`bg-slate-900/95 border rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-200 group ${
                isLead
                  ? 'border-amber-500/50 shadow-amber-500/5 ring-1 ring-amber-500/30'
                  : 'border-slate-800 hover:border-amber-500/40'
              }`}
            >
              {/* Top Banner: Embedded Video Player or Photo with Play Button */}
              {activeVideoStoryId === story.id && (story.youtubeEmbedUrl || story.youtubeUrl) ? (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`${getYouTubeEmbedSrc(story.youtubeUrl, story.youtubeEmbedUrl)}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full"
                  />
                  <button
                    onClick={() => setActiveVideoStoryId(null)}
                    className="absolute top-3 right-3 z-30 bg-slate-950/90 hover:bg-slate-800 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-full text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-lg"
                    title="Close Video Replay"
                  >
                    <X size={14} />
                    <span>Close Replay</span>
                  </button>
                </div>
              ) : (
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* YouTube Video Play Button Overlay */}
                  {story.youtubeUrl && (
                    <button
                      onClick={() => setActiveVideoStoryId(story.id)}
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-red-600/90 hover:bg-red-500 text-white flex items-center justify-center shadow-2xl shadow-red-600/60 hover:scale-110 transition-all cursor-pointer border-2 border-white/90 z-10 group/btn"
                      title="Watch Game Video Replay"
                      aria-label="Play game replay video"
                    >
                      <Play size={24} className="fill-white translate-x-0.5 group-hover/btn:scale-110 transition-transform" />
                    </button>
                  )}

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${story.badgeColor}`}
                    >
                      {story.badgeTag}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                    {story.date}
                  </div>

                {/* Scoreboard Overlay on the bottom of the image */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 bg-slate-950/95 backdrop-blur-md border border-slate-800/90 rounded-2xl p-3 shadow-xl">
                  <div className="grid grid-cols-2 items-center divide-x divide-slate-800 gap-2">
                    {/* Team 1 (Winner) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.winner.id)}
                      className="flex items-center justify-between pr-2 sm:pr-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.winner.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-black text-white leading-tight">
                            {story.winner.name}
                          </div>
                          <div className="text-[10px] font-mono text-emerald-400 font-bold">
                            {story.winner.record} • Winner
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 pl-2 shrink-0">
                        {story.winner.score}
                      </div>
                    </div>

                    {/* Team 2 (Loser) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.loser.id)}
                      className="flex items-center justify-between pl-2 sm:pl-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.loser.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-300 leading-tight">
                            {story.loser.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {story.loser.record}
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-slate-400 pl-2 shrink-0">
                        {story.loser.score}
                      </div>
                    </div>
                  </div>

                  {/* Score bug star player indicator */}
                  {story.starPlayer && (
                    <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <div className="flex items-center gap-1.5 text-amber-300 font-medium truncate">
                        <span className="text-amber-400">⭐️</span>
                        <span className="font-bold text-white">{story.starPlayer.name}</span>
                        <span className="text-slate-400 text-[10px]">
                          ({story.starPlayer.team.includes('San Diego') ? 'SD' : story.starPlayer.team})
                        </span>
                        <span className="text-slate-500 hidden sm:inline">•</span>
                        <span className="text-slate-300 text-[10px] hidden sm:inline">{story.starPlayer.statline}</span>
                      </div>
                      <span className="text-[9px] font-mono uppercase tracking-wider font-extrabold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20 shrink-0 ml-2">
                        POTG
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}

              {/* Story Details & Content Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                  >
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {story.subtitle}
                  </p>

                  {/* Star Spotlight Pill */}
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-amber-400 flex items-center gap-1">
                        <Sparkles size={12} className="text-amber-400" />
                        PLAYER OF THE GAME
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {story.starPlayer.team}
                      </span>
                    </div>
                    <div className="text-sm font-black text-white">
                      {story.starPlayer.name}
                    </div>
                    <div className="text-xs font-mono text-amber-300 font-bold">
                      {story.starPlayer.statline}
                    </div>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {story.keyStats.map((st, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/60 border border-slate-800/80 p-2.5 rounded-xl text-center space-y-0.5"
                      >
                        <div className="text-[9px] font-mono text-slate-400 font-bold uppercase leading-tight">
                          {st.label}
                        </div>
                        <div className="text-sm sm:text-base font-black text-amber-400 font-mono">
                          {st.value}
                        </div>
                        <div className="text-[9px] text-slate-400 leading-tight">
                          {st.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quarter by Quarter Box Score */}
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 overflow-x-auto">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-[10px] text-slate-400 uppercase border-b border-slate-800/80">
                          <th className="text-left py-0.5 font-bold">Team</th>
                          {story.quarterScores.map((q) => (
                            <th key={q.period} className="text-center py-0.5 font-bold">
                              {q.period}
                            </th>
                          ))}
                          <th className="text-right py-0.5 font-bold text-amber-400">T</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/40">
                        <tr>
                          <td className="py-1 text-white font-bold whitespace-nowrap">
                            {story.winner.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-300">
                              {q.team1}
                            </td>
                          ))}
                          <td className="text-right py-1 font-black text-amber-400">
                            {story.winner.score}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-slate-400 font-semibold whitespace-nowrap">
                            {story.loser.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-400">
                              {q.team2}
                            </td>
                          ))}
                          <td className="text-right py-1 font-bold text-slate-400">
                            {story.loser.score}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Coach / Player Quote */}
                  {story.quote && (
                    <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs italic text-slate-300">
                      <span className="font-mono text-[10px] uppercase font-bold text-amber-400 not-italic block mb-0.5">
                        {story.quote.speaker} ({story.quote.role}):
                      </span>
                      &ldquo;{story.quote.text}&rdquo;
                    </div>
                  )}

                  {/* Secondary Story Image (placed later in the article) */}
                  {story.secondaryImage && (
                    <div className="pt-2">
                      <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
                        <img
                          src={story.secondaryImage}
                          alt={story.secondaryImageCaption || story.title}
                          className="w-full max-h-56 object-cover object-center"
                        />
                        {story.secondaryImageCaption && (
                          <div className="p-2.5 bg-slate-950/90 border-t border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center gap-1.5">
                            <Sparkles size={12} className="text-amber-400 shrink-0" />
                            <span>{story.secondaryImageCaption}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-end gap-2.5">
                  {story.youtubeUrl && (
                    <div className="flex items-center gap-1.5 w-full sm:w-auto">
                      <button
                        onClick={() => setActiveVideoStoryId(activeVideoStoryId === story.id ? null : story.id)}
                        className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-xl font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer ${
                          activeVideoStoryId === story.id
                            ? 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700'
                            : 'bg-red-600 hover:bg-red-500 text-white shadow-red-600/20'
                        }`}
                      >
                        <Play size={14} className="fill-current" />
                        <span>{activeVideoStoryId === story.id ? 'Close Video' : 'Watch Replay'}</span>
                      </button>
                      <a
                        href={story.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-slate-950 hover:bg-slate-800 text-slate-300 hover:text-red-400 border border-slate-800 transition-colors cursor-pointer"
                        title="Open directly on YouTube"
                        aria-label="Open on YouTube"
                      >
                        <ExternalLink size={15} />
                      </a>
                    </div>
                  )}
                  <button
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
