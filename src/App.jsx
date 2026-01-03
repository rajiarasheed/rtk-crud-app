import { BrowserRouter, Route, Routes } from "react-router-dom";
import Create from "./components/Create";
import NavBar from "./components/NavBar";
import NotFount from "./components/NotFount";
import Read from "./components/Read";


function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Create />} />
      <Route path="/read" element={<Read />} />
      

      <Route path="*" element={<NotFount />} />
      </Routes>
      </BrowserRouter>
  
    
    </>
  )
}

export default App
