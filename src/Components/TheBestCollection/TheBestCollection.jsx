import styles from "./TheBestCollection.module.scss";
import OverFlowSlider from "../OverFlowSlider/OverFlowSlider";
import Item from "../Item/Item";

export default function TheBestCollection({ title, data, onItemClick }) {
  return (
    <div className={styles.TheBestCollection}>
      <h2>{title}</h2>
      <OverFlowSlider showButton={false} classes="">
        {data.map((x) => {
          return <img src={x.src} alt={x.title} />;
        })}
      </OverFlowSlider>
    </div>
  );
}
