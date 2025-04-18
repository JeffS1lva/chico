import { CreditCard } from 'lucide-react';

export function Footer() {
  return (
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
  );
}