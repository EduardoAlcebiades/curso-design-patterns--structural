import { IDevice } from "./interfaces";

export class Radio implements IDevice {
  private _isEnabled: boolean = false;
  private volume: number = 50;
  private frequency: number = 98.9;

  isEnabled(): boolean {
    return this._isEnabled;
  }

  enable(): void {
    console.log("Radio: ligando...");
    this._isEnabled = true;
  }

  disable(): void {
    console.log("Radio: desligando...");
    this._isEnabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }

  getChannel(): number {
    return this.frequency;
  }

  setChannel(channel: number): void {
    this.frequency = channel / 100;
  }
}
