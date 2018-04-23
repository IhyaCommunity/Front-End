import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'FirstLetter'
})

export class FirstLetter implements PipeTransform {
    transform(value: string, limit?: number) {
        if (!value) return null;

        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();        
    }
}