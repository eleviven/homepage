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
    <section className={cn("bg-secondary border-default-100 border-b py-12", className)} {...props}>
      <div className="container flex justify-between items-center">
        <div className="w-4/6 pr-32">
          <h1 className="text-4xl font-bold font-fira-code">{title}</h1>
          {description && (
            <p className="mt-6 text-xl leading-relaxed text-default-600">
              {description}
            </p>
          )}
        </div>
        <div className="flex-1">
          <div className="border-2 border-default-100">
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
