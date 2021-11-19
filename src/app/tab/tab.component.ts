import { Component, Inject, OnInit } from '@angular/core';
import {
  PolymorpheusContent,
  PolymorpheusTemplate,
  POLYMORPHEUS_CONTEXT,
} from '@tinkoff/ng-polymorpheus';
import { ContextWithActive } from '../tabs/tabs.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
})
export class TabComponent {
  constructor(
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: ContextWithActive<CustomTab>
  ) {}

  get text(): string {
    return this.context.$implicit.text;
  }

  get content(): PolymorpheusContent<never> | undefined {
    return this.context.$implicit.content;
  }

  get active(): boolean {
    return this.context.active;
  }

  get templateActive(): boolean {
    return (
      this.context.active &&
      this.context.$implicit.content instanceof PolymorpheusTemplate
    );
  }

  isNumber(primitive: number | string): primitive is number {
    return typeof primitive === 'number';
  }
}

export interface CustomTab {
  text: string;
  content?: PolymorpheusContent<never>;
}
