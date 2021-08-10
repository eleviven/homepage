import Button from "../button/button";

export default function Paragraph({ title, showMore, onClickMore, ...props }) {
  return (
    <div
      className="flex items-center justify-between border-b-[3px] border-default dark:border-secondary-light mb-6 pb-2.5"
      {...props}
    >
      <h2 className="text-default dark:text-primary-300 text-xl sm:text-3xl font-fira-code font-semibold">
        {title}
      </h2>
      {showMore && (
        <Button title="View all" variant="secondary" onClick={onClickMore} />
      )}
    </div>
  );
}
