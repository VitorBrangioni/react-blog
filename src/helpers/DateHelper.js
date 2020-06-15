import moment from "moment";

class DateHelper {
  static formatDatetime(datetime, format = "YYYY-MM-DD") {
    return moment(datetime).format(format);
  }
}

export default DateHelper;
