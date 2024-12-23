import type { UserLogin } from '../interface/UserLogin';

export const login = async (userData: UserLogin): Promise<{ token: string }> => {
  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json(); 
};
