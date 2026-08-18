import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Radio,
  Headphones,
  Download,
  ExternalLink,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';
import { PodcastInfo } from '../data/newsData';

interface PodcastPlayerCardProps {
  audioUrl?: string;
  podcastInfo?: PodcastInfo;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const DEFAULT_AUDIO_URL = 'https://archive.org/download/cchoops2k/Cali_Hoops_Season_4_Coaching_Shakeups.m4a';

export const PodcastPlayerCard: React.FC<PodcastPlayerCardProps> = ({
  audioUrl,
  podcastInfo,
  title = 'Season 4 Coaching Shakeups & Sideline Carousel Special',
  subtitle,
  compact = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Normalized primary audio source URL
  const primaryUrl = audioUrl || DEFAULT_AUDIO_URL;

  // Alternate direct URL fallback if CDN mirror is blocked
  const alternateUrl = React.useMemo(() => {
    if (primaryUrl.includes('dn601201.us.archive.org/0/items/')) {
      return primaryUrl.replace('dn601201.us.archive.org/0/items/', 'archive.org/download/');
    }
    if (primaryUrl.includes('archive.org/download/')) {
      return primaryUrl.replace('archive.org/download/', 'dn601201.us.archive.org/0/items/');
    }
    return primaryUrl;
  }, [primaryUrl]);

  const [activeSrc, setActiveSrc] = useState(primaryUrl);

  useEffect(() => {
    setActiveSrc(primaryUrl);
    setHasError(false);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [primaryUrl]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
        setHasError(false);
      }
    };

    const handleCanPlay = () => {
      setIsLoading(false);
      if (audio.duration && !isNaN(audio.duration) && isFinite(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleWaiting = () => {
      setIsLoading(true);
    };

    const handlePlaying = () => {
      setIsPlaying(true);
      setIsLoading(false);
      setHasError(false);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    const handleError = () => {
      setIsLoading(false);
      // Try switching to alternate mirror once if not already using it
      if (activeSrc !== alternateUrl) {
        setActiveSrc(alternateUrl);
      } else {
        setHasError(true);
        setIsPlaying(false);
      }
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('waiting', handleWaiting);
    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('waiting', handleWaiting);
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [activeSrc, alternateUrl]);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      setIsLoading(true);
      setHasError(false);
      try {
        await audio.play();
        setIsPlaying(true);
        setIsLoading(false);
      } catch {
        // If initial play fails on primary, switch mirror and retry
        if (activeSrc !== alternateUrl) {
          setActiveSrc(alternateUrl);
          setTimeout(async () => {
            if (audioRef.current) {
              try {
                await audioRef.current.play();
                setIsPlaying(true);
              } catch {
                setHasError(true);
              } finally {
                setIsLoading(false);
              }
            }
          }, 300);
        } else {
          setIsLoading(false);
          setHasError(true);
        }
      }
    }
  }, [isPlaying, activeSrc, alternateUrl]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  const jump = (seconds: number) => {
    if (!audioRef.current) return;
    const maxTime = duration || 1000;
    const nextTime = Math.max(0, Math.min(maxTime, currentTime + seconds));
    setCurrentTime(nextTime);
    audioRef.current.currentTime = nextTime;
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

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0 || !isFinite(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const retryPlayback = () => {
    setHasError(false);
    setActiveSrc(activeSrc === primaryUrl ? alternateUrl : primaryUrl);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.load();
        togglePlay();
      }
    }, 200);
  };

  if (compact) {
    return (
      <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-4 space-y-3 shadow-lg text-left">
        <audio
          ref={audioRef}
          src={activeSrc}
          preload="metadata"
          playsInline
        />

        <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-2">
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Radio size={14} className={isPlaying ? 'animate-pulse' : ''} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block truncate">
                Attached Podcast Audio
              </span>
              <h4 className="text-xs font-bold text-white leading-tight truncate">
                {podcastInfo?.episodeTitle || title}
              </h4>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 shrink-0">
            {formatTime(currentTime)} / {duration > 0 ? formatTime(duration) : '--:--'}
          </span>
        </div>

        {/* Scrubber */}
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.5}
          value={currentTime}
          onChange={handleSeek}
          disabled={duration === 0 && !isPlaying}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
        />

        {/* Error notification if audio blocked */}
        {hasError && (
          <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-amber-950/60 border border-amber-500/40 text-[11px] text-amber-300">
            <div className="flex items-center gap-1.5 truncate">
              <AlertCircle size={13} className="shrink-0 text-amber-400" />
              <span className="truncate">Audio streaming reconnecting...</span>
            </div>
            <button
              onClick={retryPlayback}
              className="px-2 py-0.5 rounded bg-amber-500 text-slate-950 font-bold text-[10px] hover:bg-amber-400 cursor-pointer shrink-0 flex items-center gap-1"
            >
              <RefreshCw size={10} /> Retry
            </button>
          </div>
        )}

        {/* Controls */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => jump(-15)}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs transition-colors cursor-pointer"
              title="Rewind 15s"
            >
              <RotateCcw size={13} />
            </button>

            <button
              onClick={togglePlay}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 text-xs transition-transform active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              <span>{isLoading ? 'Loading...' : isPlaying ? 'Pause' : 'Play Podcast'}</span>
            </button>

            <button
              onClick={() => jump(15)}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs transition-colors cursor-pointer"
              title="Forward 15s"
            >
              <RotateCw size={13} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={cyclePlaybackRate}
              className="px-2 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 text-[10px] font-mono font-bold text-amber-300 transition-colors cursor-pointer"
            >
              {playbackRate}x
            </button>
            <button
              onClick={toggleMute}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
            <a
              href={activeSrc}
              target="_blank"
              rel="noopener noreferrer"
              download
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors cursor-pointer"
              title="Download or Stream Directly (.m4a)"
            >
              <Download size={13} />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-950/90 border border-amber-500/30 rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl text-left">
      <audio
        ref={audioRef}
        src={activeSrc}
        preload="metadata"
        playsInline
      />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Radio size={16} className={isPlaying ? 'animate-pulse' : ''} />
          </div>
          <div className="min-w-0">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block truncate">
              Official Podcast Broadcast
            </span>
            <h3 className="text-sm sm:text-base font-black text-white leading-snug truncate">
              {podcastInfo?.episodeTitle || title}
            </h3>
            {subtitle && (
              <p className="text-xs text-slate-400 font-normal mt-0.5 line-clamp-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
            <Headphones size={12} className="text-amber-400" />
            {podcastInfo?.duration || 'CCH Audio Broadcast'}
          </span>
          <a
            href={activeSrc}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-300 border border-slate-800 font-mono text-[11px] font-bold flex items-center gap-1.5 transition-colors"
            title="Download Audio (.m4a)"
          >
            <Download size={12} />
            <span className="hidden sm:inline">Download</span>
          </a>
        </div>
      </div>

      {/* Description */}
      {podcastInfo?.description && (
        <p className="text-xs text-slate-300 leading-relaxed font-normal bg-slate-900/50 p-2.5 rounded-xl border border-slate-800/60">
          {podcastInfo.description}
        </p>
      )}

      {/* Error notification if direct streaming fails */}
      {hasError && (
        <div className="flex items-center justify-between gap-3 p-3 rounded-xl bg-amber-950/60 border border-amber-500/40 text-xs text-amber-200">
          <div className="flex items-center gap-2">
            <AlertCircle size={15} className="text-amber-400 shrink-0" />
            <span>Streaming connection interrupted. Retry audio or open direct stream.</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={retryPlayback}
              className="px-2.5 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw size={12} /> Retry
            </button>
            <a
              href={activeSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 text-xs flex items-center gap-1 cursor-pointer"
            >
              <ExternalLink size={12} /> Open
            </a>
          </div>
        </div>
      )}

      {/* Scrubber & Time */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold">
          <span className="text-amber-400">{formatTime(currentTime)}</span>
          <span>{duration > 0 ? formatTime(duration) : '--:--'}</span>
        </div>
        <input
          type="range"
          min={0}
          max={duration || 100}
          step={0.5}
          value={currentTime}
          onChange={handleSeek}
          disabled={duration === 0 && !isPlaying}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
        />
      </div>

      {/* Playback Controls */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => jump(-15)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
            title="Rewind 15 seconds"
          >
            <RotateCcw size={15} />
          </button>

          <button
            onClick={togglePlay}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current" />}
            <span className="text-xs uppercase tracking-wider">
              {isLoading ? 'Loading...' : isPlaying ? 'Pause Podcast' : 'Play Podcast'}
            </span>
          </button>

          <button
            onClick={() => jump(15)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
            title="Forward 15 seconds"
          >
            <RotateCw size={15} />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={cyclePlaybackRate}
            className="px-2.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-xs font-mono font-bold text-amber-300 transition-colors cursor-pointer"
          >
            {playbackRate}x
          </button>
          <button
            onClick={toggleMute}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors cursor-pointer"
          >
            {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
          </button>
          <a
            href={activeSrc}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-amber-400 border border-slate-800 transition-colors cursor-pointer"
            title="Download Audio File (.m4a)"
          >
            <Download size={15} />
          </a>
        </div>
      </div>
    </div>
  );
};
