import React, { useState, useEffect } from 'react';
import Loader from './Loader'; // Import the Loader component

const WithLoader = (WrappedComponent) => {
  // Create a functional component inside the HOC
  const WithLoaderComponent = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000); // Simulate loading for 2 seconds, replace with actual loading logic

      return () => clearTimeout(timer);
    }, []);

    return loading ? <Loader /> : <WrappedComponent />;
  };

  // Return the functional component
  return WithLoaderComponent;
};

export default WithLoader;
