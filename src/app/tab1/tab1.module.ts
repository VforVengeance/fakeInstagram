import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { 
        path: '',
        component: Tab1Page
      },
      { path: ':id',
       component: DetailComponent
       }
    ])
  ],
  declarations: [Tab1Page, DetailComponent]
})
export class Tab1PageModule {}
