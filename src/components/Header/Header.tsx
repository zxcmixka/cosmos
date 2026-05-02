import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-zinc-900 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-black tracking-tighter text-cyan-400">
          COSMOS<span className="text-white">.TS</span>
        </Link>
        
        <div className="flex gap-6 font-medium">
          <Link to="/main" className="hover:text-cyan-400 transition">Главная</Link>
          <Link to="/shema" className="hover:text-cyan-400 transition">Схема</Link>
          <Link to="/effects" className="hover:text-cyan-400 transition">Эффекты</Link>
          <Link to="/landscape" className="hover:text-cyan-400 transition">"Ландшафт</Link>
          <Link to="/connections" className="hover:text-cyan-400 transition">"Связи</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
