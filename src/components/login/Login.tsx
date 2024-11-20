import Link from "next/link";
import { useState } from "react";
import { format } from "path";
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
    <div className="bg-blue">
      <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <img src="/assets/images/PedeFood.png" style={{ width: '100%', marginBottom: '20px' }}
          />
        </div>
        <form onSubmit={handleLogin}>
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
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '10px' }}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div className="bg-zinc-400" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button type="submit" style={{ padding: '10px' }}>
              Login
            </button>
          </div>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <p>Não tem uma conta?</p>
        <Link href="http://localhost:3000/signup" style={{ color: "blue", textDecoration: "underline" }}>
        Crie sua conta
        </Link>
            </div>
        </form>
      </div>
    </div>
  );
}






