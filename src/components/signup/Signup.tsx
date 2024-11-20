"use client";
import { useState } from "react";
import { LogoDark } from "../ui/LogoDark";

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState('');


  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSignup = (event: React.FormEvent) => {
    event.preventDefault();

    if (email === '' || password === '' || confirmPassword === '') {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (!passwordRegex.test(password)) {
      setError('A senha deve conter pelo menos 8 caracteres, incluindo letras maiúsculas, minúsculas, números e caracteres especiais.');
      return;
    }

    if (password !== confirmPassword) {
      setError('As senhas não correspondem.');
      return;
    }


    setError('');
    alert('Cadastro realizado com sucesso!');
    console.log('Usuário cadastrado:', { email, password });
  };

  return (
    <div className="w-[500px] p-5 flex items-center justify-center rounded-lg">
      <div className="bg-white p-6 rounded shadow-md w-full">
        <div className="flex justify-center items-center p-5 mb-6">
          <LogoDark />
        </div>
        <form onSubmit={handleSignup}>
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

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 font-medium mb-2"
            >
              Confirme sua senha:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}