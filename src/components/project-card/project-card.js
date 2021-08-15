import Image from "next/image";
import cn from "classnames";
import Paragraph from "../paragrah/paragraph";
import Button from "../button/button";
import styles from "./project-card.module.css";

export default function ProjectCard({
  title,
  description,
  technologies,
  year,
  actions,
  thumbnail,
  className,
  ...props
}) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {thumbnail?.url && (
        <figure className={styles.thumbnail}>
          <Image
            src={thumbnail.url}
            alt={thumbnail.title}
            layout="responsive"
            {...thumbnail.details.image}
          />
        </figure>
      )}
      <div className={styles.content}>
        <Paragraph title={title} border={false} />
        <div>
          {description && (
            <h4 className="text-default text-xl mb-1">{description}</h4>
          )}
          <small className="text-base">
            <i>
              {year} — {technologies?.join(", ")}
            </i>
          </small>
        </div>
        <div className={styles.actions}>
          {actions.map((action, index) => (
            <a key={index} href={action.url} target="_blank">
              <Button
                title={action.title}
                variant="warning"
                appearance="ghost"
                size="large"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
