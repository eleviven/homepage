import Link from "next/link";

export default function ProjectItem({
  title,
  description,
  icon,
  href,
  ...props
}) {
  return (
    <div className="relative" {...props}>
      <Link href={href}>
        <a className="group flex items-center text-xl">
          {icon && <span className="mr-3">{icon}</span>}
          <h3 className="underline text-default-800 font-fira-code font-semibold group-hover:text-default-500 dark:group-hover:text-primary-300">
            {title}
          </h3>
        </a>
      </Link>
      {description && (
        <p className="text-default-500 text-xl font-normal mt-2 line-clamp-3">
          {description}
        </p>
      )}
    </div>
  );
}
