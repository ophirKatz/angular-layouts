import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  templateUrl: './stateful-template-selector.component.html',
  styleUrls: ['./stateful-template-selector.component.css']
})
export abstract class StatefulTemplateSelectorComponent<TState> {

  @Input() state: TState;

  constructor() { }

  abstract selectTemplate(): TemplateRef<any>;

}
