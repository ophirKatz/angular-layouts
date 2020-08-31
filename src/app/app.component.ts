import { Type } from './type';
import { Component } from '@angular/core';

interface Item {
  type: Type;
  data: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-layouts';

  items: Item[] = [
    {
      type: Type.Type1,
      data: 'Hello'
    },
    {
      type: Type.Type2,
      data: 'Hello 2'
    }
  ];

  onSelectionChanged(selectedItem: any) {
    console.log(selectedItem?.value);
  }
}
