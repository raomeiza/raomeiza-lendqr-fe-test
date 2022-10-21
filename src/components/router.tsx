import { AuthProvider, RequireAuth } from "./contexts/authContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Welcome from "./welcom";
import Base from "./base";
import NotFound from "./404";

export default function AllRoutes() {
  return (
    <AuthProvider>
    <BrowserRouter basename="/">
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