import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./productsApi";
import { usersApi } from "./usersApi";

// Створення центрального зберігання (store) з використанням конфігурації Redux Toolkit
export const store = configureStore({
   // визначення редукторів для обробки стану, пов'язаного з API
   reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [usersApi.reducerPath]: usersApi.reducer,
   },

   // Додаємо middleware для обробки асинхронних операцій, пов'язаних з API
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, usersApi.middleware),
});
