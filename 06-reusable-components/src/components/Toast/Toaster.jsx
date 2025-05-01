/* eslint-disable react/prop-types */

import { createPortal } from "react-dom";
import { useToast } from "./useToast";

import styles from "./styles.module.css";
import Toast from "./Toast";

/*
  Positions: 
    top-left, top-center, top-right, 
    bottom-left, bottom-center, bottom-right, 
*/

function Toaster({ position = "bottom-left" }) {
  const { toasts } = useToast();

  const classes = [styles["toast-portal"], [styles[position]]].join(" ");

  // In case of no notifications to display
  if (!toasts.length) return <></>;

  return createPortal(
    <ul className={classes}>
      {toasts.map((t, idx) => (
        <Toast key={idx} toast={t} />
      ))}
    </ul>,
    document.body
  );
}

export default Toaster;
