import { ReactComponent as Logo } from '../assets/images/logo_currentColor.svg';
import sunIcon from '../assets/images/icon-sun.svg';
import moonIcon from '../assets/images/icon-moon.svg';

function Navbar({ darkMode, setDarkMode }) {
  const toggleMode = () => setDarkMode(!darkMode);

  return (
    <nav className="flex items-center justify-between px-4 py-2 shadow-md rounded-2xl dark:bg-neutral-800 bg-neutral-0">
      <Logo className="text-neutral-900 dark:text-white" />
      <button onClick={toggleMode} aria-label="Toggle light/dark mode" className="p-4 rounded-lg dark:bg-neutral-700 bg-neutral-100">
        {darkMode ? (
          <img src={sunIcon} alt="light-mode" className="w-8 h-8" />
        ) : (
          <img src={moonIcon} alt="dark-mode" />
        )}
      </button>
    </nav>
  );
}

export default Navbar;
