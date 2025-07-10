import SignUpScreen from './components/SignUpScreen';
import LoadingScreen from './components/LoadingScreen';
import './App.css';

import React, { useEffect, useState } from 'react'

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])

  return (
    <>
      {(typeof backendData.msg === 'undefined') ? (
        <LoadingScreen />
      ): (
        <p>{backendData.msg}</p>,
        <SignUpScreen />
      )}

    </>
  );
}

export default App;
