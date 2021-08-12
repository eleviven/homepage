import { Button } from "..";
import date from "../../lib/date";

export default function Hero({ title, description, author, createdAt, tags }) {
  return (
    <section className="bg-tertiary border-default-100 border-b py-6 sm:py-14">
      <div className="container">
        <h1 className="text-default text-2xl sm:text-4xl font-bold font-dm-mone">
          {title}
        </h1>
        {author && (
          <div className="text-default-500 mt-4 sm:mt-6">
            By <span className="text-default-800">{author}</span> on{" "}
            {date.format(createdAt, "MMMM DD, YYYY")}
          </div>
        )}
        {tags && (
          <div className="mt-2.5">
            {tags.map((item, index) => (
              <Button
                key={index}
                title={item}
                variant="warning"
                appearance="ghost"
                size="small"
                className="mr-2"
              />
            ))}
          </div>
        )}
        {description && (
          <p className="text-default-600 text-xl sm:text-2xl mt-6 mb-0">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
