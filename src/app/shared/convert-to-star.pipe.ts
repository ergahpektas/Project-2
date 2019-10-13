import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToStart'
})

export class ConvertToStarPipe implements PipeTransform {
    // transform(inputOfMethod: string): string {
    //     let first6 = inputOfMethod.substr(0,6);
    //     let second4 =inputOfMethod.substr (6,10);
    //     let new6 = first6.replace(/./g, '*');
    //     let new7 = new6 + second4;
    //     console.log('this is the first6 variable: ' + first6);
    //     console.log('this is the second4 variable: ' + second4);
    //     console.log('new 6 is :' + new6);
    //     console.log('last : '+ new7);
    //     return new7;
    // }
//    This is Dr Mazar
    transform(inputOfMethod: string): string {
        return '******'+inputOfMethod.substr(6,10);
    }

}