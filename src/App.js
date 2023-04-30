import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
