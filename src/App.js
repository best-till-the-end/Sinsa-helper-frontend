import Main from './components/Main';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoAuthTokenHandler from './components/user/KakaoAuthTokenHandler';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/kakaoAuth" element={<KakaoAuthTokenHandler />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
