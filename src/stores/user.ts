import { create } from "zustand";

interface UserStoreState {
  id: string;
  username: string;
  email: string;

  setId(id: string): void;
  setUsername(username: string): void;
  setEmail(email: string): void;
}

export const useUserStore = create<UserStoreState>((set) => ({
  id: "",
  username: "",
  email: "",

  setId(id) {
    set((state) => ({ ...state, id }));
  },
  setUsername(username) {
    set((state) => ({ ...state, username }));
  },
  setEmail(email) {
    set((state) => ({ ...state, email }));
  },
}));
