import { Component, Input, OnInit } from '@angular/core';
import { PolymorpheusContent } from '@tinkoff/ng-polymorpheus';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent<T> implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input()
  tabs: ReadonlyArray<T> = [];

  @Input()
  activeTab: T | null = null;

  @Input()
  content: PolymorpheusContent<ContextWithActive<T>> = ({
    $implicit,
  }: ContextWithActive<T>) => {
    return String($implicit);
  };

  getContext($implicit: T): ContextWithActive<T> {
    console.log($implicit);
    return {
      $implicit,
      active: true,
    };
  }

  isActive(tab: T): boolean {
    return tab === this.activeTab;
  }

  onClick(tab: T) {
    this.activeTab = tab;
  }
}

export interface ContextWithActive<T> {
  readonly active: boolean;
  readonly $implicit: T;
}
