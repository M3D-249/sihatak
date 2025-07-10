import React, { useEffect, useState } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import SignUpScreen from '../components/SignUpScreen';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate real data loading
  useEffect(() => {
    const loadData = async () => {
      try {
        // Simulate API request with timeout
        await new Promise((resolve) => setTimeout(resolve, 2000)); // 2 seconds
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading data:', error);
        setIsLoading(false);
      }
    };

    loadData();
  }, []);

  return isLoading ? <LoadingScreen /> : <SignUpScreen />;
}

export default App;
