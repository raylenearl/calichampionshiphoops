import React from 'react';
import { INAUGURAL_GAME_ARTICLE, CCHMilestoneArticle } from '../data/leagueMilestonesData';
import { TeamBadge } from './TeamBadge';
import { Trophy, Calendar, Sparkles, X, Quote, Award, FileText, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './SocialLinks';

interface InauguralGameModalProps {
  isOpen: boolean;
  onClose: () => void;
  article?: CCHMilestoneArticle;
  onSelectTeamRecap?: (teamId: string) => void;
}

function getTeamSlug(teamName: string): string {
  const lower = teamName.toLowerCase();
  if (lower.includes('reds')) return 'california-reds';
  if (lower.includes('sabrewolves')) return 'san-diego-sabrewolves';
  if (lower.includes('knights')) return 'san-francisco-knights';
  if (lower.includes('strykers')) return 'san-diego-strykers';
  if (lower.includes('stallions')) return 'sacramento-stallions';
  if (lower.includes('dynamics')) return 'los-angeles-dynamics';
  if (lower.includes('enterprise')) return 'golden-state-enterprise';
  if (lower.includes('renegades')) return 'oakland-renegades';
  if (lower.includes('tigersharks')) return 'san-jose-tigersharks';
  if (lower.includes('admirals')) return 'anaheim-admirals';
  if (lower.includes('vipers')) return 'long-beach-vipers';
  if (lower.includes('mad dogs')) return 'fresno-mad-dogs';
  return 'california-reds';
}

export const InauguralGameModal: React.FC<InauguralGameModalProps> = ({
  isOpen,
  onClose,
  article = INAUGURAL_GAME_ARTICLE,
  onSelectTeamRecap,
}) => {
  if (!isOpen) return null;

  const team1Slug = getTeamSlug(article.teams.team1);
  const team2Slug = getTeamSlug(article.teams.team2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/40 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-slate-100 my-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-full transition-all cursor-pointer shadow-md z-10"
          title="Close Modal"
        >
          <X size={20} />
        </button>

        {/* Modal Header Badge */}
        <div className="space-y-3 border-b border-slate-800 pb-5">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500/10 border border-amber-500/40 text-amber-400 text-xs font-mono font-extrabold rounded-full uppercase tracking-wider">
            <Sparkles size={14} /> HISTORIC LEAGUE MILESTONE • SEASON {article.season}
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1 font-mono text-amber-300 font-bold">
              <Calendar size={14} /> {article.date}
            </span>
            <span>•</span>
            <span className="text-slate-300 font-semibold">{article.subtitle}</span>
          </div>
        </div>

        {/* Game Box Score Highlight Card */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3 shadow-inner">
          <div className="flex items-center justify-between text-xs text-slate-400 uppercase font-mono font-bold border-b border-slate-800/80 pb-2">
            <span>Matchup Boxscore</span>
            <span className="text-amber-400">Final Score</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Team 1 */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2.5">
                <TeamBadge teamId={team1Slug} size="md" />
                <div>
                  <h3 className="font-black text-sm text-white">{article.teams.team1}</h3>
                  <span className="text-[10px] text-emerald-400 font-bold">
                    {article.teams.score1 > article.teams.score2 ? 'Winner' : 'Final'}
                  </span>
                </div>
              </div>
              <span className={`text-xl font-mono font-black px-3 py-1 rounded-lg ${
                article.teams.score1 > article.teams.score2 ? 'text-slate-950 bg-amber-500' : 'text-slate-300 bg-slate-950 border border-slate-800'
              }`}>
                {article.teams.score1}
              </span>
            </div>

            {/* Team 2 */}
            <div className="flex items-center justify-between bg-slate-900 p-3 rounded-xl border border-slate-800">
              <div className="flex items-center gap-2.5">
                <TeamBadge teamId={team2Slug} size="md" />
                <div>
                  <h3 className="font-black text-sm text-white">{article.teams.team2}</h3>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {article.teams.score2 > article.teams.score1 ? 'Winner' : 'Final'}
                  </span>
                </div>
              </div>
              <span className={`text-xl font-mono font-black px-3 py-1 rounded-lg ${
                article.teams.score2 > article.teams.score1 ? 'text-slate-950 bg-amber-500' : 'text-slate-300 bg-slate-950 border border-slate-800'
              }`}>
                {article.teams.score2}
              </span>
            </div>
          </div>
        </div>

        {/* Instagram Reel Highlight if available */}
        {article.instagramUrl && (
          <div className="space-y-3 bg-gradient-to-b from-slate-950 via-pink-950/20 to-slate-950 p-4 sm:p-5 rounded-2xl border border-pink-500/40 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-black uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
                <InstagramIcon size={15} className="text-pink-400" /> Official CCH Instagram Highlight Reel
              </span>
              <a
                href={article.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono font-bold text-pink-300 hover:text-pink-100 flex items-center gap-1 bg-pink-500/20 hover:bg-pink-500/30 px-3 py-1 rounded-xl border border-pink-500/30 transition-all cursor-pointer"
              >
                Open on Instagram <ExternalLink size={12} />
              </a>
            </div>

            <div className="flex justify-center w-full py-2">
              <div className="w-full max-w-[380px] aspect-[9/14] sm:aspect-[9/15] rounded-2xl overflow-hidden shadow-2xl border-2 border-pink-500/40 bg-black">
                <iframe
                  src={article.instagramEmbedUrl || `${article.instagramUrl.replace(/\/+$/, '')}/embed/`}
                  title={article.title}
                  frameBorder="0"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        )}

        {/* Featured Quote Spotlight */}
        {article.quotes.length > 0 && (
          <div className="bg-amber-950/30 border border-amber-800/50 p-4 sm:p-5 rounded-2xl relative space-y-2">
            <Quote className="text-amber-500/40 absolute right-4 top-4" size={32} />
            <p className="text-amber-200 text-sm italic font-medium leading-relaxed pr-8">
              &ldquo;{article.headlineQuote || article.quotes[0].quote}&rdquo;
            </p>
            <div className="text-xs font-bold text-amber-400">
              — {article.quotes[0].speaker}, <span className="text-amber-300/80 font-normal">{article.quotes[0].title}</span>
            </div>
          </div>
        )}

        {/* Main Article Body Paragraphs */}
        <div className="space-y-4 text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
          {article.contentParagraphs.map((paragraph, pIdx) => (
            <p key={pIdx} className={pIdx === 0 ? 'first-letter:text-3xl first-letter:font-black first-letter:text-amber-400 first-letter:mr-1' : ''}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Quotes Section */}
        {article.quotes.length > 1 && (
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <Quote size={14} /> Notable Quotes
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {article.quotes.slice(1).map((q, qIdx) => (
                <div key={qIdx} className="p-3.5 bg-slate-950 border-l-4 border-amber-500 rounded-r-xl space-y-1">
                  <p className="italic text-slate-300 text-xs">
                    &ldquo;{q.quote}&rdquo;
                  </p>
                  <span className="text-[11px] font-bold text-amber-400 block">
                    — {q.speaker} ({q.title})
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Player Stats Box */}
        {article.playerStats && article.playerStats.length > 0 && (
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-3">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5 border-b border-slate-800 pb-2">
              <FileText size={15} /> Key Box Score Performers
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
        )}

        {/* Historical Firsts / Highlights List */}
        {article.highlights && article.highlights.length > 0 && (
          <div className="bg-slate-950 border border-slate-800 p-5 rounded-2xl space-y-2">
            <h4 className="text-xs font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <Award size={15} /> Milestone Highlights
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
        )}

        {/* Modal Action Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-slate-800">
          <div className="flex gap-2">
            {onSelectTeamRecap && (
              <>
                <button
                  onClick={() => {
                    onClose();
                    onSelectTeamRecap(team1Slug);
                  }}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  {article.teams.team1} Team Page
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onSelectTeamRecap(team2Slug);
                  }}
                  className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs rounded-xl transition-all cursor-pointer"
                >
                  {article.teams.team2} Team Page
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
