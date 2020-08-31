import { Component, Input, TemplateRef } from '@angular/core';

import { StatefulTemplateSelectorComponent } from '../stateful-template-selector/stateful-template-selector.component';

interface R {
  name: string;
  type: 0 | 1;
}

@Component({
  selector: 'app-type-template-selector',
  templateUrl: './../stateful-template-selector/stateful-template-selector.component.html',
  styleUrls: ['./type-template-selector.component.css']
})
export class TemplateSelectorComponent extends StatefulTemplateSelectorComponent<R> {
  
  @Input() type0Template: TemplateRef<any>;
  @Input() type1Template: TemplateRef<any>;

  constructor() {
    super();
  }

  selectTemplate(): TemplateRef<any> {
    switch (this.state.type) {
      case 0: return this.type0Template;
      case 1: return this.type1Template;
    }
  }

}
