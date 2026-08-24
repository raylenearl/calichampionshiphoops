import React from 'react';
import { Newspaper, ChevronRight, Sparkles, Quote, BookOpen, Users, ArrowRight, Headphones } from 'lucide-react';
import { PodcastPlayerCard } from './PodcastPlayerCard';
import { CCH_NEWS_ARTICLES } from '../data/newsData';

// Coach images
import aSaundersImg from '../assets/images/ASaunders.jpg';
import bNelsonImg from '../assets/images/BNelson.jpeg';
import cGoodwinImg from '../assets/images/CGoodwin.jpg';
import jUnderwoodPhoto from '../assets/images/JUnderwood.png';
import mStaufferImg from '../assets/images/MStauffer.jpeg';
import pSplitterImg from '../assets/images/PSplitter.jpg';
import rFloresImg from '../assets/images/RFlores.jpg';
import sPorterImg from '../assets/images/SPorter.jpeg';
import sRobertsImg from '../assets/images/SRoberts.jpeg';
import wWalkerImg from '../assets/images/WWalker.jpeg';
import wZimmermanImg from '../assets/images/WZimmerman.jpeg';
import zRandleImg from '../assets/images/image6.jpeg';

interface BreakingNewsCardProps {
  onNavigateToNews: (articleId?: string) => void;
}

const COACHES_PREVIEW = [
  { name: 'Steve Porter', team: 'Admirals', teamId: 'anaheim-admirals', photo: sPorterImg, status: 'Returning' },
  { name: 'William Walker', team: 'Reds', teamId: 'california-reds', photo: wWalkerImg, status: 'Returning' },
  { name: 'Benjamin Nelson', team: 'Stallions', teamId: 'sacramento-stallions', photo: bNelsonImg, status: 'Returning' },
  { name: 'Michael Stauffer', team: 'Tigersharks', teamId: 'san-jose-tigersharks', photo: mStaufferImg, status: 'Returning' },
  { name: 'Jacob Underwood', team: 'Sabrewolves', teamId: 'san-diego-sabrewolves', photo: jUnderwoodPhoto, status: 'Newcomer' },
  { name: 'Adam Saunders', team: 'Strykers', teamId: 'san-diego-strykers', photo: aSaundersImg, status: 'Newcomer' },
  { name: 'Pooh Splitter', team: 'Dynamics', teamId: 'los-angeles-dynamics', photo: pSplitterImg, status: 'Newcomer' },
  { name: 'Stretch Roberts', team: 'Vipers', teamId: 'long-beach-vipers', photo: sRobertsImg, status: 'Newcomer' },
  { name: 'Ronnie Flores', team: 'Mad Dogs', teamId: 'fresno-mad-dogs', photo: rFloresImg, status: 'Newcomer' },
  { name: 'Wyatt Zimmerman', team: 'Enterprise', teamId: 'golden-state-enterprise', photo: wZimmermanImg, status: 'Newcomer' },
  { name: 'Carson Goodwin', team: 'Renegades', teamId: 'oakland-renegades', photo: cGoodwinImg, status: 'Newcomer' },
  { name: 'Zack Randle', team: 'Knights', teamId: 'san-francisco-knights', photo: zRandleImg, status: 'Newcomer' },
];

