import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/home/Home';
import Post from "./pages/post/Post"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"
import AdminDash from "./pages/AdminDash";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import Modelos from "./pages/modelos/Modelos";
import Desfiles from "./pages/desfiles/Desfiles"
import { esAdmin } from "./utils/auth";
import { Navigate } from "react-router-dom";


function App () {
  return (
    <BrowserRouter>
      <Navbar />
      {/* CONTENEDOR GENERAL CENTRADO */}
      <div className="max-w-7xl mx-auto px-6 py-10">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/admin" element={esAdmin() ? <AdminDash /> : <Navigate to="/" />} />
        <Route path="/edit/:id" element={esAdmin() ? <EditPost /> : <Navigate to="/" />} />
        <Route path="/create" element={esAdmin() ? <CreatePost /> : <Navigate to={"/"} />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/desfiles" element={<Desfiles />} />
      </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App;