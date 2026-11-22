import { Component } from '@angular/core';

@Component({
  selector: 'app-hi',
  // template: '<h1>hi from typescript</h1>',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.css'],
})
export class HiComponent {
  username = 'ahmed';
  imgUrl =
    'https://tse1.mm.bing.net/th/id/OIP.abp33o1oUZizvMn-vzx0nwHaFR?r=0&pid=Api&h=220&P=0';

  isDisabled = true;
  count = 0;
  icrease() {
    this.count++;
  }

  name = '';

  students = [
    { name: 'ahmed', age: 20 },
    { name: 'moe', age: 22 },
    { name: 'za', age: 32 },
  ];

  islogged = true;

  role: string = 'donor';

  isActive = true;
}
