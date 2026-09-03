import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { FeaturedGameStories } from './components/FeaturedGameStories';
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
import { PlayerOfTheWeekView } from './components/PlayerOfTheWeekView';
import { StatLeadersView } from './components/StatLeadersView';
import { SearchModal } from './components/SearchModal';
import { TeamSeasonModal } from './components/TeamSeasonModal';
import { CCHLeagueLogo } from './components/TeamLogos';
import { SocialFooterGrid } from './components/SocialLinks';
import { Trophy, Shield, Calendar, Award, BookOpen, Users, Activity, ExternalLink, Tv, Heart, Star, Link2, Check, ChevronRight, Sparkles, Share2 } from 'lucide-react';

const VALID_TABS = [
  'hub',
  'potw',
  'statleaders',
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
  const [copiedArticleId, setCopiedArticleId] = useState<string | null>(null);

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

  const handleShareArticleLink = useCallback((articleId: string) => {
    const baseUrl = window.location.href.split('#')[0];
    const directUrl = `${baseUrl}#news?article=${articleId}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(directUrl).catch(() => {});
    }
    setCopiedArticleId(articleId);
    setCopyToast({ visible: true, url: directUrl });
    setTimeout(() => {
      setCopiedArticleId((prev) => (prev === articleId ? null : prev));
    }, 2500);
    setTimeout(() => {
      setCopyToast((prev) => ({ ...prev, visible: false }));
    }, 3500);
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
        onNavigateToNews={handleNavigateToNews}
        onSelectTeam={(teamId, season) => handleSelectTeamRecap(teamId, season || selectedSeason)}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {activeTab === 'hub' && (
          <div className="space-y-8">
            {/* Hero Showcase */}
            <HeroBanner onNavigate={(tab) => setActiveTab(tab)} selectedSeason={selectedSeason} />

            {/* Featured Game Story (California Reds vs San Francisco Knights) */}
            <FeaturedGameStories
              onNavigateToNews={handleNavigateToNews}
              onSelectTeam={(teamId) => handleSelectTeamRecap(teamId, 4)}
              onNavigateToTab={(tab) => setActiveTab(tab)}
            />

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

        {activeTab === 'statleaders' && (
          <StatLeadersView
            onSelectTeam={(teamId, season) => handleSelectTeamRecap(teamId, season || selectedSeason)}
            onComparePlayer={(playerId) => handleComparePlayer(playerId)}
            initialSeason={selectedSeason}
          />
        )}

        {activeTab === 'potw' && (
          <PlayerOfTheWeekView
            onNavigateToNews={handleNavigateToNews}
            onSelectTeam={(teamId, season) => handleSelectTeamRecap(teamId, season || selectedSeason)}
            onNavigateToTab={(tab) => setActiveTab(tab)}
          />
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
