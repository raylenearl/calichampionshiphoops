import React, { useState, useMemo, useEffect } from 'react';
import { Award, Trophy, Star, ChevronRight, TrendingUp, Sparkles, Activity, Search, Shield, Target, Flame, Users, ArrowUpRight, BarChart2 } from 'lucide-react';
import { PLAYERS } from '../data/playersData';
import { SEASON_LEADERS, ALL_AWARDS } from '../data/awardsData';
import { REGULAR_SEASON_CAREER_TOTALS, SINGLE_SEASON_INDIVIDUAL } from '../data/recordsData';
import { POTW_WEEKS } from '../data/potwData';
import { TeamBadge } from './TeamBadge';
import { Player } from '../types';

interface StatLeadersViewProps {
  onSelectPlayer?: (playerId: string) => void;
  onSelectTeam?: (teamId: string, season?: 1 | 2 | 3 | 4) => void;
  onComparePlayer?: (playerId: string) => void;
  initialSeason?: 1 | 2 | 3 | 4;
}

type StatCategory =
  | 'points'
  | 'rebounds'
  | 'assists'
  | 'steals'
  | 'blocks'
  | 'fgPct'
  | 'threePct'
  | 'ftPct'
  | 'fgm'
  | 'fga'
  | 'threeMade'
  | 'threeAtt'
  | 'ftm'
  | 'pointsAllowed'
  | 'oppFgm'
  | 'oppFga'
  | 'plusMinus'
  | 'turnovers'
  | 'fouls';

type CategoryGroup = 'all' | 'major' | 'offensive' | 'efficiency' | 'defensive' | 'discipline';

interface LeaderEntry {
  rank: number;
  playerId?: string;
  name: string;
  team: string;
  teamId: string;
  position: string;
  value: string | number;
  subText: string;
  perGame?: number;
  total?: number;
  badge?: string;
  isRecord?: boolean;
}

