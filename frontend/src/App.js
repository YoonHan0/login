import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import MainHome from './components/views/home/MainHome';
import Login from './components/views/Login';
import UserList from './components/views/UserList';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userList" element={<UserList />} />
        </Routes>
    </Router>
  );
}

export default App;
