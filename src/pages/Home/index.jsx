// CSS
import styles from "./Home.module.css";
// DATA
import data from "../../data/data";
// COMPONENTS
import Project from "../../components/Project";
import ButtonCategory from "../../components/ButtonCategory";
// HOOKS
import { useEffect, useState } from "react";

console.log(data);

const Home = () => {
  const [categorias, setCategorias] = useState([]);
  const [projetos, setProjetos] = useState(data);
  const [projetosFiltrados, setProjetosFiltrados] = useState(data);

  useEffect(() => {
    setCategorias([{ nome: "autoral" }, { nome: "udemy" }, { nome: "alura" }]);
  }, []);

  const filtrarCategoria = (categoria) => {
    const projetosFiltrados1 = projetos.filter(
      (projeto) => projeto.categoria === categoria
    );
    setProjetosFiltrados(projetosFiltrados1);
  };

  return (
    <div className={styles.home_container}>
      <div className={styles.filter}>
        {categorias.map((category) => (
          <ButtonCategory
            key={category.nome}
            category={category.nome}
            filterCategory={filtrarCategoria}
          />
        ))}
      </div>

      <div className={styles.projects}>
        {projetosFiltrados.map((projetoFiltrado) => (
          <Project key={projetoFiltrado.id} projeto={projetoFiltrado}/>
        ))}
      </div>
    </div>
  );
};

export default Home;
