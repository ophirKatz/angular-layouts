import { Type } from './../type';
import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-type-template-selector',
  templateUrl: './type-template-selector.component.html',
  styleUrls: ['./type-template-selector.component.css']
})
export class TemplateSelectorComponent implements OnInit {

  @Input() type1Template: TemplateRef<any>[];
  @Input() type2Template: TemplateRef<any>;

  @Input() type: Type;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

  switchOnType(): TemplateRef<any> {
    switch (this.type) {
      case Type.Type1:
        return this.type1Template[1];
        case Type.Type2:
          return this.type2Template;
    }
  }

}
