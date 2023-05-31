import { BrowserRouter, Route, Routes } from "react-router-dom"
import CategoriasPage from "./pages/CategoriasPage"
import MainWrapper from "./wrappers/MainWrapper"
import AboutPage from "./pages/AboutPage"
import HomePage from "./pages/HomePage"
import CatPage from "./pages/CatPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainWrapper />}>
            <Route index element={<HomePage />} />
            <Route path='categorias' element={<CategoriasPage />} />
            <Route path='categorias/:categoria' element={<CatPage />} />
            <Route path='sobre' element={<AboutPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
