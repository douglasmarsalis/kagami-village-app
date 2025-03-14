import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
//import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { Navbar, Footer } from './components/layout';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
// import Fishing from './pages/Fishing';
// import Camping from './pages/Camping';
// import RioOnsen from './pages/RioOnsen';
import NotFound from './pages/NotFound';

function App() {
  const [isAuth, setIsAuth] = useState(false); // Checks for user login or not, set to false by default

  return (
    <Router>
      <Navbar isAuth={isAuth} setIsAuth={setIsAuth}/>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
          {/* <Route path="/fishing" element={<Fishing />} />
          <Route path="/camping" element={<Camping />} />
          <Route path="/onsen" element={<RioOnsen />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);