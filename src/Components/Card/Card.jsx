import styles from "./Card.module.scss";

export default function Card({ title }) {
  return (
    <div className={styles.Card}>
      <h2>{title}</h2>
    </div>
  );
}
