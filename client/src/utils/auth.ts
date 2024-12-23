import { type JwtPayload, jwtDecode } from 'jwt-decode';
import type { UserData } from '../interface/UserData';

class AuthService {
  getProfile(): UserData | null {
    try {
      const token = this.getToken();
      if (!token) {
        throw new Error('No token found');
      }
      return jwtDecode<UserData>(token);
    } catch (err) {
      console.error('Error decoding token:', err);
      return null; // Return null if the token is invalid
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded?.exp) {
        // If the token doesn't have an 'exp', consider it invalid
        return true;
      }
      return decoded.exp < Date.now() / 1000; // Check if 'exp' is in the past
    } catch (err) {
      console.error('Error decoding token for expiration check:', err);
      return true; // Consider the token expired if decoding fails
    }
  }

  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  login(idToken: string): void {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/'); // Redirect to home page after login
  }

  logout(redirectUrl: string = '/'): void {
    localStorage.removeItem('id_token');
    window.location.assign(redirectUrl); // Redirect to a customizable URL
  }
}

export default new AuthService();
