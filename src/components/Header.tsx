import React, { useState, useRef } from 'react';
import { Search, Menu, X, Trophy, Calendar, Users, Award, BookOpen, Activity, GitCompare, ExternalLink, Star, ArrowLeftRight, Newspaper, Sun, Moon, Sparkles, Share2, Check } from 'lucide-react';
import { CCHLeagueLogo } from './TeamLogos';
import { SocialHeaderButtons, SOCIAL_PLATFORMS } from './SocialLinks';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSeason: 1 | 2 | 3 | 4;
  setSelectedSeason: (season: 1 | 2 | 3 | 4) => void;
  onOpenSearch: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  onShareLink?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  selectedSeason,
  setSelectedSeason,
  onOpenSearch,
  theme,
  onToggleTheme,
  onShareLink,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedRecently, setCopiedRecently] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleCopyLink = () => {
    if (onShareLink) {
      onShareLink();
    } else {
      navigator.clipboard?.writeText(window.location.href);
    }
    setCopiedRecently(true);
    setTimeout(() => setCopiedRecently(false), 2000);
  };

  interface NavItem {
    id: string;
    label: string;
    icon: React.ComponentType<{ size?: number; className?: string }>;
    highlight?: boolean;
  }

  const navItems: NavItem[] = [
    { id: 'hub', label: 'League Hub', icon: Trophy },
    { id: 'rosters', label: 'S4 Rosters', icon: Users, highlight: true },
    { id: 'news', label: 'News', icon: Newspaper },
    { id: 'draft', label: 'S4 Draft', icon: Sparkles, highlight: true },
    { id: 'standings', label: 'Standings', icon: Activity },
    { id: 'playoffs', label: 'Playoffs', icon: Trophy },
    { id: 'schedule', label: 'Schedule', icon: Calendar },
    { id: 'teams', label: 'Teams', icon: Users },
    { id: 'transactions', label: 'Transactions', icon: ArrowLeftRight },
    { id: 'allstar', label: 'All-Star', icon: Star },
    { id: 'halloffame', label: 'Hall of Achievements', icon: Award },
    { id: 'records', label: 'Record Book', icon: BookOpen },
    { id: 'players', label: 'Star Players', icon: Users },
    { id: 'compare', label: 'Player Compare', icon: ArrowLeftRight },
    { id: 'h2h', label: 'Head to Head', icon: GitCompare },
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800/80 text-slate-100 shadow-2xl w-full">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between min-h-[64px] py-2 gap-2 sm:gap-4 flex-nowrap w-full">
          {/* Logo & Branding */}
          <a
            href="#hub"
            className="flex items-center gap-2 sm:gap-2.5 cursor-pointer shrink-0 hover:opacity-90 transition-opacity no-underline min-w-0"
            onClick={(e) => {
              e.preventDefault();
              setActiveTab('hub');
            }}
          >
            <CCHLeagueLogo size={38} />
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <h1 className="text-sm sm:text-base lg:text-lg font-black tracking-tight text-white flex items-center gap-1 whitespace-nowrap">
                  CALI <span className="text-amber-400">CHAMPIONSHIP</span> HOOPS
                </h1>
              </div>
              <p className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-wider uppercase truncate">
                Official Encyclopedia
              </p>
            </div>
          </a>

          {/* Desktop Season Switcher & Search & External Links */}
          <div className="hidden lg:flex items-center gap-1.5 xl:gap-2 shrink-0 flex-nowrap">
            {/* Season Switcher */}
            <div className="bg-slate-900 border border-slate-800 rounded-xl p-1 flex items-center text-xs font-semibold shadow-inner shrink-0">
              <span className="text-slate-400 px-1.5 text-[10px] uppercase tracking-wider font-bold">Season:</span>
              <button
                onClick={() => setSelectedSeason(1)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 1
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                S1
              </button>
              <button
                onClick={() => setSelectedSeason(2)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 2
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                S2
              </button>
              <button
                onClick={() => setSelectedSeason(3)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer ${
                  selectedSeason === 3
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                S3
              </button>
              <button
                onClick={() => setSelectedSeason(4)}
                className={`px-2 py-1 rounded-lg transition-all cursor-pointer font-bold ${
                  selectedSeason === 4
                    ? 'bg-amber-500 text-slate-950 font-black shadow-sm'
                    : 'text-amber-400 hover:text-white'
                }`}
              >
                S4
              </button>
            </div>

            {/* Live Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 px-2.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer shrink-0"
              title="Search Records & Games (⌘K)"
            >
              <Search size={14} className="text-amber-400 shrink-0" />
              <span className="hidden xl:inline">Search</span>
              <kbd className="bg-slate-800 text-slate-400 text-[10px] px-1.5 py-0.5 rounded font-mono">⌘K</kbd>
            </button>

            {/* Share / Copy Section Link Button */}
            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 px-2.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer shrink-0 shadow-sm"
              title="Copy direct link to this section"
            >
              {copiedRecently ? (
                <>
                  <Check size={13} className="text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-emerald-400 font-bold hidden xl:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Share2 size={13} className="text-amber-400 shrink-0" />
                  <span className="text-[11px] font-bold hidden xl:inline">Share</span>
                </>
              )}
            </button>

            {/* Social Media Links (@CCHoops2k) */}
            <SocialHeaderButtons />

            {/* Operation Sports Dynasty Thread Link */}
            <a
              href="https://forums.operationsports.com/forums/forum/dynasty-headquarters/basketball-dynasties/941879-cali-championship-hoops-nba2k-custom-league"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-1.5 bg-amber-950/40 border border-amber-700/50 px-2.5 py-1.5 rounded-xl text-xs text-amber-300 font-semibold hover:bg-amber-900/60 transition-all cursor-pointer shrink-0"
              title="View original OS Dynasty Thread"
            >
              <ExternalLink size={13} className="text-amber-400" />
              <span className="text-[11px] whitespace-nowrap">OS Dynasty</span>
            </a>

            {/* Light / Dark Mode Theme Toggle */}
            <button
              onClick={onToggleTheme}
              className="flex items-center justify-center w-8 h-8 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 transition-all cursor-pointer shrink-0 shadow-sm overflow-hidden"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun size={15} className="text-amber-400 shrink-0" />
              ) : (
                <Moon size={15} className="text-amber-500 shrink-0" />
              )}
            </button>
          </div>

          {/* Mobile Hamburger & Controls */}
          <div className="flex items-center gap-1.5 lg:hidden shrink-0">
            <button
              onClick={handleCopyLink}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl text-amber-400 cursor-pointer shrink-0"
              title="Copy direct link to section"
            >
              {copiedRecently ? <Check size={15} className="text-emerald-400" /> : <Share2 size={15} />}
            </button>
            <button
              onClick={onToggleTheme}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl text-amber-400 cursor-pointer shrink-0 overflow-hidden"
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {theme === 'dark' ? <Sun size={15} className="text-amber-400" /> : <Moon size={15} className="text-amber-500" />}
            </button>
            <button
              onClick={onOpenSearch}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl text-amber-400 cursor-pointer shrink-0"
              title="Search"
            >
              <Search size={15} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-8 h-8 flex items-center justify-center bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white cursor-pointer shrink-0"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Desktop Navigation Sub-bar - Responsive & Dynamic */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center border-t border-slate-800/60 py-2">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 w-full justify-start">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(item.id);
                  }}
                  className={`flex items-center gap-1.5 px-3 sm:px-3.5 xl:px-4 py-1.5 rounded-xl text-[11px] xl:text-xs font-bold transition-all cursor-pointer whitespace-nowrap no-underline ${
                    isActive
                      ? 'bg-amber-500 text-slate-950 shadow-md font-black ring-1 ring-amber-400'
                      : item.highlight
                      ? 'bg-amber-950/40 text-amber-400 border border-amber-800/60 hover:bg-amber-900/50'
                      : 'bg-slate-900/60 text-slate-300 border border-slate-800/60 hover:text-white hover:bg-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <Icon size={14} className={isActive ? 'text-slate-950' : item.highlight ? 'text-amber-400' : 'text-slate-400'} />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
        </nav>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-800 py-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
            {/* Mobile Season Selector */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-2xl border border-slate-800 text-xs font-semibold">
              <span className="text-slate-300 text-xs font-extrabold uppercase tracking-wider">Select Season:</span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => { setSelectedSeason(1); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                    selectedSeason === 1 ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Season 1
                </button>
                <button
                  onClick={() => { setSelectedSeason(2); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                    selectedSeason === 2 ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Season 2
                </button>
                <button
                  onClick={() => { setSelectedSeason(3); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                    selectedSeason === 3 ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-950 text-slate-400 border border-slate-800'
                  }`}
                >
                  Season 3
                </button>
                <button
                  onClick={() => { setSelectedSeason(4); setMobileMenuOpen(false); }}
                  className={`px-3 py-1.5 rounded-xl font-black text-xs transition-all ${
                    selectedSeason === 4 ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-950 text-amber-400 border border-slate-800'
                  }`}
                >
                  Season 4
                </button>
              </div>
            </div>

            {/* Navigation links */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer no-underline ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-black shadow-md'
                        : item.highlight
                        ? 'bg-amber-950/50 text-amber-300 border border-amber-800/60'
                        : 'bg-slate-900/80 text-slate-200 border border-slate-800/60 hover:border-slate-700'
                    }`}
                  >
                    <Icon size={15} className={isActive ? 'text-slate-950' : 'text-amber-400'} />
                    <span className="truncate">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* Mobile External Links & Social Media */}
            <div className="pt-2 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {SOCIAL_PLATFORMS.map((platform) => {
                  const IconComponent = platform.icon;
                  return (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold border transition-all ${platform.badgeBg} ${platform.badgeBorder} ${platform.badgeText}`}
                    >
                      <IconComponent size={14} className="shrink-0" />
                      <span className="truncate">{platform.name}</span>
                    </a>
                  );
                })}
              </div>
              <a
                href="https://forums.operationsports.com/forums/forum/dynasty-headquarters/basketball-dynasties/941879-cali-championship-hoops-nba2k-custom-league"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-950/60 border border-amber-700/60 p-2.5 rounded-xl text-xs text-amber-300 font-bold"
              >
                <ExternalLink size={14} className="text-amber-400" />
                <span>Operation Sports Dynasty Thread</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
