import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import <AuthStore>  from 
// import registerServiceWorker from './registerServiceWorker';

import React, { useEffect, useState } from 'react';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <p>Data:</p>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default MyComponent;

