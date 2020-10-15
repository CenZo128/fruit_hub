import React, { useState, useEffect } from 'react';
import Banner from './components/Banner/Banner';
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
      <h1>Hello Bro</h1>
      {
        names && names.map(name => {
          const { boys, girls } = name
          return (
            <Banner names={{ girls, boys }} ></Banner>
          )
        })
      }

    </div>
  );
}

export default App;
