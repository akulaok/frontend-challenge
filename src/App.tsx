import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppRoute } from './consts';
import CatsPage from './pages/CatsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={AppRoute.Cats} element={<CatsPage />} />
      </Routes>
    </Router>
  );

}

export default App;
