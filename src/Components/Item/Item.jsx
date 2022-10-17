import styles from "./Item.module.scss";
import { ReactComponent as HeartIcon } from "../../../src/heart.svg";

export default function Item({ title, image, tag, onClick }) {

  const handelOnClick = () => {
    onClick && onClick();
  }

  return (
    <div className={styles.Item} onClick={handelOnClick}>
      <img src={image} />
      <h3 data-testId="cardTitle">{title}</h3>
      <p>{tag}</p>
      <HeartIcon />
    </div>
  );
}
