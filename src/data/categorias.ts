import capybaraImage from "../assets/categorias/capybara.jpg"
import primataImage from "../assets/categorias/primata.jpg"
import guepardImage from "../assets/categorias/guepard.jpg"
import equinoImage from "../assets/categorias/equino.jpeg"
import snakeImage from "../assets/categorias/snake.jpg"
import araraImage from "../assets/categorias/arara.jpg"
import raposaImage from "../assets/categorias/fox.jpg"
import loboImage from "../assets/categorias/wolf.jpg"
import fishImage from "../assets/categorias/fish.jpg"
import frogImage from "../assets/categorias/frog.jpg"

interface CategoriaType {
  image?: string
  name: string
  link: string
}

export const categorias: CategoriaType[] = [
  {
    image: equinoImage,
    name: "Equinos",
    link: "/categorias/equinos",
  },
  {
    image: loboImage,
    name: "Lobos",
    link: "/categorias/lobos",
  },
  {
    image: raposaImage,
    name: "Raposas",
    link: "/categorias/raposas",
  },
  {
    image: fishImage,
    name: "Peixes",
    link: "/categorias/peixes",
  },
  {
    image: snakeImage,
    name: "Cobras",
    link: "/categorias/cobras",
  },
  {
    image: frogImage,
    name: "Anfíbios",
    link: "/categorias/anfibios",
  },
  {
    image: guepardImage,
    name: "Felinos",
    link: "/categorias/felinos",
  },
  {
    image: araraImage,
    name: "Aves",
    link: "/categorias/aves",
  },
  {
    image: primataImage,
    name: "Primatas",
    link: "/categorias/primatas",
  },
  {
    image: capybaraImage,
    name: "Diversos",
    link: "/categorias/diversos",
  },
]
