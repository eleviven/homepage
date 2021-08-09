import Link from "next/link";
import cn from "classnames";
import Post from "./post";
import date from "../../lib/date";

export default function PostList({ data, className, ...props }) {
  return (
    <div className={cn("relative -mx-3", className)} {...props}>
      {data?.map((item, index) => (
        <Link href="/articles/[slug]" as={`/articles/${item.url}`} key={index}>
          <a>
            <Post title={item.title} date={date.format(item.date)} />
          </a>
        </Link>
      ))}
    </div>
  );
}
