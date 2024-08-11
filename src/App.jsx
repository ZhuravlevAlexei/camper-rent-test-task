import { lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import SharedLayout from "./components/SharedLayout/SharedLayout.jsx";
import { getCampers } from "./redux/campers/operations.js";

// const HomePage = lazy(() => import("./pages/HomePage"));
const CataloguePage = lazy(() => import("./pages/CataloguePage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCampers());
  }, [dispatch]);

  return (
    <SharedLayout>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<CataloguePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
