import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { SectionOne } from "./pages/SectionOne";
import { SectionTwo } from "./pages/SectionTwo";
import { Home } from "./pages/Home";


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout/>}>
        <Route index element={<SectionOne/>}/>
        <Route path="sectwo" element={<SectionTwo/>}/>
        <Route path="home" element={<Home/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  );
}

export default App
