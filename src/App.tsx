import { useState } from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel';
import { ProductCard } from './components/ProductCard';
import { CartModal } from './components/CartModal';
import { LoginModal } from './components/LoginModal';
import { TestimonialCard } from './components/TestimonialCard';
import { Footer } from './components/Footer';
import { CreditCard, ShoppingCart, X } from 'lucide-react';

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
      <Header
        categories={categories}
        cartCount={cartCount}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
        setShowLogin={setShowLogin}
        setShowCart={setShowCart}
      />

      {/* Main Content */}
      <main className="flex-grow">
        <Carousel
          slides={slides}
          currentSlide={currentSlide}
          setCurrentSlide={setCurrentSlide}
        />

        {/* Featured Products Section */}
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Camisetas em Destaque</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {products.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>

        {/* Promo Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 py-8 my-6">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
            <div className="text-white md:w-1/2 mb-4 md:mb-0">
              <h2 className="text-2xl font-bold mb-2">Promoção para membros!</h2>
              <p className="text-white/90 mb-4">Use o cupom <span className="font-bold">LAGOFIEL10</span> e ganhe 10% OFF</p>
              <button className="bg-white text-blue-700 px-6 py-2 rounded-full font-medium transition duration-300 hover:bg-blue-600 hover:text-white">
                Aproveitar agora
              </button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1618436880616-5b479f22a811?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Promoção"
                className="rounded-lg shadow-xl"
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

        {/* Testimonials */}
        <div className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8 text-center">O que nossos clientes dizem</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition duration-300">
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
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-600 transition">
                  f
                </a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-blue-400 transition">
                  t
                </a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-pink-600 transition">
                  i
                </a>
                <a href="#" className="bg-gray-800 w-8 h-8 rounded-full flex items-center justify-center hover:bg-red-600 transition">
                  y
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-bold mb-3">Links Rápidos</h3>
              <ul className="space-y-1 text-gray-400">
                {["Sobre nós", "Contato", "FAQ", "Termos de uso", "Política de privacidade"].map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:text-white transition">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Payments & Atendimento */}
            <div>
              <h3 className="font-bold mb-3">Pagamentos</h3>
              <div className="flex flex-wrap gap-2">
                <div className="bg-gray-800 p-2 rounded">
                  <CreditCard size={18} className="text-gray-400" />
                </div>
                {["PIX", "PayPal", "Boleto"].map((method, i) => (
                  <div key={i} className="bg-gray-800 p-2 rounded">
                    <p className="text-gray-400">{method}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-500">
            <p>© 2025 Lagoinha Store - Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Modals */}
      <CartModal
        showCart={showCart}
        setShowCart={setShowCart}
        cartItems={cartItems}
        subtotal={subtotal}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />

      <LoginModal showLogin={showLogin} setShowLogin={setShowLogin} />

    </div>
  );
}