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
import { DRAFT_PROSPECTS } from './data/draftData';
import { SearchModal } from './components/SearchModal';
import { TeamSeasonModal } from './components/TeamSeasonModal';
import { CCHLeagueLogo } from './components/TeamLogos';
import { SocialFooterGrid } from './components/SocialLinks';
import { Trophy, Shield, Calendar, Award, BookOpen, Users, Activity, ExternalLink, Tv, Heart, Star, Link2, Check } from 'lucide-react';

const VALID_TABS = [
  'hub',
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
  season?: 1 | 2 | 3;
  articleId?: string | null;
  teamId?: string | null;
  teamSeason?: 1 | 2 | 3;
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
  const season: (1 | 2 | 3) | undefined =
    seasonParam === '1' ? 1 : seasonParam === '2' ? 2 : seasonParam === '3' ? 3 : undefined;

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
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3>(initialHash.season || 3);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [teamRecapModal, setTeamRecapModal] = useState<{ teamId: string; season: 1 | 2 | 3 } | null>(
    initialHash.teamId ? { teamId: initialHash.teamId, season: initialHash.teamSeason || 3 } : null
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

  const handleSelectTeamRecap = (teamId: string, season?: 1 | 2 | 3) => {
    setTeamRecapModal({ teamId, season: season || selectedSeason });
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

            {/* Upcoming Season 4 Draft Featured Showcase — TOP OF STORIES */}
            <div
              onClick={() => setActiveTab('draft')}
              className="bg-gradient-to-br from-amber-950/70 via-slate-900 to-slate-950 border-2 border-amber-500/50 hover:border-amber-400 p-6 sm:p-7 rounded-3xl space-y-5 cursor-pointer transition-all hover:scale-[1.008] shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20 group-hover:bg-amber-500/25 transition-all" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all shadow-lg">
                    <Trophy size={28} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md font-bold shadow-sm">
                        LATEST OFFSEASON RELEASE
                      </span>
                      <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2.5 py-0.5 rounded-md border border-amber-500/30">
                        SEASON 4 DRAFT
                      </span>
                      <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                        9 California Standouts
                      </span>
                      <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                        {DRAFT_PROSPECTS.length} Verified Prospects
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-amber-400 transition-colors leading-tight">
                      Season 4 Draft Central: Official {DRAFT_PROSPECTS.length}-Prospect Big Board & Scouting Profiles
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-medium leading-relaxed">
                      Scouting evaluations are live for the generational Season 4 draft pool, headlined by Carlton Daugherty (SF, UC San Diego, 85 OVR), international sniper Stephan Sirven (SG, France, 84 OVR), Minnesota stretch big Dell Gooden (PF/C, 84 OVR), Kentucky rim anchor Grok Wilkens (C, 84 OVR), and jumbo floor general R.J. Rush (PG, Louisiana-Monroe, 83 OVR).
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start lg:self-center">
                  <button className="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 flex items-center gap-2 transition-all cursor-pointer">
                    <span>Enter Draft Central</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>

              {/* Top 5 Draft Prospect Highlights Strip with TOP 5 Tags */}
              <div className="space-y-2 relative z-10 pt-2 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono font-black uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Star size={12} className="text-amber-400 fill-amber-400" />
                      Top 5 Draft Prospects Spotlight
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-400 hover:text-amber-300 flex items-center gap-1">
                    View All {DRAFT_PROSPECTS.length} Prospects →
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5">
                  {DRAFT_PROSPECTS.slice(0, 5).map((prospect) => (
                    <div
                      key={prospect.rank}
                      className="bg-slate-950/80 border border-slate-800 group-hover:border-amber-500/40 p-3 rounded-2xl flex items-center justify-between relative overflow-hidden transition-all hover:bg-slate-900"
                    >
                      {/* Top 5 Tag */}
                      <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-[8px] font-mono font-black uppercase px-2 py-0.5 rounded-bl-lg shadow-sm">
                        TOP 5
                      </div>

                      <div className="pr-1 pt-1.5 min-w-0 flex-1">
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-mono font-black text-amber-400">
                            #{prospect.rank}
                          </span>
                          <span className="text-[10px] font-mono text-slate-400 font-bold">
                            {prospect.position}
                          </span>
                        </div>
                        <h4 className="text-xs font-bold text-white leading-tight mt-0.5 break-words">
                          {prospect.name}
                        </h4>
                        <span className="text-[10px] font-mono text-slate-400 block truncate mt-0.5">
                          {prospect.school}
                        </span>
                      </div>

                      <div className="flex flex-col items-end shrink-0 pl-2 pt-2">
                        <span className="text-xs font-mono font-black bg-amber-500 text-slate-950 px-2 py-1 rounded-lg shadow">
                          {prospect.ovr}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
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
