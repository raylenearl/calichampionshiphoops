import React, { useState } from 'react';
import { TRANSACTIONS_DATA, Transaction } from '../data/transactionsData';
import { TeamBadge } from './TeamBadge';
import { Search, Filter, ArrowLeftRight, UserPlus, UserMinus, ShieldAlert, Award } from 'lucide-react';

export const TransactionsView: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState<'all' | '3' | '2' | '1'>('all');
  const [selectedType, setSelectedType] = useState<'all' | 'trade' | 'signing' | 'waiver' | 'coaching'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredTransactions = TRANSACTIONS_DATA.filter((tx) => {
    // Season filter
    if (selectedSeason !== 'all' && tx.season !== Number(selectedSeason)) {
      return false;
    }

    // Type filter
    if (selectedType !== 'all') {
      if (selectedType === 'signing' && !(tx.type === 'signing' || tx.type === 'resigning')) {
        return false;
      } else if (selectedType !== 'signing' && tx.type !== selectedType) {
        return false;
      }
    }

    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchTitle = tx.title.toLowerCase().includes(q);
      const matchDesc = tx.description.toLowerCase().includes(q);
      const matchImpact = tx.impact ? tx.impact.toLowerCase().includes(q) : false;
      const matchTeam = tx.teams.some((t) => t.name.toLowerCase().includes(q));
      if (!matchTitle && !matchDesc && !matchImpact && !matchTeam) {
        return false;
      }
    }

    return true;
  });

  const seasonsList = [3, 2, 1];

  const getTypeBadge = (type: Transaction['type']) => {
    switch (type) {
      case 'trade':
        return (
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-950/80 border border-amber-800/80 px-2.5 py-0.5 rounded-full">
            <ArrowLeftRight size={11} /> Trade
          </span>
        );
      case 'signing':
      case 'resigning':
        return (
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-emerald-400 bg-emerald-950/80 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
            <UserPlus size={11} /> Free Agency / Signing
          </span>
        );
      case 'waiver':
        return (
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-slate-300 bg-slate-800/80 border border-slate-700/80 px-2.5 py-0.5 rounded-full">
            <UserMinus size={11} /> Waiver / Roster Move
          </span>
        );
      case 'coaching':
        return (
          <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-cyan-400 bg-cyan-950/80 border border-cyan-800/80 px-2.5 py-0.5 rounded-full">
            <Award size={11} /> Coaching Move
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4 space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          League Transactions Log
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Official history of trades, free agency signings, roster moves, and coaching changes across CCH seasons.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by player name, team, trade package..."
              className="w-full bg-slate-950 border border-slate-800 pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/60"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Transaction Counts Summary */}
          <div className="text-xs text-slate-400 font-medium self-end md:self-center">
            Showing <strong className="text-amber-400 font-bold">{filteredTransactions.length}</strong> transactions
          </div>
        </div>

        {/* Category & Season Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-800/80 pt-4">
          {/* Season Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Filter size={12} /> Season
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Seasons' },
                { id: '3', label: 'Season 3' },
                { id: '2', label: 'Season 2' },
                { id: '1', label: 'Season 1' },
              ].map((seasonOpt) => (
                <button
                  key={seasonOpt.id}
                  onClick={() => setSelectedSeason(seasonOpt.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedSeason === seasonOpt.id
                      ? 'bg-amber-500 text-slate-950 font-black shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {seasonOpt.label}
                </button>
              ))}
            </div>
          </div>

          {/* Category/Type Selector */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-extrabold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Filter size={12} /> Transaction Type
            </label>
            <div className="flex flex-wrap gap-1.5">
              {[
                { id: 'all', label: 'All Types' },
                { id: 'trade', label: 'Trades' },
                { id: 'signing', label: 'Free Agency' },
                { id: 'waiver', label: 'Waivers' },
                { id: 'coaching', label: 'Coaching' },
              ].map((typeOpt) => (
                <button
                  key={typeOpt.id}
                  onClick={() => setSelectedType(typeOpt.id as any)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedType === typeOpt.id
                      ? 'bg-amber-500 text-slate-950 font-black shadow'
                      : 'bg-slate-950 text-slate-300 border border-slate-800 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {typeOpt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      {filteredTransactions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center space-y-2">
          <ShieldAlert className="mx-auto text-slate-500" size={32} />
          <p className="text-slate-300 font-bold text-sm">No transactions match your filters.</p>
          <p className="text-xs text-slate-500">Try adjusting your search terms or selecting a different season or transaction type.</p>
        </div>
      ) : selectedSeason === 'all' ? (
        // Render Grouped by Season
        <div className="space-y-8">
          {seasonsList.map((seasonNum) => {
            const seasonTxs = filteredTransactions.filter((tx) => tx.season === seasonNum);
            if (seasonTxs.length === 0) return null;

            return (
              <div key={seasonNum} className="space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
                  <span className="text-base sm:text-lg font-black text-amber-400">
                    Season {seasonNum} Transactions
                  </span>
                  <span className="text-xs font-mono text-slate-500">
                    ({seasonTxs.length} entries)
                  </span>
                </div>

                <div className="space-y-3">
                  {seasonTxs.map((tx) => (
                    <TransactionCard key={tx.id} tx={tx} getTypeBadge={getTypeBadge} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        // Flat List for Selected Season
        <div className="space-y-3">
          {filteredTransactions.map((tx) => (
            <TransactionCard key={tx.id} tx={tx} getTypeBadge={getTypeBadge} />
          ))}
        </div>
      )}
    </div>
  );
};

interface TransactionCardProps {
  tx: Transaction;
  getTypeBadge: (type: Transaction['type']) => React.ReactNode;
}

const TransactionCard: React.FC<TransactionCardProps> = ({ tx, getTypeBadge }) => {
  return (
    <div className={`bg-slate-900 border ${tx.highlight ? 'border-amber-500/40 bg-slate-900/90' : 'border-slate-800'} p-4 sm:p-5 rounded-2xl space-y-3`}>
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-2.5">
        <div className="flex flex-wrap items-center gap-2">
          {getTypeBadge(tx.type)}
          <span className="text-xs font-mono text-slate-400 font-bold">Season {tx.season}</span>
          <h3 className="text-sm sm:text-base font-extrabold text-white">
            {tx.title}
          </h3>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {tx.teams.map((t) => (
            <div key={t.id} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
              <TeamBadge teamId={t.id} size={16} showName={false} />
              <span>{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
        {tx.description}
      </p>

      {tx.impact && (
        <div className="bg-slate-950/80 border border-slate-800/80 p-2.5 rounded-xl text-xs text-amber-300/90 font-medium">
          <strong className="text-amber-400 font-extrabold uppercase text-[10px] mr-1.5">Impact & Outcome:</strong>
          {tx.impact}
        </div>
      )}
    </div>
  );
};
