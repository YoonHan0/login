import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import MainHome from './components/views/home/MainHome';
import Login from './components/views/Login';
import UserList from './components/views/UserList';
import Main from './components/views/Main';

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/userList" element={<UserList />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    </Router>
  );
}

export default App;
