// ReactGram Icons and Image
import reactGramImage from "../assets/ReactGramImage.png";
import { SiRedux, SiMongodb, SiNodedotjs, SiReact } from "react-icons/si";
// Second project Icons

export const projects = [
  {
    id: 1,
    title: "ReactGram",
    image: reactGramImage,
    description:
      "O ReactGram é um projeto de desenvolvimento de uma aplicação web baseada em React, com o objetivo de criar uma plataforma para compartilhamento de fotos e interação social. Inspirado em outras redes sociais populares, o ReactGram visa fornecer aos usuários uma experiência envolvente e intuitiva.",
    techs: [<SiRedux />, <SiMongodb />, <SiNodedotjs />, <SiReact />],
    link: "https://github.com/helioPompei/Projeto-Node-React-ReactGram",
  },
];

export type ProjectType = typeof projects;
