import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface SocialPlatform {
  name: string;
  handle: string;
  url: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  hoverGlow: string;
  icon: (props: { className?: string; size?: number }) => React.JSX.Element;
}

export const InstagramIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

export const YoutubeIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export const TwitchIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M11.571 4.714h1.715v5.143h-1.715zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/>
  </svg>
);

export const TiktokIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-4 h-4", size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.38V9.07a6.34 6.34 0 0 0-1 .08A6.33 6.33 0 1 0 15.83 15.4V8.34a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.01.23z"/>
  </svg>
);

export const SOCIAL_PLATFORMS: SocialPlatform[] = [
  {
    name: 'Instagram',
    handle: '@CCHoops2k',
    url: 'https://instagram.com/CCHoops2k',
    badgeBg: 'bg-pink-950/40 hover:bg-pink-900/60',
    badgeBorder: 'border-pink-800/60 hover:border-pink-500',
    badgeText: 'text-pink-300 hover:text-pink-200',
    hoverGlow: 'hover:shadow-pink-500/20',
    icon: InstagramIcon,
  },
  {
    name: 'YouTube',
    handle: '@CCHoops2k',
    url: 'https://www.youtube.com/@CCHoops2k',
    badgeBg: 'bg-red-950/40 hover:bg-red-900/60',
    badgeBorder: 'border-red-800/60 hover:border-red-500',
    badgeText: 'text-red-300 hover:text-red-200',
    hoverGlow: 'hover:shadow-red-500/20',
    icon: YoutubeIcon,
  },
  {
    name: 'Twitch',
    handle: 'CCHoops2k',
    url: 'https://www.twitch.tv/CCHoops2k',
    badgeBg: 'bg-purple-950/40 hover:bg-purple-900/60',
    badgeBorder: 'border-purple-800/60 hover:border-purple-500',
    badgeText: 'text-purple-300 hover:text-purple-200',
    hoverGlow: 'hover:shadow-purple-500/20',
    icon: TwitchIcon,
  },
  {
    name: 'TikTok',
    handle: '@CCHoops2k',
    url: 'https://www.tiktok.com/@CCHoops2k',
    badgeBg: 'bg-cyan-950/40 hover:bg-cyan-900/60',
    badgeBorder: 'border-cyan-800/60 hover:border-cyan-500',
    badgeText: 'text-cyan-300 hover:text-cyan-200',
    hoverGlow: 'hover:shadow-cyan-500/20',
    icon: TiktokIcon,
  },
];

export const SocialHeaderButtons: React.FC = () => {
  return (
    <div className="flex items-center gap-1 shrink-0">
      {SOCIAL_PLATFORMS.map((platform) => {
        const IconComponent = platform.icon;
        return (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`Follow CCHoops2k on ${platform.name} (${platform.handle})`}
            className={`flex items-center justify-center p-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${platform.badgeBg} ${platform.badgeBorder} ${platform.badgeText} ${platform.hoverGlow}`}
          >
            <IconComponent size={14} />
          </a>
        );
      })}
    </div>
  );
};

export const SocialFooterGrid: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-black tracking-wider uppercase text-amber-400">
          Official Media & Streams (@CCHoops2k)
        </span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {SOCIAL_PLATFORMS.map((platform) => {
          const IconComponent = platform.icon;
          return (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${platform.badgeBg} ${platform.badgeBorder} ${platform.badgeText}`}
            >
              <IconComponent size={16} className="shrink-0" />
              <div className="flex flex-col leading-tight min-w-0">
                <span className="font-black truncate">{platform.name}</span>
                <span className="text-[10px] opacity-75 font-mono truncate">{platform.handle}</span>
              </div>
              <ExternalLink size={12} className="ml-auto opacity-60 shrink-0" />
            </a>
          );
        })}
      </div>
    </div>
  );
};
