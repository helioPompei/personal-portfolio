// ReactGram Icons and Image
import { SiMongodb, SiNodedotjs, SiReact, SiRedux } from "react-icons/si";
import ReactGramImage from "../assets/projects/ReactGramImage.png";
// Second project Icons

export const projects = [
  {
    id: 1,
    title: "ReactGram",
    image: ReactGramImage,
    description:
      "O ReactGram é um projeto com o objetivo de criar uma plataforma para compartilhamento de fotos e interação social. Inspirado em outras redes sociais populares.",
    techs: [<SiRedux />, <SiMongodb />, <SiNodedotjs />, <SiReact />],
    link: "https://github.com/helioPompei/Projeto-Node-React-ReactGram",
  },
];

export type ProjectType = typeof projects;
