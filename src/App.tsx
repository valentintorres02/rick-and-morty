import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Spin } from "antd";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./routes/Home.route"));
const Character = lazy(() => import("./routes/Character.route"));
const NotFound = lazy(() => import("./routes/NotFound.route"));

export default function App() {
  return (
    <Suspense fallback={<Spin />}>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/character/:characterId" element={<Character />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
