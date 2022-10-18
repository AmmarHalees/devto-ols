import { useEffect } from "react";
import styles from "./SnackBar.module.scss";

export default function SnackBar({ open, data, onClose }) {

  useEffect(() => {
    setTimeout(() => {
      onClose && onClose()
    }, 2000);
  }, [open])
  

const content = (
<div data-testid="snackbarWrapper" className={styles.SnackBarContainer}>
  <div className={styles.SnackBar}>
    <p className={styles.content}>{data}</p>
  </div>
</div>);

  return (
    <>
    { open ? content : null}
    </>
  );
}
