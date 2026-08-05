import React from 'react';
import { TRANSACTIONS_DATA } from '../data/transactionsData';
import { TeamBadge } from './TeamBadge';

export const TransactionsView: React.FC = () => {
  // Group transactions by season in descending order (Season 3, Season 2, Season 1)
  const seasons = [3, 2, 1];

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      {/* Title Header */}
      <div className="border-b border-slate-800 pb-4 space-y-1">
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          League Transactions Log
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Official history of trades, free agency signings, roster moves, and coaching changes across all seasons.
        </p>
      </div>

      {/* Text Transactions Log by Season */}
      <div className="space-y-8">
        {seasons.map((seasonNum) => {
          const seasonTxs = TRANSACTIONS_DATA.filter((tx) => tx.season === seasonNum);
          if (seasonTxs.length === 0) return null;

          return (
            <div key={seasonNum} className="space-y-4">
              {/* Season Section Title */}
              <div className="flex items-center gap-2 border-b border-slate-800/80 pb-2">
                <span className="text-base sm:text-lg font-black text-amber-400">
                  Season {seasonNum} Transactions
                </span>
                <span className="text-xs font-mono text-slate-500">
                  ({seasonTxs.length} entries)
                </span>
              </div>

              {/* Simple Text Entries */}
              <div className="space-y-3">
                {seasonTxs.map((tx) => (
                  <div
                    key={tx.id}
                    className="bg-slate-900 border border-slate-800 p-4 sm:p-5 rounded-2xl space-y-2 text-slate-200"
                  >
                    {/* Title & Teams */}
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/60 pb-2">
                      <h3 className="text-sm sm:text-base font-extrabold text-white">
                        {tx.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        {tx.teams.map((t) => (
                          <div key={t.id} className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                            <TeamBadge teamId={t.id} size={18} showName={false} />
                            <span>{t.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Text Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {tx.description}
                    </p>

                    {/* Impact Text */}
                    {tx.impact && (
                      <p className="text-xs text-amber-300/90 font-medium pt-1">
                        <strong className="text-amber-400 font-bold uppercase text-[10px] mr-1">Impact:</strong>
                        {tx.impact}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
