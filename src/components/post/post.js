import { PureComponent } from "react";
import cn from "classnames";

export default class Post extends PureComponent {
  static List;
  render() {
    const { title, date, className, ...props } = this.props;
    return (
      <div
        className={cn("relative py-3 px-4 hover:bg-tertiary", className)}
        {...props}
      >
        <div className="flex sm:items-center flex-col sm:flex-row">
          {date && (
            <time className="flex-shrink-0 text-default-500 font-fira-code w-24 mb-2 sm:mb-0">
              {date}
            </time>
          )}
          <h3 className="text-default-900 font-medium text-base sm:text-xl">
            {title}
          </h3>
        </div>
      </div>
    );
  }
}
