import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from './page/Layout';
import Train from './page/Train';
import Chat from './page/Chat';
import Admin from './page/Admin';


function App() {
  
  return (
    
    // <BrowserRouter>

    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/train" element={<Train />} />
        <Route path="/chats" element={<Chat />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  // </BrowserRouter>
  
  );
}


export default App;
