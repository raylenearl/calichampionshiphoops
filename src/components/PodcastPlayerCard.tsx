import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Radio,
  AlertTriangle,
  Upload,
  Sparkles,
  Headphones,
  CheckCircle2,
  Info,
} from 'lucide-react';
import { PodcastInfo } from '../data/newsData';
import { TeamBadge } from './TeamBadge';

interface PodcastPlayerCardProps {
  audioUrl?: string;
  podcastInfo?: PodcastInfo;
  title?: string;
  subtitle?: string;
  defaultExpanded?: boolean;
}

export const PodcastPlayerCard: React.FC<PodcastPlayerCardProps> = ({
  audioUrl,
  podcastInfo,
  title = 'Official Podcast Broadcast',
  subtitle,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
  const [showCorrections, setShowCorrections] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activeSrc = customAudioUrl || audioUrl || 'https://dn601201.us.archive.org/0/items/cchoops2k/Kabal_s_Final_Ring_and_Underwood_s_Defection.m4a';

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || 0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [activeSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((e) => {
        console.warn('Playback error or user gesture required:', e);
      });
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const jump = (seconds: number) => {
    if (!audioRef.current) return;
    const nextTime = Math.max(0, Math.min(duration || 9999, audioRef.current.currentTime + seconds));
    audioRef.current.currentTime = nextTime;
    setCurrentTime(nextTime);
  };

  const cyclePlaybackRate = () => {
    const rates = [1, 1.25, 1.5, 1.75, 2];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    audioRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomAudioUrl(url);
      setIsPlaying(false);
      setCurrentTime(0);
      if (audioRef.current) {
        audioRef.current.src = url;
        audioRef.current.load();
      }
    }
  };

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const notableErrors = podcastInfo?.notableErrors || [
    'Andre Creek plays for the San Diego Sabrewolves, not the Oakland Renegades.',
    'Anaheim Admirals sharpshooter Kirk Tinsley was mistakenly called "Keith" (or "Keith Tinsley") on air (not Kirk Barnes).',
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/40 border-2 border-amber-500/40 rounded-3xl p-5 sm:p-6 shadow-2xl space-y-5 text-left relative overflow-hidden">
      {/* Hidden native audio element */}
      <audio ref={audioRef} src={activeSrc} preload="metadata" />

      {/* Decorative top pulse */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Radio size={18} className={isPlaying ? 'animate-pulse' : ''} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-black uppercase tracking-wider bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30">
                Official Podcast Episode
              </span>
              {customAudioUrl && (
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                  <CheckCircle2 size={10} /> Custom Audio Loaded
                </span>
              )}
            </div>
            <h3 className="text-base sm:text-lg font-black text-white leading-snug mt-0.5">
              {podcastInfo?.episodeTitle || title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Audio Upload Trigger */}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Load or replace with your local audio recording file"
            className="px-2.5 py-1.5 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white rounded-xl text-[11px] font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Upload size={12} className="text-amber-400" />
            <span>Load Audio File</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/*"
            onChange={handleFileUpload}
            className="hidden"
          />
        </div>
      </div>

      {/* Host / Broadcast Info */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 font-mono gap-2">
        <span className="flex items-center gap-1.5 text-slate-300">
          <Headphones size={13} className="text-amber-400" />
          {podcastInfo?.broadcastBy || 'CCH Official Media Network'}
        </span>
        <span className="bg-slate-900/90 px-2.5 py-0.5 rounded-lg border border-slate-800 text-amber-300 font-bold">
          {podcastInfo?.duration || '18 min audio broadcast'}
        </span>
      </div>

      {podcastInfo?.description && (
        <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/60 p-3 rounded-2xl border border-slate-800/80">
          {podcastInfo.description}
        </p>
      )}

      {/* Main Interactive Playback Controls */}
      <div className="bg-slate-950/90 border border-slate-800/90 rounded-2xl p-4 sm:p-5 space-y-4 shadow-inner">
        {/* Scrubber & Time */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold">
            <span className="text-amber-400">{formatTime(currentTime)}</span>
            <span>{formatTime(duration || 1080)}</span>
          </div>
          <div className="relative flex items-center">
            <input
              type="range"
              min={0}
              max={duration || 1080}
              step={0.5}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
            />
          </div>
        </div>

        {/* Playback Buttons Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Jump -15s */}
            <button
              onClick={() => jump(-15)}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
              title="Rewind 15 seconds"
            >
              <RotateCcw size={16} />
            </button>

            {/* Play / Pause Main Button */}
            <button
              onClick={togglePlay}
              className="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-2 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 cursor-pointer"
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} className="fill-current" />}
              <span className="text-xs uppercase tracking-wider">
                {isPlaying ? 'Pause Episode' : 'Play Broadcast'}
              </span>
            </button>

            {/* Jump +15s */}
            <button
              onClick={() => jump(15)}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
              title="Forward 15 seconds"
            >
              <RotateCw size={16} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {/* Speed Rate Toggle */}
            <button
              onClick={cyclePlaybackRate}
              className="px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono font-bold text-amber-300 transition-colors cursor-pointer"
              title="Playback speed"
            >
              {playbackRate}x
            </button>

            {/* Mute Toggle */}
            <button
              onClick={toggleMute}
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
              title={isMuted ? 'Unmute' : 'Mute'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>

        {/* Animated Waveform Simulation */}
        <div className="flex items-center justify-center gap-1 pt-1 h-6 overflow-hidden">
          {Array.from({ length: 32 }).map((_, i) => {
            const height = isPlaying
              ? `${Math.max(15, Math.sin(i * 0.4 + currentTime * 3) * 80 + 20)}%`
              : `${((i % 5) + 1) * 15}%`;
            return (
              <span
                key={i}
                style={{ height }}
                className={`w-1 rounded-full transition-all duration-150 ${
                  isPlaying ? 'bg-amber-400' : 'bg-slate-700'
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* NOTABLE ERRORS & EDITORIAL CORRECTIONS BANNER */}
      <div className="bg-amber-950/40 border-2 border-amber-500/50 rounded-2xl p-4 sm:p-5 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle size={18} className="text-amber-400 animate-pulse" />
            <h4 className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-300 font-mono">
              Podcast Corrections & Notable On-Air Errors
            </h4>
          </div>
          <button
            onClick={() => setShowCorrections(!showCorrections)}
            className="text-[11px] font-mono text-amber-400 hover:underline cursor-pointer"
          >
            {showCorrections ? 'Hide Notes' : 'Show Notes'}
          </button>
        </div>

        {showCorrections && (
          <div className="space-y-3 text-xs text-slate-200">
            <p className="text-[11px] text-amber-200/90 font-medium">
              Please note the following on-air corrections regarding player affiliations and names in this episode:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
              {/* Correction 1: Andre Creek */}
              <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Correction #1 • Team Affiliation
                  </span>
                  <TeamBadge teamId="san-diego-sabrewolves" size="sm" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span className="text-amber-300">Andre Creek</span>
                    <span className="text-[10px] text-slate-400 font-mono">(Center / Forward)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    <strong className="text-emerald-400">Accurate Status:</strong> Andre Creek plays for the{' '}
                    <span className="font-bold text-amber-300">San Diego Sabrewolves</span>, NOT the Oakland Renegades as stated during the recording.
                  </p>
                </div>
              </div>

              {/* Correction 2: Kirk Tinsley */}
              <div className="bg-slate-950/90 border border-amber-500/30 rounded-xl p-3 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-mono font-black uppercase text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Correction #2 • Player Name
                  </span>
                  <TeamBadge teamId="anaheim-admirals" size="sm" />
                </div>
                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <span className="text-amber-300">Kirk Tinsley</span>
                    <span className="text-[10px] text-slate-400 font-mono">(Anaheim Admirals PG / 3PT Specialist)</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-snug">
                    <strong className="text-emerald-400">Accurate Status:</strong> Anaheim sharpshooter{' '}
                    <span className="font-bold text-amber-300">Kirk Tinsley</span> was mistakenly referred to on-air as{' '}
                    <span className="text-rose-300 line-through">&quot;Keith&quot;</span> / <span className="text-rose-300 line-through">&quot;Keith Tinsley&quot;</span> (not to be confused with Kirk Barnes of the Sabrewolves).
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-300/80 pt-1">
              <Info size={12} className="shrink-0" />
              <span>The written article below and official CCH roster records reflect the verified official data.</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
