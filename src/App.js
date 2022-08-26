import React from 'react';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home.js';

function App() {
  return (
    <>
    	<Router>
        	<Navbar />
        		<Routes>
    				  <Route path='/' exact element={<Home />} />
        		</Routes>
      	</Router>
    </>
  );
}

export default App;