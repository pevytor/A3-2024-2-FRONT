"use client";
import { useState } from "react";

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
    <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-center">
    <div className="max-w-md w-full p-6 bg-blue-300 rounded-lg">
      <div className="text-center mb-6">
        <img
          src="/assets/images/PedeFood.png"
          className="w-full max-w-xs mx-auto mb-6"
        />
      </div>

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="password">Senha:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
              required
            />
          </div>

          <div style={{ marginBottom: '10px' }}>
            <label htmlFor="confirmPassword">Confirme sua senha:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
              required
            />
          </div>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="bg-zinc-400" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit" style={{ padding: '10px' }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
