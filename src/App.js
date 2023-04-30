import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Homepage from './pages/HomePage/HomePage';
import TweetsPage from './pages/TweetsPage/TweetsPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// import { AppBar } from './components/AppBar/AppBar';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Homepage />} />
          <Route path="tweets" element={<TweetsPage />} />
          <Route path="*" element={<Homepage />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
