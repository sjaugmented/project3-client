import React, { useState, useEffect } from 'react';
//import model
import PlaylistModel from '../models/playlist'
import SpotifyModel from '../models/spotify'

//import components
import PlaylistContainer from '../components/Playlist/PlaylistContainer';


//import styles
import '../components/Playlist/playlist.css'
import 'antd/dist/antd.css';


const Playlist = (props) => {
  //call fetch request to show the single playlist
  const [playlist, setPlaylist] = useState()
  
  const getPlaylist = async () => {
    const result = await PlaylistModel.show(props.match.params.id)
    setPlaylist({playlist: result.playlist})
  }

  //spotify api get request - test
  const [spotPlaylist, setSpotPlaylist] = useState()
  const spotifyPlaylist = async () => {
    // console.log(props.token)
    const showPlaylist = await SpotifyModel.playlist(props.token)
    // console.log(showPlaylist)
    setSpotPlaylist({spotPlaylist: showPlaylist})
  }

  useEffect(() => {
    getPlaylist()
    // spotifyPlaylist()
  }, []);

  return (
    <PlaylistContainer token={props.token} playlist={playlist}/>
  );
      
    
}

export default Playlist;


