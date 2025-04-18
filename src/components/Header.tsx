import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';

interface HeaderProps {
  categories: string[];
  cartCount: number;
  showMobileMenu: boolean;
  setShowMobileMenu: (show: boolean) => void;
  setShowLogin: (show: boolean) => void;
  setShowCart: (show: boolean) => void;
}

export function Header({
  categories,
  cartCount,
  showMobileMenu,
  setShowMobileMenu,
  setShowLogin,
  setShowCart
}: HeaderProps) {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Chico Store</h1>

          {/* Search bar - desktop */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input type="text" placeholder="Buscar camisetas..." className="w-full py-2 px-4 border rounded-full bg-gray-50" />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
          </div>

          {/* Nav - desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            <button onClick={() => setShowLogin(true)} className="flex items-center text-gray-700 hover:text-blue-600">
              <User size={20} className="mr-1" />
              <span>Entrar</span>
            </button>
            <button onClick={() => setShowCart(true)} className="flex items-center text-gray-700 hover:text-blue-600 relative">
              <ShoppingCart size={20} className="mr-1" />
              <span>Carrinho</span>
              {cartCount > 0 && (
                <span className="absolute -top-3 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {showMobileMenu && (
          <div className="md:hidden mt-3 py-3 border-t border-gray-100">
            <div className="relative mb-3">
              <input type="text" placeholder="Buscar camisetas..." className="w-full py-2 px-4 border rounded-full" />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <nav className="flex flex-col space-y-2">
              <button onClick={() => setShowLogin(true)} className="flex items-center text-gray-700 px-2 py-1">
                <User size={18} className="mr-2" />
                <span>Entrar</span>
              </button>
              <button onClick={() => setShowCart(true)} className="flex items-center text-gray-700 px-2 py-1">
                <ShoppingCart size={18} className="mr-2" />
                <span>Carrinho {cartCount > 0 && `(${cartCount})`}</span>
              </button>
              {categories.map((cat, i) => (
                <a key={i} href="#" className="px-2 py-1">{cat}</a>
              ))}
            </nav>
          </div>
        )}
      </div>

      {/* Desktop categories */}
      <div className="hidden md:block border-t border-gray-100">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-8 py-2 text-sm">
            {categories.map((cat, i) => (
              <li key={i}>
                <a href="#" className="text-gray-600 hover:text-blue-600">{cat}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}