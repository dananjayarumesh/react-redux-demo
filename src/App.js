import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import PropContainer from './components/PropContainer'
import CakeContainer from './components/CakeContainer'
import HooksCakeContainer from './components/HooksCakeContainer'
import IceCreamContainer from './components/IceCreamContainer'
import NewCakeContainer from './components/NewCakeContainer'
import UserContainer from './components/UserContainer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <hr />
        <PropContainer customProp='testProp'/>
        <hr />
        <CakeContainer />
        <hr />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer />
        <hr />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
