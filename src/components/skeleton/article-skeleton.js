import Skeleton from "./skeleton";

export default function ArticleSkeleton({ ...props }) {
  const list = [
    ["60%", "90%", "80%"],
    ["50%", "70%"],
    ["80%", "70%", "90%"],
  ];
  return (
    <div className="py-6 sm:py-14" {...props}>
      <div className="container">
        {list.map((item, index) => (
          <div key={index} className="pb-6">
            {item.map((width, ix) => (
              <Skeleton key={ix} style={{ width }} className="mb-3" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
