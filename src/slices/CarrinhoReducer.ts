import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ProdutoType } from "../data/produtos"

interface CarrinhoType {
  carrinho: ProdutoType[]
}

const initialState: CarrinhoType = {
  carrinho: [],
}

export const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    adicionarCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      state.carrinho.push(action.payload)
    },
    removerCarrinho: (state, action: PayloadAction<ProdutoType>) => {
      state.carrinho.splice(
        state.carrinho.findIndex((val) => val.name === action.payload.name),
        1
      )
    },
  },
})

export const { adicionarCarrinho, removerCarrinho } = carrinhoSlice.actions
export default carrinhoSlice.reducer
