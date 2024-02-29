import { IDevice } from "./interfaces";

export class Tv implements IDevice {
  private _isEnabled: boolean = false;
  private volume: number = 50;
  private channel: number = 1;

  isEnabled(): boolean {
    return this._isEnabled;
  }

  enable(): void {
    console.log("TV: ligando...");
    this._isEnabled = true;
  }

  disable(): void {
    console.log("TV: desligando...");
    this._isEnabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}
