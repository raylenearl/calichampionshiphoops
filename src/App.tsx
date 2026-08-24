import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { BreakingNewsCard } from './components/BreakingNewsCard';
import { ChampionshipVideoCard } from './components/ChampionshipVideoCard';
import { StandingsView } from './components/StandingsView';
import { PlayoffsView } from './components/PlayoffsView';
import { ScheduleBrowser } from './components/ScheduleBrowser';
import { TeamDirectory } from './components/TeamDirectory';
import { RecordBookView } from './components/RecordBookView';
import { HallOfFameView } from './components/HallOfFameView';
import { PlayerDirectory } from './components/PlayerDirectory';
import { PlayerComparisonView } from './components/PlayerComparisonView';
import { HeadToHeadView } from './components/HeadToHeadView';
import { AllStarGameView } from './components/AllStarGameView';
import { TransactionsView } from './components/TransactionsView';
import { NewsView } from './components/NewsView';
import { DraftView } from './components/DraftView';
import { OpeningDayRostersView } from './components/OpeningDayRostersView';
import { PodcastPlayerCard } from './components/PodcastPlayerCard';
import { DRAFT_PROSPECTS, DRAFT_RESULTS_S4 } from './data/draftData';
import { TEAMS } from './data/teamsData';
import { SEASON_ROSTERS } from './data/rostersData';
import { TeamBadge } from './components/TeamBadge';
import carltonDaughertyImg from './assets/images/S4 Draft/Carlton Daugherty.png';
import ajHinton99Img from './assets/images/AJHinton99.png';
import { SearchModal } from './components/SearchModal';
import { TeamSeasonModal } from './components/TeamSeasonModal';
import { CCHLeagueLogo } from './components/TeamLogos';
import { SocialFooterGrid } from './components/SocialLinks';
import { Trophy, Shield, Calendar, Award, BookOpen, Users, Activity, ExternalLink, Tv, Heart, Star, Link2, Check, ChevronRight, Sparkles } from 'lucide-react';

const VALID_TABS = [
  'hub',
  'rosters',
  'news',
  'draft',
  'standings',
  'playoffs',
  'schedule',
  'teams',
  'transactions',
  'allstar',
  'halloffame',
  'records',
  'players',
  'compare',
  'h2h',
];

interface ParsedHashState {
  tab: string;
  season?: 1 | 2 | 3 | 4;
  articleId?: string | null;
  teamId?: string | null;
  teamSeason?: 1 | 2 | 3 | 4;
  p1?: string;
  p2?: string;
}

