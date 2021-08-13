import Skeleton from "./skeleton";

export default function HeroSkeleton({ ...props }) {
  return (
    <div
      className="bg-tertiary border-default-100 border-b py-6 sm:py-14"
      {...props}
    >
      <div className="container">
        <Skeleton className="bg-default-200 h-8 sm:h-10 w-6/12 sm:w-4/12" />
        <div className="mt-6">
          <Skeleton className="w-11/12 sm:w-9/12 h-5 sm:h-7" />
          <Skeleton className="w-8/12 sm:w-6/12 h-5 sm:h-7 mt-3" />
        </div>
      </div>
    </div>
  );
}
