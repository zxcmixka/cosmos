import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './page/Home/Home'
import { Main } from './page/Main/Main'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-700">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/shema" element={<Home />} />
          <Route path="/effects" element={<Home />} />
          <Route path="/landscape" element={<Home />} />
          <Route path="/connections" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
