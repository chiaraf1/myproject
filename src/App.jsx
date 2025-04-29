import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './pages/Home';
import Desfiles from './pages/Desfiles';
import Modelospage from './pages/Modelospage';
import Login from './pages/Login'
import Register from './pages/Register';
import Search from './pages/Search';
import "./App.css"


function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home />} />
        <Route path="/desfiles" element={<Desfiles />} />
        <Route path="/modelos" element={<Modelospage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;