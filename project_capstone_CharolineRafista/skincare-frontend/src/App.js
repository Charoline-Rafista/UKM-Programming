// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProdukList from "./pages/ProdukList";
import ProdukDetail from "./pages/ProdukDetail";
import AhliKulitList from "./pages/AhliKulitList";

// src/App.js
import ErrorBoundary from "./components/ErrorBoundary";

// Wrap your components in ErrorBoundary
function App() {
  return (
    <Router>
      <Navbar />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<ProdukList />} />
          <Route path="/produk" element={<ProdukList />} />
          <Route path="/produk/:id" element={<ProdukDetail />} />
          <Route path="/ahli-kulit" element={<AhliKulitList />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
}


export default App;
// src/index.js