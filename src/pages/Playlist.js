import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import Popup from 'reactjs-popup'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';


//import styles
import '../components/Playlist/playlist.scss'
import '../components/Playlist/songList.css'
import 'antd/dist/antd.css';

const Playlist = (props) => {
  const [visited, setVisited] = useState(localStorage.getItem('visited'))

  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
  }

  useEffect(() => {
    getPlaylist()
  }, []);

  const markVisited = () => {
    setVisited(true)
    localStorage.setItem('visited', true)
  }

  // if (localStorage.getItem('visited')) setVisited(true)

  return (
    <>
      { !visited ?
        <Popup open={!visited} closeOnDocumentClick onClose={markVisited}>
          <div className="modal tutorial">
            <p><span className='vote-ify'>Welcome to Vote-ify!</span></p>
            <p>Here, we're all about playlists that are curated by you, the community.</p>
            <p>To start, use the 'Suggest a song' search bar at the top of each playlist to find songs on Spotify and suggest them.</p>
            <p>Note: we have a small bug where the Spotify token will timeout and the search bar will stop working. If that happens, click the <span className='refresh'>Refresh Spotify</span> link in nav bar.</p>
            <p>Suggested songs will show up in the 'Vote Songs In!' sidebar on the right where other members of the community can like them.</p>
            <p>Once a song reaches the required number of hearts, it will officially be added to the playlist proper.</p>
            <p> To listen to tracks, just click them and they will be loaded into the player at the bottom of the screen. <span className='highlight'> Sorry, we don 't have autoplay working just yet</span>, so you'
            ll have to manually hit play. </p>
            <button onClick={markVisited}>Thanks. Got it.</button>
          </div>
        </Popup>
        :
        ''
      }
      <PlaylistContainer updatePlayer={props.updatePlayer} match={props.match} username={props.username} spotifyId={props.spotifyId} admin={props.admin} accessToken={props.accessToken} playlist={playlist} getPlaylist={getPlaylist} />
    </>
  );   

}

export default Playlist;