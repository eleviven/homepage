import Link from "next/link";
import cn from "classnames";
import Post from "./post";
import date from "../../lib/date";

export default function PostList({ data, className, ...props }) {
  return (
    <div className={cn("relative -mx-3", className)} {...props}>
      {data?.map((item) => (
        <Link href="/[slug]" as={`/${item.slug}`} key={item.id}>
          <a>
            <Post title={item.title} date={date.format(item.createdAt)} />
          </a>
        </Link>
      ))}
    </div>
  );
}
