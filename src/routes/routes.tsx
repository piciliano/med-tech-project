import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginArea } from "../pages/login";
import { Home } from "../pages/home";
import { Template } from "../template";

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template/>}>
          <Route path="/" element={<Home />} />
          <Route path="loginarea" element={<LoginArea />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
