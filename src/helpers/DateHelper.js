class DateHelper {
  static order(dates = []) {
    return dates.sort(function (a, b) {
      return a - b;
    });
  }
}

export default DateHelper;
