import { create } from "zustand";

interface BootstrapStoreState {
  loading: boolean;
  error: string | null;
  initialiazed: boolean;

  setLoading(loading: boolean): void;
  setError(error: string | null): void;
  setInitialiazed(initialiazed: boolean): void;
}

export const useBootsrapStore = create<BootstrapStoreState>((set) => ({
  loading: false,
  error: null,
  initialiazed: false,

  setLoading(loading) {
    set((state) => ({ ...state, loading }));
  },
  setError(error) {
    set((state) => ({ ...state, error }));
  },
  setInitialiazed(initialiazed) {
    set((state) => ({ ...state, initialiazed }));
  },
}));
