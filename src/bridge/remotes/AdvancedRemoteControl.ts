import { IDevice } from "../platforms/interfaces";
import { RemoteControl } from "./RemoteControl";

export class AdvancedRemoteControl extends RemoteControl {
  constructor(device: IDevice) {
    super(device);
  }

  mute(): void {
    console.log("Mutando");
    this.device.setVolume(0);
  }
}
