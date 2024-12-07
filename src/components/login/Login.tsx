'use client';

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { LogoDark } from "../ui/LogoDark";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário já está logado
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated) {
      router.replace("/dashboard"); // Redireciona para o dashboard
    } else {
      setIsLoading(false); // Define que o carregamento terminou
    }
  }, [router]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Busca os dados do primeiro perfil
      const { data } = await axios.get("/api/perfil");
      const user = data[0]; // Primeiro usuário no array

      // Compara o e-mail e senha
      if (email === user.email && password === user.email) {
        localStorage.setItem("isAuthenticated", "true"); // Armazena estado de autenticação
        router.push("/dashboard"); // Redireciona para o dashboard
      } else {
        setError("Email ou senha incorretos.");
      }
    } catch (err) {
      setError("Erro ao realizar login. Tente novamente.");
    }
  };

  if (isLoading) {
    // Mostra uma tela de carregamento enquanto verifica a autenticação
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <p>Carregando...</p>
      </div>
    );
  }

  return (
    <div className="w-[500px] p-5 flex items-center justify-center rounded-lg">
      <div className="bg-white p-6 rounded shadow-md w-full">
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

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Senha:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-medium py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Login
            </button>
            <div className="text-sm mt-2">
              Não possui uma conta?{" "}
              <a href="/signup" className="text-blue-500 font-bold">
                Cadastre-se
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
