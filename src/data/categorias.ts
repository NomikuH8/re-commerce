import capybaraImage from "../assets/capybara.jpg"
import primataImage from "../assets/primata.jpg"
import guepardImage from "../assets/guepard.jpg"
import equinoImage from "../assets/equino.jpeg"
import snakeImage from "../assets/snake.jpg"
import araraImage from "../assets/arara.jpg"
import raposaImage from "../assets/fox.jpg"
import loboImage from "../assets/wolf.jpg"
import fishImage from "../assets/fish.jpg"
import frogImage from "../assets/frog.jpg"

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
