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
  content: PolymorpheusContent<ContextWithActive<T>> = ({
    $implicit,
  }: ContextWithActive<T>) => String($implicit);

  getContext($implicit: T): ContextWithActive<T> {
    return {
      $implicit,
      active: true,
    };
  }
}

export interface ContextWithActive<T> {
  readonly active: boolean;
  readonly $implicit: T;
}
