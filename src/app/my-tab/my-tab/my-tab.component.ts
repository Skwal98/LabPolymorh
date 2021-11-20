import { Component, Inject, OnInit } from '@angular/core';
import { POLYMORPH_CONTEXT } from 'src/app/custom-polymorpheus/tokens/tokens';

@Component({
  selector: 'app-my-tab',
  templateUrl: './my-tab.component.html',
  styleUrls: ['./my-tab.component.scss'],
})
export class MyTabComponent<T> implements OnInit {
  constructor(@Inject(POLYMORPH_CONTEXT) readonly context: T) {}

  ngOnInit(): void {}
}
