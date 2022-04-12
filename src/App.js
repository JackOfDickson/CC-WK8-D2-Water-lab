import { useState } from 'react';
import MainPage from './pages/MainPage';
import { useDarkLightMode } from './hooks/darkLightModeHooks';

function App() {

  let darkLightMode = useDarkLightMode();

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   darkLightModeToggle.setIsDarkMode(!darkLightModeToggle.isDarkMode);
  // }

  return (
    <div className={darkLightMode.isDarkMode ? "dark" : "light"}>
      <button onClick={darkLightMode.toggleDarkMode}>Dark/Light</button>
      <MainPage />
    </div>
  );
}

export default App;
