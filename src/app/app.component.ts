import { GetService } from './get.service';
import { Type } from './type';
import { Component } from '@angular/core';
import { ConfigService } from './config.service';

interface Item {
  type: 0 | 1;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private configService: ConfigService,
    private getService: GetService) {
    this.title = this.configService.someProp;
  }

  title: string;

  items: Item[] = [
    {
      type: Type.Type1,
      name: 'Hello'
    },
    {
      type: Type.Type2,
      name: 'Hello 2'
    }
  ];

  onSelectionChanged(selectedItem: any) {
    console.log(selectedItem?.value);
  }
}
