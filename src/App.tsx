import React, { useState, useEffect } from 'react';
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
import { HeadToHeadView } from './components/HeadToHeadView';
import { AllStarGameView } from './components/AllStarGameView';
import { TransactionsView } from './components/TransactionsView';
import { NewsView } from './components/NewsView';
import { SearchModal } from './components/SearchModal';
import { TeamSeasonModal } from './components/TeamSeasonModal';
import { CCHLeagueLogo } from './components/TeamLogos';
import { SocialFooterGrid } from './components/SocialLinks';
import { Trophy, Shield, Calendar, Award, BookOpen, Users, Activity, ExternalLink, Tv, Heart, Star } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('hub');
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3>(3);
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);
  const [teamRecapModal, setTeamRecapModal] = useState<{ teamId: string; season: 1 | 2 | 3 } | null>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const saved = localStorage.getItem('cch_theme');
    return saved === 'light' || saved === 'dark' ? saved : 'dark';
  });

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950 flex flex-col transition-colors duration-200">
      {/* Main App Navigation Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSeason={selectedSeason}
        setSelectedSeason={setSelectedSeason}
        onOpenSearch={() => setSearchModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {activeTab === 'hub' && (
          <div className="space-y-8">
            {/* Hero Showcase */}
            <HeroBanner onNavigate={(tab) => setActiveTab(tab)} selectedSeason={selectedSeason} />

            {/* Breaking Offseason News Card */}
            <BreakingNewsCard onNavigateToNews={() => setActiveTab('news')} />

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

        {activeTab === 'news' && <NewsView onSelectTeamRecap={handleSelectTeamRecap} />}

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
          />
        )}

        {activeTab === 'schedule' && (
          <ScheduleBrowser
            selectedSeason={selectedSeason}
            setSelectedSeason={setSelectedSeason}
            onSelectTeamRecap={handleSelectTeamRecap}
          />
        )}

        {activeTab === 'teams' && <TeamDirectory onSelectTeamRecap={handleSelectTeamRecap} />}

        {activeTab === 'transactions' && <TransactionsView />}

        {activeTab === 'allstar' && <AllStarGameView />}

        {activeTab === 'halloffame' && <HallOfFameView onSelectTeamRecap={handleSelectTeamRecap} />}

        {activeTab === 'records' && <RecordBookView />}

        {activeTab === 'players' && <PlayerDirectory />}

        {activeTab === 'h2h' && <HeadToHeadView onSelectTeamRecap={handleSelectTeamRecap} />}
      </main>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        onNavigateTab={(tab) => setActiveTab(tab)}
        onSelectTeamRecap={handleSelectTeamRecap}
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
