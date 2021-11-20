import { ChangeDetectorRef, Component } from '@angular/core';
import {
  PolymorpheusComponent,
  PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';
import { PolymorphComponentWrapper } from './custom-polymorpheus/classes/component';
import { MyTabComponent } from './my-tab/my-tab/my-tab.component';
import { CustomTab, TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LabPolymorh';

  myContext: number = 4;
  myComponentContent = new PolymorphComponentWrapper(MyTabComponent);

  constructor(private _cd: ChangeDetectorRef) {}
  //https://github.com/TinkoffCreditSystems/ng-polymorpheus/blob/v4.0.0/projects/ng-polymorpheus/src/classes/component.ts
  readonly content = new PolymorpheusComponent(TabComponent);

  customTabs: ReadonlyArray<CustomTab> | null = null;

  //PolymorpheusContent - https://github.com/TinkoffCreditSystems/ng-polymorpheus/blob/v4.0.0/projects/ng-polymorpheus/src/types/content.ts
  getTabs(content: PolymorpheusContent<any>): ReadonlyArray<CustomTab> {
    const customTabs = [
      {
        text: 'Alex Inkin',
        content,
      },
      {
        text: 'Messages',
        content: 3,
      },
      {
        text: 'Settings',
        content: 'gear',
      },
    ];

    this.customTabs = customTabs;

    return customTabs;
  }
}
