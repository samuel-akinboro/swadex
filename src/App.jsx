import Home from './Pages/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CryptoolyLogin from './Pages/CryptoolyLogin';
import SelectAccount from './Pages/SelectAccount';

function App() {

  return (
    <div className="bg-[#F4F4F6] min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/cryptooly" element={<CryptoolyLogin />} />
          <Route path="/login/cryptooly/select-account" element={<SelectAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
