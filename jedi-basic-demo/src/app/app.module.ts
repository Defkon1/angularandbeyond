import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BootstrapUiModule } from './bootstrap-ui/bootstrap-ui.module';
import { HomeComponent } from './home/home.component';
import { JediListComponent } from './jedi-list/jedi-list.component';
import { JediDetailComponent } from './jedi-detail/jedi-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    JediListComponent,
    JediDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BootstrapUiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
