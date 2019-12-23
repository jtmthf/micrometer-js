export class Statistic {
  static TOTAL = new Statistic("total");
  static TOTAL_TIME = new Statistic("total");
  static COUNT = new Statistic("count");
  static MAX = new Statistic("max");
  static VALUE = new Statistic("max");
  static UNKNOWN = new Statistic("unknown");
  static ACTIVE_TASKS = new Statistic("active");
  static DURATION = new Statistic("duration");

  private constructor(public readonly tagValueRepresentation: string) {}
}
