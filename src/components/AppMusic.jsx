import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import appMusic from "../audio/appmusic.mp3";

const AppMusic = () => {
  const audioRef = useRef(new Audio(appMusic));
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;
    audio.volume = volume;

    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch(() => setIsPlaying(false));

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const toggleControls = () => {
    setShowControls((prev) => !prev);
  };

  const getIcon = () => {
    if (volume === 0 || !isPlaying) {
      return <FaVolumeMute className="text-xl" />;
    }
    return <FaVolumeUp className="text-xl" />;
  };

  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
      {showControls && (
        <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-1 rounded-xl shadow-lg transition-all duration-200">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-28 accent-pink-400 cursor-pointer"
          />
        </div>
      )}

      <button
        onClick={toggleControls}
        className="w-12 h-12 rounded-full cursor-pointer border border-purple-300/60 bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center text-white hover:scale-105 transition duration-200"
      >
        {getIcon()}
      </button>
    </div>
  );
};

export default AppMusic;
