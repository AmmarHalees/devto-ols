import { useState } from "react";

import Card from "../Components/Card/Card";
import SnackBar from "../Components/SnackBar/SnackBar";
import YouMightLike from "../Components/YouMightLike/YouMightLike";
import styles from "./Home.module.scss";
import data from "../data.json";
import TheBestCollection from "../Components/TheBestCollection/TheBestCollection";

const snackBarData = "Welcome to the App";
export default function Home() {
  const [isSnackBarVisible, setIsSnackBarVisible] = useState(false);

  const showSnackBar = () => {
    setIsSnackBarVisible(true);
  };

  const onItemClick = () => {
    showSnackBar();
  };

  return (
    <div className={styles.Home}>
      <div className={styles.Container}>
        <Card title="Summer Sale" />
        <YouMightLike
          data-testid="youMightLikeWrapper"
          title="You might also like"
          data={data}
          onItemClick={onItemClick}
        />
        <YouMightLike title="Top sellers" data={data} />
        <Card title="Limitied Time Only" var="var1" />
        <TheBestCollection
          title="Our top picks"
          data={[
            {
              id: 1,
              title: "flash",
              src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1320&q=80",
            },
            {
              id: 2,
              title: "silk",
              src: "https://images.unsplash.com/photo-1524041255072-7da0525d6b34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
            },
            {
              id: 3,
              title: "flash",
              src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            },
            {
              id: 4,
              title: "flash",
              src: "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            },
            {
              id: 5,
              title: "flash",
              src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
            },
          ]}
        />
      </div>
      <SnackBar
        open={isSnackBarVisible}
        data={snackBarData}
        onClose={() => setIsSnackBarVisible(false)}
      />
    </div>
  );
}
