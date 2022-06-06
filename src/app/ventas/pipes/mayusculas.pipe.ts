import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform {

    transform(valor: string): string {
        return 'HOLA MUNDO!';
    }

}