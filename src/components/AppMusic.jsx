import { useEffect, useRef, useState } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import appMusic from "../audio/appmusic.mp3";

const AppMusic = () => {
  const musicRef = useRef(new Audio(appMusic));
  const [soundPlay, setSoundPlay] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    const music = musicRef.current;
    music.loop = true;
    music.volume = volume;
    music.play();

    return () => {
      music.pause();
    };
  }, []);

  useEffect(() => {
    musicRef.current.volume = volume;
  }, [volume]);

  const toggleMusic = () => {
    const music = musicRef.current;
    if (soundPlay) {
      music.pause();
    } else {
      music.play();
    }
    setSoundPlay(!soundPlay);
  };

  return (
    <div className="absolute top-4 right-4 z-50 group">
      <div className="flex flex-row items-center gap-2 bg-white/10 backdrop-blur-md p-2 rounded-xl shadow-md w-12 hover:w-32 transition-all duration-300 ease-in-out overflow-hidden group-hover:w-32">
        <button
          onClick={toggleMusic}
          className="hover:scale-110 transition-transform duration-200"
        >
          {soundPlay ? (
            <FaVolumeUp className="text-white text-xl" />
          ) : (
            <FaVolumeMute className="text-white text-xl" />
          )}
        </button>

        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full accent-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export default AppMusic;
