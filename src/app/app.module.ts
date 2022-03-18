import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './modules/user/user.component';
import { TopComponent } from './layout/top/top.component';
import { BottomComponent } from './layout/bottom/bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    TopComponent,
    BottomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
