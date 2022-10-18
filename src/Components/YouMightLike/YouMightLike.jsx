import styles from "./YouMightLike.module.scss";
import OverFlowSlider from "../OverFlowSlider/OverFlowSlider";
import Item from "../Item/Item";

export default function YouMightLike({ title, data, onItemClick }) {
  return (
    <div className={styles.YouMightLike}>
      <h2>{title}</h2>
      <OverFlowSlider showButton={false} classes="">
        {data.map((x) => {
          return <Item title={x.title} image={x.image} tag={x.tag} onClick={onItemClick} />;
        })}
      </OverFlowSlider>
    </div>
  );
}
