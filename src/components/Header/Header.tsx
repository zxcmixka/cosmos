import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="bg-zinc-900 text-black shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link
          to="/"
          className="text-xl font-black tracking-tighter text-indigo-300"
        >
          COSMOS<span className="text-white">.TS</span>
        </Link>

        <div className="flex gap-6 font-medium text-indigo-200">
          <Link to="/main" className="transition hover:text-indigo-300">
            Главная
          </Link>
          <Link to="/shema" className="transition hover:text-indigo-300">
            Схема
          </Link>
          <Link to="/effects" className="transition hover:text-indigo-300">
            Эффекты
          </Link>
          <Link to="/landscape" className="transition hover:text-indigo-300">
            Ландшафт
          </Link>
          <Link to="/connections" className="transition hover:text-indigo-300">
            Связи
          </Link>
        </div>
      </nav>
    </header>
  )
}
