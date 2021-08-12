import React from "react";
import cn from "classnames";
import Button from "../button/button";

export default function Paragraph({
  title,
  showMore,
  onClickMore,
  className,
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
    <div className={cn("paragraph", className)} {...props}>
      <h2 className="paragraph-title">{title || <CustomChildren />}</h2>
      {showMore && (
        <Button title="View all" variant="secondary" onClick={onClickMore} />
      )}
    </div>
  );
}
