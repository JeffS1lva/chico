import { ShoppingCart, X } from 'lucide-react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  quantity: number;
}

interface CartModalProps {
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  cartItems: CartItem[];
  subtotal: number;
  updateQuantity: (id: number, qty: number) => void;
  removeItem: (id: number) => void;
}

export function CartModal({
  showCart,
  setShowCart,
  cartItems,
  subtotal,
  updateQuantity,
  removeItem
}: CartModalProps) {
  if (!showCart) return null;

  return (
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
  );
}