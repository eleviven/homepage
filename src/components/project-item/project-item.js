import Link from "next/link";

export default function ProjectItem({
  title,
  description,
  icon,
  href,
  target,
  ...props
}) {
  return (
    <div className="relative" {...props}>
      <Link href={href}>
        <a className="group flex items-center" target={target} rel="noopener noreferrer">
          {icon && <span className="mr-3 text-xl">{icon}</span>}
          <h3 className="underline text-default-800 font-dm-mone font-semibold text-xl group-hover:text-default-500 dark:group-hover:text-primary-300">
            {title}
          </h3>
        </a>
      </Link>
      {description && (
        <p className="text-default-500 text-xl font-normal mt-2 mb-0 line-clamp-3">
          {description}
        </p>
      )}
    </div>
  );
}

ProjectItem.defaultProps = {
  target: "_self",
};
