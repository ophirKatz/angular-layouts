import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeLayoutComponentBase } from './layouts/tree-layout/tree-layout.component';

import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './groups/groups.component';
import { TemplateSelectorComponent } from './type-template-selector/type-template-selector.component';
import { GenericStringFormatPipe } from './generic-string-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TreeLayoutComponentBase,
    GroupsComponent,
    TemplateSelectorComponent,
    GenericStringFormatPipe,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
