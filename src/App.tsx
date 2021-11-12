import React, { FC, useEffect } from 'react';
import './app.css';
const App: FC = () => {
  useEffect(() => {
      console.log(`vite-react-cil`);
  }, []);

  return (
    <div>
      <h2>Welcome to vite-react-cil11</h2>
    </div>
  );
};

export default App;