import Hero from './components/Hero';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        {/* <Route path="/kakaoAuth" element={} /> */}
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
