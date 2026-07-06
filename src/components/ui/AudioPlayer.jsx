import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, VolumeX, Volume2, FastForward } from 'lucide-react';
import { formatTime } from '../../utils/formatTimestamps';

export function AudioPlayer({ audioUrl, playbackTime, onTimeUpdate }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);

  // Sync external seek time
  useEffect(() => {
    if (audioRef.current && Math.abs(audioRef.current.currentTime - playbackTime) > 0.5) {
      audioRef.current.currentTime = playbackTime;
      setCurrentTime(playbackTime);
    }
  }, [playbackTime]);

  // Load new audio source
  useEffect(() => {
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);
  }, [audioUrl]);

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(err => console.error("Audio playback failed: ", err));
    }
  };

  const handleRestart = () => {
    if (!audioRef.current) return;
    audioRef.current.currentTime = 0;
    setCurrentTime(0);
    onTimeUpdate(0);
  };

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const time = audioRef.current.currentTime;
    setCurrentTime(time);
    onTimeUpdate(time);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeekBarChange = (e) => {
    if (!audioRef.current) return;
    const seekVal = parseFloat(e.target.value);
    audioRef.current.currentTime = seekVal;
    setCurrentTime(seekVal);
    onTimeUpdate(seekVal);
  };

  const handleVolumeChange = (e) => {
    const volVal = parseFloat(e.target.value);
    setVolume(volVal);
    setIsMuted(volVal === 0);
    if (audioRef.current) {
      audioRef.current.volume = volVal;
      audioRef.current.muted = volVal === 0;
    }
  };

  const handleToggleMute = () => {
    if (!audioRef.current) return;
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    audioRef.current.muted = nextMuted;
  };

  const handlePlaybackRateChange = () => {
    const rates = [1.0, 1.25, 1.5, 2.0];
    const nextIdx = (rates.indexOf(playbackRate) + 1) % rates.length;
    const nextRate = rates[nextIdx];
    setPlaybackRate(nextRate);
    if (audioRef.current) {
      audioRef.current.playbackRate = nextRate;
    }
  };

  if (!audioUrl) return null;

  return (
    <div className="w-full bg-bg-card border border-slate-800 rounded-xl p-4 md:p-6 shadow-lg flex flex-col gap-4">
      {/* Invisible HTML5 Audio instance */}
      <audio
        ref={audioRef}
        src={audioUrl}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={() => setIsPlaying(false)}
      />

      {/* Progress & Seekbar Container (Strict CLS protection with aspect-ratio mock-ups if needed, but flexbox with heights is used here) */}
      <div className="w-full flex items-center gap-3">
        <span className="text-xs font-mono text-text-muted select-none w-12 text-left">
          {formatTime(currentTime)}
        </span>
        
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={currentTime}
          onChange={handleSeekBarChange}
          className="flex-1 h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none focus:ring-1 focus:ring-accent"
          aria-label="Seek playback position"
        />
        
        <span className="text-xs font-mono text-text-muted select-none w-12 text-right">
          {formatTime(duration)}
        </span>
      </div>

      {/* Control Buttons Panel */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Playback Control Cluster */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-accent hover:bg-accent-hover text-slate-50 flex items-center justify-center transition-colors duration-200 shadow-md"
            aria-label={isPlaying ? "Pause audio playback" : "Start audio playback"}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 fill-slate-50" />
            ) : (
              <Play className="w-4 h-4 fill-slate-50 ml-0.5" />
            )}
          </button>
          
          <button
            onClick={handleRestart}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-text-primary transition-colors duration-200"
            aria-label="Restart audio from beginning"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          
          <button
            onClick={handlePlaybackRateChange}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-text-primary transition-colors duration-200"
            aria-label={`Change playback speed. Current speed is ${playbackRate}x`}
          >
            <FastForward className="w-3.5 h-3.5" />
            <span>{playbackRate}x</span>
          </button>
        </div>

        {/* Volume & Extras Panel */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleMute}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-text-primary transition-colors duration-200"
            aria-label={isMuted ? "Unmute audio volume" : "Mute audio volume"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-danger" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <input
            type="range"
            min={0}
            max={1}
            step={0.05}
            value={isMuted ? 0 : volume}
            onChange={handleVolumeChange}
            className="w-20 md:w-24 h-1 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-accent focus:outline-none"
            aria-label="Adjust audio volume"
          />
        </div>
      </div>
    </div>
  );
}
