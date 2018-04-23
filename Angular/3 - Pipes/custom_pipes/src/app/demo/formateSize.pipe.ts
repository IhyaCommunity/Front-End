import { Pipe, PipeTransform } from '@angular/core';

const numberSize = ['M', 'B'];
const numberSizeLong = ['Bytes', 'Kilobytes', 'Megabytes', 'Gigabytes', 'Pettabytes', 'Exabytes', 'Zettabytes', 'Yottabytes'];

@Pipe({
  name: 'FormatSize'
})
export class FormatSize implements PipeTransform {
  transform(sizeInBytes: number, longForm: boolean): string {
    const units = longForm
      ? numberSizeLong
      : numberSize;

    let power = Math.round(Math.log(sizeInBytes) / Math.log(1024));
    power = Math.min(power, units.length - 1);

    const size = sizeInBytes / Math.pow(1024, power); // size in new units
    const formattedSize = Math.round(size * 100) / 100; // keep up to 2 decimals
    const unit = units[power];

    return `${formattedSize} ${unit}`;
  }
}