import logoImagem from '../assets/logo.png'
import { Link } from "react-router-dom"
import styled from 'styled-components'
import { Outlet } from "react-router"

const links = [
  {
    name: 'Início',
    link: '/',
  },
  {
    name: 'Categorias',
    link: '/categorias',
  },
  {
    name: 'sobre',
    link: '/sobre',
  }
]

export default function MainWrapper() {
  return (
    <>
      <Header>
        <NavBar>
          <ul>
            {links.map((val, idx) => (
              <li key={idx}><Link to={val.link}>{val.name}</Link></li>
            ))}
          </ul>
        </NavBar>
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        <span>
          Re:cover
        </span>
        <img src={logoImagem} alt="Logo" />
      </Footer>
    </>
  )
}

const Header = styled.header`
`

const NavBar = styled.nav`
ul {
  display: flex;
  list-style-type: none;
  padding: 0;

  li {
    a {
      padding: 15px;
      text-decoration: none;
      color: #191919;
    }
  }
}
`

const Main = styled.main`
`

const Footer = styled.footer`
height: 150px;
background-color: #ACFE89;
display: flex;
justify-content: center;
align-items: center;
gap: 10px;
font-size: 28px;

img {
  width: 120px;
}
`