export const BreakingNewsCard: React.FC<BreakingNewsCardProps> = ({ onNavigateToNews }) => {
  const coachesArticle = CCH_NEWS_ARTICLES.find(a => a.id === 's4-head-coaches-introduction') || CCH_NEWS_ARTICLES[0];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-amber-950/30 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden group space-y-6">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="animate-pulse flex h-2.5 w-2.5 rounded-full bg-red-500" />
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 font-mono flex items-center gap-1.5">
            <Newspaper size={14} className="text-amber-400" /> FEATURED FRONT OFFICE STORY
          </span>
          <span className="text-[10px] font-mono font-bold bg-amber-500/15 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/30">
            SEASON 4 OFFSEASON
          </span>
          <span className="text-[10px] font-mono font-bold bg-amber-500/25 text-amber-300 px-2.5 py-0.5 rounded-full border border-amber-500/40 flex items-center gap-1">
            <Headphones size={11} /> PODCAST ATTACHED
          </span>
        </div>
        <span className="text-xs font-mono text-slate-300 font-bold">Front-Office Insider</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Side: 12 Coaches Visual Mosaic */}
        <div className="lg:col-span-5 space-y-3">
          <div
            onClick={() => onNavigateToNews('s4-head-coaches-introduction')}
            className="cursor-pointer bg-slate-950 border border-slate-800 hover:border-amber-500/50 rounded-2xl p-3.5 shadow-xl transition-all group/mosaic"
          >
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800">
              <span className="text-[11px] font-mono font-bold text-amber-400 flex items-center gap-1.5">
                <Users size={14} /> 12 HEAD COACHES CLASS
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                4 Returning • 8 New
              </span>
            </div>

            {/* 12 Coach Portraits Grid (6 cols x 2 rows) */}
            <div className="grid grid-cols-6 gap-1.5">
              {COACHES_PREVIEW.map((c, i) => (
                <div
                  key={i}
                  className="group/coach relative aspect-square rounded-xl overflow-hidden border border-slate-800 bg-slate-900 hover:border-amber-400 transition-all hover:scale-105"
                  title={`${c.name} (${c.team}) - ${c.status}`}
                >
                  <img src={c.photo} alt={c.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-transparent to-transparent flex items-end p-0.5">
                    <span className="text-[8px] font-black text-white truncate w-full text-center">
                      {c.name.split(' ').pop()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2.5 text-[10px] font-mono text-amber-300/90 flex items-center justify-between pt-1 border-t border-slate-800/80">
              <span className="truncate">Porter • Walker • Nelson • Stauffer & 8 New Leaders</span>
              <span className="text-amber-400 font-bold group-hover/mosaic:translate-x-0.5 transition-transform">
                Explore →
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Headline, Summary, Attached Podcast Player & Action CTAs */}
        <div className="lg:col-span-7 space-y-4">
          <div
            className="cursor-pointer"
            onClick={() => onNavigateToNews('s4-head-coaches-introduction')}
          >
            <h2 className="text-xl sm:text-2xl font-black text-white leading-tight tracking-tight group-hover:text-amber-300 transition-colors">
              Season 4 Head Coaches Unveiled: Continuity Meets High-Stakes Sideline Shakeups
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-medium">
              With four battle-tested championship tacticians returning and eight franchises debuting new sideline leadership, Cali Championship Hoops enters Season 4 with unprecedented tactical intrigue across all 12 franchises.
            </p>
          </div>

          {/* Attached Single-Control Audio Podcast Player */}
          {coachesArticle.audioUrl && (
            <PodcastPlayerCard
              audioUrl={coachesArticle.audioUrl}
              podcastInfo={coachesArticle.podcastInfo}
              title="Season 4 Coaching Shakeups Special"
              compact={true}
            />
          )}

          {/* Quote Banner */}
          <div className="bg-slate-950/70 border-l-4 border-amber-500 p-3 rounded-r-2xl italic text-xs text-slate-200 flex items-start gap-2 shadow-inner">
            <Quote size={14} className="text-amber-400 shrink-0 mt-0.5" />
            <span className="leading-relaxed">
              &quot;The sideline chess match in Season 4 will be the fiercest in league history. Four enduring pillars defend their culture against eight fresh tacticians determined to reshape the championship hierarchy.&quot;
            </span>
          </div>

          {/* Navigation CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              onClick={() => onNavigateToNews('s4-head-coaches-introduction')}
              className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm rounded-2xl shadow-lg shadow-amber-500/20 flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen size={16} />
              <span>Read Full Coaching Article</span>
              <ChevronRight size={16} />
            </button>

            <button
              onClick={() => onNavigateToNews('s4-underwood-defection')}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 rounded-2xl text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Sparkles size={13} className="text-amber-400" />
              <span>Underwood Defection Story</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
