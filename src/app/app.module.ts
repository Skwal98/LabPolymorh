import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PolymorpheusModule } from '@tinkoff/ng-polymorpheus';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabsComponent } from './tabs/tabs.component';
import { MyTabsComponent } from './my-tab/my-tabs/my-tabs.component';
import { PolymorphOutletDirective } from './custom-polymorpheus/directives/outlet.directive';
import { MyTabComponent } from './my-tab/my-tab/my-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabsComponent,
    MyTabsComponent,
    PolymorphOutletDirective,
    MyTabComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, PolymorpheusModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
