import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CapturePhotoComponent } from './capture-photo/capture-photo.component';
import { ListResultsComponent } from './list-results/list-results.component';
import { RouterModule } from '@angular/router';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CapturePhotoComponent,
    ListResultsComponent,
    OrderSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'list-results',
        component: ListResultsComponent
      },
      {
        path: 'order-summary',
        component: OrderSummaryComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
