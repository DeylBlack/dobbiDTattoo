import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'customDate',
})
export class CustomDatePipe implements PipeTransform {
    public transform(value: string | null): string {
        if (!value) return '';

        return value.replace(/\//g, '.');
    }
}