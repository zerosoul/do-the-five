import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
function App() {
  return (
    <BrowserRouter basename="/do-the-five">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path=":pos" element={<Detail />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
