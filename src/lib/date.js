import dayjs from "dayjs";

class Date {
  format(date, pattern) {
    if (!pattern) {
      pattern = "MMM DD";
    }
    return dayjs(date).format(pattern);
  }
}
export default new Date();
