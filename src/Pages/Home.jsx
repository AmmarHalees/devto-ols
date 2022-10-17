import Card from "../Components/Card/Card";
import YouMightLike from "../Components/YouMightLike/YouMightLike";
import styles from "./Home.module.scss";
import data from "../data.json";
export default function Home() {
  return (
    <div className={styles.Home}>
      <div className={styles.Container}>
        <Card title="Summer Sale" />
        <YouMightLike title="You might also like" data={data} />
        <YouMightLike title="Top sellers" data={data} />
        <Card title="Limitied Time Only" var="var1" />
        <YouMightLike title="Near You" data={data} />
      </div>
    </div>
  );
}
