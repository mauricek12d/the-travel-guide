import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interface/UserLogin';
import './Login.css';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      if (!loginData.username || !loginData.password) {
        throw new Error('Both username and password are required.');
      }
      const data = await login(loginData);
      Auth.login(data.token);
      // Redirect on successful login
      window.location.href = '/dashboard';
    } catch (error) {
      setError(
        error instanceof Error ? error.message : 'An unknown error occurred. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: '20px',
      }}
    >
      <div className="form-container">
        <form className="form login-form" onSubmit={handleSubmit} noValidate>
          <fieldset disabled={loading}>
            <h1 className="text-center mb-4">Login</h1>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label" id="username-label">
                Username
              </label>
              <input
                className="form-control"
                id="username"
                type="text"
                name="username"
                value={loginData.username ?? ""}
                onChange={handleChange}
                aria-label="Enter your username"
                aria-describedby="username-label"
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label" id="password-label">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                name="password"
                value={loginData.password ?? ""}
                onChange={handleChange}
                aria-label="Enter your password"
                aria-describedby="password-label"
                required
              />
            </div>
            <div className="form-group mb-3">
              <button className="btn btn-primary w-100" type="submit" disabled={loading}>
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </div>
          </fieldset>
        </form>

        {/* External Links to Events */}
        <div className="external-links text-center mt-4">
          <p>Looking for events in New Jersey?</p>
          <a
            href="https://www.capemaychamber.com/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary m-2"
          >
            Visit Cape May Events
          </a>
          <a
            href="https://www.atlanticcitynj.com/events/?week=true"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary m-2"
          >
            Visit Atlantic City Events
          </a>
          <a
            href="https://visitlbiregion.com/events/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary m-2"
          >
            Visit Long Beach Island Events
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
