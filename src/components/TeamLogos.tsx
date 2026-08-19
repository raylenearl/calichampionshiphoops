import React from 'react';

interface TeamLogoProps {
  size?: number;
  className?: string;
}

// 1. Sacramento Stallions Logo
export const StallionsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/sacramento-stallions.png"
    alt="Sacramento Stallions"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 2. San Francisco Knights Logo
export const KnightsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/san-francisco-knights.png"
    alt="San Francisco Knights"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 3. Oakland Renegades Logo
export const RenegadesLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/oakland-renegades.png"
    alt="Oakland Renegades"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 4. San Jose Tigersharks Logo
export const TigersharksLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/san-jose-tigersharks.png"
    alt="San Jose Tigersharks"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 5. Golden State Enterprise Logo
export const EnterpriseLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/golden-state-enterprise.png"
    alt="Golden State Enterprise"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 6. Fresno Mad Dogs Logo
export const MadDogsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/fresno-mad-dogs.png"
    alt="Fresno Mad Dogs"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 7. Los Angeles Dynamics Logo
export const DynamicsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/los-angeles-dynamics.png"
    alt="Los Angeles Dynamics"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 8. California Reds Logo
export const RedsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/california-reds.png"
    alt="California Reds"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 9. San Diego Sabrewolves Logo
export const SabrewolvesLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/san-diego-sabrewolves.png"
    alt="San Diego Sabrewolves"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 10. San Diego Strykers Logo
export const StrykersLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/san-diego-strykers.png"
    alt="San Diego Strykers"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 11. Anaheim Admirals Logo
export const AdmiralsLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/anaheim-admirals.png"
    alt="Anaheim Admirals"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// 12. Long Beach Vipers Logo
export const VipersLogo: React.FC<TeamLogoProps> = ({ size = 36, className = '' }) => (
  <img
    src="/logos/long-beach-vipers.png"
    alt="Long Beach Vipers"
    width={size}
    height={size}
    className={`object-contain ${className}`}
    style={{ width: size, height: size }}
  />
);

// Master League Logo Component (California Crown Hoops CCH)
export const CCHLeagueLogo: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => (
  <img
    src="/logos/cch_league_logo.png"
    alt="Cali Championship Hoops"
    width={size}
    height={size}
    className={`object-contain shrink-0 ${className}`}
    style={{ width: size, height: size }}
  />
);

// Map of all team logos
export const TEAM_LOGOS_MAP: Record<string, React.FC<TeamLogoProps>> = {
  'sacramento-stallions': StallionsLogo,
  'san-francisco-knights': KnightsLogo,
  'oakland-renegades': RenegadesLogo,
  'san-jose-tigersharks': TigersharksLogo,
  'golden-state-enterprise': EnterpriseLogo,
  'fresno-mad-dogs': MadDogsLogo,
  'los-angeles-dynamics': DynamicsLogo,
  'california-reds': RedsLogo,
  'san-diego-sabrewolves': SabrewolvesLogo,
  'san-diego-strykers': StrykersLogo,
  'anaheim-admirals': AdmiralsLogo,
  'long-beach-vipers': VipersLogo,
};

export const TeamLogo: React.FC<{ teamId: string; size?: number; className?: string }> = ({
  teamId,
  size = 36,
  className = '',
}) => {
  const Component = TEAM_LOGOS_MAP[teamId];
  if (Component) {
    return <Component size={size} className={className} />;
  }
  return (
    <div
      className={`rounded bg-slate-800 flex items-center justify-center text-[10px] font-mono font-bold text-amber-400 ${className}`}
      style={{ width: size, height: size }}
    >
      CCH
    </div>
  );
};
