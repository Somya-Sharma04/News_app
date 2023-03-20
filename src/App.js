import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  let pageSize = 12;

  let apiKey = process.env.REACT_APP_API_KEY

  const[progress, setProgress] = useState(0);

  const setprogress = (progress)=>{
    setProgress(progress);
  }

  // c = "Somya";
  // <Route path = '/about' element = {<About mode = {Mode}/>}/>

    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <Routes>
            {/* Hello this app is made by {this.c} */}
            <Route path = '/' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="general" country = "in" category = "general"/>}/>
            <Route path = '/Business' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Business" country = "in" category = "Business"/>}/>
            <Route path = '/Entertainment' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Entertainment" country = "in" category = "Entertainment"/>}/>
            <Route path = '/Generalhealth' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Generalhealth" country = "in" category = "Generalhealth"/>}/>
            <Route path = '/Science' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Science" country = "in" category = "Science"/>}/>
            <Route path = '/Sports' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Sports" country = "in" category = "Sports"/>}/>
            <Route path = '/Technology' element = {<News setprogress = {setprogress} apiKey = {apiKey} pageSize = {pageSize} key="Technology" country = "in" category = "Technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }

  export default App



