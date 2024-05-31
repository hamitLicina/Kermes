import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from './page/Login/Login';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" component={<Login />} />
          {/* Diğer rotalar */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
