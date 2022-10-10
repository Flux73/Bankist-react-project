import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';
import Home from './pages/Home';
import Mesh from './components/Mesh';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      <Mesh />
    </>
  );
};

export default App;
