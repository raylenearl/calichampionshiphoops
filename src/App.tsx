import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { OpeningDayRecapCard } from './components/OpeningDayRecapCard';
import { PlayerOfTheWeekCard } from './components/PlayerOfTheWeekCard';
import { LatestGamesShowcase } from './components/LatestGamesShowcase';
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
import { TeamBadge } from './components/TeamBadge';
import pognottiImg from './assets/images/Pognotti.png';
import jGallowayImg from './assets/images/JGalloway.png';
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

            {/* TOP STORY (LATEST GAMES SLATE): Game 9, 8 & 7 Matchup Showcases (Oct 22-25) */}
            <LatestGamesShowcase
              onNavigateToNews={handleNavigateToNews}
              onSelectTeam={(teamId) => handleSelectTeamRecap(teamId, 4)}
              onNavigateToTab={(tab) => setActiveTab(tab)}
            />

            {/* ARTICLE 2: OFFICIAL LEAGUE AWARDS - Player of the Week (Oct 15-21) */}
            <PlayerOfTheWeekCard
              onNavigateToNews={handleNavigateToNews}
              onSelectTeam={(teamId) => handleSelectTeamRecap(teamId, 4)}
            />

            {/* ARTICLE 3: Opening Week Game Recap & Highlights */}
            <OpeningDayRecapCard
              onNavigateToNews={handleNavigateToNews}
              onSelectTeam={(teamId) => handleSelectTeamRecap(teamId, 4)}
            />

            {/* BREAKING NEWS HEADLINE: Pognotti Joins Sacramento, Galloway Returns to Strykers */}
            <div className="bg-gradient-to-br from-red-950/80 via-slate-900 to-amber-950/40 border-2 border-red-500/60 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-red-500/25 transition-all" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

              {/* Breaking Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-red-500/30 pb-4 relative z-10">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="animate-pulse flex h-3 w-3 rounded-full bg-red-500 shadow-lg shadow-red-500/50" />
                  <span className="text-xs font-black uppercase tracking-widest bg-red-600 text-white px-3 py-1 rounded-md font-mono flex items-center gap-1.5 shadow-sm">
                    🚨 BREAKING NEWS
                  </span>
                  <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-1 rounded-md border border-amber-500/40">
                    SEASON 4 MEGA CONTRACT SIGNINGS
                  </span>
                  <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30">
                    4 YR / $171.87M DEALS
                  </span>
                </div>
                <button
                  onClick={() => handleNavigateToNews('s4-blockbuster-signings-pognotti-galloway')}
                  className="text-xs font-mono font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
                >
                  Read Full Article & Analysis →
                </button>
              </div>

              {/* Main Headline & Intro */}
              <div className="relative z-10 space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight tracking-tight">
                  POGNOTTI JOINS SACRAMENTO • GALLOWAY RETURNS TO SAN DIEGO STRYKERS
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-4xl font-medium leading-relaxed">
                  Two seismic four-year, $171.87 million contracts have officially been executed. All-time single-game block record holder <strong className="text-amber-300">Adrian Pognotti (87 OVR)</strong> heads north to anchor the defending champion Sacramento Stallions, while two-way powerhouse <strong className="text-amber-300">Johnny Galloway (88 OVR)</strong> rejoins reigning MVP A.J. Hinton on the San Diego Strykers.
                </p>
              </div>

              {/* Dual Player Signing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 relative z-10">
                {/* Card 1: Adrian Pognotti to Sacramento Stallions */}
                <div
                  onClick={() => handleSelectTeamRecap('sacramento-stallions', 4)}
                  className="bg-slate-950/90 border-2 border-purple-500/40 hover:border-amber-400 p-5 rounded-3xl space-y-4 shadow-xl cursor-pointer group/pognotti transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between border-b border-purple-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <TeamBadge teamId="sacramento-stallions" size="sm" />
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase text-purple-400">SACRAMENTO STALLIONS</span>
                        <h3 className="text-sm font-black text-white group-hover/pognotti:text-amber-300 transition-colors">Defending Champions Anchor</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-xl shadow">
                      87 OVR
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border-2 border-purple-500/50 overflow-hidden shrink-0 shadow-lg group-hover/pognotti:border-amber-400 transition-colors">
                      <img
                        src={pognottiImg}
                        alt="Adrian Pognotti - Sacramento Stallions"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <h4 className="text-lg sm:text-xl font-black text-white truncate">
                          Adrian Pognotti
                        </h4>
                        <span className="text-xs font-mono font-bold text-amber-400">#44 • C</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Height / Weight:</span>
                          <span className="font-bold text-white">7&apos;2&quot; • 280 lbs</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Experience / Age:</span>
                          <span className="font-bold text-white">4th Season • Age 22</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Origin / Origin:</span>
                          <span className="font-bold text-white">La Costa Canyon HS</span>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                          <span className="text-emerald-400 font-bold">Contract Terms:</span>
                          <span className="font-black text-emerald-300 font-mono">4 Yr / $171.87M</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Buzz / Quotes */}
                  <div className="space-y-2 text-[11px] bg-slate-900/80 p-3 rounded-2xl border border-slate-800 font-sans">
                    <p className="text-amber-300 font-medium">
                      <strong className="text-white font-bold">Nate Duncan:</strong> &ldquo;Several news outlets reporting that Adrian Pognotti will join the Stallions on a 4yr/$171.87M contract.&rdquo;
                    </p>
                    <p className="text-purple-300 font-medium border-t border-slate-800/80 pt-1.5">
                      <strong className="text-purple-400 font-bold">Sacramento Stallions:</strong> &ldquo;The dotted line has been signed. Adrian Pognotti is now a part of StallionsNation. Here we go!&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-amber-400 font-bold">
                    <span>Single-Game Record Holder (10 BLK)</span>
                    <span className="flex items-center gap-1 group-hover/pognotti:translate-x-1 transition-transform">
                      View Stallions Roster →
                    </span>
                  </div>
                </div>

                {/* Card 2: Johnny Galloway Returns to San Diego Strykers */}
                <div
                  onClick={() => handleSelectTeamRecap('san-diego-strykers', 4)}
                  className="bg-slate-950/90 border-2 border-amber-500/40 hover:border-amber-400 p-5 rounded-3xl space-y-4 shadow-xl cursor-pointer group/galloway transition-all hover:scale-[1.01]"
                >
                  <div className="flex items-center justify-between border-b border-amber-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <TeamBadge teamId="san-diego-strykers" size="sm" />
                      <div>
                        <span className="text-[10px] font-mono font-black uppercase text-amber-400">SAN DIEGO STRYKERS</span>
                        <h3 className="text-sm font-black text-white group-hover/galloway:text-amber-300 transition-colors">Lockdown Two-Way Core</h3>
                      </div>
                    </div>
                    <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2.5 py-1 rounded-xl shadow">
                      88 OVR
                    </span>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-900 border-2 border-amber-500/50 overflow-hidden shrink-0 shadow-lg group-hover/galloway:border-amber-400 transition-colors">
                      <img
                        src={jGallowayImg}
                        alt="Johnny Galloway - San Diego Strykers"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="space-y-1.5 min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-1">
                        <h4 className="text-lg sm:text-xl font-black text-white truncate">
                          Johnny Galloway
                        </h4>
                        <span className="text-xs font-mono font-bold text-amber-400">#13 • PF / SF</span>
                      </div>
                      <div className="text-[11px] font-mono text-slate-300 space-y-0.5">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Height / Weight:</span>
                          <span className="font-bold text-white">6&apos;5&quot; • 240 lbs</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Experience / Age:</span>
                          <span className="font-bold text-white">4th Season • Age 20</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">College / Origin:</span>
                          <span className="font-bold text-white">Portland State</span>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-800">
                          <span className="text-emerald-400 font-bold">Contract Terms:</span>
                          <span className="font-black text-emerald-300 font-mono">4 Yr / $171.87M</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Buzz / Quotes */}
                  <div className="space-y-2 text-[11px] bg-slate-900/80 p-3 rounded-2xl border border-slate-800 font-sans">
                    <p className="text-amber-300 font-medium">
                      <strong className="text-white font-bold">Nabil Karim:</strong> &ldquo;Strykers secure the services of Johnny Galloway with a 4yr/$171.87M contract.&rdquo;
                    </p>
                    <p className="text-amber-300 font-medium border-t border-slate-800/80 pt-1.5">
                      <strong className="text-amber-400 font-bold">San Diego Strykers:</strong> &ldquo;It&apos;s a done deal, folks! Johnny Galloway is joining us on a 4yr/$171.87M deal. Welcome!&rdquo;
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-1 text-[11px] font-mono text-amber-400 font-bold">
                    <span>Rejoins MVP A.J. Hinton (99 OVR) &amp; Gray (96 OVR)</span>
                    <span className="flex items-center gap-1 group-hover/galloway:translate-x-1 transition-transform">
                      View Strykers Roster →
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Navigation Actions */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-red-500/20 relative z-10">
                <button
                  onClick={() => handleNavigateToNews('s4-blockbuster-signings-pognotti-galloway')}
                  className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={16} />
                  <span>Read Free Agency Deep-Dive</span>
                  <ChevronRight size={16} />
                </button>
                <button
                  onClick={() => setActiveTab('rosters')}
                  className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Users size={16} className="text-amber-400" />
                  <span>View All Season 4 Rosters</span>
                </button>
                <button
                  onClick={() => setActiveTab('transactions')}
                  className="px-4 py-2.5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles size={16} className="text-amber-400" />
                  <span>Transaction Ledger</span>
                </button>
              </div>
            </div>

            {/* TOP STORY ON FRONT PAGE: Season 4 Official Schedule Release */}
            <div className="bg-gradient-to-br from-blue-950/80 via-slate-900 to-slate-950 border-2 border-blue-500/50 p-6 sm:p-8 rounded-3xl space-y-6 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-blue-500/25 transition-all" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

              {/* Main Headline & Action Bar */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-950/90 border-2 border-blue-500/50 flex flex-col items-center justify-center p-2 shrink-0 shadow-xl overflow-hidden group-hover:scale-105 transition-transform text-center">
                    <Calendar className="text-amber-400 mb-1" size={28} />
                    <span className="text-[10px] font-mono font-black uppercase text-blue-400 tracking-wider">OCT 17</span>
                    <span className="text-[8px] font-mono text-slate-400 font-bold">TIP-OFF</span>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-blue-500 text-slate-950 px-2.5 py-0.5 rounded-md font-bold shadow-sm whitespace-nowrap shrink-0">
                        TOP STORY
                      </span>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30 whitespace-nowrap shrink-0">
                        OFFICIAL SCHEDULE RELEASE
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20 whitespace-nowrap shrink-0">
                        132 Regular Season Games
                      </span>
                      <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 whitespace-nowrap shrink-0">
                        22 Games Per Franchise
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                      Official Season 4 Schedule Released: 132-Game Regular Season Calendar
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-medium leading-relaxed">
                      The CCH League Office has officially published the complete 22-game regular-season schedule for all 12 franchises from October 17 through April 9. Features a blockbuster 5-game Opening Night slate, Christmas Day showcase, and Underwood&apos;s rivalry clashes against the Strykers.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0 self-start lg:self-center">
                  <button
                    onClick={() => {
                      setSelectedSeason(4);
                      setActiveTab('schedule');
                    }}
                    className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <Calendar size={16} />
                    <span>Browse Full S4 Schedule</span>
                    <ChevronRight size={16} />
                  </button>
                  <button
                    onClick={() => handleNavigateToNews('s4-schedule-announcement')}
                    className="px-5 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-bold text-xs sm:text-sm flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <BookOpen size={16} />
                    <span>Read Schedule Release</span>
                  </button>
                </div>
              </div>

              {/* Opening Night (Oct 17) 5-Game Marquee Showcase */}
              <div className="relative z-10 space-y-2.5 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Sparkles size={12} className="text-amber-400" />
                      Opening Night Blockbusters • Thursday, October 17 (5 Games)
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedSeason(4);
                      setActiveTab('schedule');
                    }}
                    className="text-[10px] font-mono font-bold text-slate-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer bg-transparent border-0"
                  >
                    View All Months (Oct – Apr) →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5">
                  {[
                    { away: 'Anaheim Admirals', awayId: 'anaheim-admirals', home: 'Oakland Renegades', homeId: 'oakland-renegades', tag: 'NorCal vs SoCal' },
                    { away: 'San Diego Strykers', awayId: 'san-diego-strykers', home: 'Long Beach Vipers', homeId: 'long-beach-vipers', tag: 'MVP Hinton Debut' },
                    { away: 'Sacramento Stallions', awayId: 'sacramento-stallions', home: 'California Reds', homeId: 'california-reds', tag: 'Champs vs S2 Champs' },
                    { away: 'San Jose Tigersharks', awayId: 'san-jose-tigersharks', home: 'Fresno Mad Dogs', homeId: 'fresno-mad-dogs', tag: 'Platinum Cup' },
                    { away: 'San Diego Sabrewolves', awayId: 'san-diego-sabrewolves', home: 'Los Angeles Dynamics', homeId: 'los-angeles-dynamics', tag: 'Underwood Debut' },
                  ].map((m, idx) => (
                    <div
                      key={idx}
                      onClick={() => {
                        setSelectedSeason(4);
                        setActiveTab('schedule');
                      }}
                      className="bg-slate-950/85 border border-slate-800 hover:border-blue-500/60 p-3 rounded-2xl flex flex-col justify-between transition-all hover:bg-slate-900 cursor-pointer group/game hover:-translate-y-0.5 space-y-2 shadow-sm"
                    >
                      <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 border-b border-slate-800/80 pb-1.5">
                        <span className="text-amber-400 font-bold">Oct 17</span>
                        <span className="text-[9px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded border border-blue-500/20 truncate">
                          {m.tag}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <TeamBadge teamId={m.awayId} size="xs" />
                            <span className="text-xs font-bold text-slate-300 truncate">
                              {m.away.replace(/^(San Diego |San Francisco |Golden State |Long Beach |Los Angeles |San Jose |California |Sacramento |Oakland |Anaheim |Fresno )/, '')}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-slate-400">AWAY</span>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5 min-w-0">
                            <TeamBadge teamId={m.homeId} size="xs" />
                            <span className="text-xs font-black text-white group-hover/game:text-amber-300 transition-colors truncate">
                              {m.home.replace(/^(San Diego |San Francisco |Golden State |Long Beach |Los Angeles |San Jose |California |Sacramento |Oakland |Anaheim |Fresno )/, '')}
                            </span>
                          </div>
                          <span className="text-[10px] font-mono font-bold text-amber-400">HOME</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Calendar Milestones Strip */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 border-t border-slate-800/80">
                <div
                  onClick={() => {
                    setSelectedSeason(4);
                    setActiveTab('schedule');
                  }}
                  className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl hover:border-amber-500/40 cursor-pointer transition-all"
                >
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Christmas Showcase</span>
                  <p className="text-xs font-black text-white truncate">Sabrewolves @ Renegades</p>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">Dec 25</span>
                </div>

                <div
                  onClick={() => {
                    setSelectedSeason(4);
                    setActiveTab('schedule');
                  }}
                  className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl hover:border-amber-500/40 cursor-pointer transition-all"
                >
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">San Diego Derby</span>
                  <p className="text-xs font-black text-white truncate">Sabrewolves vs. Strykers</p>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">Jan 16 & Feb 6</span>
                </div>

                <div
                  onClick={() => {
                    setSelectedSeason(4);
                    setActiveTab('schedule');
                  }}
                  className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl hover:border-amber-500/40 cursor-pointer transition-all"
                >
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Finals Rematch</span>
                  <p className="text-xs font-black text-white truncate">Stallions vs. Mad Dogs</p>
                  <span className="text-[10px] font-mono text-blue-400 font-bold">Oct 31 & Nov 26</span>
                </div>

                <div
                  onClick={() => {
                    setSelectedSeason(4);
                    setActiveTab('schedule');
                  }}
                  className="bg-slate-950/70 border border-slate-800/80 p-2.5 rounded-xl hover:border-amber-500/40 cursor-pointer transition-all"
                >
                  <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Regular Season Finale</span>
                  <p className="text-xs font-black text-white truncate">Admirals @ Reds</p>
                  <span className="text-[10px] font-mono text-amber-400 font-bold">April 9</span>
                </div>
              </div>
            </div>

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
