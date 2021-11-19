import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';

@NgModule({
  declarations: [AppComponent, TabComponent, TabsComponent],
  imports: [BrowserModule, AppRoutingModule, PolymorpheusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
