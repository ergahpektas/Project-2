import {Component} from '@angular/core'
@Component ({
  selector: 'pm-root',
  template: `
    <div><h1>{{unvan}}</h1>
    <div>My First Component</div>
    </div>
  
  `
})
export class AppComponent {
  unvan: string ='Acme Product Management';

}