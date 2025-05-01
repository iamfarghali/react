/* eslint-disable react/prop-types */

import { useContext, useEffect } from "react";
import { ToasterContext } from "./ToasterProvider";
import styles from "./styles.module.css";

/*
  Types: info, warning, success, error
*/

function Toast({ toast }) {
  const {
    id,
    message,
    type,
    manualDismiss = false,
    dismissDuration = 8,
  } = toast;
  const { deleteToast } = useContext(ToasterContext);
  const classes = [styles.toast, styles[type]].join(" ");

  useEffect(() => {
    setTimeout(() => {
      deleteToast(id);
    }, dismissDuration * 1000);
  }, [id, deleteToast, dismissDuration]);

  return (
    <li
      className={classes}
      aria-live="polite"
      role="status"
      tabIndex={0}
      aria-atomic="true"
    >
      <p className={styles.message}>{message}</p>
      {manualDismiss && (
        <button
          className={styles.dismiss}
          onClick={() => deleteToast(id)}
          aria-label="Close notification"
        >
          &times;
        </button>
      )}
    </li>
  );
}
export default Toast;

/*
Task:
  Build a notification (toast) system 
   that displays temporary messages to users.

Requirements:

  - Notification types: Support different types such as success, 
    info, warning and error. each with distinct styling. [done]

  - Display Mechanism: Notifications should appear in a designated area 
    (e.g., top-right corner) and [stack witghout overlapping?]

  - Auto-Dismiss: Notifications should automatically disapper after
    a specified duration. [done]
  
  - Manual Dismiss: Allow user to manually close notifications via
    a close button. [done]

  - Reusability: Provide an API or context to trigger notifications
    from anywhere within the application. [?]
  
  - Accessibility: Ensure that notifications are announced by screen readers
    and are accessible via keyboard. [aria-live]
*/
