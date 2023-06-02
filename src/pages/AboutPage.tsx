import styled from "styled-components"

export default function AboutPage() {
  return (
    <AboutArticle>
      <p>Re:commerce é um projeto acadêmico de brincadeira.</p>
      <p>
        O grupo que fez esse site condena as práticas reais de abuso, compra e venda de animais
        silvestres.
      </p>
      <p>
        Código fonte do site{" "}
        <a
          href='https://github.com/NomikuH8/re-commerce'
          target='_blank'
          referrerPolicy='no-referrer'
        >
          aqui
        </a>
        .
      </p>
    </AboutArticle>
  )
}

const AboutArticle = styled.article`
  padding: 1%;
`
