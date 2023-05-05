// CSS 
import styles from "./Project.module.css";
// ASSETS 
import emConstrucao from "../../assets/EmConstrucao.jpg"

const Project = ({projeto}) => {

  if (projeto.id % 2 != 0) {
    return (
      <div className={styles.container_project}>
        <div className={`${styles.project_description} ${styles.isRight}`}
        >
          <h1> {projeto.nome} </h1>

          <h2> Descrição: </h2>
          <p> {projeto.descricao}</p>
        </div>

        <div className={`${styles.project_img_container} ${styles.isRight}`}>
          <img
            src={emConstrucao}
            alt="Site em construção!"
          />
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container_project}>
        <div className={`${styles.project_img_container} ${styles.isLeft}`}>
          <img
            src={emConstrucao}
            alt="Site em construção!"
          />
        </div>

        <div className={`${styles.project_description} ${styles.isLeft}`}>
          <h1> {projeto.nome} </h1>

          <h2> Descrição: </h2>
          <p> {projeto.descricao}</p>
        </div>
      </div>
    );
  }
};

export default Project;
