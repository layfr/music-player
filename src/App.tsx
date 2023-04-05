import React, { useEffect, useState, useRef } from 'react';
import AudioControls from './Сomponents/AudioControls';

import tracksData from './assets/data.json';
import trackImg from './assets/photo.avif';

import './App.css';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [tracks, setTracks] = useState([]);
  const [index, setIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch('https://642c3045d7081590f934965f.mockapi.io/tracks')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setTracks(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error loading data:', error);
  //     });
  //   setIsLoading(false);
  // }, []);

  const { title, artist, color, image, audioSrc } = tracksData[index];

  const audioRef = useRef<HTMLAudioElement>(new Audio(audioSrc));

  const { duration } = audioRef.current;
  console.log(audioRef.current);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
    setIsPlaying(true);
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setIsPlaying(false);
  };

  const prevTrack = () => {
    if (index !== 0) {
      setIndex((prev) => prev - 1);
    }
    setIndex(tracksData.length - 1);
  };

  const nextTrack = () => {
    if (index !== tracksData.length - 1) {
      setIndex((prev) => prev + 1);
    }
    setIndex(0);
  };

  console.log(index);

  return (
    <div className='App'>
      <h1 className='App-logo'>Music player</h1>
      <div className='music-player'>
        <div className='audio-container'>
          <img className='track-img' src={trackImg} alt='img'></img>
          <div className='audio-info'>
            <h2>{title}</h2>
            <p>{artist}</p>
          </div>
          <AudioControls
            pause={pause}
            play={play}
            isPlaying={isPlaying}
            sefIsPlaying={setIsPlaying}
            prev={prevTrack}
            next={nextTrack}
          />
        </div>
        <audio ref={audioRef} className='audio' src={audioSrc}></audio>
      </div>
    </div>
  );
}

export default App;
