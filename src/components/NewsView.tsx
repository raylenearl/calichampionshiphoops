import React, { useState, useEffect } from 'react';
import { CCH_NEWS_ARTICLES, CCHNewsArticle, CoachProfileCard } from '../data/newsData';
import { TeamBadge } from './TeamBadge';
import {
  Newspaper,
  Sparkles,
  Trophy,
  Flame,
  Calendar,
  Clock,
  Volume2,
  Bookmark,
  Share2,
  X,
  ChevronRight,
  User,
  Quote,
  Filter,
  Layers,
  Radio,
  BookOpen,
  Users,
  Zap,
} from 'lucide-react';

interface NewsViewProps {
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3) => void;
  initialArticleId?: string | null;
}

export const NewsView: React.FC<NewsViewProps> = ({ onSelectTeamRecap, initialArticleId }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSeasonFilter, setSelectedSeasonFilter] = useState<number>(0); // 0 = all seasons
  const [coachFilter, setCoachFilter] = useState<'all' | 'Returning' | 'Newcomer'>('all');
  const [selectedArticle, setSelectedArticle] = useState<CCHNewsArticle | null>(() => {
    if (initialArticleId) {
      return CCH_NEWS_ARTICLES.find((a) => a.id === initialArticleId) || null;
    }
    return null;
  });

  useEffect(() => {
    if (initialArticleId) {
      const art = CCH_NEWS_ARTICLES.find((a) => a.id === initialArticleId);
      if (art) {
        setSelectedArticle(art);
      }
    }
  }, [initialArticleId]);

  // Filter articles
  const filteredArticles = CCH_NEWS_ARTICLES.filter((article) => {
    const categoryMatches = selectedCategory === 'all' || article.category === selectedCategory;
    const seasonMatches = selectedSeasonFilter === 0 || article.season === selectedSeasonFilter;
    return categoryMatches && seasonMatches;
  });

  const featuredStory = CCH_NEWS_ARTICLES.find((a) => a.featured) || CCH_NEWS_ARTICLES[0];

  return (
    <div className="space-y-8">
      {/* Official Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/25 p-5 sm:p-6 rounded-3xl shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
            <Newspaper size={16} />
            Official CCH Press & Media Headquarters
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            League News & Historical Gazette
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
            Latest postseason recaps, breaking offseason rumors, championship podcast broadcasts, and archival stories spanning Seasons 1 through 3.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
          <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-2xl text-center font-mono">
            <span className="block text-2xl font-black text-amber-400">{CCH_NEWS_ARTICLES.length}</span>
            <span className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Articles Logged</span>
          </div>
        </div>
      </div>

      {/* Category & Season Filter Toolbar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-slate-950/90 border border-slate-800/90 p-2 sm:p-2.5 rounded-2xl shadow-inner">
        {/* Category Tabs */}
        <div className="flex items-center overflow-x-auto scrollbar-none gap-1 sm:gap-1.5 text-xs font-extrabold">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Layers size={14} />
            All Stories
          </button>
          <button
            onClick={() => setSelectedCategory('offseason')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'offseason'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Sparkles size={14} />
            Offseason & Coaches
          </button>
          <button
            onClick={() => setSelectedCategory('championship')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'championship'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Trophy size={14} />
            Championships
          </button>
          <button
            onClick={() => setSelectedCategory('recap')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'recap'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Flame size={14} />
            Game Recaps
          </button>
          <button
            onClick={() => setSelectedCategory('feature')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'feature'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <Sparkles size={14} />
            Features & Podcasts
          </button>
          <button
            onClick={() => setSelectedCategory('milestone')}
            className={`px-3 py-2 rounded-xl transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
              selectedCategory === 'milestone'
                ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
            }`}
          >
            <BookOpen size={14} />
            Milestones
          </button>
        </div>

        {/* Season Selector Pills */}
        <div className="flex items-center gap-1 bg-slate-900 border border-slate-800 p-1 rounded-xl text-xs font-semibold shrink-0 self-start lg:self-auto">
          <span className="text-[10px] text-slate-400 px-2 font-bold uppercase tracking-wider">Era:</span>
          <button
            onClick={() => setSelectedSeasonFilter(0)}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              selectedSeasonFilter === 0
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Eras
          </button>
          <button
            onClick={() => setSelectedSeasonFilter(4)}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              selectedSeasonFilter === 4
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 4
          </button>
          <button
            onClick={() => setSelectedSeasonFilter(3)}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              selectedSeasonFilter === 3
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 3
          </button>
          <button
            onClick={() => setSelectedSeasonFilter(2)}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              selectedSeasonFilter === 2
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 2
          </button>
          <button
            onClick={() => setSelectedSeasonFilter(1)}
            className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer ${
              selectedSeasonFilter === 1
                ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 1
          </button>
        </div>
      </div>

      {/* Featured Lead Story Showcase */}
      {selectedCategory === 'all' && selectedSeasonFilter === 0 && (
        <div className="bg-gradient-to-br from-slate-900 via-amber-950/40 to-slate-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-amber-500/20 pb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-full">
              <Sparkles size={13} /> FEATURED CCH HEADLINE STORY
            </span>
            <span className="text-xs font-mono text-slate-400">
              {featuredStory.date} • {featuredStory.readTime}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              {featuredStory.coachesList && featuredStory.coachesList.length > 0 ? (
                <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-4 shadow-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                      <Users size={14} /> 12 HEAD COACHES • SEASON 4 ROSTER
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">4 Returning • 8 Newcomers</span>
                  </div>
                  <div className="grid grid-cols-6 gap-2">
                    {featuredStory.coachesList.slice(0, 6).map((c, i) => (
                      <div key={i} className="relative group/thumb overflow-hidden rounded-xl border border-slate-800 bg-slate-900 aspect-square">
                        <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-1">
                          <span className="text-[9px] font-bold text-white truncate">{c.name.split(' ').pop()}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : featuredStory.imageUrl ? (
                <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl bg-slate-950 group/hero flex flex-col items-center">
                  <img
                    src={featuredStory.imageUrl}
                    alt={featuredStory.title}
                    className="w-full h-auto max-h-[380px] object-contain transition-transform duration-700 group-hover/hero:scale-105 p-2"
                  />
                  <div className="w-full bg-slate-950/95 border-t border-amber-500/20 px-4 py-2 flex items-center justify-between text-xs font-mono font-bold text-amber-300">
                    <span className="flex items-center gap-1.5">
                      <Sparkles size={14} className="text-amber-400" /> {featuredStory.imageCaption || 'Official Press Photo'}
                    </span>
                  </div>
                </div>
              ) : null}

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                {featuredStory.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                {featuredStory.subtitle}
              </p>

              {featuredStory.teams && (
                <div className="inline-flex items-center gap-4 bg-slate-950/80 border border-slate-800 p-3 rounded-2xl">
                  <div className="flex items-center gap-2">
                    <TeamBadge teamId={featuredStory.teams.team1Id} size="md" />
                    <span className="font-bold text-xs text-white">{featuredStory.teams.team1}</span>
                    <span className="font-mono font-black text-amber-400 text-base ml-1">{featuredStory.teams.score1}</span>
                  </div>
                  <span className="text-xs text-slate-500 font-bold">VS</span>
                  <div className="flex items-center gap-2">
                    <TeamBadge teamId={featuredStory.teams.team2Id} size="md" />
                    <span className="font-bold text-xs text-white">{featuredStory.teams.team2}</span>
                    <span className="font-mono font-black text-slate-300 text-base ml-1">{featuredStory.teams.score2}</span>
                  </div>
                </div>
              )}

              {featuredStory.headlineQuote && (
                <div className="bg-slate-950/60 border-l-4 border-amber-500 p-3.5 rounded-r-2xl italic text-xs text-slate-200">
                  &quot;{featuredStory.headlineQuote}&quot;
                </div>
              )}

              <div className="pt-2">
                <button
                  onClick={() => setSelectedArticle(featuredStory)}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={16} />
                  <span>Read Full Featured Article</span>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Audio / Visual Spotlight */}
            <div className="lg:col-span-4 bg-slate-950/90 border border-slate-800 rounded-2xl p-5 space-y-4 text-center shadow-inner">
              <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl w-12 h-12 flex items-center justify-center mx-auto text-amber-400">
                <Radio size={24} />
              </div>
              <div>
                <span className="text-[10px] font-mono text-amber-400 uppercase font-bold tracking-wider block">Official CCH Dynasty Podcast</span>
                <h4 className="text-sm font-black text-white mt-1">Season 3 Postseason Recap</h4>
                <p className="text-[11px] text-slate-400 mt-1">Kabal’s Final Ring & Underwood’s Defection</p>
              </div>
              <audio
                controls
                style={{ width: '100%' }}
                className="w-full h-9 accent-amber-500 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none"
              >
                <source src="https://dn601201.us.archive.org/0/items/cchoops2k/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a" type="audio/mp4" />
              </audio>
            </div>
          </div>
        </div>
      )}

      {/* Main Articles Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h3 className="text-lg font-black text-white flex items-center gap-2">
            <Newspaper size={18} className="text-amber-400" />
            <span>
              {selectedCategory === 'all'
                ? 'All News & Media Releases'
                : selectedCategory === 'championship'
                ? 'Championship Game Reports'
                : selectedCategory === 'recap'
                ? 'Game Recaps & Scores'
                : selectedCategory === 'feature'
                ? 'Features & Audio Podcasts'
                : 'League Milestones'}
            </span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Showing {filteredArticles.length} Stories
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              onClick={() => setSelectedArticle(article)}
              className="bg-slate-900 border border-slate-800 hover:border-amber-500/40 rounded-3xl p-5 space-y-4 shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1 cursor-pointer group"
            >
              <div className="space-y-3">
                {article.coachesList && article.coachesList.length > 0 ? (
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 p-2.5 -mx-1 -mt-1 shadow-md space-y-2">
                    <div className="grid grid-cols-4 gap-1.5">
                      {article.coachesList.slice(0, 4).map((c, i) => (
                        <div key={i} className="aspect-square rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                          <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="text-[10px] font-mono font-bold text-amber-300 bg-slate-900/90 px-2 py-1 rounded-md border border-amber-500/20 flex items-center justify-between">
                      <span>👥 12 Head Coaches</span>
                      <span className="text-slate-400">View Profiles →</span>
                    </div>
                  </div>
                ) : article.imageUrl ? (
                  <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 h-52 -mx-1 -mt-1 shadow-md flex flex-col items-center justify-center">
                    <img
                      src={article.imageUrl}
                      alt={article.title}
                      className="w-full h-full object-contain p-2 transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2.5 right-2.5 text-[10px] font-mono font-bold text-amber-300 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-amber-500/20 truncate">
                      {article.imageCaption || 'Breaking News Photo'}
                    </div>
                  </div>
                ) : null}

                {/* Category & Date Header */}
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono font-bold rounded-full text-[10px] uppercase">
                    {article.category} • Season {article.season}
                  </span>
                  <span className="text-slate-400 text-[11px] font-mono flex items-center gap-1">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                {/* Article Title & Subtitle */}
                <h3 className="text-base font-black text-white group-hover:text-amber-400 transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed font-normal">
                  {article.subtitle}
                </p>

                {/* Team Score Chip if available */}
                {article.teams && (
                  <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded-2xl border border-slate-800 text-xs">
                    <div className="flex items-center gap-1.5">
                      <TeamBadge teamId={article.teams.team1Id} size="sm" />
                      <span className="font-bold text-slate-200 text-[11px]">{article.teams.team1}</span>
                    </div>
                    {article.teams.score1 !== undefined && (
                      <span className="font-mono font-black text-amber-400 text-xs">
                        {article.teams.score1} - {article.teams.score2}
                      </span>
                    )}
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-200 text-[11px]">{article.teams.team2}</span>
                      <TeamBadge teamId={article.teams.team2Id} size="sm" />
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Author & Read Action */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-[11px] text-slate-500 font-medium truncate max-w-[160px]">
                  {article.author}
                </span>
                <span className="font-extrabold text-amber-400 text-[11px] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read Story <ChevronRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto my-auto animate-in fade-in zoom-in-95 duration-200">
            {/* Close Button */}
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 bg-slate-950 hover:bg-slate-800 text-slate-400 hover:text-white rounded-full border border-slate-800 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Article Meta Header */}
            <div className="space-y-3 border-b border-slate-800 pb-5">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold rounded-full text-xs uppercase">
                  {selectedArticle.category} • Season {selectedArticle.season}
                </span>
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar size={13} /> {selectedArticle.date}
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-400">{selectedArticle.readTime}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {selectedArticle.subtitle}
              </p>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <User size={14} className="text-amber-400" />
                <span>{selectedArticle.author}</span>
              </div>
            </div>

            {/* Article Image Banner if available (when no coachesList) */}
            {selectedArticle.imageUrl && !selectedArticle.coachesList && (
              <div className="relative overflow-hidden rounded-2xl border border-slate-800 shadow-xl max-h-96">
                <img
                  src={selectedArticle.imageUrl}
                  alt={selectedArticle.title}
                  className="w-full h-64 sm:h-80 object-cover object-top"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent p-4">
                  <p className="text-xs text-amber-300 font-mono font-bold flex items-center gap-1.5">
                    <Sparkles size={14} className="text-amber-400" /> {selectedArticle.imageCaption || 'Official Press Photo'}
                  </p>
                </div>
              </div>
            )}

            {/* Interactive Coaches Showcase Gallery if coachesList is present */}
            {selectedArticle.coachesList && selectedArticle.coachesList.length > 0 && (
              <div className="space-y-4 pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <div className="flex items-center gap-2">
                    <Users className="text-amber-400" size={18} />
                    <h3 className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                      Season 4 Head Coaching Directory
                    </h3>
                  </div>

                  {/* Coach Filter Controls */}
                  <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      onClick={() => setCoachFilter('all')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                        coachFilter === 'all'
                          ? 'bg-amber-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      All (12)
                    </button>
                    <button
                      onClick={() => setCoachFilter('Returning')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                        coachFilter === 'Returning'
                          ? 'bg-emerald-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Returning (4)
                    </button>
                    <button
                      onClick={() => setCoachFilter('Newcomer')}
                      className={`px-2.5 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                        coachFilter === 'Newcomer'
                          ? 'bg-blue-500 text-slate-950'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Newcomers (8)
                    </button>
                  </div>
                </div>

                {/* Coach Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedArticle.coachesList
                    .filter((c) => coachFilter === 'all' || c.status === coachFilter)
                    .map((coach, idx) => {
                      const seasonLine = coach.tenureYears || coach.tenure.split('\n')[0];
                      const detailLine = coach.tenureNote || coach.tenure.split('\n')[1] || '';

                      return (
                        <div
                          key={idx}
                          className="bg-slate-950 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 space-y-3 transition-all group/coach shadow-md text-left"
                        >
                          <div className="flex items-start gap-4">
                            {/* Coach Photo */}
                            <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-xl overflow-hidden border-2 border-slate-700 group-hover/coach:border-amber-400/80 shrink-0 shadow-lg bg-slate-900 relative">
                              <img
                                src={coach.photo}
                                alt={coach.name}
                                className="w-full h-full object-cover group-hover/coach:scale-105 transition-transform duration-500"
                              />
                            </div>

                            {/* Coach Details (All Left Aligned) */}
                            <div className="space-y-1 flex-1 min-w-0 text-left">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-[10px] font-mono font-black uppercase tracking-wider px-2 py-0.5 rounded border inline-block ${
                                    coach.status === 'Returning'
                                      ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30'
                                      : 'bg-blue-500/15 text-blue-400 border-blue-500/30'
                                  }`}
                                >
                                  {coach.status === 'Returning' ? 'Returning' : 'New HC'}
                                </span>
                              </div>

                              <h4 className="text-base font-black text-white group-hover/coach:text-amber-300 transition-colors truncate text-left pt-0.5">
                                {coach.name}
                              </h4>

                              <div className="flex items-center gap-2 text-left">
                                <TeamBadge teamId={coach.teamId} size="sm" />
                                <span className="text-xs font-bold text-slate-300 truncate">
                                  {coach.team}
                                </span>
                              </div>

                              {/* 2-Line Left-Aligned Tenure */}
                              <div className="pt-1 text-left leading-tight">
                                <div className="text-xs font-mono font-black text-amber-400">
                                  {seasonLine}
                                </div>
                                {detailLine && (
                                  <div className="text-[10px] font-mono text-slate-400">
                                    {detailLine}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>

                          {/* Background & Tactical Notes */}
                          <div className="bg-slate-900/90 rounded-xl p-3 border border-slate-800/80 space-y-1.5 text-xs text-left">
                            <p className="text-slate-300 leading-relaxed text-left">
                              {coach.background}
                            </p>
                            {coach.philosophy && (
                              <div className="pt-1.5 border-t border-slate-800/60 flex items-start gap-1.5 text-[11px] text-amber-300/90 font-medium text-left">
                                <Zap size={13} className="text-amber-400 shrink-0 mt-0.5" />
                                <span className="text-left">
                                  <strong className="text-amber-400 font-mono">Philosophy:</strong> {coach.philosophy}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Teams Matchup Boxscore if available */}
            {selectedArticle.teams && (
              <div className="bg-slate-950 border border-amber-500/30 p-4 rounded-2xl flex items-center justify-around gap-4 text-center">
                <div className="flex flex-col items-center gap-1.5">
                  <TeamBadge teamId={selectedArticle.teams.team1Id} size="lg" />
                  <span className="font-black text-sm text-white">{selectedArticle.teams.team1}</span>
                  {selectedArticle.teams.score1 !== undefined && (
                    <span className="text-xl font-mono font-black text-amber-400">
                      {selectedArticle.teams.score1}
                    </span>
                  )}
                </div>

                <div className="flex flex-col items-center gap-1">
                  <div className="text-xs font-black font-mono text-amber-400 bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-500/20">
                    {selectedArticle.teams.score1 !== undefined && selectedArticle.teams.score2 !== undefined ? 'FINAL' : 'VS'}
                  </div>
                </div>

                <div className="flex flex-col items-center gap-1.5">
                  <TeamBadge teamId={selectedArticle.teams.team2Id} size="lg" />
                  <span className="font-black text-sm text-white">{selectedArticle.teams.team2}</span>
                  {selectedArticle.teams.score2 !== undefined && (
                    <span className="text-xl font-mono font-black text-slate-300">
                      {selectedArticle.teams.score2}
                    </span>
                  )}
                </div>
              </div>
            )}

            {/* Audio Broadcast if available */}
            {selectedArticle.audioUrl && (
              <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-400 font-mono">
                  <Radio size={16} className="animate-pulse" /> Stream Audio Broadcast
                </div>
                <audio
                  controls
                  style={{ width: '100%' }}
                  className="w-full h-10 accent-amber-500 rounded-xl bg-slate-900 border border-slate-800 focus:outline-none"
                >
                  <source src={selectedArticle.audioUrl} type="audio/mp4" />
                </audio>
              </div>
            )}

            {/* Article Content Paragraphs */}
            <div className="space-y-4 text-slate-200 text-sm leading-relaxed font-normal">
              {selectedArticle.contentParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Article Quotes Section */}
            {selectedArticle.quotes && selectedArticle.quotes.length > 0 && (
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                  <Quote size={14} /> Official Postgame Quotes
                </h4>
                <div className="space-y-3">
                  {selectedArticle.quotes.map((q, idx) => (
                    <div key={idx} className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                      <p className="text-xs text-slate-200 italic">&quot;{q.quote}&quot;</p>
                      <div className="text-[11px] font-bold text-amber-400 text-right">
                        — {q.speaker}, <span className="text-slate-400 font-normal">{q.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Standout Player Stats Table */}
            {selectedArticle.playerStats && selectedArticle.playerStats.length > 0 && (
              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider">
                  Top Box Score Performers
                </h4>
                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-900 text-slate-400 font-bold border-b border-slate-800">
                        <th className="py-2.5 px-4">Player</th>
                        <th className="py-2.5 px-4">Team</th>
                        <th className="py-2.5 px-4 text-right">Stat Line</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {selectedArticle.playerStats.map((ps, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/40">
                          <td className="py-2 px-4 font-bold text-white">{ps.player}</td>
                          <td className="py-2 px-4 text-slate-300">{ps.team}</td>
                          <td className="py-2 px-4 text-right font-mono font-bold text-amber-400">{ps.stat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Modal Footer */}
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs rounded-xl transition-colors cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
