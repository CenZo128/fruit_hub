import React, { useState, useEffect } from 'react';
import Card from './components/Card/Card';
import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';
import axios from 'axios';
import './App.css';

function App() {
  const [names, setNames] = useState([])

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:3000/names"
    }).then(names => {
      setNames(names.data)
    }).catch(err => {

    })
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Banner></Banner>
      <h1>Hello Bro</h1>
      {
        names && names.map(name => {
          // const { boys, girls } = name
          return (
            <Card name={name}></Card>
          )
        })
      }
      {
        names && names.map(name => {
          // const { boys, girls } = name
          return (
            <Card name={name}></Card>
          )
        })
      }

    </div>
  );
}

export default App;
