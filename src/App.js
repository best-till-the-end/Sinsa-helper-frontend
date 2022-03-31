import Main from './components/Main';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoAuthTokenHandler from './components/user/KakaoAuthTokenHandler';
import Search from './components/search/Search';
import OAuthRedirect from './components/user/OAuthRedirect';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/kakaoAuth" element={<KakaoAuthTokenHandler />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/oauth/redirect" element={<OAuthRedirect />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
