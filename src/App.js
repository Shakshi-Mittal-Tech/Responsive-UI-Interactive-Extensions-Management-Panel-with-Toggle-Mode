import './App.css';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Extensions from './components/Extensions';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  return(
      <div className="min-h-screen px-4 py-8 transition-all duration-500 bg-cover md:px-8 lg:px-32 bg-light-gradient dark:bg-dark-gradient">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Extensions />
      </div>
  );
}

export default App;
