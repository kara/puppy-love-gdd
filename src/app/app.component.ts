import {Component, ViewEncapsulation, trigger, transition, style, animate, state} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('fadeIn', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0}),
        animate('750ms ease-out')
      ])
    ])
  ]
})
export class AppComponent {
  title = 'app works!';


  dogs = [
    {name: 'Mal', img: 'Mal.png'},
    {name: 'Porter', img: 'Porter.png'},
    {name: 'Koby', img: 'Koby.png'},
    {name: 'Razzle', img: 'Razzle.png'},
    {name: 'Molly', img: 'Molly.png'},
    {name: 'Husi', img: 'Husi.png'},
  ];

}
