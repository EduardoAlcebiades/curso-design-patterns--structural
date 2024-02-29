import { IDevice } from "../platforms/interfaces";

export class RemoteControl {
  constructor(protected device: IDevice) {}

  togglePower(): void {
    if (this.device.isEnabled()) {
      this.device.disable();
    } else {
      this.device.enable();
    }
  }

  volumeDown(): void {
    console.log("Diminuindo o volume");
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    console.log("Aumentando o volume");
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    console.log("Avançando o canal");
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    console.log("Voltando o canal");
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
