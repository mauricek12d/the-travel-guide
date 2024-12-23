import { useState, type FormEvent, type ChangeEvent } from 'react';

import Auth from '../utils/auth';
import { login } from '../api/authAPI';
import type { UserLogin } from '../interface/UserLogin';

const Login = () => {
  const [loginData, setLoginData] = useState<UserLogin>({
    username: '',
    password: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
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
        throw new Error('All fields are required');
      }
      const data = await login(loginData);
      Auth.login(data.token);
    } catch (error) {
      setError(error instanceof Error ? 'Failed to login' : 'An unknown error occurred')
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='form-container'>
      <form className='form login-form' onSubmit={handleSubmit}>
        <h1>Login</h1>
        {error && <div className='error'>{error}</div>}
        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            className='form-input'
            id='username'
            type='text'
            name='username'
            value={loginData.username || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='Password'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            value={loginData.password || ''}
            onChange={handleChange}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-primary' type='submit' disabled={loading}>
            {loading ? 'Loading...' : 'Login'}
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
