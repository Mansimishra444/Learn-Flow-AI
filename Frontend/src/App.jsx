import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Study from "./pages/Study";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/study" element={<Study />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;