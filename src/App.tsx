import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoriasPage from "./pages/CategoriasPage"
import MainWrapper from "./wrappers/MainWrapper"
import PaymentPage from "./pages/PaymentPage"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import CartPage from "./pages/CartPage"
import CatPage from "./pages/CatPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route index element={<HomePage />} />
            <Route path='categorias/:categoria' element={<CatPage />} />
            <Route path='categorias' element={<CategoriasPage />} />
            <Route path='pagamento' element={<PaymentPage />} />
            <Route path='carrinho' element={<CartPage />} />
            <Route path='sobre' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
