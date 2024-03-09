import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";

const Layout = lazy(() => import("./Components/Layout/Layout"));
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
          </Route>
          <Route path="/movies" element={<Layout />}>
            <Route index element={<h2>hello react</h2>} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
