import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import Loader from "./components/shared/Loader";

const Home = lazy(() => import("./routes/Home.route"));
const Character = lazy(() => import("./routes/Character.route"));
const NotFound = lazy(() => import("./routes/NotFound.route"));

export default function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
