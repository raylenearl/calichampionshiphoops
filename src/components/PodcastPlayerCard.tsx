import React, { useState, useRef, useEffect } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Radio,
  Headphones,
} from 'lucide-react';
import { PodcastInfo } from '../data/newsData';

interface PodcastPlayerCardProps {
  audioUrl?: string;
  podcastInfo?: PodcastInfo;
  title?: string;
  subtitle?: string;
  compact?: boolean;
}

const DEFAULT_AUDIO_URL = 'https://dn601201.us.archive.org/0/items/cchoops2k/Cali_Hoops_Season_4_Coaching_Shakeups.m4a';

export const PodcastPlayerCard: React.FC<PodcastPlayerCardProps> = ({
  audioUrl,
  podcastInfo,
  title = 'Season 4 Coaching Shakeups & Sideline Carousel Special',
  compact = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeSrc = audioUrl || DEFAULT_AUDIO_URL;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handleDurationChange = () => {
      if (audio.duration && !isNaN(audio.duration)) {
        setDuration(audio.duration);
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('durationchange', handleDurationChange);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('durationchange', handleDurationChange);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [activeSrc]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Playback triggered error:', err);
        // Fallback retry
        audio.load();
        audio.play().catch((e) => console.error('Audio play error:', e));
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

  const formatTime = (secs: number) => {
    if (isNaN(secs) || secs === 0) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
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
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Radio size={14} className={isPlaying ? 'animate-pulse' : ''} />
            </div>
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                Attached Podcast Audio
              </span>
              <h4 className="text-xs font-bold text-white leading-tight">
                {podcastInfo?.episodeTitle || title}
              </h4>
            </div>
          </div>
          <span className="text-[10px] font-mono text-slate-400">
            {formatTime(currentTime)} / {formatTime(duration || 1190)}
          </span>
        </div>

        {/* Scrubber */}
        <input
          type="range"
          min={0}
          max={duration || 1190}
          step={0.5}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
        />

        {/* Controls - Single Play Button */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => jump(-15)}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 text-xs transition-colors cursor-pointer"
              title="Rewind 15s"
            >
              <RotateCcw size={13} />
            </button>

            {/* SINGLE PLAYBACK BUTTON */}
            <button
              onClick={togglePlay}
              className="px-4 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-1.5 shadow-md shadow-amber-500/20 text-xs transition-transform active:scale-95 cursor-pointer"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} className="fill-current" />}
              <span>{isPlaying ? 'Pause' : 'Play Podcast'}</span>
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
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
            <Radio size={16} className={isPlaying ? 'animate-pulse' : ''} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400 block">
              Official Podcast Broadcast
            </span>
            <h3 className="text-sm sm:text-base font-black text-white leading-snug">
              {podcastInfo?.episodeTitle || title}
            </h3>
          </div>
        </div>
        <span className="bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800 text-amber-300 font-mono text-[11px] font-bold flex items-center gap-1.5">
          <Headphones size={12} className="text-amber-400" />
          {podcastInfo?.duration || 'Season 4 Coaching Special'}
        </span>
      </div>

      {/* Scrubber & Time */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 font-bold">
          <span className="text-amber-400">{formatTime(currentTime)}</span>
          <span>{formatTime(duration || 1190)}</span>
        </div>
        <input
          type="range"
          min={0}
          max={duration || 1190}
          step={0.5}
          value={currentTime}
          onChange={handleSeek}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500 focus:outline-none"
        />
      </div>

      {/* Playback Controls - EXACTLY ONE PLAY BUTTON */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => jump(-15)}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-amber-400 border border-slate-800 transition-all cursor-pointer"
            title="Rewind 15 seconds"
          >
            <RotateCcw size={15} />
          </button>

          {/* SINGLE PLAY BUTTON */}
          <button
            onClick={togglePlay}
            className="px-5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black flex items-center gap-2 shadow-lg shadow-amber-500/20 transition-all active:scale-95 cursor-pointer"
          >
            {isPlaying ? <Pause size={16} /> : <Play size={16} className="fill-current" />}
            <span className="text-xs uppercase tracking-wider">
              {isPlaying ? 'Pause Podcast' : 'Play Podcast'}
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
        </div>
      </div>
    </div>
  );
};
