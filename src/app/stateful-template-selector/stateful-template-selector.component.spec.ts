import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatefulTemplateSelectorComponent } from './stateful-template-selector.component';

describe('StatefulTemplateSelectorComponent', () => {
  let component: StatefulTemplateSelectorComponent;
  let fixture: ComponentFixture<StatefulTemplateSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatefulTemplateSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatefulTemplateSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
