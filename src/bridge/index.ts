import { ApplicationEnum } from "./enums";
import { Radio, Tv } from "./platforms";
import { IDevice } from "./platforms/interfaces";
import { AdvancedRemoteControl, RemoteControl } from "./remotes";

function getPlatform(argument: string, value?: ApplicationEnum): IDevice {
  switch (value) {
    case ApplicationEnum.TV:
      return new Tv();
    case ApplicationEnum.RADIO:
      return new Radio();
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
    const platform = getPlatform(argument, value as ApplicationEnum);
    const remote = new RemoteControl(platform);
    const advancedRemote = new AdvancedRemoteControl(platform);
    remote.togglePower();
    remote.volumeDown();
    advancedRemote.togglePower();
    advancedRemote.mute();
  } catch (err: any) {
    console.log(err?.message);
  }
}
