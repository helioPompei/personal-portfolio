import styles from "./ButtonCategory.module.css";

const ButtonCategory = ({ filterCategory, category }) => {
  return (
    <button
      className={styles.buttonCategory}
      onClick={() => filterCategory(category)}
    >
      {category}
    </button>
  );
};

export default ButtonCategory;
