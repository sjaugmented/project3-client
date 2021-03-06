import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Playlist from '../pages/Playlist';
import Profile from '../pages/Profile';
import Redirect from '../pages/Redirect'

const Routes = (props) => {
	return (
		<Switch>
			<Route exact path='/' render={(propsRouter) => 
				<Home {...propsRouter} 
				playlists={props.playlists}/>} 
				/> 
			<Route exact path='/playlist/:id' render={(propsRouter) => 
				<Playlist {...propsRouter} 
				playlists={props.playlists} 
				updatePlayer={props.updatePlayer}
				username={props.username} 
				spotifyId={props.spotifyId}
				accessToken={props.accessToken} 
				admin={props.admin}
				posts={props.posts}
				/>}
				/>
			<Route exact path='/users/:spotId' render={(propsRouter) =>
				<Profile {...propsRouter} admin={props.admin} username={props.username} updatePlayer={props.updatePlayer} />} 
				/>
			<Route exact path='/redirect' render={(propsRouter) => <Redirect {...propsRouter}/>} />
		</Switch>
	)
}

export default Routes