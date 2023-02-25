import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Homepg from './Pages/Homepg';
import Chatpg from './Pages/Chatpg';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Homepg /> } />
          <Route path="/chatpg" element={ <Chatpg /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
