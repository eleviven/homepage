import Link from "next/link";
import cn from "classnames";
import Post from "./post";
import Paragraph from "../paragrah/paragraph";
import date from "../../lib/date";

const PostItem = ({ post }) => {
  return post ? (
    <Link href="/[slug]" as={`/${post.slug}`} key={post.id}>
      <a>
        <Post title={post.title} date={date.format(post.createdAt)} />
      </a>
    </Link>
  ) : null;
};

export default function PostList({ data, isGroup, className, ...props }) {
  if (isGroup) {
    data = data?.reduce((acc, i) => {
      const createdAt = new Date(i.createdAt).getUTCFullYear();
      if (!acc[createdAt]) {
        acc[createdAt] = { createdAt, data: [] };
      }
      acc[createdAt].data.push(i);
      return acc;
    }, {});
    data = Object.values(data);
  }
  return !isGroup ? (
    <div className={cn("relative -mx-3", className)} {...props}>
      {data?.map((item) => (
        <PostItem key={item.id} post={item} />
      ))}
    </div>
  ) : (
    data?.map((group, index) => (
      <div key={index}>
        <Paragraph title={group.createdAt} />
        <div className={cn("relative -mx-3", className)} {...props}>
          {group.data?.map((item) => (
            <PostItem key={item.id} post={item} />
          ))}
        </div>
      </div>
    ))
  );
}
