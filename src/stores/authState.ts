import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
interface GlobalState {
  userId: string;
  setUserId: (userId: string) => void;
}
export const useGlobalStore = create<GlobalState>()(
  devtools(
    (set) => ({
      userId: '',
      setUserId: (userId: string) => set({ userId }),
    }),
    { name: 'GlobalStore' },
  ),
);
