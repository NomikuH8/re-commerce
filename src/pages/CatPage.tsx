import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { ProdutoType, produtos } from "../data/produtos"
import styled from "styled-components"

export default function CatPage() {
  const [animais, setAnimais] = useState<ProdutoType[]>([])
  const { categoria } = useParams()

  useEffect(() => {
    setAnimais(produtos.filter((val) => val.category === categoria))
  }, [])

  return (
    <WrapperDiv>
      <AnimaisDiv>
        {animais.map((val, idx) => (
          <Card key={idx}>
            <div>
              <img src={val.image} alt={"imagem " + val.name} />
            </div>
            <InfoDiv>
              <span>
                <b>{val.name}</b>
              </span>
              <p>{val.description}</p>
            </InfoDiv>
            <PrecoDiv>
              <span>{val.price}</span>
              <button>Comprar</button>
            </PrecoDiv>
          </Card>
        ))}
      </AnimaisDiv>
    </WrapperDiv>
  )
}

const WrapperDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const AnimaisDiv = styled.div`
  width: 75%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3%;
  padding: 2%;
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30%;
  box-shadow: 0 0 10px #a1a1a1;
  height: 300px;
  margin: 5px;

  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }
`

const InfoDiv = styled.div`
  text-align: center;

  padding: 5%;
`

const PrecoDiv = styled.div`
  text-align: center;
  font-size: larger;
  position: relative;
  bottom: 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 5%;
  margin-top: 0;

  button {
    background-color: #3fff73;
    border: 1px solid #18782a;
    padding: 2%;
    font-size: large;
    border-radius: 20px;
    transition: 200ms;
  }

  button:hover {
    background-color: #2dcf4b;
    transition: 200ms;
    cursor: pointer;
  }
`
