import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import routes from './config/routes'
import UserModel from './models/user'
import HeadContainer from './components/Header/HeadContainer'
import Player from './components/Player'

import { Layout } from 'antd';
import 'antd/dist/antd.css';
import './components/Header/header.css'

const { Header, Footer, Sider, Content } = Layout;

function App(props) {
  // current Playlist
  const [playlist, setPlaylist] = useState([
      {
        user: 'Seth',
        title: 'Piano Man',
        artist: 'Billy Joel'
      }, {
        user: 'Evan',
        title: 'Secret Garden',
        artist: 'Bruce Springsteen'
      }, {
        user: 'Larry',
        title: 'Party in the USA',
        artist: 'Miley Cyrus'
      }
  ])

  // user state
  const [currentUser, setCurrentUser] = useState(localStorage.getItem('uid'))

  const storeUser = userId => {
    setCurrentUser({ currentUser: userId })
    localStorage.setItem('uid', userId)
  }

  const logout = (event) => {
    event.preventDefault()

    localStorage.removeItem('uid')
    UserModel.logout()
      .then(res => {
        console.log(res)
        setCurrentUser(null)
        props.history.push('/login')
      })
  }

  return (
    <div className="App">
      <Layout>
        <Header>
          <HeadContainer 
            currentUser={currentUser}
            logout={logout}
          />
        </Header>
        <Content>
          {routes}
        </Content>
        <Footer>
          <Player
            playlist={playlist}
          />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
