import React from 'react'
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <div className="App">
       {/* <h1>This is airbnb ethiopia 🚀</h1> */}

           <Router>

            <Header />
              <Routes>
                 <Route path="/search" element={<SearchPage/>} />
                 <Route path="/" element={<Home/>} />
               </Routes>

           <Footer />

           </Router>
        
       
    </div>
  );
}

export default App;
