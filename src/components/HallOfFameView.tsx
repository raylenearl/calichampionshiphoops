import React, { useState } from 'react';
import { ALL_AWARDS, FAMOUS_QUOTES, SEASON_LEADERS, ALL_CALI_TEAMS, SEASON_1_SINGLE_GAME_HIGHS } from '../data/awardsData';
import { Trophy, Award as AwardIcon, Quote, Sparkles, Star, Users, Flame, Shield, Award, Zap, BookOpen, Calendar } from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import { InauguralGameModal } from './InauguralGameModal';
import { INAUGURAL_GAME_ARTICLE } from '../data/leagueMilestonesData';

interface HallOfFameViewProps {
  onSelectTeamRecap?: (teamId: string) => void;
}

export const HallOfFameView: React.FC<HallOfFameViewProps> = ({ onSelectTeamRecap }) => {
  const [selectedSeasonFilter, setSelectedSeasonFilter] = useState<0 | 1 | 2 | 3>(0);
  const [activeTab, setActiveTab] = useState<'awards' | 'milestones' | 'leaders' | 'allcali'>('awards');
  const [allCaliCategoryFilter, setAllCaliCategoryFilter] = useState<'All' | 'All-Cali' | 'All-Defensive' | 'All-Rookie'>('All');
  const [isInauguralModalOpen, setIsInauguralModalOpen] = useState<boolean>(false);

  const filteredAwards = ALL_AWARDS.filter((a) => {
    if (selectedSeasonFilter === 0) return true;
    return a.season === selectedSeasonFilter;
  });

  const filteredLeaders = SEASON_LEADERS.filter((l) => {
    if (selectedSeasonFilter === 0) return true;
    return l.season === selectedSeasonFilter;
  });

  const filteredSingleGameHighs = SEASON_1_SINGLE_GAME_HIGHS.filter((g) => {
    if (selectedSeasonFilter === 0) return true;
    return g.season === selectedSeasonFilter;
  });

  const filteredAllCaliTeams = ALL_CALI_TEAMS.filter((t) => {
    const seasonMatch = selectedSeasonFilter === 0 || t.season === selectedSeasonFilter;
    const categoryMatch = allCaliCategoryFilter === 'All' || t.teamCategory === allCaliCategoryFilter;
    return seasonMatch && categoryMatch;
  });

  return (
    <div className="space-y-8">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-950/80 via-slate-900 to-slate-950 border border-amber-500/30 p-6 sm:p-8 rounded-3xl space-y-4 shadow-2xl">
        <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase tracking-widest">
          <Sparkles size={16} />
          CCH Hall of Achievements & Honor Roll
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          Individual Greatness, Milestones & All-Cali Teams
        </h2>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Celebrating foundational league milestones, Most Valuable Players, Defensive Players of the Year, Season Leaders, and official All-Cali, All-Defensive & All-Rookie teams throughout CCH history.
        </p>

        {/* Section Navigation Tabs */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 bg-slate-950/80 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab('awards')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'awards'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy size={14} />
              Season Awards ({ALL_AWARDS.length})
            </button>
            <button
              onClick={() => setActiveTab('milestones')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'milestones'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles size={14} />
              Historic Milestones
            </button>
            <button
              onClick={() => setActiveTab('leaders')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'leaders'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Flame size={14} />
              Top Performers
            </button>
            <button
              onClick={() => setActiveTab('allcali')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'allcali'
                  ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Users size={14} />
              All-Cali Teams
            </button>
          </div>

          {/* Season Filter Buttons */}
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mr-1 hidden sm:inline">Season:</span>
            {[0, 1, 2, 3].map((s) => (
              <button
                key={s}
                onClick={() => setSelectedSeasonFilter(s as any)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition-all ${
                  selectedSeasonFilter === s
                    ? 'bg-amber-500 text-slate-950 font-black'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {s === 0 ? 'All' : `S${s}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Famous Quotes Banner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {FAMOUS_QUOTES.map((q, idx) => (
          <div key={idx} className="bg-slate-900/90 border border-slate-800 p-5 rounded-3xl space-y-2 relative overflow-hidden">
            <Quote size={36} className="absolute -top-2 -right-2 text-slate-800/40 pointer-events-none" />
            <p className="text-xs sm:text-sm text-amber-200 italic font-medium leading-relaxed">
              &quot;{q.quote}&quot;
            </p>
            <div className="pt-2 border-t border-slate-800/80 flex justify-between items-center text-xs">
              <span className="font-black text-white">— {q.author}, {q.title}</span>
              <span className="text-[10px] text-slate-400">{q.context}</span>
            </div>
          </div>
        ))}
      </div>

      {/* TAB: HISTORIC LEAGUE MILESTONES & FIRSTS */}
      {activeTab === 'milestones' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-amber-500/10 border border-amber-500/20 rounded-xl text-amber-400">
                <Sparkles size={20} />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-black text-white">HISTORIC CCH LEAGUE MILESTONES & FIRSTS</h2>
                <p className="text-xs text-slate-400">Defining foundational moments in Cali Championship Hoops history.</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-amber-400 bg-amber-950/60 border border-amber-800/60 px-3 py-1 rounded-full hidden sm:inline-block">
              Historical League Archives
            </span>
          </div>

          <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/30 rounded-3xl p-5 sm:p-7 shadow-xl space-y-5">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono font-bold rounded-full">
                  <Calendar size={13} /> {INAUGURAL_GAME_ARTICLE.date}
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {INAUGURAL_GAME_ARTICLE.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  California Reds (80) vs. San Diego Sabrewolves (74) — The first-ever game in CCH history. Donnell Nash scored the league&apos;s first basket, Martin McCloud hit the first three-pointer, and Andre Creek logged a 20-point league debut.
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-mono font-bold text-slate-300 pt-1">
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First Basket: Donnell Nash (SD)
                  </span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First 3PT: Martin McCloud (CAL)
                  </span>
                  <span className="bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-400">
                    First Win: California Reds
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3 shrink-0">
                <button
                  onClick={() => setIsInauguralModalOpen(true)}
                  className="px-5 py-2.5 sm:px-6 sm:py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-2xl shadow-lg flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <BookOpen size={16} />
                  Read Full Inaugural Game Article
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* TAB 1: SEASON AWARDS */}
      {activeTab === 'awards' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Trophy className="text-amber-400" size={20} />
              {selectedSeasonFilter === 0 ? 'All Season Individual Awards' : `Season ${selectedSeasonFilter} Honors`}
            </h3>
            <span className="text-xs font-mono text-slate-400 font-bold">{filteredAwards.length} Award Winners</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredAwards.map((award, idx) => {
              const isMvp = award.category.toLowerCase().includes('mvp');

              return (
                <div
                  key={idx}
                  className={`bg-slate-900 border rounded-3xl p-5 space-y-3 transition-all shadow-lg hover:border-amber-500/40 ${
                    isMvp ? 'border-amber-500/50 bg-gradient-to-b from-amber-950/20 via-slate-900 to-slate-900' : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full font-mono">
                      Season {award.season}
                    </span>
                    {isMvp ? <Trophy size={22} className="text-amber-400" /> : <AwardIcon size={20} className="text-slate-400" />}
                  </div>

                  <div>
                    <span className="text-xs font-black text-amber-400 uppercase tracking-wide block leading-tight">
                      {award.category}
                    </span>
                    <h3 className="text-xl font-black text-white mt-1">
                      {award.player}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 block mt-0.5">{award.team}</span>
                  </div>

                  {award.statDetails && (
                    <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 font-mono text-xs text-amber-300 font-bold">
                      {award.statDetails}
                    </div>
                  )}

                  <p className="text-xs text-slate-300 leading-relaxed pt-1">
                    {award.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: TOP PERFORMERS / LEAGUE LEADERS */}
      {activeTab === 'leaders' && (
        <div className="space-y-10">
          {/* Per-Game Stat Champions */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <Flame className="text-amber-400" size={20} />
                Season Per-Game Stat Champions
              </h3>
              <span className="text-xs font-mono text-slate-400 font-bold">{filteredLeaders.length} Categories</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredLeaders.map((leader, idx) => {
                const teamSlug = leader.teamId || (
                  leader.team.toLowerCase().includes('reds') ? 'california-reds' :
                  leader.team.toLowerCase().includes('stallions') ? 'sacramento-stallions' :
                  leader.team.toLowerCase().includes('sabrewolves') ? 'san-diego-sabrewolves' :
                  leader.team.toLowerCase().includes('strykers') ? 'san-diego-strykers' :
                  leader.team.toLowerCase().includes('dynamics') ? 'los-angeles-dynamics' :
                  leader.team.toLowerCase().includes('enterprise') ? 'golden-state-enterprise' :
                  leader.team.toLowerCase().includes('renegades') ? 'oakland-renegades' :
                  leader.team.toLowerCase().includes('tigersharks') ? 'san-jose-tigersharks' :
                  leader.team.toLowerCase().includes('knights') ? 'san-francisco-knights' :
                  leader.team.toLowerCase().includes('admirals') ? 'anaheim-admirals' :
                  leader.team.toLowerCase().includes('vipers') ? 'long-beach-vipers' :
                  leader.team.toLowerCase().includes('mad dogs') ? 'fresno-mad-dogs' : 'california-reds'
                );

                return (
                  <div key={idx} className="bg-slate-900 border border-slate-800 rounded-3xl p-5 space-y-4 hover:border-amber-500/30 transition-all shadow-xl">
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px] rounded-lg border border-amber-500/30">
                          S{leader.season}
                        </span>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                          {leader.statCategory} Leader
                        </span>
                      </div>
                      <span className="font-mono text-lg font-black text-amber-400">{leader.statValue}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <TeamBadge teamId={teamSlug} size="md" />
                      <div>
                        <div className="flex items-center gap-1.5">
                          {leader.position && (
                            <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono font-bold">
                              {leader.position}
                            </span>
                          )}
                          <h4 className="text-base font-black text-white">{leader.player}</h4>
                        </div>
                        <span className="text-xs text-slate-400 font-semibold">{leader.team}</span>
                      </div>
                    </div>

                    {leader.subText && (
                      <p className="text-[11px] text-slate-400 font-mono bg-slate-950 p-2 rounded-xl border border-slate-800/80">
                        {leader.subText}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Single Game Highs (Season 1 Benchmarks & Outbursts) */}
          {filteredSingleGameHighs.length > 0 && (
            <div className="space-y-6 pt-4 border-t border-slate-800/80">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Zap className="text-amber-400" size={20} />
                  Inaugural Season Single-Game Benchmarks & Highs
                </h3>
                <span className="text-xs font-mono text-slate-400 font-bold">{filteredSingleGameHighs.length} Historical Records</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredSingleGameHighs.map((game, idx) => {
                  const teamSlug = game.teamId || (
                    game.team.toLowerCase().includes('renegades') ? 'oakland-renegades' :
                    game.team.toLowerCase().includes('stallions') ? 'sacramento-stallions' :
                    game.team.toLowerCase().includes('reds') ? 'california-reds' :
                    game.team.toLowerCase().includes('enterprise') ? 'golden-state-enterprise' :
                    game.team.toLowerCase().includes('strykers') ? 'san-diego-strykers' :
                    game.team.toLowerCase().includes('dynamics') ? 'los-angeles-dynamics' : 'oakland-renegades'
                  );

                  return (
                    <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 space-y-4 hover:border-amber-500/30 transition-all shadow-xl">
                      <div className="flex items-center justify-between border-b border-slate-800/80 pb-3">
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 font-mono font-bold text-[10px] rounded-lg border border-amber-500/30">
                            S1 Single-Game
                          </span>
                          <span className="text-xs font-extrabold uppercase tracking-wider text-slate-300">
                            Most {game.statCategory}
                          </span>
                        </div>
                        <span className="font-mono text-lg font-black text-amber-400">{game.statValue}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <TeamBadge teamId={teamSlug} size="md" />
                        <div>
                          <div className="flex items-center gap-1.5">
                            {game.position && (
                              <span className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded font-mono font-bold">
                                {game.position}
                              </span>
                            )}
                            <h4 className="text-base font-black text-white">{game.player}</h4>
                          </div>
                          <span className="text-xs text-slate-400 font-semibold">{game.team}</span>
                        </div>
                      </div>

                      <div className="text-[11px] text-amber-300/90 font-mono bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                        {game.gameDetails}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* TAB 3: ALL-CALI TEAMS */}
      {activeTab === 'allcali' && (
        <div className="space-y-6">
          <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-3 gap-4">
            <h3 className="text-xl font-black text-white flex items-center gap-2">
              <Users className="text-amber-400" size={20} />
              Official All-Cali Teams
            </h3>

            {/* Sub-Filter for All-Cali Categories */}
            <div className="flex items-center gap-2 bg-slate-950 p-1 rounded-xl border border-slate-800">
              {(['All', 'All-Cali', 'All-Defensive', 'All-Rookie'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setAllCaliCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                    allCaliCategoryFilter === cat
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAllCaliTeams.map((team, idx) => {
              const isFirstTeam = team.tier === '1st Team';
              const isAllCali = team.teamCategory === 'All-Cali';
              const isDefensive = team.teamCategory === 'All-Defensive';

              return (
                <div
                  key={idx}
                  className={`bg-slate-900 border rounded-3xl p-5 space-y-4 shadow-xl transition-all ${
                    isFirstTeam
                      ? 'border-amber-500/40 bg-gradient-to-b from-amber-950/10 via-slate-900 to-slate-900'
                      : 'border-slate-800'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 bg-amber-500 text-slate-950 font-black text-xs rounded-lg font-mono">
                        Season {team.season}
                      </span>
                      <h4 className="text-base font-black text-white">
                        {team.teamCategory} <span className="text-amber-400">{team.tier}</span>
                      </h4>
                    </div>
                    {isDefensive ? (
                      <Shield size={18} className="text-sky-400" />
                    ) : isAllCali ? (
                      <Star size={18} className="text-amber-400" />
                    ) : (
                      <Award size={18} className="text-emerald-400" />
                    )}
                  </div>

                  <div className="space-y-2.5">
                    {team.players.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="flex items-center justify-between p-2.5 bg-slate-950/70 border border-slate-800/80 rounded-xl hover:border-slate-700 transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <TeamBadge teamId={p.teamId || p.team.toLowerCase().replace(/\s+/g, '-')} size="sm" />
                          <div>
                            <div className="flex items-center gap-1.5">
                              {p.position && (
                                <span className="text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded border border-amber-500/30">
                                  {p.position}
                                </span>
                              )}
                              <span className="text-sm font-bold text-white">{p.name}</span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-semibold">{p.team}</span>
                          </div>
                        </div>

                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider font-bold">
                          {team.tier}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Inaugural Game Modal */}
      <InauguralGameModal
        isOpen={isInauguralModalOpen}
        onClose={() => setIsInauguralModalOpen(false)}
        onSelectTeamRecap={onSelectTeamRecap}
      />
    </div>
  );
};

