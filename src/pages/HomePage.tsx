import koalaImage from "../assets/koala.jpg"
import loboImage from "../assets/loboguara.jpg"
import styled from "styled-components"

export default function HomePage() {
  return (
    <HomeDiv>
      <StartDiv>
        <img src={koalaImage} alt='koala' />
        <div>
          <span>Seu animalzinho está aqui no Re:commerce!</span>
        </div>
      </StartDiv>
      <MidDiv>
        <img src={loboImage} alt='lobo guara' />
        <div>
          <span>Temos animais silvestres para todas os gostos e idades.</span>
        </div>
      </MidDiv>
    </HomeDiv>
  )
}

const HomeDiv = styled.div``

const StartDiv = styled.div`
  img {
    position: absolute;
    width: 100%;
    height: 500px;
    object-fit: cover;
  }

  div {
    position: relative;
    /* background-image: linear-gradient(to right, #1e1e1e, #1e1e1ea5, #1e1e1e00); */
    background-image: linear-gradient(to right, #1e1e1e, #1e1e1ea8, #1e1e1e00, #1e1e1ea5, #1e1e1e);
    height: 500px;
    display: flex;
    align-items: center;
  }

  span {
    position: relative;
    padding: 3%;
    color: #e1e1e1;
    font-size: x-large;
    width: 300px;
    text-align: center;
    white-space: break-spaces;
  }
`

const MidDiv = styled.div`
  img {
    position: absolute;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  div {
    position: relative;
    /* background-image: linear-gradient(to right, #1e1e1e, #1e1e1ea5, #1e1e1e00); */
    background-image: linear-gradient(to right, #1e1e1e, #1e1e1ea8, #1e1e1e00, #1e1e1ea5, #1e1e1e);
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  span {
    position: relative;
    padding: 3%;
    color: #e1e1e1;
    font-size: x-large;
    width: 300px;
    text-align: center;
    white-space: break-spaces;
  }
`
