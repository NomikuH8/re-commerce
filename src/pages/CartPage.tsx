import styled from "styled-components"
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { ProdutoType } from "../data/produtos"
import { removerCarrinho } from "../slices/CarrinhoReducer"
import { useNavigate } from "react-router"

export default function CartPage() {
  const { carrinho } = useAppSelector((state) => state.carrinho)
  const dispatch = useAppDispatch()
  const redirect = useNavigate()

  const RemoveClick = (produto: ProdutoType) => {
    dispatch(removerCarrinho(produto))
  }

  const ProcedeClick = () => {
    redirect("/pagamento")
  }

  let allPrice = 0
  for (let i of carrinho) allPrice += i.price

  return (
    <CartDiv>
      {carrinho.length > 0 && (
        <>
          <table>
            <thead>
              <tr>
                <th>Animal</th>
                <th>Preço</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {carrinho.map((val, idx) => (
                <tr key={idx}>
                  <td>{val.name}</td>
                  <td>R${val.price},00</td>
                  <td>
                    <RemoveButton onClick={() => RemoveClick(val)}>Remover</RemoveButton>
                  </td>
                </tr>
              ))}
              <tr>
                <td>Preço total:</td>
                <td>R${allPrice},00</td>
              </tr>
            </tbody>
          </table>
          <ProcedeButton onClick={ProcedeClick}>Proceder para compra</ProcedeButton>
        </>
      )}
      {carrinho.length === 0 && (
        <EmptyCart>
          <p>Nenhum animal no carrinho!</p>
        </EmptyCart>
      )}
    </CartDiv>
  )
}

const CartDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  table {
    width: 500px;
    padding: 5px;
    margin: 2%;
    font-size: larger;
    background-color: #e3e3e3;
    border-radius: 20px;

    tbody tr {
      border-radius: 20px;
    }
  }
`

const EmptyCart = styled.div`
  background-color: #dfdfdf;
  color: #1e1e1e;
  padding: 2%;
  margin: 2%;
  border-radius: 20px;
`

const ProcedeButton = styled.button`
  background-color: #5aff97;
  font-size: larger;
  border-radius: 20px;
  padding: 0.5%;
  border: 1px solid #3fb269;
  width: 150px;
  transition: 200ms;

  &:hover {
    background-color: #3fb269;
  }
`

const RemoveButton = styled.button`
  background-color: #ff6f6f;
  font-size: large;
  border-radius: 20px;
  border: 1px solid #ab4949;
  padding: 3px;
  transition: 200ms;

  &:hover {
    background-color: #ab4949;
  }
`
