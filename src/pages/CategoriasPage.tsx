import equinoImage from "../assets/equino.jpeg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface CategoriaType {
  image?: string;
  name: string;
  link: string;
}

const categorias: CategoriaType[] = [
  {
    image: equinoImage,
    name: "Equinos",
    link: "/categorias/equinos",
  },
  {
    name: "Lupinos",
    link: "/categorias/lupinos",
  },
  {
    name: "Vulpinos",
    link: "/categorias/vulpinos",
  },
];

export default function CategoriasPage() {
  const [filtro, setFiltro] = useState("");
  const [catFiltrado, setCatFiltrado] = useState(categorias);

  useEffect(() => {
    if (filtro)
      setCatFiltrado(
        categorias.filter(
          (val) => val.name.toLowerCase().search(filtro.toLowerCase()) >= 0
        )
      );
    if (!filtro) setCatFiltrado(categorias);
  }, [filtro]);

  return (
    <>
      <FiltroDiv>
      <input
        type="text"
        placeholder="Filtrar..."
        onChange={(e) => setFiltro(e.target.value)}
      />
      </FiltroDiv>

      <CardDiv>
        {catFiltrado.map((val, idx) => (
          <Card>
            <Link key={idx} to={val.link}>
              <div>
                <img src={val.image} alt={val.name} />
              </div>
              <div className="spans">
                <span>{val.name}</span>
              </div>
            </Link>
          </Card>
        ))}
      </CardDiv>
    </>
  );
}

const FiltroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;

  input {
    font-size: larger;
    border-radius: 20px;
    padding: 10px;
    border: 2px dashed #464646;
    outline: 0;
  }
`

const CardDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  margin: 1%;
  width: 48%;
  height: 200px;
  border-radius: 20px;
  display: flex;
  box-shadow: 0 5px 10px #bdbdbd;
  justify-content: space-between;
  user-select: none;

  > a {
    display: flex;
    flex: 1 1 auto;
    border-radius: 20px;
    text-decoration: none;
    color: #292929;
  }

  > a > div > img {
    border-radius: 20px;
    height: 200px;
    width: 230px;
  }

  .spans {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    font-size: 38px;
    flex: 1 1 auto;
  }
`;
