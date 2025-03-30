import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import LoginTeste from "./pages/LoginTeste";
import RegisterTeste from "./pages/RegisterTeste";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedRoute";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/auth/register   " replace />} />
        <Route path="/auth/register" element={<RegisterTeste />}></Route>
        <Route path="/auth/login" element={<LoginTeste />}></Route>
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
