import React from "react";
import cn from "classnames";
import Button from "../button/button";
import { renderComponent } from "../../utils";
import styles from "./paragraph.module.css";

export default function Paragraph({
  title,
  showMore,
  border,
  className,
  accessoryRight,
  onClickMore,
  children,
  ...props
}) {
  const CustomChildren = () =>
    React.Children.map(children, (element) => {
      if (typeof element === "object") {
        const id = element.props.href?.replace("#", "");
        return React.cloneElement(element, { id });
      } else {
        return element;
      }
    });

  return (
    <div
      className={cn(
        styles.paragraph,
        border && styles.paragraph_border,
        className
      )}
      {...props}
    >
      <h2
        className={cn(
          styles.paragraph_title,
          "text-default dark:text-primary-300"
        )}
      >
        {title || <CustomChildren />}
      </h2>
      {showMore && (
        <Button title="View all" variant="secondary" onClick={onClickMore} />
      )}
      {accessoryRight && renderComponent(accessoryRight)}
    </div>
  );
}

Paragraph.defaultProps = {
  border: true,
};
