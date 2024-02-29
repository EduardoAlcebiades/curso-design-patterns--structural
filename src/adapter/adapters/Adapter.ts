import { Adaptee, Target } from "../workers";

export class Adapter extends Target {
  constructor(private adaptee: Adaptee) {
    super();
  }

  request(): string {
    const result = this.adaptee.specificRequest().split("").reverse().join("");
    return `Adapter: (TRANSLATED) ${result}`;
  }
}
