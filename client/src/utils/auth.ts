import jwtDecode, { JwtPayload } from "jwt-decode";
import type { UserData } from "../interface/UserData";

class AuthService {
  getProfile(): UserData | null {
    try {
      const token = this.getToken();
      if (!token || this.isTokenExpired(token)) {
        this.logout(); // Auto logout if token is expired
        return null;
      }
      return jwtDecode<UserData>(token);
    } catch (err) {
      console.error("Error decoding token:", err);
      return null;
    }
  }

  loggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    
    if (this.isTokenExpired(token)) {
      console.warn("Token expired, logging out...");
      this.logout(); // Auto logout if expired
      return false;
    }

    return true;
  }

  isTokenExpired(token: string): boolean {
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded?.exp) return true;
      
      const currentTime = Date.now() / 1000;
      return decoded.exp < currentTime;
    } catch (err) {
      console.error("Error decoding token for expiration check:", err);
      return true;
    }
  }

  getToken(): string {
    return localStorage.getItem("id_token") || "";
  }

  async refreshToken(): Promise<boolean> {
    try {
      const response = await fetch("http://localhost:3001/api/users/refresh-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: this.getToken() }),
      });

      const data = await response.json();
      if (response.ok && data.token) {
        this.login(data.token);
        console.log("Token refreshed successfully.");
        return true;
      } else {
        console.error("Failed to refresh token:", data.message);
        this.logout();
        return false;
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      this.logout();
      return false;
    }
  }

  login(idToken: string): void {
    localStorage.setItem("id_token", idToken);
    window.location.assign("/");
  }

  logout(redirectUrl: string = "/login"): void {
    localStorage.removeItem("id_token");
    window.location.assign(redirectUrl);
  }
}

export default new AuthService();
