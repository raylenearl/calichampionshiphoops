import React, { useState } from 'react';
import {
  Trophy,
  Flame,
  Zap,
  BookOpen,
  ChevronRight,
  Sparkles,
  TrendingUp,
  BarChart3,
  Calendar,
  Share2,
  Check
} from 'lucide-react';
import { TeamBadge } from './TeamBadge';
import sdReboundS4Img from '../assets/images/SD_Rebound_S4.png';
import hintonVsJmjS4Img from '../assets/images/Hinton_vs_JMJs4.png';

interface FeaturedGameStoriesProps {
  onNavigateToNews: (articleId: string) => void;
  onSelectTeam?: (teamId: string) => void;
  onNavigateToTab?: (tab: string) => void;
}

interface GameStory {
  id: string;
  articleId: string;
  badgeTag: string;
  badgeColor: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  imageCaption: string;
  winner: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  loser: {
    id: string;
    name: string;
    city: string;
    nickname: string;
    score: number;
    record: string;
    isHome: boolean;
  };
  quarterScores: { period: string; team1: number; team2: number }[];
  starPlayer: {
    name: string;
    team: string;
    statline: string;
    highlight: string;
  };
  keyStats: { label: string; value: string; desc: string }[];
  quote: { speaker: string; text: string; role: string };
}

const FEATURED_STORIES: GameStory[] = [
  {
    id: 's4-g17-strykers-vs-dynamics',
    articleId: 's4-g17-strykers-blowout-dynamics-hinton',
    badgeTag: 'SOUTH RIVALRY • MARQUEE CLASH',
    badgeColor: 'border-amber-500/60 bg-amber-500/10 text-amber-400',
    title: 'Strykers Dismantle Dynamics 82-58 to Remain Undefeated at 4-0',
    subtitle:
      'San Diego unleashes a devastating 28-8 opening quarter blitz, forcing 13 turnovers and pouring in 29 fast-break points behind A.J. Hinton (18 PTS, 6 REB, 3 STL).',
    date: 'Nov 5 • Season 4 Marquee Game',
    image: hintonVsJmjS4Img,
    imageCaption: 'A.J. Hinton (18 PTS, 6 REB, 3 STL) and Jack McMichael Jr. (14 PTS, 7-7 FT) battle in the marquee Southern Cali clash as San Diego improves to 4-0.',
    winner: {
      id: 'san-diego-strykers',
      name: 'San Diego Strykers',
      city: 'San Diego',
      nickname: 'Strykers',
      score: 82,
      record: '4-0 (1st)',
      isHome: true,
    },
    loser: {
      id: 'los-angeles-dynamics',
      name: 'Los Angeles Dynamics',
      city: 'Los Angeles',
      nickname: 'Dynamics',
      score: 58,
      record: '1-2 (7th)',
      isHome: false,
    },
    quarterScores: [
      { period: 'Q1', team1: 28, team2: 8 },
      { period: 'Q2', team1: 18, team2: 10 },
      { period: 'Q3', team1: 13, team2: 19 },
      { period: 'Q4', team1: 23, team2: 21 },
    ],
    starPlayer: {
      name: 'A.J. Hinton',
      team: 'San Diego Strykers',
      statline: '18 PTS • 6 REB • 3 STL • 2 AST (8-14 FG, 2-6 3PT)',
      highlight: '18 PTS & 28-8 Opening Blitz Lead Strykers to 4-0',
    },
    keyStats: [
      { label: 'Fast Break PTS', value: '29 - 10', desc: 'Strykers Transition Dominance' },
      { label: 'Turnovers', value: '3 - 13', desc: 'San Diego Committed Just 3 TOs' },
      { label: 'Paint Points', value: '42 - 32', desc: 'Interior Scoring Control' },
      { label: 'Strykers Record', value: '4 - 0', desc: 'Tied for League Lead (+30.5 Diff)' },
    ],
    quote: {
      speaker: 'Adam Saunders',
      role: 'Head Coach • San Diego Strykers (4-0 Record)',
      text: 'Our defensive intensity in the first 12 minutes set the tone. 29 fast-break points and only 3 turnovers all night is championship basketball.',
    },
  },
  {
    id: 's4-g18-sabrewolves-vs-knights',
    articleId: 's4-g18-sabrewolves-stifle-knights-creek',
    badgeTag: 'BREAKTHROUGH WIN • INTER-CONFERENCE',
    badgeColor: 'border-emerald-500/60 bg-emerald-500/10 text-emerald-400',
    title: "Creek's Flawless 23-Point Masterclass Lifts Sabrewolves Past Knights 61-48",
    subtitle:
      'Andre Creek shoots an unbelievable 11-of-12 from the floor for 23 points and 6 rebounds as San Diego pulls away in the 2nd half to capture their first win of Season 4.',
    date: 'Nov 7 • Season 4 Road Victory',
    image: sdReboundS4Img,
    imageCaption: 'Andre Creek connected on 11-of-12 field goals for 23 points and 6 rebounds as the San Diego Sabrewolves locked down San Francisco 61-48.',
    winner: {
      id: 'san-diego-sabrewolves',
      name: 'San Diego Sabrewolves',
      city: 'San Diego',
      nickname: 'Sabrewolves',
      score: 61,
      record: '1-1 (6th)',
      isHome: false,
    },
    loser: {
      id: 'san-francisco-knights',
      name: 'San Francisco Knights',
      city: 'San Francisco',
      nickname: 'Knights',
      score: 48,
      record: '0-3 (11th)',
      isHome: true,
    },
    quarterScores: [
      { period: 'Q1', team1: 13, team2: 16 },
      { period: 'Q2', team1: 11, team2: 8 },
      { period: 'Q3', team1: 23, team2: 15 },
      { period: 'Q4', team1: 14, team2: 9 },
    ],
    starPlayer: {
      name: 'Andre Creek',
      team: 'San Diego Sabrewolves',
      statline: '23 PTS • 6 REB • 1 BLK • 11-12 FG (91.7% Shooting)',
      highlight: '23 PTS on 11/12 FG Fuels First Win of Season 4',
    },
    keyStats: [
      { label: 'Andre Creek FG%', value: '91.7%', desc: '11 of 12 from the Floor' },
      { label: 'Paint Points', value: '38 - 18', desc: '+20 Paint Advantage for SD' },
      { label: 'Fast Break PTS', value: '13 - 4', desc: 'Sabrewolves Controlled Tempo' },
      { label: 'Sabrewolves Mark', value: '1 - 1', desc: 'Bounce Back Road Victory' },
    ],
    quote: {
      speaker: 'Andre Creek',
      role: 'Forward • San Diego Sabrewolves (23 PTS, 11-12 FG)',
      text: 'My teammates found me in rhythm and in spots where I could attack quickly. We needed this win to bounce back, and our second-half defense was locked in.',
    },
  },
];

