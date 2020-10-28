import { AService } from './a.service';
import { ConfigService } from './config.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreeLayoutComponentBase } from './layouts/tree-layout/tree-layout.component';

import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GroupsComponent } from './groups/groups.component';
import { TemplateSelectorComponent } from './type-template-selector/type-template-selector.component';
import { GenericStringFormatPipe } from './generic-string-format.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { IaInjectionToken } from './ia';
import { IbInjectionToken } from './ib';

@NgModule({
  declarations: [
    AppComponent,
    TreeLayoutComponentBase,
    GroupsComponent,
    TemplateSelectorComponent,
    GenericStringFormatPipe,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    ConfigService,
    {
      provide: IaInjectionToken,
      useClass: AService
    },
    {
      provide: IbInjectionToken,
      useClass: AService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
