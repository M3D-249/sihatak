import React from 'react';
import '../App.css';

const LoadingScreen = () => {
  return (
    <div className="screen loading-screen">
      <div className="logo-circle">
        <h1 className="logo-text">صحتك</h1>
      </div>
      <p className="slogan">صحتك أولاً</p>
    </div>
  );
};

export default LoadingScreen;
