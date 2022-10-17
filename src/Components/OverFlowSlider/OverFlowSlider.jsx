import styles from "./OverFlowSlider.module.scss";
export default function OverFlowSlider({ children, showButton, classes }) {
  return (
    <div
      id="OverFlowSlider"
      className={`${styles.OverFlowSlider} ${classes ? classes : ""}`}
      style={{
        display: "grid",
        gap: "1rem",
        gridTemplateColumns: `repeat(${children.length},auto)`,
        overflowX: "scroll",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
