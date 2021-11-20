import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { PolymorphContent } from 'src/app/custom-polymorpheus/types/content';

@Component({
  selector: 'app-my-tabs',
  templateUrl: './my-tabs.component.html',
  styleUrls: ['./my-tabs.component.scss'],
})
export class MyTabsComponent<T> implements OnInit {
  @Input('content') content: PolymorphContent<T> = ($implicit: T) => {
    return String($implicit);
  };
  @Input('context') context!: T;

  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit(): void {}
}
