import { configureStore } from "@reduxjs/toolkit"
import CarrinhoReducer from "../slices/CarrinhoReducer"

export const store = configureStore({
  reducer: {
    carrinho: CarrinhoReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
