import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BlankPageRoutingModule } from './blank-routing.module';

import { BlankPage } from './blank.page';
import { MyHeaderModule } from '../my-header/my-header.component.module';
import { MyformComponent } from '../myform/myform.component';
import { ViewformComponent } from '../viewform/viewform.component';
import { UpdateformComponent } from '../updateform/updateform.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BlankPageRoutingModule,
    MyHeaderModule,
    ReactiveFormsModule
  ],
  declarations: [BlankPage, MyformComponent, ViewformComponent, UpdateformComponent]
})
export class BlankPageModule {}
