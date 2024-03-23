import { Link } from '@tanstack/react-router'

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8">
      <div className="text-2xl font-bold">Reactapp Starter</div>

      <nav className="flex gap-2">
        <Link
          to="/"
          activeProps={{
            className: 'text-primary-500',
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          activeProps={{
            className: 'text-primary-500',
          }}
        >
          About
        </Link>
      </nav>
    </header>
  )
}

export { Header }
