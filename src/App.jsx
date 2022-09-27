import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Home from './pages/Home';
import { useSelector } from 'react-redux';
import Mesh from './components/Mesh';
import { ReactComponent as Svgg } from './assets/dots.svg';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      <Mesh />
      {/* <Svgg /> */}
    </>
  );
};

export default App;
