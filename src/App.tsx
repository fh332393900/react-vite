import React, { FC, useEffect } from 'react';
import { Button } from 'antd';
import './App.css';
const App: FC = () => {
  interface Person {
    name: string;
    age: number;
  }
  type K1 = keyof Person;
  let k1: K1 = 'name';
  console.log(typeof k1);
  useEffect(() => {
    console.log(`vite-react-cil`);
  }, []);

  return (
    <div className='home'>
      <h2>Welcome to vite-react-cil11</h2>
      <Button>测试webhook修改22222</Button>
    </div>
  );
};

export default App;
