import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Post from "./pages/Post"
import Register from "./pages/Register";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil"
import AdminDash from "./pages/AdminDash";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost";
import Modelos from "./pages/Modelos";
import Desfiles from "./pages/Desfiles"


function App () {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/admin" element={<AdminDash />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/modelos" element={<Modelos />} />
        <Route path="/desfiles" element={<Desfiles />} />
      </Routes>
      </BrowserRouter>
  )
}

export default App;