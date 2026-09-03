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
  Play
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import maraiVsSfImg from '../assets/images/Marai_vs_SFs4.png';

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
}

const FEATURED_STORIES: GameStory[] = [
  {
    id: 's4-g20-reds-vs-knights',
    articleId: 's4-g20-reds-rout-knights-marai',
    badgeTag: 'SOUTHERN STATEMENT • LATEST RECAP',
    badgeColor: 'border-red-500/60 bg-red-500/10 text-red-400',
    title: "Marai's 18 & 14 Double-Double Anchors Reds in 64-49 Rout Over Knights",
    subtitle:
      'Andor Marai posts 18 points, 14 rebounds, and 3 assists while California shoots 51% from the floor and dominates the glass to roll past San Francisco.',
    youtubeUrl: 'https://www.youtube.com/watch?v=cHJfZTom0GU',
    date: 'Nov 9 • Season 4 Regular Season',
    image: maraiVsSfImg,
    imageCaption: 'Andor Marai powered the California Reds with 18 points, 14 rebounds, 3 assists, and 2 steals in a 64-49 victory over the San Francisco Knights.',
    winner: {
      id: 'california-reds',
      name: 'California Reds',
      city: 'California',
      nickname: 'Reds',
      score: 64,
      record: '4-3 (4th)',
      isHome: true,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      city: 'San Francisco',
      nickname: 'Knights',
      score: 49,
      record: '0-4 (11th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 18, team2: 8 },
      { period: 'Q2', team1: 18, team2: 12 },
      { period: 'Q3', team1: 15, team2: 15 },
      { period: 'Q4', team1: 13, team2: 14 },
    ],
    starPlayer: {
      name: 'Andor Marai',
      team: 'California Reds',
      statline: '18 PTS • 14 REB • 3 AST • 2 STL • 1 BLK (8-15 FG, 28 MIN)',
      highlight: '18 PTS & 14 REB Dominates Glass to Secure 2nd Straight Win',
    },
    keyStats: [
      { label: 'Field Goal %', value: '51% - 33%', desc: 'California 27-53 vs SF 18-55' },
      { label: 'Total Rebounds', value: '41 - 28', desc: '+13 Glass Advantage for Reds' },
      { label: 'Points in Paint', value: '28 - 22', desc: 'Reds Interior Scoring Control' },
      { label: 'Marai Double-Double', value: '18 & 14', desc: 'Game-High 14 Boards (12 Def)' },
    ],
    quote: {
      speaker: 'William Walker',
      role: 'Head Coach • California Reds (4-3 Record)',
      text: 'Andor Marai controlled both ends of the floor tonight. When he commands the glass with 14 rebounds and we shoot over 50%, we establish our signature physical brand.',
    },
  },
];

export const FeaturedGameStories: React.FC<FeaturedGameStoriesProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(FEATURED_STORIES[0].id);

  return (
    <section className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame size={18} />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Featured Game Story
            </h2>
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
              Nov 9 • California 64, SF 49
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Exclusive recaps, official box scores, and star player breakdowns from the latest CCH action.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('news')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <BookOpen size={13} className="text-amber-400" />
            <span>All News &amp; Recaps</span>
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
      <div className={FEATURED_STORIES.length === 1 ? "max-w-4xl mx-auto w-full" : "grid grid-cols-1 lg:grid-cols-2 gap-6"}>
        {FEATURED_STORIES.map((story) => {
          return (
            <article
              key={story.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-200 group"
            >
              {/* Top Banner Image with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

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
                </div>
              </div>

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
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-end gap-2.5">
                  {story.youtubeUrl && (
                    <a
                      href={story.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 transition-all"
                    >
                      <Play size={14} className="fill-white" />
                      <span>Watch Replay</span>
                    </a>
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
