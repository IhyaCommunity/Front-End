import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'CustomPipe'
})

export class CustomPipe implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) return null;

        let max = 1000000;
        let Limit = (limit) ? limit : 100;
        console.log(limit);
        return value.substr(0, Limit);
        
    }
}