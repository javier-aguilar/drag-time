import React from 'react';
import './App.css';
import { GlobalStyle } from './GlobalStyle.js';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import SplashPage from './Components/SplashPage/SplashPage.js';
import EventContainer from './Containers/EventContainer/EventContainer.js'
import CreateEvent from './Containers/CreateEvent/CreateEvent.js';
import MyEvents from './Containers/MyEvents/MyEvents.js';
import EventDetails from './Containers/EventDetails/EventDetails.js';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

`
function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Route exact path='/'component={SplashPage}/>
      <Route path='/home'component={EventContainer}/>
      <Route path='/create-event'component={CreateEvent}/>
      <Route path='/my-events'component={MyEvents}/>
      <Route path='/event-details/:eventID' render={({match}) => {
        const { eventID } = match.params;
        return <EventDetails eventID={eventID} />
      }} />
    </Wrapper>
  );
}

export default App;
