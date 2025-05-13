import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './pages/Home';
import Desfilespage from './pages/Desfilespage';
import Modelospage from './pages/Modelospage';
import Login from './pages/Login'
import Register from './pages/Register';
import Search from './pages/Search';
import Perfil from "./pages/Perfil";
import "./App.css";


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/desfiles" element={<Desfilespage />} />
        <Route path="/modelos" element={<Modelospage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/perfil" element={<Perfil />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;