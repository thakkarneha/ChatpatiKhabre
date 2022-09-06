
import './App.css';
 import React, { useState } from 'react';
 import Navbar from "./component/Navbar";
import News from './component/News';
import {
  BrowserRouter as Router,
Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
 
const  App =() => {
   const pageSize=7;
   const apiKey= process.env.REACT_APP_NEWS_API;
 const [progress, setProgress]= useState(0)
  
     return (
      <Router>
       <div>
         <Navbar title="CHATPATI KHABRE" />
         
        
         <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
        />
             <Routes>
       <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='general' key='general'/>}>
         
          </Route>
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='sports' key='sports'/>}>
          
          </Route> 
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='business' key='business'/>}>
          
          </Route>
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='entertainment' key='entertainment'/>}>
          
</Route>
  <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='health' key='health'/>}>
          

          </Route>
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='science' key='science'/>}>
          

          </Route>
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} country='in' category='technology' key='technology'/>}>
          

          </Route>
        </Routes>
        </div>
    </Router>
     )
   }
 
   export default App;
 
