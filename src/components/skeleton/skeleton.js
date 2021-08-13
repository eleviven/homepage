import { PureComponent, Fragment } from "react";
import cn from "classnames";
import styles from "./skeleton.module.css";

class Skeleton extends PureComponent {
  static Hero;
  static Article;

  render() {
    const { className, ...props } = this.props;
    return (
      <Fragment>
        <div className={cn(styles.skeleton, className)} {...props} />
      </Fragment>
    );
  }
}

export default Skeleton;
