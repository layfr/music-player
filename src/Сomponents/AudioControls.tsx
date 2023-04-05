import React from 'react';
import playIcon from '../assets/play-icon.svg';
import pauseIcon from '../assets/pause-icon.svg';
import nextIcon from '../assets/next-icon.svg';
import prevIcon from '../assets/prev-icon.svg';
import repeatIcon from '../assets/repeat-icon.svg';
import volumeHigh from '../assets/volume-high.svg';
import volumeNone from '../assets/volume-none.svg';

export const AudioControls = (props) => {
  const { isPlaying, play, pause, prevTrack, nextTrack } = props;

  return (
    <div className='control-btns'>
      <button className='prev-btn' onClick={prevTrack}>
        <img src={prevIcon} alt='prev track' />
      </button>

      {isPlaying ? (
        <button className='pause-btn' onClick={pause}>
          <img src={pauseIcon} alt='pause' />
        </button>
      ) : (
        <button className='play-btn' onClick={play}>
          <img src={playIcon} alt='play' />
        </button>
      )}

      <button className='next-btn' onClick={nextTrack}>
        <img src={nextIcon} alt='next track' />
      </button>
    </div>
  );
};

export default AudioControls;
