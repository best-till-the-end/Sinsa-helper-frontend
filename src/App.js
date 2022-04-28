import Main from './components/Main';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import KakaoAuthTokenHandler from './components/user/KakaoAuthTokenHandler';
import Search from './components/search/Search';
import SearchResult from './components/search/SearchResult';
import AdminProducts from './components/search/AdminProducts';
import MyPage from './components/MyPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/auth/kakao/login" element={<KakaoAuthTokenHandler />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Search/SearchResult" element={<SearchResult />}></Route>
        <Route path="/adminProduct" element={<AdminProducts />}></Route>
        <Route path="/myPage" element={<MyPage />}></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
