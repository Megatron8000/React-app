import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Music from './components/Music/Music';
import { Route, BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';


const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile'
            render={() => <Profile
              postData={props.state.profilePage.postData}
              newPostText={props.state.profilePage.newPostText}
              dispatch={props.dispatch} />} />
          <Route path='/dialogs' render={() => <DialogsContainer
             dispatch = {props.dispatch}
             dialogsData={props.state.dialogsPage.dialogsData}
             messagesData={props.state.dialogsPage.messagesData}
          />} />
          <Route path='/news' render={() => <News />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/settings' render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
