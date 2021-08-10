import Image from "next/image";
import cn from "classnames";

export default function IntroBlock({
  title,
  description,
  image,
  className,
  ...props
}) {
  return (
    <section
      className={cn(
        "bg-tertiary border-default-100 border-b py-6 sm:py-12",
        className
      )}
      {...props}
    >
      <div className="container flex justify-between items-center flex-col sm:flex-row">
        <div className="sm:w-4/6">
          <h1 className="text-2xl sm:text-4xl font-bold font-fira-code">
            {title}
          </h1>
          {description && (
            <p className="mt-6 text-xl leading-relaxed text-default-600">
              {description}
            </p>
          )}
        </div>
        <div className="flex-1 w-full mt-6 sm:mt-0 hidden sm:block">
          <div className="border-4 border-corner">
            <Image
              src={image}
              alt={title}
              width="350"
              height="350"
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
