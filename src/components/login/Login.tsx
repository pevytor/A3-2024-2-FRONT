import Link from "next/link";
import { useState } from "react";
import { format } from "path";
import { Logo } from "../ui/Logo";
import { LogoDark } from "../ui/LogoDark";
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (email !== 'user@gmail.com' || password !== 'password') {
      setError('Credenciais inválidas.');
      return;
    }

    setError('');
    alert('Login bem-sucedido!');
    console.log('Usuário autenticado:', { email, password });
  };


  return (
    <div className="w-[500px] p-5 flex items-center justify-center rounded-lg">
      <div className="bg-white p-6 rounded shadow-md w-full ">
        <div className="flex justify-center items-center p-5 mb-6">
          <LogoDark />
        </div>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Login
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-600">Não tem uma conta?</p>
            <Link
              href="/signup"
              className="text-blue-600 hover:underline"
            >
              Crie sua conta
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}






