import React, { useState } from 'react';
import { PLAYOFF_HISTORY, PLAYOFF_STATS_BY_SEASON, PlayoffGameDetail } from '../data/playoffsData';
import { PlayoffGame } from '../types';
import { TEAMS } from '../data/teamsData';
import { SEASON_ROSTERS } from '../data/rostersData';
import { TeamBadge } from './TeamBadge';
import { PodcastPlayerCard } from './PodcastPlayerCard';
import {
  Trophy,
  Flame,
  Sparkles,
  Award,
  Zap,
  BarChart3,
  Target,
  Clock,
  UserCheck,
  Star,
  FileText,
  Activity,
  Layers,
  X,
  ChevronRight,
  User,
  Users,
  ExternalLink,
  Radio,
} from 'lucide-react';

interface PlayoffsViewProps {
  selectedSeason: 1 | 2 | 3 | 4;
  setSelectedSeason: (s: 1 | 2 | 3 | 4) => void;
  onSelectTeamRecap?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
  onNavigateToNews?: (articleId: string) => void;
}

export const PlayoffsView: React.FC<PlayoffsViewProps> = ({
  selectedSeason,
  setSelectedSeason,
  onSelectTeamRecap,
  onNavigateToNews,
}) => {
  const [activeTab, setActiveTab] = useState<'bracket' | 'stats'>('bracket');
  const [statsCategory, setStatsCategory] = useState<'totals' | 'averages' | 'highs' | 'games' | 'profiles'>('totals');
  const [selectedGameModal, setSelectedGameModal] = useState<{
    game: PlayoffGame;
    detail?: PlayoffGameDetail;
  } | null>(null);

  const playoffSeasonKey = (selectedSeason <= 3 ? selectedSeason : 3) as 1 | 2 | 3;
  const playoffInfo = PLAYOFF_HISTORY.find((p) => p.season === playoffSeasonKey) || PLAYOFF_HISTORY[2];
  const currentPlayoffStats = PLAYOFF_STATS_BY_SEASON[playoffSeasonKey];

  const getTeamIdByName = (name: string): string => {
    if (!name) return '';
    const clean = name.trim().toLowerCase();
    const matched = TEAMS.find(
      (t) =>
        t.name.toLowerCase() === clean ||
        t.shortName.toLowerCase() === clean ||
        clean.includes(t.shortName.toLowerCase()) ||
        t.name.toLowerCase().includes(clean)
    );
    if (matched) return matched.id;

    if (clean.includes('stallion') || clean.includes('sac')) return 'sacramento-stallions';
    if (clean.includes('red') || clean.includes('cal')) return 'california-reds';
    if (clean.includes('enterprise') || clean.includes('golden') || clean.includes('gse')) return 'golden-state-enterprise';
    if (clean.includes('knight') || clean.includes('sf') || clean.includes('san francisco')) return 'san-francisco-knights';
    if (clean.includes('stryker') || clean.includes('sds')) return 'san-diego-strykers';
    if (clean.includes('sabrewolf') || clean.includes('sabrewolves') || clean.includes('sab')) return 'san-diego-sabrewolves';
    if (clean.includes('dynamic') || clean.includes('lad') || clean.includes('la ')) return 'la-dynamics';
    if (clean.includes('mad dog') || clean.includes('fre') || clean.includes('fresno')) return 'fresno-mad-dogs';
    if (clean.includes('viper') || clean.includes('lbc') || clean.includes('long beach')) return 'long-beach-vipers';
    if (clean.includes('admiral') || clean.includes('adm') || clean.includes('anaheim')) return 'anaheim-admirals';
    if (clean.includes('renegade') || clean.includes('oakland')) return 'oakland-renegades';
    if (clean.includes('tigershark') || clean.includes('san jose')) return 'san-jose-tigersharks';

    return clean.replace(/\s+/g, '-');
  };

  const handleBracketGameClick = (game: PlayoffGame) => {
    const stats = PLAYOFF_STATS_BY_SEASON[selectedSeason];
    let matchedDetail: PlayoffGameDetail | undefined;
    if (stats && stats.detailedGames) {
      const gT1 = game.team1.toLowerCase();
      const gT2 = game.team2.toLowerCase();
      const gRound = game.round.toLowerCase();

      // Check key team nicknames
      const matchesTeam = (str: string, team: string) => {
        const lowerStr = str.toLowerCase();
        const lowerTeam = team.toLowerCase();
        if (lowerStr.includes(lowerTeam)) return true;
        if (lowerTeam.includes('stallions') && (lowerStr.includes('sac') || lowerStr.includes('stallions'))) return true;
        if (lowerTeam.includes('reds') && (lowerStr.includes('cal') || lowerStr.includes('reds'))) return true;
        if (lowerTeam.includes('enterprise') && (lowerStr.includes('gse') || lowerStr.includes('enterprise'))) return true;
        if (lowerTeam.includes('knights') && (lowerStr.includes('sf') || lowerStr.includes('knights'))) return true;
        if (lowerTeam.includes('strykers') && (lowerStr.includes('sds') || lowerStr.includes('strykers'))) return true;
        if (lowerTeam.includes('sabrewolves') && (lowerStr.includes('sab') || lowerStr.includes('sabrewolves'))) return true;
        if (lowerTeam.includes('dynamics') && (lowerStr.includes('lad') || lowerStr.includes('la') || lowerStr.includes('dynamics'))) return true;
        if (lowerTeam.includes('mad dogs') && (lowerStr.includes('fre') || lowerStr.includes('mad dogs') || lowerStr.includes('fresno'))) return true;
        if (lowerTeam.includes('vipers') && (lowerStr.includes('lbc') || lowerStr.includes('vipers'))) return true;
        if (lowerTeam.includes('admirals') && (lowerStr.includes('adm') || lowerStr.includes('admirals'))) return true;
        if (lowerTeam.includes('renegades') && (lowerStr.includes('oak') || lowerStr.includes('renegades'))) return true;
        if (lowerTeam.includes('tigersharks') && (lowerStr.includes('sjt') || lowerStr.includes('tigersharks'))) return true;
        return false;
      };

      // 1. First attempt: match BOTH teams and round
      matchedDetail = stats.detailedGames.find((dg) => {
        const m1 = matchesTeam(dg.matchup, gT1);
        const m2 = matchesTeam(dg.matchup, gT2);
        const dgRound = dg.round.toLowerCase();
        const dgId = dg.id.toLowerCase();

        const roundMatches =
          (gRound.includes('quarter') && (dgRound.includes('quarter') || dgId.includes('qf'))) ||
          ((gRound.includes('semi') || gRound.includes('title')) && (dgRound.includes('semi') || dgRound.includes('title') || dgId.includes('semis'))) ||
          (gRound.includes('final') && (dgRound.includes('final') || dgId.includes('finals')));

        return m1 && m2 && roundMatches;
      });

      // 2. Second attempt: match BOTH teams without round check
      if (!matchedDetail) {
        matchedDetail = stats.detailedGames.find((dg) => {
          return matchesTeam(dg.matchup, gT1) && matchesTeam(dg.matchup, gT2);
        });
      }
    }
    setSelectedGameModal({ game, detail: matchedDetail });
  };

  const handleTeamClick = (teamName: string) => {
    const matchedTeam = TEAMS.find(
      (t) => t.name.toLowerCase() === teamName.toLowerCase() || t.shortName.toLowerCase() === teamName.toLowerCase()
    );
    if (matchedTeam && onSelectTeamRecap) {
      onSelectTeamRecap(matchedTeam.id, selectedSeason);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Header Controls */}
      <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <Trophy className="text-amber-400" size={26} />
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              CCH Postseason & Championship Central
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Interactive playoff brackets, detailed postseason boxscores, and individual statistical leaders
          </p>
        </div>

        {/* Season Switcher */}
        <div className="bg-slate-950 border border-slate-800 p-1 rounded-xl flex text-xs font-semibold self-start md:self-auto">
          <button
            onClick={() => setSelectedSeason(1)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 1 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 1
          </button>
          <button
            onClick={() => setSelectedSeason(2)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 2 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 2
          </button>
          <button
            onClick={() => setSelectedSeason(3)}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              selectedSeason === 3 ? 'bg-amber-500 text-slate-950 font-black shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Season 3
          </button>
        </div>
      </div>

      {/* Primary Section Switcher (Bracket vs Playoff Stats) */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-950/90 border border-slate-800 p-1.5 rounded-2xl">
        <div className="flex flex-wrap items-center gap-1.5">
          <button
            onClick={() => setActiveTab('bracket')}
            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'bracket'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Zap size={14} /> Playoff Bracket
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`px-3 py-2 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'stats'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <BarChart3 size={14} /> Postseason Stats
          </button>
        </div>

        <div className="text-[11px] text-slate-400 font-medium px-3 hidden lg:block">
          Season {selectedSeason} Postseason Hub
        </div>
      </div>

      {/* Season Narrative & Finals Spotlight Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 relative shadow-2xl space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start border-b border-slate-800 pb-6">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 font-mono">
                <Sparkles size={14} />
                {playoffInfo.title}
              </span>
              <span className="text-[10px] bg-amber-950/80 text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-700/50 flex items-center gap-1">
                <Trophy size={11} /> CCH CHAMPIONS
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Champion: <span className="text-amber-400">{playoffInfo.champion}</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {playoffInfo.narrative}
            </p>

            {selectedSeason === 3 && (
              <div className="max-w-xl mt-3">
                <PodcastPlayerCard
                  audioUrl="https://archive.org/download/nba-2-k-24-2024-05-12-02-07-45/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a"
                  podcastInfo={{
                    episodeTitle: "Kabal's Final Ring & Underwood's Defection",
                    broadcastBy: 'CCH Dynasty Podcast • Sactown Media',
                    duration: 'Championship Special • Official Audio',
                    description: "Official postgame audio recap breaking down Dorell Kabal's Finals MVP retirement sendoff and the coaching seismic shift.",
                  }}
                  title="Season 3 Championship Podcast: Kabal's Final Ring"
                  compact={true}
                />
              </div>
            )}
          </div>

          {/* Championship Game Finals Spotlight Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-950/90 border border-amber-500/30 rounded-3xl p-5 relative shadow-xl space-y-3">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2.5">
                <span className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 font-mono">
                  <Flame size={14} className="text-amber-500" />
                  Season {selectedSeason} Champions
                </span>
                <span className="text-[10px] bg-amber-950 text-amber-400 font-bold px-2 py-0.5 rounded-full border border-amber-800 flex items-center gap-1">
                  <Trophy size={11} /> FINALS
                </span>
              </div>

              <div className="text-center space-y-2.5">
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider">
                  Season {selectedSeason} Championship Game Final
                </div>

                <div className="flex items-center justify-around gap-2 bg-slate-900/90 p-3.5 rounded-2xl border border-slate-800">
                  {/* Winner / Champion */}
                  <div
                    onClick={() => handleTeamClick(playoffInfo.champion)}
                    className="flex flex-col items-center space-y-1 cursor-pointer group/champ transition-transform hover:scale-105"
                  >
                    <TeamBadge teamId={getTeamIdByName(playoffInfo.champion)} size="lg" />
                    <span className="text-xs font-bold text-slate-200 mt-1 group-hover/champ:text-amber-400">
                      {playoffInfo.champion.replace('California ', '').replace('Sacramento ', '').replace('Golden State ', '').replace('San Francisco ', '')}
                    </span>
                    <span className="text-[10px] text-amber-400 font-black bg-amber-950/70 px-2 py-0.5 rounded-full border border-amber-800/50">
                      CHAMPS
                    </span>
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="text-base font-black text-amber-400">FINAL</span>
                    <span className="text-[10px] text-slate-400 uppercase font-mono font-bold">
                      {playoffInfo.finals.score1 && playoffInfo.finals.score2 ? `${playoffInfo.finals.score1} - ${playoffInfo.finals.score2}` : 'Finals'}
                    </span>
                  </div>

                  {/* Runner-Up */}
                  <div
                    onClick={() => handleTeamClick(playoffInfo.runnerUp)}
                    className="flex flex-col items-center space-y-1 cursor-pointer group/runner transition-transform hover:scale-105"
                  >
                    <TeamBadge teamId={getTeamIdByName(playoffInfo.runnerUp)} size="lg" />
                    <span className="text-xs font-bold text-slate-200 mt-1 group-hover/runner:text-slate-300">
                      {playoffInfo.runnerUp.replace('California ', '').replace('Sacramento ', '').replace('Golden State ', '').replace('Fresno ', '')}
                    </span>
                    <span className="text-[10px] text-slate-400 font-bold bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                      Runner-Up
                    </span>
                  </div>
                </div>

                <div className="space-y-1 bg-slate-900/60 p-3 rounded-xl border border-slate-800/60 text-left">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-400">
                    <Award size={13} />
                    <span>Finals MVP: {playoffInfo.finalsMvp}</span>
                  </div>
                  {selectedSeason === 3 ? (
                    <p className="text-[11px] text-slate-300 italic leading-relaxed">
                      &quot;STALLIONS REIGN SUPREME! Sacramento captured their 2nd CCH title with an 87-72 victory over Fresno behind Finals MVP Dorell Kabal&apos;s 25 PTS, 11 REB retirement masterpiece and 29 PTS from George Madsen!&quot;
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {playoffInfo.finals.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Season 3 Cinderella Spotlight Feature */}
        {selectedSeason === 3 && (
          <div className="bg-red-950/40 border border-red-800/60 p-5 rounded-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-red-400 font-black text-xs uppercase tracking-wider">
                <Flame size={16} className="text-red-500 animate-bounce" />
                Historic Postseason Shockwave: #8 Seed Cinderella Run
              </div>
              <p className="text-xs text-slate-200 font-medium leading-relaxed">
                Fresno Mad Dogs (10-12 regular season) orchestrated the most improbable upset in league history, defeating the reigning top seed California Reds (16-6) by 90-86 in the Quarterfinals!
              </p>
            </div>
            <div className="bg-slate-950 border border-red-900/80 px-4 py-2 rounded-xl text-center shrink-0">
              <span className="block text-[10px] text-slate-400 uppercase font-bold">Upset Boxscore</span>
              <span className="font-mono font-black text-red-400 text-sm">#8 FRE 90 - 86 REDS #1</span>
            </div>
          </div>
        )}
      </div>

      {/* Main Content View (Bracket vs Stats) */}
      {activeTab === 'bracket' ? (
        /* Visual Bracket Display */
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Zap size={20} className="text-amber-400" />
              Season {selectedSeason} Postseason Bracket Flow
            </h3>
            <span className="text-xs text-amber-400 font-mono bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full w-fit">
              💡 Click any matchup to view full game boxscore & team rosters
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Quarterfinals Column */}
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl text-center">
                <span className="text-xs font-black uppercase text-amber-400">Quarterfinals</span>
              </div>
              <div className="space-y-3">
                {playoffInfo.quarterfinals.map((qg, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleBracketGameClick(qg)}
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 hover:border-amber-500/80 hover:bg-slate-800/80 hover:scale-[1.01] transition-all cursor-pointer shadow-md group relative"
                  >
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                          #{qg.seed1}
                        </span>
                        {qg.team1}
                      </span>
                      <span className="font-mono font-black text-white">{qg.score1}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                        <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                          #{qg.seed2}
                        </span>
                        {qg.team2}
                      </span>
                      <span className="font-mono font-black text-white">{qg.score2}</span>
                    </div>
                    {qg.notes && (
                      <div className="text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-lg border border-amber-900/40 mt-1 font-medium">
                        ⚡ {qg.notes}
                      </div>
                    )}
                    <div className="pt-1 flex items-center justify-end text-[10px] text-slate-400 font-mono group-hover:text-amber-400 transition-colors">
                      View Boxscore & Rosters →
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Semifinals Column */}
            <div className="space-y-4">
              <div className="bg-slate-950 border border-slate-800 p-3 rounded-2xl text-center">
                <span className="text-xs font-black uppercase text-amber-400">Semifinals</span>
              </div>
              <div className="space-y-3">
                {playoffInfo.semifinals ? (
                  playoffInfo.semifinals.map((sg, idx) => (
                    <div
                      key={idx}
                      onClick={() => handleBracketGameClick(sg)}
                      className="bg-slate-900 border border-slate-800 rounded-2xl p-4 space-y-2 hover:border-amber-500/80 hover:bg-slate-800/80 hover:scale-[1.01] transition-all cursor-pointer shadow-md group relative"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                            #{sg.seed1}
                          </span>
                          {sg.team1}
                        </span>
                        <span className="font-mono font-black text-white">{sg.score1}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                          <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                            #{sg.seed2}
                          </span>
                          {sg.team2}
                        </span>
                        <span className="font-mono font-black text-white">{sg.score2}</span>
                      </div>
                      {sg.notes && (
                        <div className="text-[10px] text-amber-400 bg-amber-950/40 p-1.5 rounded-lg border border-amber-900/40 mt-1 font-medium">
                          ⚡ {sg.notes}
                        </div>
                      )}
                      <div className="pt-1 flex items-center justify-end text-[10px] text-slate-400 font-mono group-hover:text-amber-400 transition-colors">
                        View Boxscore & Rosters →
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-xs text-slate-500 italic p-4 text-center">Semifinal data recorded in chronological logs</div>
                )}
              </div>
            </div>

            {/* Championship Finals Column */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-amber-500/20 via-amber-500/10 to-amber-500/20 border border-amber-500/40 p-3 rounded-2xl text-center">
                <span className="text-xs font-black uppercase text-amber-400 flex items-center justify-center gap-1.5">
                  <Trophy size={14} /> CCH Championship Finals
                </span>
              </div>
              <div
                onClick={() => handleBracketGameClick(playoffInfo.finals)}
                className="bg-slate-900 border-2 border-amber-500/50 rounded-2xl p-5 space-y-3 shadow-xl relative overflow-hidden hover:border-amber-400 hover:scale-[1.01] transition-all cursor-pointer group"
              >
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="text-[10px] bg-amber-500 text-slate-950 px-1.5 py-0.5 rounded font-black font-mono">
                      #{playoffInfo.finals.seed1}
                    </span>
                    {playoffInfo.finals.team1}
                  </span>
                  <span className="font-mono font-black text-amber-400 text-base">{playoffInfo.finals.score1 || 'TBD'}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <span className="text-[10px] bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded font-mono">
                      #{playoffInfo.finals.seed2}
                    </span>
                    {playoffInfo.finals.team2}
                  </span>
                  <span className="font-mono font-black text-amber-400 text-base">{playoffInfo.finals.score2 || 'TBD'}</span>
                </div>

                {playoffInfo.finals.notes && (
                  <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-xs text-slate-300 font-medium">
                    🏆 {playoffInfo.finals.notes}
                  </div>
                )}
                <div className="pt-1 flex items-center justify-end text-[10px] text-amber-400 font-mono font-bold">
                  View Championship Boxscore & Rosters →
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Postseason Stats & Boxscores Section */
        <div className="space-y-6">
          {!currentPlayoffStats ? (
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 text-center space-y-3">
              <Clock className="mx-auto text-amber-400" size={32} />
              <h3 className="text-xl font-black text-white">
                Season {selectedSeason} Playoff Stats Archive
              </h3>
              <p className="text-xs text-slate-400 max-w-lg mx-auto leading-relaxed">
                Detailed statistical logs and individual player boxscores for Season {selectedSeason} are currently being compiled into the official archive. Select Season 2 or Season 3 above to view complete postseason stats, leaderboards, game summaries, and standout profiles.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Stats Sub-Category Controls */}
              <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 border border-slate-800 p-1.5 rounded-2xl overflow-x-auto scrollbar-none">
                <button
                  onClick={() => setStatsCategory('totals')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    statsCategory === 'totals'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Totals
                </button>
                <button
                  onClick={() => setStatsCategory('averages')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    statsCategory === 'averages'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Per Game
                </button>
                <button
                  onClick={() => setStatsCategory('highs')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    statsCategory === 'highs'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Game Highs
                </button>
                <button
                  onClick={() => setStatsCategory('games')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    statsCategory === 'games'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Game Notes
                </button>
                <button
                  onClick={() => setStatsCategory('profiles')}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    statsCategory === 'profiles'
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Profiles
                </button>
              </div>

              {/* Category 1: Overall Totals Leaders */}
              {statsCategory === 'totals' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <Trophy size={18} className="text-amber-400" />
                      Season {selectedSeason} Overall Playoff Totals Leaders
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">3 Playoff Rounds</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentPlayoffStats.totalsLeaders.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-all shadow-md"
                      >
                        <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <div className="text-xl font-black text-white font-mono">{item.stat}</div>
                        <div className="text-xs font-bold text-slate-200">{item.player}</div>
                        <div className="text-[11px] text-slate-400">{item.team}</div>
                        {item.details && (
                          <div className="text-[10px] text-slate-400 bg-slate-950 p-1.5 rounded-lg border border-slate-800 font-mono">
                            {item.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 2: Per Game Averages */}
              {statsCategory === 'averages' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-black text-white flex items-center gap-2">
                      <BarChart3 size={18} className="text-amber-400" />
                      Season {selectedSeason} Per-Game Averages Leaders
                    </h3>
                    <span className="text-xs text-slate-400 font-mono">Rate Statistics</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {currentPlayoffStats.averagesLeaders.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-2 hover:border-slate-700 transition-all shadow-md"
                      >
                        <span className="text-[10px] text-emerald-400 font-black uppercase tracking-wider block">
                          {item.category}
                        </span>
                        <div className="text-xl font-black text-white font-mono">{item.stat}</div>
                        <div className="text-xs font-bold text-slate-200">{item.player}</div>
                        <div className="text-[11px] text-slate-400">{item.team}</div>
                        {item.details && (
                          <div className="text-[10px] text-slate-400 bg-slate-950 p-1.5 rounded-lg border border-slate-800 font-mono">
                            {item.details}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 3: Single Game Highs */}
              {statsCategory === 'highs' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Star size={18} className="text-amber-400" />
                    Season {selectedSeason} Top Individual Game Performances
                  </h3>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {currentPlayoffStats.singleGameHighs.map((cat, idx) => (
                      <div key={idx} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-lg">
                        <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
                          <span>{cat.category}</span>
                          <span className="text-[10px] text-slate-400 font-mono">Single Game</span>
                        </h4>
                        <div className="space-y-3">
                          {cat.performances.map((perf, pIdx) => (
                            <div key={pIdx} className="bg-slate-950 border border-slate-800/80 p-3 rounded-xl flex items-center justify-between gap-2">
                              <div>
                                <div className="text-xs font-extrabold text-white">{perf.player}</div>
                                <div className="text-[10px] text-slate-400 font-mono">{perf.matchup}</div>
                              </div>
                              <span className="text-sm font-mono font-black text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-lg border border-amber-800/60">
                                {perf.stat}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 4: Detailed Game Notes & Boxscores */}
              {statsCategory === 'games' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <FileText size={18} className="text-amber-400" />
                    Season {selectedSeason} Detailed Playoff Game Notes & Summaries
                  </h3>
                  <div className="space-y-4">
                    {currentPlayoffStats.detailedGames.map((game) => (
                      <div key={game.id} className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-md">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                          <div className="space-y-0.5">
                            <span className="text-[10px] text-amber-400 font-mono font-bold uppercase tracking-wider block">
                              {game.round}
                            </span>
                            <h4 className="text-sm sm:text-base font-black text-white">{game.matchup}</h4>
                          </div>
                          <div className="bg-slate-950 border border-slate-800 px-3 py-1 rounded-xl font-mono font-black text-amber-400 text-sm self-start sm:self-auto">
                            {game.score}
                          </div>
                        </div>

                        <p className="text-xs text-slate-300 leading-relaxed font-normal">
                          {game.summary}
                        </p>

                        <div className="bg-slate-950 border border-slate-800 p-3 rounded-xl space-y-1">
                          <span className="text-[10px] text-slate-400 uppercase font-mono font-bold block">
                            Top Matchup Performers
                          </span>
                          <div className="flex flex-wrap gap-2 pt-1">
                            {game.topPerformers.map((tp, tpIdx) => (
                              <span
                                key={tpIdx}
                                className="text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg flex items-center gap-1.5"
                              >
                                <span>{tp.name}:</span>
                                <span className="text-amber-400 font-mono font-bold">{tp.stat}</span>
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Category 5: Standout Player Profiles */}
              {statsCategory === 'profiles' && (
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <Flame size={18} className="text-amber-400" />
                    Season {selectedSeason} Postseason Standout Profiles
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPlayoffStats.standoutProfiles.map((prof, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-900 border border-slate-800 p-6 rounded-3xl space-y-4 shadow-xl relative overflow-hidden flex flex-col justify-between"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="text-xl font-black text-white">{prof.name}</h4>
                                <span className="text-[10px] bg-slate-800 text-amber-400 px-2 py-0.5 rounded font-mono font-bold">
                                  OVR {prof.ovr}
                                </span>
                              </div>
                              <span className="text-xs text-slate-400 font-semibold">{prof.team} • {prof.position}</span>
                            </div>
                            <TeamBadge teamId={prof.teamId} size="md" />
                          </div>

                          <div className="bg-amber-950/40 border border-amber-900/60 p-3 rounded-2xl space-y-1">
                            <span className="text-[10px] text-amber-400 font-black uppercase tracking-wider block">
                              {prof.role}
                            </span>
                            <div className="text-xs font-mono font-black text-slate-100">{prof.statsHighlight}</div>
                          </div>

                          <p className="text-xs text-slate-300 leading-relaxed font-normal">
                            {prof.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Interactive Game Boxscore & Rosters Modal */}
      {selectedGameModal && (() => {
        const { game, detail } = selectedGameModal;
        const t1Id = getTeamIdByName(game.team1);
        const t2Id = getTeamIdByName(game.team2);
        const seasonKey = (`s${selectedSeason}`) as 's1' | 's2' | 's3';
        const t1Roster = SEASON_ROSTERS[t1Id]?.[seasonKey];
        const t2Roster = SEASON_ROSTERS[t2Id]?.[seasonKey];

        return (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 space-y-6 relative animate-in fade-in zoom-in-95 duration-150">
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedGameModal(null)}
                className="absolute top-5 right-5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all cursor-pointer shadow-md"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="border-b border-slate-800 pb-4 space-y-2">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-full uppercase">
                  <Trophy size={14} /> Season {selectedSeason} • {game.round}
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-white">
                  {game.team1} <span className="text-amber-400">{game.score1}</span>, {game.team2} <span className="text-amber-400">{game.score2}</span>
                </h2>
                <div className="flex items-center gap-3 text-xs text-slate-300 font-semibold">
                  <span>Winner: <span className="text-emerald-400 font-bold">{game.winner}</span></span>
                  <span>•</span>
                  <span className="text-slate-400">Official Postseason Boxscore</span>
                </div>
              </div>

              {/* Game Summary / Notes */}
              {(detail?.summary || game.notes) && (
                <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                      <FileText size={14} /> Official Game Summary & Recap
                    </h4>
                    {game.recapArticleId && onNavigateToNews && (
                      <button
                        onClick={() => {
                          setSelectedGameModal(null);
                          onNavigateToNews(game.recapArticleId!);
                        }}
                        className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-1 rounded-lg border border-amber-500/30 transition-all cursor-pointer"
                      >
                        <ExternalLink size={12} /> Read Full Article
                      </button>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                    {detail?.summary || game.notes}
                  </p>
                </div>
              )}

              {/* Top Performers */}
              {detail?.topPerformers && detail.topPerformers.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
                    <Star size={14} /> Top Performers & Boxscore Highlights
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {detail.topPerformers.map((tp, idx) => (
                      <div key={idx} className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl space-y-1">
                        <div className="font-bold text-xs text-white flex items-center gap-1.5">
                          <UserCheck size={13} className="text-amber-400 shrink-0" />
                          {tp.name}
                        </div>
                        <div className="text-xs font-mono font-semibold text-amber-300">
                          {tp.stat}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Team Rosters with Full Names */}
              <div className="space-y-4 pt-2 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-black text-white flex items-center gap-2">
                    <Users size={16} className="text-amber-400" />
                    Full Active Team Rosters (Season {selectedSeason})
                  </h4>
                  <span className="text-[11px] text-slate-400 font-mono">Full Player Names</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Team 1 Roster */}
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <TeamBadge teamId={t1Id} size="sm" />
                        <div>
                          <h5 className="font-bold text-xs text-white">{game.team1}</h5>
                          {t1Roster?.coach && (
                            <span className="text-[10px] text-slate-400 block">Coach: {t1Roster.coach}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-900">
                        #{game.seed1} Seed
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {t1Roster?.players ? (
                        t1Roster.players.map((pl, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-2 rounded bg-slate-900/60 border border-slate-800/60">
                            <div className="flex items-center gap-2">
                              {pl.number && <span className="font-mono text-[10px] text-slate-400 font-bold w-4">#{pl.number}</span>}
                              <span className="font-bold text-slate-100">{pl.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px]">
                              <span className="text-slate-400 font-medium">{pl.position}</span>
                              {pl.ovr && <span className="font-mono font-bold text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded">{pl.ovr} OVR</span>}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 italic p-2">Roster details available in Team Hub</div>
                      )}
                    </div>
                  </div>

                  {/* Team 2 Roster */}
                  <div className="bg-slate-950 border border-slate-800 p-4 rounded-2xl space-y-3">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <div className="flex items-center gap-2">
                        <TeamBadge teamId={t2Id} size="sm" />
                        <div>
                          <h5 className="font-bold text-xs text-white">{game.team2}</h5>
                          {t2Roster?.coach && (
                            <span className="text-[10px] text-slate-400 block">Coach: {t2Roster.coach}</span>
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950 px-2 py-0.5 rounded border border-amber-900">
                        #{game.seed2} Seed
                      </span>
                    </div>

                    <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
                      {t2Roster?.players ? (
                        t2Roster.players.map((pl, idx) => (
                          <div key={idx} className="flex items-center justify-between text-xs py-1.5 px-2 rounded bg-slate-900/60 border border-slate-800/60">
                            <div className="flex items-center gap-2">
                              {pl.number && <span className="font-mono text-[10px] text-slate-400 font-bold w-4">#{pl.number}</span>}
                              <span className="font-bold text-slate-100">{pl.name}</span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px]">
                              <span className="text-slate-400 font-medium">{pl.position}</span>
                              {pl.ovr && <span className="font-mono font-bold text-amber-400 bg-amber-950/80 px-1.5 py-0.5 rounded">{pl.ovr} OVR</span>}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 italic p-2">Roster details available in Team Hub</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Action Buttons */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-800">
                <button
                  onClick={() => {
                    setSelectedGameModal(null);
                    if (onSelectTeamRecap) {
                      onSelectTeamRecap(t1Id, selectedSeason);
                    }
                  }}
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <ExternalLink size={14} /> Open {game.team1} Team Page
                </button>
                <button
                  onClick={() => setSelectedGameModal(null)}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl transition-all cursor-pointer"
                >
                  Close Game Window
                </button>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};

