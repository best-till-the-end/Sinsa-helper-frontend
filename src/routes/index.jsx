import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/navBar';
import GlobalStyle from '../styles/globalStyles';
import KakaoAuthTokenHandler from '../components/user/KakaoAuthTokenHandler';

//after refactoring
import MainPage from '../pages/Main';
import SearchPage from '../pages/Search';
import AdminProductPage from '../pages/AdminProduct';
import MyPage from '../pages/MyPage';
import SearchResultPage from '../pages/SearchResult';

const RootRoute = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth/kakao/login' element={<KakaoAuthTokenHandler />} />
        <Route path='/search' element={<SearchPage />} />
        <Route
          path='/search/result/:main/:sub/:delivery/:size/:quality'
          element={<SearchResultPage />}
        ></Route>
        <Route path='/adminProduct' element={<AdminProductPage />}></Route>
        <Route path='/myPage' element={<MyPage />}></Route>
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default RootRoute;
