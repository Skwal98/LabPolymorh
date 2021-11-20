import {
  ChangeDetectorRef,
  Component,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  PolymorpheusComponent,
  PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';
import { PolymorphContent } from './custom-polymorpheus/types/content';
import { CustomTab, TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'LabPolymorh';

  myContent!: PolymorphContent<number>;
  myContext: number = 4;
  @ViewChild('myTemplate') set myTemplate(tmpl: TemplateRef<any>) {
    this.myContent = tmpl;
    this._cd.detectChanges();
  }

  /**
   *
   */
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