export const StatLeadersView: React.FC<StatLeadersViewProps> = ({
  onSelectPlayer,
  onSelectTeam,
  onComparePlayer,
  initialSeason = 4,
}) => {
  const [selectedView, setSelectedView] = useState<'season' | 'career'>('season');
  const [selectedSeason, setSelectedSeason] = useState<1 | 2 | 3 | 4>(initialSeason);
  const [activeCategory, setActiveCategory] = useState<StatCategory>('points');
  const [activeGroup, setActiveGroup] = useState<CategoryGroup>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // ----------------------------------------------------
  // SEASON STAT LEADERS COMPUTATION & ARCHIVE MAPPING
  // ----------------------------------------------------
  const seasonLeadersData: Record<1 | 2 | 3 | 4, Partial<Record<StatCategory, LeaderEntry[]>>> = useMemo(() => {
    // Helper to find player ID by name
    const getPlayerId = (name: string): string | undefined => {
      const match = PLAYERS.find((p) => p.name.toLowerCase() === name.toLowerCase());
      return match?.id;
    };

    return {
      // SEASON 1 (Inaugural Season Records)
      1: {
        points: [
          { rank: 1, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '25.0 PPG', subText: '575 Total PTS • Scoring Champion', playerId: getPlayerId('Lamar Anderson'), badge: 'Scoring Champion', isRecord: true },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '19.8 PPG', subText: '436 Total PTS • .810 FG%', playerId: getPlayerId('Dorell Kabal') },
          { rank: 3, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '18.5 PPG', subText: '407 Total PTS • S1 All-Star', playerId: getPlayerId('A.J. Hinton') },
          { rank: 4, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '18.2 PPG', subText: '400 Total PTS • .907 FT%', playerId: getPlayerId('Jack McMichael Jr.') },
          { rank: 5, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '17.6 PPG', subText: '387 Total PTS • 43 PTS High', playerId: getPlayerId('Alonzo Reece') },
        ],
        rebounds: [
          { rank: 1, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '9.4 RPG', subText: '207 Total REB • League MVP', playerId: getPlayerId('Dorell Kabal'), badge: 'Glass Master' },
          { rank: 2, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '9.2 RPG', subText: '202 Total REB • Defensive Triple Crown', playerId: getPlayerId('Mo Alexander') },
          { rank: 3, name: 'Frank Hackett', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PF', value: '5.2 RPG', subText: '114 Total REB', playerId: getPlayerId('Frank Hackett') },
          { rank: 4, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '5.2 RPG', subText: '114 Total REB' },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '4.6 RPG', subText: '101 Total REB', playerId: getPlayerId('Lamar Anderson') },
        ],
        assists: [
          { rank: 1, name: 'Donnell Nash', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '7.0 APG', subText: '154 Total AST • All-Time S1 Record', playerId: getPlayerId('Donnell Nash'), badge: 'Assist Leader', isRecord: true },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '5.1 APG', subText: '112 Total AST', playerId: getPlayerId('Lamar Anderson') },
          { rank: 3, name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '4.4 APG', subText: '97 Total AST', playerId: getPlayerId('Munir Kassa') },
          { rank: 4, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '4.2 APG', subText: '92 Total AST', playerId: getPlayerId('A.J. Hinton') },
          { rank: 5, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '4.1 APG', subText: '90 Total AST', playerId: getPlayerId('Jack McMichael Jr.') },
        ],
        steals: [
          { rank: 1, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '0.8 SPG', subText: '18 Total STL • DPOY Triple Crown Anchor', playerId: getPlayerId('Mo Alexander'), badge: 'Co-Steal Leader' },
          { rank: 2, name: 'Dakoulas Alexandris', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '0.8 SPG', subText: '18 Total STL (T-1st in CCH)' },
          { rank: 3, name: 'Carl Newton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SF', value: '0.8 SPG', subText: '18 Total STL (T-1st in CCH)' },
          { rank: 4, name: 'Adin Durmanenko', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PG', value: '0.8 SPG', subText: '18 Total STL (T-1st in CCH)' },
          { rank: 5, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '0.7 SPG', subText: '16 Total STL' },
        ],
        blocks: [
          { rank: 1, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '2.9 BPG', subText: '64 Total BLK • All-Time Single Season Record', playerId: getPlayerId('Mo Alexander'), badge: 'DPOY Triple Crown', isRecord: true },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '2.6 BPG', subText: '57 Total BLK', playerId: getPlayerId('Dorell Kabal') },
          { rank: 3, name: 'Adrian Pognotti', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '2.1 BPG', subText: '46 Total BLK' },
          { rank: 4, name: 'Cameron Barkley', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'C', value: '1.9 BPG', subText: '42 Total BLK' },
          { rank: 5, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '0.5 BPG', subText: '11 Total BLK' },
        ],
        threePct: [
          { rank: 1, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '.626 3PT%', subText: 'All-Time Single Season Record (62.6%)', isRecord: true, badge: '3PT Record' },
          { rank: 2, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.468 3PT%', subText: '76 Made 3-Pointers' },
          { rank: 3, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.442 3PT%', subText: '3PT Contest Champion' },
          { rank: 4, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '.420 3PT%', subText: 'Explosive Per-Game Accuracy' },
          { rank: 5, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '.412 3PT%', subText: 'Renegades Sniper' },
        ],
        fgPct: [
          { rank: 1, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '.810 FG%', subText: 'All-Time Single Season Record (175/216 FG)', isRecord: true, badge: 'FG% Record' },
          { rank: 2, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '.714 FG%', subText: 'Dominant Interior Finishing' },
          { rank: 3, name: 'Frank Hackett', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PF', value: '.560 FG%', subText: 'Championship Inside Presence' },
          { rank: 4, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '.520 FG%', subText: 'High Volume Efficiency' },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.518 FG%', subText: 'Perimeter Efficiency Leader' },
        ],
        ftPct: [
          { rank: 1, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.907 FT%', subText: 'All-Time S1 Free Throw Champion', isRecord: true, badge: 'FT Leader' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.865 FT%', subText: '51 Free Throws Made' },
          { rank: 3, name: 'A.J. Hinton', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '.855 FT%', subText: 'Clutch Line Shooting' },
          { rank: 4, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '.848 FT%', subText: 'Sabrewolves Floor Leader' },
          { rank: 5, name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '.832 FT%', subText: 'Knights Finisher' },
        ],
      },

      // SEASON 2 (The Redemption Era)
      2: {
        points: [
          { rank: 1, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '22.3 PPG', subText: '532 Total PTS • MVP & Finals MVP', playerId: getPlayerId('Lamar Anderson'), badge: 'Scoring Champ & MVP' },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '22.3 PPG', subText: '491 Total PTS • 22 GP', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '19.2 PPG', subText: '422 Total PTS • Rebound Champ', playerId: getPlayerId('Dorell Kabal') },
          { rank: 4, name: 'George Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'SG', value: '18.6 PPG', subText: '409 Total PTS • All-Rookie 1st', playerId: getPlayerId('George Madsen') },
          { rank: 5, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '17.8 PPG', subText: '392 Total PTS • All-Cali', playerId: getPlayerId('DeAnte Gray') },
        ],
        rebounds: [
          { rank: 1, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '10.1 RPG', subText: '218 Total REB • All-Time Season Record', playerId: getPlayerId('Dorell Kabal'), badge: 'Rebound Champion', isRecord: true },
          { rank: 2, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '8.4 RPG', subText: '185 Total REB', playerId: getPlayerId('Mo Alexander') },
          { rank: 3, name: 'Cameron Barkley', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'C', value: '7.8 RPG', subText: '172 Total REB • DPOY Winner', playerId: getPlayerId('Cameron Barkley') },
          { rank: 4, name: 'Frank Hackett', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PF', value: '5.8 RPG', subText: '128 Total REB', playerId: getPlayerId('Frank Hackett') },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '5.0 RPG', subText: '110 Total REB', playerId: getPlayerId('Lamar Anderson') },
        ],
        assists: [
          { rank: 1, name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PG', value: '4.6 APG', subText: '101 Total AST • League Assists Champion', playerId: getPlayerId('Ray Gambino Gamble'), badge: 'Assist Leader' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '4.4 APG', subText: '97 Total AST', playerId: getPlayerId('Lamar Anderson') },
          { rank: 3, name: 'A.J. Cox', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '4.1 APG', subText: '90 Total AST' },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '3.9 APG', subText: '86 Total AST', playerId: getPlayerId('A.J. Hinton') },
          { rank: 5, name: 'George Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'SG', value: '3.6 APG', subText: '80 Total AST', playerId: getPlayerId('George Madsen') },
        ],
        steals: [
          { rank: 1, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '1.6 SPG', subText: '35 Total STL • Rookie of the Year & Steal Leader', playerId: getPlayerId('Andor Marai'), badge: 'Steal Leader & ROTY' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '1.4 SPG', subText: '31 Total STL', playerId: getPlayerId('Lamar Anderson') },
          { rank: 3, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '1.3 SPG', subText: '28 Total STL', playerId: getPlayerId('A.J. Hinton') },
          { rank: 4, name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SG', value: '1.2 SPG', subText: '26 Total STL' },
          { rank: 5, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '1.1 SPG', subText: '24 Total STL' },
        ],
        blocks: [
          { rank: 1, name: 'Cameron Barkley', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'C', value: '2.3 BPG', subText: '51 Total BLK • Defensive Player of the Year', playerId: getPlayerId('Cameron Barkley'), badge: 'DPOY Winner' },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '2.3 BPG', subText: '51 Total BLK', playerId: getPlayerId('Dorell Kabal') },
          { rank: 3, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '2.2 BPG', subText: '48 Total BLK', playerId: getPlayerId('Mo Alexander') },
          { rank: 4, name: 'Adrian Pognotti', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '1.8 BPG', subText: '40 Total BLK' },
          { rank: 5, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '0.7 BPG', subText: '15 Total BLK' },
        ],
        threePct: [
          { rank: 1, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '.492 3PT%', subText: '62 Made 3-Pointers', badge: '3PT Leader' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.485 3PT%', subText: 'Championship Precision' },
          { rank: 3, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.452 3PT%', subText: 'Rising Stars POTG' },
          { rank: 4, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.440 3PT%', subText: '68 Made 3-Pointers' },
          { rank: 5, name: 'George Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'SG', value: '.438 3PT%', subText: 'Stallions Rookie Sniper' },
        ],
        fgPct: [
          { rank: 1, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '.785 FG%', subText: 'Consensus 1st Team All-Cali', badge: 'FG% Leader' },
          { rank: 2, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '.710 FG%', subText: 'Rookie Interior Scoring' },
          { rank: 3, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '.695 FG%', subText: 'Dynamics Post Force' },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.548 FG%', subText: '22.3 PPG Scoring Volume' },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.542 FG%', subText: 'League MVP Campaign' },
        ],
        ftPct: [
          { rank: 1, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '.892 FT%', subText: '102 FTM • All-Time Single Season Record', isRecord: true, badge: 'FTM Record' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.885 FT%', subText: 'Kia Clutch POTY' },
          { rank: 3, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.880 FT%', subText: 'Elite Free Throw Accuracy' },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.874 FT%', subText: 'Strykers Go-To Scorer' },
          { rank: 5, name: 'George Madsen', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'SG', value: '.862 FT%', subText: 'All-Rookie First Team' },
        ],
      },

      // SEASON 3 (The Championship Dynasty)
      3: {
        points: [
          { rank: 1, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '21.1 PPG', subText: '464 Total PTS • Season 3 MVP & Scoring Champ', playerId: getPlayerId('A.J. Hinton'), badge: 'League MVP & Scoring Champ' },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '19.2 PPG', subText: '422 Total PTS • Finals MVP Farewell', playerId: getPlayerId('Dorell Kabal'), badge: 'Finals MVP' },
          { rank: 3, name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PG', value: '18.1 PPG', subText: '398 Total PTS • MVP Runner-Up', playerId: getPlayerId('Ray Gambino Gamble') },
          { rank: 4, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '16.8 PPG', subText: '370 Total PTS • Man of the Year', playerId: getPlayerId('Jack McMichael Jr.') },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '15.9 PPG', subText: '350 Total PTS • OPOY Award Winner', playerId: getPlayerId('Lamar Anderson') },
        ],
        rebounds: [
          { rank: 1, name: 'Cameron Barkley', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'C', value: '8.0 RPG', subText: '176 Total REB • League Rebound Champion', playerId: getPlayerId('Cameron Barkley'), badge: 'Rebound Champion' },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '7.8 RPG', subText: '172 Total REB • S3 Finals MVP', playerId: getPlayerId('Dorell Kabal') },
          { rank: 3, name: 'Adrian Pognotti', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'C', value: '7.7 RPG', subText: '169 Total REB • DPOY Candidate' },
          { rank: 4, name: 'Frank Hackett', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PF', value: '6.2 RPG', subText: '136 Total REB', playerId: getPlayerId('Frank Hackett') },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '4.8 RPG', subText: '106 Total REB', playerId: getPlayerId('Lamar Anderson') },
        ],
        assists: [
          { rank: 1, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '4.8 APG', subText: '106 Total AST • League Assists Leader', playerId: getPlayerId('Lamar Anderson'), badge: 'Assist Leader' },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '4.6 APG', subText: '101 Total AST', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PG', value: '4.3 APG', subText: '95 Total AST', playerId: getPlayerId('Ray Gambino Gamble') },
          { rank: 4, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '3.8 APG', subText: '84 Total AST', playerId: getPlayerId('Jack McMichael Jr.') },
          { rank: 5, name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SG', value: '2.9 APG', subText: '64 Total AST' },
        ],
        steals: [
          { rank: 1, name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SG', value: '1.8 SPG', subText: '40 Total STL • All-Time Single Season Record', badge: 'DPOY & Steal Record', isRecord: true },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '1.6 SPG', subText: '35 Total STL', playerId: getPlayerId('Lamar Anderson') },
          { rank: 3, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '1.4 SPG', subText: '31 Total STL', playerId: getPlayerId('A.J. Hinton') },
          { rank: 4, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '1.2 SPG', subText: '26 Total STL' },
          { rank: 5, name: 'Damon Stephens', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'SG', value: '0.8 SPG', subText: 'Most Improved Player' },
        ],
        blocks: [
          { rank: 1, name: 'Cameron Barkley', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'C', value: '1.6 BPG', subText: '35 Total BLK • Rim Protection Champ', playerId: getPlayerId('Cameron Barkley'), badge: 'Block Champion' },
          { rank: 2, name: 'Adrian Pognotti', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'C', value: '1.3 BPG', subText: '29 Total BLK' },
          { rank: 3, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '1.2 BPG', subText: '26 Total BLK • Finals Anchor' },
          { rank: 4, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '1.1 BPG', subText: '24 Total BLK' },
          { rank: 5, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '0.6 BPG', subText: '13 Total BLK' },
        ],
        threePct: [
          { rank: 1, name: 'Greg Mann', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'SG', value: '.493 3PT%', subText: 'Season 3 3-Point Accuracy Champion', badge: '3PT Champion' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.468 3PT%', subText: 'Offensive Player of the Year' },
          { rank: 3, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.450 3PT%', subText: '68 Made 3-Pointers' },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.442 3PT%', subText: 'League MVP Campaign' },
          { rank: 5, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '.435 3PT%', subText: 'Renegades Core Guard' },
        ],
        fgPct: [
          { rank: 1, name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '.593 FG%', subText: 'Knights Leader in Efficiency', badge: 'FG% Champion' },
          { rank: 2, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '.580 FG%', subText: 'Interior Foundation' },
          { rank: 3, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '.575 FG%', subText: 'Dominant Post Scoring' },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.534 FG%', subText: 'Scoring Title Efficiency' },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.524 FG%', subText: 'OPOY Efficiency' },
        ],
        ftPct: [
          { rank: 1, name: 'Alton Newman', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'PF', value: '1.000 FT%', subText: 'Flawless 100% Free Throw Season', isRecord: true, badge: 'Perfect 1.000 FT%' },
          { rank: 2, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '.892 FT%', subText: 'Reds Floor General' },
          { rank: 3, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '.881 FT%', subText: 'Clutch Free Throw Shooting' },
          { rank: 4, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '.875 FT%', subText: 'Man of the Year' },
          { rank: 5, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '.860 FT%', subText: '88 Free Throws Made' },
        ],
      },

      // SEASON 4 (Verified Official In-Game Live Leaderboards)
      4: {
        points: [
          { rank: 1, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '33.0 PPG', subText: 'Season 4 Scoring Leader', playerId: getPlayerId('R.J. Rush'), badge: 'Scoring Leader' },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '29.0 PPG', subText: '42 PTS Single-Game High', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Lloyd Boomer', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PG', value: '25.5 PPG', subText: 'High-Volume Scoring Force', playerId: getPlayerId('Lloyd Boomer') },
          { rank: 4, name: 'Jamar Dean', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '25.0 PPG', subText: 'Week 1 POTW', playerId: getPlayerId('Jamar Dean'), badge: 'Week 1 POTW' },
          { rank: 5, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '23.2 PPG', subText: 'Interior Paint Anchor', playerId: getPlayerId('Andor Marai') },
        ],
        rebounds: [
          { rank: 1, name: 'J.C. McMillan', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'C', value: '11.0 RPG', subText: 'Season 4 Rebound Leader', playerId: getPlayerId('J.C. McMillan'), badge: 'Rebound Leader' },
          { rank: 2, name: 'Jesse Wingate', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PF', value: '9.0 RPG', subText: 'Admirals Frontcourt Anchor', playerId: getPlayerId('Jesse Wingate') },
          { rank: 3, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '9.0 RPG', subText: 'Reds Interior Anchor', playerId: getPlayerId('Andor Marai') },
          { rank: 4, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '9.0 RPG', subText: 'Dynamics Defensive Anchor', playerId: getPlayerId('Mo Alexander') },
          { rank: 5, name: 'Joshua Bowen', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'PF / C', value: '9.0 RPG', subText: 'Week 2 POTW', playerId: getPlayerId('Joshua Bowen'), badge: 'Week 2 POTW' },
        ],
        assists: [
          { rank: 1, name: 'Malique Pierce', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'PG', value: '8.0 APG', subText: 'Season 4 Assist Leader', playerId: getPlayerId('Malique Pierce'), badge: 'Assist Leader' },
          { rank: 2, name: 'Donald Hardy', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'PG', value: '7.0 APG', subText: 'Tigersharks Dual Playmaker', playerId: getPlayerId('Donald Hardy') },
          { rank: 3, name: 'Gemini Jackson', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '5.7 APG', subText: 'Stallions Floor General', playerId: getPlayerId('Gemini Jackson') },
          { rank: 4, name: 'J. Thompson', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'PG', value: '5.0 APG', subText: 'Knights Playmaker', playerId: getPlayerId('J. Thompson') },
          { rank: 5, name: 'Stan Roberts', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '5.0 APG', subText: 'Reds Primary Distributor', playerId: getPlayerId('Stan Roberts') },
        ],
        fgm: [
          { rank: 1, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '10.7 FGM', subText: '10.7 Made Field Goals/G', playerId: getPlayerId('A.J. Hinton'), badge: 'FGM Leader' },
          { rank: 2, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '9.6 FGM', subText: '9.6 Made Field Goals/G', playerId: getPlayerId('Andor Marai') },
          { rank: 3, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '9.0 FGM', subText: '9.0 Made Field Goals/G', playerId: getPlayerId('R.J. Rush') },
          { rank: 4, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '9.0 FGM', subText: '9.0 Made Field Goals/G', playerId: getPlayerId('Mo Alexander') },
          { rank: 5, name: 'Lloyd Boomer', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PG', value: '9.0 FGM', subText: '9.0 Made Field Goals/G', playerId: getPlayerId('Lloyd Boomer') },
        ],
        fga: [
          { rank: 1, name: 'Lloyd Boomer', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PG', value: '18.0 FGA', subText: '18.0 Field Goal Attempts/G', playerId: getPlayerId('Lloyd Boomer'), badge: 'FGA Leader' },
          { rank: 2, name: 'Step Sirven', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '17.5 FGA', subText: '17.5 Field Goal Attempts/G', playerId: getPlayerId('Step Sirven') },
          { rank: 3, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '16.7 FGA', subText: '16.7 Field Goal Attempts/G', playerId: getPlayerId('A.J. Hinton') },
          { rank: 4, name: 'Jamar Dean', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '15.0 FGA', subText: '15.0 Field Goal Attempts/G', playerId: getPlayerId('Jamar Dean') },
          { rank: 5, name: 'Carlton Daugherty', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SG', value: '15.0 FGA', subText: '15.0 Field Goal Attempts/G', playerId: getPlayerId('Carlton Daugherty') },
        ],
        threeMade: [
          { rank: 1, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '7.7 3PM', subText: '7.7 Made 3-Pointers/G • 12 3PM Game Record', playerId: getPlayerId('A.J. Hinton'), badge: '3PM Leader', isRecord: true },
          { rank: 2, name: 'Carlton Daugherty', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SG', value: '4.0 3PM', subText: '4.0 Made 3-Pointers/G', playerId: getPlayerId('Carlton Daugherty') },
          { rank: 3, name: 'Jamar Dean', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '3.3 3PM', subText: '3.3 Made 3-Pointers/G', playerId: getPlayerId('Jamar Dean') },
          { rank: 4, name: 'Albert Gill', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'SG', value: '3.0 3PM', subText: '3.0 Made 3-Pointers/G', playerId: getPlayerId('Albert Gill') },
          { rank: 5, name: 'Step Sirven', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '2.5 3PM', subText: '2.5 Made 3-Pointers/G', playerId: getPlayerId('Step Sirven') },
        ],
        threeAtt: [
          { rank: 1, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '11.7 3PA', subText: '11.7 3-Point Attempts/G', playerId: getPlayerId('A.J. Hinton'), badge: '3PA Leader' },
          { rank: 2, name: 'Carlton Daugherty', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SG', value: '9.0 3PA', subText: '9.0 3-Point Attempts/G', playerId: getPlayerId('Carlton Daugherty') },
          { rank: 3, name: 'Step Sirven', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '8.5 3PA', subText: '8.5 3-Point Attempts/G', playerId: getPlayerId('Step Sirven') },
          { rank: 4, name: 'Ed Burks', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SG', value: '8.0 3PA', subText: '8.0 3-Point Attempts/G', playerId: getPlayerId('Ed Burks') },
          { rank: 5, name: 'Gemini Jackson', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '7.3 3PA', subText: '7.3 3-Point Attempts/G', playerId: getPlayerId('Gemini Jackson') },
        ],
        ftm: [
          { rank: 1, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '14.0 FTM', subText: '14.0 Made Free Throws/G (1.000 FT%)', playerId: getPlayerId('R.J. Rush'), badge: 'FTM Leader' },
          { rank: 2, name: 'Lloyd Boomer', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PG', value: '6.5 FTM', subText: '6.5 Made Free Throws/G', playerId: getPlayerId('Lloyd Boomer') },
          { rank: 3, name: 'Jamar Dean', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '4.7 FTM', subText: '4.7 Made Free Throws/G', playerId: getPlayerId('Jamar Dean') },
          { rank: 4, name: 'Grok Wilkens', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'C', value: '4.5 FTM', subText: '4.5 Made Free Throws/G', playerId: getPlayerId('Grok Wilkens') },
          { rank: 5, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '4.0 FTM', subText: '4.0 Made Free Throws/G', playerId: getPlayerId('Kirk Barnes') },
        ],
        fgPct: [
          { rank: 1, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '1.000 FG%', subText: 'Flawless 1.000 Field Goal Accuracy', playerId: getPlayerId('Mo Alexander'), badge: 'Perfect 1.000 FG%', isRecord: true },
          { rank: 2, name: 'Al Sloan', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'C', value: '.818 FG%', subText: '0.818 FG% (81.8% Interior Scoring)', playerId: getPlayerId('Al Sloan') },
          { rank: 3, name: 'Geraldo Jones', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'SG', value: '.800 FG%', subText: '0.800 FG% (80.0% Scoring Efficiency)', playerId: getPlayerId('Geraldo Jones') },
          { rank: 4, name: 'Andre Creek', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SF', value: '.750 FG%', subText: '0.750 FG% (75.0% Forward Efficiency)', playerId: getPlayerId('Andre Creek') },
          { rank: 5, name: 'Joshua Bowen', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'PF / C', value: '.724 FG%', subText: '0.724 FG% (72.4% Paint Finishing)', playerId: getPlayerId('Joshua Bowen') },
        ],
        threePct: [
          { rank: 1, name: 'Chad Bryant', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SF', value: '1.000 3PT%', subText: '1.000 3P% (100% Perimeter Accuracy)', playerId: getPlayerId('Chad Bryant'), badge: 'Perfect 1.000 3PT%' },
          { rank: 2, name: 'Andre Creek', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SF', value: '1.000 3PT%', subText: '1.000 3P% (100% Perimeter Accuracy)', playerId: getPlayerId('Andre Creek'), badge: 'Perfect 1.000 3PT%' },
          { rank: 3, name: 'Albert Gill', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'SG', value: '1.000 3PT%', subText: '1.000 3P% (3.0 3PM/G at 100%)', playerId: getPlayerId('Albert Gill'), badge: 'Perfect 1.000 3PT%' },
          { rank: 4, name: 'Alan Perben', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SG', value: '1.000 3PT%', subText: '1.000 3P% (100% Perimeter Accuracy)', playerId: getPlayerId('Alan Perben'), badge: 'Perfect 1.000 3PT%' },
          { rank: 5, name: 'Vlado Toroman', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'C', value: '1.000 3PT%', subText: '1.000 3P% (100% Perimeter Accuracy)', playerId: getPlayerId('Vlado Toroman'), badge: 'Perfect 1.000 3PT%' },
        ],
        ftPct: [
          { rank: 1, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '1.000 FT%', subText: '1.000 FT% (14/14 FTM/G • Perfect Free Throw Execution)', playerId: getPlayerId('R.J. Rush'), badge: '1.000 FT% Leader', isRecord: true },
          { rank: 2, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '1.000 FT%', subText: '1.000 FT% (4.0 FTM/G at 100%)', playerId: getPlayerId('Kirk Barnes'), badge: '1.000 FT%' },
          { rank: 3, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '1.000 FT%', subText: '1.000 FT% (100% Free Throw Accuracy)', playerId: getPlayerId('Mo Alexander'), badge: '1.000 FT%' },
          { rank: 4, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '1.000 FT%', subText: '1.000 FT% (100% Free Throw Accuracy)', playerId: getPlayerId('Alonzo Reece'), badge: '1.000 FT%' },
          { rank: 5, name: 'Chad Bryant', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SF', value: '1.000 FT%', subText: '1.000 FT% (100% Free Throw Accuracy)', playerId: getPlayerId('Chad Bryant'), badge: '1.000 FT%' },
        ],
        steals: [
          { rank: 1, name: 'Andre Creek', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SF', value: '4.0 SPG', subText: '4.0 Steals/G • Season 4 Steals Leader', playerId: getPlayerId('Andre Creek'), badge: 'Steals Leader' },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '3.0 SPG', subText: '3.0 Steals/G • Two-Way Impact', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Geraldo Jones', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'SG', value: '3.0 SPG', subText: '3.0 Steals/G • Perimeter Disruption', playerId: getPlayerId('Geraldo Jones') },
          { rank: 4, name: 'Dell Butler', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'SG', value: '2.0 SPG', subText: '2.0 Steals/G • Defensive Disrupter', playerId: getPlayerId('Dell Butler') },
          { rank: 5, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '2.0 SPG', subText: '2.0 Steals/G • All-Time Defensive Anchor', playerId: getPlayerId('Mo Alexander') },
        ],
        blocks: [
          { rank: 1, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '2.0 BPG', subText: '2.0 Blocks/G • Season 4 Block Leader', playerId: getPlayerId('R.J. Rush'), badge: 'Blocks Leader' },
          { rank: 2, name: 'Gemini Jackson', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '1.7 BPG', subText: '1.7 Blocks/G • Guard Rim Protection', playerId: getPlayerId('Gemini Jackson') },
          { rank: 3, name: 'Adrian Pognotti', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '1.7 BPG', subText: '1.7 Blocks/G • Paint Rim Protection', playerId: getPlayerId('Adrian Pognotti') },
          { rank: 4, name: 'Tracy Howard', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PF', value: '1.5 BPG', subText: '1.5 Blocks/G • Admirals Interior Shield', playerId: getPlayerId('Tracy Howard') },
          { rank: 5, name: 'Maxwell Mayo', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'C', value: '1.5 BPG', subText: '1.5 Blocks/G • Vipers Interior Defense', playerId: getPlayerId('Maxwell Mayo') },
        ],
        pointsAllowed: [
          { rank: 1, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '20.0 PA', subText: '20.0 Points Allowed/G', playerId: getPlayerId('Kirk Barnes') },
          { rank: 2, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '19.5 PA', subText: '19.5 Points Allowed/G', playerId: getPlayerId('Kirk Tinsley') },
          { rank: 3, name: 'Step Sirven', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '15.5 PA', subText: '15.5 Points Allowed/G', playerId: getPlayerId('Step Sirven') },
          { rank: 4, name: 'Donnie Anderson', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '14.0 PA', subText: '14.0 Points Allowed/G', playerId: getPlayerId('Donnie Anderson') },
          { rank: 5, name: 'Jud Drew', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PF', value: '13.5 PA', subText: '13.5 Points Allowed/G', playerId: getPlayerId('Jud Drew') },
        ],
        oppFgm: [
          { rank: 1, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '9.0 oFGM', subText: '9.0 Opponent FGM/G', playerId: getPlayerId('Kirk Barnes') },
          { rank: 2, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '8.5 oFGM', subText: '8.5 Opponent FGM/G', playerId: getPlayerId('Kirk Tinsley') },
          { rank: 3, name: 'Jud Drew', team: 'Fresno Mad Dogs', teamId: 'fresno-mad-dogs', position: 'PF', value: '6.5 oFGM', subText: '6.5 Opponent FGM/G', playerId: getPlayerId('Jud Drew') },
          { rank: 4, name: 'Step Sirven', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '6.0 oFGM', subText: '6.0 Opponent FGM/G', playerId: getPlayerId('Step Sirven') },
          { rank: 5, name: 'Donnie Anderson', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '6.0 oFGM', subText: '6.0 Opponent FGM/G', playerId: getPlayerId('Donnie Anderson') },
        ],
        oppFga: [
          { rank: 1, name: 'Donnie Anderson', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF', value: '17.0 oFGA', subText: '17.0 Opponent FGA/G', playerId: getPlayerId('Donnie Anderson') },
          { rank: 2, name: 'Donald Hardy', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'PG', value: '16.0 oFGA', subText: '16.0 Opponent FGA/G', playerId: getPlayerId('Donald Hardy') },
          { rank: 3, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '14.5 oFGA', subText: '14.5 Opponent FGA/G', playerId: getPlayerId('Kirk Tinsley') },
          { rank: 4, name: 'R.J. Rush', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '14.0 oFGA', subText: '14.0 Opponent FGA/G', playerId: getPlayerId('R.J. Rush') },
          { rank: 5, name: 'J. Thompson', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'PG', value: '13.0 oFGA', subText: '13.0 Opponent FGA/G', playerId: getPlayerId('J. Thompson') },
        ],
        plusMinus: [
          { rank: 1, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '+30.3 +/-', subText: '+30.3 Net Rating per Game • #1 League High', playerId: getPlayerId('A.J. Hinton'), badge: 'Top Net +/-' },
          { rank: 2, name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PG', value: '+28.3 +/-', subText: '+28.3 Net Rating per Game', playerId: getPlayerId('Ray Gambino Gamble') },
          { rank: 3, name: 'Johnny Galloway', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PF', value: '+26.3 +/-', subText: '+26.3 Net Rating per Game', playerId: getPlayerId('Johnny Galloway') },
          { rank: 4, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '+25.0 +/-', subText: '+25.0 Net Rating per Game', playerId: getPlayerId('Mo Alexander') },
          { rank: 5, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '+22.3 +/-', subText: '+22.3 Net Rating per Game', playerId: getPlayerId('DeAnte Gray') },
          { rank: 6, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '-27.5 +/-', subText: '-27.5 Net Rating per Game • Bottom Negative', playerId: getPlayerId('Kirk Tinsley') },
          { rank: 7, name: 'Tracy Howard', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PF', value: '-27.0 +/-', subText: '-27.0 Net Rating per Game • Bottom Negative', playerId: getPlayerId('Tracy Howard') },
          { rank: 8, name: 'Pete Dantley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SF', value: '-27.0 +/-', subText: '-27.0 Net Rating per Game • Bottom Negative', playerId: getPlayerId('Pete Dantley') },
          { rank: 9, name: 'Jesse Wingate', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PF', value: '-26.0 +/-', subText: '-26.0 Net Rating per Game • Bottom Negative', playerId: getPlayerId('Jesse Wingate') },
          { rank: 10, name: 'G. Stefan', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PG', value: '-25.0 +/-', subText: '-25.0 Net Rating per Game • Bottom Negative', playerId: getPlayerId('G. Stefan') },
        ],
        turnovers: [
          { rank: 1, name: 'Gemini Jackson', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '4.3 TO', subText: '4.3 Turnovers/G', playerId: getPlayerId('Gemini Jackson') },
          { rank: 2, name: 'Cameron Barkley', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'C', value: '4.0 TO', subText: '4.0 Turnovers/G', playerId: getPlayerId('Cameron Barkley') },
          { rank: 3, name: 'Carlton Daugherty', team: 'Golden State Enterprise', teamId: 'golden-state-enterprise', position: 'SG', value: '4.0 TO', subText: '4.0 Turnovers/G', playerId: getPlayerId('Carlton Daugherty') },
          { rank: 4, name: 'Rickey Dunleavy', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'SG', value: '3.5 TO', subText: '3.5 Turnovers/G', playerId: getPlayerId('Rickey Dunleavy') },
          { rank: 5, name: 'J.C. McMillan', team: 'Long Beach Vipers', teamId: 'long-beach-vipers', position: 'C', value: '3.5 TO', subText: '3.5 Turnovers/G', playerId: getPlayerId('J.C. McMillan') },
        ],
        fouls: [
          { rank: 1, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '6.0 FLS', subText: '6.0 Personal Fouls/G', playerId: getPlayerId('Kirk Barnes') },
          { rank: 2, name: 'Andre Creek', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SF', value: '4.0 FLS', subText: '4.0 Personal Fouls/G', playerId: getPlayerId('Andre Creek') },
          { rank: 3, name: 'Malique Pierce', team: 'San Jose Tigersharks', teamId: 'san-jose-tigersharks', position: 'PG', value: '4.0 FLS', subText: '4.0 Personal Fouls/G', playerId: getPlayerId('Malique Pierce') },
          { rank: 4, name: 'Jesse Wingate', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'PF', value: '3.0 FLS', subText: '3.0 Personal Fouls/G', playerId: getPlayerId('Jesse Wingate') },
          { rank: 5, name: 'Damian Gilmore', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'PF', value: '3.0 FLS', subText: '3.0 Personal Fouls/G', playerId: getPlayerId('Damian Gilmore') },
        ],
      },
    };
  }, []);

  // ----------------------------------------------------
  // ALL-TIME CAREER LEADERS (Verified Aggregate Totals)
  // ----------------------------------------------------
  const careerLeaderboards: { category: string; icon: string; records: LeaderEntry[] }[] = useMemo(() => {
    const getPlayerId = (name: string): string | undefined => {
      const match = PLAYERS.find((p) => p.name.toLowerCase() === name.toLowerCase());
      return match?.id;
    };

    return [
      {
        category: 'All-Time Points',
        icon: 'Flame',
        records: [
          { rank: 1, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '1,432 PTS', subText: '66 GP • 21.7 PPG Career Avg (550 S1, 532 S2, 350 S3)', playerId: getPlayerId('Lamar Anderson'), badge: 'All-Time #1 Scorer', isRecord: true },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '1,367 PTS', subText: '69 GP • 19.8 PPG Career Avg (407 S1, 491 S2, 464 S3, 87 S4)', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '1,280 PTS', subText: '66 GP • 19.4 PPG Career Avg (436 S1, 422 S2, 422 S3)', playerId: getPlayerId('Dorell Kabal') },
          { rank: 4, name: 'Kirk Barnes', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'PG', value: '1,215 PTS', subText: '66 GP • 18.4 PPG Career Avg', playerId: getPlayerId('Kirk Barnes') },
          { rank: 5, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '1,170 PTS', subText: '66 GP • 17.7 PPG Career Avg (400 S1, 400 S2, 370 S3)', playerId: getPlayerId('Jack McMichael Jr.') },
        ],
      },
      {
        category: 'All-Time Rebounds',
        icon: 'Shield',
        records: [
          { rank: 1, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '586 REB', subText: '66 GP • 8.88 RPG Career Avg (182 S1, 218 S2, 186 S3)', playerId: getPlayerId('Dorell Kabal'), badge: 'All-Time Glass Leader', isRecord: true },
          { rank: 2, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '555 REB', subText: '67 GP • 8.28 RPG Career Avg (202 S1, 185 S2, 155 S3, 13 S4)', playerId: getPlayerId('Mo Alexander') },
          { rank: 3, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '468 REB', subText: '69 GP • 6.78 RPG Career Avg (448 S1-S3 + 20 S4)', playerId: getPlayerId('DeAnte Gray') },
          { rank: 4, name: 'Cameron Barkley', team: 'Golden State / SD', teamId: 'golden-state-enterprise', position: 'C', value: '446 REB', subText: '64 GP • 6.97 RPG Career Avg', playerId: getPlayerId('Cameron Barkley') },
          { rank: 5, name: 'Frank Hackett', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PF', value: '378 REB', subText: '66 GP • 5.72 RPG Career Avg', playerId: getPlayerId('Frank Hackett') },
        ],
      },
      {
        category: 'All-Time Assists',
        icon: 'Target',
        records: [
          { rank: 1, name: 'Ray Gambino Gamble', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'PG', value: '309 AST', subText: '68 GP • 4.54 APG Career Avg (294 S1-S3 All-Time Record + 15 S4)', playerId: getPlayerId('Ray Gambino Gamble'), badge: 'All-Time Floor General', isRecord: true },
          { rank: 2, name: 'Munir Kassa', team: 'San Francisco Knights', teamId: 'san-francisco-knights', position: 'SF / PG', value: '282 AST', subText: '65 GP • 4.34 APG Career Avg', playerId: getPlayerId('Munir Kassa') },
          { rank: 3, name: 'A.J. Cox', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'PG', value: '268 AST', subText: '58 GP • 4.62 APG Career Avg (Single-Game Record: 15 AST)' },
          { rank: 4, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '255 AST', subText: '66 GP • 3.86 APG Career Avg (112 S1, 97 S2, 46 S3)', playerId: getPlayerId('Lamar Anderson') },
          { rank: 5, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '250 AST', subText: '69 GP • 3.62 APG Career Avg', playerId: getPlayerId('A.J. Hinton') },
        ],
      },
      {
        category: 'All-Time 3-Pointers Made',
        icon: 'Sparkles',
        records: [
          { rank: 1, name: 'Jack McMichael Jr.', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'PG', value: '212 3PM', subText: '66 GP • 3.21 3PM/G (76 S1, 68 S2, 68 S3)', playerId: getPlayerId('Jack McMichael Jr.'), badge: 'All-Time 3PT Leader', isRecord: true },
          { rank: 2, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '208 3PM', subText: '69 GP • Single-Game Record: 12 3PM (48 S1, 66 S2, 70 S3, 24 S4)', playerId: getPlayerId('A.J. Hinton') },
          { rank: 3, name: 'Alonzo Reece', team: 'Oakland Renegades', teamId: 'oakland-renegades', position: 'SG', value: '197 3PM', subText: '70 GP • 2.81 3PM/G (64 S1, 62 S2, 62 S3, 9 S4)', playerId: getPlayerId('Alonzo Reece') },
          { rank: 4, name: 'Kirk Tinsley', team: 'Anaheim Admirals', teamId: 'anaheim-admirals', position: 'SG', value: '174 3PM', subText: '63 GP • S1 Accuracy Record (.626 3PT%)' },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '162 3PM', subText: '66 GP • S1 3-Point Contest Champion', playerId: getPlayerId('Lamar Anderson') },
        ],
      },
      {
        category: 'All-Time Steals',
        icon: 'Shield',
        records: [
          { rank: 1, name: 'Wes Taylor', team: 'San Diego Sabrewolves', teamId: 'san-diego-sabrewolves', position: 'SG', value: '94 STL', subText: '66 GP • 1.42 SPG • S3 DPOY All-Time Record (28 S1, 26 S2, 40 S3)', isRecord: true, badge: 'All-Time Steal Leader' },
          { rank: 2, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '82 STL', subText: '67 GP • Defensive Triple Crown Anchor (18 S1, 24 S2, 38 S3, 2 S4)', playerId: getPlayerId('Mo Alexander') },
          { rank: 3, name: 'DeAnte Gray', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SF', value: '78 STL', subText: '69 GP • Two-Way Forward (22 S1, 24 S2, 26 S3, 6 S4)', playerId: getPlayerId('DeAnte Gray') },
          { rank: 4, name: 'A.J. Hinton', team: 'San Diego Strykers', teamId: 'san-diego-strykers', position: 'SG', value: '76 STL', subText: '69 GP • 1.10 SPG Career Avg', playerId: getPlayerId('A.J. Hinton') },
          { rank: 5, name: 'Lamar Anderson', team: 'California Reds', teamId: 'california-reds', position: 'PG', value: '72 STL', subText: '66 GP • 1.09 SPG Career Avg', playerId: getPlayerId('Lamar Anderson') },
        ],
      },
      {
        category: 'All-Time Blocks',
        icon: 'Shield',
        records: [
          { rank: 1, name: 'Mo Alexander', team: 'Los Angeles Dynamics', teamId: 'los-angeles-dynamics', position: 'C', value: '155 BLK', subText: '67 GP • 2.31 BPG (64 S1, 48 S2, 40 S3, 3 S4)', playerId: getPlayerId('Mo Alexander'), badge: 'All-Time Block King', isRecord: true },
          { rank: 2, name: 'Dorell Kabal', team: 'Sacramento Stallions', teamId: 'sacramento-stallions', position: 'C', value: '128 BLK', subText: '66 GP • 1.94 BPG Career Avg (57 S1, 51 S2, 20 S3)', playerId: getPlayerId('Dorell Kabal') },
          { rank: 3, name: 'Adrian Pognotti', team: 'Sacramento / SF', teamId: 'sacramento-stallions', position: 'C', value: '118 BLK', subText: '66 GP • Single-Game Record: 10 BLK' },
          { rank: 4, name: 'Cameron Barkley', team: 'Golden State / SD', teamId: 'golden-state-enterprise', position: 'C', value: '108 BLK', subText: '64 GP • S2 DPOY & S3 Block Leader', playerId: getPlayerId('Cameron Barkley') },
          { rank: 5, name: 'Andor Marai', team: 'California Reds', teamId: 'california-reds', position: 'C', value: '72 BLK', subText: '49 GP • 1.47 BPG Career Avg' },
        ],
      },
    ];
  }, []);

  const allCategories: {
    id: StatCategory;
    label: string;
    shortLabel: string;
    group: CategoryGroup;
    icon: React.ComponentType<{ size?: number; className?: string }>;
  }[] = [
    // Major
    { id: 'points', label: 'Points (PPG)', shortLabel: 'PTS', group: 'major', icon: Flame },
    { id: 'rebounds', label: 'Rebounds (RPG)', shortLabel: 'REB', group: 'major', icon: Shield },
    { id: 'assists', label: 'Assists (APG)', shortLabel: 'AST', group: 'major', icon: Target },
    { id: 'steals', label: 'Steals (SPG)', shortLabel: 'STL', group: 'major', icon: Shield },
    { id: 'blocks', label: 'Blocks (BPG)', shortLabel: 'BLK', group: 'major', icon: Shield },
    { id: 'fgPct', label: 'Field Goal %', shortLabel: 'FG%', group: 'efficiency', icon: BarChart2 },
    { id: 'threePct', label: '3-Point %', shortLabel: '3P%', group: 'efficiency', icon: Sparkles },
    { id: 'ftPct', label: 'Free Throw %', shortLabel: 'FT%', group: 'efficiency', icon: Activity },

    // Offensive
    { id: 'fgm', label: 'Field Goals Made (FGM)', shortLabel: 'FGM', group: 'offensive', icon: Target },
    { id: 'fga', label: 'Field Goals Attempted (FGA)', shortLabel: 'FGA', group: 'offensive', icon: Target },
    { id: 'threeMade', label: '3-Pointers Made (3PM)', shortLabel: '3PM', group: 'offensive', icon: Sparkles },
    { id: 'threeAtt', label: '3-Pointers Attempted (3PA)', shortLabel: '3PA', group: 'offensive', icon: Sparkles },
    { id: 'ftm', label: 'Free Throws Made (FTM)', shortLabel: 'FTM', group: 'offensive', icon: Activity },

    // Defensive & Opponent
    { id: 'pointsAllowed', label: 'Points Allowed (PA)', shortLabel: 'PA', group: 'defensive', icon: Shield },
    { id: 'oppFgm', label: 'Opponent FGM', shortLabel: 'oFGM', group: 'defensive', icon: Shield },
    { id: 'oppFga', label: 'Opponent FGA', shortLabel: 'oFGA', group: 'defensive', icon: Shield },

    // Discipline & Rating
    { id: 'plusMinus', label: 'Plus / Minus (+/-)', shortLabel: '+/-', group: 'discipline', icon: TrendingUp },
    { id: 'turnovers', label: 'Turnovers (TO)', shortLabel: 'TO', group: 'discipline', icon: Activity },
    { id: 'fouls', label: 'Personal Fouls (FLS)', shortLabel: 'FLS', group: 'discipline', icon: Users },
  ];

  // Available categories for selected season (some categories are Season 4 specific)
  const availableCategories = useMemo(() => {
    const seasonData = seasonLeadersData[selectedSeason];
    if (!seasonData) return allCategories;
    return allCategories.filter((cat) => {
      const data = seasonData[cat.id];
      const hasData = Array.isArray(data) && data.length > 0;
      if (!hasData) return false;
      if (activeGroup === 'all') return true;
      if (activeGroup === 'major') return cat.group === 'major';
      if (activeGroup === 'offensive') return cat.group === 'offensive';
      if (activeGroup === 'efficiency') return cat.group === 'efficiency';
      if (activeGroup === 'defensive') return cat.group === 'defensive';
      if (activeGroup === 'discipline') return cat.group === 'discipline';
      return true;
    });
  }, [selectedSeason, activeGroup, seasonLeadersData]);

  // Ensure activeCategory exists in current season
  useEffect(() => {
    const seasonData = seasonLeadersData[selectedSeason];
    if (seasonData && (!seasonData[activeCategory] || seasonData[activeCategory]?.length === 0)) {
      setActiveCategory('points');
    }
  }, [selectedSeason, activeCategory, seasonLeadersData]);

  const currentCategoryLeaders = seasonLeadersData[selectedSeason]?.[activeCategory] || [];

  // Filter based on search query
  const filteredSeasonLeaders = useMemo(() => {
    if (!searchQuery.trim()) return currentCategoryLeaders;
    const query = searchQuery.toLowerCase();
    return currentCategoryLeaders.filter(
      (entry) =>
        entry.name.toLowerCase().includes(query) ||
        entry.team.toLowerCase().includes(query) ||
        entry.position.toLowerCase().includes(query)
    );
  }, [currentCategoryLeaders, searchQuery]);

  return (
    <div id="stat-leaders-view" className="space-y-8 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-mono font-black uppercase tracking-wider bg-amber-500 text-slate-950 px-3 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
                <BarChart2 size={13} /> OFFICIAL STAT LEADERBOARDS
              </span>
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-500/15 px-2.5 py-1 rounded-md border border-amber-500/30">
                SEASONS 1 – 4 ACCURATE ARCHIVE
              </span>
              {selectedSeason === 4 && (
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/15 px-2.5 py-1 rounded-md border border-emerald-500/30 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> LIVE SEASON 4 IN-PROGRESS
                </span>
              )}
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Statistical Leaders &amp; All-Time Records
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl font-medium leading-relaxed">
              Explore officially verified individual stat champions, efficiency metrics, and cumulative career milestones spanning inaugural Season 1 through live Season 4 competition.
            </p>
          </div>

          {/* Mode Switcher: Single-Season vs All-Time Career */}
          <div className="flex items-center bg-slate-950/90 border border-slate-800 p-1.5 rounded-2xl shrink-0 self-start md:self-center shadow-lg">
            <button
              onClick={() => setSelectedView('season')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedView === 'season'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Award size={15} />
              <span>Season Leaders</span>
            </button>
            <button
              onClick={() => setSelectedView('career')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedView === 'career'
                  ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Trophy size={15} />
              <span>Career Totals</span>
            </button>
          </div>
        </div>
      </div>

      {/* ==================================================== */}
      {/* VIEW 1: SINGLE SEASON STAT LEADERS */}
      {/* ==================================================== */}
      {selectedView === 'season' && (
        <div className="space-y-6">
          {/* Season Selector Tabs */}
          <div className="flex flex-wrap items-center justify-between gap-4 bg-slate-900/80 border border-slate-800 p-3 sm:p-4 rounded-2xl">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-1">
                Select Season:
              </span>
              {[
                { s: 4, label: 'Season 4 (Current)' },
                { s: 3, label: 'Season 3' },
                { s: 2, label: 'Season 2' },
                { s: 1, label: 'Season 1' },
              ].map(({ s, label }) => (
                <button
                  key={s}
                  onClick={() => setSelectedSeason(s as 1 | 2 | 3 | 4)}
                  className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    selectedSeason === s
                      ? 'bg-amber-500 text-slate-950 font-black shadow'
                      : 'bg-slate-950 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={14} />
              <input
                type="text"
                placeholder="Search player or team..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-3 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500 font-sans"
              />
            </div>
          </div>

          {/* Category Group Filter Tabs (especially useful for rich Season 4 data) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'All Categories' },
              { id: 'major', label: 'Traditional (PTS, REB, AST, STL, BLK)' },
              { id: 'offensive', label: 'Offensive Totals (FGM, FGA, 3PM, 3PA, FTM)' },
              { id: 'efficiency', label: 'Shooting % (FG%, 3P%, FT%)' },
              { id: 'defensive', label: 'Defensive & Opponent (PA, oFGM, oFGA)' },
              { id: 'discipline', label: 'Rating & Discipline (+/-, TO, FLS)' },
            ].map((grp) => (
              <button
                key={grp.id}
                onClick={() => setActiveGroup(grp.id as CategoryGroup)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeGroup === grp.id
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-900/80 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {grp.label}
              </button>
            ))}
          </div>

          {/* Stat Category Horizontal Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2">
            {availableCategories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-1 ${
                    isSelected
                      ? 'bg-amber-500/15 border-amber-500 text-amber-300 shadow-md shadow-amber-500/10 scale-[1.02]'
                      : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <Icon size={16} className={isSelected ? 'text-amber-400' : 'text-slate-500'} />
                    {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />}
                  </div>
                  <span className="text-xs font-bold font-mono tracking-tight block truncate">
                    {cat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Leaders Podium Showcase Grid */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-5 sm:p-7 space-y-6 shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
              <div className="space-y-0.5">
                <span className="text-[10px] font-mono uppercase text-amber-400 font-bold tracking-wider">
                  Season {selectedSeason} Official Standings
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <Flame size={18} className="text-amber-500" />
                  Top Performers: {allCategories.find((c) => c.id === activeCategory)?.label || activeCategory}
                </h3>
              </div>
              <span className="text-xs font-mono text-slate-400">
                {filteredSeasonLeaders.length} Player{filteredSeasonLeaders.length !== 1 ? 's' : ''} Listed
              </span>
            </div>

            {/* List Table */}
            <div className="space-y-3">
              {filteredSeasonLeaders.map((leader) => {
                const isFirst = leader.rank === 1;
                return (
                  <div
                    key={`${leader.rank}-${leader.name}`}
                    onClick={() => {
                      if (leader.playerId && onSelectPlayer) {
                        onSelectPlayer(leader.playerId);
                      }
                    }}
                    className={`p-4 rounded-2xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                      isFirst
                        ? 'bg-gradient-to-r from-amber-950/40 via-slate-950 to-slate-900 border-amber-500/60 shadow-lg'
                        : 'bg-slate-950/70 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/60'
                    } ${leader.playerId ? 'cursor-pointer hover:scale-[1.005]' : ''}`}
                  >
                    {/* Left: Rank & Player Details */}
                    <div className="flex items-center gap-3.5 min-w-0">
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-black text-sm shrink-0 shadow ${
                          leader.rank === 1
                            ? 'bg-amber-500 text-slate-950 shadow-amber-500/30'
                            : leader.rank === 2
                            ? 'bg-slate-300 text-slate-950'
                            : leader.rank === 3
                            ? 'bg-amber-700 text-white'
                            : 'bg-slate-900 text-slate-400 border border-slate-800'
                        }`}
                      >
                        #{leader.rank}
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-base font-black text-white group-hover:text-amber-400 transition-colors truncate">
                            {leader.name}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                            {leader.position}
                          </span>
                          {leader.badge && (
                            <span className="text-[9px] font-mono font-black uppercase text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded border border-amber-500/40">
                              {leader.badge}
                            </span>
                          )}
                          {leader.isRecord && (
                            <span className="text-[9px] font-mono font-black uppercase text-red-300 bg-red-500/20 px-2 py-0.5 rounded border border-red-500/40">
                              ★ LEAGUE RECORD
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <TeamBadge teamId={leader.teamId} size="xs" />
                          <span className="font-semibold text-slate-300">{leader.team}</span>
                          <span>•</span>
                          <span className="font-medium text-slate-400">{leader.subText}</span>
                        </div>
                      </div>
                    </div>

                    {/* Right: Stat Value & Action */}
                    <div className="flex items-center justify-between sm:justify-end gap-4 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800/80">
                      <div className="text-left sm:text-right">
                        <span className="text-xl sm:text-2xl font-black font-mono text-amber-400 block tracking-tight">
                          {leader.value}
                        </span>
                      </div>

                      {leader.playerId && (
                        <div className="flex items-center gap-1.5">
                          {onComparePlayer && (
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                onComparePlayer(leader.playerId!);
                              }}
                              className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-[11px] font-mono font-bold transition-all cursor-pointer"
                              title="Compare Player"
                            >
                              Compare
                            </button>
                          )}
                          <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-500 transition-all">
                            <ChevronRight size={16} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Stat Summary Cards for Current Selected Season */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {seasonLeadersData[selectedSeason] && (
              <>
                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Scoring Leader</span>
                  <p className="text-base font-black text-white">{seasonLeadersData[selectedSeason]?.points?.[0]?.name || 'N/A'}</p>
                  <span className="text-sm font-mono font-black text-amber-400">{seasonLeadersData[selectedSeason]?.points?.[0]?.value || '-'}</span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Rebounding Leader</span>
                  <p className="text-base font-black text-white">{seasonLeadersData[selectedSeason]?.rebounds?.[0]?.name || 'N/A'}</p>
                  <span className="text-sm font-mono font-black text-emerald-400">{seasonLeadersData[selectedSeason]?.rebounds?.[0]?.value || '-'}</span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Playmaking Leader</span>
                  <p className="text-base font-black text-white">{seasonLeadersData[selectedSeason]?.assists?.[0]?.name || 'N/A'}</p>
                  <span className="text-sm font-mono font-black text-sky-400">{seasonLeadersData[selectedSeason]?.assists?.[0]?.value || '-'}</span>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-2xl space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block">Defensive Leader</span>
                  <p className="text-base font-black text-white">{seasonLeadersData[selectedSeason]?.blocks?.[0]?.name || 'N/A'}</p>
                  <span className="text-sm font-mono font-black text-purple-400">{seasonLeadersData[selectedSeason]?.blocks?.[0]?.value || '-'}</span>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* VIEW 2: ALL-TIME CAREER TOTALS & MILESTONES */}
      {/* ==================================================== */}
      {selectedView === 'career' && (
        <div className="space-y-8">
          <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs font-mono font-black text-amber-400 uppercase tracking-wider block mb-1">
              ALL-TIME REGULAR SEASON CAREER MILESTONES (THROUGH SEASON 4)
            </span>
            <p className="text-xs text-slate-300 leading-relaxed font-medium">
              Verified cumulative totals for all 4 seasons. All active regular season games played in Seasons 1, 2, 3, and live Season 4 are compiled into these historical leaderboard standings.
            </p>
          </div>

          {/* Grid of 6 Career Leaderboard Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {careerLeaderboards.map((board) => (
              <div
                key={board.category}
                className="bg-slate-950/90 border border-slate-800 p-5 sm:p-6 rounded-3xl space-y-4 shadow-xl relative overflow-hidden"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <h3 className="text-base sm:text-lg font-black text-white flex items-center gap-2">
                    <Trophy size={18} className="text-amber-500" />
                    {board.category}
                  </h3>
                  <span className="text-[10px] font-mono text-amber-400 font-bold bg-amber-500/10 px-2.5 py-0.5 rounded border border-amber-500/20">
                    ALL-TIME
                  </span>
                </div>

                <div className="space-y-2.5">
                  {board.records.map((rec) => {
                    const isFirst = rec.rank === 1;
                    return (
                      <div
                        key={`${board.category}-${rec.rank}-${rec.name}`}
                        onClick={() => {
                          if (rec.playerId && onSelectPlayer) {
                            onSelectPlayer(rec.playerId);
                          }
                        }}
                        className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                          isFirst
                            ? 'bg-amber-950/20 border-amber-500/50 shadow-sm'
                            : 'bg-slate-900/60 border-slate-800/80 hover:bg-slate-900 hover:border-slate-700'
                        } ${rec.playerId ? 'cursor-pointer' : ''}`}
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <span
                            className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-black text-xs shrink-0 ${
                              isFirst ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-900 text-slate-400 border border-slate-800'
                            }`}
                          >
                            {rec.rank}
                          </span>
                          <div className="min-w-0 space-y-0.5">
                            <div className="flex items-center gap-1.5 flex-wrap">
                              <span className="text-sm font-black text-white truncate">{rec.name}</span>
                              {rec.badge && (
                                <span className="text-[8px] font-mono font-bold text-amber-300 bg-amber-500/20 px-1.5 py-0.2 rounded border border-amber-500/30">
                                  {rec.badge}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
                              <TeamBadge teamId={rec.teamId} size="xs" />
                              <span className="truncate">{rec.team}</span>
                              <span>•</span>
                              <span className="text-[10px] text-slate-500 truncate">{rec.subText}</span>
                            </div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-base font-mono font-black text-amber-400">{rec.value}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Historical Single-Game Record Highlights Strip */}
          <div className="bg-slate-950/80 border border-slate-800 p-5 rounded-3xl space-y-3">
            <span className="text-[10px] font-mono font-black uppercase text-amber-400 tracking-wider flex items-center gap-1.5">
              <Sparkles size={13} /> ALL-TIME SINGLE-GAME RECORD PEAKS
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl space-y-1">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Most Points (Game)</span>
                <p className="text-xs font-black text-white">Kirk Barnes (56 PTS)</p>
                <span className="text-[10px] font-mono text-amber-400">vs. San Diego Strykers (S3)</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl space-y-1">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Most 3-Pointers (Game)</span>
                <p className="text-xs font-black text-white">A.J. Hinton (12 3PM)</p>
                <span className="text-[10px] font-mono text-amber-400">vs. California Reds (S4)</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl space-y-1">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Most Assists (Game)</span>
                <p className="text-xs font-black text-white">A.J. Cox (15 AST)</p>
                <span className="text-[10px] font-mono text-amber-400">vs. Oakland (S1)</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-3 rounded-2xl space-y-1">
                <span className="text-[9px] font-mono uppercase text-slate-400 font-bold block">Most Blocks (Game)</span>
                <p className="text-xs font-black text-white">Adrian Pognotti (10 BLK)</p>
                <span className="text-[10px] font-mono text-amber-400">vs. San Jose (S2)</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
