import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TravelRequestComponent } from './travel-request/travel-request.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'travelRequest', component: TravelRequestComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TravelRequestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
