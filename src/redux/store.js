import { configureStore } from '@reduxjs/toolkit'
import plansSlice from "./slices/plansSlice";

export const store = configureStore({
    reducer: {
        plans: plansSlice
    },
})