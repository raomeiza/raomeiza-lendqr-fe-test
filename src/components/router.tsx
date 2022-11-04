import { AuthProvider, RequireAuth } from "../contexts/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "../pages/welcom";
import Base from "../pages";
import NotFound from "../pages/404";

export default function AllRoutes() {
  return (
    <AuthProvider>
    <BrowserRouter basename="/lendsqr">
    <Routes>
      <Route path="/" element={<Welcome />} />
      {/* @ts-ignore */}
      <Route path='/users/*' element={<RequireAuth><Base /></RequireAuth>} />
      {/* 404 page */}
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    </AuthProvider>
  )
}