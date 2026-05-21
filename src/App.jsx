import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollToTop"

import Home from "./pages/Home"
import Products from "./pages/ProductView"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <>
      <Navbar />

      <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:slug"
          element={<ProductPage />}
        />

      </Routes>

      <Footer />
    </>
  )
}

export default App