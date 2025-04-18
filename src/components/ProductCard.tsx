import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

export function ProductCard({ product, addToCart }: ProductCardProps) {
  return (
    <div className="bg-white border rounded-xl overflow-hidden hover:shadow-lg group">
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
  );
}