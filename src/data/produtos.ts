interface ProdutoType {
  image: string
  name: string
  description: string
  price: string
  category: string
  related?: ProdutoType
}

export const produtos: ProdutoType[] = [
  {
    image: "",
    name: "Cavalo Agnaldo",
    description: "Inhinhohohon huffff",
    price: "R$550.00",
    category: "equinos",
  },
]
