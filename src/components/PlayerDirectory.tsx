import React, { useState, useMemo } from 'react';
import { PLAYERS } from '../data/playersData';
import { Player } from '../types';
import { Search, Users, Award, Star, Zap, Activity, X, ArrowLeftRight, ArrowUpDown, Hash } from 'lucide-react';

interface PlayerDirectoryProps {
  onComparePlayer?: (playerId: string) => void;
}

export const PlayerDirectory: React.FC<PlayerDirectoryProps> = ({ onComparePlayer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPos, setSelectedPos] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'ovr' | 'jersey-asc' | 'jersey-desc' | 'name' | 'ppg'>('ovr');

  const filteredPlayers = useMemo(() => {
    const filtered = PLAYERS.filter((p) => {
      const matchesSearch =
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.teamName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.jersey && p.jersey.includes(searchTerm));
      const matchesPos = selectedPos === 'All' || p.position.includes(selectedPos);
      return matchesSearch && matchesPos;
    });

    return filtered.sort((a, b) => {
      if (sortBy === 'ovr') {
        return (b.ovr || 0) - (a.ovr || 0);
      } else if (sortBy === 'jersey-asc') {
        const numA = parseInt(a.jersey || '999', 10);
        const numB = parseInt(b.jersey || '999', 10);
        return (isNaN(numA) ? 999 : numA) - (isNaN(numB) ? 999 : numB);
      } else if (sortBy === 'jersey-desc') {
        const numA = parseInt(a.jersey || '999', 10);
        const numB = parseInt(b.jersey || '999', 10);
        return (isNaN(numB) ? 999 : numB) - (isNaN(numA) ? 999 : numA);
      } else if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'ppg') {
        return (b.ppg || 0) - (a.ppg || 0);
      }
      return 0;
    });
  }, [searchTerm, selectedPos, sortBy]);

  return (
    <div className="space-y-6">
      {/* Header & Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800 p-5 sm:p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Users className="text-amber-400" size={24} />
            <h2 className="text-2xl font-black text-white">
              Star Players Directory
            </h2>
          </div>
          <p className="text-xs text-slate-400 font-medium mt-1">
            Profiles, stats, signature performances, and career accolades of CCH superstars
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Search Input */}
          <div className="relative min-w-[200px]">
            <Search className="absolute left-3 top-2.5 text-slate-500" size={16} />
            <input
              type="text"
              placeholder="Search player, team, or jersey #..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-8 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-2.5 top-2.5 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X size={14} />
              </button>
            )}
          </div>

          {/* Position Filter */}
          <select
            value={selectedPos}
            onChange={(e) => setSelectedPos(e.target.value)}
            className="bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-amber-500 font-semibold"
          >
            <option value="All">All Positions</option>
            <option value="Guard">Guards (PG/SG)</option>
            <option value="Forward">Forwards (SF/PF)</option>
            <option value="Center">Centers (C)</option>
          </select>

          {/* Sort By Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-slate-950 border border-amber-500/40 rounded-xl px-3 py-2 text-xs text-amber-300 focus:outline-none focus:border-amber-400 font-semibold"
          >
            <option value="ovr">Sort: Overall Rating (Highest)</option>
            <option value="jersey-asc">Sort: Jersey # (Low to High)</option>
            <option value="jersey-desc">Sort: Jersey # (High to Low)</option>
            <option value="name">Sort: Name (A-Z)</option>
            <option value="ppg">Sort: Scoring (PPG)</option>
          </select>
        </div>
      </div>

      {/* Players Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPlayers.map((player) => (
          <div
            key={player.id}
            className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-5 space-y-4 shadow-lg transition-all hover:-translate-y-1 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-2 border-b border-slate-800 pb-3">
                <div className="flex items-start gap-2.5">
                  {player.jersey && (
                    <span className="px-2 py-1 bg-slate-950 text-amber-400 font-mono font-black rounded-lg text-xs border border-slate-800 shrink-0">
                      #{player.jersey}
                    </span>
                  )}
                  <div>
                    <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                      {player.name}
                    </h3>
                    <span className="text-xs text-amber-400 font-semibold">{player.teamName}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {player.ovr && (
                    <span className="text-xs font-black text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-lg">
                      {player.ovr} OVR
                    </span>
                  )}
                  <span className="text-[10px] font-extrabold uppercase bg-slate-950 text-slate-300 border border-slate-800 px-2.5 py-1 rounded-full">
                    {player.position}
                  </span>
                </div>
              </div>

              {/* Quick Stats Pill */}
              {(player.ppg || player.rpg || player.apg || player.bpg || player.spg) && (
                <div className="grid grid-cols-3 gap-2 bg-slate-950 p-2.5 rounded-2xl border border-slate-800 text-center font-mono">
                  {player.ppg !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">PPG</span>
                      <span className="text-xs font-black text-amber-400">{player.ppg}</span>
                    </div>
                  )}
                  {player.rpg !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">RPG</span>
                      <span className="text-xs font-bold text-slate-200">{player.rpg}</span>
                    </div>
                  )}
                  {player.apg !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">APG</span>
                      <span className="text-xs font-bold text-slate-200">{player.apg}</span>
                    </div>
                  )}
                  {player.bpg !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">BPG</span>
                      <span className="text-xs font-bold text-slate-200">{player.bpg}</span>
                    </div>
                  )}
                  {player.spg !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">SPG</span>
                      <span className="text-xs font-bold text-slate-200">{player.spg}</span>
                    </div>
                  )}
                  {player.fgPct !== undefined && (
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase font-bold">FG%</span>
                      <span className="text-xs font-bold text-slate-200">{(player.fgPct * 100).toFixed(1)}%</span>
                    </div>
                  )}
                </div>
              )}

              <p className="text-xs text-slate-300 leading-relaxed">
                {player.bio}
              </p>

              {player.accolades.length > 0 && (
                <div className="space-y-1 pt-2 border-t border-slate-800">
                  <span className="text-[10px] font-bold text-slate-500 uppercase block">Accolades & Honors:</span>
                  <div className="flex flex-wrap gap-1">
                    {player.accolades.map((acc, idx) => (
                      <span key={idx} className="text-[10px] bg-amber-500/10 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-md font-semibold">
                        🏆 {acc}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {onComparePlayer && (
              <div className="pt-3 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => onComparePlayer(player.id)}
                  className="w-full py-2 bg-slate-950 hover:bg-amber-500/10 text-amber-400 hover:text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <ArrowLeftRight size={14} />
                  <span>Compare with Another Star</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
