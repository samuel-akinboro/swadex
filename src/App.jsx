import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <div className="bg-[#F4F4F6] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
