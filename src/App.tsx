
import './App.css';
import { ReactElement } from 'react';
import React from 'react';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Content from './components/Content/content';

const App = (): ReactElement => {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
  );
}

export default App;
