/* eslint-disable react/prop-types */
import styles from "./Button.module.css";

const Button = ({
  children,
  variant = "primary",
  size = "sm",
  onClick = () => {},
  loading = false,
  disabled = false,
  type = "button",
  loadingText = "Loading...",
}) => {
  const buttonClasses = [
    styles.btn,
    styles[variant],
    styles[size],
    (disabled || loading) && styles.disabled,
  ].join(" ");

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      {loading ? loadingText : children}
    </button>
  );
};

export default Button;
