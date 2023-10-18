import { create } from "zustand";
import { bearStorageType } from "./types/types";


export const useBearStore = create<bearStorageType>((set) => ({
    lightTheme:false,
    setTheme: () => set((state) => ({lightTheme: !state.lightTheme})),
}))