import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Button, Columns } from 'react-bulma-components';
import Music from './music';
import RecentlyHeardsService from '../../services/recently_heards';
import styled from 'styled-components';

const PlaySequenceButton = styled(Button)`
 margin-bottom: 30px;
`

const Musics = (props) => {
  const [songs, setSongs] = useState([]);
  const [playing, setPlaying] = useState([]);
  const [playRandom, setPlayRandom] = useState(false);
  const AudioRef = useRef();

  useEffect(() => {
    setSongs(props.songs.map((song, key) =>
      <Music
        song={song}
        playing={playing.id == song.id}
        setPlaying={setPlaying}
        key={key}
        artist_name={props.artist_name}
      />
    ));
  
  }, [props.songs, playing]);

  useEffect(() => {
    if (AudioRef.current !== null) {
      AudioRef.current.pause();
      AudioRef.current.load();
      if(playing.id) {
        AudioRef.current.play();
        RecentlyHeardsService.create(playing.album_id)
      }
    }
  }, [playing]);

  const NextSong = () => {
    if(playRandom) {
      let index = Math.floor(Math.random() * props.songs.length);
      setPlaying(props.songs[index]);
    } else
      setPlaying([]);
  }

  const SwitchRandom = () => {
    if(playRandom) {
      setPlayRandom(false);
      setPlaying([]);
    } else
      setPlayRandom(true);
  }

  useEffect(() => {
    if(playRandom)
      NextSong();
  }, [playRandom]);

  return (
    <Fragment>
      <Columns className='is-mobile is-centered'>
        <Columns.Column desktop={{size: 2}} mobile={{size: 12}} className='has-text-centered'>
          <PlaySequenceButton
            className='is-medium'
            color='primary'
            outlined
            onClick={() => SwitchRandom()}
          >
            {playRandom == true ? 'Parar de tocar' : 'Tocar aleatoriamente'}
          </PlaySequenceButton>

          <audio controls ref={AudioRef} onEnded={() => NextSong()} className='is-hidden'>
            <source src={playing.file_url} />
          </audio>
        </Columns.Column>
      </Columns>

    {songs}

    </Fragment>
  );
}
export default Musics;