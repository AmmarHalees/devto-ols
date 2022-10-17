import styles from "./Item.module.scss";
import { ReactComponent as HeartIcon } from "../../../src/heart.svg";

export default function Item({ title, image, tag }) {
  return (
    <div className={styles.Item}>
      <img src={image} />
      <h3>{title}</h3>
      <p>{tag}</p>
      <HeartIcon />
    </div>
  );
}
