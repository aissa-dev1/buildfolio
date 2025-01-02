import { create } from "zustand";

interface AuthStoreState {
  token: string;
  isAuthenticated: boolean;

  setToken(token: string): void;
  setIsAuthenticated(isAuthenticated: boolean): void;
}

export const useAuthStore = create<AuthStoreState>((set) => ({
  token: "",
  isAuthenticated: false,

  setToken(token) {
    set((state) => ({ ...state, token }));
  },
  setIsAuthenticated(isAuthenticated) {
    set((state) => ({ ...state, isAuthenticated }));
  },
}));
