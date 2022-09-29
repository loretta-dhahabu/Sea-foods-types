// import Router from 'json-server/lib/server/router';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'; 
import Home from './components/Home';
import About from './components/About';
import Header from './components/Header';
import FoodsList from './components/FoodsList';
import SingleMeal from './components/SingleMeal';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={ <Home /> }></Route>
          <Route exact path="/about" element={ <About /> } ></Route>
          <Route exact path="/meals" element={ <FoodsList /> } ></Route>
          <Route exact path="/meals/:id" element={ <SingleMeal /> } ></Route>
          {/* <Route exact path="/meals/:id/edit" element="<Home/>" /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
