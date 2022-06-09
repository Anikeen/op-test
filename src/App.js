import { Template } from "./components/Template/Template";
import { useState } from 'react';
import { GlobalContext } from './context';
import { MainCarousel } from './components/MainCarousel/MainCarousel';

import './assets/styles/index.scss';

function App() {
  const [isHome, setIsHome] = useState(true);

  return (
    <GlobalContext.Provider value={{ isHome, setIsHome }}>
      <Template>
        <MainCarousel />
      </Template>
    </GlobalContext.Provider>
  );
}

export default App;
