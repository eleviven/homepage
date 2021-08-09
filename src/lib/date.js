import dayjs from "dayjs";

class Date {
  format(date) {
    return dayjs(date).format("MMM DD");
  }
}
export default new Date();
