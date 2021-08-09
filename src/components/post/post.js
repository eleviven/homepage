import { PureComponent } from "react";
import cn from "classnames";

export default class Post extends PureComponent {
  static List;
  render() {
    const { title, date, className, ...props } = this.props;
    return (
      <div className={cn("relative py-3 px-4 hover:bg-secondary-light", className)} {...props}>
        <div className="flex items-center">
          {date && <time className="text-default-600 font-fira-code w-24">{date}</time>}
          <h3 className="font-medium text-xl">{title}</h3>
        </div>
      </div>
    );
  }
}
