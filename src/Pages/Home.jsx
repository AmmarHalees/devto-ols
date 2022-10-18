import { useState } from "react";

import Card from "../Components/Card/Card";
import SnackBar from "../Components/SnackBar/SnackBar";
import YouMightLike from "../Components/YouMightLike/YouMightLike";
import styles from "./Home.module.scss";
import data from "../data.json";

const snackBarData = 'Welcome to the App'
export default function Home() {
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false)

  const showSnackBar = () => {
    setIsSnackBarVisible(true)
  }

  const onItemClick = () => {
    showSnackBar()
  }

  return (
    <div className={styles.Home}>
      <div className={styles.Container}>
        <Card title="Summer Sale" />
        <YouMightLike data-testid="youMightLikeWrapper" title="You might also like" data={data} onItemClick={onItemClick} />
        <YouMightLike title="Top sellers" data={data} />
        <Card title="Limitied Time Only" var="var1" />
        <YouMightLike title="Near You" data={data} />
        <div data-testid="footer" className={styles.footer}>
          Footer
        </div>
      </div>
      <SnackBar 
        open={isSnackBarVisible} 
        data={snackBarData} 
        onClose={()=> setIsSnackBarVisible(false)}
      />
    </div>
  );
}