function parseUrlHash(): ParsedHashState {
  if (typeof window === 'undefined') return { tab: 'hub' };
  const rawHash = window.location.hash.replace(/^#\/?/, '').trim();
  if (!rawHash) return { tab: 'hub' };

  const [tabPart, queryPart] = rawHash.split('?');
  const tab = VALID_TABS.includes(tabPart.toLowerCase()) ? tabPart.toLowerCase() : 'hub';

  const params = new URLSearchParams(queryPart || '');
  const seasonParam = params.get('season');
  const season: (1 | 2 | 3 | 4) | undefined =
    seasonParam === '1' ? 1 : seasonParam === '2' ? 2 : seasonParam === '3' ? 3 : seasonParam === '4' ? 4 : undefined;

  const articleId = params.get('article') || null;
  const teamId = params.get('team') || null;
  const p1 = params.get('p1') || undefined;
  const p2 = params.get('p2') || undefined;

  return {
    tab,
    season,
    articleId,
    teamId,
    teamSeason: season,
    p1,
    p2,
  };
}

export default function App() {
  const initialHash = parseUrlHash();

  const [activeTab, setActiveTab] = useState<string>(initialHash.tab);
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3 | 4>(
    initialHash.season ? (initialHash.season as 1 | 2 | 3 | 4) : 4
  );
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [teamRecapModal, setTeamRecapModal] = useState<{ teamId: string; season: 1 | 2 | 3 | 4 } | null>(
    initialHash.teamId ? { teamId: initialHash.teamId, season: initialHash.teamSeason || 4 } : null
  );
  const [selectedNewsArticleId, setSelectedNewsArticleId] = useState<string | null>(initialHash.articleId || null);
  const [comparisonPlayers, setComparisonPlayers] = useState<{ player1Id: string; player2Id: string }>({
    player1Id: initialHash.p1 || 'p-lamar-anderson',
    player2Id: initialHash.p2 || 'p-aj-hinton',
  });
  const [copyToast, setCopyToast] = useState<{ visible: boolean; url: string }>({ visible: false, url: '' });

  // Handle URL updates when active state changes
  useEffect(() => {
    const params = new URLSearchParams();

    // Keep clean short URLs for tabs that don't need query parameters
    if (['standings', 'playoffs', 'schedule'].includes(activeTab)) {
      if (selectedSeason !== 3) {
        params.set('season', selectedSeason.toString());
      }
    } else if (activeTab === 'hub' && selectedSeason !== 3) {
      params.set('season', selectedSeason.toString());
    }

    if (activeTab === 'news' && selectedNewsArticleId) {
      params.set('article', selectedNewsArticleId);
    }

    if (teamRecapModal) {
      params.set('team', teamRecapModal.teamId);
      params.set('season', teamRecapModal.season.toString());
    }

    const queryString = params.toString();
    const targetHash = `#${activeTab}${queryString ? `?${queryString}` : ''}`;

    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, [activeTab, selectedSeason, selectedNewsArticleId, teamRecapModal, comparisonPlayers]);

  // Listen for browser Back/Forward or direct hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const parsed = parseUrlHash();
      setActiveTab(parsed.tab);
      if (parsed.season) {
        setSelectedSeason(parsed.season);
      }
      if (parsed.articleId !== undefined) {
        setSelectedNewsArticleId(parsed.articleId);
      }
      if (parsed.teamId) {
        setTeamRecapModal({ teamId: parsed.teamId, season: parsed.teamSeason || 3 });
      } else {
        setTeamRecapModal(null);
      }
      if (parsed.p1 && parsed.p2) {
        setComparisonPlayers({ player1Id: parsed.p1, player2Id: parsed.p2 });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  const handleShareCurrentLink = useCallback(() => {
    const currentUrl = window.location.href;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(currentUrl).catch(() => {});
    }
    setCopyToast({ visible: true, url: currentUrl });
    setTimeout(() => {
      setCopyToast((prev) => ({ ...prev, visible: false }));
    }, 3000);
  }, []);

  const handleComparePlayer = (playerId: string, targetPlayerId?: string) => {
    setComparisonPlayers((prev) => ({
      player1Id: playerId,
      player2Id: targetPlayerId || (prev.player1Id === playerId ? prev.player2Id : 'p-aj-hinton'),
    }));
    setActiveTab('compare');
  };

  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('cch_theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

  const handleNavigateToNews = (articleId?: string) => {
    setSelectedNewsArticleId(articleId || null);
    setActiveTab('news');
  };

  useEffect(() => {
    localStorage.setItem('cch_theme', theme);
    if (theme === 'light') {
      document.documentElement.classList.add('light');
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleSelectTeamRecap = (teamId: string, season?: 1 | 2 | 3 | 4) => {
    setTeamRecapModal({ teamId, season: season || (activeTab === 'rosters' ? 4 : selectedSeason) });
  };

  // Keyboard shortcut Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchModalOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col transition-colors duration-200 relative">
      {/* Link Copied Notification Toast */}
      {copyToast.visible && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="bg-slate-900 border-2 border-amber-500 text-white px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-3 max-w-md">
            <div className="w-8 h-8 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Check size={18} />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
                Direct Link Copied!
              </div>
              <p className="text-[11px] text-slate-300 truncate font-mono mt-0.5">
                {copyToast.url}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main App Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        onOpenSearch={() => setSearchModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
        onShareLink={handleShareCurrentLink}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {activeTab === 'hub' && (
          <div className="space-y-8">
            {/* Hero Showcase */}
            <HeroBanner onNavigate={(tab) => setActiveTab(tab)} selectedSeason={selectedSeason} />

            {/* TOP STORY ON FRONT PAGE: Season 4 Official Opening Day Rosters Featured Showcase */}
            <div className="bg-gradient-to-br from-amber-950/80 via-slate-900 to-slate-950 border-2 border-amber-500/60 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/30 transition-all" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

              {/* Main Headline & Status Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-950/90 border-2 border-amber-500/50 flex items-center justify-center p-1.5 shrink-0 shadow-xl overflow-hidden group-hover:scale-105 transition-transform">
                    <img
                      src={ajHinton99Img}
                      alt="A.J. Hinton 99 OVR"
                      className="w-full h-full object-contain drop-shadow-md"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md font-bold shadow-sm">
                        OFFICIAL LEAGUE RELEASE
                      </span>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                        SEASON 4 TIP-OFF
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        132 Active Players
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        12 Franchises Certified
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      Season 4 Official Opening Day Rosters & Depth Charts
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-medium leading-relaxed">
                      The Cali Championship Hoops front office has formally published the complete 11-man rosters for all 12 franchises. Explore all 132 player ratings, 10 elite 90+ superstars (led by 99 OVR MVP A.J. Hinton), 36 drafted rookies, and 8 new sideline coaches.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0 self-start lg:self-center">
                  <button
                    onClick={() => setActiveTab('rosters')}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <Users size={16} />
                    <span>Browse All 132 Rosters</span>
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => handleNavigateToNews('s4-opening-day-rosters-unveiled')}
                    className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <BookOpen size={16} />
                    <span>Read Full Story</span>
                  </button>
                </div>
              </div>

              {/* Front Page Official Roster Breakdown Podcast Feature */}
              <div onClick={(e) => e.stopPropagation()} className="relative z-10 pt-1">
                <PodcastPlayerCard
                  audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/The_New_Architecture_of_CCH_Season_4.m4a"
                  title="Official Podcast: The New Architecture of CCH Season 4"
                  subtitle="CCH Media Network • In-depth roster breakdowns, 99 OVR A.J. Hinton, 10 superstars, rookie impacts & rotation analysis"
                  compact={false}
                />
              </div>

              {/* 90+ OVR Superstars Spotlight Strip */}
              <div className="relative z-10 space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      Season 4 Superstars (90+ OVR Club)
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('rosters')}
                    className="text-[10px] font-mono font-bold text-slate-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
                  >
                    View All Player Ratings →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {[
                    { name: 'A.J. Hinton', team: 'Strykers', teamId: 'san-diego-strykers', pos: 'SG', ovr: 99, badge: 'MVP' },
                    { name: 'Jamar Dean', team: 'Renegades', teamId: 'oakland-renegades', pos: 'SG', ovr: 96, badge: 'Scoring King' },
                    { name: 'Jack McMichael Jr.', team: 'Dynamics', teamId: 'los-angeles-dynamics', pos: 'SG', ovr: 96, badge: 'All-Cali 1st' },
                    { name: 'DeAnte Gray', team: 'Strykers', teamId: 'san-diego-strykers', pos: 'PF', ovr: 96, badge: 'All-Star' },
                    { name: 'Kirk Barnes', team: 'Sabrewolves', teamId: 'san-diego-sabrewolves', pos: 'SG', ovr: 93, badge: '56-Pt Record' },
                  ].map((star) => (
                    <div
                      key={star.name}
                      onClick={() => handleSelectTeamRecap(star.teamId, 4)}
                      className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/50 p-3 rounded-2xl flex items-center justify-between relative overflow-hidden transition-all hover:bg-slate-900 cursor-pointer group/star"
                    >
                      <div className="min-w-0 flex-1 pr-2">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-mono font-black text-amber-400">
                            {star.team}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">
                            {star.pos}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mt-0.5 truncate group-hover/star:text-amber-300 transition-colors">
                          {star.name}
                        </h4>
                        <span className="text-[9px] font-mono text-slate-400 block truncate mt-0.5">
                          {star.badge}
                        </span>
                      </div>
                      <div className="flex flex-col items-end shrink-0">
                        <span className={`text-xs font-mono font-black px-2 py-1 rounded-lg shadow ${
                          star.ovr >= 99
                            ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 font-black'
                            : star.ovr >= 95
                            ? 'bg-amber-500 text-slate-950'
                            : 'bg-slate-800 text-amber-300 border border-amber-500/30'
                        }`}>
                          {star.ovr}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 12-Franchise Quick Opening Day Cards Strip */}
              <div className="relative z-10 space-y-2 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                    All 12 Franchise Opening Day Rosters (Click team to view Season 4 Roster)
                  </span>
                  <button
                    onClick={() => setActiveTab('rosters')}
                    className="text-[10px] font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
                  >
                    Open Roster Hub →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
                  {TEAMS.map((team) => {
                    const s4Roster = SEASON_ROSTERS[4]?.[team.id];
                    const topPlayer = s4Roster?.players?.[0];
                    // Team's first name (location / first part of the franchise name, e.g. "Sacramento", "San Francisco", "Golden State")
                    const teamFirstName = team.name.replace(` ${team.shortName}`, '');
                    return (
                      <div
                        key={team.id}
                        onClick={() => handleSelectTeamRecap(team.id, 4)}
                        className="bg-slate-950/90 border border-slate-800/90 hover:border-amber-500/60 p-2.5 rounded-2xl flex flex-col justify-between space-y-1.5 transition-all hover:bg-slate-900 cursor-pointer hover:-translate-y-0.5 group/teamcard"
                      >
                        <div className="flex items-center gap-2">
                          <TeamBadge teamId={team.id} size="sm" />
                          <div className="min-w-0 flex-1">
                            <span className="text-[11px] font-black text-white group-hover/teamcard:text-amber-300 transition-colors block truncate">
                              {team.shortName}
                            </span>
                            <span className="text-[9px] font-mono text-slate-400 block truncate">
                              {teamFirstName}
                            </span>
                          </div>
                        </div>

                        {topPlayer && (
                          <div className="flex items-center justify-between pt-1 border-t border-slate-800/60 text-[10px] font-mono">
                            <span className="text-slate-300 truncate max-w-[80px]">
                              {topPlayer.name.split(' ').pop()}
                            </span>
                            <span className="text-amber-400 font-bold shrink-0">
                              {topPlayer.ovr} OVR
                            </span>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Season 4 Draft Featured Showcase */}
            <div
              className="bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border-2 border-amber-500/50 p-6 sm:p-7 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />

              {/* Main Headline & Draft Status Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 shadow-lg">
                    <Trophy size={28} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md font-bold shadow-sm">
                        OFFICIAL DRAFT RESULTS
                      </span>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                        SEASON 4 COMPLETE
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        {DRAFT_RESULTS_S4.length} Draft Picks
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        {DRAFT_PROSPECTS.length} Big Board Prospects
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
                      Season 4 CCH Draft Headquarters: Official 3-Round Selections & Scouting Profiles
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-medium leading-relaxed">
                      The Season 4 CCH Draft is officially complete! Golden State Enterprise selected #1 consensus superstar Carlton Daugherty (SF, 85 OVR) and Round 3 steal King Jordan (Duke, 75 OVR). Explore full scouting breakdowns, player ratings, and podcast analysis below.
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
                  <button
                    onClick={() => setActiveTab('draft')}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>View All Draft Results & Board</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* #1 Overall Pick Spotlight: Carlton Daugherty Profile Feature */}
              <div className="relative z-10 bg-slate-950/90 border border-amber-500/40 hover:border-amber-400/80 rounded-3xl p-5 sm:p-6 shadow-2xl transition-all">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Player Profile Image - Compact Full Uncropped Showcase */}
                  <div className="lg:col-span-4 xl:col-span-3 flex justify-center">
                    <div className="relative w-full max-w-[230px] sm:max-w-[260px] rounded-2xl overflow-hidden border-2 border-amber-500/60 shadow-2xl bg-slate-950 flex flex-col items-center group/img">
                      {/* Top Bar for Card */}
                      <div className="w-full bg-slate-900 border-b border-amber-500/30 px-3 py-1.5 flex items-center justify-between">
                        <span className="text-[10px] font-mono font-black text-amber-400 uppercase tracking-wider flex items-center gap-1">
                          <Star size={11} className="text-amber-400 fill-amber-400" /> #1 Pick
                        </span>
                        <span className="text-[10px] font-mono font-black bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded">
                          85 OVR
                        </span>
                      </div>

                      {/* Full Natural Image */}
                      <div className="w-full bg-black/40 flex items-center justify-center p-1.5">
                        <img
                          src={carltonDaughertyImg}
                          alt="Carlton Daugherty - #1 Overall Pick Profile"
                          className="w-full h-auto object-contain rounded-lg shadow-md transition-transform duration-300 group-hover/img:scale-[1.02]"
                        />
                      </div>

                      {/* Bottom Caption Bar */}
                      <div className="w-full bg-slate-900/90 border-t border-slate-800 px-2.5 py-1.5 flex items-center justify-between text-[10px] font-mono text-slate-300">
                        <span className="font-bold text-white truncate">Carlton Daugherty</span>
                        <span className="text-amber-400 font-bold shrink-0">SF • UCSD</span>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details & Story Summary */}
                  <div className="lg:col-span-8 xl:col-span-9 space-y-3.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded">
                        TOP STORY • DRAFT PROFILE
                      </span>
                      <span className="text-[10px] font-mono font-bold text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                        Golden State Enterprise
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        UC San Diego • SF • 6&apos;7&quot;, 220 lbs
                      </span>
                    </div>

                    <div>
                      <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                        Carlton Daugherty: Generational Two-Way Superstar Arrives in the Bay Area
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed font-medium">
                        Unanimous consensus #1 prospect Carlton Daugherty heads to Golden State Enterprise with an elite 85 overall rating. Armed with Grade A+ 3-point marksmanship, Grade A+ lockdown perimeter defense, and Grade A interior scoring touch, Daugherty joins head coach Wyatt Zimmerman to form an immediate championship contender.
                      </p>
                    </div>

                    {/* Skill Badges Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                      <div className="bg-slate-900 border border-amber-500/30 p-2 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-slate-400 block">Overall</span>
                        <span className="text-sm font-black text-amber-400 font-mono">85 OVR</span>
                      </div>
                      <div className="bg-slate-900 border border-emerald-500/30 p-2 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-slate-400 block">3PT Shooting</span>
                        <span className="text-sm font-black text-emerald-400 font-mono">Grade A+</span>
                      </div>
                      <div className="bg-slate-900 border border-sky-500/30 p-2 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-slate-400 block">Perimeter D</span>
                        <span className="text-sm font-black text-sky-400 font-mono">Grade A+</span>
                      </div>
                      <div className="bg-slate-900 border border-purple-500/30 p-2 rounded-xl text-center">
                        <span className="text-[10px] font-mono text-slate-400 block">Inside Scoring</span>
                        <span className="text-sm font-black text-purple-400 font-mono">Grade A</span>
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <button
                        onClick={() => handleNavigateToNews('s4-carlton-daugherty-profile')}
                        className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                      >
                        <BookOpen size={15} />
                        <span>Read Full Profile Article</span>
                      </button>
                      <button
                        onClick={() => setActiveTab('draft')}
                        className="px-5 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                      >
                        <span>View All 36 Draft Picks</span>
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Front Page Draft Recap Podcast Feature */}
              <div className="relative z-10">
                <PodcastPlayerCard
                  audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/CCH_Season_Four_Draft_steals_and_reaches.m4a"
                  title="Official Season 4 Draft Recap: Steals, Reaches & Grades"
                  subtitle="CCH Draft War Room Podcast • In-depth breakdown of all 36 selections, big steals, reaches, and team haul grades"
                  compact={true}
                />
              </div>

              {/* Top Picks Showcase Strip */}
              <div className="space-y-2 relative z-10 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      Round 1 Top Selections
                    </span>
                  </div>
                  <button
                    onClick={() => setActiveTab('draft')}
                    className="text-[10px] font-mono font-bold text-slate-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
                  >
                    View All {DRAFT_RESULTS_S4.length} Draft Picks →
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {DRAFT_RESULTS_S4.slice(0, 5).map((pick) => (
                    <div
                      key={pick.overallPick}
                      onClick={() => setActiveTab('draft')}
                      className="bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 p-3 rounded-2xl flex items-center justify-between relative overflow-hidden transition-all hover:bg-slate-900 cursor-pointer"
                    >
                      {/* Pick Badge */}
                      <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded-bl-lg shadow-sm">
                        PICK #{pick.overallPick}
                      </div>

                      <div className="pr-1 pt-1.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-mono font-black text-amber-400">
                            {pick.teamAbbr}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">
                            {pick.position}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mt-0.5 break-words">
                          {pick.shortName}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 block truncate mt-0.5">
                          {pick.school}
                        </span>
                      </div>

                      <div className="flex flex-col items-end shrink-0 pl-2 pt-2">
                        <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2 py-1 rounded-lg shadow">
                          {pick.ovr}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Embedded Front Page Hub Draft Prospects Podcast Player */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative z-10 pt-2"
              >
                <PodcastPlayerCard
                  audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Daugherty_versus_Wilkens_for_Franchise_Foundation.m4a"
                  title="Draft Debate: Carlton Daugherty vs. Grok Wilkens for Franchise Foundation"
                  subtitle="Official CCH Draft Breakdown • UC San Diego vs. Kentucky Cornerstone Analysis"
                />
              </div>
            </div>

            {/* Breaking Offseason News Card */}
            <BreakingNewsCard onNavigateToNews={handleNavigateToNews} />

            {/* Championship Game Video Broadcast */}
            <ChampionshipVideoCard />

            {/* Quick Access Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Standings Quick Card */}
              <div
                onClick={() => setActiveTab('standings')}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-3xl space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <Activity size={22} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">LEAGUE TABLE</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  Regular Season Standings
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Track win/loss records, current streaks, PPG, and playoff seed qualification across Northern Cali and Southern Cali.
                </p>
              </div>

              {/* Playoffs Quick Card */}
              <div
                onClick={() => setActiveTab('playoffs')}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-3xl space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-red-500/10 text-red-400 group-hover:bg-red-500 group-hover:text-slate-950 transition-colors">
                    <Trophy size={22} />
                  </div>
                  <span className="text-xs font-mono text-amber-400 font-black">POSTSEASON BRACKET</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  Playoffs & Championship
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Interactive postseason brackets featuring Season 1 Stallions, Season 2 Reds, and Season 3 #8 seed Fresno upset.
                </p>
              </div>

              {/* Schedule Quick Card */}
              <div
                onClick={() => setActiveTab('schedule')}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-3xl space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-950 transition-colors">
                    <Calendar size={22} />
                  </div>
                  <span className="text-xs font-mono text-slate-400 font-bold">GAME CENTER</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  Schedule & Box Scores
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Browse all regular season matchups chronologically with top scorer highlights, month filters, and score search.
                </p>
              </div>

              {/* All-Star Game Quick Card */}
              <div
                onClick={() => setActiveTab('allstar')}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 p-6 rounded-3xl space-y-3 cursor-pointer transition-all hover:-translate-y-1 shadow-lg group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-slate-950 transition-colors">
                    <Star size={22} />
                  </div>
                  <span className="text-xs font-mono text-amber-400 font-bold">ALL-STAR WEEKEND</span>
                </div>
                <h3 className="text-xl font-black text-white group-hover:text-amber-400 transition-colors">
                  All-Star Showcase
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  NorCal vs SoCal All-Star history, Dunk Contest, 3-Point Shootout, and Season 3 showcase recap.
                </p>
              </div>
            </div>

            {/* Standings Component Preview */}
            <StandingsView
              selectedSeason={selectedSeason}
              setSelectedSeason={setSelectedSeason}
              onSelectTeamRecap={handleSelectTeamRecap}
            />
          </div>
        )}

        {activeTab === 'rosters' && (
          <OpeningDayRostersView
            onSelectTeam={(teamId) => handleSelectTeamRecap(teamId, 4)}
            onOpenTeamModal={(teamId, season) => handleSelectTeamRecap(teamId, season || 4)}
          />
        )}

        {activeTab === 'news' && (
          <NewsView
            onSelectTeamRecap={handleSelectTeamRecap}
            initialArticleId={selectedNewsArticleId}
          />
        )}

        {activeTab === 'draft' && (
          <DraftView
            onSelectTeamRecap={handleSelectTeamRecap}
          />
        )}

        {activeTab === 'standings' && (
          <StandingsView
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            onSelectTeamRecap={handleSelectTeamRecap}
          />
        )}

        {activeTab === 'playoffs' && (
          <PlayoffsView
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            onSelectTeamRecap={handleSelectTeamRecap}
            onNavigateToNews={handleNavigateToNews}
          />
        )}

        {activeTab === 'schedule' && (
          <ScheduleBrowser
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            onSelectTeamRecap={handleSelectTeamRecap}
            onNavigateToNews={handleNavigateToNews}
          />
        )}

        {activeTab === 'teams' && <TeamDirectory onSelectTeamRecap={handleSelectTeamRecap} />}

        {activeTab === 'transactions' && <TransactionsView />}

        {activeTab === 'allstar' && <AllStarGameView />}

        {activeTab === 'halloffame' && <HallOfFameView onSelectTeamRecap={handleSelectTeamRecap} />}

        {activeTab === 'records' && <RecordBookView />}

        {activeTab === 'players' && <PlayerDirectory onComparePlayer={handleComparePlayer} />}

        {activeTab === 'compare' && (
          <PlayerComparisonView
            initialPlayer1Id={comparisonPlayers.player1Id}
            initialPlayer2Id={comparisonPlayers.player2Id}
            onSelectTeam={handleSelectTeamRecap}
          />
        )}

        {activeTab === 'h2h' && <HeadToHeadView onSelectTeamRecap={handleSelectTeamRecap} />}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigateTab={(tab) => setActiveTab(tab)}
        onSelectTeamRecap={handleSelectTeamRecap}
        onComparePlayer={handleComparePlayer}
      />

      {/* Team Season Recap Modal */}
      {teamRecapModal && (
        <TeamSeasonModal
          teamId={teamRecapModal.teamId}
          initialSeason={teamRecapModal.season}
          onClose={() => setTeamRecapModal(null)}
        />
      )}

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-10 text-slate-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <SocialFooterGrid />

          <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CCHLeagueLogo size={36} />
              <div>
                <span className="font-extrabold text-slate-200">CALI CHAMPIONSHIP HOOPS</span>
                <p className="text-[10px] text-slate-500">Official NBA 2K Custom League Encyclopedia & Record Book</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] font-semibold">
              <a
                href="https://forums.operationsports.com/forums/forum/dynasty-headquarters/basketball-dynasties/941879-cali-championship-hoops-nba2k-custom-league"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors"
              >
                <ExternalLink size={13} /> Operation Sports Dynasty Thread
              </a>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">12 Franchises</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