export const FeaturedGameStories: React.FC<FeaturedGameStoriesProps> = ({
  onNavigateToNews,
  onSelectTeam,
  onNavigateToTab,
}) => {
  const [selectedStoryId, setSelectedStoryId] = useState<string>(FEATURED_STORIES[0].id);

  return (
    <section className="space-y-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Flame size={18} />
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Featured Game Stories
            </h2>
            <span className="text-xs font-mono font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-500/30">
              Season 4 Latest
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-400">
            Exclusive recaps, official box scores, and star player breakdowns from the latest CCH action.
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('news')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <BookOpen size={13} className="text-amber-400" />
            <span>All News &amp; Recaps</span>
          </button>
          <button
            onClick={() => onNavigateToTab && onNavigateToTab('schedule')}
            className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-xs font-mono font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Calendar size={13} className="text-amber-400" />
            <span>Schedule</span>
          </button>
        </div>
      </div>

      {/* Two Prominent Game Story Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {FEATURED_STORIES.map((story) => {
          return (
            <article
              key={story.id}
              className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-200 group"
            >
              {/* Top Banner Image with Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                {/* Badge Tag */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span
                    className={`text-[10px] sm:text-[11px] font-mono font-black uppercase tracking-wider px-3 py-1 rounded-full border backdrop-blur-md ${story.badgeColor}`}
                  >
                    {story.badgeTag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-slate-700 text-slate-300 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
                  {story.date}
                </div>

                {/* Scoreboard Overlay on the bottom of the image */}
                <div className="absolute bottom-3 left-3 right-3 sm:left-4 sm:right-4 bg-slate-950/95 backdrop-blur-md border border-slate-800/90 rounded-2xl p-3 shadow-xl">
                  <div className="grid grid-cols-2 items-center divide-x divide-slate-800 gap-2">
                    {/* Team 1 (Winner) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.winner.id)}
                      className="flex items-center justify-between pr-2 sm:pr-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.winner.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-black text-white leading-tight">
                            {story.winner.name}
                          </div>
                          <div className="text-[10px] font-mono text-emerald-400 font-bold">
                            {story.winner.record} • Winner
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-amber-400 pl-2 shrink-0">
                        {story.winner.score}
                      </div>
                    </div>

                    {/* Team 2 (Loser) */}
                    <div
                      onClick={() => onSelectTeam && onSelectTeam(story.loser.id)}
                      className="flex items-center justify-between pl-2 sm:pl-3 cursor-pointer hover:opacity-90 transition-opacity"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <TeamBadge teamId={story.loser.id} size="sm" />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-slate-300 leading-tight">
                            {story.loser.name}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">
                            {story.loser.record}
                          </div>
                        </div>
                      </div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-slate-400 pl-2 shrink-0">
                        {story.loser.score}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Story Details & Content Body */}
              <div className="p-5 sm:p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <h3
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="text-lg sm:text-xl font-black text-white group-hover:text-amber-400 transition-colors cursor-pointer leading-snug"
                  >
                    {story.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {story.subtitle}
                  </p>

                  {/* Star Spotlight Pill */}
                  <div className="p-3 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono font-black uppercase text-amber-400 flex items-center gap-1">
                        <Sparkles size={12} className="text-amber-400" />
                        PLAYER OF THE GAME
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {story.starPlayer.team}
                      </span>
                    </div>
                    <div className="text-sm font-black text-white">
                      {story.starPlayer.name}
                    </div>
                    <div className="text-xs font-mono text-amber-300 font-bold">
                      {story.starPlayer.statline}
                    </div>
                  </div>

                  {/* Key Stats Bar */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                    {story.keyStats.map((st, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/60 border border-slate-800/80 p-2.5 rounded-xl text-center space-y-0.5"
                      >
                        <div className="text-[9px] font-mono text-slate-400 font-bold uppercase leading-tight">
                          {st.label}
                        </div>
                        <div className="text-sm sm:text-base font-black text-amber-400 font-mono">
                          {st.value}
                        </div>
                        <div className="text-[9px] text-slate-400 leading-tight">
                          {st.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quarter by Quarter Box Score */}
                  <div className="bg-slate-950/60 border border-slate-800 rounded-xl p-2.5 overflow-x-auto">
                    <table className="w-full text-xs font-mono">
                      <thead>
                        <tr className="text-[10px] text-slate-400 uppercase border-b border-slate-800/80">
                          <th className="text-left py-0.5 font-bold">Team</th>
                          {story.quarterScores.map((q) => (
                            <th key={q.period} className="text-center py-0.5 font-bold">
                              {q.period}
                            </th>
                          ))}
                          <th className="text-right py-0.5 font-bold text-amber-400">T</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/40">
                        <tr>
                          <td className="py-1 text-white font-bold whitespace-nowrap">
                            {story.winner.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-300">
                              {q.team1}
                            </td>
                          ))}
                          <td className="text-right py-1 font-black text-amber-400">
                            {story.winner.score}
                          </td>
                        </tr>
                        <tr>
                          <td className="py-1 text-slate-400 font-semibold whitespace-nowrap">
                            {story.loser.name}
                          </td>
                          {story.quarterScores.map((q) => (
                            <td key={q.period} className="text-center py-1 text-slate-400">
                              {q.team2}
                            </td>
                          ))}
                          <td className="text-right py-1 font-bold text-slate-400">
                            {story.loser.score}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Read Full Article Button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-end">
                  <button
                    onClick={() => onNavigateToNews(story.articleId)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 transition-all cursor-pointer"
                  >
                    <span>Read Full Story</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
