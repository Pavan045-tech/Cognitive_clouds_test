import logo from './logo.svg';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import User from './Components/User';
import Admin from './Components/Admin';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path="/I'm%20admin" element={<Admin/>}></Route>
        <Route path="/I'm%20a%20User" element={<User/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
