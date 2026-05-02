import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';

// Простые типизированные компоненты для страниц
const Home = () => (
  <div className="flex flex-col items-center justify-center h-[calc(100-64px)] p-20">
    <h1 className="text-5xl font-bold text-zinc-800">Главная</h1>
    <p className="mt-4 text-zinc-500">Добро пожаловать в наше TS приложение</p>
  </div>
);

const Explore = () => (
  <div className="p-20 text-center">
    <h1 className="text-5xl font-bold text-zinc-800">Исследование</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-zinc-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
