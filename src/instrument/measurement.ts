import { Statistic } from "./statistic";

export class Measurement {
  constructor(
    private readonly f: () => number,
    public readonly statistic: Statistic
  ) {}

  get value() {
    return this.f();
  }
}
