import { Adapter } from "./adapters";
import { ApplicationEnum } from "./enums";
import { Adaptee, Target } from "./workers";

function getWorker(argument: string, value?: ApplicationEnum): Target {
  switch (value) {
    case ApplicationEnum.TARGET:
      return new Target();
    case ApplicationEnum.ADAPTEE:
      return new Adapter(new Adaptee());
    default:
      throw new Error(
        `Invalid value '${
          value ?? ""
        }' for argument '--${argument}'\n\nAvailable options:\n- ${Object.values(
          ApplicationEnum
        ).join(`\n- `)}`
      );
  }
}

export default function (argument: string, value?: string) {
  try {
    const target = getWorker(argument, value as ApplicationEnum);
    console.log(target.request());
  } catch (err: any) {
    console.log(err?.message);
  }
}
