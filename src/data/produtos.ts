import cavaloAgnaldo from "../assets/produtos/cavaloagnaldo.jpg"

export interface ProdutoType {
  image: string
  name: string
  description: string
  price: number
  category: string
  related?: ProdutoType
}

export const produtos: ProdutoType[] = [
  {
    image: cavaloAgnaldo,
    name: "Cavalo Agnaldo",
    description: "Inhinhohohon huffff",
    price: 550,
    category: "equinos",
  },
  {
    image: "https://s3.static.brasilescola.uol.com.br/be/2020/08/lobo-guara.jpg",
    name: "Lobo guará",
    description: "Lobinhooo lobinhoo",
    price: 2299,
    category: "lobos",
  },
  {
    image: "https://static.mundoeducacao.uol.com.br/mundoeducacao/2019/10/1-coala.jpg",
    name: "Coala",
    description: "Melhores amigos das crianças, são mansos, carinhosos e tudo de bom!",
    price: 8899,
    category: "diversos",
  },
  {
    image:
      "https://static.preparaenem.com/2023/03/panda-vermelho-deitado-no-galho-de-uma-arvore.jpg",
    name: "Panda vermelho",
    description: "Tão fofinho, perfeito para pessoas que possuem um quintal grande",
    price: 13399,
    category: "diversos",
  },
  {
    image: "https://img.quizur.com/f/img62e4630c370c87.35921237.jpg",
    name: "Capivara Filó",
    description: "Capivarinha de segunda mão, mansa e bem cuidada.",
    price: 800,
    category: "diversos",
  },
  {
    image:
      "https://i0.wp.com/blog.bioparquedorio.com.br/wp-content/uploads/2020/11/Abu_filhote_macaco-prego-do-peito-amarelo-BioParquedoRio2.jpg",
    name: "Magago",
    description: "Ele te-te-tem pr-problemas de dicção, ma-mas é um bom magago",
    price: 400,
    category: "primatas",
  },
  {
    image:
      "https://uploads.metropoles.com/wp-content/uploads/2021/04/24061836/Ararinha-azul-9-1024x683.jpg",
    name: "Ararinha Azul",
    description: "Arara que ficou um tempo extinta, mas agora está voltando com tudo",
    price: 26000,
    category: "aves",
  },
  {
    image:
      "https://img.freepik.com/fotos-gratis/close-de-um-pato-perto-de-um-lago-em-um-zoologico_181624-51048.jpg",
    name: "Pato",
    description: "Quack",
    price: 200,
    category: "aves",
  },
  {
    image: "https://static.todamateria.com.br/upload/ar/ar/ararajubaguarubaguarouba-cke.jpg",
    name: "Ararajuba",
    description: "Arara colorida muito bonita!",
    price: 400,
    category: "aves",
  },
  {
    image: "https://static.todamateria.com.br/upload/bo/to/botocorderosa-0-cke.jpg",
    name: "Boto cor-de-rosa",
    description: "Animal diferenciado? Nós temos também!",
    price: 800,
    category: "peixes",
  },
  {
    image: "https://static.todamateria.com.br/upload/ce/rv/cervodopantanal-cke.jpg",
    name: "Cervo-do-pantanal",
    description: "Perfeito para os caçadores!",
    price: 500,
    category: "diversos",
  },
  {
    image: "https://static.todamateria.com.br/upload/ja/cu/jacutinga-cke.jpg",
    name: "Jacutinga",
    description: "Essa vem direto da Mata Atlântica para seu quintal!",
    price: 200,
    category: "aves",
  },
  {
    image: "https://static.todamateria.com.br/upload/la/ga/lagartixadaareia-cke.jpg",
    name: "Lagartixa-da-areia",
    description: "Largato",
    price: 50,
    category: "diversos",
  },
  {
    image: "https://static.todamateria.com.br/upload/mi/co/micoleaodourado-cke.jpg",
    name: "Mico-leão-dourado",
    description: "Macaquinho sapeca bom para crianças.",
    price: 200,
    category: "primatas",
  },
  {
    image: "https://static.todamateria.com.br/upload/mu/ri/muriquidonorte-cke.jpg",
    name: "Muriqui-do-norte",
    description: "Esse vem direto da Mata-Atlântica",
    price: 300,
    category: "primatas",
  },
  {
    image: "https://static.todamateria.com.br/upload/on/ca/oncapintadaatual.jpg",
    name: "Onça-pintada domesticada",
    description: "Tão carinhosa! Se prepare para um abraço de urso.",
    price: 9999,
    category: "felinos",
  },
  {
    image: "https://static.todamateria.com.br/upload/sa/po/sapofolhaatualizado-cke.jpg",
    name: "Sapo-folha",
    description: "Sapo que parece uma folha.",
    price: 150,
    category: "anfibios",
  },
  {
    image: "",
    name: "",
    description: "",
    price: 0,
    category: "",
  },
  {
    image: "",
    name: "",
    description: "",
    price: 0,
    category: "",
  },
  {
    image: "",
    name: "",
    description: "",
    price: 0,
    category: "",
  },
]
