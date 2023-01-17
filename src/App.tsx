import { ReactComponent as ReactLogo } from '@assets/react.svg';
import './App.css';

function App() {
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
