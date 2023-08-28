import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { routes } from "./common/constants";
import RegistroEspecialista from "./pages/especialistas/registro/RegistroEspecialista";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" Component={Home} />
        {routes.map((route) => (
          <Route path={route.path} Component={route.component} />
        ))}
        <Route path="/provider/register" Component={RegistroEspecialista} />
        <Route path="*" Component={Home} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
