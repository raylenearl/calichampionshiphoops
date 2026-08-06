import React from 'react';
import { INAUGURAL_GAME_ARTICLE } from '../data/leagueMilestonesData';
import { TeamBadge } from './TeamBadge';
import { Trophy, Calendar, Sparkles, X, Quote, User, Award, Flame, FileText } from 'lucide-react';

interface InauguralGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTeamRecap?: (teamId: string) => void;
}

export const InauguralGameModal: React.FC<InauguralGameModalProps> = ({
  isOpen,
  onClose,
  onSelectTeamRecap,
}) => {
  if (!isOpen) return null;

  const article = INAUGURAL_GAME_ARTICLE;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-100 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all cursor-pointer shadow-md"
          title="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header Badge */}
        <div className="space-y-3 border-b border-slate-800 pb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-mono font-extrabold rounded-full uppercase tracking-wider">
            <Sparkles size={14} /> HISTORIC LEAGUE MILESTONE • CCH INAUGURAL GAME
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1 font-mono text-amber-300 font-bold">
              <Calendar size={14} /> {article.date}
            </span>
            <span>•</span>
            <span>League Kickoff Opening Day</span>
            <span>•</span>
            <span className="text-slate-300 font-semibold">Cali Championship Hoops History</span>
          </div>
        </div>

        {/* Game Box Score Highlight Card */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-mono font-bold border-b border-slate-800/80 pb-2">
            <span>Inaugural Matchup Boxscore</span>
            <span className="text-amber-400">Final Score</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Team 1: California Reds */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2.5">
                <TeamBadge teamId="california-reds" size="md" />
                <div>
                  <h3 className="font-black text-sm text-white">California Reds</h3>
                  <span className="text-[10px] text-emerald-400 font-bold">1st CCH League Win</span>
                </div>
              </div>
              <span className="text-xl font-mono font-black text-slate-950 bg-amber-500 px-3 py-1 rounded-lg">
                80
              </span>
            </div>

            {/* Team 2: San Diego Sabrewolves */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2.5">
                <TeamBadge teamId="san-diego-sabrewolves" size="md" />
                <div>
                  <h3 className="font-black text-sm text-white">SD Sabrewolves</h3>
                  <span className="text-[10px] text-slate-400 font-medium">Visiting Squad</span>
                </div>
              </div>
              <span className="text-xl font-mono font-black text-slate-300 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800">
                74
              </span>
            </div>
          </div>
        </div>

        {/* Commissioner Quote Spotlight */}
        <div className="bg-amber-950/30 border border-amber-800/50 p-4 sm:p-5 rounded-2xl relative space-y-2">
          <Quote className="text-amber-500/40 absolute right-4 top-4" size={32} />
          <p className="text-amber-200 text-sm italic font-medium leading-relaxed pr-8">
            &ldquo;{article.quotes[0].quote}&rdquo;
          </p>
          <div className="text-xs font-bold text-amber-400">
            — {article.quotes[0].speaker}, <span className="text-amber-300/80 font-normal">{article.quotes[0].title}</span>
          </div>
        </div>

        {/* Main Article Body Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
          <p className="first-letter:text-3xl first-letter:font-black first-letter:text-amber-400 first-letter:mr-1">
            {article.contentParagraphs[0]}
          </p>

          <p>{article.contentParagraphs[1]}</p>

          {/* Player Quote: Martin McCloud */}
          <div className="my-3 p-3.5 bg-slate-950 border-l-4 border-amber-500 rounded-r-xl space-y-1">
            <p className="italic text-slate-300 text-xs">
              &ldquo;{article.quotes[1].quote}&rdquo;
            </p>
            <span className="text-[11px] font-bold text-amber-400 block">
              — {article.quotes[1].speaker} ({article.quotes[1].title})
            </span>
          </div>

          <p>{article.contentParagraphs[2]}</p>

          {/* Player Quote: Andre Creek */}
          <div className="my-3 p-3.5 bg-slate-950 border-l-4 border-amber-500 rounded-r-xl space-y-1">
            <p className="italic text-slate-300 text-xs">
              &ldquo;{article.quotes[2].quote}&rdquo;
            </p>
            <span className="text-[11px] font-bold text-amber-400 block">
              — {article.quotes[2].speaker} ({article.quotes[2].title})
            </span>
          </div>

          <div className="bg-slate-950 p-3 rounded-xl border border-slate-800 font-mono font-bold text-amber-400 text-center my-2">
            Halftime Score: San Diego Sabrewolves 39, California Reds 38
          </div>

          <p>{article.contentParagraphs[4]}</p>

          {/* Coach Quote: William Walker */}
          <div className="my-3 p-3.5 bg-slate-950 border-l-4 border-amber-500 rounded-r-xl space-y-1">
            <p className="italic text-slate-300 text-xs">
              &ldquo;{article.quotes[3].quote}&rdquo;
            </p>
            <span className="text-[11px] font-bold text-amber-400 block">
              — {article.quotes[3].speaker} ({article.quotes[3].title})
            </span>
          </div>

          <p>{article.contentParagraphs[5]}</p>

          {/* Captain Quote: J.C. McMillan */}
          <div className="my-3 p-3.5 bg-slate-950 border-l-4 border-amber-500 rounded-r-xl space-y-1">
            <p className="italic text-slate-300 text-xs">
              &ldquo;{article.quotes[4].quote}&rdquo;
            </p>
            <span className="text-[11px] font-bold text-amber-400 block">
              — {article.quotes[4].speaker} ({article.quotes[4].title})
            </span>
          </div>
        </div>

        {/* Player Stats Box */}
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
          <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
            <FileText size={15} /> Official Player Stats (Inaugural Game)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {article.playerStats.map((st, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800/80 p-2.5 rounded-xl flex items-center justify-between text-xs">
                <div>
                  <span className="font-bold text-white block">{st.player}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{st.team}</span>
                </div>
                <span className="font-mono font-bold text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-900/50">
                  {st.stat}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Historical Firsts List */}
        <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
          <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
            <Award size={15} /> CCH All-Time League Firsts
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300">
            {article.highlights.map((hl, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                <span>{hl}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <div className="flex gap-2">
            {onSelectTeamRecap && (
              <>
                <button
                  onClick={() => {
                    onClose();
                    onSelectTeamRecap('california-reds');
                  }}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  California Reds Team Page
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onSelectTeamRecap('san-diego-sabrewolves');
                  }}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  SD Sabrewolves Team Page
                </button>
              </>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl transition-all cursor-pointer shadow-lg"
          >
            Close Story
          </button>
        </div>
      </div>
    </div>
  );
};
