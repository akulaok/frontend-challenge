import {
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import {AppRoute} from "./consts";
import CatsPage from "./pages/CatsPage";

function App() {
  return (
    <BrowserRouter basename="/frontend-challenge">
      <Routes>
        <Route path={AppRoute.Cats} element={<CatsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
