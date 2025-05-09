import Layout from '@components/common/Layout';
import Main from '@pages/Main';
import MovieDetail from '@pages/MovieDetail';
import NotFound from '@pages/NotFound';
import Search from '@pages/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="/details/:id" element={<MovieDetail />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
