import { ReactComponent as ReactLogo } from '@assets/react.svg';
import './App.css';
import Worker from './worker.js?worker';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const worker = new Worker();
    const listener = (e: MessageEvent) => {
      console.log(e);
    };
    worker.addEventListener('message', listener);

    return () => {
      worker.removeEventListener('message', listener);
    };
  }, []);

  return (
    <div>
      <header className="App-header">
        <ReactLogo className="w-20" />
        <p className="bg-red-400 text-center">Hello Vite + React!</p>
      </header>
    </div>
  );
}

export default App;
