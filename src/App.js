import './App.css';
import React from 'react';
import Header from './component/header/header';
import Head from './component/header/head';
import Page from './component/page/page';
import EndPage from './component/page/endpage';

function App() {
  return (
    <div className="App">

    <Head/>
    <Header/>
    <Page/>
    <EndPage/>

     
    </div>
  );
}

export default App;
