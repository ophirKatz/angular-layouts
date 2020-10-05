import { SubsService } from './../subs.service';
import { GetService } from './../get.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item$: Observable<string>;

  input: string = '0';

  constructor(
    private getService: GetService,
    private subService: SubsService
  ) { }

  ngOnInit(): void {
    this.getItem();
  }

  getItem(): void {
    console.log('requesting item ', this.input);
    this.item$ = null;
    this.item$ = this.getService.getItem(this.input);
  }
}
