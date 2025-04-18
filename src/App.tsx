import { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, Heart, CreditCard } from 'lucide-react';

// Define types for our data
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

interface CartItem extends Product {
  quantity: number;
}

interface Testimonial {
  name: string;
  since: string;
  text: string;
}

export function LagoinhaEcommerceApp() {
  // States
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data
  const categories: string[] = ["Masculino", "Feminino", "Infantil", "Acessórios", "Coleções"];

  // Product data
  const products = [
    { id: 1, name: "Camiseta Lagoinha Worship", price: 89.99, image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Masculino", rating: 4.8 },
    { id: 2, name: "Baby Look Lagoinha Music", price: 79.99, image: "https://images.unsplash.com/photo-1600328759671-85927887458d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Feminino", rating: 4.5 },
    { id: 3, name: "Camiseta Infantil Lagoinha Kids", price: 59.99, image: "https://images.unsplash.com/photo-1630345910963-1a697bb5262d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Infantil", rating: 4.2 },
    { id: 4, name: "Camiseta Estampada Conference", price: 99.99, image: "https://images.unsplash.com/photo-1628071787776-a1d7f8ffa8f0?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Coleções", rating: 4.7 },
    { id: 5, name: "Moletom Lagoinha Youth", price: 149.99, image: "https://images.unsplash.com/photo-1680292783974-a9a336c10366?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Masculino", rating: 4.9 },
    { id: 6, name: "Camiseta Estampa Gospel", price: 75.99, image: "https://images.unsplash.com/photo-1635252003224-832b5fda35e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Feminino", rating: 4.3 },
    { id: 7, name: "Camiseta Manga Longa Worship", price: 110.99, image: "https://images.unsplash.com/photo-1701318227205-227aee07476c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Masculino", rating: 4.6 },
    { id: 8, name: "Boné Lagoinha Conference", price: 69.99, image: "https://images.unsplash.com/photo-1609259921313-5bdecc25d10b?q=80&w=1985&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", category: "Acessórios", rating: 4.4 }
  ];

  const slides = [
    { image: "https://images.unsplash.com/photo-1618354691714-7d92150909db?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", title: "Nova Coleção Conference", desc: "Lançamento com até 20% OFF" },
    { image: "https://images.unsplash.com/photo-1503340588524-222d094c7066?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png", title: "Lagoinha Worship", desc: "Camisetas exclusivas com 15% OFF" }
  ];

  // Cart state
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { ...products[0], quantity: 1 },
    { ...products[2], quantity: 2 }
  ]);

  // Special collections 
  const specialCollections = [
    { title: "Coleção Conference 2025", description: "Camisetas exclusivas do maior evento do ano!", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D.png" },
    { title: "Linha Lagoinha Worship", description: "Camisetas inspiradas nas músicas que tocam seu coração", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Lagoinha Kids", description: "Roupas confortáveis e divertidas para os pequenos", image: "https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
  ];

  // Testimonials
  const testimonials: Testimonial[] = [
    { name: "Mariana Silva", since: "Cliente desde 2023", text: "Amo as camisetas da Lagoinha! O tecido é super confortável e as estampas são lindas. Sempre recebo elogios quando uso." },
    { name: "Carlos Mendes", since: "Cliente desde 2022", text: "As camisetas da Conference são incríveis! Já comprei várias edições e a qualidade é sempre excelente. Recomendo demais!" },
    { name: "Patrícia Oliveira", since: "Cliente desde 2024", text: "A entrega foi super rápida e o atendimento é excelente! As camisetas têm um significado especial e a qualidade é top." }
  ];

  // Helper functions
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const updateQuantity = (id: number, qty: number): void => {
    setCartItems(items =>
      items.map(item => item.id === id ? { ...item, quantity: qty } : item)
    );
  };

  const removeItem = (id: number): void => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (product: Product): void => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      updateQuantity(product.id, existingItem.quantity + 1);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    setShowCart(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Lagoinha Store</h1>

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

      {/* Main Content */}
      <main className="flex-grow">
        {/* Carousel */}
        <div className="relative overflow-hidden h-56 md:h-80">
          <div
            className="flex transition-transform duration-500 h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full h-full relative">
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
                  <div className="text-white p-6 md:p-12 max-w-lg">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                    <p className="text-lg mb-4">{slide.desc}</p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-2 rounded-full font-medium">
                      Ver coleção
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                onClick={() => setCurrentSlide(i)}
              />
            ))}
          </div>

          {/* Carousel navigation buttons */}
          <button
            onClick={() => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1))}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-blue-600 hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-2 rounded-full text-blue-600 hover:bg-white"
          >
            →
          </button>
        </div>

        {/* Featured products */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Camisetas em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(product => (
              <div key={product.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition duration-300"
                  />
                  <button className="absolute top-2 right-2 bg-white/80 p-2 rounded-full text-gray-600 hover:text-red-500">
                    <Heart size={16} />
                  </button>
                </div>
                <div className="p-4">
                  <span className="text-xs text-blue-600 font-medium">{product.category}</span>
                  <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>

                  {/* Rating stars */}
                  <div className="flex text-amber-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={i < Math.floor(product.rating) ? "text-amber-400" : "text-gray-200"}>★</span>
                    ))}
                    <span className="text-gray-500 text-xs ml-1">({product.rating})</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-bold">R$ {product.price.toFixed(2)}</span>
                    <button
                      className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
                      onClick={() => addToCart(product)}
                    >
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Promo banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-8 my-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Promoção para membros!</h2>
              <p className="text-white/90 mb-4">Use o cupom <span className="font-bold">LAGOFIEL10</span> e ganhe 10% OFF</p>
              <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium">
                Aproveitar agora
              </button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1618436880616-5b479f22a811?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Promoção"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Browse by categories */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Navegue por Categorias</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {categories.map((category, index) => (
              <a href="#" key={index} className="relative group overflow-hidden rounded-lg h-40">
                <img
                  src={`https://images.unsplash.com/photo-1618436880616-5b479f22a811?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D${category}`}
                  alt={category}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                  <h3 className="text-white font-medium text-lg">{category}</h3>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Special editions */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Edições Especiais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialCollections.map((collection, index) => (
              <div key={index} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg">
                <img src={collection.image} alt={collection.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2">{collection.title}</h3>
                  <p className="text-gray-600 mb-4">{collection.description}</p>
                  <button className="text-blue-600 font-medium hover:text-blue-800">Ver coleção →</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow">
                  <div className="flex text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.since}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">Receba nossas novidades</h2>
            <p className="text-gray-600 mb-6 max-w-lg mx-auto">Inscreva-se para receber em primeira mão nossas promoções, lançamentos e conteúdos exclusivos.</p>
            <div className="flex max-w-md mx-auto">
              <input type="email" placeholder="Seu melhor e-mail" className="flex-1 p-3 border border-gray-300 rounded-l-lg" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium">
                Inscrever
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-xl mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Lagoinha Store</h3>
              <p className="text-gray-400">Vestindo a família Lagoinha com estilo e propósito.</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600">f</a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-400">t</a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600">i</a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600">y</a>
              </div>
            </div>

            <div>
              <h3 className="font-bold mb-3">Links Rápidos</h3>
              <ul className="space-y-1 text-gray-400">
                {["Sobre nós", "Contato", "FAQ", "Termos de uso", "Política de privacidade"].map((link, i) => (
                  <li key={i}><a href="#" className="hover:text-white">{link}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-3">Pagamentos</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800 p-2 rounded">
                  <CreditCard size={18} className="text-gray-400" />
                </div>
                {["PIX", "PayPal", "Boleto"].map((method, i) => (
                  <div key={i} className="bg-gray-800 p-2 rounded">{method}</div>
                ))}
              </div>
              <div className="mt-4">
                <h3 className="font-bold mb-2">Atendimento</h3>
                <p className="text-gray-400 text-sm">Segunda a Sexta: 9h às 18h</p>
                <p className="text-gray-400 text-sm">contato@lagoinhastore.com.br</p>
                <p className="text-gray-400 text-sm">(31) 9999-9999</p>
              </div>
              <p className="text-sm text-gray-500 mt-4">© 2025 Lagoinha Store. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Modal */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[80vh] flex flex-col">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Seu Carrinho</h2>
              <button onClick={() => setShowCart(false)} className="text-gray-500 hover:text-gray-700">
                <X size={20} />
              </button>
            </div>

            <div className="overflow-auto flex-1">
              {cartItems.length === 0 ? (
                <div className="py-8 text-center">
                  <ShoppingCart size={48} className="mx-auto text-gray-300 mb-2" />
                  <h3 className="text-lg font-medium">Seu carrinho está vazio</h3>
                  <p className="text-gray-500">Adicione produtos para continuar</p>
                </div>
              ) : (
                <div>
                  {cartItems.map(item => (
                    <div key={item.id} className="flex p-4 border-b">
                      <img src={item.image} alt={item.name} className="w-16 h-16 rounded object-cover" />
                      <div className="ml-3 flex-1">
                        <div className="flex justify-between">
                          <h3 className="font-medium">{item.name}</h3>
                          <p>R$ {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500">{item.category}</p>
                        <div className="flex justify-between mt-2">
                          <div className="flex items-center border rounded">
                            <button className="px-2" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}>-</button>
                            <span className="px-2">{item.quantity}</span>
                            <button className="px-2" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                          </div>
                          <button className="text-red-500 text-sm" onClick={() => removeItem(item.id)}>Remover</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-4">
                <div className="flex justify-between font-bold mb-4">
                  <p>Subtotal</p>
                  <p>R$ {subtotal.toFixed(2)}</p>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
                  Finalizar compra
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Entrar na conta</h2>
              <button onClick={() => setShowLogin(false)} className="text-gray-500">
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="email">Email</label>
                <input id="email" type="email" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="seu@email.com" />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="password">Senha</label>
                <input id="password" type="password" className="w-full p-2 border border-gray-300 rounded-lg" placeholder="••••••••" />
                <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mt-1 inline-block">Esqueceu sua senha?</a>
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mb-4">Entrar</button>
              <div className="text-center text-sm">
                <span className="text-gray-600">Não tem conta? </span>
                <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Cadastre-se</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}