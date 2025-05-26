import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login'
import Home from './pages/home'
import CadastrarMorador from './pages/cadastrarmorador'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastrarmorador" element={<CadastrarMorador />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App