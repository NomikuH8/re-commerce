import equinoImage from "../assets/equino.jpeg"

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
    name: "Lupinos",
    link: "/categorias/lupinos",
  },
  {
    name: "Vulpinos",
    link: "/categorias/vulpinos",
  },
]
