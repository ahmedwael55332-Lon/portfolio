import { Component } from '@angular/core';

@Component({
  selector: 'app-educ',
  templateUrl: './educ.component.html',
  styleUrls: ['./educ.component.css'],
})
export class EducComponent {
  onsumbit(form: any) {
    console.log(form.value);
  }
}
