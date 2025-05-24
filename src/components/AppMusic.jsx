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
    audio.play();

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const handleToggleControls = () => {
    setShowControls((prev) => !prev);
  };

  const getIcon = () => {
    if (volume === 0 || !isPlaying) {
      return <FaVolumeMute className="text-xl" />;
    }
    return <FaVolumeUp className="text-xl" />;
  };

  return (
    <div className="absolute top-4 right-4 z-50 flex flex-col items-center gap-2">
      {/* volume button */}
      <button
        onClick={handleToggleControls}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md shadow-md flex items-center justify-center text-white hover:scale-105 transition duration-200"
      >
        {getIcon()}
      </button>
      {/* volume controller */}
      {showControls && (
        <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-xl shadow-lg">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-28 accent-pink-400"
          />
        </div>
      )}
    </div>
  );
};

export default AppMusic;
