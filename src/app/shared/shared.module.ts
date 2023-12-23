import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../material/material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';





@NgModule({
  declarations: [
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    ToolbarComponent,


  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    ToolbarComponent,
  ]
})
export class SharedModule { }
