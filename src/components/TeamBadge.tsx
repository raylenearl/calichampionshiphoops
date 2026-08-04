import React from 'react';
import { Trophy } from 'lucide-react';
import { TEAM_LOGOS_MAP } from './TeamLogos';

interface TeamBadgeProps {
  teamId: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showName?: boolean;
  name?: string;
}

export const TEAM_COLORS: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  'sacramento-stallions': { bg: 'bg-emerald-950', text: 'text-amber-400', border: 'border-emerald-600', accent: '#059669' },
  'san-francisco-knights': { bg: 'bg-blue-950', text: 'text-slate-300', border: 'border-blue-600', accent: '#1e3a8a' },
  'oakland-renegades': { bg: 'bg-orange-950', text: 'text-orange-400', border: 'border-orange-600', accent: '#f97316' },
  'san-jose-tigersharks': { bg: 'bg-teal-950', text: 'text-teal-300', border: 'border-teal-600', accent: '#0d9488' },
  'golden-state-enterprise': { bg: 'bg-blue-900', text: 'text-amber-300', border: 'border-amber-500', accent: '#2563eb' },
  'fresno-mad-dogs': { bg: 'bg-red-950', text: 'text-red-400', border: 'border-red-600', accent: '#dc2626' },
  'los-angeles-dynamics': { bg: 'bg-purple-950', text: 'text-yellow-400', border: 'border-purple-600', accent: '#7c3aed' },
  'california-reds': { bg: 'bg-red-900', text: 'text-white', border: 'border-red-500', accent: '#b91c1c' },
  'san-diego-sabrewolves': { bg: 'bg-sky-950', text: 'text-sky-300', border: 'border-sky-500', accent: '#0284c7' },
  'san-diego-strykers': { bg: 'bg-orange-900', text: 'text-amber-400', border: 'border-orange-500', accent: '#ea580c' },
  'anaheim-admirals': { bg: 'bg-cyan-950', text: 'text-amber-300', border: 'border-cyan-600', accent: '#0369a1' },
  'long-beach-vipers': { bg: 'bg-green-950', text: 'text-green-400', border: 'border-green-600', accent: '#15803d' },
};

export const TeamBadge: React.FC<TeamBadgeProps> = ({ teamId, size = 'md', className = '', showName = false, name }) => {
  const colors = TEAM_COLORS[teamId] || { bg: 'bg-slate-900', text: 'text-amber-400', border: 'border-slate-700', accent: '#334155' };

  const sizeClasses = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  }[size];

  const logoPixelSizes = {
    sm: 28,
    md: 40,
    lg: 56,
    xl: 80,
  }[size];

  const LogoComponent = TEAM_LOGOS_MAP[teamId];

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <div
        className={`${sizeClasses} flex items-center justify-center shrink-0 transition-transform hover:scale-105`}
      >
        {LogoComponent ? (
          <LogoComponent size={logoPixelSizes} />
        ) : (
          <Trophy size={logoPixelSizes * 0.7} className="text-amber-400" />
        )}
      </div>
      {showName && name && (
        <span className={`font-semibold text-slate-100 ${size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm'}`}>
          {name}
        </span>
      )}
    </div>
  );
};
