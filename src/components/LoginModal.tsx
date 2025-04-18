import { useState } from "react";
import { X } from "lucide-react";

interface LoginModalProps {
  showLogin: boolean;
  setShowLogin: (show: boolean) => void;
}

export function LoginModal({ showLogin, setShowLogin }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  if (!showLogin) return null;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch('http://localhost:3000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        credentials: 'include', // Important for sending cookies
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Falha no login');
      }
      
      // Store token in localStorage for non-cookie approach
      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      
      // Close modal and redirect or update UI state
      setShowLogin(false);
      console.log('Login successful!', data);
      // Redirect to dashboard (use React Router in a real application)
      // window.location.href = '/admin/dashboard'; 
    } catch (error) {
      console.error('Login error:', error);
      setError(error instanceof Error ? error.message : 'Erro ao tentar fazer login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Entrar na conta</h2>
          <button onClick={() => setShowLogin(false)} className="text-gray-500">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleLogin} className="p-6">
          {error && <div className="text-red-500 text-sm mb-4 p-2 bg-red-50 rounded">{error}</div>}

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">
              Senha
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="••••••••"
              required
            />
            <a href="#" className="text-sm text-blue-600 hover:text-blue-800 mt-1 inline-block">
              Esqueceu sua senha?
            </a>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium mb-4 disabled:bg-blue-400"
          >
            {isLoading ? "Processando..." : "Entrar"}
          </button>

          <div className="text-center text-sm">
            <span className="text-gray-600">Não tem conta? </span>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
              Cadastre-se
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}