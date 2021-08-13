import React from "react";
import cn from "classnames";
import { renderComponent } from "../../utils";
import styles from "./button.module.css";

export default function Button({
  title,
  variant,
  size,
  appearance,
  accessoryLeft,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        styles.button,
        styles[`variant-${variant}`],
        styles[`appearance-${appearance}`],
        styles[`size-${size}`],
        className
      )}
      {...props}
    >
      {accessoryLeft && (
        <span className="mr-2">{renderComponent(accessoryLeft)}</span>
      )}
      {title ? title : children}
    </button>
  );
}

Button.defaultProps = {
  variant: "primary",
  appearance: "fill",
  size: "medium",
};
