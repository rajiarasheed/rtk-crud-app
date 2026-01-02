import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import NavBar from "./components/NavBar";
import NotFount from "./components/NotFount";


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Create />} />
      

      <Route path="*" element={<NotFount />} />
      </Routes>
      </BrowserRouter>
  
    
    </>
  )
}

export default App
