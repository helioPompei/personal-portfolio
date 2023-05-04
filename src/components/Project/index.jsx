// CSS 
import styles from "./Project.module.css";
// ASSETS 
import emConstrucao from "../../assets/EmConstrucao.jpg"


const Project = ({projeto}) => {

  if (projeto.id % 2 != 0) {
    return (
      <div className={styles.container_project}>
        <div className={styles.left_side}>
          <h1> SITE EM CONSTRUÇÃO </h1>

          <h2> Descrição: </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            in omnis delectus odit assumenda ipsa ab cum adipisci soluta
            tempora, et architecto! Accusamus rem similique dolores, dolore
            animi illum possimus?
          </p>
        </div>
        <div className={styles.right_side}>
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
        <div className={styles.right_side}>
          <img
            src={emConstrucao}
            alt="Site em construção!"
          />
        </div>

        <div className={styles.left_side}>
          <h1> SITE EM CONSTRUÇÃO </h1>

          <h2> Descrição: </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            in omnis delectus odit assumenda ipsa ab cum adipisci soluta
            tempora, et architecto! Accusamus rem similique dolores, dolore
            animi illum possimus?
          </p>
        </div>
      </div>
    );
  }
};

export default Project;
